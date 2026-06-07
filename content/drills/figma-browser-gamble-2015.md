---
slug: figma-browser-gamble-2015
type: historical
category: Strategy
year: 2015
estimatedMinutes: 18
publishedAt: '2026-10-14T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-10-17T18:29:59+00:00'
principle: Building on a technically impossible foundation is the ultimate competitive moat.
intro: |
  It is 2015. You are the VP of Product at Figma. The design world is dominated by Adobe Photoshop and Sketch. Both are native desktop applications. They are fast, powerful, and industry-standard.

  Figma is a ghost. You've been in "Stealth" for three years. Dylan Field, your founder, has a radical and widely mocked vision: Professional design tools should run in the web browser.

  Every designer you talk to says the same thing: "Browsers are too slow for real design. I need a native app that doesn't lag." Your engineering team has spent years building a custom graphics engine in C++ and WebAssembly to prove them wrong. 

  You are about to launch. If you ship a "lite" version, you'll be seen as a toy. If you ship a full-power tool, you might melt the user's laptop. You have to decide how to position Figma against the giants. This is a Tier 1 Strategy drill.
nodes:
  start:
    dimension: product
    prompt: |
      Your custom graphics engine is working, but it's still heavy. Designers are skeptical. To gain a foothold, you need to decide which "Pro" feature to prioritize for the public launch. 

      What is the Figma "Killer Feature"?
    options:
      - text: "Multiplayer Editing: Real-time collaboration. Two people editing the same file at the same time."
        points: 40
        pattern: Category Definition
        rationale: "This is a feature that native apps (Adobe/Sketch) literally cannot do because of their architecture. It turns design from a 'Solo sport' into a 'Multiplayer game.' It justifies the browser-first tradeoff instantly."
        consequence: "Designers are blown away. The 'Google Docs for Design' pitch goes viral. Teams at Uber and Airbnb start using Figma because it solves the 'Who has the latest version?' problem forever."
        leadsTo: scaling_the_graph
      - text: "Offline Mode: Build a 'wrapper' that allows designers to work without an internet connection."
        points: 10
        pattern: Defensive Feature-Parity
        rationale: "Tries to solve the biggest complaint about browsers. But building a robust offline sync engine is a massive technical distraction that doesn't play to Figma's strengths."
        consequence: "It's buggy and slow. You've spent 6 months building a feature that makes you 'slightly more like Sketch.' You've failed to highlight your unique advantage."
        leadsTo: market_stagnation
      - text: "Plugin API: Open the platform to developers to build custom design tools on day one."
        points: 20
        pattern: Ecosystem First
        rationale: "Sketch won by having great plugins. You hope developers will build the features you don't have yet. But without a core user base, no developer will build for you."
        consequence: "The API is empty. Designers find Figma 'feature-poor' compared to Sketch. You've outsourced your product roadmap to a community that doesn't exist yet."
        leadsTo: commodity_death

  scaling_the_graph:
    dimension: business
    prompt: |
      Multiplayer is a hit. You are growing fast within design teams. But individual designers are still using Sketch for their personal work because Figma's "Vector Tools" aren't as polished.

      How do you move from a "Collaboration Tool" to the "Primary Design Tool"?
    options:
      - text: "The 'Sketch Importer': Build a perfect 1:1 importer that brings Sketch files into Figma with zero data loss."
        points: 50
        pattern: Reducing Switching Costs
        rationale: "Lowering the barrier to entry is critical. If a designer can move their entire career's work into Figma in one click, they have no reason to stay with Sketch."
        consequence: "It's the tipping point. Whole agencies migrate to Figma overnight. Sketch's growth flatlines. Figma becomes the 'Default' tool for the new generation of designers."
        leadsTo: category_dominance
      - text: "The 'Adobe War': Launch a massive marketing campaign targeting Photoshop users with a 'Photoshop for the Web' message."
        points: 5
        pattern: Misaligned Competition
        rationale: "Photoshop is for photo editing; Figma is for UI design. By targeting the wrong audience, you confuse your brand identity and waste your marketing budget."
        consequence: "Zero conversion. Adobe users don't care about browsers. You've invited a counter-attack from a giant before you are ready."
        leadsTo: market_loss

  market_stagnation:
    dimension: business
    prompt: |
      You are stuck. Growth is linear. Sketch has just announced 'Sketch Cloud' to compete with your collaboration features. 

      Adobe is rumored to be building 'Project Comet' (Adobe XD). You need a radical move.
    options:
      - text: "Free for Individuals: Make the 'Professional' version completely free for solo designers forever."
        points: 25
        pattern: Land and Expand
        rationale: "If you can't win on features, win on distribution. Capture the students and freelancers today, and they will bring Figma into their companies tomorrow."
        consequence: "It works. A generation of students learns design on Figma. As they enter the workforce, they refuse to use anything else. You've built a 'Bottom-Up' sales machine."
        leadsTo: category_dominance
      - text: "Enterprise Pivot: Build 'Design Systems' features specifically for companies with 1,000+ designers."
        points: 15
        pattern: Top-Down Sales
        rationale: "Chases the big checks. But the product isn't stable enough for enterprise scale yet. You over-promise and under-deliver."
        consequence: "High churn. Enterprise leads find the tool 'too early.' You've lost your agility trying to please corporate IT departments."
        leadsTo: commodity_death

  category_dominance:
    isOutcome: true
    summary: |
      ### Outcome: The Web-First Revolution
      You did what everyone said was impossible: you built a professional creative tool that runs in the browser. 
      
      By prioritizing **Multiplayer** and the **Sketch Importer**, you created a network effect that native apps couldn't match. Adobe ended up trying to buy you for $20B because they realized they couldn't compete with your architecture. You've redefined how the world builds software.
      
      **League Score Impact:** +90 Points (Technological Courage).

  niche_survivor:
    isOutcome: true
    summary: |
      ### Outcome: The Boutique Tool
      You built a great product, but you were too slow to lower the switching costs. 
      
      Figma remains a tool for "Collaborative Teams," but Sketch remains the standard for "Pure Design." You are a successful, profitable business, but you are not the Category King.
      
      **League Score Impact:** +50 Points (Competent Execution).

  market_loss:
    isOutcome: true
    summary: |
      ### Outcome: The Forgotten Prototype
      You failed to find your unique wedge. 
      
      By trying to compete with Adobe on their turf, you wasted your technical advantage. Designers saw Figma as a "Web-based Photoshop clone," and they already have Photoshop. The company shuts down in 2017.
      
      **League Score Impact:** -40 Points (Strategic Misalignment).

  commodity_death:
    isOutcome: true
    summary: |
      ### Outcome: Death by Checklist
      You spent your time building what the competition had instead of what only you could build. 
      
      By the time you added the features designers asked for, the market had moved on. You are a footnote in the history of the design wars.
      
      **League Score Impact:** -60 Points (Failure to Innovate).

---

Figma's victory was a **Structural Victory.** By choosing the browser, they accepted years of technical pain in exchange for a moat that native apps simply couldn't cross. The lesson? The hardest architecture often builds the strongest business.

**Related reading:** [Figma's Browser-First Design Revolution](/case-study/figma-browser-design)
