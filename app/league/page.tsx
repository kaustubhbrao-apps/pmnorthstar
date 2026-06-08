"use client";

import Link from "next/link";
import { Trophy, Zap, Shield, Clock, Crosshair, Award, TrendingUp, Swords, ChevronRight, Star } from "lucide-react";
import { SubscribeForm } from "@/components/SubscribeForm";
import { SidebarShell } from "@/components/SidebarShell";

export default function LeagueHypePage() {
  return (
    <SidebarShell activeNav="league" backLabelDesktop="Back to Simulation" backHref="/simulate">
      <div 
        className="flex-1 flex flex-col w-full relative overflow-hidden"
        style={{
          // Deep midnight blue/black background typical of Champions League
          background: "radial-gradient(circle at top center, #0B132B 0%, #02040A 100%)"
        }}
      >
        
        {/* Dynamic Champions League inspired Starball / Glow background */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none" style={{
          background: "radial-gradient(circle, rgba(0, 191, 255, 0.4) 0%, transparent 60%)",
          filter: "blur(60px)"
        }} />
        
        {/* Subtle floating stars in background */}
        <div className="absolute top-20 left-1/4 opacity-10"><Star size={120} className="animate-pulse" /></div>
        <div className="absolute top-60 right-1/4 opacity-5"><Star size={200} className="animate-pulse" style={{ animationDelay: "1s" }} /></div>
        <div className="absolute bottom-40 left-1/3 opacity-10"><Star size={150} className="animate-pulse" style={{ animationDelay: "2s" }} /></div>

        <div className="flex-1 flex flex-col px-4 sm:px-6 py-20 text-center max-w-5xl mx-auto w-full relative z-10">
          
          {/* Badge */}
          <div className="mb-10 relative group flex justify-center w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C0C0C0] to-[#FFFFFF] rounded-full blur opacity-20 group-hover:opacity-50 transition duration-500 max-w-[200px]" />
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full font-mono font-bold tracking-[0.2em] uppercase text-xs" 
              style={{ 
                background: "rgba(2, 4, 10, 0.8)", 
                color: "#E2E8F0", 
                border: "1px solid rgba(192, 192, 192, 0.3)",
                backdropFilter: "blur(10px)"
              }}>
              <Star size={14} fill="currentColor" />
              Season 1 Coming Soon
            </div>
          </div>

          {/* Massive Prestige Header */}
          <h1 
            className="font-display text-6xl sm:text-8xl md:text-[7rem] font-black tracking-tighter mb-6 uppercase leading-[0.9] text-center w-full"
            style={{ 
              // Metallic silver gradient text
              background: "linear-gradient(to bottom, #FFFFFF 0%, #94A3B8 50%, #475569 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0px 4px 20px rgba(0, 191, 255, 0.2))"
            }}
          >
            SIMULATION<br />
            LEAGUE
          </h1>

          <p className="text-xl sm:text-2xl mb-16 leading-relaxed max-w-2xl mx-auto font-medium text-center w-full" style={{ color: "#94A3B8" }}>
            The ultimate proving ground for <span className="text-white">Builders, Founders, and Operators</span>. Real-world crisis scenarios. Global leaderboards. No do-overs.
          </p>

          {/* Call to Action / Substack Form */}
          <div className="w-full max-w-md mx-auto text-left mb-24 relative">
            {/* Glowing border effect for the form */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00BFFF] via-[#FFFFFF] to-[#00BFFF] rounded-2xl blur opacity-30" />
            <div className="relative p-1 rounded-2xl" style={{ background: "rgba(2, 4, 10, 0.9)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <SubscribeForm
                variant="card"
                surface="league_hype"
                headline="Join the Waitlist."
                subhead="Drop your email to get an alert the moment Matchday 1 goes live."
              />
            </div>
          </div>

          {/* League Mechanics Section - Premium Dark Cards */}
          <div className="w-full text-left mt-10">
            <div className="flex items-center justify-center gap-4 mb-16 pb-6 relative">
              {/* Central glowing separator */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent opacity-50" />
              <h2 className="font-display text-3xl font-bold uppercase tracking-widest text-center" style={{ color: "#E2E8F0" }}>League Mechanics</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
              <LeagueCard 
                title="The Matchday" 
                desc="A new high-stakes simulation drops every Wednesday and Sunday. You are dropped into the most critical moments in tech history with the exact data the founders had."
                icon={Clock}
              />
              <LeagueCard 
                title="One Shot Only" 
                desc="There are no do-overs in a crisis. You must log in with a verified Google account to play. Only your very first attempt counts for points on the global standings table. Make the right call."
                icon={Shield}
              />
              <LeagueCard 
                title="The Standings" 
                desc="Every decision is scored. We track your cumulative points across the entire season. The top 100 players are immortalized on the public leaderboard. Earning a gold badge means you saw what nobody else did."
                icon={Trophy}
              />
              <LeagueCard 
                title="Buddy Challenge" 
                desc="Completed a drill? Challenge your friends using your unique referral link. If they log in and play your scenario, you earn a flat +3 Point bonus to your League total."
                icon={Swords}
              />
            </div>
            
            {/* Rules Button */}
            <div className="mt-8 flex justify-center w-full">
              <Link 
                href="/simulate/rules"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-[0.15em] transition-all hover:scale-105 overflow-hidden"
                style={{ 
                  background: "rgba(2, 4, 10, 0.8)", 
                  border: "1px solid rgba(192, 192, 192, 0.3)", 
                  color: "#FFFFFF",
                  boxShadow: "0 0 20px rgba(0, 191, 255, 0.1)"
                }}
              >
                {/* Silver shimmer effect on hover */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                Read Official Rules <ChevronRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </SidebarShell>
  );
}

function LeagueCard({ title, desc, icon: Icon }: { title: string, desc: string, icon: any }) {
  return (
    <div 
      className="p-8 flex flex-col h-full rounded-2xl group transition-all duration-500 relative overflow-hidden" 
      style={{ 
        background: "rgba(11, 19, 43, 0.6)", 
        border: "1px solid rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)"
      }}
    >
      {/* Top metallic border highlight */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent opacity-30" />
      
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,191,255,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="w-12 h-12 rounded-full flex items-center justify-center border" style={{ background: "rgba(0,0,0,0.5)", borderColor: "rgba(192,192,192,0.2)", color: "#00BFFF" }}>
          <Icon size={24} strokeWidth={2} />
        </div>
        <h3 className="text-xl font-bold tracking-wide" style={{ color: "#FFFFFF" }}>{title}</h3>
      </div>
      
      <p className="text-base leading-relaxed relative z-10" style={{ color: "#94A3B8" }}>
        {desc}
      </p>
    </div>
  );
}
