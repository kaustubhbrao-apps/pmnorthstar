"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function ViewCounter({ path, className = "" }: { path: string, className?: string }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Fire and forget view tracking
    fetch("/api/views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.views !== undefined) {
          setViews(data.views);
        }
      })
      .catch(() => {});
  }, [path]);

  // Don't render anything until we have the view count to prevent layout jank
  // Alternatively, could render a shimmer or 0, but hiding it is cleaner.
  if (views === null) return null;

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <Eye size={12} strokeWidth={1.8} />
      {views.toLocaleString()} views
    </span>
  );
}
