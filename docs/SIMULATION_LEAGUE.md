# Simulation League: The Premier League of Product Management

## 🏆 Vision
A season-based competitive platform for Product Managers to practice high-stakes decision making. Unlike casual drills, the League operates on a strict "Matchday" schedule with permanent standings, creating retention through competition and FOMO.

## 🕹 Core Mechanics
- **Matches:** Long-form, heavily branched simulations based on real startup pivots and crises.
- **Matchdays:** Drills go live on **Wednesday (8:30pm IST)** and close on **Saturday (11:59pm IST)**.
- **The "First Try" Rule:** Only the first attempt during the active window counts for League Points.
- **Variable Stakes:** Matches are tiered (Tier 1: 100 PTS, Tier 2: 80-90 PTS, Tier 3: 50-75 PTS).
- **Referral Loop:** Challenging a buddy earns the referrer **+3 bonus points** (once per drill) if the buddy completes the match.

## 🛠 Technical Architecture

### 1. Database Schema (Prisma)
- **`User` table:** Added `leaguePoints` (Int).
- **`DrillAttempt` table:** Added `isFirstAttempt` (Boolean) and `leaguePointsEarned` (Int).
- **`LeagueReferral` table:** Tracks `referrerId`, `referredId`, and `drillSlug` with a unique constraint to prevent referral farming.

### 2. The Backend Referee (`/api/simulate/save-attempt`)
- Validates the user session.
- Derives the score server-side (does not trust client-sent totals).
- Checks if the drill is currently active and within its `leagueEndsAt` window.
- Checks the database for previous attempts.
- Executes a transaction to update the attempt, the user's total points, and process any valid referral bonuses.

### 3. The Feature Flag (Dark Launch)
- All League UI and logic is wrapped in `process.env.NEXT_PUBLIC_ENABLE_LEAGUE === "true"`.
- Hidden features: Leaderboard, "Major Matchday" animations, forced auth gate, scoring logic.

### 4. Randomized Scheduler (`scripts/schedule-league.ts`)
- Pulls from a pool of drafted JSON drills in `content/league-pool/`.
- Shuffles the pool to ensure unpredictable point stakes and topics.
- Assigns specific Wednesday/Saturday time-gates.
- Moves them to `content/drills/` for production sync.

## 📅 Season 1 Content Roster (10 Weeks)
Drills are linked to corresponding long-form case studies in the library:
1. **PayPal (1999):** The $20 Referral Bounty (70 PTS)
2. **LEGO (2003):** The Bankruptcy Surgery (85 PTS)
3. **Uber (2011):** The Cold Start Seattle (80 PTS)
4. **Apple (2005):** The iPhone Cannibalization (100 PTS) 🌈
5. **Facebook (2012):** The Mobile Rewrite (100 PTS) 🌈
6. **Figma (2015):** The Browser Graphics Gamble (90 PTS)
7. **Clubhouse (2020):** FOMO vs. Android (50 PTS)
8. **Pinterest (2010):** The Waitlist Illusion (75 PTS)
9. **Zoom (2018):** The One-Click Obsession (80 PTS)
10. **Dropbox (2008):** The Viral Sync Engine (75 PTS)

## 🚀 Deployment Status
- **Localhost:** 100% Complete and tested with the feature flag.
- **Production:** Code is live but **DORMANT** (behind the flag). 
- **Launch Date:** Next Friday.

## 📝 Next Steps (Phase 2)
- Build the **Player Dashboard** (`/simulate/me`).
- Implement **Email Notifications** for referral bonuses via Resend.
- Add **Anti-Cheat Hardening** for the API endpoint.
