---
id: cs-139
slug: linear-opinionated-software
company: Linear
title: "Linear: The Rise of Opinionated Software"
category: Product
description: "How Linear took on Atlassian's Jira by building the exact opposite product: an extremely opinionated, blazingly fast issue tracker that refused to let users configure it into a bloated mess."
outcome: "Valued at $400M with a cult-like developer following, proving that speed and UX can disrupt incumbent giants."
year: 2019
tags:
  - Product
  - B2B
  - SaaS
  - UX
  - Productivity
logo: "⚡"
faqs:
  - question: "Why do developers love Linear over Jira?"
    answer: "Linear is unashamedly opinionated. Jira allows project managers to create infinite custom workflows and mandatory fields, which slows developers down. Linear restricts configurability to ensure the software remains blazingly fast and focused entirely on the individual contributor."
---

## The Incumbent of Infinite Configurability

By 2019, Atlassian's Jira was the undisputed king of issue tracking. It was used by almost every major tech company on Earth. 

But it was also universally despised by the developers who actually had to use it every day. 

Jira’s success was built on extreme configurability. Project managers could create infinite custom issue types, mandatory fields, automated transitions, and labyrinthine workflows. It allowed large enterprises to perfectly map their complex corporate bureaucracy into the software.

The result, however, was a bloated, sluggish application. Clicking a button in Jira could take several seconds to load. For a software engineer whose brain operates at the speed of thought, this latency was excruciating. Jira had become a project manager's dream, but an individual contributor's nightmare.

## Linear's Core Thesis: Opinionated by Default

Linear was founded by three ex-Uber and Coinbase engineers (Karri Saarinen, Tuomas Artman, and Jori Lallo) who were tired of fighting their tools. They built an issue tracker around a single, radical philosophy: **Software should be highly opinionated.**

Instead of letting users configure the product into a tangled mess, Linear enforced a specific way of working. 

They restricted custom fields. They restricted complex workflow branches. They decided how sprints (which they called "Cycles") should work. If a company's internal process didn't match Linear's process, the company had to change its process, not the software.

This opinionated nature allowed Linear to focus entirely on performance and user experience.

## The Engineering Feat: Sub-100ms Speed

Linear wasn't just built to be pretty; it was built to be blazingly fast. 

They engineered a sync engine that loaded the entire workspace data into the user's local browser cache (IndexedDB). When a user clicked an issue, it didn't wait for a server request; it loaded instantly from the local cache, syncing in the background via WebSockets.

The app achieved sub-100 millisecond response times. Every action could be executed via keyboard shortcuts, without ever touching the mouse. It felt less like a web application and more like a native IDE or a video game. 

## The Bottom-Up GTM

Linear didn't sell to project managers or CIOs. They sold directly to the highest-leverage, most discerning users in any tech company: the engineers. 

Because the product was so fast and beautifully designed, engineers organically evangelized it. They refused to use Jira for new projects, opting instead to spin up a free Linear workspace. Once the engineering team adopted it, the product managers and designers were forced to follow. 

Linear capitalized on the "consumerization of IT" trend, proving that enterprise software doesn't have to be ugly and painful.

## Deep-Dive Takeaways for Builders

1.  **Restrict the User to Protect the Product:** Giving users ultimate configurability often leads them to create a bloated, terrible experience, which they then blame on the software. Being opinionated forces a high baseline of quality.
2.  **Speed is a Feature, Not a Metric:** Sub-100ms latency isn't just an engineering flex; it's a profound UX differentiator. When software moves as fast as the user thinks, it creates psychological flow and fierce brand loyalty.
3.  **Target the End User, Not the Buyer:** Linear bypassed the economic buyers (CIOs/PMs) who loved Jira's reporting, and targeted the end-users (engineers) who suffered its latency. Bottom-up adoption eventually overwhelms top-down mandates.
