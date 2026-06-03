export interface LeaderboardEntry {
  company: string;
  url: string;
  score: number;
  band: "stellar" | "ready" | "almost" | "polish" | "rough" | "vibe";
  timestamp: string;
}

export const CHECKIT_WAR_LEADERBOARD: LeaderboardEntry[] = [
  {
    company: "Linear",
    url: "linear.app",
    score: 96,
    band: "stellar",
    timestamp: "2026-05-28",
  },
  {
    company: "Stripe",
    url: "stripe.com",
    score: 94,
    band: "stellar",
    timestamp: "2026-05-29",
  },
  {
    company: "Vercel",
    url: "vercel.com",
    score: 92,
    band: "stellar",
    timestamp: "2026-05-30",
  },
  {
    company: "Zomato",
    url: "zomato.com",
    score: 88,
    band: "ready",
    timestamp: "2026-05-31",
  },
  {
    company: "Swiggy",
    url: "swiggy.com",
    score: 85,
    band: "ready",
    timestamp: "2026-05-31",
  },
  {
    company: "Blinkit",
    url: "blinkit.com",
    score: 82,
    band: "almost",
    timestamp: "2026-05-31",
  },
  {
    company: "Zepto",
    url: "zepto.com",
    score: 79,
    band: "almost",
    timestamp: "2026-05-31",
  },
];
