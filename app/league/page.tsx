import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SubscribeForm } from "@/components/SubscribeForm";
import { SidebarShell } from "@/components/SidebarShell";
import { publishedDrills, type Drill } from "@/data/drills";
import { CountdownTimer } from "@/components/CountdownTimer";
import { LeagueRulesCarousel } from "@/components/LeagueRulesCarousel";
import { prisma } from "@/lib/prisma";

export const revalidate = 60;

export default async function LeagueHypePage() {

  const isDev = process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_ENABLE_LEAGUE === "true";
  const cutoff = isDev ? new Date("2099-12-31") : new Date();
  const all = publishedDrills(cutoff);
  
  // Find the active league match
  // publishedDrills() sorts newest first. We want the newest one as the active match.
  const leagueMatchesDesc = all.filter(d => d.isLeagueMatch);
  const activeMatch = leagueMatchesDesc[0] || null;
  // Matchday number is simply how many league matches have been published so far.
  const currentMatchdayNum = leagueMatchesDesc.length;
  // If there's an active match, completed matchdays is 1 less. If no active match, all are completed.
  const completedMatchdays = activeMatch ? Math.max(0, currentMatchdayNum - 1) : currentMatchdayNum;
  const totalMatchdays = 50;

  // Fetch top 3 users for the live leaderboard
  const topUsers = await prisma.user.findMany({
    where: { leaguePoints: { gt: 0 } },
    orderBy: { leaguePoints: 'desc' },
    take: 3,
    select: { id: true, name: true, leaguePoints: true }
  });

  return (
    <SidebarShell activeNav="league" backLabelDesktop="Back to the library" backHref="/">
      <div className="flex-1 flex flex-col w-full relative overflow-hidden pb-24">
        
        {/* Subtle SVG Noise Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04] z-50 mix-blend-overlay"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
        />

        {/* Abstract Architectural Elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[100vh] opacity-20 pointer-events-none overflow-hidden hidden md:block">
          <div className="absolute -right-[20%] top-[10%] w-[800px] h-[800px] border border-[var(--border-subtle)] rounded-full" />
          <div className="absolute -right-[10%] top-[20%] w-[600px] h-[600px] border border-[var(--border-subtle)] rounded-full" />
          <div className="absolute right-[0%] top-[30%] w-[400px] h-[400px] border border-[var(--brand-primary)] opacity-30 rounded-full" />
        </div>

        {/* Ambient Brand Glow */}
        <div 
          className="absolute top-[-10%] left-[-20%] w-[300px] h-[300px] md:top-[-20%] md:left-[-10%] md:w-[600px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-20" 
          style={{ background: "radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)" }} 
        />

        <div className="flex-1 flex flex-col px-4 sm:px-8 md:px-12 pt-12 md:pt-20 pb-16 max-w-7xl mx-auto w-full relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-20">
            
            {/* Left Column: Typography & Hype */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              <div 
                className="mb-10 inline-flex items-center gap-3 px-4 py-1.5 border rounded"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <div className="w-2 h-2 bg-[var(--brand-primary)] animate-pulse" />
                <span className="font-mono font-bold tracking-widest uppercase text-xs" style={{ color: "var(--text-muted)" }}>
                  Matchday {currentMatchdayNum} of {totalMatchdays}
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-black tracking-tighter mb-4 md:mb-6 xl:mb-8 uppercase leading-[0.9] lg:leading-[0.85] break-words hyphens-auto max-w-full" style={{ color: "var(--text-primary)" }}>
                SIMULATION<br />
                <span style={{ color: "var(--brand-primary)" }}>LEAGUE</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-12 leading-relaxed max-w-xl font-medium" style={{ color: "var(--text-muted)" }}>
                The ultimate proving and learning ground for <span style={{ color: "var(--text-primary)" }}>Builders, Founders, and Operators</span>. Score points. Climb the ranks. Can you stay at the top across 50 intense Matchdays?
              </p>

              {/* Active Match or Countdown */}
              {activeMatch ? (
                <div className="w-full max-w-md mb-16 relative">
                  <div className="p-1 rounded bg-[var(--card-bg)] border border-[var(--brand-primary)]" style={{ boxShadow: "0 0 20px rgba(219, 39, 119, 0.4)" }}>
                    <div className="p-5 flex flex-col items-start" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-[var(--brand-primary)] animate-pulse shadow-[0_0_8px_var(--brand-primary)]" />
                        <span className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: "var(--brand-primary)" }}>
                          Matchday {currentMatchdayNum} is Live
                        </span>
                      </div>
                      <h3 className="font-display text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                        {activeMatch.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                      </h3>
                      <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
                        The global leaderboard is officially open. You have 24 hours to secure your rank.
                      </p>
                      <Link 
                        href={`/simulate/${activeMatch.slug}`}
                        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded font-bold uppercase tracking-wider transition-colors"
                        style={{ background: "var(--brand-primary)", color: "white" }}
                      >
                        Play Now <ChevronRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-md mb-16 relative">
                  <div className="p-1 rounded bg-[var(--card-bg)] border border-[var(--brand-primary)]" style={{ boxShadow: "0 0 20px rgba(219, 39, 119, 0.2)" }}>
                    <div className="p-5" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: "var(--brand-primary)" }}>Matchday {currentMatchdayNum + 1} Starts In</span>
                        <CountdownTimer targetDate="2026-06-25T18:30:00Z" />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-2 uppercase" style={{ color: "var(--text-primary)" }}>Coming Soon</h3>
                      <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>Get ready for 50 intense Matchdays. The league officially begins on Friday, June 26th.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Substack Subscribe Box */}
              <div className="w-full max-w-md relative mb-16">
                <div className="p-1 rounded bg-[var(--card-bg)] border border-[var(--border-subtle)]">
                  <SubscribeForm
                    variant="card"
                    surface="league"
                    headline="Join the Roster."
                    subhead={`Enter your email to get drafted when Matchday ${currentMatchdayNum + (activeMatch ? 1 : 0)} goes live.`}
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Mechanics */}
            <div className="lg:col-span-5 lg:mt-12 flex flex-col gap-6">
              <h2 className="font-mono text-sm uppercase tracking-[0.2em] mb-2 border-b pb-4" style={{ color: "var(--text-faint)", borderColor: "var(--border-subtle)" }}>
                League Rules & Mechanics
              </h2>
              
              <LeagueRulesCarousel />

              <Link 
                href="/simulate/rules"
                className="mt-6 flex items-center justify-between p-6 border transition-all group rounded"
                style={{ borderColor: "var(--border-subtle)", background: "var(--card-bg)" }}
              >
                <span className="font-bold uppercase tracking-wider text-sm transition-colors" style={{ color: "var(--text-primary)" }}>Read Official Rulebook</span>
                <ChevronRight size={20} className="transition-colors" style={{ color: "var(--text-faint)" }} />
              </Link>

              {/* Leaderboard */}
              <div className="mt-8 relative group">
                <div className="absolute inset-0 bg-[var(--brand-primary)] opacity-[0.08] blur-xl rounded-xl transition-opacity duration-500 group-hover:opacity-15 pointer-events-none" />
                <div className="relative flex flex-col rounded-xl p-6 overflow-hidden border" style={{ background: "var(--card-bg)", borderColor: "var(--border-subtle)", boxShadow: "0 8px 32px -8px rgba(243, 18, 60, 0.15)" }}>
                  
                  {/* Subtle top glare */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--brand-primary)] to-transparent opacity-30" />

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[var(--brand-primary)] shadow-[0_0_10px_var(--brand-primary)] animate-pulse" />
                      <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-bold" style={{ color: "var(--text-primary)" }}>Live Standings</h3>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>Top 3</span>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {topUsers.length === 0 ? (
                      <div className="text-center py-4 text-sm" style={{ color: "var(--text-muted)" }}>
                        No scores yet. Be the first!
                      </div>
                    ) : (
                      topUsers.map((user, index) => (
                        <div key={user.id} className="flex items-center justify-between p-3.5 rounded-lg border relative overflow-hidden" style={index === 0 ? { background: "linear-gradient(90deg, rgba(243,18,60,0.08) 0%, transparent 100%)", borderColor: "rgba(243,18,60,0.3)" } : { borderColor: "var(--border-subtle)", background: "rgba(128,128,128,0.02)" }}>
                          {index === 0 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--brand-primary)]" />}
                          <div className={`flex items-center gap-4 ${index === 0 ? 'pl-2' : 'pl-3'}`}>
                            <span className={`font-mono ${index === 0 ? 'text-sm' : 'text-xs'} font-bold w-4 text-center`} style={{ color: index === 0 ? "var(--brand-primary)" : "var(--text-faint)" }}>{index + 1}</span>
                            <span className={index === 0 ? "font-bold tracking-wide" : "text-sm font-medium"} style={{ color: index === 0 ? "var(--text-primary)" : "var(--text-muted)" }}>{user.name || "Anonymous"}{index === 0 ? " 👑" : ""}</span>
                          </div>
                          <span className={`font-mono text-sm ${index === 0 ? 'font-bold drop-shadow-[0_0_8px_rgba(243,18,60,0.5)]' : ''}`} style={{ color: index === 0 ? "var(--brand-primary)" : "var(--text-faint)" }}>{user.leaguePoints} pts</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
          </div>

        </div>
      </div>
      </div>
    </SidebarShell>
  );
}

