"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { DRILL_CATEGORIES, DRILL_CATEGORY_COLORS } from "@/lib/drills";

export type DrillCard = {
  slug: string;
  title: string;
  type: "historical" | "current" | "hypothetical";
  estimatedMinutes: number;
  excerpt: string;
  category: string; // already normalized by the server
};

const TYPE_BADGE: Record<DrillCard["type"], { label: string; color: string }> = {
  historical: { label: "Historical", color: "#9B8FFF" },
  current: { label: "Current", color: "#26A69A" },
  hypothetical: { label: "Hypothetical", color: "#F5C842" },
};

export function DrillGrid({ drills }: { drills: DrillCard[] }) {
  const [active, setActive] = useState<string>("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const d of drills) c[d.category] = (c[d.category] || 0) + 1;
    return c;
  }, [drills]);

  // Only show chips for categories that actually have drills.
  const cats = DRILL_CATEGORIES.filter((c) => c === "All" || counts[c]);

  const filtered =
    active === "All" ? drills : drills.filter((d) => d.category === active);

  return (
    <section className="mt-12">
      <h2
        className="font-display text-xl font-semibold mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Browse by category
      </h2>

      {/* Filter chips — same treatment as the case-study library */}
      <div className="flex flex-wrap gap-2 mb-6">
        {cats.map((cat) => {
          const isActive = active === cat;
          const color =
            cat === "All" ? "var(--brand-primary)" : DRILL_CATEGORY_COLORS[cat];
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`chip ${isActive ? "active" : ""}`}
              style={
                isActive
                  ? { background: color, borderColor: color, color: "#ffffff" }
                  : undefined
              }
            >
              {cat}{" "}
              <span className="chip-count">
                {cat === "All" ? drills.length : counts[cat]}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map((d) => (
          <Link
            key={d.slug}
            href={`/simulate/${d.slug}`}
            className="block rounded-xl px-5 py-5 transition-colors group"
            style={{
              background: "var(--card-bg)",
              border: "1.5px solid var(--card-border)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-sm font-mono uppercase px-1.5 py-0.5 rounded"
                style={{
                  background: `color-mix(in srgb, ${TYPE_BADGE[d.type].color} 18%, transparent)`,
                  color: "var(--text-primary)",
                  border: `1px solid ${TYPE_BADGE[d.type].color}`,
                  letterSpacing: "0.12em",
                }}
              >
                {TYPE_BADGE[d.type].label}
              </span>
              <span
                className="text-sm font-mono uppercase px-1.5 py-0.5 rounded"
                style={{
                  background: `color-mix(in srgb, ${DRILL_CATEGORY_COLORS[d.category] ?? "#2563EB"} 14%, transparent)`,
                  color: DRILL_CATEGORY_COLORS[d.category] ?? "#2563EB",
                  letterSpacing: "0.1em",
                }}
              >
                {d.category}
              </span>
              <span className="text-sm font-mono" style={{ color: "var(--text-faint)" }}>
                ~{d.estimatedMinutes} min
              </span>
            </div>
            <h3
              className="font-display text-base font-semibold mb-1 group-hover:underline"
              style={{ color: "var(--text-primary)" }}
            >
              {d.title}
            </h3>
            <p
              className="text-sm leading-relaxed line-clamp-2"
              style={{ color: "var(--text-muted)" }}
            >
              {d.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
