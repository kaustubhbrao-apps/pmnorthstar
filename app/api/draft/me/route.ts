import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ hasArchetype: false, attemptCount: 0 });
    }

    const attempts = await prisma.builderDraftAttempt.count({
      where: { userId: session.id },
    });

    return NextResponse.json({ hasArchetype: attempts > 0, attemptCount: attempts });
  } catch {
    return NextResponse.json({ hasArchetype: false, attemptCount: 0 });
  }
}
