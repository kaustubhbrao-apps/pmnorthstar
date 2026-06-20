// SimulateIt landing page. Server component — pulls the latest
// published drill from the auto-generated data/drills.ts and renders
// a featured card plus a short pitch. Future-dated drills are filtered
// out by publishedDrills() at request time.

import Link from "next/link";
import { Sparkles, Brain, Clock, ChevronRight, ArrowUpRight } from "lucide-react";
import { SidebarShell } from "@/components/SidebarShell";
import { publishedDrills, type Drill } from "@/data/drills";
import { prisma } from "@/lib/prisma";

export const revalidate = 60; // ISR: Revalidate the leaderboard and play count every 60 seconds

// Site-wide drill-completion count for the hero social-proof line.
// Best-effort — a DB hiccup returns 0 and the line simply doesn't render.
async function totalPlays(): Promise<number> {
  try {
    return await prisma.simulateAttempt.count();
  } catch {
    return 0;
  }
}

const TYPE_BADGE: Record<Drill["type"], { label: string; color: string }> = {
  historical: { label: "Historical", color: "#9B8FFF" },
  current: { label: "Current", color: "#26A69A" },
  hypothetical: { label: "Hypothetical", color: "#F5C842" },
};

export default async function SimulatePage() {
  // In dev, surface every drill regardless of publishedAt so authoring
  // doesn't require date-juggling. Production respects the schedule.
  const isDev = process.env.NODE_ENV !== "production";
  const cutoff = isDev ? new Date("2099-12-31") : new Date();
  
  // Filter out active league matches. Expired league matches move to the regular library.
  const allPublished = publishedDrills(cutoff);
  
  // Calculate matchday numbers for league matches based on publish order
  const leagueMatches = allPublished.filter(d => d.isLeagueMatch).sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
  const matchdayMap = new Map(leagueMatches.map((d, i) => [d.slug, i + 1]));

  const all = allPublished.filter(d => {
    if (!d.isLeagueMatch) return true;
    // Include league matches if their time is over
    return d.leagueEndsAt && new Date(d.leagueEndsAt) <= new Date();
  });
  
  const featured = all[0];
  const plays = await totalPlays();

  // Season config (Mock for UI)
  const totalMatchdays = 50;
  const completedMatchdays = publishedDrills(cutoff).filter(d => d.isLeagueMatch && new Date(d.publishedAt) <= new Date()).length;

  return (
    <SidebarShell activeNav="simulate">
      <div className="px-4 sm:px-6 py-10 sm:py-16 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-5">
          <span
            className="w-5 h-px"
            style={{ background: "var(--brand-primary)" }}
          />
          <span
            className="text-sm font-mono uppercase"
            style={{
              color: "var(--brand-primary)",
              letterSpacing: "0.16em",
            }}
          >
            simulateit · northstar
          </span>
        </div>

        {/* Hero */}
        <h1
          className="font-display font-bold leading-[1.02] mb-4"
          style={{
            color: "var(--text-primary)",
            letterSpacing: "-0.035em",
            fontSize: "clamp(32px, 5vw, 56px)",
          }}
        >
          Practice the decisions that built<br className="hidden sm:block" />
          {" "}(and killed) every company you know.
        </h1>

        <p
          className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
          style={{ color: "var(--text-muted)" }}
        >
          Branching decision drills based on real startup moments. You make
          the calls, you see the consequences, you score across product
          thinking, business judgement, and founder instinct. Two new drills
          every week.
        </p>

        {plays > 0 && (
          <p
            className="text-sm font-mono uppercase mb-8 -mt-4"
            style={{
              color: "var(--text-faint)",
              letterSpacing: "0.12em",
            }}
          >
            <span style={{ color: "var(--brand-primary)" }}>
              {plays.toLocaleString()}
            </span>{" "}
            {plays === 1 ? "drill played" : "drills played"} so far
          </p>
        )}

        {/* Featured drill card */}
        {featured ? (
          <FeaturedDrillCard drill={featured} matchday={matchdayMap.get(featured.slug)} />
        ) : (
          <NoDrillYet />
        )}

        {/* What this is — 3 column explainer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 mb-12">
          <ExplainerTile
            icon={Brain}
            title="No memorization"
            body="Scenarios are anonymized. You can't pattern-match — you have to reason."
          />
          <ExplainerTile
            icon={Sparkles}
            title="Three dimensions"
            body="Every drill scores you on product thinking, business judgement, and founder calls."
          />
          <ExplainerTile
            icon={Clock}
            title="~10 minutes"
            body="Branching scenarios with rationales for every choice. Free, no signup."
          />
        </div>

        {/* Archive — all published drills */}
        {all.length > 1 && (
          <section className="mt-12">
            <h2
              className="font-display text-xl font-semibold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Past drills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {all.slice(1).map((d) => (
                <ArchiveCard key={d.slug} drill={d} matchday={matchdayMap.get(d.slug)} />
              ))}
            </div>
          </section>
        )}
      </div>
    </SidebarShell>
  );
}

function FeaturedDrillCard({ drill, matchday }: { drill: Drill; matchday?: number }) {
  const badge = TYPE_BADGE[drill.type];
  
  // Calculate max points to detect "the big one"
  let maxPoints = 0;
  if (drill.nodes && drill.nodes.start) {
    const calculateMaxPath = (nodeId: string, currentScore: number, visited: Set<string>) => {
      if (visited.has(nodeId)) return;
      const node = drill.nodes[nodeId];
      if (!node || !node.options || node.options.length === 0) {
        if (currentScore > maxPoints) maxPoints = currentScore;
        return;
      }
      
      visited.add(nodeId);
      for (const option of node.options) {
        const nextScore = currentScore + (option.points || 0);
        if (option.next) {
          calculateMaxPath(option.next, nextScore, new Set(visited));
        } else {
          if (nextScore > maxPoints) maxPoints = nextScore;
        }
      }
    };
    calculateMaxPath('start', 0, new Set());
  }
  
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes border-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .featured-drill-shimmer {
          position: relative;
        }
        .featured-drill-shimmer::before {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: 18px;
          background: linear-gradient(90deg, #FF4B4B, #F5C842, #50C878, #2563EB, #9B8FFF, #FF4B4B);
          background-size: 300% 300%;
          animation: border-shimmer 4s ease infinite;
          z-index: -1;
        }
      `}} />
      <div className="featured-drill-shimmer mb-6 z-0">
        <Link
          href={`/simulate/${drill.slug}`}
          className="block rounded-2xl overflow-hidden transition-all hover:opacity-95 group h-full"
          style={{
            background: "var(--card-bg)",
            border: "none",
            borderLeft: "none",
          }}
        >
          <div className="px-6 py-8 sm:px-10 sm:py-12 relative z-10" style={{ background: "var(--card-bg)", borderRadius: "15px" }}>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span
                className="text-sm font-mono uppercase px-2 py-1 rounded"
                style={{
                  background: "rgba(245, 200, 66, 0.15)",
                  color: "var(--text-primary)",
                  border: "1px solid #F5C842",
                  letterSpacing: "0.14em",
                }}
              >
                {matchday ? "Major Matchday" : "Featured drill"}
              </span>
              <span
                className="text-sm font-mono uppercase px-2 py-1 rounded"
                style={{
                  background: `color-mix(in srgb, ${badge.color} 14%, transparent)`,
                  color: "var(--text-primary)",
                  border: `1px solid ${badge.color}`,
                  letterSpacing: "0.14em",
                }}
              >
                {badge.label}
              </span>
              {matchday && (
                <span
                  className="px-3 py-1 rounded text-[11px] font-bold uppercase tracking-widest border"
                  style={{
                    borderColor: "var(--brand-primary)",
                    color: "var(--brand-primary)",
                    background: "color-mix(in srgb, var(--brand-primary) 10%, transparent)",
                  }}
                >
                  Matchday {matchday}
                </span>
              )}
              <span
                className="text-sm font-mono font-medium"
                style={{ color: "var(--text-faint)" }}
              >
                ~{drill.estimatedMinutes} min
              </span>
              {maxPoints > 0 && (
                <span
                  className="text-sm font-mono font-bold ml-auto animate-pulse"
                  style={{ color: "#F5C842" }}
                >
                  {maxPoints} PTS
                </span>
              )}
            </div>

            <h2
              className="font-display text-2xl sm:text-3xl font-bold mb-3"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              {drillTitle(drill)}
            </h2>

            <p
              className="text-sm sm:text-base leading-relaxed mb-5 line-clamp-4"
              style={{ color: "var(--text-muted)" }}
            >
              {drill.intro.split("\n\n")[0]}
            </p>

            <span className="btn-primary group" style={{ background: "#F5C842", color: "#000" }}>
              Play this drill
              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}

function ArchiveCard({ drill, matchday }: { drill: Drill; matchday?: number }) {
  const badge = TYPE_BADGE[drill.type];
  return (
    <Link
      href={`/simulate/${drill.slug}`}
      className="block rounded-xl px-5 py-5 transition-colors group"
      style={{
        background: "var(--card-bg)",
        border: "1.5px solid var(--card-border)",
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className="text-sm font-mono uppercase px-1.5 py-0.5 rounded"
          style={{
            background: `color-mix(in srgb, ${badge.color} 18%, transparent)`,
            color: "var(--text-primary)",
            border: `1px solid ${badge.color}`,
            letterSpacing: "0.12em",
          }}
        >
          {badge.label}
        </span>
        {matchday && (
          <span
            className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest border"
            style={{
              borderColor: "var(--brand-primary)",
              color: "var(--brand-primary)",
              background: "color-mix(in srgb, var(--brand-primary) 10%, transparent)",
            }}
          >
            Matchday {matchday}
          </span>
        )}
        <span
          className="text-sm font-mono"
          style={{ color: "var(--text-faint)" }}
        >
          ~{drill.estimatedMinutes} min
        </span>
      </div>
      <h3
        className="font-display text-base font-semibold mb-1 group-hover:underline"
        style={{ color: "var(--text-primary)" }}
      >
        {drillTitle(drill)}
      </h3>
      <p
        className="text-sm leading-relaxed line-clamp-2"
        style={{ color: "var(--text-muted)" }}
      >
        {drill.intro.split("\n\n")[0]}
      </p>
    </Link>
  );
}

function ExplainerTile({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Brain;
  title: string;
  body: string;
}) {
  return (
    <div
      className="rounded-xl px-4 py-4"
      style={{
        background: "var(--card-bg)",
        border: "1.5px solid var(--card-border)",
      }}
    >
      <Icon
        size={18}
        strokeWidth={1.8}
        style={{ color: "var(--brand-primary)" }}
        className="mb-2"
      />
      <h3
        className="text-sm font-semibold mb-1"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {body}
      </p>
    </div>
  );
}

function NoDrillYet() {
  return (
    <div
      className="rounded-2xl px-6 py-10 text-center"
      style={{
        background: "var(--card-bg)",
        border: "1.5px solid var(--card-border)",
      }}
    >
      <p
        className="text-sm"
        style={{ color: "var(--text-muted)" }}
      >
        First drill drops Friday, June 26 at 12:00am IST.
      </p>
    </div>
  );
}

function drillTitle(drill: Drill): string {
  // Derive a human-readable title from the slug. Eventually drills can
  // carry their own `title` field; for now slug-based is fine.
  return drill.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
