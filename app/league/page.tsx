"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SubscribeForm } from "@/components/SubscribeForm";
import { SidebarShell } from "@/components/SidebarShell";

export default function LeagueHypePage() {
  return (
    <SidebarShell activeNav="league" backLabelDesktop="Back to Simulation" backHref="/simulate">
      <div className="flex-1 flex flex-col w-full relative overflow-hidden pb-24">
        
        {/* Subtle SVG Noise Texture for Premium Editorial Feel */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04] z-50 mix-blend-overlay"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
        />

        {/* Abstract Architectural/Sports Element */}
        <div className="absolute top-0 right-0 w-[50vw] h-[100vh] opacity-20 pointer-events-none overflow-hidden hidden md:block">
          <div className="absolute -right-[20%] top-[10%] w-[800px] h-[800px] border border-[var(--border-subtle)] rounded-full" />
          <div className="absolute -right-[10%] top-[20%] w-[600px] h-[600px] border border-[var(--border-subtle)] rounded-full" />
          <div className="absolute right-[0%] top-[30%] w-[400px] h-[400px] border border-[var(--brand-primary)] opacity-30 rounded-full" />
        </div>

        {/* Ambient Brand Glow */}
        <div 
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-20" 
          style={{ background: "radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)" }} 
        />

        <div className="flex-1 flex flex-col px-4 sm:px-12 pt-20 pb-16 max-w-7xl mx-auto w-full relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Column: Typography & Hype */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Badge */}
              <div 
                className="mb-10 inline-flex items-center gap-3 px-4 py-1.5 border rounded"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <div className="w-2 h-2 bg-[var(--brand-primary)] animate-pulse" />
                <span className="font-mono font-bold tracking-widest uppercase text-xs" style={{ color: "var(--text-muted)" }}>
                  Season 1 Launching June 12
                </span>
              </div>

              {/* Stark Editorial Header */}
              <h1 className="font-display text-7xl sm:text-8xl md:text-[8rem] font-black tracking-tighter mb-8 uppercase leading-[0.85]" style={{ color: "var(--text-primary)" }}>
                SIMULATION<br />
                <span style={{ color: "var(--brand-primary)" }}>LEAGUE</span>
              </h1>

              <p className="text-xl sm:text-2xl mb-12 leading-relaxed max-w-xl font-medium" style={{ color: "var(--text-muted)" }}>
                The ultimate proving ground for <span style={{ color: "var(--text-primary)" }}>Builders, Founders, and Operators</span>. Global leaderboards. Real crisis scenarios. No do-overs.
              </p>

              {/* Waitlist Box */}
              <div className="w-full max-w-md mb-16 relative">
                <div className="p-1 rounded bg-[var(--card-bg)] border border-[var(--border-subtle)]">
                  <SubscribeForm
                    variant="card"
                    surface="league_hype"
                    headline="Join the Roster."
                    subhead="Enter your email to get drafted when Matchday 1 goes live."
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Mechanics (Structured Grid) */}
            <div className="lg:col-span-5 lg:mt-12 flex flex-col gap-6">
              <h2 className="font-mono text-sm uppercase tracking-[0.2em] mb-2 border-b pb-4" style={{ color: "var(--text-faint)", borderColor: "var(--border-subtle)" }}>
                League Rules & Mechanics
              </h2>
              
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
                className="mt-6 flex items-center justify-between p-6 border transition-all group rounded"
                style={{ borderColor: "var(--border-subtle)", background: "var(--card-bg)" }}
              >
                <span className="font-bold uppercase tracking-wider text-sm transition-colors" style={{ color: "var(--text-primary)" }}>Read Official Rulebook</span>
                <ChevronRight size={20} className="transition-colors" style={{ color: "var(--text-faint)" }} />
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
    <div 
      className="p-6 border rounded transition-colors relative group"
      style={{ borderColor: "var(--border-subtle)", background: "var(--card-bg)" }}
    >
      <div className="absolute top-0 left-0 w-1 h-0 bg-[var(--brand-primary)] group-hover:h-full transition-all duration-300 rounded-l" />
      <div className="flex items-baseline gap-4 mb-3">
        <span className="font-mono text-xs font-bold" style={{ color: "var(--brand-primary)" }}>{num}</span>
        <h3 className="text-lg font-bold uppercase tracking-tight" style={{ color: "var(--text-primary)" }}>{title}</h3>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
    </div>
  );
}
