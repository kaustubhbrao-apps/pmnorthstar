"use client";

// Image layers for an editorial tile.
//
// TileImg sits under the tile's content and is blended into the tint by CSS
// (.vis-img: grayscale + luminosity blend), so a photo, a book cover or a
// YouTube thumbnail all read as the same posterized duotone. Hides itself if
// the remote image fails.
//
// TileMark is the identity sticker on case-study tiles — the equivalent of a
// book tile carrying its cover. A small white rounded square (top-left, under
// the date chip) holding the company's brand mark in colour, or a bold
// monogram when no mark is mapped or the favicon that comes back is too
// small to scale.

import { useState } from "react";

export function TileImg({ src, mode = "cover", alt = "" }: { src: string; mode?: "cover" | "mark"; alt?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      className={`vis-img ${mode}`}
      onError={() => setFailed(true)}
    />
  );
}

// Favicons below this edge (Google serves 16–48px for sites with no large
// icon) blur into a smudge at sticker size; the monogram reads better.
const MIN_MARK_PX = 64;

export function TileMark({ src, monogram, label }: { src?: string | null; monogram: string; label?: string }) {
  const [failed, setFailed] = useState(false);
  const showImg = Boolean(src) && !failed;
  return (
    <span className="mark-sticker" aria-hidden="true" title={label}>
      {showImg ? (
        <img
          src={src as string}
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          onLoad={(e) => {
            if (e.currentTarget.naturalWidth < MIN_MARK_PX) setFailed(true);
          }}
        />
      ) : (
        <b>{monogram}</b>
      )}
    </span>
  );
}
