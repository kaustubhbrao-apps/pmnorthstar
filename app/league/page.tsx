"use client";

import { Trophy, Zap, Shield, Clock, Crosshair, Award, TrendingUp, Swords } from "lucide-react";
import { SubscribeForm } from "@/components/SubscribeForm";
import { SidebarShell } from "@/components/SidebarShell";

export default function LeagueHypePage() {
  return (
    <SidebarShell activeNav="league" backLabelDesktop="Back to Simulation" backHref="/simulate">
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center max-w-3xl mx-auto w-full">
        {/* Brutalist "Launching Soon" chip */}
        <div 
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono font-bold tracking-widest uppercase mb-8" 
          style={{ background: "#FACC15", color: "#000" }}
        >
          <Trophy size={14} strokeWidth={2.5} />
          Launching Soon
        </div>

        {/* Clean, Sharp Title */}
        <h1 
          className="font-display text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-none"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          Simulation League
        </h1>

        <p 
          className="text-lg sm:text-xl mb-12 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          The ultimate proving ground for Product Managers. Real-world crisis scenarios. Global leaderboards.{" "}
          <strong className="text-white">One shot to make the right call.</strong>
        </p>

        {/* Call to Action / Substack Form */}
        <div className="w-full max-w-md mx-auto text-left mb-16">
          <SubscribeForm
            variant="card"
            surface="league_hype"
            headline="Get notified when Season 1 starts."
            subhead="Drop your email to get an alert the moment the first Matchday goes live. It's free."
          />
        </div>

        {/* Feature Grid - Flat Northstar style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left pb-16">
          <HypeFeature 
            icon={Clock} 
            title="Weekly Drops" 
            desc="A new high-stakes simulation drops every Wednesday."
            color="#2563EB"
          />
          <HypeFeature 
            icon={Shield} 
            title="Verified Accounts" 
            desc="You must log in with a verified Google account to play."
            color="#059669"
          />
          <HypeFeature 
            icon={Zap} 
            title="No Do-Overs" 
            desc="Only your first attempt counts on the global standings."
            color="#DC2626"
          />
        </div>

        {/* Deep Dive Hype Section - Flat styling */}
        <div className="w-full mt-4 pt-16 border-t border-white/5">
          <h2 
            className="font-display text-3xl sm:text-4xl font-bold mb-12 text-center" 
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            What is the League?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto pb-16">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div 
                  className="w-10 h-10 rounded flex items-center justify-center border" 
                  style={{ background: "rgba(250, 204, 21, 0.1)", borderColor: "rgba(250, 204, 21, 0.2)", color: "#FACC15" }}
                >
                  <Crosshair size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">High-Stakes Scenarios</h3>
                <p className="leading-relaxed text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
                  You are dropped into the most critical moments in tech history. The Slack pivot. The Airbnb survival crisis. You have the exact data the founders had. Can you make the call that saves the company?
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div 
                  className="w-10 h-10 rounded flex items-center justify-center border" 
                  style={{ background: "rgba(219, 39, 119, 0.1)", borderColor: "rgba(219, 39, 119, 0.2)", color: "#DB2777" }}
                >
                  <Award size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Bragging Rights</h3>
                <p className="leading-relaxed text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
                  Every decision you make is scored against thousands of other PMs, Founders, and Builders. A gold badge on your profile means you saw what nobody else did. Prove your product intuition.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div 
                  className="w-10 h-10 rounded flex items-center justify-center border" 
                  style={{ background: "rgba(16, 185, 129, 0.1)", borderColor: "rgba(16, 185, 129, 0.2)", color: "#10B981" }}
                >
                  <TrendingUp size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Global Leaderboard</h3>
                <p className="leading-relaxed text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
                  We track your cumulative points across the entire season. The top 100 players are immortalized on the public standings. Climbing the ranks takes consistency, sharp execution, and flawless logic.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div 
                  className="w-10 h-10 rounded flex items-center justify-center border" 
                  style={{ background: "rgba(59, 130, 246, 0.1)", borderColor: "rgba(59, 130, 246, 0.2)", color: "#3B82F6" }}
                >
                  <Swords size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">The Buddy Challenge</h3>
                <p className="leading-relaxed text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
                  Completed a drill? Copy your unique referral link and challenge your friends. If they log in and play your scenario, you earn a flat +3 Point bonus to your League total. May the best PM win.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarShell>
  );
}

function HypeFeature({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) {
  return (
    <div 
      className="p-5 flex flex-col h-full rounded-xl" 
      style={{ 
        background: "var(--card-bg)", 
        border: "1.5px solid var(--card-border)",
        borderTop: `4px solid ${color}`
      }}
    >
      <Icon size={20} className="mb-3" style={{ color }} strokeWidth={2} />
      <h3 className="text-white font-bold mb-1.5">{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
    </div>
  );
}
