"use client";

import { Trophy, Zap, Shield, Clock } from "lucide-react";
import { SubscribeForm } from "@/components/SubscribeForm";
import { SidebarShell } from "@/components/SidebarShell";

export default function LeagueHypePage() {
  return (
    <SidebarShell activeNav="league" backLabelDesktop="Back to Simulation" backHref="/simulate">
      <div 
        className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center max-w-3xl mx-auto w-full relative"
        style={{
          // Adding a subtle textured radial gradient to simulate a physical surface spotlight
          background: "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.03) 0%, transparent 60%)"
        }}
      >
        {/* Physical-looking "Launching Soon" plaque */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full text-xs font-mono font-bold tracking-widest uppercase" 
          style={{ 
            background: "linear-gradient(145deg, #FACC15, #B45309)", 
            color: "#111",
            boxShadow: "inset 2px 2px 4px rgba(255, 255, 255, 0.6), inset -2px -2px 4px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(250, 204, 21, 0.5)",
            textShadow: "1px 1px 0px rgba(255,255,255,0.3)"
          }}
        >
          <Trophy size={14} strokeWidth={2.5} style={{ filter: "drop-shadow(1px 1px 0px rgba(255,255,255,0.4))" }} />
          Launching Soon
        </div>

        {/* Engraved-looking Title */}
        <h1 
          className="font-display text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-none"
          style={{ 
            color: "var(--text-primary)",
            textShadow: "0px 2px 4px rgba(0,0,0,0.8), 0px -1px 0px rgba(255,255,255,0.1)"
          }}
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
        <div className="w-full max-w-md mx-auto text-left mb-16 relative">
          {/* Skeuomorphic inset well for the form */}
          <div 
            className="absolute -inset-4 rounded-3xl"
            style={{
              background: "rgba(0,0,0,0.2)",
              boxShadow: "inset 4px 4px 8px rgba(0,0,0,0.6), inset -1px -1px 2px rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.02)"
            }}
          />
          <div className="relative">
            <SubscribeForm
              variant="card"
              surface="league_hype"
              headline="Get notified when Season 1 starts."
              subhead="Drop your email to get an alert the moment the first Matchday goes live."
            />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left pb-16">
          <HypeFeature 
            icon={Clock} 
            title="Weekly Drops" 
            desc="A new high-stakes simulation drops every Wednesday."
            color="#3B82F6"
          />
          <HypeFeature 
            icon={Shield} 
            title="Verified Accounts" 
            desc="You must log in with a verified Google account to play."
            color="#10B981"
          />
          <HypeFeature 
            icon={Zap} 
            title="No Do-Overs" 
            desc="Only your first attempt counts on the global standings."
            color="#EF4444"
          />
        </div>
      </div>
    </SidebarShell>
  );
}

function HypeFeature({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) {
  return (
    <div 
      className="p-6 flex flex-col h-full rounded-2xl relative overflow-hidden" 
      style={{ 
        background: "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(0,0,0,0.4))", 
        border: "1px solid rgba(255,255,255,0.05)",
        // Embossed card effect
        boxShadow: "inset 1px 1px 2px rgba(255,255,255,0.1), inset -1px -1px 4px rgba(0,0,0,0.8), 0 10px 20px rgba(0,0,0,0.4)"
      }}
    >
      {/* Glossy top edge highlight */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{ 
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          opacity: 0.8
        }}
      />
      
      {/* 3D Icon Container */}
      <div 
        className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
        style={{
          background: "linear-gradient(145deg, rgba(0,0,0,0.6), rgba(255,255,255,0.05))",
          boxShadow: `inset 2px 2px 4px rgba(0,0,0,0.8), inset -1px -1px 2px rgba(255,255,255,0.1), 0 0 10px ${color}40`
        }}
      >
        <Icon size={22} style={{ color, filter: `drop-shadow(0 2px 4px ${color}80)` }} strokeWidth={2.5} />
      </div>

      <h3 
        className="text-white font-bold mb-2"
        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
      >{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{desc}</p>
    </div>
  );
}
