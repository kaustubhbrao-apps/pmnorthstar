import { Trophy } from "lucide-react";
import { type LeaderboardEntry } from "@/lib/leaderboard";

export function Leaderboard({
  top10,
  myEntry,
  totalPlayers,
  currentUserId,
}: {
  top10: LeaderboardEntry[];
  myEntry: LeaderboardEntry | null;
  totalPlayers: number;
  currentUserId?: string;
}) {
  const isMyEntryInTop10 = myEntry && top10.some((e) => e.id === myEntry.id);

  return (
    <section className="mt-10 mb-4 w-full">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <Trophy size={18} style={{ color: "var(--brand-primary)" }} />
          <h2
            className="font-display text-xl font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            League Standings
          </h2>
        </div>
        <span
          className="text-xs font-mono uppercase"
          style={{ color: "var(--text-faint)", letterSpacing: "0.1em" }}
        >
          {totalPlayers} {totalPlayers === 1 ? "player" : "players"}
        </span>
      </div>

      <div
        className="rounded-xl overflow-hidden w-full"
        style={{
          background: "var(--card-bg)",
          border: "1.5px solid var(--card-border)",
        }}
      >
        <div
          className="grid px-4 py-3 text-xs font-mono uppercase"
          style={{
            gridTemplateColumns: "48px 1fr auto",
            color: "var(--text-faint)",
            letterSpacing: "0.1em",
            borderBottom: "1px solid var(--card-border)",
          }}
        >
          <span>Rank</span>
          <span>Player</span>
          <span>Pts</span>
        </div>

        {top10.map((entry) => {
          const isMe = currentUserId === entry.id;
          return (
            <div
              key={entry.id}
              className="grid px-4 py-3 text-sm transition-colors"
              style={{
                gridTemplateColumns: "48px 1fr auto",
                borderBottom: "1px solid var(--card-border)",
                background: isMe
                  ? "color-mix(in srgb, var(--brand-primary) 8%, transparent)"
                  : "transparent",
                borderLeft: isMe
                  ? "3px solid var(--brand-primary)"
                  : "3px solid transparent",
              }}
            >
              <span
                className="font-mono font-bold"
                style={{
                  color:
                    entry.rank === 1
                      ? "#F5C842"
                      : entry.rank === 2
                      ? "#C0C0C0"
                      : entry.rank === 3
                      ? "#CD7F32"
                      : "var(--text-faint)",
                }}
              >
                #{entry.rank}
              </span>
              <span
                className="font-medium truncate"
                style={{ color: isMe ? "var(--brand-primary)" : "var(--text-primary)" }}
              >
                {entry.username ? `@${entry.username}` : entry.name ?? "Anonymous"}
                {isMe && (
                  <span
                    className="text-xs font-mono ml-2 px-1.5 py-0.5 rounded"
                    style={{
                      background: "color-mix(in srgb, var(--brand-primary) 15%, transparent)",
                      color: "var(--brand-primary)",
                    }}
                  >
                    You
                  </span>
                )}
              </span>
              <span
                className="font-mono font-bold tabular-nums"
                style={{ color: "var(--text-primary)" }}
              >
                {entry.leaguePoints}
              </span>
            </div>
          );
        })}

        {myEntry && !isMyEntryInTop10 && (
          <>
            <div
              className="px-4 py-1.5 text-center"
              style={{
                background: "color-mix(in srgb, var(--card-border) 30%, transparent)",
                borderBottom: "1px solid var(--card-border)",
              }}
            >
              <span style={{ color: "var(--text-faint)", letterSpacing: "2px" }}>•••</span>
            </div>
            <div
              className="grid px-4 py-3 text-sm"
              style={{
                gridTemplateColumns: "48px 1fr auto",
                background: "color-mix(in srgb, var(--brand-primary) 8%, transparent)",
                borderLeft: "3px solid var(--brand-primary)",
              }}
            >
              <span
                className="font-mono font-bold"
                style={{ color: "var(--text-faint)" }}
              >
                #{myEntry.rank}
              </span>
              <span
                className="font-medium truncate"
                style={{ color: "var(--brand-primary)" }}
              >
                {myEntry.username ? `@${myEntry.username}` : myEntry.name ?? "Anonymous"}
                <span
                  className="text-xs font-mono ml-2 px-1.5 py-0.5 rounded"
                  style={{
                    background: "color-mix(in srgb, var(--brand-primary) 15%, transparent)",
                    color: "var(--brand-primary)",
                  }}
                >
                  You
                </span>
              </span>
              <span
                className="font-mono font-bold tabular-nums"
                style={{ color: "var(--text-primary)" }}
              >
                {myEntry.leaguePoints}
              </span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
