---
slug: "what-is-llm-as-a-judge"
question: "What is LLM-as-a-judge?"
shortAnswer: "LLM-as-a-judge is using one language model to grade the outputs of another — scoring quality, correctness, or tone against a rubric — so you can evaluate at a scale humans can't. It's fast and cheap, which is its appeal, but the judge has its own biases, so it supplements human evaluation rather than replacing it."
category: "AI"
metaTitle: "What Is LLM-as-a-Judge? How AI Evaluates AI"
metaDescription: "LLM-as-a-judge uses one model to grade another's outputs at scale. How it works, where it's reliable, the biases to watch, and why it doesn't replace human evals."
keywords:
  - "llm as a judge"
  - "llm as judge evals"
  - "ai evaluating ai"
  - "model based evaluation"
accentColor: "#DB2777"
relatedCaseStudyIds:
  - "cs-claude-5-26"
  - "cs-anthropic-value-ecosystem-2026"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
faqs:
  - question: "Why use an LLM to judge instead of a human?"
    answer: "Scale and speed. Humans can grade dozens of outputs an hour; an LLM judge grades thousands for pennies, which lets you evaluate every change against a large test set instead of spot-checking. You trade some accuracy for enough throughput to actually run evals continuously — the difference between testing an AI product and hoping it works."
  - question: "What biases does an LLM judge have?"
    answer: "Several well-documented ones: it tends to prefer longer answers, answers in its own style, and (in head-to-head grading) whichever option is presented first (position bias). It can also favor outputs from the same model family. You counter these by randomizing order, using a clear rubric, and periodically checking the judge's scores against human labels."
  - question: "Can the judge be the same model being tested?"
    answer: "It can, but it's risky — a model grading its own family tends to score it generously (self-preference bias). Using a different, ideally stronger, model as the judge reduces this, as does anchoring the judge to a rubric and reference answers rather than letting it score on vibes. Either way, calibrate against human judgment before trusting it."
---

## The problem it solves

Once you ship an AI feature, you have to answer a question constantly: did that change make the output better or worse? Human grading is the gold standard but doesn't scale — people can review a handful of outputs, not the thousands you'd need to test every prompt tweak against a real distribution of inputs.

**LLM-as-a-judge** closes that gap. You give a model the output to assess, a rubric, and often a reference answer, and it returns a score or a verdict. Now you can run a large evaluation set on every change, cheaply and in minutes. It's the engine that makes continuous evaluation practical — the backbone of the [evals discipline](/answers/what-are-llm-evals) that separates teams who measure their AI from teams who guess.

## Where it's reliable — and where it isn't

LLM judges are strong at graded, rubric-shaped questions: is this answer relevant, is it grounded in the source, is the tone appropriate, does it follow the format. They're weaker where correctness requires ground truth the judge doesn't have, or genuine domain expertise.

And the judge brings its own **biases** to the bench:
- **Length bias** — it tends to reward longer, more elaborate answers.
- **Position bias** — in A/B grading, it over-picks whichever came first.
- **Self-preference** — it favors outputs from its own model family.

You manage these the way you'd manage a biased human rater: a clear rubric, randomized ordering, reference answers, and periodic calibration against real human labels.

## Why it supplements rather than replaces humans

The reliable pattern that scaled products — including enterprise deployments from labs like [Anthropic](/case-study/anthropic-value-ecosystem) and [the frontier launches that live or die on eval quality](/case-study/claude-5-ships-2026) — is a **pyramid**: a small, trusted set of human judgments at the top calibrates a large volume of LLM-judge scores below. The judge gives you coverage; the humans keep it honest.

## The product takeaway

LLM-as-a-judge is what makes evaluating AI at scale affordable, and it's non-negotiable if you want to iterate safely. But treat the judge as an instrument that needs calibration, not an oracle: anchor it to a rubric, watch for its biases, and check it against humans often enough to trust the number.
