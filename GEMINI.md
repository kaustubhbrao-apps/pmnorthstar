# northstar — handoff context for Gemini

> **Read this first.** This is the single entry point for picking up the northstar project cold.
> It captures the current state (May 31, 2026) plus operating knowledge that previously lived only
> in an assistant's private memory and would otherwise be lost. Deeper history is in `docs/`.
>
> Companion docs (read as needed):
> - `docs/TECH.md` — **tech stack, design system (tokens + utilities), and annotated file map.** Read this for engineering.
> - `docs/CONTEXT.md` — long-form history & strategy. **Note: parts are stale** (it says 55 case
>   studies and "custom JWT auth"; both are outdated — see below). Trust THIS file where they conflict.
> - `docs/EDITING.md` — how to edit content safely.
> - `docs/content-tracker.md` — content inventory tracker.
> - `docs/LINKEDIN.md` and `docs/LINKEDIN_FULL_SCHEDULE.md` — the LinkedIn posting schedule/content.

---

## 1. What northstar is

A **free, no-paywall curated library for product managers, founders, and operators** — long-form case studies on how great products were built, plus books, YouTube playlists, AI analysis ("AI Decoded"), head-to-head comparisons, themed topic collections, and two interactive tools (**CheckIt**, **SimulateIt**).

- **Domain:** `pmnorthstar.in` (Hostinger DNS → Vercel)
- **Brand:** lowercase wordmark `north`+`star`; indie-tech aesthetic; primary red `#F3123C` (dark) / `#D4102F` (light)
- **Newsletter:** `pmnorthstar.substack.com`
- Built solo, indie, free forever. Positioning: India-first PM resource, global ambitions.
- **Accounts/ownership table:** see `docs/CONTEXT.md` (all on personal email — GitHub, Vercel Hobby, Supabase free, Substack, Search Console).

---

## 2. Tech stack & how to run it

- **Next.js 14.2 (App Router)** · **React** · **TypeScript** · **Tailwind + CSS variables**
- **Hosting:** Vercel (auto-deploys on push to `main`)
- **DB:** Supabase Postgres · **ORM:** Prisma (`prisma/schema.prisma` models: User, Session, SavedResource, LikedResource, PasswordResetToken, CheckitAudit, DrillAttempt)
- **Auth:** **Google SSO only** (email/password was removed in commit `2cfc584` as an account-takeover fix). Custom JWT in cookies; Supabase is the DB only, not Supabase Auth. In `NODE_ENV=development` auth is mocked so dev works even if Supabase is paused.
- **Email:** Resend (installed, not actively used)
- **Fonts:** Space Grotesk (display), JetBrains Mono (eyebrows/code)
- **Analytics:** Vercel Analytics + Speed Insights (watch the "Real Experience Score" per route)

Commands:
```
npm run dev            # local dev (localhost:3000)
npm run build          # production build — ALWAYS run before pushing
npm run lint
npx tsc --noEmit       # typecheck
npx tsx scripts/sync-content.ts   # regenerate data/*.ts from content/*.md  (see §4)
```

---

## 3. Repo map

```
app/
  page.tsx                     # home (tabs: home/library/casestudies/learn/saved/favourites)
  layout.tsx                   # root metadata, JSON-LD WebSite+SearchAction
  case-study/[id]/             # case study detail (+ layout.tsx: Article/Breadcrumb JSON-LD, generateStaticParams)
    opengraph-image.tsx        # dynamic OG card
  ai-decoded/, compare/[slug]/, topics/[slug]/, book/[slug]/   # content detail routes (each has layout.tsx w/ JSON-LD + opengraph-image)
  india/                       # /india landing (India PM positioning)
  checkit/                     # CheckIt tool (see §6)
  simulate/                    # SimulateIt tool (see §6)
  api/
    auth/ (google SSO), saved/, liked/
    checkit/ (audit, og, stats), simulate/ (og, log-attempt, save-attempt, stats, me)
  sitemap.ts, robots.ts
components/                    # Sidebar, MobileNav, HeroBanner, cards, SubscribeForm, SmartEngagementBlock, Breadcrumbs, etc.
content/                       # ★ SOURCE OF TRUTH for content (markdown) — see §4
  case-studies/ (86)  ai-decoded/ (26)  comparisons/ (15)  topics/ (14)  drills/ (27)  books/ (30)
data/                          # ★ GENERATED from content/ — do NOT hand-edit (see §4)
  caseStudies.ts  aiDecodedManifest.ts  comparisons.ts  topics.ts  drills.ts  books.ts  + *Faqs.ts, companyDomains.ts, learn.ts
lib/                           # og.tsx (OG templates), checkit/, track.ts, prisma.ts, use-user-state.ts
public/                        # llms.txt, logos
scripts/                       # sync-content.ts (★), build-content-tracker.mjs, shift-drill-schedule.mjs, migrate-*
docs/                          # CONTEXT.md, EDITING.md, content-tracker.md, LINKEDIN*.md
```

**Current inventory (May 31, 2026):** 86 case studies (**76 live in production**, 10 future-dated through Aug 11; 16 Indian), 26 AI Decoded, 15 comparisons, 14 topics, 27 drills, 30 books.

⚠️ **Known stale copy to fix:** hardcoded case-study counts say `64+` in `app/checkit/CheckItClient.tsx` (FooterCta) and `65` in `app/not-found.tsx`. Update to **76+** — or better, derive from `publishedCaseStudies().length` so they never go stale.

---

## 4. Content system (the most important workflow)

**`content/<type>/<slug>.md` is the source of truth.** The `data/*.ts` files are **auto-generated** — never hand-edit them.

To add or edit content:
1. Edit/create the markdown in `content/<type>/`.
2. Run `npx tsx scripts/sync-content.ts` to regenerate `data/*.ts`.
3. `npm run build` to verify, then commit **both** the `.md` and the regenerated `.ts`.

### Scheduled publishing (`publishedAt`)
Every content type supports future-dating via a `publishedAt` (ISO date) field in the markdown frontmatter:
- **No `publishedAt` = always live** (legacy/back-compatible).
- A **future** `publishedAt` hides the item in production until that date; **dev shows everything**.
- Gating lives in generated `data/*.ts` via `published*()` helpers and gated getters
  (`getCaseStudyById/BySlug`, `getTopicBySlug`, `getComparisonBySlug`, `getIndianCaseStudies`,
  `publishedDrills`, `publishedAIDecoded`). So detail pages 404 and cross-references (home, related,
  sitemap, topics, comparisons) drop future items automatically.
- **Reveal mechanism is ISR:** affected routes export `revalidate = 3600`, so content goes live on
  its date within ~1h **without a redeploy**. (Drill pages `/simulate/[slug]` were converted from
  `force-dynamic` to ISR for performance — keep them static; the per-score logic lives on the
  separate `/simulate/[slug]/result` route precisely to keep the drill page cacheable.)

**Rule of thumb:** to schedule a post, add `publishedAt` to its frontmatter and re-sync. Don't touch `data/*.ts` by hand.

---

## 5. Conventions & preferences (carry these forward)

- **Design: solid saturated color blocks, white type, bold over subtle.** Prefer solid color banners/chips/tiles/score-cards over dark cards with thin accents. (e.g. CheckIt score header is a full band-color block; SimulateIt accent is hot pink `#DB2777`.)
- **Commits: batch related changes into one commit/push at logical milestones** to reduce Vercel deploy churn. Don't push tiny one-line commits repeatedly.
- **Always `npm run build` (and `tsc --noEmit`) before pushing.** Vercel builds on every push to `main`.
- **Commit/push only when asked.** When committing, prefer one clean batched commit with a descriptive message.
- **JSON-LD, dynamic OG images, sitemap, and `llms.txt` already exist** across content types — don't rebuild them; extend them.

---

## 6. The two interactive tools

### CheckIt (`/checkit`)
A free **30-second site-readiness audit**. Paste a URL → score /100 across **35 checks** (performance, SEO, UX, brand, trust, polish, modern web standards) → band (green "ready" → red "vibe-coded") with fixes.
- `app/checkit/CheckItClient.tsx` (UI), `app/api/checkit/audit` (logic), `app/api/checkit/og` (shareable band-colored score card for `/checkit?url=X` shares), `lib/checkit/`.
- Audits logged to `CheckitAudit`. A `SubscribeForm` (Substack embed) renders on the results screen.

### SimulateIt (`/simulate`)
**Branching decision drills** built on real startup moments. Player makes calls → sees consequences → scored on product/business/founder dimensions. Two new drills/week (future-dated, ISR-gated).
- `app/simulate/page.tsx` (landing), `app/simulate/[slug]/` (page = ISR + `SimulatePlayer.tsx` client).
- **Shareable result OG card:** `app/api/simulate/og` renders a score card (score + 🟩🟨🟥 decision squares); `/simulate/[slug]/result` is a `noindex` share-landing page whose OG points at that card; `/simulate/[slug]/opengraph-image.tsx` is the static branded card for the bare link. `lib/og.tsx` holds the templates (`simulateOgTemplate`).
- `SubscribeForm` renders on the drill outcome screen. Drills live in `content/drills/` → `data/drills.ts`.

---

## 7. Content / distribution operation

This is a content business; publishing cadence matters as much as code.

### LinkedIn — daily, 8:30pm, with brand-logo image
Format (the "Day N" template, see `docs/LINKEDIN.md` / `docs/LINKEDIN_FULL_SCHEDULE.md`):
```
Day N — <Subject>
<1-2 line punchy hook (often a number / contrarian fact)>
<founder/context line>
Four <bets/moves/lessons> that <...>:
→ <insight grounded in the article>   (×4)
Full breakdown: pmnorthstar.in/<type>/<slug>
<one engagement question generalizing the lesson>
#Hashtag #hashtag #hashtag #hashtag
```
Rules: spoiler-free where there's a twist, ground every `→` in the real article, never repeat a company already posted, and **only link to content that's already live** (a future-dated link 404s until its date). The posted history runs through ~Day 45; Day 46+ continues from the live/unposted case-study pool (varied by category, no two same-category or India posts back-to-back).

### Substack — newsletter (`pmnorthstar.substack.com`)
Format that worked: one **subject** + italic **deck/subtitle**, short intro, 3–5 sections each ending in a `→ Full breakdown / Play it / Score your site` link, "forward to a PM friend" close. **Only feature content already live** (no future `publishedAt`).
- Last issue (2026-05-31) covered: Google Antigravity 2, Stripe, Nykaa, SimulateIt launch, CheckIt.
- Drafted & queued for next issue (were future-dated on 5/31): **Anthropic vs OpenAI (enterprise)** — live Jun 1, `/ai-decoded/anthropic-vs-openai-enterprise-2026`; **Sora 2 vs Veo 3 vs Runway (AI video)** — live Jun 2, `/ai-decoded/video-generation-arms-race-2026`. Long-form drafts for ~46 scheduled pieces (AI Decoded / case studies / comparisons / topics, Jun–Aug) were written and grounded in each article — regenerate similar from the `content/*.md` bodies as they go live.

---

## 8. Recent work (May 30–31, 2026) — most recent commits

- `918510f` SimulateIt shareable result OG card (score + decision-square card; `/api/simulate/og`, `/result` share page, `opengraph-image`).
- `872e2b9` Subscribe form added to CheckIt + SimulateIt results; **`/simulate/[slug]` converted force-dynamic → ISR** (perf fix for a low Speed-Insights score on that route).
- `6b047e0` 40 scheduled content pieces (10 case studies, 10 AI Decoded, 10 comparisons, 10 topics) future-dated Jun–Aug.
- `2cfc584` Auth → Google-SSO-only.
- Header CheckIt CTA recoloured to blue `#1D4ED8`.

---

## 9. Open TODOs / watch-list

1. **Fix stale case-study counts** (`64+` in CheckItClient.tsx, `65` in not-found.tsx) → `76+` or derive dynamically.
2. **`/simulate/[slug]` Speed-Insights:** was RES 69 on a tiny sample; the ISR conversion should pull it up — re-check once samples accumulate.
3. **Distribution backlog ideas** (net-new, not yet built): `/for/[persona]` pSEO landing pages, `llms-full.txt`, newsletter lead-magnet (PDF). JSON-LD, OG images, sitemap, `llms.txt` are already done.
4. **Log posts as they ship** so LinkedIn ↔ Substack don't duplicate the same story in one week.

---

_Handoff prepared May 31, 2026. The project is in a clean, deployed state on `main`. Be kind to it — it was built with a lot of care._
