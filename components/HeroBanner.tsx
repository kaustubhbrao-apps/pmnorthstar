"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { aiDecodedManifest } from "@/data/aiDecodedManifest";
import {
  CASE_STUDY_COUNT,
  BOOK_COUNT,
  PLAYLIST_COUNT,
  DRILL_COUNT,
} from "@/data/inventory-counts";

interface HeroBannerProps {
  onNavChange: (nav: string) => void;
}

// Split hero: library positioning on the left, two stacked sidebar
// items on the right (CheckIt + the latest AI Decoded read).
//
// Design intent — humanized, not template-card-grid. The right column
// is asymmetric: CheckIt is a heavier "tool" panel with a real score
// widget inside it (shows what the tool does, not just describes it),
// and AI Decoded is a quieter "magazine sidebar" item with a real
// date and the actual latest title, not a generic NEW badge.

// Latest article surfaces in the AI Decoded card. The manifest is
// already pre-sorted newest-first by sync-content.ts.
const latestAI = aiDecodedManifest[0];

// CheckIt total = 35 weighted checks across 7 dimensions (see lib/checkit/dimensions.ts).
const CHECKIT_TOTAL = 35;

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
}

export function HeroBanner({ onNavChange }: HeroBannerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const updateActiveSlide = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    setActiveSlide(Math.round(scrollLeft / clientWidth));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveSlide, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveSlide);
  }, [updateActiveSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="mx-4 sm:mx-6 mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5 lg:gap-8"
    >
      {/* ── Left: library positioning ─────────────────────────────────── */}
      <div
        className="rounded-2xl px-5 sm:px-10 py-8 sm:py-12"
        style={{
          background: "var(--card-bg)",
          border: "1.5px solid var(--card-border)",
        }}
      >
        <div className="flex items-center gap-2.5 mb-7">
          <span
            className="w-5 h-px"
            style={{ background: "var(--brand-primary)" }}
          />
          <span
            className="text-sm font-mono uppercase"
            style={{
              color: "var(--brand-primary)",
              letterSpacing: "0.16em",
            }}
          >
            pm library · 2026
          </span>
        </div>

        <h1
          className="font-display font-bold leading-[1.02] mb-4"
          style={{
            color: "var(--text-primary)",
            letterSpacing: "-0.035em",
            fontSize: "clamp(30px, 4.5vw, 48px)",
          }}
        >
          A product management library{" "}
          <br className="hidden sm:block" />
          worth your weekend.
        </h1>

        <p
          className="text-sm sm:text-base leading-relaxed mb-6 max-w-md"
          style={{ color: "var(--text-muted)" }}
        >
          {CASE_STUDY_COUNT} case studies, {BOOK_COUNT} book reviews,{" "}
          {PLAYLIST_COUNT} playlists. Hand-picked by someone who actually
          read them. Free, no paywall, no email gate.
        </p>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => onNavChange("casestudies")}
            className="btn-primary group"
          >
            Browse case studies
            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
          <button
            onClick={() => onNavChange("learn")}
            className="btn-ghost"
          >
            Or watch instead
          </button>
        </div>
      </div>

      {/* ── Right: Tool Carousel ── */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory pb-2 scroll-container"
      >
        {/* Simulation League Banner */}
        <Link
          href={`/league`}
          className="flex-shrink-0 w-full snap-center group rounded-2xl p-6 transition-all hover:opacity-95 flex flex-col relative overflow-hidden"
          style={{
            background: "var(--card-bg)",
            border: "1.5px solid #991b1b",
          }}
        >
          {/* Subtle SVG Noise Texture */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.04] z-10 mix-blend-overlay"
            style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
          />

          {/* Ambient Brand Glow */}
          <div 
            className="absolute top-[-10%] left-[-10%] w-[250px] h-[250px] rounded-full blur-[70px] pointer-events-none opacity-10 transition-opacity group-hover:opacity-20" 
            style={{ background: "radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)" }} 
          />

          <div className="relative z-20 flex-1 flex flex-col">
            <div 
              className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 border rounded self-start"
              style={{ borderColor: "var(--border-subtle)", background: "var(--page-bg)" }}
            >
              <div className="w-1.5 h-1.5 bg-[var(--brand-primary)] animate-pulse rounded-full" />
              <span className="font-mono font-bold tracking-widest uppercase text-[10px]" style={{ color: "var(--text-muted)" }}>
                Matchday Live
              </span>
            </div>

            <h3 className="font-display text-4xl sm:text-[2.5rem] font-black tracking-tighter mb-4 uppercase leading-[0.9]" style={{ color: "var(--text-primary)" }}>
              SIMULATION<br />
              <span style={{ color: "var(--brand-primary)" }}>LEAGUE</span>
            </h3>

            <p className="text-sm leading-relaxed mb-auto" style={{ color: "var(--text-muted)" }}>
              The ultimate proving ground for Builders and PMs. Can you stay at the top across 50 intense Matchdays?
            </p>

            <div className="w-full mt-8">
              <div className="p-4 rounded bg-[var(--page-bg)] border border-[var(--border-subtle)]">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold" style={{ color: "var(--brand-primary)" }}>50 Matchdays</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold" style={{ color: "var(--text-muted)" }}>Season 1</span>
                </div>
                
                <div className="btn-primary w-full flex justify-center items-center gap-2 text-sm py-2.5">
                  Enter the League
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* ── Slide 2: The Three Tools Stack ── */}
        <div className="flex-shrink-0 w-full snap-center flex flex-col gap-4 sm:gap-5">
          {/* CheckIt */}
          <Link
            href="/checkit"
            className="w-full group rounded-2xl px-5 py-5 transition-all flex flex-col hover:opacity-95"
            style={{
              background: "#2563EB",
              border: "1.5px solid rgba(255, 255, 255, 0.12)",
            }}
          >
          <div className="flex items-center gap-4 mb-4">
            <MiniRing score={92} onColor />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-mono uppercase mb-1" style={{ color: "rgba(255, 255, 255, 0.75)", letterSpacing: "0.14em" }}>
                Tool
              </p>
              <h2 className="font-display text-lg font-bold leading-tight" style={{ color: "#ffffff", letterSpacing: "-0.02em" }}>
                How ready is your site?
              </h2>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
            {CHECKIT_TOTAL} checks. 30 seconds. Free.
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-0.5" style={{ color: "#ffffff" }}>
            Run a check
            <ArrowUpRight size={14} strokeWidth={2} />
          </span>
        </Link>

          {/* SimulateIt */}
          <Link
            href="/simulate"
            className="w-full group rounded-2xl px-5 py-5 transition-all flex flex-col hover:opacity-95"
            style={{
              background: "#DB2777",
              border: "1.5px solid rgba(255, 255, 255, 0.12)",
            }}
          >
          <div className="flex items-center gap-4 mb-4">
            <DecisionGrid />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-mono uppercase mb-1" style={{ color: "rgba(255, 255, 255, 0.75)", letterSpacing: "0.14em" }}>
                Tool
              </p>
              <h2 className="font-display text-lg font-bold leading-tight" style={{ color: "#ffffff", letterSpacing: "-0.02em" }}>
                Train your product instincts.
              </h2>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
            {DRILL_COUNT} drills. Two per week. Free.
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-0.5" style={{ color: "#ffffff" }}>
            Play this week&apos;s drill
            <ArrowUpRight size={14} strokeWidth={2} />
          </span>
        </Link>

          {/* AI Decoded */}
          <Link
            href={latestAI ? `/ai-decoded/${latestAI.slug}` : "/ai-decoded"}
            className="w-full group rounded-2xl px-5 py-5 transition-all flex flex-col justify-between hover:opacity-95"
            style={{
              background: "#0F9D58",
              border: "1.5px solid rgba(255, 255, 255, 0.12)",
            }}
          >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <p className="text-sm font-mono uppercase" style={{ color: "rgba(255, 255, 255, 0.85)", letterSpacing: "0.14em" }}>
                AI Decoded
              </p>
              {latestAI && (
                <>
                  <span className="w-1 h-1 rounded-full" style={{ background: "rgba(255, 255, 255, 0.6)" }} />
                  <p className="text-sm font-mono" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    {formatDate(latestAI.publishedAt)}
                  </p>
                </>
              )}
            </div>
            <h3 className="font-display text-xl font-bold leading-tight mb-4" style={{ color: "#ffffff", letterSpacing: "-0.015em" }}>
              {latestAI?.title ?? "Editorial commentary on AI for PMs"}
            </h3>
          </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-0.5" style={{ color: "#ffffff" }}>
              Read this week&apos;s take
              <ArrowUpRight size={14} strokeWidth={2} />
            </span>
          </Link>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-3">
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => {
                scrollRef.current?.scrollTo({
                  left: i * (scrollRef.current?.clientWidth ?? 0),
                  behavior: "smooth",
                });
              }}
              className="rounded-full transition-all"
              style={{
                width: activeSlide === i ? 20 : 6,
                height: 6,
                background: activeSlide === i ? "var(--brand-primary)" : "var(--card-border)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// SimulateIt visual hook — 2×3 grid of colored squares that mirrors
// the Wordle-style share output of the actual drill result. Telegraphs
// the share-result mechanic and the "you'll score across multiple
// decisions" structure without claiming any specific user's score.
//
// Pattern is fixed (not randomized) so server and client render
// identically — no hydration mismatch. Pattern picked to feel
// reasonable: a mix of greens (got it right), one yellow (partial),
// one red (wrong call).
function DecisionGrid() {
  const SQUARES: string[] = [
    "#22C55E", "#22C55E", "#EAB308",
    "#22C55E", "#F97316", "#22C55E",
  ];
  return (
    <div
      className="flex-shrink-0 grid grid-cols-3 gap-1.5 p-2 rounded-lg"
      style={{ background: "rgba(255, 255, 255, 0.12)" }}
    >
      {SQUARES.map((color, i) => (
        <div
          key={i}
          className="rounded-[3px]"
          style={{
            width: 14,
            height: 14,
            background: color,
          }}
        />
      ))}
    </div>
  );
}

// Static-score mini ring. Uses 92 as a "looks good" example, not a real
// number, purely visual. The same ring idiom is used on /checkit.
// `onColor` flips to white-on-translucent for use against solid colored
// backgrounds (the CheckIt banner).
function MiniRing({ score, onColor = false }: { score: number; onColor?: boolean }) {
  const SIZE = 64;
  const STROKE = 5;
  const radius = (SIZE - STROKE) / 2;
  const circ = 2 * Math.PI * radius;
  const progress = (Math.max(0, Math.min(100, score)) / 100) * circ;
  const trackColor = onColor ? "rgba(255, 255, 255, 0.25)" : "var(--divider)";
  const fillColor = onColor ? "#ffffff" : "var(--brand-primary)";
  const textColor = onColor ? "#ffffff" : "var(--text-primary)";
  return (
    <div
      className="relative flex-shrink-0"
      style={{ width: SIZE, height: SIZE }}
    >
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={STROKE}
          fill="none"
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={radius}
          stroke={fillColor}
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={circ}
          strokeDashoffset={circ - progress}
          strokeLinecap="round"
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center font-display font-bold"
        style={{ color: textColor, fontSize: 18 }}
      >
        {score}
      </div>
    </div>
  );
}
