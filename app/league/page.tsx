"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, Zap, Shield, Clock } from "lucide-react";
import { SubscribeForm } from "@/components/SubscribeForm";

export default function LeagueHypePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--page-bg)" }}>
      {/* Header */}
      <div className="px-6 py-6 w-full max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/simulate"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft size={16} />
          Back to SimulateIt
        </Link>
        <div className="flex items-center gap-2 font-display font-bold text-white tracking-tight">
          north<span style={{ color: "var(--brand-primary)" }}>star</span>
        </div>
      </div>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center max-w-3xl mx-auto w-full">
        <div 
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono font-bold tracking-widest uppercase mb-8" 
          style={{ background: "#FACC15", color: "#000" }}
        >
          <Trophy size={14} strokeWidth={2.5} />
          Launching Soon
        </div>

        <h1 
          className="font-display text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-none"
          style={{ color: "var(--text-primary)" }}
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

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
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
      </main>
    </div>
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
