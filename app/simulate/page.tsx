// SimulateIt landing page. Server component — pulls the published drills
// from the auto-generated data/drills.ts and hands a lite, category-
// normalized list to the client-side filterable grid. Future-dated drills
// are filtered out by publishedDrills() at request time.

import type { Metadata } from "next";
import { drillTitle, normalizeDrillCategory } from "@/lib/drills";
import { SidebarShell } from "@/components/SidebarShell";
import { Footer } from "@/components/Footer";
import { ToolHero } from "@/components/Editorial";
import { publishedDrills } from "@/data/drills";
import { DrillGrid, type DrillCard } from "./DrillGrid";

// 6h, matching the rest of the scheduled-publishing surfaces. The 60s
// window that used to live here only served a play counter that read from
// SimulateAttempt — a table the analytics notes flag as junk — so both went.
export const revalidate = 21600;

export const metadata: Metadata = {
  title: "SimulateIt — PM Case Simulations",
  description: "Step into real product crises and make the call. Time-boxed PM simulations built from actual startup decisions. Free, no signup required.",
  alternates: { canonical: "/simulate" },
  openGraph: { title: "SimulateIt — PM Case Simulations", description: "Step into real product crises and make the call." },
};

export default function SimulatePage() {
  // In dev, surface every drill regardless of publishedAt so authoring
  // doesn't require date-juggling. Production respects the schedule.
  const isDev = process.env.NODE_ENV !== "production";
  const cutoff = isDev ? new Date("2099-12-31") : new Date();

  const all = publishedDrills(cutoff);

  // Lite, category-normalized data for the client-side filterable grid.
  // Deliberately narrow — the heavy `nodes` tree never reaches the browser.
  const drillCards: DrillCard[] = all.map((d) => ({
    slug: d.slug,
    title: drillTitle(d),
    type: d.type,
    estimatedMinutes: d.estimatedMinutes ?? 8,
    excerpt: (d.intro || "").split("\n\n")[0],
    category: normalizeDrillCategory(d.category),
    year: d.year,
  }));

  return (
    <SidebarShell activeNav="simulate">
      <div className="site-inner pt-8 pb-16">
        <ToolHero pill="Practice" title="SimulateIt">
          Real product decisions, one scenario at a time. Pick a drill, make the calls, see what a sharp PM would do —
          and score across product thinking, business judgement and founder instinct.
        </ToolHero>
        <DrillGrid drills={drillCards} />
      </div>
      <Footer />
    </SidebarShell>
  );
}
