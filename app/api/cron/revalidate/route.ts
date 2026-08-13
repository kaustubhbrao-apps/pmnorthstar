// Publishes scheduled content on its date, without short ISR windows.
//
// Scheduled publishing used to depend entirely on `revalidate = 3600`: a
// future-dated page 404s until its publishedAt passes, and only becomes live
// when ISR next regenerates. That coupling meant the cache window had to stay
// short for publishing to be timely — which kept cache hit rates low, sent
// most requests to the origin, and showed up as slow TTFB.
//
// Decoupling the two lets pages cache for a day while publishing stays
// same-day: this runs just after UTC midnight (when `new Date("YYYY-MM-DD")`
// boundaries tick over) and explicitly revalidates whatever just went live.
//
// Requires CRON_SECRET. Vercel sends it as `Authorization: Bearer <secret>`
// on scheduled invocations.

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { publishedCaseStudies, getCaseStudySlug } from "@/data/caseStudies";
import { publishedTopics } from "@/data/topics";
import { publishedComparisons } from "@/data/comparisons";
import { publishedDrills } from "@/data/drills";
import { publishedAIDecoded } from "@/data/aiDecodedManifest";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Index and aggregate surfaces always change when anything publishes.
const ALWAYS_REVALIDATE = [
  "/",
  "/ai-decoded",
  "/simulate",
  "/india",
  "/sitemap.xml",
];

// Look back further than a single day so one failed run doesn't strand a
// piece of content until its next edit. Re-revalidating a path that was
// already refreshed is harmless.
const LOOKBACK_DAYS = 3;

function publishedWithinLookback(publishedAt: string | undefined): boolean {
  if (!publishedAt) return false;
  const at = new Date(publishedAt).getTime();
  if (Number.isNaN(at)) return false;
  const now = Date.now();
  return at <= now && now - at <= LOOKBACK_DAYS * 24 * 60 * 60 * 1000;
}

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;

  // Fail closed. Without a configured secret this endpoint would let anyone
  // force revalidation of every index page on the site.
  if (!secret) {
    console.error("cron/revalidate: CRON_SECRET is not set");
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }
  if (req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const paths = [...ALWAYS_REVALIDATE];

    for (const c of publishedCaseStudies()) {
      if (publishedWithinLookback(c.publishedAt)) {
        paths.push(`/case-study/${getCaseStudySlug(c.id)}`);
      }
    }
    for (const t of publishedTopics()) {
      if (publishedWithinLookback(t.publishedAt)) paths.push(`/topics/${t.slug}`);
    }
    for (const c of publishedComparisons()) {
      if (publishedWithinLookback(c.publishedAt)) paths.push(`/compare/${c.slug}`);
    }
    for (const d of publishedDrills()) {
      if (publishedWithinLookback(d.publishedAt)) paths.push(`/simulate/${d.slug}`);
    }
    for (const a of publishedAIDecoded()) {
      if (publishedWithinLookback(a.publishedAt)) paths.push(`/ai-decoded/${a.slug}`);
    }

    for (const p of paths) revalidatePath(p);

    console.log(`cron/revalidate: revalidated ${paths.length} paths`);
    return NextResponse.json({ ok: true, count: paths.length, paths });
  } catch (err) {
    console.error("cron/revalidate error:", err);
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}
