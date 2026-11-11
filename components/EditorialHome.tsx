"use client";

// Editorial magazine front page (publication reskin) — matches the artifact:
// a tall lead card beside a 2-card stack, then a "New posts" grid, Head-to-Head
// and AI Decoded. Date chips, circular arrows, outlined pills, refined palette.
// Presentational only; save/like lives on the reading pages.

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCaseStudySlug } from "@/data/caseStudySlugs";

const ARCHIVO = "var(--font-archivo), 'Archivo', system-ui, sans-serif";
const NEWS = "var(--font-newsreader), 'Newsreader', Georgia, serif";

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
  caseStudies: MiniCase[];
  featured: MiniCase[];
  comparisons: { slug: string; title: string }[];
  aiDecoded: { slug: string; title: string }[];
  onSeeAllCases: () => void;
}

// Refined, muted card palette (lead stays brand red). Deterministic per company.
const CARD_BG = ["#111114", "#14362B", "#3A1320", "#172338", "#2A2410", "#241633"];
function hashStr(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
const cardColor = (seed: string) => CARD_BG[hashStr(seed) % CARD_BG.length];

function fmtDate(d?: string, year?: number) {
  if (d) {
    const dt = new Date(d);
    if (!isNaN(dt.getTime())) return dt.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  }
  return String(year ?? "");
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
      style={{ fontFamily: ARCHIVO, background: "rgba(0,0,0,0.38)", color: "#fff" }}
    >
      {children}
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold"
      style={{ fontFamily: ARCHIVO, border: "1.5px solid rgba(255,255,255,0.5)", color: "#fff" }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--brand-primary)" }} />
      {children}
    </span>
  );
}

function CircleArrow() {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full flex-shrink-0"
      style={{ width: 46, height: 46, background: "rgba(0,0,0,0.4)" }}
    >
      <ArrowUpRight size={20} strokeWidth={2} style={{ color: "#fff" }} />
    </span>
  );
}

function LeadCard({ s }: { s: MiniCase }) {
  return (
    <Link
      href={`/case-study/${getCaseStudySlug(s.id)}`}
      className="relative rounded-[22px] p-6 sm:p-9 lg:p-10 flex flex-col overflow-hidden transition-transform hover:-translate-y-0.5 h-full min-h-[420px]"
      style={{ background: "var(--brand-primary)" }}
    >
      <div className="flex items-start justify-between">
        <Chip>{fmtDate(s.publishedAt, s.year)}</Chip>
        <CircleArrow />
      </div>
      <div className="mt-auto pt-10">
        <Pill>{s.category} · {s.company}</Pill>
        <h3
          className="text-white font-extrabold tracking-tight leading-[0.95] mt-4 text-4xl sm:text-5xl lg:text-6xl"
          style={{ fontFamily: ARCHIVO, maxWidth: "13ch", letterSpacing: "-0.03em" }}
        >
          {s.title}
        </h3>
        <p className="mt-4 text-lg leading-relaxed" style={{ fontFamily: NEWS, color: "rgba(255,255,255,0.92)", maxWidth: "44ch" }}>
          {s.description}
        </p>
      </div>
    </Link>
  );
}

function Card({ s }: { s: MiniCase }) {
  return (
    <Link
      href={`/case-study/${getCaseStudySlug(s.id)}`}
      className="relative rounded-[20px] p-5 sm:p-6 flex flex-col overflow-hidden transition-transform hover:-translate-y-0.5 min-h-[210px] h-full"
      style={{ background: cardColor(s.company) }}
    >
      <div className="flex items-start justify-between">
        <Chip>{fmtDate(s.publishedAt, s.year)}</Chip>
        <CircleArrow />
      </div>
      <div className="mt-auto pt-8">
        <Pill>{s.category}</Pill>
        <h3
          className="text-white font-bold tracking-tight leading-[1.05] mt-3 text-2xl sm:text-3xl"
          style={{ fontFamily: ARCHIVO, maxWidth: "18ch", letterSpacing: "-0.02em" }}
        >
          {s.title}
        </h3>
      </div>
    </Link>
  );
}

function SectionHead({ title, right }: { title: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 mb-6 flex-wrap">
      <h2
        className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight leading-[0.9]"
        style={{ fontFamily: ARCHIVO, fontStyle: "italic", color: "var(--text-primary)", letterSpacing: "-0.03em" }}
      >
        {title}
      </h2>
      {right}
    </div>
  );
}

export function EditorialHome({ caseStudies, featured, comparisons, aiDecoded, onSeeAllCases }: Props) {
  const lead =
    [...caseStudies].sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""))[0] ?? featured[0];
  const rest = featured.filter((s) => s.id !== lead?.id);
  const side = rest.slice(0, 2);
  const grid = rest.slice(2, 8);
  const heads = comparisons.slice(0, 4);
  const decoded = aiDecoded.slice(0, 3);
  const shortVs = (t: string) => t.split("—")[0].split("–")[0].trim();

  return (
    <div className="pt-2">
      {/* ── Hero: lead + 2-card stack ───────────────────────────── */}
      <section className="px-4 sm:px-6 mb-12">
        <SectionHead
          title="Latest cases"
          right={
            <button onClick={onSeeAllCases} className="text-base italic" style={{ fontFamily: NEWS, color: "var(--text-primary)" }}>
              See all posts →
            </button>
          }
        />
        {lead && (
          <div className="grid lg:grid-cols-2 gap-4 items-stretch">
            <LeadCard s={lead} />
            <div className="grid grid-rows-2 gap-4">
              {side.map((s) => (
                <Card key={s.id} s={s} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ── New posts grid ──────────────────────────────────────── */}
      {grid.length > 0 && (
        <section className="px-4 sm:px-6 mb-12">
          <SectionHead
            title="New posts"
            right={
              <button onClick={onSeeAllCases} className="text-base italic underline" style={{ fontFamily: NEWS, color: "var(--text-primary)", textUnderlineOffset: 3 }}>
                view more
              </button>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grid.map((s) => (
              <Card key={s.id} s={s} />
            ))}
          </div>
        </section>
      )}

      {/* ── Head-to-Head ────────────────────────────────────────── */}
      {heads.length > 0 && (
        <section className="px-4 sm:px-6 mb-12">
          <SectionHead title="Head-to-Head" />
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
          <SectionHead title="AI Decoded" />
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
