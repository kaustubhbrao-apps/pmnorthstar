---
slug: "what-is-platform-risk"
question: "What is platform risk?"
shortAnswer: "Platform risk is the exposure a business carries when a critical part of its product, distribution or economics depends on a platform it doesn't control. The platform can change terms, absorb your feature, or cut access — and historically all three happen, usually at the worst moment."
category: "Strategy"
metaTitle: "What Is Platform Risk? How to Recognise and Reduce It"
metaDescription: "When your product depends on a platform you don't own, its roadmap becomes your risk. How to assess exposure, and what happened to companies built on someone else's layer."
keywords:
  - "platform risk"
  - "API dependency risk"
  - "building on someone else's platform"
  - "wrapper startup risk"
accentColor: "#F3123C"
relatedCaseStudyIds:
  - "cs-fm-shipped-26"
  - "cs-44"
updatedAt: "2026-09-07"
faqs:
  - question: "How do you reduce platform risk?"
    answer: "Own the customer relationship and the data, keep an abstraction layer between your product and the platform's API, and build at least one distribution channel that doesn't depend on it. None of these eliminate the risk; they shorten your recovery time."
  - question: "Is building on an LLM API platform risk?"
    answer: "Yes, and a particularly sharp version — the model provider can ship your core feature as a native capability, and often does. The defensible layer tends to be the workflow, the proprietary data and the integrations around the model, not the model call itself."
  - question: "Does platform risk apply to app stores?"
    answer: "Very much so. Store policy changes, fee structures and review decisions can alter unit economics or remove distribution outright, with no negotiation and limited appeal."
---

## Three ways it materialises

**Terms change.** Pricing, rate limits or data access shift, and margins that worked stop working. You have no vote.

**The platform absorbs you.** Your product becomes a feature of theirs. This is the most common outcome for successful add-ons: succeeding visibly on someone else's platform is a demonstration that the capability is worth building natively.

**Access is cut.** Rare, sudden, and terminal for anyone without an alternative channel.

## The AI-era version

Companies built as a thin layer over a foundation model have run into all three at speed. When the model provider ships the capability natively, the wrapper's differentiation evaporates in a single release note — and the customers were never really the wrapper's to keep.

The teams that survived it generally had something the platform didn't: proprietary workflow, industry-specific data, deep integrations into systems the platform had no interest in touching. The model was an input to their product rather than the product.

## The other direction

Myspace's decline is usually told as a design story, but the platform dimension matters: Facebook opened to developers and let others build on top, accumulating an ecosystem with reasons to stay, while Myspace kept the surface closed. Being the platform is the structural answer to platform risk, and it's available to fewer companies than would like it.

## What to do about it

Assume the platform will eventually compete with you, and ask what remains when it does. If the answer is "our brand and our speed", that's thin. If it's "the data we've accumulated and the workflow we own end to end", the platform becomes a supplier rather than a landlord.
