---
slug: "should-you-build-on-a-foundation-model"
question: "Should you build your product on a foundation model API?"
shortAnswer: "Almost always yes for the intelligence layer — training your own model rarely beats an API on cost or quality. The real question is what you own besides the model call, because that's the only part a provider shipping your feature natively can't take from you."
category: "AI"
metaTitle: "Should You Build on a Foundation Model API?"
metaDescription: "Building on an LLM API is usually right; depending on it for differentiation is not. Where defensibility actually comes from, and what happened to thin wrappers."
keywords:
  - "building on LLM API"
  - "foundation model API"
  - "AI wrapper startup"
  - "LLM product defensibility"
accentColor: "#2563EB"
relatedCaseStudyIds:
  - "cs-fm-shipped-26"
  - "cs-autonomy-26"
updatedAt: "2026-09-07"
faqs:
  - question: "Is 'just a wrapper' a fair criticism?"
    answer: "It's fair when the product is a prompt and a text box, because the provider can ship that natively at any time. It's unfair when the model is one component inside a workflow, dataset and set of integrations that took years to build — most valuable software sits on infrastructure it didn't build."
  - question: "Should you use multiple model providers?"
    answer: "An abstraction layer over providers is cheap insurance against pricing changes, deprecations and capability shifts, and it lets you route different tasks to different models. The cost is losing provider-specific features, which is usually a fair trade."
  - question: "When does training your own model make sense?"
    answer: "Rarely, and usually only with proprietary data that general models handle badly, strict latency or cost constraints at high volume, or regulatory requirements about where inference happens. For most products, fine-tuning a strong base model covers the same ground far more cheaply."
---

## The easy half of the decision

Use the API. The capability gap between a frontier model and anything a startup can train is enormous, the cost curve keeps falling, and improvements arrive without you doing anything. Building your own intelligence layer to avoid dependency is a way of spending two years arriving somewhere worse.

## The hard half

Every company building on the same APIs has access to the same capability. So the differentiation question is what you have that they don't, and "we prompt it better" is not a durable answer — prompts are copyable in an afternoon.

The categories that hold up:

**Proprietary data** the model doesn't have and can't get. Your customers' history, your industry's documents, your accumulated corrections.

**Workflow ownership** — being the system where the work actually happens, so the model output lands in context rather than in a chat window the user has to copy from.

**Integrations and permissions** — the unglamorous plumbing into systems of record, which is slow to build and slower to displace.

**Distribution and trust** — particularly in regulated domains where being the approved vendor is worth more than being the cleverest one.

## The lesson from the wrapper wave

When foundation model providers shipped features natively, the companies that evaporated were the ones whose entire product was a thin layer over a prompt. The ones that survived had the model as an input to something larger — the workflow, the data, the integrations were theirs, and swapping the model underneath was a Tuesday.

## The question to answer before you start

Write down what remains if your provider ships your headline feature next month. If the honest answer is "nothing", you don't have a product yet — you have a demonstration, and the clock started when you launched it.
