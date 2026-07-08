import { getSession } from "@/lib/auth";
import Link from "next/link";
import { SidebarShell } from "@/components/SidebarShell";
import { Users, Shield, Zap, Sparkles } from "lucide-react";

export default async function DraftLandingPage() {
  const session = await getSession();

  return (
    <SidebarShell activeNav="draft">
      <div className="relative min-h-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D4102F] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-10 pointer-events-none" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 80%)"
          }}
        />

        <div className="max-w-3xl mx-auto py-24 px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <Sparkles size={14} className="text-[#D4102F]" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">Discover your archetype</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-none" style={{ color: "var(--text-primary)" }}>
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4102F] to-orange-500">Builder</span><br/>Draft
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Find out your exact startup archetype based on our World Cup database of <strong className="text-white">20 legendary players</strong>. Are you the visionary playmaker, the chaotic defender, or the ice-cold closer?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left max-w-2xl mx-auto">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <Zap size={24} className="text-yellow-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Vision & Flair</h3>
              <p className="text-sm text-zinc-400">Do you see the market before it exists, or do you thrive in the known?</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <Shield size={24} className="text-blue-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Chaos & Defense</h3>
              <p className="text-sm text-zinc-400">How do you handle a crisis? Are you the shield or the storm?</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <Users size={24} className="text-green-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Execution</h3>
              <p className="text-sm text-zinc-400">Ideas are cheap. Are you the one who gets it across the finish line?</p>
            </div>
          </div>

          <div className="relative inline-block group">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#D4102F] to-orange-500 opacity-70 blur transition duration-500 group-hover:opacity-100 group-hover:duration-200"></div>
            {session ? (
              <Link
                href="/draft/play"
                className="relative flex items-center justify-center bg-black border border-white/10 text-white font-bold py-5 px-12 rounded-xl text-xl transition-transform hover:scale-[1.02]"
              >
                Start the Draft
              </Link>
            ) : (
              <a
                href="/api/auth/google/start?next=/draft/play"
                className="relative flex items-center justify-center bg-white text-black font-bold py-5 px-12 rounded-xl text-xl transition-transform hover:scale-[1.02]"
              >
                Sign in with Google to Play
              </a>
            )}
          </div>
          
          {!session && (
            <p className="text-sm text-zinc-500 mt-6 font-medium">You must be logged in to save your goated player card and join the Simulation League.</p>
          )}
        </div>
      </div>
    </SidebarShell>
  );
}
