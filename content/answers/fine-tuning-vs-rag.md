---
slug: "fine-tuning-vs-rag"
question: "Should you fine-tune a model or use RAG?"
shortAnswer: "Use RAG when the model needs knowledge it does not have — documents, current data, anything that changes. Fine-tune when it needs a behaviour it will not follow reliably from a prompt — a format, a style, a narrow classification task. Knowledge problems are almost always RAG problems, and most teams reach for fine-tuning to solve one and are disappointed."
category: "AI"
metaTitle: "Fine-Tuning vs RAG: Which One and When"
metaDescription: "Fine-tuning vs retrieval-augmented generation — the knowledge-versus-behaviour distinction, cost and maintenance differences, and when to use both together."
keywords:
  - "fine tuning vs RAG"
  - "when to fine tune"
  - "retrieval augmented generation"
  - "LLM application architecture"
accentColor: "#2563EB"
relatedCaseStudyIds:
  - "cs-fm-shipped-26"
  - "cs-claude-5-26"
  - "cs-mcp-decision-2026"
updatedAt: "2026-09-08"
faqs:
  - question: "Can fine-tuning teach a model new facts?"
    answer: "Poorly and expensively. Fine-tuning adjusts behaviour far more reliably than it installs retrievable knowledge, and facts learned this way cannot be updated without retraining, cannot be cited, and are hard to verify. If the answer depends on a document, retrieve the document."
  - question: "Is RAG always cheaper than fine-tuning?"
    answer: "Cheaper to build and to change, but not always cheaper per request — retrieved context makes prompts longer, and long prompts cost tokens and latency on every call. A high-volume, narrow task can be cheaper fine-tuned onto a smaller model."
  - question: "Should you use both?"
    answer: "Often, and it is the strongest configuration for mature products: fine-tune a smaller model for the format and behaviour you need, then retrieve the facts at request time. Each mechanism handles what it is good at."
---

## The distinction that decides it

**RAG adds knowledge.** At request time you retrieve relevant documents and put them in the context, and the model answers from them. Knowledge is external, updatable and citable.

**Fine-tuning adjusts behaviour.** You train on examples so the model reliably produces a particular shape of output — a format, a tone, a classification, a domain convention.

Almost every question reduces to: is the problem that the model does not know something, or that it does not behave how you want?

## When RAG is right

- The information changes. Policies, prices, inventory, docs.
- The information is private and per-customer.
- You need citations. Users need to see where an answer came from, and a fine-tuned model cannot tell you.
- The corpus is large. Retrieval scales with a vector store; training does not scale with corpus size the same way.
- You need to remove something. Deleting a document removes its influence immediately, which matters for correction and for compliance.

That last point is underrated. A fine-tuned model that learned something wrong requires retraining to unlearn it.

## When fine-tuning is right

- **Format compliance.** You need exact structured output every time and prompting gets you to 95%.
- **A narrow, high-volume classification.** A small fine-tuned model can be far cheaper and faster than a large model with a long prompt.
- **A style or voice** that is tedious to specify and easy to demonstrate.
- **Latency and cost pressure** where a smaller model, tuned, matches a bigger one prompted.
- **Domain convention** — a specialist register that prompting keeps drifting away from.

## Try prompting properly first

A significant share of fine-tuning projects are solving a prompt problem. Before training anything: give clear instructions, provide several examples in context, constrain the output format explicitly, and break the task into steps.

This is not a fallback — it is the cheapest experiment available, it takes hours instead of weeks, and the resulting prompt is a better specification of what you wanted than the fine-tune would have been.

## The maintenance difference

RAG's ongoing cost is retrieval quality: chunking, embeddings, ranking, and keeping the index fresh. It is real work, and it is the usual cause of a RAG system that answers fluently and wrongly.

Fine-tuning's ongoing cost is that the artefact ages. Base models improve, and a fine-tune on last year's base is a decision you have to periodically remake. Products that fine-tuned heavily on early foundation models found the ground shifting under them as the base models absorbed the capability they had trained for.

Start with RAG plus a well-built prompt. Fine-tune when you have a specific, measured behaviour problem that prompting demonstrably cannot fix — and keep evals running either way, because both approaches fail quietly.
