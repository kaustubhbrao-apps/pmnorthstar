---
slug: "what-is-a-reasoning-model"
question: "What is a reasoning model?"
shortAnswer: "A reasoning model is an LLM trained to spend extra computation 'thinking' before it answers — generating intermediate steps — which makes it far better at problems with a verifiable right answer, like math, code, and logic. The trade-off is latency and cost: it's slower and more expensive per answer, so you use it where correctness matters more than speed."
category: "AI"
metaTitle: "What Is a Reasoning Model? Definition and When to Use One"
metaDescription: "Reasoning models trade speed for correctness by thinking in steps before answering. How they differ from standard LLMs, where they help, and when they're overkill."
keywords:
  - "what is a reasoning model"
  - "reasoning model vs llm"
  - "ai reasoning models explained"
  - "test time compute"
accentColor: "#7C3AED"
relatedCaseStudyIds:
  - "cs-claude-5-26"
  - "cs-29"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
faqs:
  - question: "How is a reasoning model different from a normal LLM?"
    answer: "A standard LLM answers in roughly one pass; a reasoning model is trained to generate intermediate reasoning — exploring, checking, and revising — before committing to a final answer, spending more compute at inference time. The architecture is similar; the difference is that it's taught to use extra 'thinking' tokens, which raises accuracy on hard, multi-step problems."
  - question: "When should a PM choose a reasoning model?"
    answer: "When the task has a correct answer that's expensive to get wrong and the user will tolerate a slower response — complex coding, data analysis, math, multi-constraint planning. For latency-sensitive or simple tasks (chat, classification, autocomplete), a reasoning model is overkill: you pay more and wait longer for accuracy the task didn't need."
  - question: "Do reasoning models eliminate hallucination?"
    answer: "No. They reduce errors on problems with checkable logic because the model can catch its own missteps mid-chain, but they can still be confidently wrong, especially on questions of fact rather than reasoning. More thinking helps where the answer can be reasoned toward; it doesn't help where the model simply doesn't know."
---

## What the 'reasoning' actually is

A standard language model produces its answer in close to a single forward pass — it predicts the response more or less directly. A **reasoning model** is trained to do something different: generate a chain of intermediate steps first — breaking the problem down, trying approaches, checking itself — and only then produce the final answer. In practice it spends more computation at the moment you ask (often called **test-time compute**) to buy a better result.

The payoff shows up specifically on problems with a **verifiable structure**: math, code, logic puzzles, multi-constraint planning. On these, letting the model work step by step and catch its own mistakes lifts accuracy substantially over a one-shot answer.

## The trade-off: correctness for speed and cost

Thinking isn't free. A reasoning model generates far more tokens per answer and takes longer to respond, which means higher cost and higher latency. That reframes the choice as an economic one, not a quality one:

- **Use a reasoning model** when a wrong answer is expensive and the user will wait — a coding agent debugging, an analyst running a hard query.
- **Skip it** when the task is simple or latency-sensitive — chat, autocomplete, classification — where you'd pay more and wait longer for accuracy you didn't need.

This is also why vendors ship both kinds. [Anthropic's frontier launches](/case-study/claude-5-ships-2026) and [OpenAI's lineup](/case-study/chatgpt-consumer-launch) offer fast models and reasoning models side by side, because the right tool depends on the job, and routing cheap tasks to an expensive model is a quiet way to burn margin — see [how to price an AI feature](/answers/how-to-price-an-ai-feature).

## The product takeaway

A reasoning model is a dial, not an upgrade. It trades latency and cost for correctness on problems that can be reasoned toward. Point it at the hard, high-stakes, checkable tasks; route everything else to a cheaper, faster model. Matching model to task is where the economics of an AI product are won or lost.
