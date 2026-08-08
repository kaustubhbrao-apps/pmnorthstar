import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Sliding window rate limit store (In-memory on the Edge)
// Note: This is per-edge-region and per-instance. It's not a global sync
// (like Redis), but it's extremely effective at stopping script-based spam
// and basic Layer 7 DDoS without adding latency or cost.
const rateLimitStore = new Map<string, { count: number; reset: number }>();
const globalRateLimitStore = new Map<string, { count: number; reset: number }>();

// Rate limit config: 5 requests per 60 seconds
const LIMIT = 5;
const WINDOW_MS = 60 * 1000;

// Global rate limit for ordinary traffic. Was 60/min, which a genuine reader
// opening several articles in quick succession could trip (each page pulls
// its own subresources through this matcher).
const GLOBAL_LIMIT = 120;

// Search crawlers bypass the global limit entirely (see SEARCH_CRAWLER_REGEX)
// but still get a ceiling, so a spoofed Googlebot UA can't rip the whole site
// unbounded. Sized well above anything a real crawler needs for ~235 URLs.
const CRAWLER_LIMIT = 1000;

// Evict expired records so the Map can't grow without bound on a long-lived
// edge instance. Cheap: only sweeps once the store is already large.
const MAX_STORE_ENTRIES = 10_000;

function sweepExpired(store: Map<string, { count: number; reset: number }>, now: number) {
  if (store.size < MAX_STORE_ENTRIES) return;
  // forEach rather than for..of — the project's TS target predates
  // downlevelIteration for Map. Deleting during Map.forEach is well-defined.
  store.forEach((record, key) => {
    if (now > record.reset) store.delete(key);
  });
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.reset) {
    sweepExpired(rateLimitStore, now);
    rateLimitStore.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }

  record.count++;
  if (record.count > LIMIT) {
    return true;
  }

  return false;
}

function isGlobalRateLimited(ip: string, limit: number): boolean {
  const now = Date.now();
  const record = globalRateLimitStore.get(ip);

  if (!record || now > record.reset) {
    sweepExpired(globalRateLimitStore, now);
    globalRateLimitStore.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }

  record.count++;
  if (record.count > limit) {
    return true;
  }

  return false;
}

// ─── Search crawlers ───
// These must never be geo-blocked or rate limited. Returning 429/403 to
// Googlebot is read by its crawl scheduler as "back off", which collapses
// crawl rate and eventually drops URLs from the index — the site was
// serving 429 to Googlebot from request 61 of every minute.
//
// UA matching is spoofable, which is why crawlers still get CRAWLER_LIMIT
// rather than a blank cheque. Reverse-DNS verification (the unspoofable
// check) isn't available in the edge runtime; the tradeoff is deliberate,
// since the cost of throttling a real Googlebot is far higher than the
// cost of a spoofer getting a larger quota.
const SEARCH_CRAWLER_REGEX =
  /googlebot|google-inspectiontool|google-extended|storebot-google|adsbot-google|bingbot|duckduckbot|yandexbot|baiduspider|applebot|slurp|petalbot/i;

// Crawl-critical endpoints. Never throttled for anyone — if Google can't
// read these, nothing else about the site's SEO matters.
const ALWAYS_ALLOW = new Set(["/robots.txt", "/sitemap.xml"]);

// Strip invisible Unicode characters (non-breaking space, zero-width space,
// BOM) that occasionally end up in pasted URLs and turn legitimate paths
// into 404s. Observed in Vercel Analytics: /%C2%A0 (URL-encoded nbsp).
const INVISIBLE_CHARS = /%C2%A0|%E2%80%8B|%EF%BB%BF/gi;

// Removed USERNAME_REDIRECT_EXCLUDE since username redirect was removed

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Fall back to the forwarded header rather than a constant: if req.ip were
  // ever undefined, a shared literal would bucket ALL visitors together and
  // rate limit the entire site as one client.
  const ip =
    req.ip ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const ua = req.headers.get("user-agent") || "";
  const isSearchCrawler = SEARCH_CRAWLER_REGEX.test(ua);

  // ─── -2. Crawl-Critical Endpoints ───
  // robots.txt and sitemap.xml short-circuit everything below.
  if (ALWAYS_ALLOW.has(pathname)) {
    return NextResponse.next();
  }

  // ─── -1. Geo-Blocking for Known Scraper Regions ───
  // Block traffic originating from China (CN) and Singapore (SG).
  // Search crawlers are exempt — Google crawls locale-adaptive sites from
  // multiple regions, and a 403 to a crawler is a de-indexing signal.
  const country = req.geo?.country;
  if (!isSearchCrawler && (country === "CN" || country === "SG")) {
    console.warn(`Blocked request from banned country: ${country} (IP: ${ip})`);
    return new NextResponse("Access Denied: Region Blocked.", { status: 403 });
  }

  // ─── 0. Global Rate Limiting for Aggressive Scrapers ───
  // Protects all routes against headless browsers ripping the site.
  const globalLimit = isSearchCrawler ? CRAWLER_LIMIT : GLOBAL_LIMIT;
  if (isGlobalRateLimited(ip, globalLimit)) {
    console.warn(`Global rate limit exceeded for IP: ${ip} on ${pathname} (crawler=${isSearchCrawler})`);
    // 503 + Retry-After is the correct "try again shortly" signal for an
    // automated client; 429 without Retry-After reads as a hard throttle.
    return new NextResponse("Too many requests. Please slow down.", {
      status: isSearchCrawler ? 503 : 429,
      headers: { "Retry-After": "60" },
    });
  }

  // ─── 1. Rate Limiting for CheckIt Audit ───
  // This is the most expensive route (calls external fetch + DB write).
  if (pathname.startsWith("/api/checkit/audit")) {
    if (isRateLimited(ip)) {
      console.warn(`Rate limit exceeded for IP: ${ip} on ${pathname}`);
      return new NextResponse(
        JSON.stringify({ 
          error: "Too many audits. Please wait a minute before trying again.",
          rateLimited: true 
        }),
        { 
          status: 429, 
          headers: { "Content-Type": "application/json" } 
        }
      );
    }
  }

  // ─── 2. Block Automated Scrapers (Anti-Bot) ───
  // Scrapers cause 100% bounce rates and waste bandwidth.
  const SCRAPER_REGEX = /python-requests|scrapy|curl|wget|go-http-client|node-fetch|axios|libwww|urllib/i;

  if (!isSearchCrawler && SCRAPER_REGEX.test(ua)) {
    console.warn(`Blocked scraper bot: ${ua} from IP: ${ip}`);
    return new NextResponse("Scraping prohibited.", { status: 403 });
  }

  // ─── 3. URL Sanitization (Existing Logic) ───
  if (INVISIBLE_CHARS.test(pathname)) {
    const cleaned = pathname.replace(INVISIBLE_CHARS, "");
    const url = req.nextUrl.clone();
    url.pathname = cleaned || "/";
    return NextResponse.redirect(url, 308);
  }

  // ─── 3. Username Redirect (League) ───
  // No longer needed — usernames are now auto-derived from email
  // during Google OAuth sign-in. Kept as a comment for history.

  return NextResponse.next();
}

export const config = {
  // We now include /api in the matcher so we can rate limit the audit tool.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

