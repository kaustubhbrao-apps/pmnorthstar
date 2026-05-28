// Start of the Google OAuth flow. Generates a CSRF state token,
// stashes it in an HTTP-only cookie, captures the post-login redirect
// (?next=), and bounces the browser to Google's consent screen.
//
// Callback at /api/auth/google/callback validates the state cookie
// matches the one Google returns and proceeds with token exchange.

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

export const runtime = "nodejs";

function safeNext(next: string | null): string {
  if (!next) return "/";
  if (!next.startsWith("/") || next.startsWith("//")) return "/";
  return next;
}

export async function GET(req: NextRequest) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      {
        error:
          "Google OAuth not configured. Set GOOGLE_CLIENT_ID and GOOGLE_REDIRECT_URI in .env",
      },
      { status: 500 }
    );
  }

  const next = safeNext(req.nextUrl.searchParams.get("next"));
  const state = crypto.randomBytes(32).toString("hex");

  // Stash state + intended next-url in HTTP-only cookies.
  // 10-minute TTL is plenty for the user to complete consent.
  const cookieStore = await cookies();
  cookieStore.set("ns_oauth_state", state, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 10,
    path: "/",
  });
  cookieStore.set("ns_oauth_next", next, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 10,
    path: "/",
  });

  const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", "openid email profile");
  url.searchParams.set("access_type", "online");
  url.searchParams.set("prompt", "select_account");
  url.searchParams.set("state", state);

  return NextResponse.redirect(url.toString());
}
