"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { Book } from "@/data/books";
import { SaveButton } from "@/components/SaveButton";

interface ResourceCardProps {
  book: Book;
  index?: number;
  variant?: "default" | "featured" | "list" | "case-study";
  isLoggedIn?: boolean;
  initialSaved?: boolean;
  initialLiked?: boolean;
  onAuthRequired?: () => void;
  onSavedChange?: (id: string, saved: boolean) => void;
  onLikedChange?: (id: string, liked: boolean) => void;
}

function StarRating({ rating, size = 9 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          style={{
            color: i < Math.floor(rating) ? "var(--text-primary)" : "var(--text-faint)",
            fill: i < Math.floor(rating) ? "var(--text-primary)" : "transparent",
          }}
        />
      ))}
    </div>
  );
}

export function ResourceCard({
  book,
  index = 0,
  variant = "default",
  isLoggedIn = false,
  initialSaved = false,
  initialLiked = false,
  onAuthRequired = () => {},
  onSavedChange,
  onLikedChange,
}: ResourceCardProps) {
  const indexLabel = String(index + 1).padStart(2, "0");

  // Width sizing per variant
  const widthClass =
    variant === "featured"
      ? "flex-shrink-0 w-[220px] sm:w-[240px] md:w-[260px]"
      : variant === "default"
      ? "flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px]"
      : "";

  return (
    <div
      className={`playlist-card surface overflow-hidden ${widthClass}`}
      style={{ ["--accent-color" as any]: "var(--brand-primary)" } as React.CSSProperties}
    >
      <a
        href={book.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-5 pt-5 pb-4 group"
      >
        <div className="flex items-center justify-between mb-5">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded-full truncate"
            style={{
              background: "var(--brand-soft)",
              color: "var(--brand-primary)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--brand-primary)" }} />
            {book.category}
          </span>
          <div className="card-arrow flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0"
            style={{ border: "1px solid var(--card-border)", color: "var(--brand-primary)" }}>
            <ArrowUpRight size={14} strokeWidth={1.6} />
          </div>
        </div>

        <h3
          className="text-lg sm:text-xl font-semibold leading-tight mb-1.5"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          {book.title}
        </h3>
        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
          by {book.author}
        </p>

        {variant !== "list" && (
          <p className="text-xs leading-relaxed line-clamp-2 mb-3" style={{ color: "var(--text-muted)" }}>
            {book.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <StarRating rating={book.rating} />
          <span className="text-xs" style={{ color: "var(--text-faint)" }}>
            {book.rating.toFixed(1)}
          </span>
        </div>
      </a>

      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--card-border)" }}
      >
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          Open book
        </span>
        <SaveButton
          resource={book}
          isLoggedIn={isLoggedIn}
          initialSaved={initialSaved}
          initialLiked={initialLiked}
          onAuthRequired={onAuthRequired}
          onSavedChange={onSavedChange}
          onLikedChange={onLikedChange}
        />
      </div>
    </div>
  );
}
