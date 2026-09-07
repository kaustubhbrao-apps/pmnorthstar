---
slug: "what-is-cohort-analysis"
question: "What is cohort analysis?"
shortAnswer: "Cohort analysis groups users by when they joined and tracks each group separately over time. It exists because aggregate metrics hide direction: total usage can grow while every individual cohort retains worse than the last. Cohorts are how you tell growth from churn masked by acquisition."
category: "Metrics"
metaTitle: "What Is Cohort Analysis? How to Read a Retention Table"
metaDescription: "Cohort analysis groups users by join date so you can see whether the product is actually improving. How to read the table, the three curve shapes, and what aggregate numbers hide."
keywords:
  - "cohort analysis"
  - "retention cohort"
  - "how to read cohort table"
  - "cohort retention curve"
accentColor: "#EA580C"
relatedCaseStudyIds:
  - "cs-72"
  - "cs-9"
updatedAt: "2026-09-07"
faqs:
  - question: "What size does a cohort need to be?"
    answer: "Large enough that a handful of users leaving doesn't swing the percentage. For most products that means at least a few hundred per cohort; below that, widen the window from weekly to monthly rather than reading noise as signal."
  - question: "Should cohorts be grouped by week or month?"
    answer: "By whichever period matches your natural usage cycle and gives you enough volume. Weekly cohorts show the effect of a specific release faster; monthly cohorts are more stable and easier to read for slower products."
  - question: "What is the difference between cohort analysis and segmentation?"
    answer: "Cohorts group by time of joining and track forward; segments group by a shared attribute like plan, channel or geography. They combine well — comparing retention curves across acquisition channels usually reveals that one channel brings users who never retain."
---

## Why the aggregate lies

A product adding 10,000 users a month can show rising total actives for a year while every cohort retains worse than the one before. New arrivals mask the leak. The moment acquisition slows, the whole thing deflates — and by then the underlying decay has been running for four quarters.

Cohorts are the correction. Group users by their join month, then measure each group's retention at month 1, 2, 3 and so on. Now improvement and decay are visible as changes between rows.

## Reading the table

Rows are cohorts, columns are periods since joining. Three things to look for:

**Down a column** — are newer cohorts retaining better than older ones at the same age? This is the only clean read on whether your product work is landing.

**Across a row** — where does each cohort fall off? A cliff between period 0 and 1 is activation. A steady slide is value that doesn't compound.

**The floor** — does the curve flatten? A cohort that stabilises at 30% has 30% of users for whom the product became infrastructure. A curve heading to zero has no such group, which is the signal that no amount of acquisition will build a business.

## Cohorts as a testing discipline

Booking.com's culture of relentless experimentation is really a cohort discipline — every change is judged on what it does to a group of users over time, not on what it does to a dashboard on the day it ships. Duolingo's streak mechanics are similarly evaluated: the question isn't whether streaks are used, it's whether cohorts exposed to them retain measurably longer.

The habit worth building: never report a metric to your team without asking which cohort it came from.
