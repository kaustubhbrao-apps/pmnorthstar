import { getSession } from "@/lib/auth";
import Link from "next/link";
import { SidebarShell } from "@/components/SidebarShell";
import { Users, Shield, Zap } from "lucide-react";

export default async function DraftLandingPage() {
  const session = await getSession();

  return (
    <SidebarShell activeNav="draft">
      <div className="max-w-3xl mx-auto py-24 px-6">
        
        <div className="mb-6 inline-block bg-[#D4102F] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
          New Feature
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 uppercase leading-none" style={{ color: "var(--text-primary)" }}>
          The Builder Draft
        </h1>
        
        <p className="text-2xl mb-12 font-medium leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Find out your exact startup archetype based on our World Cup database of a diverse set of 20 players. Are you the visionary playmaker, the chaotic defender, or the ice-cold closer?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 text-left">
          <div className="p-6 bg-zinc-900 border-2 border-zinc-800">
            <Zap size={28} className="text-[#D4102F] mb-4" />
            <h3 className="font-bold text-xl mb-2 text-white">Vision & Flair</h3>
            <p className="text-zinc-400">Do you see the market before it exists, or do you thrive in the known?</p>
          </div>
          <div className="p-6 bg-zinc-900 border-2 border-zinc-800">
            <Shield size={28} className="text-[#D4102F] mb-4" />
            <h3 className="font-bold text-xl mb-2 text-white">Chaos & Defense</h3>
            <p className="text-zinc-400">How do you handle a crisis? Are you the shield or the storm?</p>
          </div>
          <div className="p-6 bg-zinc-900 border-2 border-zinc-800">
            <Users size={28} className="text-[#D4102F] mb-4" />
            <h3 className="font-bold text-xl mb-2 text-white">Execution</h3>
            <p className="text-zinc-400">Ideas are cheap. Are you the one who gets it across the finish line?</p>
          </div>
        </div>

        <div className="border-t-2 pt-12" style={{ borderColor: "var(--card-border)" }}>
          {session ? (
            <Link
              href="/draft/play"
              className="inline-block bg-[#D4102F] hover:bg-[#b00d25] text-white font-bold py-5 px-12 text-xl transition-colors"
            >
              Start the Draft →
            </Link>
          ) : (
            <div>
              <a
                href="/api/auth/google/start?next=/draft/play"
                className="inline-block font-bold py-5 px-12 text-xl transition-all mb-4"
                style={{
                  background: "var(--text-primary)",
                  color: "var(--page-bg)",
                }}
              >
                Sign in with Google to Play
              </a>
              <p className="font-medium" style={{ color: "var(--text-muted)" }}>You must be logged in to save your goated player card and join the Simulation League.</p>
            </div>
          )}
        </div>
        
      </div>
    </SidebarShell>
  );
}
