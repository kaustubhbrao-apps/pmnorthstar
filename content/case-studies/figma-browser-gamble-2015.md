---
id: cs-figma-web-15
slug: figma-browser-gamble-2015
company: Figma
title: "Betting the Company on WebGL: Figma's Browser Gamble"
category: Strategy
description: When Sketch dominated UI design via native Mac apps, Figma bet everything that complex design tools could run in the browser. It took years to build but changed collaboration forever.
outcome: Figma became the standard for product design, survived the collapse of Adobe's ~$20B acquisition, and later went public — vindicating the browser bet entirely.
year: 2015
tags: ["Engineering", "Growth", "Design"]
logo: "🚀"
faqs:
  - question: Why was Figma's browser bet so risky?
    answer: In 2015, browsers were considered too slow to handle complex, memory-intensive vector graphics. Native apps like Sketch were the industry standard. Figma had to pioneer new applications of WebGL and WebAssembly to achieve native-like performance.
  - question: How did multiplayer collaboration change design?
    answer: By operating in the browser, Figma allowed multiple designers to work on the same file simultaneously, eliminating version control nightmares ("v_final_final.sketch") and turning design from a solitary task into a collaborative, communicative process.
  - question: What happened with the Adobe acquisition?
    answer: Adobe agreed to acquire Figma for roughly $20 billion in 2022, but the deal was abandoned in late 2023 under pressure from European and UK regulators. Figma remained independent and later went public — the aborted deal served as a striking validation of how valuable the browser-first bet had become.
publishedAt: '2026-08-16T15:00:00+00:00'
---

**Figma's browser bet is the clearest proof that in software, frictionless collaboration eventually beats raw local performance — even in a category where performance was thought to be non-negotiable. In 2015 professional design meant native Mac apps, and Sketch had just dethroned Photoshop for UI work. Figma wagered its existence on the then-absurd idea that a serious vector tool could run in a web browser. The multi-year engineering slog that followed produced something the incumbents structurally could not copy: real-time multiplayer design. The lesson is that the right architecture can turn a feature deficit into irrelevance, because it unlocks a capability no amount of feature parity can match.**

The gamble looked like a bet on technology. It was really a bet on who gets to be in the room when design happens.

## The entrenched paradigm: design as a solitary deliverable

In 2015, the consensus was absolute: real design tools needed native desktop power. Sketch was fast, native, and Mac-only, and it forced a fractured workflow in which design was a lonely act. Designers worked locally, saved heavy files to their hard drives, and passed iterations through Dropbox and [Slack](/case-study/slack-gaming-pivot) — producing the infamous sprawl of "Dashboard_v2_Final_ActuallyFinal.sketch." Getting feedback from a PM or engineer meant exporting static PNGs or wrestling clunky prototyping add-ons. The tool was excellent and the workflow around it was broken.

## The absurd technical gamble

Founders Dylan Field and Evan Wallace bet the company on building a professional-grade vector editor entirely in the browser. The hurdles were severe: browsers of the era were inefficient at the memory-heavy, low-latency work that graphics manipulation demands. To get there, Figma leaned hard on WebGL for hardware-accelerated rendering and, crucially, WebAssembly to compile C++ into the browser at near-native speed. It was a long, capital-burning stretch with little to show publicly, and critics dismissed it as a fool's errand — right up until the architecture paid off.

## The capability parity could not buy

When Figma launched it lacked the deep feature set of native rivals, and it didn't matter, because the browser unlocked something they couldn't: true real-time multiplayer. With the file hosted in the cloud and rendered simultaneously across browsers, designers, PMs, and engineers could inhabit the same document at the same time. The dance of live cursors turned UI design from a siloed hand-off into a shared conversation, and it pulled non-designers onto the canvas to comment, inspect values, and participate. Feature parity was beside the point; Figma was playing a different game.

## Distribution and lock-in, from a single URL

The web-first model was devastating to incumbents on distribution. Sketch required every collaborator to own a Mac and a license; a Figma file was a URL, open to anyone on any OS instantly. Adoption spread virally inside companies — one designer shares a handoff link, and months later the whole org has migrated. The collaborative structure became the moat. Adobe's agreement to buy Figma for roughly $20 billion in 2022 — abandoned in late 2023 under regulatory pressure — was the clearest possible admission that the browser bet had reorganized the industry.

## What this means for operators

- **Architecture can make a feature gap irrelevant.** Figma shipped with fewer features and won anyway, because its foundation enabled multiplayer that rivals were structurally unable to add. Ask what your architecture unlocks that competitors' cannot.
- **Collaboration beats local performance over time.** When there is tension between a faster solo experience and a frictionless shared one, the shared one compounds. Design for the people who aren't the primary user but need to be in the document.
- **Distribution is a design decision.** A shareable URL versus a licensed native install is not a marketing detail; it determines how fast adoption spreads inside an organization.
- **Endure the invisible years.** The moat was built during a long stretch with nothing to demo. A hard, unglamorous architecture bet is often exactly what competitors won't be willing to match.
