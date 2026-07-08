import { getSession } from "@/lib/auth";
import Link from "next/link";
import { SidebarShell } from "@/components/SidebarShell";

export default async function DraftLandingPage() {
  const session = await getSession();

  return (
    <SidebarShell activeNav="league">
      <div className="max-w-2xl mx-auto py-24 px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">The Builder Draft</h1>
        <p className="text-xl text-zinc-400 mb-12">
          Find out your exact startup archetype based on our World Cup database of 20 legendary players. Are you the visionary playmaker, the chaotic defender, or the ice-cold closer?
        </p>

        {session ? (
          <Link
            href="/draft/play"
            className="inline-block bg-[#D4102F] hover:bg-[#b00d25] text-white font-bold py-4 px-10 rounded-lg text-lg transition-transform hover:scale-105"
          >
            Start the Draft
          </Link>
        ) : (
          <div className="space-y-4">
            <a
              href="/api/auth/google/start?next=/draft/play"
              className="inline-block bg-white hover:bg-zinc-200 text-black font-bold py-4 px-10 rounded-lg text-lg transition-transform hover:scale-105"
            >
              Sign in with Google to Play
            </a>
            <p className="text-sm text-zinc-500">You must be logged in to save your goated player card and join the Simulation League.</p>
          </div>
        )}
      </div>
    </SidebarShell>
  );
}
