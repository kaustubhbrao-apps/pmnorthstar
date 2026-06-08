"use client";

import Link from "next/link";
import { Trophy, Shield, Clock, Crosshair, Award, TrendingUp, Swords, ChevronRight } from "lucide-react";
import { SubscribeForm } from "@/components/SubscribeForm";
import { SidebarShell } from "@/components/SidebarShell";

export default function LeagueHypePage() {
  return (
    <SidebarShell activeNav="league" backLabelDesktop="Back to Simulation" backHref="/simulate">
      <div className="flex-1 flex flex-col w-full relative overflow-hidden bg-black selection:bg-[#0047FF] selection:text-white pb-24">
        
        {/* Subtle SVG Noise Texture for Premium Editorial Feel */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
        />

        {/* Abstract Architectural/Sports Element */}
        <div className="absolute top-0 right-0 w-[50vw] h-[100vh] opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute -right-[20%] top-[10%] w-[800px] h-[800px] border-[1px] border-white/20 rounded-full" />
          <div className="absolute -right-[10%] top-[20%] w-[600px] h-[600px] border-[1px] border-white/10 rounded-full" />
          <div className="absolute right-[0%] top-[30%] w-[400px] h-[400px] border-[1px] border-[#0047FF]/30 rounded-full" />
        </div>

        {/* Massive Ambient Blue Glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0, 71, 255, 0.15) 0%, transparent 70%)" }} />

        <div className="flex-1 flex flex-col px-4 sm:px-12 pt-20 pb-16 max-w-7xl mx-auto w-full relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Column: Typography & Hype */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Badge */}
              <div className="mb-10 inline-flex items-center gap-3 px-4 py-1.5 border border-white/10 rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#0047FF] animate-pulse" />
                <span className="font-mono font-bold tracking-widest uppercase text-xs text-white/70">Season 1 Launching June 12</span>
              </div>

              {/* Stark Editorial Header */}
              <h1 className="font-display text-7xl sm:text-8xl md:text-[8rem] font-black tracking-tighter mb-8 uppercase leading-[0.85] text-white">
                SIMULATION<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0047FF] to-[#0094FF]">LEAGUE</span>
              </h1>

              <p className="text-xl sm:text-2xl mb-12 leading-relaxed max-w-xl font-medium text-white/60">
                The ultimate proving ground for <span className="text-white">Builders, Founders, and Operators</span>. Global leaderboards. Real crisis scenarios. No do-overs.
              </p>

              {/* Waitlist Box */}
              <div className="w-full max-w-md mb-16 relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0047FF] to-[#0094FF] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                <div className="relative p-[1px] bg-white/10 rounded-xl overflow-hidden">
                  <div className="bg-black p-1 rounded-[11px]">
                    <SubscribeForm
                      variant="card"
                      surface="league_hype"
                      headline="Join the Roster."
                      subhead="Enter your email to get drafted when Matchday 1 goes live."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mechanics (Structured Grid) */}
            <div className="lg:col-span-5 lg:mt-12 flex flex-col gap-6">
              <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-white/40 mb-2 border-b border-white/10 pb-4">League Rules & Mechanics</h2>
              
              <EditorialCard 
                num="01"
                title="The Matchday"
                desc="A high-stakes drill drops every Wednesday and Sunday. You have until the next drop to lock in your score."
              />
              <EditorialCard 
                num="02"
                title="One Shot Only"
                desc="No do-overs in a crisis. You must log in. Only your absolute first attempt counts for leaderboard points."
              />
              <EditorialCard 
                num="03"
                title="The Standings"
                desc="Cumulative points across the entire season. The top 100 are immortalized. Gold badges for perfect logic."
              />
              <EditorialCard 
                num="04"
                title="Buddy Bonus"
                desc="Challenge friends with your unique referral link. Earn +3 bonus points when they log in and play your drill."
              />

              <Link 
                href="/simulate/rules"
                className="mt-6 flex items-center justify-between p-6 border border-white/10 hover:border-[#0047FF]/50 hover:bg-[#0047FF]/5 transition-all group rounded-xl"
              >
                <span className="font-bold uppercase tracking-wider text-sm text-white/80 group-hover:text-white">Read Official Rulebook</span>
                <ChevronRight size={20} className="text-white/40 group-hover:text-[#0047FF] transition-colors" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </SidebarShell>
  );
}

function EditorialCard({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="p-6 border border-white/5 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors relative group">
      <div className="absolute top-0 left-0 w-1 h-0 bg-[#0047FF] group-hover:h-full transition-all duration-300 rounded-l-xl" />
      <div className="flex items-baseline gap-4 mb-3">
        <span className="font-mono text-xs text-[#0047FF] font-bold">{num}</span>
        <h3 className="text-lg font-bold uppercase tracking-tight text-white/90">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-white/50">{desc}</p>
    </div>
  );
}
