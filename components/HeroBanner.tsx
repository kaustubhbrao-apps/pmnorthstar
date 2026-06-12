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

const latestAI = aiDecodedManifest[0];
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
      {/* ── Left: Simulation League Video Banner (Main Takeover) ── */}
      <Link
        href={`/league`}
        className="rounded-2xl px-6 sm:px-10 py-10 sm:py-14 transition-all group flex flex-col relative overflow-hidden"
        style={{
          background: "#000000",
          border: "1.5px solid #F3123C",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
          src="/simulation-league-promo.mp4"
          style={{ zIndex: 0 }}
        />
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04] z-10 mix-blend-overlay"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
        />
        <div 
          className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-black/80" 
        />
        <div className="relative z-20 flex-1 flex flex-col justify-center items-start">
          <div 
            className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 border rounded self-start"
            style={{ borderColor: "rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
          >
            <div className="w-1.5 h-1.5 bg-[#F3123C] animate-pulse rounded-full" />
            <span className="font-mono font-bold tracking-widest uppercase text-xs" style={{ color: "rgba(255,255,255,0.9)" }}>
              Starts June 26
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tighter mb-6 uppercase leading-[0.85]" style={{ color: "#ffffff" }}>
            SIMULATION<br />
            <span style={{ color: "#F3123C", textShadow: "0 0 40px rgba(243,18,60,0.5)" }}>LEAGUE</span>
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-10 max-w-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            The ultimate proving ground for Builders and PMs. Can you stay at the top across 50 intense Matchdays?
          </p>
          <div className="w-full max-w-md mt-auto">
            <div className="p-4 sm:p-5 rounded-xl border" style={{ background: "rgba(0,0,0,0.6)", borderColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}>
              <div className="flex justify-between items-center mb-5">
                <span className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: "#F3123C" }}>50 Matchdays</span>
                <span className="font-mono text-xs uppercase tracking-widest font-bold" style={{ color: "rgba(255,255,255,0.6)" }}>Season 1</span>
              </div>
              <div className="btn-primary w-full flex justify-center items-center gap-2 text-base py-3.5 shadow-[0_0_20px_rgba(243,18,60,0.5)] border-none">
                Enter the League
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* ── Right: Library Positioning & Carousel ─────────────────────────────────── */}
      <div className="flex flex-col gap-4 sm:gap-5 overflow-hidden">
        <div
          className="rounded-2xl px-6 py-8 flex-1 flex flex-col justify-center"
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
