"use client";

// Filterable drill library in the editorial card vocabulary: pill filters,
// then tiles with a "Type · N min" chip and a ▶ arrow, the first drill in
// brand red when the list is unfiltered (the artifact's featured slot).

import { useMemo, useState } from "react";
import { DRILL_CATEGORIES } from "@/lib/drills";
import { EdCard, Tile, Cap, SectionHead, clip, tintAt } from "@/components/Editorial";
import { photoFor } from "@/data/cardImages";

export type DrillCard = {
  slug: string;
  title: string;
  type: "historical" | "current" | "hypothetical";
  estimatedMinutes: number;
  excerpt: string;
  category: string; // already normalized by the server
  year?: number;
};

const TYPE_LABEL: Record<DrillCard["type"], string> = {
  historical: "Historical",
  current: "Current",
  hypothetical: "Hypothetical",
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

  const filtered = active === "All" ? drills : drills.filter((d) => d.category === active);

  return (
    <section className="mt-10">
      <SectionHead title="Drills" count={filtered.length} />

      <div className="filters">
        {cats.map((cat) => (
          <button key={cat} onClick={() => setActive(cat)} className={`chip ${active === cat ? "active" : ""}`}>
            {cat} <span className="chip-count">{cat === "All" ? drills.length : counts[cat]}</span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="drillcard">
          <p className="serif text-lg" style={{ color: "var(--text-muted)" }}>
            No drills in this category yet. New ones land every week.
          </p>
        </div>
      ) : (
        <div className="grid3">
          {filtered.map((d, i) => {
            const featured = i === 0 && active === "All";
            return (
              <EdCard key={d.slug} href={`/simulate/${d.slug}`}>
                <Tile
                  tint={featured ? "feature" : tintAt(i - 1)}
                  minH={220}
                  chip={`${TYPE_LABEL[d.type]} · ${d.estimatedMinutes} min`}
                  glyph="▶"
                  title={d.title}
                  size={featured ? "xl" : "m"}
                  img={photoFor([d.title, d.excerpt, d.category, d.type], d.slug)}
                />
                <Cap k={`${d.category}${d.year ? ` · ${d.year}` : ""}`} title={clip(d.excerpt, 72)} />
              </EdCard>
            );
          })}
        </div>
      )}

      <p className="progress mt-10">Free · no sign-in needed · about ten minutes each · rationales for every choice</p>
    </section>
  );
}
