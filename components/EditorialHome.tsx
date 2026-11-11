"use client";

// Editorial magazine front page (publication reskin). Renders a lead story,
// a latest-cases card grid, a Head-to-Head strip and an AI Decoded list from
// the same published* data the library view uses. Cards link straight to the
// reading pages — save/like lives on those pages, so this stays presentational
// and low-risk. UI chrome (sidebar, top nav, search) is owned by HomeClient.

import Link from "next/link";
import { useState } from "react";
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

function brandMonogram(company: string) {
  const parts = company.replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  const m = parts.length >= 2 ? parts[0][0] + parts[1][0] : (parts[0] || "?").slice(0, 2);
  return m.toUpperCase();
}

// The per-card image: the company's logo on a white panel, or a bold monogram
// fallback so a card is never blank. `tile` = small corner mark; `lead` = a
// full panel that fills the lead card's right side.
function BrandImage({
  company,
  accent,
  variant = "tile",
}: {
  company: string;
  accent: string;
  variant?: "tile" | "lead";
}) {
  const url = getCompanyLogoUrl(company);
  const [broken, setBroken] = useState(false);
  const showLogo = !!url && !broken;

  if (variant === "lead") {
    return (
      <div
        className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden"
        style={{ minHeight: 200 }}
      >
        {showLogo ? (
          <img
            src={url!}
            alt={`${company} logo`}
            className="object-contain"
            style={{ width: 132, height: 132 }}
            onError={() => setBroken(true)}
          />
        ) : (
          <span style={{ fontFamily: ARCHIVO, color: accent, fontWeight: 800, fontSize: 84, lineHeight: 1, letterSpacing: "-0.03em" }}>
            {brandMonogram(company)}
          </span>
        )}
      </div>
    );
  }

  return (
    <span
      className="inline-flex items-center justify-center bg-white overflow-hidden flex-shrink-0 rounded-xl"
      style={{ width: 44, height: 44, border: "1px solid rgba(0,0,0,0.08)" }}
    >
      {showLogo ? (
        <img
          src={url!}
          alt={`${company} logo`}
          className="object-contain"
          style={{ width: 30, height: 30 }}
          onError={() => setBroken(true)}
        />
      ) : (
        <span style={{ fontFamily: ARCHIVO, color: accent, fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em" }}>
          {brandMonogram(company)}
        </span>
      )}
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
            className="block rounded-[22px] overflow-hidden transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--brand-primary)" }}
          >
            <div className="grid md:grid-cols-[1.15fr_0.85fr] items-stretch">
              <div className="p-6 sm:p-9 lg:p-11 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <LightPill>
                    {lead.category} · {lead.company}
                  </LightPill>
                  <ArrowUpRight size={20} strokeWidth={2} style={{ color: "#fff" }} />
                </div>
                <h3
                  className="text-white font-extrabold tracking-tight leading-[0.95] mt-2 text-3xl sm:text-5xl lg:text-6xl"
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
              </div>
              <div className="hidden md:flex p-6 lg:p-8">
                <BrandImage company={lead.company} accent="var(--brand-primary)" variant="lead" />
              </div>
            </div>
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
                <BrandImage company={s.company} accent={color} variant="tile" />
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
