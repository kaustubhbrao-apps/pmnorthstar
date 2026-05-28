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
import { getDrillBySlug } from "@/data/drills";
import type { DrillDimension } from "@/data/drills";

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

    const body = await req.json();
    const { drillSlug, pathTaken } = body as {
      drillSlug?: string;
      pathTaken?: PathStep[];
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
    // Walk pathTaken, sum points + max per dimension, validate each
    // step traces back to a legit leadsTo edge.
    let score = 0;
    let maxPossible = 0;
    const dims: Record<DrillDimension, { score: number; max: number }> = {
      product: { score: 0, max: 0 },
      business: { score: 0, max: 0 },
      founder: { score: 0, max: 0 },
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
      cursor = opt.leadsTo;
    }

    // Final node should be an outcome — sanity check.
    const finalNode = drill.nodes[cursor];
    if (!finalNode?.isOutcome) {
      return NextResponse.json(
        { error: `pathTaken did not terminate at an outcome node (ended at "${cursor}")` },
        { status: 400 }
      );
    }

    const attempt = await prisma.drillAttempt.create({
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
        pathTaken: pathTaken as unknown as object,
      },
      select: {
        id: true,
        score: true,
        maxPossible: true,
        attemptedAt: true,
      },
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
