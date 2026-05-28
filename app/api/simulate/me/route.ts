// Returns the logged-in user's SimulateIt stats — lifetime totals,
// per-dimension rollups, weekly streak, and recent attempts.
// Anonymous users get 401; the /simulate/me page handles redirect.
//
// All math runs at request time on the user's full attempt history.
// At scale we'd cache or move to a materialized view, but at this
// stage a single user has at most a few hundred attempts and the
// query is sub-50ms.

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Two timestamps fall in the same "week" if their ISO-week + ISO-year match.
// We use Monday as the week start to match the SimulateIt drop cadence.
function weekKey(d: Date): string {
  const date = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  // Set to Thursday of the same week to find the right ISO-year.
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNum = Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${date.getUTCFullYear()}-W${String(weekNum).padStart(2, "0")}`;
}

// Compute current and best streak of consecutive weeks with ≥1 attempt.
function computeStreaks(attemptDates: Date[]): { current: number; best: number } {
  if (attemptDates.length === 0) return { current: 0, best: 0 };

  const weeks = Array.from(new Set(attemptDates.map(weekKey))).sort();
  if (weeks.length === 0) return { current: 0, best: 0 };

  // Walk forward, counting consecutive weeks.
  let best = 1;
  let run = 1;
  for (let i = 1; i < weeks.length; i++) {
    const prev = weeks[i - 1];
    const curr = weeks[i];
    if (isConsecutiveWeek(prev, curr)) {
      run += 1;
      best = Math.max(best, run);
    } else {
      run = 1;
    }
  }

  // Current streak: does the most recent week's run reach the current week
  // (or last week — we don't punish someone for not having played yet this week).
  const lastWeek = weeks[weeks.length - 1];
  const thisWeek = weekKey(new Date());
  const lastWeekKey = weekKey(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
  const current = lastWeek === thisWeek || lastWeek === lastWeekKey ? run : 0;

  return { current, best };
}

function isConsecutiveWeek(a: string, b: string): boolean {
  // Brittle on year boundaries; good enough for the launch.
  const [ay, aw] = a.split("-W").map(Number);
  const [by, bw] = b.split("-W").map(Number);
  if (ay === by && bw === aw + 1) return true;
  if (by === ay + 1 && aw >= 52 && bw === 1) return true;
  return false;
}

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const attempts = await prisma.drillAttempt.findMany({
      where: { userId: session.id },
      orderBy: { attemptedAt: "desc" },
      select: {
        id: true,
        drillSlug: true,
        score: true,
        maxPossible: true,
        productScore: true,
        productMax: true,
        businessScore: true,
        businessMax: true,
        founderScore: true,
        founderMax: true,
        attemptedAt: true,
      },
    });

    const totalAttempts = attempts.length;
    const distinctDrills = new Set(attempts.map((a) => a.drillSlug)).size;

    const sum = attempts.reduce(
      (acc, a) => {
        acc.score += a.score;
        acc.max += a.maxPossible;
        acc.productScore += a.productScore;
        acc.productMax += a.productMax;
        acc.businessScore += a.businessScore;
        acc.businessMax += a.businessMax;
        acc.founderScore += a.founderScore;
        acc.founderMax += a.founderMax;
        return acc;
      },
      {
        score: 0,
        max: 0,
        productScore: 0,
        productMax: 0,
        businessScore: 0,
        businessMax: 0,
        founderScore: 0,
        founderMax: 0,
      }
    );

    const pct = (n: number, d: number) => (d === 0 ? 0 : n / d);

    const { current: currentStreak, best: bestStreak } = computeStreaks(
      attempts.map((a) => a.attemptedAt)
    );

    return NextResponse.json({
      user: { id: session.id, name: session.name, email: session.email },
      stats: {
        totalAttempts,
        distinctDrills,
        lifetimeAccuracy: pct(sum.score, sum.max),
        currentStreak,
        bestStreak,
        dimensions: {
          product: {
            score: sum.productScore,
            max: sum.productMax,
            accuracy: pct(sum.productScore, sum.productMax),
          },
          business: {
            score: sum.businessScore,
            max: sum.businessMax,
            accuracy: pct(sum.businessScore, sum.businessMax),
          },
          founder: {
            score: sum.founderScore,
            max: sum.founderMax,
            accuracy: pct(sum.founderScore, sum.founderMax),
          },
        },
      },
      recent: attempts.slice(0, 10).map((a) => ({
        id: a.id,
        drillSlug: a.drillSlug,
        score: a.score,
        maxPossible: a.maxPossible,
        attemptedAt: a.attemptedAt.toISOString(),
      })),
    });
  } catch (err) {
    console.error("simulate/me error:", err);
    return NextResponse.json({ error: "Failed to load stats" }, { status: 500 });
  }
}
