import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isKnownEventName } from "@/lib/analytics-events";

export const runtime = "nodejs";

// AnalyticsCount.eventKey is the table's primary key (prisma/schema.prisma),
// and this route is an unauthenticated POST. Without the bounds below, any
// caller can mint unlimited distinct keys and grow that table without limit.
// The event union in lib/track.ts is a type and is erased at build time, so
// the allowlist has to be a runtime value — see lib/analytics-events.ts.
const MAX_PROPS = 12;
const MAX_PROP_VALUE_LENGTH = 100;
const MAX_EVENT_KEY_LENGTH = 512;

export async function POST(req: NextRequest) {
  try {
    const event = await req.json();

    if (!event || typeof event !== "object" || Array.isArray(event)) {
      return NextResponse.json({ error: "Invalid event" }, { status: 400 });
    }

    const { name, ...props } = event as Record<string, unknown>;

    if (typeof name !== "string" || !isKnownEventName(name)) {
      // Unknown name: reject rather than record. A typo at a call site is a
      // bug worth surfacing, and an arbitrary name is an attempt to write a
      // row we never intended to exist.
      return NextResponse.json({ error: "Unknown event name" }, { status: 400 });
    }

    const keys = Object.keys(props).sort();
    if (keys.length > MAX_PROPS) {
      return NextResponse.json({ error: "Too many properties" }, { status: 400 });
    }

    // Truncate rather than reject: a long search query is legitimate traffic,
    // it just shouldn't become an unbounded primary key.
    const sortedProps = keys
      .map((k) => String(props[k]).slice(0, MAX_PROP_VALUE_LENGTH))
      .join("|");

    const eventKey = (sortedProps ? `${name}|${sortedProps}` : name).slice(
      0,
      MAX_EVENT_KEY_LENGTH,
    );

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
