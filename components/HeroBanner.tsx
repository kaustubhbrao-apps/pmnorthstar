"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { aiDecodedManifest } from "@/data/aiDecodedManifest";
import { publishedDrills } from "@/data/drills";
import {
  CASE_STUDY_COUNT,
  BOOK_COUNT,
  PLAYLIST_COUNT,
  DRILL_COUNT,
} from "@/data/inventory-counts";

interface HeroBannerProps {
  onNavChange: (nav: string) => void;
}

const latestAI = aiDecodedManifest[0];
const latestDrill = publishedDrills()[0];
const CHECKIT_TOTAL = 35;

function drillTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

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
      {/* ── Left: Latest Simulation Drill ── */}
      <Link
        href={`/simulate/${latestDrill.slug}`}
        className="rounded-2xl px-5 sm:px-10 py-6 sm:py-14 transition-all group flex flex-col relative overflow-hidden"
        style={{
          background: "var(--card-bg)",
          border: "1.5px solid var(--card-border)",
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03] z-10 mix-blend-overlay"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
        />
        <div className="relative z-20 flex-1 flex flex-col justify-between items-start h-full">
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase px-2.5 py-1 rounded-md"
                style={{
                  background: "#DB2777",
                  color: "#ffffff",
                  letterSpacing: "0.12em",
                }}
              >
                SimulateIt
              </span>
              <span
                className="font-mono text-xs uppercase tracking-wider"
                style={{ color: "var(--text-faint)" }}
              >
                Latest Scenario
              </span>
            </div>

            <h1
              className="text-3xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.05] mb-4 sm:mb-6 tracking-tight"
              style={{
                color: "var(--text-primary)",
                letterSpacing: "-0.03em",
              }}
            >
              {drillTitle(latestDrill.slug)}
            </h1>
            <p
              className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-10 max-w-xl hidden sm:block"
              style={{ color: "var(--text-muted)" }}
            >
              {latestDrill.intro.split("\n\n")[0]}
            </p>
          </div>

          <div className="w-full mt-auto pt-6 border-t" style={{ borderColor: "var(--border-subtle)" }}>
            <div className="flex items-center justify-between gap-4">
              <span className="font-semibold text-lg inline-flex items-center gap-2" style={{ color: "#DB2777" }}>
                Play this scenario
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
              <span className="font-mono text-sm uppercase font-semibold" style={{ color: "var(--text-faint)" }}>
                {DRILL_COUNT} drills available
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* ── Right: Library Positioning & Carousel ─────────────────────────────────── */}
      <div className="flex flex-col gap-4 sm:gap-5 overflow-hidden">
        <div
          className="rounded-2xl px-6 py-6 sm:py-8 flex-1 flex flex-col justify-center"
          style={{
            background: "var(--card-bg)",
            border: "1.5px solid var(--card-border)",
          }}
        >
          <div className="flex items-center gap-2.5 mb-5">
            <span
              className="w-4 h-px"
              style={{ background: "var(--brand-primary)" }}
            />
            <span
              className="text-[10px] sm:text-xs font-mono uppercase"
              style={{
                color: "var(--brand-primary)",
                letterSpacing: "0.16em",
              }}
            >
              pm library · 2026
            </span>
          </div>
          <h2
            className="font-display font-bold leading-[1.05] mb-4 text-2xl sm:text-3xl"
            style={{
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
            }}
          >
            A product management library worth your weekend.
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            {CASE_STUDY_COUNT} case studies, {BOOK_COUNT} book reviews,{" "}
            {PLAYLIST_COUNT} playlists. Hand-picked. Free forever.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => onNavChange("casestudies")}
              className="btn-primary group text-sm py-2.5 flex justify-center"
            >
              Browse cases
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
            <button
              onClick={() => onNavChange("learn")}
              className="btn-ghost text-sm py-2.5 flex justify-center"
            >
              Watch videos
            </button>
          </div>
        </div>

        {/* Carousel for AI Decoded, CheckIt, SimulateIt */}
        <div className="relative w-full rounded-2xl overflow-hidden group">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-container"
          >
            {/* Slide 1: AI Decoded */}
            <Link
              href={latestAI ? `/ai-decoded/${latestAI.slug}` : "/ai-decoded"}
              className="flex-shrink-0 w-full snap-center px-6 py-6 transition-all flex flex-col justify-between"
              style={{
                background: "#0F9D58",
                border: "1.5px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-[10px] sm:text-xs font-mono uppercase" style={{ color: "rgba(255, 255, 255, 0.85)", letterSpacing: "0.14em" }}>
                    AI Decoded
                  </p>
                  {latestAI && (
                    <>
                      <span className="w-1 h-1 rounded-full" style={{ background: "rgba(255, 255, 255, 0.6)" }} />
                      <p className="text-[10px] sm:text-xs font-mono" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                        {formatDate(latestAI.publishedAt)}
                      </p>
                    </>
                  )}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold leading-tight mb-4" style={{ color: "#ffffff", letterSpacing: "-0.015em" }}>
                  {latestAI?.title ?? "Editorial commentary on AI for PMs"}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-0.5 mt-4" style={{ color: "#ffffff" }}>
                Read this week's take
                <ArrowUpRight size={14} strokeWidth={2} />
              </span>
            </Link>

            {/* Slide 2: CheckIt */}
            <Link
              href="/checkit"
              className="flex-shrink-0 w-full snap-center px-6 py-6 transition-all flex flex-col"
              style={{
                background: "#2563EB",
                border: "1.5px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <MiniRing score={92} onColor />
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] sm:text-xs font-mono uppercase mb-1" style={{ color: "rgba(255, 255, 255, 0.75)", letterSpacing: "0.14em" }}>
                    Tool
                  </p>
                  <h2 className="font-display text-lg sm:text-xl font-bold leading-tight" style={{ color: "#ffffff", letterSpacing: "-0.02em" }}>
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

            {/* Slide 3: SimulateIt */}
            <Link
              href="/simulate"
              className="flex-shrink-0 w-full snap-center px-6 py-6 transition-all flex flex-col"
              style={{
                background: "#DB2777",
                border: "1.5px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <DecisionGrid />
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] sm:text-xs font-mono uppercase mb-1" style={{ color: "rgba(255, 255, 255, 0.75)", letterSpacing: "0.14em" }}>
                    Tool
                  </p>
                  <h2 className="font-display text-lg sm:text-xl font-bold leading-tight" style={{ color: "#ffffff", letterSpacing: "-0.02em" }}>
                    Train your product instincts.
                  </h2>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                {DRILL_COUNT} drills. Two per week. Free.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-0.5" style={{ color: "#ffffff" }}>
                Play this week's drill
                <ArrowUpRight size={14} strokeWidth={2} />
              </span>
            </Link>
          </div>

          {/* Floating Indicators Overlay */}
          <div className="absolute top-4 right-4 flex justify-center gap-1.5 z-10 bg-black/20 px-2 py-1.5 rounded-full backdrop-blur-md">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  scrollRef.current?.scrollTo({
                    left: i * (scrollRef.current?.clientWidth ?? 0),
                    behavior: "smooth",
                  });
                }}
                className="rounded-full transition-all"
                style={{
                  width: activeSlide === i ? 16 : 4,
                  height: 4,
                  background: activeSlide === i ? "#ffffff" : "rgba(255,255,255,0.4)",
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

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
