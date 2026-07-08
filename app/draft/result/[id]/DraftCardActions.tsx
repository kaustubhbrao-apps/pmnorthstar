"use client";

import { Share2, Download, Check } from "lucide-react";
import { useState } from "react";

export function DraftCardActions({ ogImageUrl, playerId }: { ogImageUrl: string, playerId: string }) {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "The Builder Draft",
          text: "I just got drafted into the Simulation League. Check out my startup archetype!",
          url,
        });
      } catch (err) {
        // user cancelled or failed, fallback to copy
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch(ogImageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `builder-draft-${playerId}.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error("Failed to download image", err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="flex items-center gap-4 mt-6 w-full">
      <button
        onClick={handleDownload}
        disabled={downloading}
        className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
      >
        <Download size={18} />
        {downloading ? "Downloading..." : "Download Card"}
      </button>

      <button
        onClick={handleShare}
        className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
      >
        {copied ? <Check size={18} className="text-green-500" /> : <Share2 size={18} />}
        {copied ? "Copied Link" : "Share"}
      </button>
    </div>
  );
}
