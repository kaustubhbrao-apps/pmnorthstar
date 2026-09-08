---
slug: "vanity-metrics"
question: "What are vanity metrics?"
shortAnswer: "A vanity metric is a number that reliably goes up, looks impressive, and changes no decision. Total registered users, cumulative downloads and pageviews are the classic examples — they only ever increase, so they can never tell you something is wrong. The test is simple: if a metric moving could not change what you do next week, it is vanity."
category: "Metrics"
metaTitle: "Vanity Metrics: What They Are and How to Spot Them"
metaDescription: "Vanity metrics explained — the cumulative-number trap, the one-question test for spotting them, and the actionable metric to use in place of each common offender."
keywords:
  - "vanity metrics"
  - "what are vanity metrics"
  - "actionable metrics"
  - "product analytics"
accentColor: "#EA580C"
relatedCaseStudyIds:
  - "cs-19"
  - "cs-40"
  - "cs-84"
updatedAt: "2026-09-08"
faqs:
  - question: "Are pageviews always a vanity metric?"
    answer: "For a product, usually. For a media business selling advertising against impressions, pageviews are the revenue driver and entirely legitimate. The metric is not intrinsically vain — it becomes vanity when it is disconnected from the decision it is being used to justify."
  - question: "Why are cumulative totals so misleading?"
    answer: "Because they can only go up. A cumulative signup count rises just as smoothly during a month when every single new user churned as during your best month ever. Any metric that cannot fall cannot warn you."
  - question: "What is the fastest way to test whether a metric is vanity?"
    answer: "Ask what you would do differently if it doubled, and what you would do differently if it halved. If both answers are nothing, stop reporting it."
---

## The defining property

Vanity metrics are not simply metrics that are wrong. They are metrics that are structurally incapable of delivering bad news.

Cumulative totals are the purest form. Total downloads since launch, total accounts created, total documents ever uploaded — each rises monotonically regardless of whether the product is thriving or dying. A team watching one of these has built a dashboard that cannot alarm them.

The second form is the impressive-but-disconnected number: raw traffic for a product with no conversion path, social followers for a business with no acquisition from social, press mentions. Real numbers, genuinely large, attached to nothing.

## The replacement, metric by metric

| Vanity | Actionable replacement |
|---|---|
| Total registered users | Weekly active users, by cohort |
| Cumulative downloads | Activation rate — share reaching first value |
| Pageviews | Conversion rate on the path that matters |
| Total revenue to date | Net revenue retention |
| Social followers | Referral traffic that converts |
| Number of features shipped | Share of users touching each feature |

The pattern: replace a total with a rate, and an aggregate with a cohort.

## Why smart teams keep them anyway

Not stupidity — incentives. Vanity metrics are excellent for fundraising, recruiting and press, all of which are real needs. The failure is not reporting a big cumulative number externally; it is letting that number back inside and steering by it.

Clubhouse is the clearest case. Downloads, waitlist size and invite scarcity were spectacular and widely reported, and none of them measured whether people came back after the novelty passed. The metrics that would have shown the problem — cohort retention, session frequency — were available the whole time and told a different story than the one everyone was watching.

MySpace and Evernote both stayed comfortable on totals while the underlying engagement thinned. Totals were still setting records on the way down.

## The one-line test

For every number on your dashboard, ask: **if this doubled, what would we do? If it halved, what would we do?**

Two blanks mean the metric is decoration. Delete it — not because it is false, but because every metric on a dashboard costs attention, and attention spent on a number that cannot change your behaviour is attention not spent on one that can.
