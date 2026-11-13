"use client";

// AI Decoded index in the editorial vocabulary: pill filters, then a grid of
// tinted tiles (themed duotone photo, "N min · date" chip, headline) with the
// category below.

import { useState } from "react";
import type { AIDecodedArticle } from "@/lib/ai-decoded";
import { EdCard, Tile, Cap, SectionHead, tintAt } from "@/components/Editorial";
import { photoFor } from "@/data/cardImages";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export function AIDecodedClient({ articles }: { articles: AIDecodedArticle[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = Array.from(new Set(articles.map((a) => a.frontmatter.category))).sort();

  const filtered =
    activeFilter === "All"
      ? articles
      : articles.filter((a) => a.frontmatter.category === activeFilter);

  return (
    <>
      <SectionHead title="Latest takes" count={filtered.length} />
      <div className="filters">
        <button onClick={() => setActiveFilter("All")} className={`chip ${activeFilter === "All" ? "active" : ""}`}>
          All <span className="chip-count">{articles.length}</span>
        </button>
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActiveFilter(cat)} className={`chip ${activeFilter === cat ? "active" : ""}`}>
            {cat}{" "}
            <span className="chip-count">{articles.filter((a) => a.frontmatter.category === cat).length}</span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="drillcard">
          <p className="serif text-lg" style={{ color: "var(--text-muted)" }}>
            No articles in this category yet.
          </p>
        </div>
      ) : (
        <div className="grid3">
          {filtered.map((a, i) => (
            <EdCard key={a.frontmatter.slug} href={`/ai-decoded/${a.frontmatter.slug}`}>
              <Tile
                tint={tintAt(i)}
                minH={280}
                chip={`${a.readTime} min · ${fmt(a.frontmatter.publishedAt)}`}
                title={a.frontmatter.title}
                size="m"
                img={photoFor([a.frontmatter.category, a.frontmatter.title, "ai"], a.frontmatter.slug)}
              />
              <Cap k={`AI Decoded · ${a.frontmatter.category}`} />
            </EdCard>
          ))}
        </div>
      )}
    </>
  );
}
