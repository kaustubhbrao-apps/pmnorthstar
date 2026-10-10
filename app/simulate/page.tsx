// SimulateIt landing page. Server component — pulls the latest
// published drill from the auto-generated data/drills.ts and renders
// a featured card plus a short pitch. Future-dated drills are filtered
// out by publishedDrills() at request time.

import Link from "next/link";
import { drillTitle, normalizeDrillCategory } from "@/lib/drills";
import { Sparkles, Brain, Clock, ChevronRight, ArrowUpRight } from "lucide-react";
import { SidebarShell } from "@/components/SidebarShell";
import { publishedDrills, type Drill } from "@/data/drills";
import { DrillGrid, type DrillCard } from "./DrillGrid";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "SimulateIt — PM Case Simulations",
  description: "Step into real product crises and make the call. Time-boxed PM simulations built from actual startup decisions. Free, no signup required.",
  alternates: { canonical: "/simulate" },
  openGraph: { title: "SimulateIt — PM Case Simulations", description: "Step into real product crises and make the call." },
}; // ISR: revalidate the play count every 60 seconds

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

  // Every published drill is open to try — no league gating.
  const all = publishedDrills(cutoff);
  const featured = all[0];
  const plays = await totalPlays();

  // Lite, category-normalized data for the client-side filterable grid.
  // Deliberately narrow — the heavy `nodes` tree never reaches the browser.
  const drillCards: DrillCard[] = all.map((d) => ({
    slug: d.slug,
    title: drillTitle(d),
    type: d.type,
    estimatedMinutes: d.estimatedMinutes ?? 8,
    excerpt: (d.intro || "").split("\n\n")[0],
    category: normalizeDrillCategory(d.category),
  }));

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
          <FeaturedDrillCard drill={featured} />
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

        {/* Full library, filterable by category */}
        {all.length > 1 && <DrillGrid drills={drillCards} />}
      </div>
    </SidebarShell>
  );
}

function FeaturedDrillCard({ drill }: { drill: Drill }) {
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
                Featured drill
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


