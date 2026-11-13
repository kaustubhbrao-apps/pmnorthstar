"use client";

// Editorial magazine front page — the artifact's Home view: a tall red lead
// beside an ink/mint 2-card stack, "New posts" (opening on the Physics Wallah
// exhibit card), Head-to-Head vsboxes, then AI Decoded as a link list.
// Presentational only; save/like lives on the reading pages.

import Link from "next/link";
import { getCaseStudySlug } from "@/data/caseStudySlugs";
import {
  EdCard,
  Tile,
  Cap,
  SectionHead,
  VsBox,
  PwExhibit,
  PW_ID,
  clip,
  splitVs,
  tintAt,
} from "@/components/Editorial";
import { photoFor } from "@/data/cardImages";

type MiniCase = {
  id: string;
  title: string;
  company: string;
  category: string;
  year: number;
  description: string;
  outcome?: string;
  region?: string;
  tags?: string[];
  publishedAt?: string;
};

type MiniCompare = { slug: string; title: string; eyebrow?: string; companyA?: string; companyB?: string };

interface Props {
  caseStudies: MiniCase[];
  featured: MiniCase[];
  comparisons: MiniCompare[];
  aiDecoded: { slug: string; title: string }[];
  onSeeAllCases: () => void;
}

const href = (s: MiniCase) => `/case-study/${getCaseStudySlug(s.id)}`;
const kicker = (s: MiniCase) => `${s.category} · ${s.region === "India" ? "India" : s.company}`;
const pic = (s: MiniCase) => photoFor([...(s.tags ?? []), s.title, s.category, s.region, s.company], s.id);

export function EditorialHome({ caseStudies, featured, comparisons, aiDecoded, onSeeAllCases }: Props) {
  const lead =
    [...caseStudies].sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""))[0] ?? featured[0];
  const rest = featured.filter((s) => s.id !== lead?.id);
  const side = rest.slice(0, 2);
  const grid = rest.slice(2, 8);
  const pw = caseStudies.find((s) => s.id === PW_ID);
  const heads = comparisons.slice(0, 4);
  const decoded = aiDecoded.slice(0, 5);

  return (
    <div className="site-inner pt-1">
      {/* ── Latest cases: lead + side stack ─────────────────────────────── */}
      <SectionHead title="Latest cases" more="See all posts →" onMore={onSeeAllCases} />
      {lead && (
        <div className="hero">
          <EdCard href={href(lead)}>
            <Tile
              tint="feature"
              chip={String(lead.year)}
              pill={kicker(lead)}
              title={lead.title}
              dek={lead.description}
              img={pic(lead)}
              brand={lead.company}
            />
          </EdCard>
          <div className="side">
            {side.map((s, i) => (
              <EdCard key={s.id} href={href(s)}>
                <Tile
                  tint={i === 0 ? "ink" : "mint"}
                  chip={String(s.year)}
                  pill={kicker(s)}
                  title={s.title}
                  dek={clip(s.description, 110)}
                  size="xl"
                  img={pic(s)}
                  brand={s.company}
                />
              </EdCard>
            ))}
          </div>
        </div>
      )}

      {/* ── New posts ───────────────────────────────────────────────────── */}
      {(grid.length > 0 || pw) && (
        <>
          <SectionHead title="More cases" more="view all" right onMore={onSeeAllCases} />
          <div className="grid3">
            {pw && (
              <EdCard href={href(pw)}>
                <Tile tint="blush" className="exhost" chip="Featured">
                  <PwExhibit />
                </Tile>
                <Cap k="Strategy · Edtech" title="Physics Wallah: revenue up, losses down" />
              </EdCard>
            )}
            {grid.map((s, i) => (
              <EdCard key={s.id} href={href(s)}>
                <Tile tint={tintAt(i + 1)} minH={360} chip={String(s.year)} title={s.title} size="l" img={pic(s)} brand={s.company} />
                <Cap k={kicker(s)} title={clip(s.outcome, 80)} />
              </EdCard>
            ))}
          </div>
        </>
      )}

      {/* ── Head-to-Head ────────────────────────────────────────────────── */}
      {heads.length > 0 && (
        <>
          <SectionHead title="Head-to-Head" more="See all →" moreHref="/compare" />
          <div className="heads">
            {heads.map((c) => {
              const { a, b } = splitVs(c.title, c.companyA, c.companyB);
              return <VsBox key={c.slug} a={a} b={b} m={c.eyebrow} href={`/compare/${c.slug}`} />;
            })}
          </div>
        </>
      )}

      {/* ── AI Decoded ──────────────────────────────────────────────────── */}
      {decoded.length > 0 && (
        <>
          <SectionHead title="AI Decoded" more="See all →" moreHref="/ai-decoded" />
          <div className="max-w-3xl">
            {decoded.map((a) => (
              <Link key={a.slug} href={`/ai-decoded/${a.slug}`} className="rellink">
                {a.title} →
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
