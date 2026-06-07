// SimulateIt landing page. Server component — pulls the latest
// published drill from the auto-generated data/drills.ts and renders
// a featured card plus a short pitch. Future-dated drills are filtered
// out by publishedDrills() at request time.

import Link from "next/link";
import { ArrowUpRight, Brain, Clock, Target, Trophy } from "lucide-react";
import { SidebarShell } from "@/components/SidebarShell";
import { publishedDrills, type Drill } from "@/data/drills";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { isLeagueVisible } from "@/lib/admin";

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

async function getLeaderboard() {
  try {
    return await prisma.user.findMany({
      where: { leaguePoints: { gt: 0 } },
      orderBy: { leaguePoints: 'desc' },
      take: 10,
      select: { 
        id: true, 
        name: true, 
        username: true,
        leaguePoints: true,
        image: true,
        _count: {
          select: { drillAttempts: { where: { leaguePointsEarned: { gt: 0 } } } }
        }
      }
    });
  } catch {
    return [];
  }
}

async function getUserRank(userId: string, userPoints: number) {
  try {
    const rank = await prisma.user.count({ where: { leaguePoints: { gt: userPoints } } }) + 1;
    const total = await prisma.user.count({ where: { leaguePoints: { gt: 0 } } });
    return { rank, total };
  } catch {
    return { rank: 0, total: 0 };
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
  const all = publishedDrills(cutoff);
  const featured = all[0];
  const plays = await totalPlays();
  const leaderboard = await getLeaderboard();
  const session = await getSession();
  const showLeague = isLeagueVisible(session);
  
  let userRankInfo = null;
  const isUserInTop10 = session ? leaderboard.some(u => u.id === session.id) : false;
  
  if (session && !isUserInTop10) {
    const user = await prisma.user.findUnique({ where: { id: session.id }, select: { leaguePoints: true, username: true, name: true, image: true, _count: { select: { drillAttempts: { where: { leaguePointsEarned: { gt: 0 } } } } } } });
    if (user && user.leaguePoints > 0) {
      const { rank } = await getUserRank(session.id, user.leaguePoints);
      userRankInfo = { ...user, id: session.id, rank };
    }
  }

  // Season config (Mock for UI)
  const totalMatchdays = 50;
  const completedMatchdays = all.filter(d => d.isLeagueMatch && new Date(d.publishedAt) <= new Date()).length;

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
            icon={Target}
            title="Three dimensions"
            body="Every drill scores you on product thinking, business judgement, and founder calls."
          />
          {showLeague ? (
            <ExplainerTile
              icon={Trophy}
              title="Simulation League"
              body="Log in to play for points. Compete on the leaderboard and earn bonuses by challenging friends."
            />
          ) : (
            <ExplainerTile
              icon={Clock}
              title="~10 minutes"
              body="Branching scenarios with rationales for every choice. Free, no signup."
            />
          )}
        </div>

        {/* The League Leaderboard */}
        {showLeague && leaderboard.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <Trophy size={20} strokeWidth={2} style={{ color: "var(--brand-primary)" }} />
                <h2
                  className="font-display text-2xl font-bold"
                  style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
                >
                  Season 1 Standings
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono" style={{ color: "var(--text-faint)" }}>
                <span>Matchday {completedMatchdays} of {totalMatchdays}</span>
                <div className="w-24 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div 
                    className="h-full bg-brand-primary" 
                    style={{ 
                      width: `${(completedMatchdays / totalMatchdays) * 100}%`,
                      background: "var(--brand-primary)"
                    }} 
                  />
                </div>
              </div>
            </div>
            
            <div 
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--card-bg)",
                border: "1.5px solid var(--card-border)",
              }}
            >
              <div className="grid grid-cols-[3rem_1fr_8rem_6rem] items-center px-5 py-3 border-b text-xs font-mono uppercase tracking-wider" style={{ borderColor: "var(--card-border)", background: "rgba(255,255,255,0.02)" }}>
                <span style={{ color: "var(--text-faint)" }}>Pos</span>
                <span style={{ color: "var(--text-faint)" }}>Player</span>
                <span className="text-right" style={{ color: "var(--text-faint)" }}>Played</span>
                <span className="text-right" style={{ color: "var(--text-faint)" }}>Points</span>
              </div>
              
              <div className="flex flex-col">
                {leaderboard.map((user, idx) => (
                  <div 
                    key={user.id} 
                    className="grid grid-cols-[3rem_1fr_8rem_6rem] items-center px-5 py-4 transition-colors hover:bg-white/[0.02]"
                    style={{ 
                      borderTop: idx > 0 ? "1px solid var(--card-border)" : "none",
                    }}
                  >
                    {/* Position */}
                    <div className="flex items-center">
                      <div 
                        className="flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold font-mono"
                        style={{
                          background: idx === 0 ? "rgba(250, 204, 21, 0.15)" : idx === 1 ? "rgba(156, 163, 175, 0.15)" : idx === 2 ? "rgba(180, 83, 9, 0.15)" : "rgba(255,255,255,0.05)",
                          color: idx === 0 ? "#FACC15" : idx === 1 ? "#9CA3AF" : idx === 2 ? "#B45309" : "var(--text-faint)",
                          border: idx <= 2 ? `1px solid ${idx === 0 ? "#FACC1544" : idx === 1 ? "#9CA3AF44" : "#B4530944"}` : "none"
                        }}
                      >
                        {idx + 1}
                      </div>
                    </div>

                    {/* Name/Avatar */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {user.image ? (
                          <img src={user.image} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-[10px] font-bold uppercase opacity-50">{user.name.slice(0, 1)}</span>
                        )}
                      </div>
                      <span className="text-sm font-semibold truncate" style={{ color: "var(--text-primary)" }}>
                        {user.username ? `@${user.username}` : user.name}
                      </span>
                    </div>

                    {/* Played */}
                    <div className="text-right text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                      {user._count.drillAttempts}
                    </div>

                    {/* Points */}
                    <div className="text-right">
                      <span className="text-sm font-mono font-bold" style={{ color: "var(--brand-primary)" }}>
                        {user.leaguePoints.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}

                {userRankInfo && (
                  <>
                    <div className="px-5 py-2 flex items-center justify-center border-t" style={{ borderColor: "var(--card-border)" }}>
                      <span className="text-xl font-bold" style={{ color: "var(--text-faint)", letterSpacing: "2px" }}>···</span>
                    </div>
                    <div 
                      className="grid grid-cols-[3rem_1fr_8rem_6rem] items-center px-5 py-4 transition-colors hover:bg-white/[0.02]"
                      style={{ borderTop: "1px solid var(--card-border)", borderLeft: "2px solid var(--brand-primary)" }}
                    >
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold font-mono" style={{ color: "var(--text-muted)" }}>
                          {userRankInfo.rank}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                          {userRankInfo.image ? (
                            <img src={userRankInfo.image} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-[10px] font-bold uppercase opacity-50">{userRankInfo.name.slice(0, 1)}</span>
                          )}
                        </div>
                        <span className="text-sm font-semibold truncate flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
                          {userRankInfo.username ? `@${userRankInfo.username}` : userRankInfo.name}
                          <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/10" style={{ color: "var(--text-faint)" }}>You</span>
                        </span>
                      </div>
                      <div className="text-right text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                        {userRankInfo._count.drillAttempts}
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-mono font-bold" style={{ color: "var(--brand-primary)" }}>
                          {userRankInfo.leaguePoints.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <p className="mt-4 text-[11px] font-mono leading-relaxed" style={{ color: "var(--text-faint)" }}>
              * Only your first attempt at the active Matchday counts. +3 bonus points awarded for successful friend challenges. Season 1 ends after 50 matches.
            </p>
          </section>
        )}

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
                <ArchiveCard key={d.slug} drill={d} />
              ))}
            </div>
          </section>
        )}
      </div>
    </SidebarShell>
  );
}

function FeaturedDrillCard({ drill }: { drill: Drill }) {
  const badge = TYPE_BADGE[drill.type];
  
  // Calculate max points to detect "the big one"
  let maxPoints = 0;
  if (drill.nodes) {
    for (const nodeId in drill.nodes) {
      const node = drill.nodes[nodeId];
      if (node.options && node.options.length > 0) {
        maxPoints += Math.max(...node.options.map((o) => o.points));
      }
    }
  }
  
  // If it's a 100+ point drill AND the league is active, it gets the crazy animation
  const isBigOne = process.env.NEXT_PUBLIC_ENABLE_LEAGUE === "true" && maxPoints >= 100;

  return (
    <>
      {isBigOne && (
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
      )}
      <div className={isBigOne ? "featured-drill-shimmer mb-6 z-0" : "mb-6"}>
        <Link
          href={`/simulate/${drill.slug}`}
          className="block rounded-2xl overflow-hidden transition-all hover:opacity-95 group h-full"
          style={{
            background: "var(--card-bg)",
            border: isBigOne ? "none" : "1.5px solid var(--card-border)",
            borderLeft: isBigOne ? "none" : "4px solid var(--brand-primary)",
          }}
        >
          <div className="px-6 py-8 sm:px-10 sm:py-12 relative z-10" style={{ background: "var(--card-bg)", borderRadius: isBigOne ? "15px" : "0" }}>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span
                className="text-sm font-mono uppercase px-2 py-1 rounded"
                style={{
                  background: isBigOne ? "rgba(245, 200, 66, 0.15)" : "color-mix(in srgb, var(--brand-primary) 12%, transparent)",
                  color: isBigOne ? "#F5C842" : "var(--brand-primary)",
                  letterSpacing: "0.14em",
                }}
              >
                {isBigOne ? "Major Matchday" : "Featured drill"}
              </span>
              <span
                className="text-sm font-mono uppercase px-2 py-1 rounded"
                style={{
                  background: `color-mix(in srgb, ${badge.color} 14%, transparent)`,
                  color: badge.color,
                  letterSpacing: "0.14em",
                }}
              >
                {badge.label}
              </span>
              <span
                className="text-sm font-mono"
                style={{ color: "var(--text-faint)" }}
              >
                ~{drill.estimatedMinutes} min
              </span>
              {isBigOne && (
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

            <span className="btn-primary group" style={isBigOne ? { background: "#F5C842", color: "#000" } : {}}>
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

function ArchiveCard({ drill }: { drill: Drill }) {
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
            color: badge.color,
            letterSpacing: "0.12em",
          }}
        >
          {badge.label}
        </span>
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
        First drill drops Monday, June 1 at 8:30pm IST.
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
