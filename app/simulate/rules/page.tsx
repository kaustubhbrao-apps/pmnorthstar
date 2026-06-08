import { Metadata } from "next";
import Link from "next/link";
import { Clock, Shield, Target, Users, Zap, ChevronLeft } from "lucide-react";
import { SidebarShell } from "@/components/SidebarShell";

export const metadata: Metadata = {
  title: "Rules | Simulation League | Northstar",
  description: "Official rules and scoring system for the Simulation League.",
};

export default function RulesPage() {
  return (
    <SidebarShell activeNav="simulate" backLabelDesktop="Back to the library" backHref="/">
      <div className="flex-1 flex flex-col w-full relative overflow-hidden min-h-screen pb-24">
        
        {/* Subtle SVG Noise Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04] z-50 mix-blend-overlay fixed"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
        />

        {/* Ambient Brand Glow */}
        <div 
          className="absolute top-[0%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[400px] rounded-[100%] blur-[80px] md:blur-[120px] pointer-events-none opacity-10" 
          style={{ background: "radial-gradient(ellipse, var(--brand-primary) 0%, transparent 70%)" }} 
        />

        <div className="flex-1 flex flex-col px-4 sm:px-6 pt-8 md:pt-12 pb-16 md:pb-20 max-w-4xl mx-auto w-full relative z-10">
          
          <Link
            href="/league"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-16 transition-colors hover:text-[var(--brand-primary)]"
            style={{ color: "var(--text-faint)" }}
          >
            <ChevronLeft size={16} />
            Back to League
          </Link>

          <div className="mb-12 md:mb-16 lg:mb-20">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] font-black tracking-tighter mb-4 md:mb-6 uppercase leading-[0.9]" style={{ color: "var(--text-primary)" }}>
              Official<br />
              <span style={{ color: "var(--brand-primary)" }}>Rulebook</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl font-medium" style={{ color: "var(--text-muted)" }}>
              The League is a time-gated, high-stakes proving and learning ground. You have one shot per matchday to make the right calls. Here is how it works.
            </p>
          </div>

          <div className="space-y-4">
            <RuleSection
              num="01"
              icon={Clock}
              title="The Matchday Window"
              content="A new simulation drops every Wednesday and Sunday. You have until the next drop to complete the drill and secure your points. If you play the drill after the window closes, it goes on your permanent record, but it yields 0 points for the League standings."
            />

            <RuleSection
              num="02"
              icon={Shield}
              title="One Shot Only"
              content="There are no do-overs in a crisis, and there are no do-overs in the League. Only your very first attempt at a drill is scored. You can replay a drill as many times as you like to explore alternative branches, but your score is locked in the moment you reach your first outcome."
            />

            <RuleSection
              num="03"
              icon={Target}
              title="Scoring & Stakes"
              content="Not all matches are equal. Points are tiered based on the difficulty and strategic impact of the real-world scenario. Regular drills offer up to 50-75 points. 'Tier 2' drills offer 80-90 points. 'Major Matchdays' (the most complex, high-stakes scenarios) offer up to 100 points and feature a gold badge."
            />

            <RuleSection
              num="04"
              icon={Users}
              title="The Buddy Bonus"
              content="When you complete a drill, you can challenge a friend using your unique referral link. If your friend logs in and completes the drill using your link, you earn a +3 Point Bonus to your League total. You can only earn this bonus once per friend per drill (no spamming)."
            />

            <RuleSection
              num="05"
              icon={Zap}
              title="Anti-Cheat & Fairness"
              content="All scores are derived entirely on our servers by validating the exact path you took through the decision tree. Modifying client-side payloads will result in an instant ban from the current Season. Play fair, and may the best PM win."
            />
          </div>
        </div>
      </div>
    </SidebarShell>
  );
}

function RuleSection({ num, icon: Icon, title, content }: { num: string; icon: any; title: string; content: string }) {
  return (
    <div 
      className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 border rounded group transition-all duration-300 relative overflow-hidden"
      style={{ borderColor: "var(--border-subtle)", background: "var(--card-bg)" }}
    >
      <div className="absolute top-0 left-0 w-1 h-0 bg-[var(--brand-primary)] group-hover:h-full transition-all duration-300" />
      
      <div className="flex-shrink-0 relative z-10 flex flex-col items-center sm:items-start gap-4">
        <span className="font-mono text-xs font-bold" style={{ color: "var(--brand-primary)" }}>{num}</span>
        <div 
          className="w-12 h-12 rounded flex items-center justify-center border transition-colors"
          style={{ 
            background: "var(--bg-inset)", 
            borderColor: "var(--border-subtle)",
            color: "var(--text-faint)"
          }}
        >
          <Icon size={24} strokeWidth={1.5} />
        </div>
      </div>
      <div className="relative z-10 flex-1">
        <h3 className="text-xl font-bold mb-3 tracking-wide uppercase" style={{ color: "var(--text-primary)" }}>
          {title}
        </h3>
        <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {content}
        </p>
      </div>
    </div>
  );
}
