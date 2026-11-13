"use client";

// Image layer for an editorial tile. Rendered under the tile's content and
// blended into the tint by CSS (.vis-img: grayscale + luminosity blend), so
// a photo, a book cover or a YouTube thumbnail all read as the same
// posterized duotone. Hides itself if the remote image fails.

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
