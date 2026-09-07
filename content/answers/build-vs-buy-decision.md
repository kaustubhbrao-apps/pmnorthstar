---
slug: "build-vs-buy-decision"
question: "How do you make a build vs buy decision?"
shortAnswer: "Build what differentiates you, buy what doesn't. The test isn't cost — it's whether customers would ever choose you because of this component. Teams get burned by underestimating the permanent maintenance cost of building, and by buying the one thing that was actually their edge."
category: "Strategy"
metaTitle: "Build vs Buy — A Practical Framework for the Decision"
metaDescription: "Build what differentiates, buy what doesn't. How to weigh maintenance cost, switching risk and control, and what Figma's WebGL bet says about building the hard thing."
keywords:
  - "build vs buy"
  - "build or buy decision"
  - "build vs buy software"
  - "vendor vs in-house"
accentColor: "#F3123C"
relatedCaseStudyIds:
  - "cs-figma-web-15"
  - "cs-65"
updatedAt: "2026-09-07"
faqs:
  - question: "What costs do teams forget when they decide to build?"
    answer: "Maintenance, on-call, security patching, compliance, documentation, and the opportunity cost of the engineers who now own it forever. The build estimate usually covers version one only, which is the smallest part of the total cost."
  - question: "What's the risk of buying?"
    answer: "Dependence. Pricing changes, roadmap divergence, acquisitions and shutdowns are all outside your control, and switching cost rises with integration depth. Buying is right for commodities precisely because commodities have alternatives."
  - question: "Is buying and then replacing later a valid strategy?"
    answer: "Often the best one. Buy to reach the market and learn what you actually need, then build once the requirements are known and the component has proven to be differentiating. The failure is never revisiting the decision."
---

## The differentiation test

Ask whether a customer would ever pick you over a competitor because of this piece. Auth, billing, email delivery, error tracking — almost never. Your matching algorithm, your pricing engine, your core editing experience — possibly yes.

Buying a commodity frees engineers for the parts that matter. Building a commodity spends your scarcest resource proving you can rebuild something that already exists.

## When building the hard thing is the strategy

Figma's decision to render a design tool in the browser using WebGL was a build decision on the highest-difficulty setting. No vendor solution existed, and the browser wasn't obviously capable. It took years before the bet looked sane.

It was correct because the component *was* the product. Browser-native collaborative design wasn't a feature of Figma; it was the entire reason Figma could exist against incumbents. Nobody outsources that.

Vercel's business is the mirror image — it exists because deployment infrastructure is something most teams should buy rather than build, and it made buying dramatically easier than the DIY alternative.

## The questions worth actually asking

How long until value, on each path? Buying is usually weeks, building is usually quarters, and the gap is often decisive on its own.

What's the exit cost if you buy and the vendor disappoints you? Shallow integration is cheap to leave; a vendor woven through your data model is not.

And who owns it in two years? Built components need a permanent owner. If you can't name the team that maintains this after the people who built it have moved on, you're accumulating orphaned infrastructure — the most expensive category there is.
