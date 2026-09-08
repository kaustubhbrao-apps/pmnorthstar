"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { SmartSaveButton } from "@/components/SmartSaveButton";

// Only the fields the list needs. The page maps to this on the server so
// the 72 pre-rendered bodyHtml blobs in data/answers.ts never cross into
// the client payload.
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
  const colorFor = (cat: string) =>
    answers.find((a) => a.category === cat)?.accentColor ?? "var(--brand-primary)";

  const filtered =
    activeFilter === "All"
      ? answers
      : answers.filter((a) => a.category === activeFilter);

  return (
    <div className="px-4 sm:px-8 lg:px-12 py-6 flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="flex items-center gap-2 mb-6 overflow-x-auto scroll-container pb-1">
          <button
            onClick={() => setActiveFilter("All")}
            className={`chip ${activeFilter === "All" ? "active" : ""}`}
          >
            All <span className="chip-count">{answers.length}</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`chip ${activeFilter === cat ? "active" : ""}`}
              style={
                {
                  ["--active-bg" as any]: colorFor(cat),
                  ["--active-border" as any]: colorFor(cat),
                } as React.CSSProperties
              }
            >
              {cat}{" "}
              <span className="chip-count">
                {answers.filter((a) => a.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="surface p-8 text-center" style={{ borderRadius: 12 }}>
            <p className="text-base font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
              No answers found.
            </p>
          </div>
        ) : (
          <ul className="space-y-4">
            {filtered.map((a) => (
              <li key={a.slug}>
                <div className="surface flex flex-col overflow-hidden" style={{ borderRadius: 12 }}>
                  <Link
                    href={`/answers/${a.slug}`}
                    className="p-5 sm:p-6 block group transition-colors flex-1"
                  >
                    <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                      {activeFilter === "All" && (
                        <span
                          className="inline-block text-sm font-bold uppercase px-2.5 py-1 rounded-md"
                          style={{
                            background: a.accentColor,
                            color: "#ffffff",
                            letterSpacing: "0.12em",
                          }}
                        >
                          {a.category}
                        </span>
                      )}
                      <span className="meta-mono inline-flex items-center gap-1">
                        <CalendarDays size={13} strokeWidth={1.6} />
                        Updated{" "}
                        {new Date(a.updatedAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h2
                      className="text-xl sm:text-2xl font-semibold mb-2 leading-tight group-hover:underline"
                      style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
                    >
                      {a.question}
                    </h2>
                    {/* The short answer is the point of the section — an
                        answer card that shows only the question makes the
                        reader click to find out whether it is the answer
                        they wanted. Clamped so the card rhythm still
                        matches the AI Decoded list. */}
                    <p
                      className="text-sm sm:text-base leading-relaxed line-clamp-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {a.shortAnswer}
                    </p>
                  </Link>
                  <div
                    className="px-5 sm:px-6 py-4 flex items-center justify-between"
                    style={{ borderTop: "1.5px solid var(--card-border)" }}
                  >
                    <Link
                      href={`/answers/${a.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold"
                      style={{ color: "var(--brand-primary)" }}
                    >
                      Read the full answer
                      <ArrowUpRight size={14} strokeWidth={1.8} />
                    </Link>
                    <SmartSaveButton
                      resource={{
                        id: a.slug,
                        title: a.question,
                        author: "northstar editorial",
                        category: a.category,
                        link: `/answers/${a.slug}`,
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
