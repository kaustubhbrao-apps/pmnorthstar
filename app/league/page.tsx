"use client";

import { Trophy, Zap, Shield, Clock, Crosshair, Award, TrendingUp, Swords, ChevronRight } from "lucide-react";
import { SubscribeForm } from "@/components/SubscribeForm";
import { SidebarShell } from "@/components/SidebarShell";

export default function LeagueHypePage() {
  return (
    <SidebarShell activeNav="league" backLabelDesktop="Back to Simulation" backHref="/simulate">
      <div className="flex-1 flex flex-col w-full relative overflow-hidden bg-[#0A0A0A]">
        
        {/* Dynamic Premier League inspired geometric background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none" style={{
          background: "linear-gradient(135deg, #E90052 0%, transparent 50%)",
          transform: "rotate(-15deg) translate(20%, -20%)"
        }} />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] opacity-10 pointer-events-none" style={{
          background: "linear-gradient(45deg, #00FF85 0%, transparent 50%)",
          transform: "rotate(15deg) translate(-20%, 20%)"
        }} />

        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-16 text-center max-w-4xl mx-auto w-full relative z-10">
          
          {/* Badge */}
          <div className="mb-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF85] to-[#00FFFF] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500" />
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full font-mono font-bold tracking-[0.2em] uppercase text-xs" style={{ background: "#111", color: "#00FF85", border: "1px solid rgba(0, 255, 133, 0.3)" }}>
              <Trophy size={14} strokeWidth={3} />
              Season 1 Coming Soon
            </div>
          </div>

          {/* Massive Editorial Header */}
          <h1 
            className="font-display text-6xl sm:text-8xl md:text-[7rem] font-black tracking-tighter mb-6 uppercase italic leading-[0.85]"
            style={{ color: "#FFF" }}
          >
            SIMULATION<br />
            <span style={{ color: "#E90052" }}>LEAGUE</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-16 leading-relaxed max-w-2xl font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
            The ultimate proving ground for <span className="text-white">Builders, Founders, and Operators</span>. Real-world crisis scenarios. Global leaderboards. No do-overs.
          </p>

          {/* Call to Action / Substack Form */}
          <div className="w-full max-w-md mx-auto text-left mb-20">
            <div className="p-1 rounded-2xl" style={{ background: "linear-gradient(135deg, #111, #222)" }}>
              <SubscribeForm
                variant="card"
                surface="league_hype"
                headline="Join the Waitlist."
                subhead="Drop your email to get an alert the moment Matchday 1 goes live."
              />
            </div>
          </div>

          {/* League Mechanics Section */}
          <div className="w-full text-left">
            <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-4">
              <div className="w-3 h-8 bg-[#00FF85] skew-x-[-15deg]" />
              <h2 className="font-display text-4xl font-black uppercase tracking-tight italic">League Mechanics</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-3xl font-black italic opacity-20 group-hover:opacity-100 group-hover:text-[#E90052] transition-colors font-mono">01</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">The Matchday</h3>
                </div>
                <p className="text-base leading-relaxed pl-12 border-l-2 border-white/5" style={{ color: "var(--text-muted)" }}>
                  A new high-stakes simulation drops every Wednesday. You are dropped into the most critical moments in tech history with the exact data the founders had. You have until Saturday to play.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-3xl font-black italic opacity-20 group-hover:opacity-100 group-hover:text-[#00FFFF] transition-colors font-mono">02</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">One Shot Only</h3>
                </div>
                <p className="text-base leading-relaxed pl-12 border-l-2 border-white/5" style={{ color: "var(--text-muted)" }}>
                  There are no do-overs in a crisis. You must log in with a verified Google account to play. Only your very first attempt counts for points on the global standings table. Make the right call.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-3xl font-black italic opacity-20 group-hover:opacity-100 group-hover:text-[#00FF85] transition-colors font-mono">03</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">The Standings</h3>
                </div>
                <p className="text-base leading-relaxed pl-12 border-l-2 border-white/5" style={{ color: "var(--text-muted)" }}>
                  Every decision is scored. We track your cumulative points across the entire season. The top 100 players are immortalized on the public leaderboard. Earning a gold badge means you saw what nobody else did.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-3xl font-black italic opacity-20 group-hover:opacity-100 group-hover:text-[#FACC15] transition-colors font-mono">04</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">Buddy Challenge</h3>
                </div>
                <p className="text-base leading-relaxed pl-12 border-l-2 border-white/5" style={{ color: "var(--text-muted)" }}>
                  Completed a drill? Challenge your friends using your unique referral link. If they log in and play your scenario, you earn a flat +3 Point bonus to your League total.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </SidebarShell>
  );
}
