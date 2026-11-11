"use client";

// Editorial magazine front page (publication reskin). Renders a lead story,
// a latest-cases card grid, a Head-to-Head strip and an AI Decoded list from
// the same published* data the library view uses. Cards link straight to the
// reading pages — save/like lives on those pages, so this stays presentational
// and low-risk. UI chrome (sidebar, top nav, search) is owned by HomeClient.

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCaseStudySlug } from "@/data/caseStudySlugs";
import { solidColorFor } from "@/lib/category-colors";
import { getCompanyLogoUrl } from "@/data/companyDomains";

const ARCHIVO = "var(--font-archivo), 'Archivo', system-ui, sans-serif";
const NEWS = "var(--font-newsreader), 'Newsreader', Georgia, serif";

// Minimal shape — HomeClient passes CaseStudyLite (no `content`), so we depend
// only on the fields rendered here.
type MiniCase = {
  id: string;
  title: string;
  company: string;
  category: string;
  year: number;
  description: string;
  publishedAt?: string;
};

interface Props {
  /** Full published set — used to pick the newest study as the lead. */
  caseStudies: MiniCase[];
  /** One study per category, pre-diversified by HomeClient — the card grid. */
  featured: MiniCase[];
  comparisons: { slug: string; title: string }[];
  aiDecoded: { slug: string; title: string }[];
  onSeeAllCases: () => void;
}

// A pill with a white hairline border, for use on a colored block.
function LightPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full text-xs font-semibold px-2.5 py-1"
      style={{ fontFamily: ARCHIVO, border: "1.5px solid rgba(255,255,255,0.55)", color: "#fff" }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#fff" }} />
      {children}
    </span>
  );
}

// Relevant image per card: the company's logo (from the domain map), shown on
// a white tile over the colored block. Hides itself if the logo 404s.
function LogoTile({ company, size = 44 }: { company: string; size?: number }) {
  const url = getCompanyLogoUrl(company);
  if (!url) return null;
  return (
    <span
      className="inline-flex items-center justify-center bg-white overflow-hidden flex-shrink-0"
      style={{ width: size, height: size, borderRadius: Math.round(size / 4), border: "1px solid rgba(0,0,0,0.08)" }}
    >
      <img
        src={url}
        alt={`${company} logo`}
        width={size}
        height={size}
        className="max-w-full max-h-full object-contain"
        style={{ padding: Math.round(size / 7) }}
        onError={(e) => {
          const p = e.currentTarget.parentElement as HTMLElement | null;
          if (p) p.style.display = "none";
        }}
      />
    </span>
  );
}

function Heading({ title }: { title: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-5">
      <h2
        className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[0.9]"
        style={{ fontFamily: ARCHIVO, fontStyle: "italic", color: "var(--text-primary)", letterSpacing: "-0.03em" }}
      >
        {title}
      </h2>
      <span className="flex-1 h-[3px]" style={{ background: "var(--card-border)" }} />
    </div>
  );
}

export function EditorialHome({ caseStudies, featured, comparisons, aiDecoded, onSeeAllCases }: Props) {
  const lead =
    [...caseStudies].sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""))[0] ??
    featured[0];
  const grid = featured.filter((s) => s.id !== lead?.id).slice(0, 6);
  const heads = comparisons.slice(0, 4);
  const decoded = aiDecoded.slice(0, 3);
  // "PhonePe vs Paytm — How UPI…" → "PhonePe vs Paytm"
  const shortVs = (t: string) => t.split("—")[0].split("–")[0].trim();

  return (
    <div>
      {/* ── Lead story ──────────────────────────────────────────── */}
      {lead && (
        <section className="px-4 sm:px-6 mb-10">
          <div className="flex items-baseline gap-4 mb-5 flex-wrap">
            <h2
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[0.9]"
              style={{ fontFamily: ARCHIVO, fontStyle: "italic", color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              Latest cases
            </h2>
            <button
              onClick={onSeeAllCases}
              className="text-base italic"
              style={{ fontFamily: NEWS, color: "var(--text-primary)" }}
            >
              See all {caseStudies.length} posts →
            </button>
          </div>
          <Link
            href={`/case-study/${getCaseStudySlug(lead.id)}`}
            className="block rounded-[22px] p-6 sm:p-9 lg:p-11 transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--brand-primary)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <LogoTile company={lead.company} size={56} />
              <ArrowUpRight size={20} strokeWidth={2} style={{ color: "#fff" }} />
            </div>
            <LightPill>
              {lead.category} · {lead.company}
            </LightPill>
            <h3
              className="text-white font-extrabold tracking-tight leading-[0.95] mt-4 text-3xl sm:text-5xl lg:text-6xl"
              style={{ fontFamily: ARCHIVO, maxWidth: "14ch", letterSpacing: "-0.03em" }}
            >
              {lead.title}
            </h3>
            <p className="mt-4 text-lg leading-relaxed" style={{ fontFamily: NEWS, color: "rgba(255,255,255,0.92)", maxWidth: "46ch" }}>
              {lead.description}
            </p>
            <span className="inline-flex items-center gap-1.5 mt-6 text-white font-semibold" style={{ fontFamily: ARCHIVO }}>
              Read the teardown <ArrowUpRight size={18} strokeWidth={2} />
            </span>
          </Link>
        </section>
      )}

      {/* ── Latest-cases grid ───────────────────────────────────── */}
      <section className="px-4 sm:px-6 mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {grid.map((s) => {
          const color = solidColorFor(s.company);
          return (
            <Link
              key={s.id}
              href={`/case-study/${getCaseStudySlug(s.id)}`}
              className="rounded-[18px] p-5 flex flex-col min-h-[220px] transition-transform hover:-translate-y-0.5"
              style={{ background: color }}
            >
              <div className="flex items-start justify-between mb-2">
                <LogoTile company={s.company} size={44} />
                <ArrowUpRight size={18} strokeWidth={2} style={{ color: "#fff" }} />
              </div>
              <div className="mt-auto">
                <LightPill>{s.category}</LightPill>
                <h3
                  className="text-white font-bold tracking-tight leading-[1.05] mt-3 text-2xl"
                  style={{ fontFamily: ARCHIVO, maxWidth: "16ch", letterSpacing: "-0.02em" }}
                >
                  {s.title}
                </h3>
                <p className="text-xs mt-2 font-semibold" style={{ fontFamily: ARCHIVO, color: "rgba(255,255,255,0.78)" }}>
                  {s.company} · {s.year}
                </p>
              </div>
            </Link>
          );
        })}
      </section>

      {/* ── Head-to-Head ────────────────────────────────────────── */}
      {heads.length > 0 && (
        <section className="px-4 sm:px-6 mb-12">
          <Heading title="Head-to-Head" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {heads.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="rounded-[18px] p-4 transition-transform hover:-translate-y-0.5"
                style={{ border: "1.5px solid var(--card-border)" }}
              >
                <p
                  className="text-xl font-extrabold tracking-tight leading-none"
                  style={{ fontFamily: ARCHIVO, color: "var(--text-primary)", letterSpacing: "-0.02em" }}
                >
                  {shortVs(c.title)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── AI Decoded ──────────────────────────────────────────── */}
      {decoded.length > 0 && (
        <section className="px-4 sm:px-6 mb-10">
          <Heading title="AI Decoded" />
          <div>
            {decoded.map((a) => (
              <Link
                key={a.slug}
                href={`/ai-decoded/${a.slug}`}
                className="block py-3.5 group"
                style={{ borderTop: "1.5px solid var(--card-border)" }}
              >
                <p
                  className="text-lg sm:text-xl font-bold tracking-tight leading-tight group-hover:opacity-70"
                  style={{ fontFamily: ARCHIVO, color: "var(--text-primary)", letterSpacing: "-0.01em" }}
                >
                  {a.title}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
