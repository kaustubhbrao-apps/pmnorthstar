// Save a SimulateIt drill attempt to the user's history. Called from
// SimulatePlayer's outcome screen the moment a logged-in user finishes
// a drill. Anonymous users hit the login wall first; their localStorage
// attempt re-fires this endpoint on first authenticated visit.
//
// Body shape (kept narrow on purpose — server re-derives totals from
// pathTaken so the client can't fake scores):
//   { drillSlug: string, pathTaken: Array<{nodeId, optionIndex}> }

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { getDrillBySlug, publishedDrills } from "@/data/drills";
import type { DrillDimension } from "@/data/drills";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

interface PathStep {
  nodeId: string;
  optionIndex: number;
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    const { ok } = checkRateLimit(`save-attempt-${session.id}`, 10, 60_000);
    if (!ok) {
      return NextResponse.json({ error: "Too many attempts. Please slow down." }, { status: 429 });
    }

    const body = await req.json();
    const { drillSlug, pathTaken, ref } = body as {
      drillSlug?: string;
      pathTaken?: PathStep[];
      ref?: string;
    };

    if (!drillSlug || !Array.isArray(pathTaken) || pathTaken.length === 0) {
      return NextResponse.json(
        { error: "drillSlug and non-empty pathTaken required" },
        { status: 400 }
      );
    }

    const drill = getDrillBySlug(drillSlug);
    if (!drill) {
      return NextResponse.json(
        { error: `Unknown drill: ${drillSlug}` },
        { status: 404 }
      );
    }

    // Server-side score derivation — never trust client totals.
    let score = 0;
    let maxPossible = 0;
    const dims: Record<DrillDimension, { score: number; max: number }> = {
      product: { score: 0, max: 0 },
      business: { score: 0, max: 0 },
      founder: { score: 0, max: 0 },
      strategy: { score: 0, max: 0 },
    };
    let cursor = "start";
    for (const step of pathTaken) {
      if (step.nodeId !== cursor) {
        return NextResponse.json(
          {
            error: `pathTaken broken at node "${step.nodeId}" (expected "${cursor}")`,
          },
          { status: 400 }
        );
      }
      const node = drill.nodes[step.nodeId];
      if (!node || !node.options || node.isOutcome) {
        return NextResponse.json(
          { error: `Node "${step.nodeId}" is invalid or terminal` },
          { status: 400 }
        );
      }
      const opt = node.options[step.optionIndex];
      if (!opt) {
        return NextResponse.json(
          { error: `Option index ${step.optionIndex} out of range at "${step.nodeId}"` },
          { status: 400 }
        );
      }
      score += opt.points;
      const nodeMax = Math.max(...node.options.map((o) => o.points));
      maxPossible += nodeMax;
      if (node.dimension) {
        dims[node.dimension].score += opt.points;
        dims[node.dimension].max += nodeMax;
      }
      cursor = opt.leadsTo ?? "";
    }

    const finalNode = drill.nodes[cursor];
    if (!finalNode?.isOutcome) {
      return NextResponse.json(
        { error: `pathTaken did not terminate at an outcome node (ended at "${cursor}")` },
        { status: 400 }
      );
    }

    // ─── Simulation League Logic ─────────────────────────────────────────

    // 1. Is this the first attempt?
    const previousAttempt = await prisma.drillAttempt.findFirst({
      where: { userId: session.id, drillSlug },
    });
    const isFirstAttempt = !previousAttempt;

    // 2. Is this an active League Match within its scoring window?
    let isActiveLeagueMatch = false;
    
    if (drill.isLeagueMatch) {
      const now = new Date();
      if (drill.leagueEndsAt) {
        if (now <= new Date(drill.leagueEndsAt)) {
          isActiveLeagueMatch = true;
        }
      } else {
        // If no end date is specified, it's always active
        isActiveLeagueMatch = true;
      }
    }

    // 3. Points assignment
    let leaguePointsEarned = 0;
    if (isFirstAttempt && isActiveLeagueMatch) {
      leaguePointsEarned = score;
    }

    // 4. Record the attempt in a transaction to ensure points sync
    const attempt = await prisma.$transaction(async (tx) => {
      // Create the attempt
      const newAttempt = await tx.drillAttempt.create({
        data: {
          userId: session.id,
          drillSlug,
          score,
          maxPossible,
          productScore: dims.product.score,
          productMax: dims.product.max,
          businessScore: dims.business.score,
          businessMax: dims.business.max,
          founderScore: dims.founder.score,
          founderMax: dims.founder.max,
          strategyScore: dims.strategy.score,
          strategyMax: dims.strategy.max,
          pathTaken: pathTaken as unknown as object,
          isFirstAttempt,
          leaguePointsEarned,
        },
        select: {
          id: true,
          score: true,
          maxPossible: true,
          attemptedAt: true,
          isFirstAttempt: true,
          leaguePointsEarned: true,
        },
      });

      // Update user score
      if (leaguePointsEarned > 0) {
        await tx.user.update({
          where: { id: session.id },
          data: { leaguePoints: { increment: leaguePointsEarned } },
        });
      }

      // Process referral bonus
      if (ref && isActiveLeagueMatch) {
        // Resolve ref: it could be a UUID (legacy) or a username
        let referrerIdToUse = ref;
        if (!ref.includes("-")) {
          const referrerUser = await tx.user.findUnique({
            where: { username: ref },
            select: { id: true }
          });
          if (referrerUser) referrerIdToUse = referrerUser.id;
        }

        if (referrerIdToUse !== session.id) {
          // Attempt to insert a referral record (Unique constraint prevents abuse: one bonus per referrer per drill)
          try {
            await tx.leagueReferral.create({
              data: {
                referrerId: referrerIdToUse,
                referredId: session.id,
                drillSlug,
                points: 3,
              },
            });
            // Reward the referrer
            const referrerUser = await tx.user.update({
              where: { id: referrerIdToUse },
              data: { leaguePoints: { increment: 3 } },
              select: { username: true }
            });

            // Create an in-app notification
            const buddyName = session.username ? `@${session.username}` : session.name;
            const drillTitleStr = drill.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
            await tx.inAppNotification.create({
              data: {
                userId: referrerIdToUse,
                type: "referral_bonus",
                message: `${buddyName} played "${drillTitleStr}" using your link. You earned +3 League Points! 🏆`,
              }
            });
          } catch (e) {
            // Unique constraint violation or invalid referrerId. Safe to ignore.
          }
        }
      }

      return newAttempt;
    });

    return NextResponse.json({ ok: true, attempt });
  } catch (err) {
    console.error("save-attempt error:", err);
    return NextResponse.json(
      { error: "Failed to save attempt" },
      { status: 500 }
    );
  }
}
