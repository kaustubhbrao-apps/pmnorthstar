import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

// PageView.path is the table's primary key (prisma/schema.prisma), and this
// route is an unauthenticated POST — so an unvalidated `path` lets any caller
// create unlimited rows. ViewCounter only ever posts one of the five content
// prefixes below, and every slug in content/ and data/ is [a-z0-9-] with a
// max length of 42, so this shape check costs nothing legitimate.
const VIEWABLE_PATH = /^\/(ai-decoded|compare|book|case-study|topics)\/[a-z0-9][a-z0-9-]{0,99}$/;

export async function POST(req: NextRequest) {
  try {
    const { path } = await req.json();
    if (!path || typeof path !== "string") {
      return NextResponse.json({ error: "Invalid path" }, { status: 400 });
    }
    if (!VIEWABLE_PATH.test(path)) {
      return NextResponse.json({ error: "Unrecognised path" }, { status: 400 });
    }

    // Atomic increment (upsert creates if it doesn't exist)
    const view = await prisma.pageView.upsert({
      where: { path },
      create: { path, count: 1 },
      update: { count: { increment: 1 } },
    });

    return NextResponse.json({ views: view.count });
  } catch (err) {
    console.error("View tracking error:", err);
    // Never fail the client if DB has a hiccup
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
