---
slug: "what-is-mcp"
question: "What is MCP (Model Context Protocol)?"
shortAnswer: "MCP is an open protocol that standardises how AI applications connect to external tools and data sources. Instead of every assistant building a bespoke integration for every system, a service exposes one MCP server and any compatible client can use it. It is plumbing — the value is the reduction from an N-times-M integration problem to N plus M."
category: "AI"
metaTitle: "What Is MCP? The Model Context Protocol Explained"
metaDescription: "Model Context Protocol explained — the integration problem it solves, what an MCP server exposes, and how to decide whether to build one for your product."
keywords:
  - "MCP"
  - "Model Context Protocol"
  - "AI tool integration"
  - "AI agents"
accentColor: "#2563EB"
relatedCaseStudyIds:
  - "cs-mcp-decision-2026"
  - "cs-claude-5-26"
  - "cs-openai-dev-26"
updatedAt: "2026-09-08"
faqs:
  - question: "How is MCP different from a normal API?"
    answer: "It sits on top of one. An API exposes endpoints for developers to code against; an MCP server describes its capabilities in a form a model can discover and call at runtime, with the descriptions and schemas that make a tool usable without a human writing integration code first."
  - question: "Should my product build an MCP server?"
    answer: "It depends on whether your users would plausibly want an assistant acting on their data in your product. For tools people work inside daily, it is increasingly expected. For products where an assistant has nothing useful to do, it is engineering with no user on the other end."
  - question: "What are the security implications?"
    answer: "Significant, and they are the main reason to move carefully. An MCP server grants a model the ability to act, so scoping permissions narrowly, requiring explicit consent for writes, and logging every call matter more than the feature itself. Read-only first is the sensible default."
---

## The problem it solves

Before a shared protocol, connecting AI applications to external systems was quadratic. Each assistant needed a custom integration with each service — five assistants and twenty services means a hundred integrations, each separately built and maintained.

MCP makes it additive. A service builds one MCP server; an assistant builds one MCP client. Five plus twenty is twenty-five, and each side maintains one thing.

This is the same structural argument as USB, or ODBC before it. Protocols win when the integration matrix gets embarrassing, and by 2026 the matrix was embarrassing.

## What a server exposes

**Tools** — actions the model can invoke. Create an issue, run a query, send a message. Each has a schema and a description written for a model to read.

**Resources** — data the model can read. Files, records, documents, addressed by URI.

**Prompts** — reusable templates the server offers for common tasks.

The descriptions matter more than they look. The model chooses tools by reading them, so a badly described tool is an unused or misused one. Writing them is a product task rather than an engineering one, and it is regularly delegated to whoever wrote the endpoint.

## Deciding whether to build one

Ask whether an assistant acting on your data does something a user actually wants. For a project tracker, a CRM, a data warehouse, a design tool — plainly yes, and increasingly expected. For a product with no meaningful actions to take, an MCP server is engineering effort meeting no user.

The second question is what you would expose. A thin server wrapping three read-only endpoints is a weekend of work and genuinely useful. A comprehensive one exposing every mutation you support is a large surface area with real security consequences.

Start read-only. Add writes when you have watched how the reads get used.

## The security part is not optional

An MCP server hands a model the ability to act on a user's behalf. The failure modes are the ones you would expect: over-broad permissions, writes performed without the user understanding what was about to happen, and prompt injection through retrieved content steering the model into calling a tool it should not.

Practical minimums: scope tokens to the narrowest useful permission, require explicit confirmation for destructive or outbound actions, log every call with enough detail to reconstruct what happened, and treat any content the model reads as untrusted input rather than as instructions.

## How to think about it strategically

MCP is distribution. If assistants become a common way people reach software — and referrer data across many sites now shows assistants sending meaningful traffic — then being connectable is the equivalent of being indexable a decade ago.

That does not make it urgent for everyone. It makes it a question worth answering deliberately rather than by default, and the honest answer for many products is a small read-only server now and a review in six months.
