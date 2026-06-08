"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Trophy, Zap, Shield, Clock } from "lucide-react";
import { SubscribeForm } from "@/components/SubscribeForm";

export default function LeagueHypePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "#0a0a0a" }}>
      {/* Crazy Animated Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            transform: "perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* Floating Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse z-0 pointer-events-none" style={{ animationDelay: "1s" }} />

      {/* Custom Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes grid-move {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(40px) translateZ(-200px); }
        }
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .hype-text-gradient {
          background: linear-gradient(to right, #ffffff 20%, #FACC15 40%, #FACC15 60%, #ffffff 80%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: text-shimmer 3s linear infinite;
        }
      `}} />

      {/* Header */}
      <div className="relative z-10 px-6 py-6 w-full max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft size={16} />
          Back to Northstar
        </Link>
        <div className="flex items-center gap-2 font-display font-bold text-white tracking-tight">
          north<span style={{ color: "var(--brand-primary)" }}>star</span>
        </div>
      </div>

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 border" style={{ background: "rgba(250, 204, 21, 0.1)", borderColor: "rgba(250, 204, 21, 0.2)", color: "#FACC15" }}>
          <Trophy size={14} />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">Launching Soon</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 hype-text-gradient">
          Simulation League
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl text-[var(--text-muted)] leading-relaxed">
          The ultimate proving ground for Product Managers. Real-world crisis scenarios. Global leaderboards. <strong className="text-white">One shot to make the right call.</strong>
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left w-full">
          <HypeFeature 
            icon={Clock} 
            title="Weekly Drops" 
            desc="A new high-stakes simulation drops every Wednesday. You have until Saturday to play."
          />
          <HypeFeature 
            icon={Shield} 
            title="Verified Accounts Only" 
            desc="You must log in with a verified Google account to play. No smurfing. No bots."
          />
          <HypeFeature 
            icon={Zap} 
            title="No Do-Overs" 
            desc="Only your very first attempt counts for points on the global standings table."
          />
        </div>

        {/* Call to Action / Substack Form */}
        <div className="w-full max-w-md mx-auto text-left relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-red-500 rounded-[14px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative">
            <SubscribeForm
              variant="card"
              surface="league_hype"
              headline="Get notified when Season 1 starts."
              subhead="Drop your email to get an alert the moment the first Matchday goes live. It's free."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function HypeFeature({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-2xl border" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}>
      <Icon size={24} className="mb-4" style={{ color: "var(--brand-primary)" }} />
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
    </div>
  );
}
