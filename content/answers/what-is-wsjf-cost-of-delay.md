---
slug: "what-is-wsjf-cost-of-delay"
question: "What is cost of delay and how does WSJF use it?"
shortAnswer: "Cost of delay is what it costs you per unit of time to not have something yet — lost revenue, growing risk, a closing window. WSJF, weighted shortest job first, ranks work by dividing cost of delay by job size, so small urgent things beat large ones. Its value is forcing the question most prioritisation avoids: what does waiting actually cost?"
category: "Prioritisation"
metaTitle: "Cost of Delay and WSJF Explained"
metaDescription: "Cost of delay and weighted shortest job first explained — the formula, the three components SAFe uses, why the ratio matters more than the absolute numbers, and where it breaks."
keywords:
  - "cost of delay"
  - "WSJF"
  - "weighted shortest job first"
  - "prioritisation framework"
accentColor: "#26A69A"
relatedCaseStudyIds:
  - "cs-fb-mobile-12"
  - "cs-87"
  - "cs-20"
updatedAt: "2026-09-08"
faqs:
  - question: "What is the WSJF formula?"
    answer: "Cost of delay divided by job size. In SAFe, cost of delay is itself the sum of three estimates — user or business value, time criticality, and risk reduction or opportunity enablement — each scored on a relative scale rather than in currency."
  - question: "How is WSJF different from RICE?"
    answer: "Both are value-over-effort ratios. WSJF's distinguishing move is time criticality as an explicit component, which surfaces deadlines, closing market windows and compounding risk that RICE's reach-impact-confidence has no natural slot for."
  - question: "Do you need real currency figures for cost of delay?"
    answer: "No, and attempting it usually stalls the exercise. Relative scoring on a fixed scale produces the same ranking, because only the ratios between items affect the order. Reserve real numbers for the few decisions large enough to justify the analysis."
---

## The idea behind cost of delay

Most prioritisation asks what something is worth. Cost of delay asks a sharper question: what does each week of not having it cost?

The distinction matters because value and urgency are independent. A feature worth a great deal that will be worth the same amount next year has a high value and a low cost of delay. A modest feature that becomes worthless after a competitor ships theirs has a low value and an enormous cost of delay. Ranking by value alone systematically defers the second kind until it is too late.

## The three components

SAFe decomposes cost of delay into three relative scores:

**User or business value** — the direct benefit of having it.

**Time criticality** — how sharply that benefit decays with time. A regulatory deadline, a seasonal peak, a competitor's roadmap, a partnership window. This is the component that does the work.

**Risk reduction or opportunity enablement** — value that is not the feature itself but what it unlocks or de-risks. Platform work lives here, which is the framework's answer to why infrastructure never wins a pure value ranking.

Add the three, divide by job size, rank descending.

## Why dividing by size changes the order so much

Two items with identical cost of delay are not equally urgent if one takes two weeks and the other takes two quarters. Doing the short one first means the long one starts only slightly later while the short one's cost of delay stops accruing immediately.

This is why the framework is called weighted **shortest job first**. Given similar urgency, sequence by size — the aggregate delay across the whole queue is lower, and that is a mathematical result, not a preference.

## What it catches that other frameworks miss

Windows that close. Facebook's shift from HTML5 to native mobile is the canonical example: the value of a competent mobile app was not falling, but the cost of each additional quarter without one was rising steeply as usage moved to phones. A value-ranked backlog would have kept the work respectable and non-urgent. Cost of delay makes the escalation visible.

Nokia and Kodak are the same shape viewed from the other end. In both, the strategic response was understood and unhurried, and the cost of delay was accruing the entire time at a rate nobody put a number on.

## Where it breaks

Time criticality is the easiest score in any framework to inflate — every stakeholder's item is urgent. Without a shared, written definition of what each point on the scale means, WSJF becomes a laundering mechanism for whoever argues hardest.

It is also poorly suited to genuinely exploratory work, where both the value and the size are unknown. Scoring a research spike produces a confident-looking number derived from nothing. Give discovery a protected allocation instead of forcing it through the same ranking.
