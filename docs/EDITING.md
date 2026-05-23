# Editing content on northstar

After the May 2026 markdown migration, all content lives in `content/`
as one markdown file per entity. The `data/*.ts` files are
**auto-generated artifacts** — never edit them by hand.

## File layout

```
content/
├── case-studies/        65 files — one per case study
├── books/               30 files — one per book
├── topics/               4 files — one per topic hub
├── comparisons/          5 files — one per X-vs-Y comparison
└── ai-decoded/           5 files — one per AI Decoded article
```

Each file is markdown with YAML frontmatter:

```markdown
---
slug: my-case-study
title: "How company X did Y"
category: "Product"
year: 2024
...
---

The body of the case study goes here. Plain markdown.
Paragraphs separated by blank lines.
```

## How to add a new case study

1. Create a new file in `content/case-studies/` — e.g. `my-new-case.md`
2. Copy the frontmatter format from an existing file
3. Fill in the fields + write the body
4. Run `npx tsx scripts/sync-content.ts` (regenerates `data/caseStudies.ts`)
5. Commit BOTH the markdown file AND the regenerated TS file
6. Push → Vercel deploys

## How to edit an existing case study

1. Open the file in `content/case-studies/{slug}.md`
2. Edit either the frontmatter or the markdown body
3. Run `npx tsx scripts/sync-content.ts`
4. Commit both files
5. Push

## Editing from any device (no laptop)

You can edit content from any browser without a local checkout:

### Option A — github.dev (VS Code in browser)

1. Visit `https://github.dev/<your-org>/pmnorthstar`
2. Edit files in the `content/` folder
3. Use the Source Control panel to commit + push
4. **One catch:** github.dev can't run terminal commands, so it
   can't run the sync script. The TS files won't update automatically.

### Option B — GitHub mobile / web UI

Smaller files (e.g. one case study) are easy to edit in the regular
GitHub web UI on phone or desktop.

### Option C — Codespaces (full terminal)

`https://github.com/<your-org>/pmnorthstar/codespaces` gives you a
full VS Code + terminal in browser. You can run the sync script
there. Free tier: 60 hours/month.

## What happens if I forget to run sync?

The markdown file changes, but the TS file (which the runtime
actually reads) stays stale. The site won't reflect your edit until
the TS file regenerates.

**Recovery:** run `npx tsx scripts/sync-content.ts` locally and
commit the regenerated TS files. Or open Codespaces and run it
there.

## Why two files?

- **Markdown** is small, mobile-editable, forgiving syntax.
- **Generated TS** is what the live site reads (client components
  need bundled JS, can't read filesystem).

Long-term, we may add a GitHub Action that auto-runs sync when
`content/` changes, eliminating the manual step entirely.

## Sync script details

`scripts/sync-content.ts` is deterministic and idempotent:

- Reads all files in `content/{topics,comparisons,books,case-studies}/`
- Regenerates the matching `data/*.ts` files from scratch
- Preserves all interfaces + helper functions (they're in the
  template)
- Sorts books by id-prefix order (pm → st → mg) and case studies
  numerically (cs-1 → cs-65) so output is stable across runs

Never edit `data/*.ts` directly — your changes will be overwritten
on the next sync.
