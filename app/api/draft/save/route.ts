import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { ok } = checkRateLimit(`save-draft-${session.id}`, 5, 60_000);
    if (!ok) {
      return NextResponse.json({ error: "Too many attempts." }, { status: 429 });
    }

    const body = await req.json();
    const { archetypeId, stats } = body as {
      archetypeId: string;
      stats: { vision: number; execution: number; chaos: number; defense: number; flair: number };
    };

    if (!archetypeId || !stats) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const attempt = await prisma.builderDraftAttempt.create({
      data: {
        userId: session.id,
        archetypeId,
        stats: stats as any,
      },
    });

    return NextResponse.json({ success: true, attemptId: attempt.id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
