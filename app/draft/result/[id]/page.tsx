import { getSession } from "@/lib/auth";
import { SidebarShell } from "@/components/SidebarShell";
import { DRAFT_PLAYERS } from "@/lib/draft/players";
import { notFound } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

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
    <SidebarShell activeNav="league">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">You have been drafted!</h1>
          <p className="text-xl text-zinc-400">
            Based on your operating style, you are the startup equivalent of <strong className="text-white">{player.name}</strong>.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <Image 
              src={ogImageUrl} 
              alt={`${player.name} Player Card`}
              width={1200}
              height={630}
              className="w-full rounded-2xl shadow-2xl border border-zinc-800"
              unoptimized
            />
          </div>

          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#D4102F]">{player.archetype}</h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              {player.description}
            </p>
            
            <div className="pt-8 border-t border-zinc-800 mt-8">
              <h3 className="text-2xl font-bold mb-4">Join the Simulation League</h3>
              <p className="text-zinc-400 mb-6">
                You now have a verified archetype profile. The next step is to put your skills to the test in the Simulation League. Compete against builders of your level.
              </p>
              <div className="flex flex-col gap-4">
                <a 
                  href="/simulate" 
                  className="inline-block w-full text-center bg-[#D4102F] hover:bg-[#b00d25] text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform hover:scale-105"
                >
                  Enter the League
                </a>
                
                {attemptsCount === 1 && (
                  <Link 
                    href="/draft/play" 
                    className="inline-block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform hover:scale-105"
                  >
                    Not happy? Use your 1 Lifeline to retake.
                  </Link>
                )}
                {attemptsCount >= 2 && (
                  <p className="text-xs text-zinc-500 mt-2 text-center">You have used your lifeline. Your archetype is locked forever.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarShell>
  );
}
