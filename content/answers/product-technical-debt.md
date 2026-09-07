---
slug: "product-technical-debt"
question: "How should product managers think about technical debt?"
shortAnswer: "Technical debt is deliberate or accidental shortcutting that makes future changes slower. PMs should treat it as a tax on delivery speed rather than an engineering hobby — the question is never 'should we pay it down' but 'which debt is charging us the most interest right now'."
category: "Prioritisation"
metaTitle: "Technical Debt for Product Managers — How to Prioritise It"
metaDescription: "Technical debt is a tax on future delivery. How PMs should evaluate it, why blanket refactoring quarters fail, and what Facebook's HTML5-to-native pivot cost."
keywords:
  - "technical debt product manager"
  - "prioritising technical debt"
  - "tech debt product roadmap"
  - "refactoring vs features"
accentColor: "#26A69A"
relatedCaseStudyIds:
  - "cs-fb-mobile-12"
  - "cs-50"
updatedAt: "2026-09-07"
faqs:
  - question: "What percentage of capacity should go to technical debt?"
    answer: "Common practice is 15-25% ongoing, but a fixed percentage is a substitute for judgment. What matters is whether the debt is currently slowing delivery of things you care about; if lead times are climbing, the number is too low regardless of what the policy says."
  - question: "How do you convince leadership to fund debt work?"
    answer: "Translate it into delivery terms. 'This module takes three weeks for what should be three days, and four of the next quarter's items touch it' is a business case. 'The code is bad' is not."
  - question: "Is all technical debt bad?"
    answer: "No. Deliberate debt taken to reach a market window can be an excellent trade, in the same way business debt is. The failure is taking it without recording it, so nobody remembers the shortcut existed until it breaks something unrelated."
---

## The metaphor is load-bearing

Debt has principal and interest. The principal is the shortcut; the interest is every future change that costs more because of it. Debt nobody touches charges no interest and can be safely ignored forever — which is why a blanket "let's clean up the codebase" quarter is usually a bad trade. It pays down principal on loans that weren't charging anything.

The right question is narrower: where is the interest actually being paid? That's identifiable — the modules where estimates are consistently wrong, where bugs cluster, where engineers negotiate about who has to go in.

## Facebook's version of the bill

Facebook's mobile app was built on HTML5 to ship once across platforms — a completely rational trade at the time. The interest came due when mobile became the entire business and the performance ceiling of that choice became an existential constraint. The rewrite to native wasn't a refactor; it was a company-level bet made under duress.

The lesson isn't that the original choice was wrong. It's that the interest rate on a platform decision rises with the platform's importance, and nobody re-evaluated the loan as mobile went from side channel to main channel.

## What a PM can actually do

Keep the debt on the same list as the features. Separate lists guarantee the debt list loses, because it's judged on different criteria by people with less power in the room.

Ask engineers for the specific delivery consequence rather than a severity rating. And when you deliberately take on debt to hit a date — which is often correct — write down what you took and what would trigger repaying it. Most debt becomes dangerous through forgetting, not through the original decision.
