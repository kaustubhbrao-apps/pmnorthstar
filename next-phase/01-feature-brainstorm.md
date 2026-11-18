# northstar — New Features & Tools Brainstorm
**August 10, 2026**

---

## The Landscape

You have **143 case studies**, **59 drills**, **48 comparisons**, **29 AI Decoded**, **30 books**, **14 topics** — and two shipped interactive tools (**CheckIt**, **SimulateIt**). You also have partially-built infrastructure for a third tool and a gamification layer. The content engine is mature. The question is: **what's the next thing that makes people come back every day, not just when they Google a company name?**

---

## 🟢 Layer 1: Finish What's Half-Built

These have schema, routes, or components already in place. Highest ROI per hour of work.

### 1. **The Builder Draft** (`/draft`)
**What it is:** A 10-question personality quiz that matches you to one of 20 builder archetypes (*Visionary Playmaker*, *Ice-Cold Closer*, etc.) and gives you a collectible, shareable player card.

**Why it matters:**
- Quizzes are the highest-virality content format on the internet — period
- A shareable "I'm a Visionary Playmaker" card on LinkedIn is free distribution
- It's *identity-creating* — people will put their archetype in their bio
- Zero ongoing content cost once shipped (unlike drills which need 2/week)
- `BuilderDraftAttempt` model already exists in Prisma

**What's needed:** Frontend quiz flow, archetype definitions, card design, OG share card

> [!TIP]
> **Virality hack:** After getting your archetype, show "Famous builders who share your archetype" — link to relevant case studies. Suddenly the quiz feeds the content flywheel.

---

### 2. **Simulation League** (`/league`)
**What it is:** Weekly competitive leaderboard around SimulateIt drills. Players earn points for first-attempt scores + referral invites. 50 Matchdays.

**Why it matters:**
- Turns passive readers into weekly-returning players
- Referral loop is built into the scoring (`LeagueReferral` model, 3pts per invite)
- `leaguePoints` already on the `User` model, `Leaderboard.tsx` component exists
- Creates FOMO — "Matchday 12 is live, you're falling behind"

**What's needed:** League rules page, matchday scheduling logic, leaderboard API, launch campaign

> [!IMPORTANT]
> The League only works if SimulateIt has enough drills queued. You have **59 drills** — that's enough for a full season. This is shippable.

---

### 3. **`/for/[persona]` pSEO Pages**
**What it is:** Role-specific landing pages (`/for/product-managers`, `/for/founders`, `/for/growth-leads`) that curate your existing content for each audience.

**Why it matters:**
- Pure SEO play — captures long-tail "product management case studies" / "founder lessons" queries
- Route structure already exists at `app/for/[persona]`
- No new content needed — it's curation of what you already have
- Each page becomes a share-worthy "start here" link

**What's needed:** Persona definitions, content tagging/mapping, page design

---

## 🟡 Layer 2: New Tools (High Impact, Buildable Now)

These don't exist yet but fit naturally into northstar's positioning and tech stack.

### 4. **DebateIt** — AI-Powered Product Debate Arena
**What it is:** Pick a product dilemma (e.g., "Should Spotify have launched video?", "Was Twitter's rebrand to X smart?"). Take a side. Argue your case in 3 rounds against an AI opponent that takes the other side. Get scored on argument quality, evidence usage, and strategic thinking.

**Why it's special:**
- Combines the analytical depth of your case studies with interactivity
- Each debate maps to an existing case study → drives content consumption
- Shareable: "I won a debate about Spotify's pivot — 87/100"
- Differentiator: nobody in the PM space has this
- Reusable engine: each case study can spawn 2-3 debate prompts

**Complexity:** Medium-high (needs an LLM API call for the AI opponent + scoring rubric)

---

### 5. **AuditIt** — Product Teardown Generator
**What it is:** Enter any product/app name → get an instant AI-generated product teardown covering: positioning, pricing model, onboarding flow, competitive moat, growth loops, and "what I'd change." Styled like your case studies but auto-generated.

**Why it's special:**
- CheckIt audits *websites*. AuditIt audits *products* — the natural complement
- Covers the 99% of products you'll never write a manual case study about
- Lead gen: "Want the full human-written deep dive? Subscribe"
- Every output links to related hand-written case studies as "see how the best did it"

**Complexity:** Medium (LLM API + structured output + your existing card/layout components)

---

### 6. **MapIt** — Interactive Strategy Map Builder
**What it is:** A visual canvas where users plot a company's strategic moves on a timeline. Drag-and-drop decision nodes, connect cause-and-effect chains, annotate with outcomes. Pre-loaded templates from your case studies.

**Why it's special:**
- Visual thinking tool — PMs love frameworks and maps
- Templates from case studies = content discovery vehicle
- Saveable + shareable = portfolio piece for job-seeking PMs
- Unique in the space — no PM tool does visual strategy mapping

**Complexity:** High (canvas/drag-drop UI, state management, save/export)

---

### 7. **BenchmarkIt** — PM Salary & Career Benchmarker
**What it is:** Anonymous salary + career-stage benchmarking tool. Input your role, YOE, company stage, location → see where you stand. Crowdsourced data grows the moat over time.

**Why it's special:**
- Massive search volume ("PM salary India", "product manager compensation")
- Self-reinforcing: every user adds data, making it more valuable
- Natural pairing with books and case studies ("PMs at companies like Stripe earn X — here's how Stripe thinks about product")
- Sticky — people come back to re-check

**Complexity:** Medium (form + anonymous data collection + percentile math)

> [!WARNING]
> Needs critical mass of data to be useful. Could seed with publicly available salary data initially.

---

### 8. **StackIt** — Product Tech Stack Revealer
**What it is:** Enter a product URL → reveals the tech stack, analytics tools, frameworks, and infrastructure powering it. Like BuiltWith but opinionated and tied to your case studies.

**Why it's special:**
- Technical PMs and founders love this
- Every stack reveal links to relevant case studies ("This company uses Stripe — read how Stripe was built")
- Complements CheckIt (which checks the site) with "what's under the hood"
- Data from Wappalyzer-style detection + your editorial layer

**Complexity:** Medium (HTTP fetching + tech detection heuristics)

---

## 🔴 Layer 3: Bigger Bets (High Ceiling, More Work)

### 9. **northstar AI** — Conversational PM Mentor
**What it is:** Chat interface trained on all 143 case studies, 30 books, 48 comparisons. Ask it anything: "How did Notion grow without ads?", "What pricing model should I use for a B2B SaaS?", "Compare Slack's and Discord's community strategies." It answers grounded in your content, with citations.

**Why it's special:**
- You have a *unique corpus* — this isn't generic ChatGPT, it's an expert grounded in curated PM knowledge
- Every answer cites and links to your content
- Moat: the quality of the underlying case studies
- Could gate behind auth for engagement tracking

**Complexity:** High (RAG pipeline, embedding your content, chat UI, cost management)

---

### 10. **PM Portfolio Builder**
**What it is:** Guided tool that helps PMs build a case-study-style portfolio of their own work. Templates based on your case study format. Export as a polished PDF or shareable link.

**Why it's special:**
- Every PM preparing for interviews needs this
- Your case study format IS the template — meta and on-brand
- Shareable output = distribution
- Natural upsell to "study these case studies to prep for your interview"

**Complexity:** Medium-high (rich text editor, PDF export, template system)

---

## My Take: What to Build Next

| Priority | Feature | Effort | Virality | Retention | Moat |
|----------|---------|--------|----------|-----------|------|
| **🥇** | **Builder Draft** | Low | 🔥🔥🔥 | Medium | Low |
| **🥈** | **Simulation League** | Medium | 🔥🔥 | 🔥🔥🔥 | High |
| **🥉** | **DebateIt** | Medium | 🔥🔥 | 🔥🔥 | High |
| 4 | `/for/[persona]` pSEO | Low | Low | Medium | Medium |
| 5 | AuditIt | Medium | 🔥🔥 | Medium | Medium |

**Builder Draft first.** It's the lowest-effort, highest-virality play. Schema exists. A quiz that gives you a collectible identity card is catnip for LinkedIn. Ship it in a weekend, watch it spread.

**Then League.** It turns SimulateIt from "try once" to "come back every week." The infrastructure is half-done. This is your retention engine.

**Then DebateIt.** It's the feature nobody else has. It's intellectually exciting. And every debate is a content discovery moment.

---

*What resonates? What do you want to dig into?*
