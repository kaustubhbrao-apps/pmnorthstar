---
slug: "what-is-moscow-prioritization"
question: "What is MoSCoW prioritisation?"
shortAnswer: "MoSCoW sorts requirements into Must have, Should have, Could have and Won't have. It's a scoping tool for a fixed deadline, not a roadmap tool — its job is to establish what can be dropped when time runs short, which is why the Won't-have list is the most valuable part."
category: "Prioritisation"
metaTitle: "What Is MoSCoW Prioritisation? The Four Categories Explained"
metaDescription: "Must, Should, Could, Won't. How MoSCoW works, why it suits fixed deadlines rather than roadmaps, and the failure mode where everything becomes a Must have."
keywords:
  - "MoSCoW prioritisation"
  - "MoSCoW method"
  - "must should could wont"
  - "requirements prioritisation"
accentColor: "#26A69A"
relatedCaseStudyIds:
  - "cs-50"
  - "cs-73"
updatedAt: "2026-09-07"
faqs:
  - question: "What does the 'o' in MoSCoW stand for?"
    answer: "Nothing — the lowercase o's are filler to make the acronym pronounceable. The four real categories are Must have, Should have, Could have and Won't have this time."
  - question: "How many requirements should be Must haves?"
    answer: "A common guideline is no more than 60% of total effort. Beyond that the categorisation has stopped discriminating, and you've relabelled the backlog rather than prioritised it."
  - question: "Is MoSCoW better than story points or RICE?"
    answer: "They answer different questions. MoSCoW asks what's droppable within one fixed release; RICE asks what's most valuable across an open-ended backlog. Teams shipping to a hard date use MoSCoW; teams choosing what to work on next quarter use something else."
---

## The four buckets

**Must have** — the release is not viable without it. The honest test: would you delay the launch rather than ship without this? If not, it isn't a Must.

**Should have** — painful to omit, but the release still works. These are the first things to go when the date holds and the estimate doesn't.

**Could have** — nice, low cost, cut without ceremony.

**Won't have (this time)** — explicitly out of scope, and explicitly *this time*. This is the category that does the actual work, because it converts an unspoken assumption into a written decision that stakeholders have seen.

## Why it belongs to fixed deadlines

MoSCoW comes from timeboxed delivery. The assumption is that the date is immovable and scope is the variable, so the framework's purpose is to agree the order of sacrifice *before* you're under pressure. Deciding what to cut at 11pm two days before a launch is how teams cut the wrong thing.

That also explains why it's a poor roadmap tool. It has no notion of value per effort and no way to compare two Must-haves, so a backlog sorted into MoSCoW is barely sorted at all.

## The failure everyone hits

Everything becomes a Must have. It happens because Should-have reads as "unimportant" to whoever requested it, and nobody wants their feature demoted in a room. Two defences: cap Musts by effort share, and require a named consequence for each — what specifically breaks if this ships without it. Requirements that can't produce a concrete consequence aren't Musts.

Jira's long accumulation of configurability is what a decade of unchecked Must-haves looks like: every one defensible in isolation, and collectively a product that needs a consultant. Linear's constraint is the same lesson run in reverse.
