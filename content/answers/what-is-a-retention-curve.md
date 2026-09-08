---
slug: "what-is-a-retention-curve"
question: "What is a retention curve and what does it mean when it flattens?"
shortAnswer: "A retention curve plots what percentage of a cohort is still active at each period after signup. It always falls at first — the question is whether it flattens into a horizontal line, which means you have a group of users who keep coming back indefinitely. A curve that keeps declining toward zero means you have no retained base, only a leaky funnel."
category: "Metrics"
metaTitle: "Retention Curve Explained: Why Flattening Is the Only Thing That Matters"
metaDescription: "How to read a retention curve, why the flattening point is the real signal of product-market fit, and why a smiling curve is rarer than dashboards suggest."
keywords:
  - "retention curve"
  - "retention curve flattening"
  - "cohort retention"
  - "product market fit metric"
accentColor: "#EA580C"
relatedCaseStudyIds:
  - "cs-9"
  - "cs-13"
  - "cs-40"
updatedAt: "2026-09-08"
faqs:
  - question: "What retention rate is good?"
    answer: "It depends entirely on the natural usage frequency. A daily habit product and a tax filing tool have completely different honest curves, and comparing them is meaningless. The transferable question is not the level but the shape — does the curve flatten, and where."
  - question: "What is a smiling retention curve?"
    answer: "A curve that declines, flattens, then rises — because retained users expand their usage or dormant ones return. It is genuinely rare and usually indicates a strong network effect or an expanding use case. Most healthy products flatten without smiling, and that is fine."
  - question: "Should I measure retention daily, weekly or monthly?"
    answer: "Match the interval to the product's natural frequency. Measuring a weekly-use product daily manufactures a catastrophic-looking curve, and measuring a daily-habit product monthly hides real decay. Pick the period in which an engaged user would genuinely be expected to return."
---

## How to read one

Take everyone who signed up in a given week. Plot the share of them still active one week later, two weeks later, and so on. Repeat per cohort. Every curve starts at 100% and falls, because some portion of any signup group was never going to stay.

The interesting part is what the line does after the initial drop.

**A curve that flattens** means you found a group for whom the product genuinely works. Losses stop at some level and that level is your retained base — every new cohort adds to it. This is what growth compounds on.

**A curve that keeps falling** means you are renting users, not keeping them. Growth is entirely a function of how fast you can pour new signups into the top, and it stops the moment acquisition spend stops.

The distinction is more important than any single retention percentage, and it is the closest thing to a measurable definition of product-market fit.

## Why the flattening level matters less than the flattening

A curve that flattens at 15% is a real business if the market is large enough. A curve that declines to 40% and keeps declining is not, even though it looks better at every point in the first three months. Teams routinely celebrate the second and worry about the first, because the level is easy to see and the asymptote takes patience.

Duolingo's growth is the flattening version taken seriously: the streak, the reminders and the gamification exist to move users into the flat part of the curve, and the company measures daily active learners rather than downloads precisely because downloads say nothing about whether the curve flattens.

## The three ways teams fool themselves

**Blending cohorts.** Averaging all users into one number hides that recent cohorts retain worse than early ones — the standard consequence of broadening acquisition. Always look at cohorts separately.

**Choosing a generous definition of active.** If opening an email counts as active, every curve flattens. Define active as the action that delivers the product's value, then live with the uglier chart.

**Reading a spike as a shape.** A surge of signups from one campaign or one news cycle creates a cohort that behaves nothing like the rest. Evernote's long decline was visible in cohort behaviour well before it was visible in totals, because the totals kept being topped up.

## What to do about a curve that will not flatten

Look at where users fall off, not at the aggregate. Almost always, retention problems are activation problems in disguise — the users who leave in week one never reached the moment the product becomes useful. Twitter's suggested-users fix was exactly this: new accounts that followed nobody had nothing to come back to, so the fix was at the start of the curve, not the end.
