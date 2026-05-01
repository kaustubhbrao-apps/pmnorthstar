"use client";

import { ArrowUpRight } from "lucide-react";
import { Playlist, learnCategoryColors } from "@/data/learn";
import { SaveButton } from "@/components/SaveButton";

interface PlaylistCardProps {
  playlist: Playlist;
  index?: number;
  isLoggedIn?: boolean;
  initialSaved?: boolean;
  initialLiked?: boolean;
  onAuthRequired?: () => void;
  onSavedChange?: (id: string, saved: boolean) => void;
  onLikedChange?: (id: string, liked: boolean) => void;
}

export function PlaylistCard({
  playlist,
  index,
  isLoggedIn = false,
  initialSaved = false,
  initialLiked = false,
  onAuthRequired = () => {},
  onSavedChange,
  onLikedChange,
}: PlaylistCardProps) {
  const color = learnCategoryColors[playlist.category] ?? "var(--brand-primary)";
  const hasUrl = playlist.url && playlist.url.trim() !== "";
  const indexLabel =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : "·";

  return (
    <div
      className="playlist-card rounded-xl overflow-hidden"
      style={
        {
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          ["--accent-color" as any]: color,
        } as React.CSSProperties
      }
    >
      <a
        href={hasUrl ? playlist.url : "#"}
        target={hasUrl ? "_blank" : undefined}
        rel={hasUrl ? "noopener noreferrer" : undefined}
        onClick={(e) => { if (!hasUrl) e.preventDefault(); }}
        className="block px-5 pt-5 pb-4 group"
        style={{ cursor: hasUrl ? "pointer" : "not-allowed" }}
      >
        {/* Top row: category · arrow */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded-full truncate"
            style={{
              background: `${color}14`,
              color,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
            {playlist.category}
          </span>

          <div
            className="card-arrow flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0"
            style={{
              border: `1px solid var(--card-border)`,
              color: hasUrl ? color : "var(--text-faint)",
            }}
          >
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-lg sm:text-xl font-semibold leading-tight mb-2"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          {playlist.title}
        </h3>

        {/* Channel + meta */}
        <p
          className="text-xs mb-3"
          style={{ color: "var(--text-muted)" }}
        >
          {playlist.channel}
          {playlist.videos ? ` · ${playlist.videos} videos` : ""}
          {playlist.level ? ` · ${playlist.level}` : ""}
        </p>

        {/* Description */}
        <p
          className="text-xs leading-relaxed line-clamp-2"
          style={{ color: "var(--text-muted)" }}
        >
          {playlist.description}
        </p>

        {/* Tags */}
        {playlist.tags && playlist.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {playlist.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-full"
                style={{
                  background: "var(--tag-bg)",
                  color: "var(--text-muted)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </a>

      {/* Footer */}
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--card-border)" }}
      >
        <span
          className="text-xs"
          style={{ color: hasUrl ? "var(--text-muted)" : "var(--text-faint)" }}
        >
          {hasUrl ? "Watch on YouTube" : "Coming soon"}
        </span>
        <SaveButton
          resource={{
            id: playlist.id,
            title: playlist.title,
            author: playlist.channel,
            category: playlist.category,
            link: playlist.url || "#",
          }}
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
