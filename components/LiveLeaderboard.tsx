"use client";

import { useEffect, useState } from "react";
import { Leaderboard } from "./Leaderboard";
import type { LeaderboardEntry } from "@/lib/leaderboard";

export function LiveLeaderboard() {
  const [data, setData] = useState<{
    top10: LeaderboardEntry[];
    myEntry: LeaderboardEntry | null;
    totalPlayers: number;
    currentUserId?: string;
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/simulate/leaderboard")
      .then(res => res.json())
      .then(d => {
        if (!d.error) {
          setData(d);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || !data) return null;

  return (
    <Leaderboard 
      top10={data.top10}
      myEntry={data.myEntry}
      totalPlayers={data.totalPlayers}
      currentUserId={data.currentUserId}
    />
  );
}
