"use client";

// Playlist card in the editorial vocabulary: a tinted tile carrying the real
// YouTube thumbnail as a duotone, a ▶ arrow, the title; channel + category
// and the description below; save control on a quiet row.

import type { Playlist } from "@/data/learn";
import { SmartSaveButton } from "@/components/SmartSaveButton";
import { EdCard, Tile, Cap, tintAt, clip } from "@/components/Editorial";

// Pull a YouTube thumbnail when the URL is a single video; for playlists
// (youtube.com/playlist?list=...) there's no public thumbnail without an
// API call, so the curated imageUrl (fetched via oEmbed) is preferred.
function getYouTubeThumbnail(url: string): string | null {
  if (!url) return null;
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return `https://i.ytimg.com/vi/${shortMatch[1]}/hqdefault.jpg`;
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return `https://i.ytimg.com/vi/${watchMatch[1]}/hqdefault.jpg`;
  return null;
}

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

export function PlaylistCard({ playlist, index = 0, initialSaved = false, initialLiked = false }: PlaylistCardProps) {
  const hasUrl = !!(playlist.url && playlist.url.trim() !== "");
  const thumbnail = playlist.imageUrl || (hasUrl ? getYouTubeThumbnail(playlist.url) : null);
  const chip = initialLiked
    ? "♥ Liked"
    : initialSaved
    ? "Saved"
    : playlist.videos
    ? `${playlist.videos} videos`
    : playlist.level ?? "Playlist";
  const kicker = [playlist.channel, playlist.category, playlist.level].filter(Boolean).join(" · ");

  return (
    <div className="flex flex-col h-full">
      <EdCard href={hasUrl ? playlist.url : "#"} external={hasUrl} className="flex-1" ariaLabel={playlist.title}>
        <Tile tint={tintAt(index)} minH={260} chip={chip} glyph="▶" title={playlist.title} size="m" img={thumbnail} />
        <Cap k={kicker} title={clip(playlist.description, 80)} />
      </EdCard>
      <div className="flex items-center justify-between pt-3 px-0.5">
        <span className="text-xs font-semibold" style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}>
          {hasUrl ? "Watch on YouTube ↗" : "Coming soon"}
        </span>
        <SmartSaveButton
          resource={{
            id: playlist.id,
            title: playlist.title,
            author: playlist.channel,
            category: playlist.category,
            link: playlist.url || "#",
          }}
        />
      </div>
    </div>
  );
}
