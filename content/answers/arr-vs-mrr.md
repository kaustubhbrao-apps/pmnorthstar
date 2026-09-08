---
slug: "arr-vs-mrr"
question: "What is the difference between ARR and MRR?"
shortAnswer: "MRR is monthly recurring revenue — the predictable subscription revenue you bill in a month. ARR is annual recurring revenue, usually just MRR multiplied by twelve. The distinction that matters is not the timeframe but the word recurring: one-off fees, services and usage overages belong in neither, and including them is the most common way these numbers get inflated."
category: "Metrics"
metaTitle: "ARR vs MRR: The Difference and What Belongs in Each"
metaDescription: "ARR and MRR explained — how each is calculated, why ARR is normally just MRR times twelve, and the revenue types that should never be counted in either."
keywords:
  - "ARR vs MRR"
  - "annual recurring revenue"
  - "monthly recurring revenue"
  - "SaaS metrics"
accentColor: "#EA580C"
relatedCaseStudyIds:
  - "cs-68"
  - "cs-143"
  - "cs-144"
updatedAt: "2026-09-08"
faqs:
  - question: "Is ARR just MRR times 12?"
    answer: "In practice, yes, and that is the standard definition. It is a run rate — what you would earn over the next year if nothing changed — not a forecast and not last year's revenue. Companies that instead sum trailing twelve-month billings are reporting something different and should say so."
  - question: "Should usage-based revenue count as ARR?"
    answer: "Only the committed portion. A contract with a guaranteed minimum has a recurring floor that belongs in ARR; consumption above it does not, because it is not contracted to repeat. Counting a peak month of overage as recurring is how a business surprises itself a quarter later."
  - question: "What is net revenue retention and why is it quoted alongside ARR?"
    answer: "Net revenue retention measures what happened to a cohort's recurring revenue over a year including expansion, contraction and churn. It is quoted alongside ARR because ARR alone cannot distinguish a company growing through new logos from one growing inside its existing base — and above 100% NRR means the base grows even with no new customers."
---

## The mechanical difference

MRR is the sum of recurring subscription revenue normalised to a month. An annual contract of 12,000 contributes 1,000 of MRR, not 12,000 in the month it was signed. ARR is that MRR times twelve.

Because ARR is derived, the two never disagree. Choosing between them is a matter of contract length: monthly-billing businesses talk in MRR because that is the rhythm of the business, and businesses selling annual enterprise contracts talk in ARR because a single deal would make MRR lurch.

## What does not belong in either

This is the whole game. Recurring means contractually repeating without a new sales decision.

- **One-time setup and implementation fees** are not recurring, however reliably new customers pay them.
- **Professional services** are not recurring. A services line can be a healthy business — it is just not the thing a revenue multiple is being applied to.
- **Hardware** sold alongside a subscription is a one-time sale.
- **Usage overages above a committed minimum** are not recurring until they are contracted.

Every one of these gets quietly folded in when a number needs to look larger, and each makes the resulting figure less predictive of next year.

## Movement is the informative part

A single ARR figure tells you size. The decomposition tells you health, and it has four components: **new** from new customers, **expansion** from existing customers buying more, **contraction** from downgrades, and **churn** from departures.

Two companies at 10M ARR can be entirely different businesses. One added 4M new and lost 1M — growing but leaking. The other added 1M new and 2M expansion with almost no churn, which is the profile of a product that gets more valuable the longer it is used. Rippling's compound-startup strategy is essentially a bet on the second shape: sell one product, expand into the rest of the payroll and IT stack inside the same customer.

## Why the run rate misleads at the edges

ARR assumes today's book repeats. That assumption is weakest exactly when it matters most — right after a large deal lands, right before a large renewal, and in any business with concentrated customers. A company at 10M ARR where one customer is 3M of it does not have 10M of predictable revenue; it has a renewal conversation that decides a third of the company.

Zoho's decades of profitable growth without outside capital came from treating recurring revenue as something to be earned every year rather than a number to be maximised for a fundraise.
