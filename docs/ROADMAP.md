# northstar Roadmap

Ideas that are decided-on but not built. Not a backlog of everything —
only things with a clear reason to exist. Newest at the top.

> `next-phase/` holds separate, earlier planning material and is not
> maintained from here.

---

## Per-company detail view for the YC audit report

**Status:** planned, not started
**Added:** 2026-09-08

`/reports/startup-website-audit-2026` names and ranks all 496 audited
companies, but a row only shows the final score. A founder who finds
themselves in the table learns that they scored 61 and nothing about why.

Build a per-company view — `/reports/startup-website-audit-2026/<slug>` —
showing that company's result across all 35 checks: which passed, which
failed, and the points each was worth. The audit already computes this;
`scripts/yc-audit-study.ts` discards everything except the total when it
writes `rows`.

**Why it matters beyond the report itself.** It changes what outreach can
be. Emailing 496 companies "you scored 44/100" is a negative hook, bad for
domain reputation, and likely to annoy exactly the people most motivated to
reply. Emailing a founder "here are the four things your homepage is
missing, on the same 35 checks we ran across your batch" is a favour. The
detail page is what makes the second version possible.

**Notes / open questions**
- Storage: keeping 35 check results × 496 companies in `data/yc-study.ts`
  would balloon it well past its current ~4.8k lines. Consider a separate
  generated file per company, or one JSON keyed by slug loaded server-side
  only — the report page is already a server component, so it never has to
  reach the client bundle.
- Each page needs a canonical, `noindex` consideration (496 thin pages is a
  real risk — probably index them only if the per-check detail is
  substantial), and an entry in the sitemap if indexed.
- Add a correction/removal contact line on the report and on each detail
  page.
- Re-running the study regenerates every page, so scores and copy must both
  come from the generated data, never be hand-written.
