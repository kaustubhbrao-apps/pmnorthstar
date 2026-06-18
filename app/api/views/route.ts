import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { path } = await req.json();
    if (!path || typeof path !== "string") {
      return NextResponse.json({ error: "Invalid path" }, { status: 400 });
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
