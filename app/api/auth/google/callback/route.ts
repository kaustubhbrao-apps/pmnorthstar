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

function safeNext(next: string | null): string {
  if (!next) return "/";
  if (!next.startsWith("/") || next.startsWith("//")) return "/";
  return next;
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

  if (!clientId || !clientSecret || !redirectUri) {
    return errorRedirect(req, "oauth_not_configured");
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

  // Exchange code for tokens.
  try {
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
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

    const profile = (await userRes.json()) as GoogleUserInfo;

    if (!profile.email_verified) {
      return errorRedirect(req, "email_not_verified");
    }

    // Find-or-create the user, with email-based linking.
    const email = profile.email.toLowerCase().trim();
    let user = await prisma.user.findUnique({ where: { googleId: profile.sub } });

    if (!user) {
      // Try to link to an existing email/password account with the same email.
      const existingByEmail = await prisma.user.findUnique({ where: { email } });
      if (existingByEmail && !existingByEmail.googleId) {
        user = await prisma.user.update({
          where: { id: existingByEmail.id },
          data: {
            googleId: profile.sub,
            // Backfill name and image if missing.
            name: existingByEmail.name || profile.name,
            image: existingByEmail.image ?? profile.picture ?? null,
            lastLoginAt: new Date(),
          },
        });
      } else if (existingByEmail) {
        // Edge case: email already linked to a different Google ID.
        // Block the login so we don't silently overwrite an account.
        return errorRedirect(req, "email_collision");
      } else {
        // Brand new user.
        user = await prisma.user.create({
          data: {
            email,
            name: profile.name || email.split("@")[0],
            googleId: profile.sub,
            image: profile.picture ?? null,
            lastLoginAt: new Date(),
          },
        });
      }
    } else {
      // Returning Google user — bump lastLoginAt.
      user = await prisma.user.update({
        where: { id: user.id },
        data: { lastLoginAt: new Date() },
      });
    }

    // Issue our own session token (matches existing /api/auth/login).
    const token = await signToken(user.id, user.username);
    await setTokenCookie(token);

    return NextResponse.redirect(new URL(next, req.nextUrl.origin));
  } catch (err) {
    console.error("Google OAuth callback error:", err);
    return errorRedirect(req, "unexpected_error");
  }
}
