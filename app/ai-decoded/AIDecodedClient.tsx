"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { getCategoryColor } from "@/lib/category-colors";
import type { AIDecodedArticle } from "@/lib/ai-decoded";

export function AIDecodedClient({ articles }: { articles: AIDecodedArticle[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = Array.from(new Set(articles.map((a) => a.frontmatter.category))).sort();
  
  const filtered =
    activeFilter === "All"
      ? articles
      : articles.filter((a) => a.frontmatter.category === activeFilter);

  return (
    <>
      <div className="px-4 sm:px-8 lg:px-12 py-6 flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="flex items-center gap-2 mb-6 overflow-x-auto scroll-container pb-1">
            <button
              onClick={() => setActiveFilter("All")}
              className={`chip ${activeFilter === "All" ? "active" : ""}`}
            >
              All <span className="chip-count">{articles.length}</span>
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`chip ${activeFilter === cat ? "active" : ""}`}
                style={{ 
                  ["--active-bg" as any]: getCategoryColor(cat).color,
                  ["--active-border" as any]: getCategoryColor(cat).color 
                } as React.CSSProperties}
              >
                {cat}{" "}
                <span className="chip-count">
                  {articles.filter((a) => a.frontmatter.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="surface p-8 text-center" style={{ borderRadius: 12 }}>
              <p className="text-base font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                No articles found.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {filtered.map((a) => (
                <li key={a.frontmatter.slug}>
                  <Link
                    href={`/ai-decoded/${a.frontmatter.slug}`}
                    className="surface p-5 sm:p-6 block group transition-colors"
                    style={{ borderRadius: 12 }}
                  >
                    <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                      {activeFilter === "All" && (
                        <span
                          className="inline-block text-sm font-bold uppercase px-2.5 py-1 rounded-md"
                          style={{
                            background: getCategoryColor(a.frontmatter.category).color,
                            color: "#ffffff",
                            letterSpacing: "0.12em",
                          }}
                        >
                          {a.frontmatter.category}
                        </span>
                      )}
                      <span className="meta-mono inline-flex items-center gap-1">
                        <Clock size={13} strokeWidth={1.6} />
                        {a.readTime} min
                      </span>
                      <span className="meta-mono" style={{ color: "var(--text-faint)" }}>
                        {new Date(a.frontmatter.publishedAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h2
                      className="text-xl sm:text-2xl font-semibold mb-2 leading-tight group-hover:underline"
                      style={{
                        color: "var(--text-primary)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {a.frontmatter.title}
                    </h2>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold"
                      style={{ color: "var(--brand-primary)" }}
                    >
                      Read the decoded take
                      <ArrowUpRight size={14} strokeWidth={1.8} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
