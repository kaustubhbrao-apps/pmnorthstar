---
slug: "rice-vs-ice-prioritization"
question: "RICE vs ICE — which prioritisation framework should you use?"
shortAnswer: "ICE scores Impact, Confidence and Ease; RICE adds Reach and swaps Ease for Effort, giving a value-per-unit-of-work score. Use ICE when you need to rank a backlog in an afternoon. Use RICE when reach genuinely varies between items and you need to defend the order to someone else."
category: "Prioritisation"
metaTitle: "RICE vs ICE Prioritisation — Which One to Use and When"
metaDescription: "RICE adds Reach and divides by Effort; ICE is faster and rougher. The formulas, the honest limitations of both, and why the score is a conversation starter rather than a decision."
keywords:
  - "RICE vs ICE"
  - "RICE prioritisation framework"
  - "ICE score"
  - "product prioritisation frameworks"
accentColor: "#26A69A"
relatedCaseStudyIds:
  - "cs-73"
  - "cs-50"
updatedAt: "2026-09-07"
faqs:
  - question: "What does RICE stand for?"
    answer: "Reach, Impact, Confidence, Effort. The score is Reach × Impact × Confidence ÷ Effort, which produces a rough estimate of value delivered per unit of work. It was developed at Intercom to compare ideas that were otherwise being argued about on instinct."
  - question: "Is RICE better than ICE?"
    answer: "It's more rigorous, not automatically better. RICE takes longer and adds two more estimates to get wrong. If everything on your list reaches roughly the same number of users, Reach adds no discriminating power and you've bought precision you can't use."
  - question: "What are the weaknesses of scoring frameworks?"
    answer: "They flatten strategy into arithmetic. A framework will rank ten incremental improvements above one bet that changes the company, because the bet scores badly on Confidence and Effort by definition. Nothing that ever mattered scored well on RICE beforehand."
---

## The two formulas

**ICE** = Impact × Confidence × Ease. Three numbers, usually 1-10, multiplied. Fast enough to do live in a room.

**RICE** = (Reach × Impact × Confidence) ÷ Effort. Reach is how many users are affected in a period; Effort is person-months. The division is the real difference — RICE gives you value per unit of work, which is the question a resource-constrained team is actually asking.

## When the extra rigour earns its keep

Reach only helps when it varies. If you're comparing a change to the signup flow that touches every new user against a settings-page fix that touches 2%, RICE separates them and ICE doesn't. If you're comparing five features that all sit in the same core flow, Reach is a constant and you've added a step for nothing.

Effort as a divisor matters most when your list mixes two-day fixes with two-quarter projects. It's what stops a marginally higher-impact epic from perpetually outranking a week of cheap wins.

## The failure mode both share

Scoring converts judgment into arithmetic, and arithmetic looks objective. It isn't — Impact and Confidence are guesses, and the person who wants their project prioritised will guess generously. The number's real value is that it forces those guesses to be stated where colleagues can argue with them.

Linear's product decisions are a useful counterexample to score-driven roadmaps: a deliberately opinionated tool that says no to configurability would score poorly on any framework weighting reach and requests. Jira's history shows the other end — years of accommodating every high-scoring customer request, producing a product nobody would design on purpose.

Use the score to surface disagreement about assumptions. Then make the call as a human being, and be willing to override the sheet when the sheet is wrong.
