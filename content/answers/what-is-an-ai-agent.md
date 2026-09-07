---
slug: "what-is-an-ai-agent"
question: "What is an AI agent?"
shortAnswer: "An AI agent is a system that pursues a goal over multiple steps, choosing its own actions and using tools, rather than answering a single prompt. The distinguishing feature is autonomy over the sequence — the model decides what to do next, which is also where most of the product risk lives."
category: "AI"
metaTitle: "What Is an AI Agent? Definition, Capabilities and Risk"
metaDescription: "An agent chooses its own next step toward a goal. How agents differ from chatbots and workflows, where autonomy pays off, and why premature autonomy is expensive."
keywords:
  - "what is an AI agent"
  - "AI agents explained"
  - "agentic AI"
  - "autonomous agents"
accentColor: "#2563EB"
relatedCaseStudyIds:
  - "cs-autonomy-26"
  - "cs-claude-5-26"
updatedAt: "2026-09-07"
faqs:
  - question: "What's the difference between an agent and a chatbot?"
    answer: "A chatbot responds turn by turn to what a person asks. An agent is given an objective and works toward it across multiple steps, deciding which actions to take and when it's finished — the human sets the goal rather than each instruction."
  - question: "What is the difference between an agent and a workflow?"
    answer: "A workflow has a predetermined sequence of steps, some of which may call a model. An agent determines the sequence itself at runtime. Workflows are more predictable and easier to debug; agents handle situations you couldn't enumerate in advance."
  - question: "Where do agents fail most often?"
    answer: "In compounding errors across long chains, and in taking irreversible actions on a wrong premise. Reliability degrades with the number of steps, so the practical design question is usually how to shorten the chain or add checkpoints, not how to make each step smarter."
---

## The definitional line

Three things distinguish an agent: a **goal** rather than an instruction, **tool use** to act on the world rather than only produce text, and **autonomy over sequencing** — the model chooses the next step based on what happened in the last one.

That third property is the whole thing. It's what makes agents able to handle situations nobody scripted, and it's what makes their failures hard to predict.

## Where autonomy earns its cost

Agents are worth it when the space of situations is too large to enumerate. Debugging an unfamiliar codebase, researching across sources whose structure you don't know in advance, handling support requests whose resolution path varies — these are genuinely hard to express as workflows.

They're a poor trade when the sequence is known. If your process has six steps that never change, an agent adds latency, cost and non-determinism to something a workflow does reliably.

## The cost of premature autonomy

The recurring failure pattern in early agent deployments is granting autonomy before reliability justifies it. Each step in a chain has an error rate, and those errors compound — a sequence of ten steps at 95% reliability succeeds around 60% of the time. Add the ability to take irreversible actions and the tail risk becomes the product's defining characteristic.

The teams that shipped successfully generally did the unglamorous thing: constrained the action space, put a human at the points of no return, and expanded autonomy as evidence accumulated. That's slower than a demo and considerably cheaper than an incident.

## The product question underneath

Not "can the model do this" but "what happens when it does it wrong". If the answer is a wasted minute, ship it. If the answer is a deleted database or a sent email, the design problem is containment, not capability.
