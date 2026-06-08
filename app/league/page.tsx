"use client";

import Link from "next/link";
import { Trophy, Zap, Shield, Clock, Crosshair, Award, TrendingUp, Swords, ChevronRight } from "lucide-react";
import { SubscribeForm } from "@/components/SubscribeForm";
import { SidebarShell } from "@/components/SidebarShell";

export default function LeagueHypePage() {
  return (
    <SidebarShell activeNav="league" backLabelDesktop="Back to Simulation" backHref="/simulate">
      <div className="flex-1 flex flex-col w-full relative overflow-hidden bg-[#0A0A0A]">
        
        {/* Dynamic Premier League inspired geometric background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.15] pointer-events-none" style={{
          background: "linear-gradient(135deg, #E90052 0%, transparent 50%)",
          transform: "rotate(-15deg) translate(20%, -20%)"
        }} />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] opacity-[0.08] pointer-events-none" style={{
          background: "linear-gradient(45deg, #00FF85 0%, transparent 50%)",
          transform: "rotate(15deg) translate(-20%, 20%)"
        }} />

        <div className="flex-1 flex flex-col px-4 sm:px-6 py-16 text-center max-w-5xl mx-auto w-full relative z-10">
          
          {/* Badge */}
          <div className="mb-8 relative group flex justify-center w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF85] to-[#00FFFF] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500 max-w-[200px]" />
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full font-mono font-bold tracking-[0.2em] uppercase text-xs" style={{ background: "#111", color: "#00FF85", border: "1px solid rgba(0, 255, 133, 0.3)" }}>
              <Trophy size={14} strokeWidth={3} />
              Season 1 Coming Soon
            </div>
          </div>

          {/* Massive Editorial Header */}
          <h1 
            className="font-display text-6xl sm:text-8xl md:text-[7rem] font-black tracking-tighter mb-6 uppercase italic leading-[0.85] text-center w-full"
            style={{ color: "#FFF" }}
          >
            SIMULATION<br />
            <span style={{ color: "#E90052" }}>LEAGUE</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-16 leading-relaxed max-w-2xl mx-auto font-medium text-center w-full" style={{ color: "rgba(255,255,255,0.7)" }}>
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

          {/* League Mechanics Section - Mixed with Northstar Card System */}
          <div className="w-full text-left mt-8">
            <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-4">
              <div className="w-3 h-8 bg-[#00FF85] skew-x-[-15deg]" />
              <h2 className="font-display text-4xl font-black uppercase tracking-tight italic">League Mechanics</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
              <LeagueCard 
                num="01" 
                title="The Matchday" 
                desc="A new high-stakes simulation drops every Wednesday and Sunday. You are dropped into the most critical moments in tech history with the exact data the founders had."
                color="#E90052"
                icon={Clock}
              />
              <LeagueCard 
                num="02" 
                title="One Shot Only" 
                desc="There are no do-overs in a crisis. You must log in with a verified Google account to play. Only your very first attempt counts for points on the global standings table. Make the right call."
                color="#00FFFF"
                icon={Shield}
              />
              <LeagueCard 
                num="03" 
                title="The Standings" 
                desc="Every decision is scored. We track your cumulative points across the entire season. The top 100 players are immortalized on the public leaderboard. Earning a gold badge means you saw what nobody else did."
                color="#00FF85"
                icon={TrendingUp}
              />
              <LeagueCard 
                num="04" 
                title="Buddy Challenge" 
                desc="Completed a drill? Challenge your friends using your unique referral link. If they log in and play your scenario, you earn a flat +3 Point bonus to your League total."
                color="#FACC15"
                icon={Swords}
              />
            </div>
            
            <div className="mt-12 flex justify-center w-full">
              <Link 
                href="/simulate/rules"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all hover:scale-105"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--text-primary)" }}
              >
                Read Official Rules <ChevronRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </SidebarShell>
  );
}

function LeagueCard({ num, title, desc, color, icon: Icon }: { num: string, title: string, desc: string, color: string, icon: any }) {
  return (
    <div 
      className="p-6 flex flex-col h-full rounded-xl group transition-all duration-300 relative overflow-hidden" 
      style={{ 
        background: "var(--card-bg)", 
        border: "1.5px solid var(--card-border)",
      }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10 blur-2xl group-hover:opacity-30 transition-opacity" style={{ background: color }} />
      
      <div className="flex items-start justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center border" style={{ background: `${color}15`, borderColor: `${color}30`, color }}>
            <Icon size={20} strokeWidth={2.5} />
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight italic" style={{ color: "var(--text-primary)" }}>{title}</h3>
        </div>
        <div className="text-4xl font-black italic font-mono transition-colors duration-300" style={{ color: "var(--text-faint)" }}>
          {num}
        </div>
      </div>
      
      <p className="text-base leading-relaxed relative z-10" style={{ color: "var(--text-muted)" }}>
        {desc}
      </p>

      {/* Sporty accent line at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" style={{ background: color }} />
    </div>
  );
}
