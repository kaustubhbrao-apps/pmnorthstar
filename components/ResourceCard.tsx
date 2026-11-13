"use client";

// Book card in the editorial vocabulary: a tinted tile carrying the cover as
// a duotone, the year chip, the title; author + rating and the one-line
// description below; save control on a quiet row. The `default`/`featured`
// variants keep a fixed width for horizontal shelves.

import { Book, getBookSlug } from "@/data/books";
import { SmartSaveButton } from "@/components/SmartSaveButton";
import { EdCard, Tile, Cap, tintAt, clip, bookCover } from "@/components/Editorial";

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
  hideCategory?: boolean;
}

export function ResourceCard({ book, index = 0, variant = "default", initialSaved = false, initialLiked = false }: ResourceCardProps) {
  const widthClass =
    variant === "featured"
      ? "flex-shrink-0 w-[240px] sm:w-[260px]"
      : variant === "default"
      ? "flex-shrink-0 w-[220px] sm:w-[240px]"
      : "";
  const chip = initialLiked ? "♥ Liked" : initialSaved ? "Saved" : String(book.year);

  return (
    <div className={`flex flex-col h-full ${widthClass}`.trim()}>
      <EdCard href={`/book/${getBookSlug(book)}`} className="flex-1">
        <Tile tint={tintAt(index)} minH={280} chip={chip} title={book.title} size="m" img={bookCover(book.thumbnailURL)} />
        <Cap k={`${book.author} · ${book.rating.toFixed(1)} ★ · ${book.category}`} title={clip(book.description, 80)} />
      </EdCard>
      <div className="flex items-center justify-between pt-3 px-0.5">
        <span className="text-xs font-semibold" style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}>
          Read the review
        </span>
        <SmartSaveButton resource={book} />
      </div>
    </div>
  );
}
