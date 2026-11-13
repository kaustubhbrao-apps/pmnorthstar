// Server component for a single drill. Loads the drill from
// data/drills.ts, refuses to render anything if publishedAt is in
// the future (404), and hands the data off to the client-side
// SimulatePlayer for the interactive flow.

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { getDrillBySlug, publishedDrills } from "@/data/drills";
import { drillTitle, drillDescription, normalizeDrillCategory } from "@/lib/drills";
import { SidebarShell } from "@/components/SidebarShell";
import { Footer } from "@/components/Footer";
import { BigDiv, Pill } from "@/components/Editorial";
import { SimulatePlayer } from "./SimulatePlayer";

// ISR: pre-render published drills as static HTML and revalidate hourly.
// Future-dated drills aren't pre-built — they render on-demand, hit the
// publishedAt gate below (404), and go live within ~1h of their date once
// the revalidation window turns over. Matches the case-study/topic/compare
// scheduled-publishing path; replaces the old force-dynamic render.
// 6h. Scheduled content normally goes live via /api/cron/revalidate just
// after UTC midnight, so this window is a fallback, not the mechanism.
// Kept at 6h rather than 24h so a missed cron run (or an unset
// CRON_SECRET) delays a publish by hours, not a full day.
export const revalidate = 21600;

export function generateStaticParams() {
  return publishedDrills().map((drill) => ({ slug: drill.slug }));
}

interface PageProps {
  params: { slug: string };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pmnorthstar.in";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const drill = getDrillBySlug(params.slug);
  if (!drill) return {};
  const published = new Date(drill.publishedAt) <= new Date();
  if (!published) return {};

  return {
    title: `${drillTitle(drill)} — SimulateIt`,
    description: drillDescription(drill),
    alternates: { canonical: `${SITE_URL}/simulate/${drill.slug}` },
  };
}

export default function DrillPage({ params }: PageProps) {
  const drill = getDrillBySlug(params.slug);
  if (!drill) notFound();
  if (new Date(drill.publishedAt) > new Date()) notFound();

  return (
    <SidebarShell
      activeNav="simulate"
      backHref="/"
      backLabelDesktop="Back to the library"
      backLabelMobile="Back"
      shareTitle={`SimulateIt Drill: ${drillTitle(drill)}`}
      shareText={drill.principle}
    >
      {/* SimulatePlayer calls useSearchParams, which opts its whole Suspense
          boundary out of server rendering. The result was that every drill
          page served crawlers ~418 characters — site chrome plus the string
          "Loading simulation..." — with no heading and none of the scenario.
          Anything that must be in the initial HTML has to live outside that
          boundary, so the briefing is rendered here, on the server.

          It stays in the DOM for the whole drill and is hidden by CSS once
          play starts (see .drill-briefing in globals.css, keyed off the
          data-phase the player sets). Hiding it in React instead would put
          it back inside the boundary and undo the point of the change. */}
      <div className="drill-shell site-inner pb-16">
        <header className="drill-briefing max-w-4xl">
          <BigDiv>SimulateIt · {normalizeDrillCategory(drill.category)}</BigDiv>
          <div className="drillcard">
            <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
              <Pill>{drill.type}</Pill>
              <span className="progress">
                ~{drill.estimatedMinutes} min{drill.year ? ` · ${drill.year}` : ""}
              </span>
            </div>
            <h1 className="drill-q">{drillTitle(drill)}</h1>
            <div className="serif mt-4 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {drill.intro
                .split("\n\n")
                .map((para) => para.trim())
                .filter(Boolean)
                .map((para, i) => (
                  <p key={i} className="mb-3">
                    {para}
                  </p>
                ))}
              <p>
                <strong style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>The principle:</strong>{" "}
                {drill.principle}
              </p>
            </div>
          </div>
        </header>
        <Suspense fallback={<div className="p-12 text-center opacity-50">Loading simulation...</div>}>
          <SimulatePlayer drill={drill} />
        </Suspense>
      </div>
      <Footer />
    </SidebarShell>
  );
}


