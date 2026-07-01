// Google OAuth callback. Validates the CSRF state, exchanges the auth
// code for tokens, fetches the user profile, finds-or-creates a User
// row (linking by email when an existing email/password account
// matches), sets the session cookie, and redirects to ?next=.
//
// Linking rule: if a user already exists with the same email and no
// googleId, we attach the googleId rather than creating a duplicate.
// This lets someone who signed up with email later "upgrade" to
// Google sign-in without losing their data.

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { signToken, setTokenCookie } from "@/lib/auth";

export const runtime = "nodejs";

interface GoogleTokenResponse {
  access_token: string;
  expires_in: number;
  id_token: string;
  scope: string;
  token_type: string;
}

interface GoogleUserInfo {
  sub: string; // Google ID
  email: string;
  email_verified: boolean;
  name: string;
  picture?: string;
}

function safeNext(nextRaw: string | null): string {
  if (!nextRaw) return "/";
  try {
    const next = decodeURIComponent(nextRaw);
    if (!next.startsWith("/") || next.startsWith("//")) return "/";
    return next;
  } catch {
    return "/";
  }
}

function errorRedirect(req: NextRequest, code: string): NextResponse {
  const url = new URL("/login", req.nextUrl.origin);
  url.searchParams.set("error", code);
  return NextResponse.redirect(url);
}

export async function GET(req: NextRequest) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;

  const isDev = process.env.NODE_ENV !== "production";

  if (!isDev) {
    if (!clientId || !clientSecret || !redirectUri) {
      return errorRedirect(req, "oauth_not_configured");
    }
  }

  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");

  if (!code || !state) {
    return errorRedirect(req, "missing_code_or_state");
  }

  // Verify the state cookie matches what Google returned.
  const cookieStore = await cookies();
  const expectedState = cookieStore.get("ns_oauth_state")?.value;
  const next = safeNext(cookieStore.get("ns_oauth_next")?.value ?? "/");

  // Clear the OAuth cookies regardless of outcome.
  cookieStore.delete("ns_oauth_state");
  cookieStore.delete("ns_oauth_next");

  if (!expectedState || expectedState !== state) {
    return errorRedirect(req, "state_mismatch");
  }

  try {
    let profile: GoogleUserInfo;

  if (isDev && code === "mock_code") {
    profile = {
      sub: "mock_google_id_123",
      email: "founder@example.com",
      email_verified: true,
      name: "Mock Founder",
    };
  } else {
    // Exchange code for tokens.
    try {
      const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          code,
          client_id: clientId!,
          client_secret: clientSecret!,
          redirect_uri: redirectUri!,
          grant_type: "authorization_code",
        }).toString(),
      });

      if (!tokenRes.ok) {
        const errText = await tokenRes.text();
        console.error("Google token exchange failed:", errText);
        return errorRedirect(req, "token_exchange_failed");
      }

      const tokens = (await tokenRes.json()) as GoogleTokenResponse;

      // Fetch user profile.
      const userRes = await fetch(
        "https://openidconnect.googleapis.com/v1/userinfo",
        {
          headers: { Authorization: `Bearer ${tokens.access_token}` },
        }
      );

      if (!userRes.ok) {
        console.error("Google userinfo failed:", await userRes.text());
        return errorRedirect(req, "userinfo_failed");
      }

      profile = (await userRes.json()) as GoogleUserInfo;
    } catch (e) {
      console.error(e);
      return errorRedirect(req, "network_error");
    }
  }

  if (!profile.email_verified) {
    return errorRedirect(req, "email_not_verified");
  }

    // ── Auto-username derivation ──────────────────────────────────
    // Derive a username from the email prefix: strip everything that
    // isn't a lowercase letter, digit, or underscore, then truncate
    // to 20 chars. If the result is too short (<3), pad with random
    // digits. If taken, append _XX until we find an available one.
    const deriveUsername = async (email: string): Promise<string> => {
      const base = email
        .split("@")[0]
        .toLowerCase()
        .replace(/[^a-z0-9_]/g, "")
        .slice(0, 20);

      const candidate = base.length >= 3 ? base : base.padEnd(3, String(Math.floor(Math.random() * 1000)).padStart(3, "0"));

      // Check availability
      const existing = await prisma.user.findUnique({
        where: { username: candidate },
        select: { id: true },
      });

      if (!existing) return candidate;

      // Collision — try up to 20 suffixed variants
      for (let i = 1; i <= 20; i++) {
        const suffixed = `${candidate.slice(0, 17)}_${String(i).padStart(2, "0")}`;
        const taken = await prisma.user.findUnique({
          where: { username: suffixed },
          select: { id: true },
        });
        if (!taken) return suffixed;
      }

      // Fallback: random suffix
      const fallback = `${candidate.slice(0, 14)}_${Date.now().toString(36).slice(-5)}`;
      return fallback;
    }

    // Find-or-create the user, with email-based linking.
    const email = profile.email.toLowerCase().trim();
    let user = await prisma.user.findUnique({ where: { googleId: profile.sub } });

    if (!user) {
      // Try to link to an existing email/password account with the same email.
      const existingByEmail = await prisma.user.findUnique({ where: { email } });
      if (existingByEmail && !existingByEmail.googleId) {
        // Auto-assign username if missing
        const username = existingByEmail.username || await deriveUsername(email);
        user = await prisma.user.update({
          where: { id: existingByEmail.id },
          data: {
            googleId: profile.sub,
            name: existingByEmail.name || profile.name,
            image: existingByEmail.image ?? profile.picture ?? null,
            lastLoginAt: new Date(),
            ...(!existingByEmail.username ? { username, usernameChangedAt: new Date() } : {}),
          },
        });
      } else if (existingByEmail) {
        // Edge case: email already linked to a different Google ID.
        return errorRedirect(req, "email_collision");
      } else {
        // Brand new user — auto-assign username from email.
        const username = await deriveUsername(email);
        user = await prisma.user.create({
          data: {
            email,
            name: profile.name || email.split("@")[0],
            googleId: profile.sub,
            image: profile.picture ?? null,
            lastLoginAt: new Date(),
            username,
            usernameChangedAt: new Date(),
          },
        });
      }
    } else {
      // Returning Google user — backfill username if missing + bump lastLoginAt.
      if (!user.username) {
        const username = await deriveUsername(user.email);
        user = await prisma.user.update({
          where: { id: user.id },
          data: { lastLoginAt: new Date(), username, usernameChangedAt: new Date() },
        });
      } else {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { lastLoginAt: new Date() },
        });
      }
    }

    // Issue our own session token. Next.js sometimes drops cookies().set() 
    // when followed immediately by NextResponse.redirect(), so we set it on the response.
    const token = await signToken(user.id, user.username);
    
    const response = NextResponse.redirect(new URL(next, req.nextUrl.origin));
    response.cookies.set("northstar_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Google OAuth callback error:", err);
    return errorRedirect(req, "unexpected_error");
  }
}
