import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Shield, Target, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Rules | Simulation League | Northstar",
  description: "Official rules and scoring system for the Simulation League.",
};

export default function RulesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <Link
        href="/simulate"
        className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors hover:text-white"
        style={{ color: "var(--text-muted)" }}
      >
        <ArrowLeft size={16} />
        Back to League
      </Link>

      <div className="mb-12">
        <h1
          className="font-display text-3xl sm:text-4xl font-bold mb-4"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          Simulation League Rules
        </h1>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          The League is a time-gated, high-stakes proving ground. You have one shot per matchday to make the right calls. Here is how it works.
        </p>
      </div>

      <div className="space-y-8">
        <RuleSection
          icon={Clock}
          title="The Matchday Window"
          content="A new simulation drops every Wednesday evening. You have until Saturday night to complete the drill and secure your points. If you play the drill after the window closes, it goes on your permanent record, but it yields 0 points for the League standings."
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

      <div className="mt-16 pt-8 border-t border-white/10">
        <Link
          href="/simulate"
          className="btn-primary inline-flex items-center gap-2"
        >
          Return to Leaderboard
        </Link>
      </div>
    </div>
  );
}

function RuleSection({ icon: Icon, title, content }: { icon: any; title: string; content: string }) {
  return (
    <div className="flex gap-4 sm:gap-6">
      <div className="flex-shrink-0 mt-1">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center border"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            borderColor: "rgba(255, 255, 255, 0.08)",
            color: "var(--brand-primary)",
          }}
        >
          <Icon size={20} strokeWidth={2} />
        </div>
      </div>
      <div>
        <h3
          className="text-lg font-semibold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h3>
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {content}
        </p>
      </div>
    </div>
  );
}
