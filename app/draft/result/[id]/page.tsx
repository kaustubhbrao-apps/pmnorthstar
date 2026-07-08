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
      <div className="max-w-5xl mx-auto py-12 px-6">
        
        <div className="mb-8 border-b-2 border-zinc-800 pb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-block bg-white text-black px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
              Draft Complete
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white m-0">
              You are {player.name}
            </h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/2">
            <div className="bg-zinc-900 border-2 border-zinc-800 p-2 mb-6">
              <Image 
                src={ogImageUrl} 
                alt={`${player.name} Player Card`}
                width={1200}
                height={630}
                className="w-full h-auto border-2 border-zinc-800"
                unoptimized
              />
            </div>
            <DraftCardActions ogImageUrl={ogImageUrl} playerId={player.id} />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-[#D4102F] text-white p-8 mb-8 shadow-[8px_8px_0_0_rgba(255,255,255,0.1)]">
              <h2 className="text-3xl font-black uppercase mb-4 tracking-tight">The {player.archetype}</h2>
              <p className="text-xl font-medium leading-relaxed">
                {player.description}
              </p>
            </div>
            
            <div className="border-2 border-zinc-800 p-8 bg-zinc-900">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-white">Enter the League</h3>
              <p className="text-zinc-400 mb-8 font-medium">
                You now have a verified archetype profile. Put your skills to the test in the Simulation League against builders of your exact level.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="/simulate" 
                  className="block w-full text-center bg-white hover:bg-zinc-200 text-black font-black uppercase tracking-wider py-4 px-8 text-xl transition-colors"
                >
                  Join the Simulation League
                </a>
                
                {attemptsCount === 1 && (
                  <Link 
                    href="/draft/play" 
                    className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 px-8 text-lg transition-colors"
                  >
                    Not happy? Use 1 Lifeline to retake.
                  </Link>
                )}
                {attemptsCount >= 2 && (
                  <div className="text-center px-4 py-3 bg-zinc-950 border border-zinc-800">
                    <p className="text-xs text-[#D4102F] font-bold uppercase tracking-widest">
                      Lifeline exhausted. Archetype locked.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarShell>
  );
}
