---
slug: "what-is-vibe-coding"
question: "What is vibe coding and what are its risks?"
shortAnswer: "Vibe coding is building software by describing what you want to an AI model and accepting the generated result without closely reviewing it. It is genuinely transformative for prototypes, throwaway tools and exploration. The risk appears when vibe-coded work reaches production, because nobody on the team understands the code well enough to debug, secure or change it."
category: "AI"
metaTitle: "What Is Vibe Coding? Where It Works and Where It Fails"
metaDescription: "Vibe coding explained — where AI-generated code without review is genuinely useful, the specific failures when it reaches production, and how teams draw a workable line."
keywords:
  - "vibe coding"
  - "AI generated code"
  - "AI coding risks"
  - "prototyping with AI"
accentColor: "#2563EB"
relatedCaseStudyIds:
  - "cs-vibe-2026-442"
  - "cs-cursor-ws-1102"
  - "cs-autonomy-26"
updatedAt: "2026-09-08"
faqs:
  - question: "Is vibe coding always a bad practice?"
    answer: "No. For prototypes, internal scripts, one-off analyses and exploring an unfamiliar library, it is a large and genuine productivity gain. The problem is not the technique — it is the absence of a boundary between what is disposable and what is production."
  - question: "What is the most common failure?"
    answer: "Code that works on the demo path and fails on everything else — unhandled errors, missing validation, no auth check on a secondary route. The generated code satisfies the description it was given, and the description rarely includes the failure cases."
  - question: "How should a team set boundaries?"
    answer: "Decide which parts of the system require understood code and enforce review there — auth, payments, data handling, anything touching user data or money. Elsewhere, let speed win. The line should be written down, because in the absence of one every prototype eventually ships."
---

## What it means

The term describes generating code from natural-language description and accepting it largely on trust, judging by whether it appears to work rather than by reading it. Modern coding assistants make this fast enough that a working application can exist before anyone has read a line of it.

For a category of work this is straightforwardly good. Prototypes, internal tools, data scripts, spikes into an unfamiliar API — all are throwaway, and time spent deeply understanding throwaway code is wasted.

## Where it breaks

**Nobody can debug it.** When a vibe-coded system fails in a way the model cannot fix from the error message, there is no fallback. The team's understanding of the system is the model's, and it does not persist between sessions.

**The failure cases were never specified.** Generated code satisfies the description it was given. Descriptions almost never enumerate malformed input, concurrent writes, partial failures, or the second code path that also needs the permission check. The result works on the happy path and is silently fragile everywhere else.

**Security defaults are not defaults.** Auth checks on one route and not another, secrets in the repository, input concatenated into queries, permissive CORS. Not because models are careless, but because the prompt asked for a working feature and got exactly that.

**Change becomes frightening.** The compounding cost. A codebase nobody understands is one nobody can confidently modify, so changes get made by asking the model again, and the system accumulates layers nobody has read.

The 2026 wave of vibe-coded launches made this shape familiar: fast to build, fine at launch, and progressively harder to operate as reality diverged from the demo.

## The line most teams settle on

**Understood code required:** authentication and authorisation, payments, anything handling personal data, data migrations, anything a user's money or privacy depends on.

**Speed wins:** prototypes, internal tooling, analysis scripts, UI experiments, throwaway integrations.

The important part is writing the line down. Without one, prototypes ship — not through a decision, but because the prototype worked and the deadline arrived, which is how almost every one of these gets into production.

## Using it well

Read the generated code for anything that will persist. Ask the model to explain its own choices, and treat an unconvincing explanation as a signal. Write tests you understand even when the implementation was generated — the tests are where your understanding lives. And keep the boundary visible in the repository, so that promoting something across it is a deliberate act rather than an accident of scheduling.
