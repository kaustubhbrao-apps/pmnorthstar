---
slug: "what-are-llm-evals"
question: "What are LLM evals and why do AI products need them?"
shortAnswer: "Evals are a test suite for model behaviour — a fixed set of inputs with expected properties, run automatically so you can tell whether a prompt, model or retrieval change made things better or worse. They exist because LLM outputs are non-deterministic, so the alternative is a team trying a few examples by hand and forming an impression."
category: "AI"
metaTitle: "What Are LLM Evals? A Practical Guide"
metaDescription: "LLM evals explained — why traditional tests do not work on model outputs, the kinds of eval that exist, how to build a first eval set, and the traps in LLM-as-judge."
keywords:
  - "LLM evals"
  - "AI evaluation"
  - "evaluating LLM outputs"
  - "AI product quality"
accentColor: "#2563EB"
relatedCaseStudyIds:
  - "cs-claude-5-26"
  - "cs-fm-shipped-26"
  - "cs-vibe-2026-442"
updatedAt: "2026-09-08"
faqs:
  - question: "Can you use an LLM to grade another LLM?"
    answer: "Yes, and it is now standard practice for anything subjective, but the judge needs validating against human labels before you trust it. Judges have systematic biases — they favour longer answers, prefer their own model family's style, and drift when the rubric is vague."
  - question: "How many examples does an eval set need?"
    answer: "Start with 20 to 50 real cases and grow it every time something goes wrong in production. A small set of genuine failures is far more useful than hundreds of synthetic prompts, because it encodes what actually breaks rather than what you imagined might."
  - question: "What is regression testing for prompts?"
    answer: "Running the eval set before and after any change to prompt, model version, or retrieval, and comparing scores. Without it, prompt engineering is a sequence of confident, unverified edits — and model version upgrades silently change behaviour you had come to rely on."
---

## Why ordinary tests do not work

A conventional test asserts an exact output. Model outputs vary between runs, and two different phrasings can both be correct, so equality assertions either fail constantly or get loosened until they assert nothing.

Evals replace exact matching with property checking. Does the answer contain the right figure. Does it refuse when it should. Is it grounded in the retrieved documents. Is it under the length limit. Does it avoid the failure mode we saw last month.

## The main kinds

**Deterministic checks.** Cheap, fast, unambiguous. Valid JSON, required fields present, no forbidden strings, a specific number appears. Run these first — they catch a surprising share of real failures.

**Reference-based.** Compare against a known good answer, exactly or by similarity. Works when there is a correct answer; useless for open-ended generation.

**LLM-as-judge.** A model scores the output against a written rubric. Necessary for tone, helpfulness, and groundedness. Requires validation — sample the judge's scores against human labels until you trust the correlation, then re-check periodically.

**Human review.** The most accurate and the least scalable. Reserve it for calibrating the automated layers and for the highest-stakes categories.

## Building the first set

Collect real failures. Every time someone reports a bad output, add the input to the eval set with a note on what was wrong. Within a few weeks you have a suite encoding your product's actual weaknesses, which is worth more than any generic benchmark.

Include the boring cases too. Suites made only of adversarial edge cases fail to notice when the model gets worse at the ordinary path most users are on.

## What evals protect you from

**Prompt changes that fix one case and break four.** Extremely common, invisible without a suite, and the reason prompt work feels like whack-a-mole.

**Silent model updates.** A provider ships a new version and behaviour shifts. Without evals you find out from users.

**Retrieval regressions.** Someone changes chunking or the embedding model and groundedness quietly degrades while the answers still read fluently — the hardest failure mode to notice by eye.

The 2026 wave of vibe-coded launches produced a recognisable pattern: products generated quickly, shipped confidently, with no systematic check on whether behaviour held up as they were changed. Evals are the difference between an AI feature you can modify and one you are afraid to touch.

## The practical minimum

A set of real inputs, a mix of deterministic and judged checks, run automatically on every change to prompt, model or retrieval, with results compared to the previous run. Then treat a score drop the way you would treat a failing test — as a blocker, not as a data point to discuss.
