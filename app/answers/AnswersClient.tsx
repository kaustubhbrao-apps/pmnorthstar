"use client";

// Answers index in the editorial vocabulary: pill filters, then a grid of
// vs-style boxes — the question as the bold line, the short answer under it.
// The short answer is the point of the section, so it stays on the card.

import { useState } from "react";
import Link from "next/link";
import { SectionHead, clip } from "@/components/Editorial";

// Only the fields the list needs. The page maps to this on the server so
// the pre-rendered bodyHtml blobs in data/answers.ts never cross into the
// client payload.
export type AnswerCard = {
  slug: string;
  question: string;
  shortAnswer: string;
  category: string;
  accentColor: string;
  updatedAt: string;
};

export function AnswersClient({ answers }: { answers: AnswerCard[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = Array.from(new Set(answers.map((a) => a.category))).sort();

  const filtered =
    activeFilter === "All"
      ? answers
      : answers.filter((a) => a.category === activeFilter);

  return (
    <>
      <SectionHead title="Questions" count={filtered.length} />
      <div className="filters">
        <button onClick={() => setActiveFilter("All")} className={`chip ${activeFilter === "All" ? "active" : ""}`}>
          All <span className="chip-count">{answers.length}</span>
        </button>
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActiveFilter(cat)} className={`chip ${activeFilter === cat ? "active" : ""}`}>
            {cat} <span className="chip-count">{answers.filter((a) => a.category === cat).length}</span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="drillcard">
          <p className="serif text-lg" style={{ color: "var(--text-muted)" }}>
            No answers in this category yet.
          </p>
        </div>
      ) : (
        <div className="heads wide">
          {filtered.map((a) => (
            <Link key={a.slug} href={`/answers/${a.slug}`} className="vsbox">
              <div className="progress" style={{ marginBottom: 8 }}>
                {a.category}
              </div>
              <div className="vs" style={{ fontSize: "1.25rem" }}>
                {a.question}
              </div>
              <div className="m">{clip(a.shortAnswer, 150)}</div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
