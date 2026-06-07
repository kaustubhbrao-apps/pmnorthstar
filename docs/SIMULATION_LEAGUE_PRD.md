# PRD: Simulation League (Season 1)

**Status:** Implementation Phase (Dark Launch)  
**Author:** Gemini CLI (as directed by Founder)  
**Target Launch:** Friday, June 12, 2026  

---

## 1. Vision & Strategy
### 1.1 Objective
Shift northstar from a passive content library to a **habit-forming, multiplayer platform**. The Simulation League introduces competitive tension and time-gated participation to drive recurring traffic and viral distribution.

### 1.2 The "Premier League" Analogy
Just as the Premier League creates ritualistic viewing windows, the Simulation League creates ritualistic "Playing Windows." By limiting when points can be earned, we manufacture FOMO (Fear Of Missing Out) and high-density engagement.

---

## 2. Core Loop (The Gameplay)
1. **Matchday Drops:** A new high-stakes simulation goes live every Wednesday evening.
2. **The Decision Window:** Players have until Saturday night to complete the drill.
3. **The "First-Try" Stakes:** Only the very first attempt is scored for the League. There are no do-overs in a real crisis.
4. **The Standings:** A global leaderboard ranks PMs based on their cumulative Season points.
5. **The Referral Hook:** Players are encouraged to "Challenge a Buddy," earning bonus points when their friends play.

---

## 3. Detailed Requirements

### 3.1 Scoring & Points Logic
*   **Variable Stakes:** Not all matches are equal. Points are tiered based on difficulty and strategic impact.
    *   **Major Matchdays:** Max 100 PTS (Reserved for legendary cases like Apple or Facebook).
    *   **Tier 2:** 80-90 PTS.
    *   **Tier 3:** 50-75 PTS.
*   **Server-Side Validation:** All scores are derived on the backend by walking the user's `pathTaken`. Client-sent totals are ignored to prevent cheating.
*   **Time-Gating:** Points are only awarded if `completedAt <= leagueEndsAt`. Attempts made after the window are logged to history but yield 0 points for the League.

### 3.2 Scheduling (Randomized Pool)
*   **The Pool:** A library of drafted, unscheduled simulations stored in `content/league-pool/`.
*   **Random Selector:** A script (`schedule-league.ts`) that shuffles the pool and assigns them to the next available Wednesday-Saturday slots.
*   **Unpredictability:** Point stakes and topics must be unpredictable to prevent players from "waiting" only for high-value drills.

### 3.3 Viral "Buddy Challenge" Loop
*   **The Bonus:** Referrer gets **+3 League Points** when a referred user completes their attempt.
*   **Anti-Farming:** A referrer can only earn the +3 bonus **once per drill**. Multiple referrals for the same drill do not stack points.
*   **Tracking:** Logic implemented via the `LeagueReferral` table and a `ref=USER_ID` URL parameter.

### 3.4 UI & User Experience
*   **The "Big One" Hype:** Drills worth >= 100 points trigger a **Rainbow Shimmer border** and a pulsing gold badge on the featured card.
*   **The Standings Table:** A Premier League style table showing:
    *   Rank (with Gold/Silver/Bronze badges for Top 3).
    *   User Avatar & Name.
    *   "Matches Played" count.
    *   Total League Points.
*   **Auth Gate:** Participation requires login. Anonymous users are intercepted with a "Log in to play for the League" call-to-action.

---

## 4. Technical Architecture
*   **Framework:** Next.js 14 (App Router).
*   **Database:** Supabase (PostgreSQL) + Prisma.
*   **State Management:** Dark Launch via `NEXT_PUBLIC_ENABLE_LEAGUE` feature flag.
*   **Performance:** ISR (`revalidate = 60`) for the leaderboard and landing page to ensure global low-latency.
*   **Image Optimization:** Next.js `<Image>` component for all hero assets to maintain a "Great" RES (Real Experience Score).

---

## 5. Content Strategy
*   **Format:** "Long-form" simulations. Extended intros (3-4 paragraphs) and deep strategic rationales for every branch.
*   **Library Linkage:** Every League match must conclude with a "Related Reading" link pointing to a long-form case study in the Northstar library.
*   **Season 1 Scope:** 50 Matchdays.

---

## 6. Roadmap & Next Steps
1. **Player Dashboard:** A dedicated space for users to see their rank, history, and "Pending Bonus" status.
2. **Referral Alerts:** Automated emails (via Resend) notifying users when a buddy has accepted their challenge and they've earned points.
3. **Anti-Cheat:** Advanced IP/browser fingerprinting to prevent multi-accounting.
4. **Official Launch:** Final toggle of the feature flag next Friday.
