import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { checkRateLimit } from "@/lib/rate-limit";

const RESERVED_USERNAMES = [
  "admin", "northstar", "moderator", "mod", "support", "help", "system", 
  "null", "undefined", "anonymous", "root", "superuser", "test", "bot", 
  "official", "staff", "team", "pmnorthstar", "checkit", "simulateit", 
  "simulate", "league", "api", "www", "mail", "ftp", "ssh"
];

function isValidUsername(username: string): boolean {
  if (username.length < 3 || username.length > 20) return false;
  return /^[a-z0-9_]+$/.test(username);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  if (!q) {
    return NextResponse.json({ available: false, reason: "Query required" }, { status: 400 });
  }

  // Basic rate limit for GET by IP
  const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
  const { ok } = checkRateLimit(`username-check-${ip}`, 30, 60_000);
  if (!ok) {
    return NextResponse.json({ available: false, reason: "Too many requests" }, { status: 429 });
  }

  const username = q.toLowerCase();

  if (!isValidUsername(username)) {
    return NextResponse.json({ available: false, reason: "3-20 lowercase letters, numbers, and underscores only" });
  }

  if (RESERVED_USERNAMES.includes(username)) {
    return NextResponse.json({ available: false, reason: "This username is reserved" });
  }

  const existingUser = await prisma.user.findUnique({
    where: { username },
    select: { id: true },
  });

  if (existingUser) {
    return NextResponse.json({ available: false, reason: "Username is already taken" });
  }

  return NextResponse.json({ available: true });
}

export async function POST(req: Request) {
  try {
    const user = await getSession();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Rate limit for POST by user ID
    const { ok } = checkRateLimit(`username-set-${user.id}`, 5, 60_000);
    if (!ok) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = await req.json();
    const { username } = body;

    if (!username || typeof username !== "string") {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    const normalizedUsername = username.toLowerCase();

    if (!isValidUsername(normalizedUsername)) {
      return NextResponse.json({ error: "Invalid username format" }, { status: 400 });
    }

    if (RESERVED_USERNAMES.includes(normalizedUsername)) {
      return NextResponse.json({ error: "This username is reserved" }, { status: 400 });
    }

    // Check if user already changed it in the last 30 days
    const fullUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: { usernameChangedAt: true },
    });

    if (fullUser?.usernameChangedAt) {
      const daysSinceChange = (Date.now() - fullUser.usernameChangedAt.getTime()) / (1000 * 60 * 60 * 24);
      if (daysSinceChange < 30) {
        const daysRemaining = Math.ceil(30 - daysSinceChange);
        return NextResponse.json({ error: `You can change your username again in ${daysRemaining} days` }, { status: 403 });
      }
    }

    // Attempt the update (relying on DB unique constraint to handle race conditions)
    try {
      await prisma.user.update({
        where: { id: user.id },
        data: { 
          username: normalizedUsername,
          usernameChangedAt: new Date()
        },
      });

      return NextResponse.json({ ok: true, username: normalizedUsername });
    } catch (e: any) {
      if (e.code === 'P2002') {
        return NextResponse.json({ error: "Username is already taken" }, { status: 409 });
      }
      throw e;
    }
  } catch (error) {
    console.error("Username update error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
