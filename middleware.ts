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

// Global rate limit config for aggressive scrapers: 60 requests per 60 seconds
const GLOBAL_LIMIT = 60;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.reset) {
    rateLimitStore.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }

  record.count++;
  if (record.count > LIMIT) {
    return true;
  }

  return false;
}

function isGlobalRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = globalRateLimitStore.get(ip);

  if (!record || now > record.reset) {
    globalRateLimitStore.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }

  record.count++;
  if (record.count > GLOBAL_LIMIT) {
    return true;
  }

  return false;
}

// Strip invisible Unicode characters (non-breaking space, zero-width space,
// BOM) that occasionally end up in pasted URLs and turn legitimate paths
// into 404s. Observed in Vercel Analytics: /%C2%A0 (URL-encoded nbsp).
const INVISIBLE_CHARS = /%C2%A0|%E2%80%8B|%EF%BB%BF/gi;

// Removed USERNAME_REDIRECT_EXCLUDE since username redirect was removed

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ip = req.ip || "127.0.0.1";
  
  // ─── -1. Geo-Blocking for Known Scraper Regions ───
  // Block traffic originating from China (CN) and Singapore (SG)
  const country = req.geo?.country;
  if (country === "CN" || country === "SG") {
    console.warn(`Blocked request from banned country: ${country} (IP: ${ip})`);
    return new NextResponse("Access Denied: Region Blocked.", { status: 403 });
  }

  // ─── 0. Global Rate Limiting for Aggressive Scrapers ───
  // Protects all routes against headless browsers ripping the site.
  if (isGlobalRateLimited(ip)) {
    console.warn(`Global rate limit exceeded (Scraper blocked) for IP: ${ip} on ${pathname}`);
    return new NextResponse("Too many requests. Please slow down.", { status: 429 });
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
  const ua = req.headers.get("user-agent") || "";
  const SCRAPER_REGEX = /python-requests|scrapy|curl|wget|go-http-client|node-fetch|axios|libwww|urllib/i;
  
  if (SCRAPER_REGEX.test(ua)) {
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

