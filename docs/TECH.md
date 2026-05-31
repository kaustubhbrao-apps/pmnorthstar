# northstar — Tech Stack, Design System & Important Files

> Companion to `/GEMINI.md`. This is the engineering reference: how the stack fits together,
> the design system (theming + tokens + utility classes), and an annotated map of the files that
> matter. Accurate as of **May 31, 2026**.

---

## 1. Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 14.2** (App Router) | RSC by default; client components marked `"use client"` |
| Language | **TypeScript** | `npx tsc --noEmit` to typecheck |
| UI | **React 18** | |
| Styling | **Tailwind CSS + CSS variables** | Theming is done with CSS vars, NOT Tailwind dark mode (see §2 gotcha) |
| Icons | **lucide-react** | |
| Fonts | **next/font/google** — Space Grotesk (display/body), JetBrains Mono (mono/eyebrows) | exposed as `--font-space-grotesk` / `--font-jetbrains-mono` on `<html>` |
| Hosting | **Vercel** | auto-deploys on push to `main`; ISR + edge caching in use |
| DB | **Supabase Postgres** | DB only — **not** Supabase Auth |
| ORM | **Prisma** (`@prisma/client`) | `postinstall` runs `prisma generate` |
| Auth | **Google SSO only** | custom JWT sessions in cookies via **`jose`**; `bcryptjs` + `passwordHash` are legacy/unused |
| Markdown | **gray-matter** (frontmatter) + **marked** (render) | content pipeline + AI Decoded/drill body rendering |
| Email | **Resend** | installed, not actively used |
| Analytics | **@vercel/analytics** + **@vercel/speed-insights** | watch per-route Real Experience Score |

**Dev auth bypass:** when `NODE_ENV === "development"`, auth is mocked so the app runs even if Supabase is paused. Dev also shows all future-dated content.

**`middleware.ts`** exists at root — handles auth/session checks at the edge for protected routes. Read it before touching auth or adding protected pages.

---

## 2. Design system

### Theming model (important)
All theming lives in **`app/globals.css`** via **CSS custom properties**. There is no Tailwind `dark:` usage for theme.

- `:root { … }` = **LIGHT mode defaults.**
- Dark mode applies in two ways:
  1. `:root:not([data-theme="light"])` inside `@media (prefers-color-scheme: dark)` — system preference.
  2. `[data-theme="dark"]` — explicit user choice (set by `components/ThemeToggle.tsx`). **Explicit `[data-theme]` always wins over the media query.**

So: to style anything, **use the CSS variables** (`var(--…)`) — never hardcode a hex that needs to flip per theme.

### ⚠️ Gotcha: the Tailwind `north.*` palette is legacy
`tailwind.config.ts` defines a `north` color scale (`north-accent #6C63FF` purple, `north-gold`, etc.). **This is an outdated palette and is NOT the live design system.** The real brand is red, driven by CSS variables. Avoid `bg-north-*` / `text-north-*` classes; use the CSS vars and the utility classes below. (Tailwind is mostly used for layout utilities — flex, grid, spacing — not color.)

### Design tokens (CSS variables)

| Token | Light | Dark | Use |
|---|---|---|---|
| `--page-bg` | `#FFFFFF` | `#000000` | page background |
| `--surface-bg` / `--card-bg` | `#FFFFFF` / `#FFFFFF` | `#000000` / `#0A0A0A` | cards, panels |
| `--tag-bg` | `#F4F4F4` | `#141414` | chips/tags |
| `--card-border` | `#DCDCDC` | `#2A2A2A` | borders (used at 1.5px) |
| `--divider` | `#ECECEC` | `#1F1F1F` | hairlines |
| `--brand-primary` | `#D4102F` | `#F3123C` | **brand red** |
| `--brand-hover` | `#B00B25` | `#D4102F` | brand hover |
| `--brand-soft` | `rgba(212,16,47,.06)` | `rgba(243,18,60,.08)` | brand tint backgrounds |
| `--text-primary` | `#0A0A0A` | `#FFFFFF` | headings/body |
| `--text-muted` | `#3A3A3A` | `#CFCFCF` | secondary text |
| `--text-faint` | `#7A7A7A` | `#909090` | eyebrows/meta |
| `--success` / `--warning` / `--danger` | `#15803D` / `#B45309` / `#D4102F` | `#22C55E` / `#F59E0B` / `#F3123C` | status |
| `--sidebar-bg`, `--sidebar-border`, `--nav-bg` | white / `#DCDCDC` / white | black / `#232323` / black | nav surfaces |
| `--font-display`, `--font-body` | Space Grotesk | | headings + body |
| `--font-mono` | JetBrains Mono | | eyebrows, counts, code |

**Non-token brand color:** SimulateIt uses hot pink **`#DB2777`** as its accent (set inline / in OG templates, not a global var).

### Design principle (carry forward)
**Solid, saturated color blocks with white type; bold over subtle.** Prefer full-color banners/chips/score-cards over dark cards with thin accents. Note several "glow"/gradient/dot-grid effects were deliberately removed per design feedback — `.glow-brand`, `.glow-accent`, `.hero-gradient`, `.dot-grid` are kept as **no-ops** so call sites don't break. Don't reintroduce glows.

### Utility classes (defined in `app/globals.css`)

**Buttons** (semantics matter):
- `.btn-primary` — high-contrast **inverted** CTA: background `--text-primary`, text `--page-bg` (black-on-white in light, white-on-black in dark). The loud neutral primary action.
- `.btn-accent` — **solid brand red** CTA (`--brand-primary`).
- `.btn-accent-soft` — brand-tinted secondary (soft red bg + red text); sits between ghost and accent.
- `.btn-ghost` — outline/transparent secondary.

**Surfaces & text:**
- `.surface` — standard card: `--card-bg` + 1.5px `--card-border` + 12px radius.
- `.eyebrow` — uppercase mono-ish label, 11px, letter-spacing .14em, `--text-faint`.
- `.chip` / `.chip.active` / `.chip-count` — pill filters; active = solid brand.
- `.hairline`, `.meta-mono`, `.arrow-pill`, `.card-arrow`, `.star` (brand-red star in wordmark).
- `.article-prose` — editorial typography for `marked`-rendered HTML (AI Decoded + drill bodies): 17px / 1.7 line-height.
- Card variants: `.book-card`, `.case-card`, `.playlist-card`, `.nav-item`, `.filter-chip`.
- Gradient text: `.gradient-text` (animated rainbow), `.gradient-brand`, `.gradient-cool`, `.gradient-warm`.
- `.animate-section` — fadeInUp entrance.

### OG image system (`lib/og.tsx`)
Shared `next/og` templates, all `1200×630` (`OG_SIZE`):
- `ogTemplate` / `ogImage` — generic northstar card (black bg, red glow) used by content `opengraph-image.tsx` files.
- `checkitOgTemplate` / `checkitPromoTemplate` — CheckIt score card (background = band color) for `/checkit?url=X` shares, served by `app/api/checkit/og/route.tsx`.
- `simulateOgTemplate` — SimulateIt result card (dark bg, pink accent, big score + G/Y/R decision squares), served by `app/api/simulate/og/route.tsx` and consumed by `/simulate/[slug]/result`.
- Per-page static cards: `app/<type>/[slug]/opengraph-image.tsx`.

---

## 3. Important files (annotated)

### App shell & routing
- **`app/layout.tsx`** — root metadata, font wiring, JSON-LD (`WebSite` + `SearchAction`), `ConsentBanner`, analytics, theme attribute. `metadataBase` = `SITE_URL`.
- **`app/globals.css`** — ★ the entire design system (tokens + utilities). 623 lines.
- **`app/page.tsx`** — home; tabbed (home/library/casestudies/learn/saved/favourites).
- **`middleware.ts`** — edge auth/route handling.
- **`components/SidebarShell.tsx`** — standard page wrapper (sidebar + content) used by most routes.
- Nav: `Sidebar.tsx` (desktop), `MobileNav.tsx` (chip strip), `TopNav.tsx` (search/filters/theme).

### Content engine (see GEMINI.md §4 for the workflow)
- **`content/<type>/<slug>.md`** — ★ source of truth.
- **`scripts/sync-content.ts`** — ★ regenerates `data/*.ts` from `content/`. Run after any content edit.
- **`data/*.ts`** — generated; **never hand-edit.** Each exposes gated getters + `published*()` helpers for scheduled publishing.
- `scripts/shift-drill-schedule.mjs`, `scripts/build-content-tracker.mjs` — schedule/inventory helpers.
- `docs/EDITING.md` — content editing guide.

### lib/
- **`lib/auth.ts`** — JWT/session creation & verification (`jose`), current-user helpers.
- **`lib/prisma.ts`** — Prisma client singleton.
- **`lib/site.ts`** — `SITE_URL` and site-wide constants.
- **`lib/track.ts`** — `track({name, …})` analytics event helper (used across CheckIt/SimulateIt/SubscribeForm).
- **`lib/og.tsx`** — OG templates (see §2).
- **`lib/use-user-state.ts`** — client hook for saved/liked state, syncs across duplicate cards.
- **`lib/category-colors.ts`** — category → color map.
- **`lib/ai-decoded.ts`**, **`lib/topics.ts`** — content helpers.
- **`lib/checkit/`** — `audit.ts` (orchestrates the audit), `checks.ts` (the 35 checks), `dimensions.ts` (groupings), `types.ts` (`Band`, `AuditResult`), `cache.ts`, `util.ts` (`normalizeUrl`, `safeHost`).

### Data / DB
- **`prisma/schema.prisma`** — models: `User` (has `googleId`; `passwordHash` is a legacy nullable column), `Session`, `SavedResource`, `LikedResource`, `PasswordResetToken` (legacy), `CheckitAudit` (host/score/band/fetchedAt), `DrillAttempt` (per-dimension scores + `pathTaken` JSON).

### API routes (`app/api/`)
| Route | Purpose |
|---|---|
| `auth/google/start`, `auth/google/callback` | Google SSO flow |
| `auth/me`, `auth/logout` | session info / logout |
| `saved`, `liked` | POST/DELETE save & like state |
| `checkit/audit` | run a site audit |
| `checkit/og` | dynamic score-card OG image |
| `checkit/stats` | "X sites scored this week" |
| `simulate/og` | dynamic result score-card OG image |
| `simulate/log-attempt`, `simulate/save-attempt`, `simulate/me`, `simulate/stats` | drill attempts (save flow currently paused — anonymous play) |

### Key components
`SubscribeForm.tsx` (Substack `/embed` iframe — renders on content pages + CheckIt/SimulateIt results), `SmartEngagementBlock.tsx` (subscribe-vs-recommendations switch), `RecommendationsBlock.tsx`, `Breadcrumbs.tsx` (+ JSON-LD), `Byline.tsx`, `ShareButton.tsx`, `AuthModal.tsx`, `ThemeToggle.tsx`, `ConsentBanner.tsx`, `Footer.tsx`, cards (`CaseStudyCard`, `ResourceCard`, `PlaylistCard`), `SectionRow.tsx`.

---

## 4. Build & deploy checklist
1. Edit content in `content/` → `npx tsx scripts/sync-content.ts`.
2. `npx tsc --noEmit` and `npm run build` — both must pass.
3. Commit the `.md` **and** regenerated `.ts` together; batch related changes.
4. Push to `main` → Vercel deploys. ISR routes (`revalidate = 3600`) pick up scheduled content within ~1h without a redeploy.

_Pairs with `/GEMINI.md` (project overview, content ops, TODOs) and `docs/CONTEXT.md` (history/strategy — partly stale on counts/auth)._
