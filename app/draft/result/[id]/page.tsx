import { getSession } from "@/lib/auth";
import { SidebarShell } from "@/components/SidebarShell";
import { DRAFT_PLAYERS } from "@/lib/draft/players";
import { notFound } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { DraftCardActions } from "./DraftCardActions";

export default async function DraftResultPage({ params, searchParams }: { params: { id: string }, searchParams: { v: string, e: string, c: string, d: string, f: string } }) {
  const session = await getSession();
  let attemptsCount = 0;
  if (session) {
    attemptsCount = await prisma.builderDraftAttempt.count({
      where: { userId: session.id }
    });
  }
  const player = DRAFT_PLAYERS.find(p => p.id === params.id);

  if (!player) {
    notFound();
  }

  const ogImageUrl = `/api/draft/og?id=${player.id}&v=${searchParams.v}&e=${searchParams.e}&c=${searchParams.c}&d=${searchParams.d}&f=${searchParams.f}`;

  return (
    <SidebarShell activeNav="draft">
      <div className="relative min-h-full flex items-center justify-center py-12">
        {/* Ambient glow matching the brand */}
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#D4102F] rounded-full blur-[200px] opacity-[0.15] pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-yellow-500 rounded-full blur-[200px] opacity-[0.1] pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <span className="text-sm font-mono font-bold tracking-widest text-zinc-300">DRAFT COMPLETE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase text-white">
              You are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4102F] to-orange-500">{player.name}</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Based on your operating style, this is your exact startup archetype.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center">
            <div className="w-full lg:w-[45%] relative group">
              {/* Card glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-b from-[#D4102F] to-orange-500 opacity-20 blur-xl rounded-[2rem] transition-opacity duration-500 group-hover:opacity-40" />
              <Image 
                src={ogImageUrl} 
                alt={`${player.name} Player Card`}
                width={1200}
                height={630}
                className="w-full relative rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 transform transition-transform duration-500 hover:scale-[1.02]"
                unoptimized
              />
              <div className="relative mt-8 z-20">
                <DraftCardActions ogImageUrl={ogImageUrl} playerId={player.id} />
              </div>
            </div>

            <div className="w-full lg:w-[45%] space-y-8">
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <h2 className="text-3xl font-black uppercase text-[#D4102F] mb-4 tracking-tight">The {player.archetype}</h2>
                <p className="text-lg text-zinc-300 leading-relaxed font-medium">
                  {player.description}
                </p>
              </div>
              
              <div className="p-8 rounded-3xl bg-gradient-to-b from-[#D4102F]/10 to-transparent border border-[#D4102F]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4102F] rounded-full blur-[80px] opacity-20" />
                
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-white">Enter the League</h3>
                <p className="text-zinc-400 mb-8 font-medium">
                  You now have a verified archetype profile. Put your skills to the test in the Simulation League against builders of your exact level.
                </p>
                <div className="flex flex-col gap-4 relative z-10">
                  <a 
                    href="/simulate" 
                    className="flex items-center justify-center w-full bg-[#D4102F] hover:bg-[#b00d25] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(212,16,47,0.3)]"
                  >
                    Join the Simulation League
                  </a>
                  
                  {attemptsCount === 1 && (
                    <Link 
                      href="/draft/play" 
                      className="flex items-center justify-center w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all hover:scale-[1.02]"
                    >
                      Not happy? Use 1 Lifeline to retake.
                    </Link>
                  )}
                  {attemptsCount >= 2 && (
                    <div className="text-center px-4 py-3 rounded-lg bg-black/40 border border-white/5">
                      <p className="text-xs text-zinc-400 font-mono uppercase tracking-widest">
                        Lifeline exhausted. Archetype locked.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarShell>
  );
}
