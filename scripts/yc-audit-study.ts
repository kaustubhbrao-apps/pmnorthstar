// Runs CheckIt across a sample of YC companies and writes an aggregate.
//
//   npx tsx scripts/yc-audit-study.ts [sampleSize]
//
// Company list comes from the public yc-oss/api dataset (a community mirror
// of YC's public directory). Only the homepage of each company is fetched,
// once, at a concurrency low enough to be a rounding error on any host.
//
// Output includes both the aggregate distributions and a per-company row
// (name, batch, domain, score, band) so the report can publish the full
// ranked table. Every figure is reproducible by running this script again.

import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { runAudit } from "../lib/checkit/audit";
import { DIMENSIONS } from "../lib/checkit/dimensions";

const DATASET = "https://yc-oss.github.io/api/companies/all.json";
const CONCURRENCY = 6;
const SAMPLE = Number(process.argv[2] ?? 500);
const OUT_DIR = path.join(process.cwd(), "data");

const SEASON_ORDER: Record<string, number> = { Winter: 0, Spring: 1, Summer: 2, Fall: 3 };

type Company = {
  name: string;
  slug: string;
  website: string;
  batch: string;
  status: string;
  industry?: string;
  small_logo_thumb_url?: string;
};

type Row = {
  name: string;
  slug: string;
  batch: string;
  domain: string;
  score: number;
  band: string;
  // Whether public/yc-logos/<slug>.webp exists. Some directory entries
  // point at a placeholder rather than a real logo.
  logo: boolean;
};

const RAW_LOGOS = path.join(process.cwd(), ".yc-logos-raw");

// One small thumbnail per company, fetched alongside the audit it belongs to.
// Entries whose logo URL is the directory's "missing.png" placeholder are
// skipped rather than downloaded and discarded later.
async function fetchLogo(company: Company): Promise<boolean> {
  const url = company.small_logo_thumb_url;
  if (!url || !/^https?:\/\//i.test(url) || /missing\.png$/i.test(url)) return false;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 100) return false;
    fs.writeFileSync(path.join(RAW_LOGOS, `${company.slug}.png`), buf);
    return true;
  } catch {
    return false;
  }
}

function domainOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function batchRank(batch: string): number {
  const m = /^(Winter|Spring|Summer|Fall)\s+(\d{4})$/.exec(batch ?? "");
  if (!m) return -1;
  return Number(m[2]) * 10 + SEASON_ORDER[m[1]];
}

async function loadCompanies(): Promise<Company[]> {
  const cachePath = path.join(process.cwd(), ".yc-cache.json");
  if (fs.existsSync(cachePath)) {
    return JSON.parse(fs.readFileSync(cachePath, "utf8"));
  }
  const res = await fetch(DATASET);
  const all = (await res.json()) as Company[];
  fs.writeFileSync(cachePath, JSON.stringify(all), "utf8");
  return all;
}

async function main() {
  const all = await loadCompanies();

  // Active companies with a real website, newest batches first. Recency is
  // the point: the question is what a site built in the last couple of years
  // looks like, not what a 2012 company has since fixed.
  const pool = all
    .filter((c) => c.status === "Active" && c.website && /^https?:\/\//i.test(c.website))
    .filter((c) => batchRank(c.batch) > 0)
    .sort((a, b) => batchRank(b.batch) - batchRank(a.batch))
    .slice(0, SAMPLE);

  fs.rmSync(RAW_LOGOS, { recursive: true, force: true });
  fs.mkdirSync(RAW_LOGOS, { recursive: true });

  console.log(`Auditing ${pool.length} companies at concurrency ${CONCURRENCY}...`);

  const scores: number[] = [];
  const rows: Row[] = [];
  const checkPass = new Map<string, number>();
  const checkLabel = new Map<string, string>();
  const dimTotals = new Map<string, { score: number; max: number }>();
  const batchCounts = new Map<string, number>();
  const industryScores = new Map<string, number[]>();
  let unreachable = 0;
  let done = 0;

  const queue = [...pool];

  async function worker() {
    for (;;) {
      const company = queue.shift();
      if (!company) return;
      try {
        const [result, hasLogo] = await Promise.all([
          runAudit(company.website),
          fetchLogo(company),
        ]);
        done++;
        if (done % 25 === 0) console.log(`  ${done}/${pool.length}`);

        // A fatal result (site down, non-HTML, 4xx/5xx) scores 0 across the
        // board. Counting those as a genuine zero would smear the
        // distribution, so they're tracked separately.
        const anyChecks = result.dimensions.some((d) => d.checks.length > 0);
        if (!anyChecks || result.totalScore === 0) {
          unreachable++;
          continue;
        }

        scores.push(result.totalScore);
        rows.push({
          name: company.name,
          slug: company.slug,
          batch: company.batch,
          domain: domainOf(company.website),
          score: result.totalScore,
          band: result.band,
          logo: hasLogo,
        });
        batchCounts.set(company.batch, (batchCounts.get(company.batch) ?? 0) + 1);
        const ind = company.industry || "Unknown";
        if (!industryScores.has(ind)) industryScores.set(ind, []);
        industryScores.get(ind)!.push(result.totalScore);

        for (const d of result.dimensions) {
          const prev = dimTotals.get(d.id) ?? { score: 0, max: 0 };
          dimTotals.set(d.id, { score: prev.score + d.score, max: prev.max + d.maxScore });
          for (const c of d.checks) {
            checkLabel.set(c.id, c.label);
            checkPass.set(c.id, (checkPass.get(c.id) ?? 0) + (c.pass ? 1 : 0));
          }
        }
      } catch {
        unreachable++;
        done++;
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  const n = scores.length;
  if (n === 0) throw new Error("No successful audits — aborting rather than writing an empty study.");

  const sorted = [...scores].sort((a, b) => a - b);
  const pct = (p: number) => sorted[Math.min(sorted.length - 1, Math.floor((p / 100) * sorted.length))];
  const mean = Math.round((scores.reduce((a, b) => a + b, 0) / n) * 10) / 10;

  // 10-point buckets, matching CheckIt's own band boundaries.
  const buckets = Array.from({ length: 10 }, (_, i) => ({
    range: `${i * 10}-${i * 10 + 9}`,
    count: scores.filter((s) => s >= i * 10 && s < i * 10 + 10).length,
  }));

  const checks = Array.from(checkPass.entries())
    .map(([id, passes]) => ({
      id,
      label: checkLabel.get(id) ?? id,
      passRate: Math.round((passes / n) * 1000) / 10,
    }))
    .sort((a, b) => a.passRate - b.passRate);

  const dimensions = DIMENSIONS.map((d) => {
    const t = dimTotals.get(d.id)!;
    return {
      id: d.id,
      label: d.label,
      avgPct: Math.round((t.score / t.max) * 1000) / 10,
      maxPoints: Math.round(t.max / n),
    };
  }).sort((a, b) => a.avgPct - b.avgPct);

  const batches = Array.from(batchCounts.entries())
    .sort((a, b) => batchRank(b[0]) - batchRank(a[0]))
    .map(([batch, count]) => ({ batch, count }));

  const industries = Array.from(industryScores.entries())
    .filter(([, arr]) => arr.length >= 15)
    .map(([industry, arr]) => ({
      industry,
      count: arr.length,
      avg: Math.round((arr.reduce((a, b) => a + b, 0) / arr.length) * 10) / 10,
    }))
    .sort((a, b) => b.avg - a.avg);

  rows.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

  // Downscale the raw thumbnails into WebP the site can serve directly.
  try {
    execFileSync("python3", [path.join("scripts", "optimize-yc-logos.py")], { stdio: "inherit" });
    fs.rmSync(RAW_LOGOS, { recursive: true, force: true });
  } catch (e) {
    console.warn("Logo optimisation skipped (python3 + Pillow required):", e);
  }

  const study = {
    ranAt: new Date().toISOString().slice(0, 10),
    attempted: pool.length,
    audited: n,
    unreachable,
    mean,
    median: pct(50),
    p10: pct(10),
    p90: pct(90),
    buckets,
    checks,
    dimensions,
    batches,
    industries,
    rows,
  };

  const out = `// ⚠️  AUTO-GENERATED — DO NOT EDIT BY HAND.
// Produced by scripts/yc-audit-study.ts. Carries the aggregate stats plus one
// row per audited company (name, batch, domain, score, band, logo), sorted by
// score descending. Re-run the script to refresh; hand edits are lost.

export interface StudyCheck { id: string; label: string; passRate: number }
export interface StudyDimension { id: string; label: string; avgPct: number; maxPoints: number }
export interface StudyRow { name: string; slug: string; batch: string; domain: string; score: number; band: string; logo: boolean }

export const YC_STUDY = ${JSON.stringify(study, null, 2)} as const;
`;
  fs.writeFileSync(path.join(OUT_DIR, "yc-study.ts"), out, "utf8");

  console.log(`\n✓ data/yc-study.ts written`);
  console.log(`  audited ${n}/${pool.length}, ${unreachable} unreachable`);
  console.log(`  mean ${mean}, median ${study.median}, p10 ${study.p10}, p90 ${study.p90}`);
  console.log(`  ${rows.length} named rows, top: ${rows[0].name} (${rows[0].score})`);
}

main();
