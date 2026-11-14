"use client";

import Link from "next/link";
import { track } from "@/lib/track";

interface Recommendation {
  type: "case-study" | "book";
  slug: string;
  title: string;
  eyebrow: string; // category or short label
  href: string;
}

interface RecommendationsBlockProps {
  fromType: string; // "case-study" | "book" | etc.
  fromSlug: string;
  items: Recommendation[];
  headline?: string;
  subhead?: string;
}

// Recommendation list for already-engaged readers, in the rail-card
// vocabulary (red small-caps head, hairline link rows). Each click emits a
// tracked 'related_content_clicked' event with from/to context so we can
// see which recommendations actually drive return visits.
export function RecommendationsBlock({
  fromType,
  fromSlug,
  items,
  headline = "Because you've been reading northstar — try these next",
  subhead,
}: RecommendationsBlockProps) {
  if (items.length === 0) return null;
  return (
    <div className="railcard">
      <div className="railhead">For you</div>
      <p
        className="font-bold"
        style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", letterSpacing: "-0.015em", lineHeight: 1.15, color: "var(--text-primary)" }}
      >
        {headline}
      </p>
      {subhead && (
        <p className="serif mt-1.5" style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.45 }}>
          {subhead}
        </p>
      )}
      <div className="mt-3">
        {items.map((rec) => (
          <Link
            key={rec.href}
            href={rec.href}
            className="rellink"
            onClick={() =>
              track({
                name: "related_content_clicked",
                from_type: fromType,
                from_slug: fromSlug,
                to_type: rec.type,
                to_slug: rec.slug,
              })
            }
          >
            <span className="progress block mb-1" style={{ fontSize: "0.7rem" }}>
              {rec.eyebrow}
            </span>
            {rec.title} →
          </Link>
        ))}
      </div>
    </div>
  );
}
