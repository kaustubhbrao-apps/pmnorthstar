---
slug: "what-is-a-prd"
question: "What is a PRD and what goes in one?"
shortAnswer: "A product requirements document states the problem, who has it, what success looks like, and what's in and out of scope. Its purpose is alignment before building, not documentation after. A PRD nobody argues with in review is usually too vague to be useful."
category: "Discovery"
metaTitle: "What Is a PRD? Structure, Length and What to Leave Out"
metaDescription: "What a product requirements document should contain, how long it should be, and why Amazon writes the press release first. A practical structure you can copy."
keywords:
  - "what is a PRD"
  - "product requirements document"
  - "PRD template"
  - "how to write a PRD"
accentColor: "#9B8FFF"
relatedCaseStudyIds:
  - "cs-21"
  - "cs-25"
updatedAt: "2026-09-07"
faqs:
  - question: "How long should a PRD be?"
    answer: "One to three pages for most features. Length correlates with unread, and a document nobody finishes cannot align anyone. If it needs to be longer, the scope is probably too large to be one PRD."
  - question: "Do agile teams still write PRDs?"
    answer: "Most do, under various names — one-pager, brief, spec, RFC. The artefact survives because the underlying need survives: several people have to agree on the problem before work starts. What's changed is length and rigidity, not existence."
  - question: "What is the difference between a PRD and a user story?"
    answer: "A PRD frames a whole problem and its success criteria; a user story is one slice of implementable work. A single PRD usually produces many stories, and stories without a PRD tend to accumulate into features nobody can explain the purpose of."
---

## A structure that works

**Problem** — what's broken, for whom, with evidence. If this section cites no data or research, stop here; the rest is decoration.

**Why now** — what changed. Competitive move, platform shift, a support queue that's grown 40%. This is the section that gets cut and the one that most often exposes that the answer is "someone senior asked".

**Success criteria** — the metric and the target. Stated before building, so the result can't be reinterpreted afterwards.

**Scope** — in and, more importantly, out. The out-of-scope list prevents the slow expansion that turns a two-week feature into a quarter.

**Open questions** — what you don't know yet, named. A PRD with no open questions is usually hiding them.

Notably absent: solution detail. The PRD frames the problem; design and engineering own the shape of the answer.

## Amazon's inversion

Amazon's working-backwards method replaces the requirements doc with a press release and FAQ written as if the product already shipped. It's a forcing function — if the press release is boring, the product is boring, and you've learned that before spending a quarter rather than after.

The mechanism transfers even if the format doesn't: write the outcome first, in language a customer would recognise, and check whether it's worth wanting.

## The test of a good one

Hand it to an engineer and a designer who weren't in the discovery. If they can independently explain who this is for, what problem it solves, and how you'll know it worked, it's doing its job. If they come back asking what it's actually for, no amount of additional requirements will fix it.
