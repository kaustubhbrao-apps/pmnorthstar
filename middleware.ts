import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

// Sliding window rate limit store (In-memory on the Edge)
// Note: This is per-edge-region and per-instance. It's not a global sync 
// (like Redis), but it's extremely effective at stopping script-based spam 
// and basic Layer 7 DDoS without adding latency or cost.
const rateLimitStore = new Map<string, { count: number; reset: number }>();

// Rate limit config: 5 requests per 60 seconds
const LIMIT = 5;
const WINDOW_MS = 60 * 1000;

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

// Strip invisible Unicode characters (non-breaking space, zero-width space,
// BOM) that occasionally end up in pasted URLs and turn legitimate paths
// into 404s. Observed in Vercel Analytics: /%C2%A0 (URL-encoded nbsp).
const INVISIBLE_CHARS = /%C2%A0|%E2%80%8B|%EF%BB%BF/gi;

// Paths that should be excluded from the username redirect
const USERNAME_REDIRECT_EXCLUDE = new Set([
  "/pick-username",
  "/api/auth/username",
  "/api/auth/logout",
  "/api/auth/me",
  "/api/auth/google/start",
  "/api/auth/google/callback",
  "/login",
]);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ip = req.ip || "127.0.0.1";

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

  // ─── 2. URL Sanitization (Existing Logic) ───
  if (INVISIBLE_CHARS.test(pathname)) {
    const cleaned = pathname.replace(INVISIBLE_CHARS, "");
    const url = req.nextUrl.clone();
    url.pathname = cleaned || "/";
    return NextResponse.redirect(url, 308);
  }

  // ─── 3. Username Redirect (League) ───
  // When the league is enabled, logged-in users without a username must
  // pick one before they can access any page. We decode the JWT to check
  // for the `username` field without hitting the DB on every request.
  const leagueEnabled = process.env.NEXT_PUBLIC_ENABLE_LEAGUE === "true";
  if (
    leagueEnabled &&
    !USERNAME_REDIRECT_EXCLUDE.has(pathname) &&
    !pathname.startsWith("/api/") &&
    !pathname.startsWith("/_next/") &&
    !pathname.startsWith("/favicon") &&
    !pathname.endsWith(".svg") &&
    !pathname.endsWith(".png") &&
    !pathname.endsWith(".ico")
  ) {
    const token = req.cookies.get("northstar_token")?.value;
    if (token) {
      try {
        const secret = new TextEncoder().encode(
          process.env.JWT_SECRET || "dev-secret-do-not-use-in-prod"
        );
        const { payload } = await jwtVerify(token, secret);
        // If the JWT has a userId but no username, redirect
        if (payload.userId && !payload.username) {
          const url = req.nextUrl.clone();
          url.pathname = "/pick-username";
          url.searchParams.set("next", pathname);
          return NextResponse.redirect(url);
        }
      } catch {
        // Invalid/expired token — let them through, they'll hit the
        // login flow naturally
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  // We now include /api in the matcher so we can rate limit the audit tool.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo-icon.svg|logo-cover.svg).*)",
  ],
};

