import { Metadata } from "next";
import Link from "next/link";
import { Clock, Shield, Target, Users, Zap, Star, ChevronLeft } from "lucide-react";
import { SidebarShell } from "@/components/SidebarShell";

export const metadata: Metadata = {
  title: "Rules | Simulation League | Northstar",
  description: "Official rules and scoring system for the Simulation League.",
};

export default function RulesPage() {
  return (
    <SidebarShell activeNav="simulate" backLabelDesktop="Back to Simulation" backHref="/simulate">
      <div 
        className="flex-1 flex flex-col w-full relative overflow-hidden min-h-screen"
        style={{
          background: "radial-gradient(circle at top center, #0B132B 0%, #02040A 100%)"
        }}
      >
        
        {/* Dynamic Champions League inspired Starball / Glow background */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none" style={{
          background: "radial-gradient(circle, rgba(0, 191, 255, 0.4) 0%, transparent 60%)",
          filter: "blur(60px)"
        }} />

        {/* Subtle floating stars */}
        <div className="absolute top-20 right-1/4 opacity-5"><Star size={120} /></div>
        <div className="absolute bottom-40 left-1/4 opacity-10"><Star size={150} /></div>

        <div className="flex-1 flex flex-col px-4 sm:px-6 py-12 md:py-20 max-w-4xl mx-auto w-full relative z-10">
          
          <Link
            href="/league"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-10 transition-colors hover:text-white"
            style={{ color: "#94A3B8" }}
          >
            <ChevronLeft size={16} />
            Back to League
          </Link>

          <div className="mb-16">
            <h1 
              className="font-display text-4xl sm:text-6xl font-black tracking-tight mb-6 uppercase leading-tight"
              style={{ 
                background: "linear-gradient(to bottom, #FFFFFF 0%, #94A3B8 50%, #475569 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0px 4px 10px rgba(0, 191, 255, 0.1))"
              }}
            >
              Official Rules
            </h1>
            <p
              className="text-lg sm:text-xl leading-relaxed max-w-2xl font-medium"
              style={{ color: "#94A3B8" }}
            >
              The League is a time-gated, high-stakes proving ground. You have one shot per matchday to make the right calls. Here is how it works.
            </p>
          </div>

          <div className="space-y-6">
            <RuleSection
              icon={Clock}
              title="The Matchday Window"
              content="A new simulation drops every Wednesday and Sunday. You have until the next drop to complete the drill and secure your points. If you play the drill after the window closes, it goes on your permanent record, but it yields 0 points for the League standings."
            />

            <RuleSection
              icon={Shield}
              title="One Shot Only"
              content="There are no do-overs in a crisis, and there are no do-overs in the League. Only your very first attempt at a drill is scored. You can replay a drill as many times as you like to explore alternative branches, but your score is locked in the moment you reach your first outcome."
            />

            <RuleSection
              icon={Target}
              title="Scoring & Stakes"
              content="Not all matches are equal. Points are tiered based on the difficulty and strategic impact of the real-world scenario. Regular drills offer up to 50-75 points. 'Tier 2' drills offer 80-90 points. 'Major Matchdays' (the most complex, high-stakes scenarios) offer up to 100 points and feature a gold badge."
            />

            <RuleSection
              icon={Users}
              title="The Buddy Bonus"
              content="When you complete a drill, you can challenge a friend using your unique referral link. If your friend logs in and completes the drill using your link, you earn a +3 Point Bonus to your League total. You can only earn this bonus once per friend per drill (no spamming)."
            />

            <RuleSection
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

function RuleSection({ icon: Icon, title, content }: { icon: any; title: string; content: string }) {
  return (
    <div 
      className="p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-2xl group transition-all duration-500 relative overflow-hidden" 
      style={{ 
        background: "rgba(11, 19, 43, 0.4)", 
        border: "1px solid rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)"
      }}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent opacity-10" />
      
      <div className="flex-shrink-0 relative z-10">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center border"
          style={{
            background: "rgba(0,0,0,0.5)",
            borderColor: "rgba(192,192,192,0.2)",
            color: "#00BFFF",
          }}
        >
          <Icon size={24} strokeWidth={2} />
        </div>
      </div>
      <div className="relative z-10">
        <h3
          className="text-xl font-bold mb-2 tracking-wide uppercase"
          style={{ color: "#FFFFFF" }}
        >
          {title}
        </h3>
        <p
          className="text-base leading-relaxed"
          style={{ color: "#94A3B8" }}
        >
          {content}
        </p>
      </div>
    </div>
  );
}
