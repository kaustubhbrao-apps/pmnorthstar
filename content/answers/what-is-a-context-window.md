---
slug: "what-is-a-context-window"
question: "What is a context window?"
shortAnswer: "The context window is the maximum amount of text — measured in tokens — a model can consider at once, covering the system prompt, conversation history, retrieved documents and the response. Larger windows are not automatically better: attention degrades across very long contexts, cost rises with every token, and filling a window is rarely a substitute for retrieving well."
category: "AI"
metaTitle: "What Is a Context Window? Tokens and Limits"
metaDescription: "Context windows explained — what counts toward the limit, why a bigger window is not always better, the lost-in-the-middle problem, and how it shapes AI product design."
keywords:
  - "context window"
  - "what is a context window"
  - "LLM tokens"
  - "long context"
accentColor: "#2563EB"
relatedCaseStudyIds:
  - "cs-claude-5-26"
  - "cs-openai-dev-26"
  - "cs-mcp-decision-2026"
updatedAt: "2026-09-08"
faqs:
  - question: "What is a token?"
    answer: "A chunk of text the model processes as a unit — roughly three quarters of a word in English, though it varies by language and is much less efficient for scripts that are underrepresented in training data. Code and unusual formatting also tokenise less efficiently than plain prose."
  - question: "Does a bigger context window remove the need for RAG?"
    answer: "No. Even with a very large window, stuffing an entire corpus in costs tokens on every request, adds latency, and buries the relevant passage among irrelevant ones. Retrieval is about giving the model the right context, not the maximum context."
  - question: "What is the lost-in-the-middle problem?"
    answer: "Models attend most reliably to the beginning and end of a long context, and information in the middle is more likely to be overlooked. It means placement matters — put the most important instructions and documents at the edges, not buried in the centre."
---

## What counts toward the limit

Everything in the request, plus the response:

- The system prompt.
- Conversation history you replay each turn.
- Retrieved documents.
- Tool definitions and tool results.
- The output the model generates.

That last one catches people out. A window is shared between input and output, so a request that nearly fills it leaves no room for an answer.

## Why bigger is not simply better

**Cost scales with tokens.** Long context is charged on every request. A system that dumps 100,000 tokens of documents into each call has an expensive per-request floor whether or not the extra material was needed.

**Latency scales too.** Time to first token grows with input length, and in an interactive product that is felt directly.

**Attention is uneven.** Recall is strongest at the start and end of a long context and weakest in the middle. A crucial instruction placed in the centre of a very long prompt is genuinely more likely to be missed.

**More context can mean worse answers.** Irrelevant material is a distraction, not neutral filler. Ten relevant paragraphs frequently beat two hundred mixed ones.

## What this means for product design

**Retrieve, do not stuff.** The job is finding the right context, not the most. Retrieval quality determines answer quality far more than window size does.

**Manage conversation history deliberately.** Replaying the full transcript every turn grows cost linearly and eventually truncates. Summarise older turns, or keep a structured state and replay only what matters.

**Place important things at the edges.** Instructions at the top, the most relevant retrieved document last, the question at the end.

**Budget the window explicitly.** Decide how many tokens go to system prompt, history, retrieval and response, and enforce it. Systems without a budget fail unpredictably at the worst moment, when a user pastes something large.

## The trend, and what it does not change

Windows have grown by orders of magnitude, and each jump genuinely enables things that were awkward before — whole codebases, long documents, extended agent runs. Anthropic's and OpenAI's recent assistant platforms both lean on long context to hold multi-step work together.

What has not changed is that context is a resource with a price, and that models reason better over well-selected material than over everything you have. Treat the window as a budget to spend carefully, not a container to fill.
