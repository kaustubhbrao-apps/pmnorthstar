import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const event = await req.json();
    const { name, ...props } = event;

    if (!name || typeof name !== "string") {
      return NextResponse.json({ error: "Invalid event name" }, { status: 400 });
    }

    // Sort properties to create a consistent deterministic key
    const sortedProps = Object.keys(props)
      .sort()
      .map((k) => String(props[k]))
      .join("|");

    const eventKey = sortedProps ? `${name}|${sortedProps}` : name;

    await prisma.analyticsCount.upsert({
      where: { eventKey },
      create: { eventKey, name, count: 1 },
      update: { count: { increment: 1 } },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Supabase tracking error:", err);
    // Never fail the client if DB has a hiccup
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
