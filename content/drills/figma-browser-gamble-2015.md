---
slug: figma-browser-gamble-2015
caseStudySlug: figma-browser-gamble-2015
type: historical
category: Strategy
year: 2015
estimatedMinutes: 18
publishedAt: '2026-08-16T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-08-12T15:00:00+00:00'
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
      - text: 'Multiplayer Editing: Real-time collaboration. Two people editing the same file at the same time.'
        points: 40
        pattern: Category Definition
        rationale: This is a feature that native apps (Adobe/Sketch) literally cannot do because of their architecture. It turns design from a 'Solo sport' into a 'Multiplayer game.' It justifies the browser-first tradeoff instantly.
        consequence: Designers are blown away. The 'Google Docs for Design' pitch goes viral. Teams at Uber and Airbnb start using Figma because it solves the 'Who has the latest version?' problem forever.
        leadsTo: scaling_the_graph
      - text: 'Offline Mode: Build a ''wrapper'' that allows designers to work without an internet connection.'
        points: 10
        pattern: Defensive Feature-Parity
        rationale: Tries to solve the biggest complaint about browsers. But building a robust offline sync engine is a massive technical distraction that doesn't play to Figma's strengths.
        consequence: It's buggy and slow. You've spent 6 months building a feature that makes you 'slightly more like Sketch.' You've failed to highlight your unique advantage.
        leadsTo: market_stagnation
      - text: 'Plugin API: Open the platform to developers to build custom design tools on day one.'
        points: 20
        pattern: Ecosystem First
        rationale: Sketch won by having great plugins. You hope developers will build the features you don't have yet. But without a core user base, no developer will build for you.
        consequence: The API is empty. Designers find Figma 'feature-poor' compared to Sketch. You've outsourced your product roadmap to a community that doesn't exist yet.
        leadsTo: plugin_pivot
  scaling_the_graph:
    dimension: business
    prompt: |
      Multiplayer is a hit. You are growing fast within design teams. But individual designers are still using Sketch for their personal work because Figma's "Vector Tools" aren't as polished.

      How do you move from a "Collaboration Tool" to the "Primary Design Tool"?
    options:
      - text: 'The ''Sketch Importer'': Build a perfect 1:1 importer that brings Sketch files into Figma with zero data loss.'
        points: 50
        pattern: Reducing Switching Costs
        rationale: Lowering the barrier to entry is critical. If a designer can move their entire career's work into Figma in one click, they have no reason to stay with Sketch.
        consequence: It's the tipping point. Whole agencies migrate to Figma overnight. Sketch's growth flatlines. Figma becomes the 'Default' tool for the new generation of designers.
        leadsTo: scaling_the_graph_3
      - text: 'The ''Adobe War'': Launch a massive marketing campaign targeting Photoshop users with a ''Photoshop for the Web'' message.'
        points: 5
        pattern: Misaligned Competition
        rationale: Photoshop is for photo editing; Figma is for UI design. By targeting the wrong audience, you confuse your brand identity and waste your marketing budget.
        consequence: Zero conversion. Adobe users don't care about browsers. You've invited a counter-attack from a giant before you are ready.
        leadsTo: scaling_the_graph_3_alt
  scaling_the_graph_3:
    dimension: product
    prompt: |
      You are the default tool. Now the community wants advanced prototyping, but building it will slow down core performance.
    options:
      - text: 'Build a lightweight, fast prototyping tool integrated seamlessly into the canvas.'
        points: 10
        pattern: speed-over-power
        rationale: Keeps the core fast and handles 80% of use cases.
        consequence: Users love the flow. InVision's market share collapses.
        leadsTo: category_dominance
      - text: 'Acquire a heavy, complex prototyping startup and integrate it.'
        points: 0
        pattern: bloatware
        rationale: Frankenstein integration ruins performance.
        consequence: The browser struggles with the memory load. Users complain about lag.
        leadsTo: category_dominance
  scaling_the_graph_3_alt:
    dimension: founder
    prompt: |
      Adobe responds to your marketing war by bundling Adobe XD for free with Creative Cloud.
    options:
      - text: 'Lean into community: sponsor hackathons, give Figma away free to students.'
        points: 10
        pattern: grassroots-defense
        rationale: Adobe has distribution, you need bottom-up love.
        consequence: You survive the assault through sheer user preference.
        leadsTo: market_loss
      - text: 'Try to fight a top-down enterprise sales war against Adobe.'
        points: 0
        pattern: suicide-mission
        rationale: They have a 20-year head start on enterprise sales.
        consequence: You get crushed in procurement.
        leadsTo: market_loss
  market_stagnation:
    dimension: business
    prompt: |
      You are stuck. Growth is linear. Sketch has just announced 'Sketch Cloud' to compete with your collaboration features. 

      Adobe is rumored to be building 'Project Comet' (Adobe XD). You need a radical move.
    options:
      - text: 'Free for Individuals: Make the ''Professional'' version completely free for solo designers forever.'
        points: 25
        pattern: Land and Expand
        rationale: If you can't win on features, win on distribution. Capture the students and freelancers today, and they will bring Figma into their companies tomorrow.
        consequence: It works. A generation of students learns design on Figma. As they enter the workforce, they refuse to use anything else. You've built a 'Bottom-Up' sales machine.
        leadsTo: market_stagnation_3
      - text: 'Enterprise Pivot: Build ''Design Systems'' features specifically for companies with 1,000+ designers.'
        points: 15
        pattern: Top-Down Sales
        rationale: Chases the big checks. But the product isn't stable enough for enterprise scale yet. You over-promise and under-deliver.
        consequence: High churn. Enterprise leads find the tool 'too early.' You've lost your agility trying to please corporate IT departments.
        leadsTo: market_stagnation_3_alt
  market_stagnation_3:
    dimension: product
    prompt: |
      The bottom-up strategy is working. Students love it. But power users say your vector networks are still too basic compared to Illustrator.
    options:
      - text: 'Rewrite the vector engine to support complex, non-destructive boolean operations.'
        points: 15
        pattern: continuous-technical-investment
        rationale: You must eventually achieve parity on the hard stuff.
        consequence: It takes a year, but power users finally migrate.
        leadsTo: category_dominance
      - text: 'Ignore them. Focus on adding more marketing templates for casual users.'
        points: 0
        pattern: moving-downmarket
        rationale: You abandon the "Pro" in Pro tool. Canva beats you here.
        consequence: You get sandwiched between Sketch (Pro) and Canva (Casual).
        leadsTo: niche_survivor
  market_stagnation_3_alt:
    dimension: founder
    prompt: |
      Enterprise churn is high. You're burning through your Series B.
    options:
      - text: 'Admit defeat in Enterprise for now. Return to focusing on the core editor experience.'
        points: 10
        pattern: humble-reset
        rationale: Fix the product before selling the dream.
        consequence: You stabilize the company and begin slow, organic growth again.
        leadsTo: niche_survivor
      - text: 'Double down on enterprise sales. Hire a massive sales team.'
        points: 0
        pattern: premature-scaling
        rationale: Pouring gas on a leaky bucket.
        consequence: You run out of money and are forced into a fire sale.
        leadsTo: commodity_death
  plugin_pivot:
    dimension: product
    prompt: |
      The Plugin API launched to crickets. No one is building for a platform with no users.
    options:
      - text: 'Pay developers to build the top 10 most requested Sketch plugins on Figma.'
        points: 10
        pattern: seeding-the-ecosystem
        rationale: You have to prime the pump manually.
        consequence: You get some plugins, but it's expensive and artificial.
        leadsTo: plugin_pivot_3
      - text: 'Abandon the API and finally build Multiplayer.'
        points: 5
        pattern: late-pivot
        rationale: Better late than never.
        consequence: You are two years behind schedule.
        leadsTo: plugin_pivot_3_alt
  plugin_pivot_3:
    dimension: business
    prompt: |
      You have some subsidized plugins, but growth is anemic. Adobe XD just launched.
    options:
      - text: 'Pivot to become a developer-handoff tool (like Zeplin).'
        points: 5
        pattern: shrinking-the-vision
        rationale: You abandon the design market and settle for a smaller adjacent market.
        consequence: You survive but never become a unicorn.
        leadsTo: niche_survivor
      - text: 'Stay the course as a primary design tool.'
        points: 0
        pattern: stubborn-failure
        rationale: You have no wedge.
        consequence: The market ignores you.
        leadsTo: commodity_death
  plugin_pivot_3_alt:
    dimension: founder
    prompt: |
      You are building Multiplayer, but your lead engineer burns out because the C++ engine is a mess.
    options:
      - text: 'Rewrite the engine in WebAssembly.'
        points: 10
        pattern: tech-reset
        rationale: The right technical foundation is required.
        consequence: It takes 18 months, but the engine is finally stable.
        leadsTo: niche_survivor
      - text: 'Patch it up and launch anyway.'
        points: 0
        pattern: technical-debt-collapse
        rationale: It will crash under load.
        consequence: The launch is a disaster.
        leadsTo: commodity_death
  category_dominance:
    isOutcome: true
    prompt: |
      ### Outcome: The Web-First Revolution
      You did what everyone said was impossible: you built a professional creative tool that runs in the browser. 

      By prioritizing **Multiplayer** and the **Sketch Importer**, you created a network effect that native apps couldn't match. Adobe ended up trying to buy you for $20B because they realized they couldn't compete with your architecture. You've redefined how the world builds software.

      **League Score Impact:** +90 Points (Technological Courage).
  niche_survivor:
    isOutcome: true
    prompt: |
      ### Outcome: The Boutique Tool
      You built a great product, but you were too slow to lower the switching costs. 

      Figma remains a tool for "Collaborative Teams," but Sketch remains the standard for "Pure Design." You are a successful, profitable business, but you are not the Category King.

      **League Score Impact:** +50 Points (Competent Execution).
  market_loss:
    isOutcome: true
    prompt: |
      ### Outcome: The Forgotten Prototype
      You failed to find your unique wedge. 

      By trying to compete with Adobe on their turf, you wasted your technical advantage. Designers saw Figma as a "Web-based Photoshop clone," and they already have Photoshop. The company shuts down in 2017.

      **League Score Impact:** -40 Points (Strategic Misalignment).
  commodity_death:
    isOutcome: true
    prompt: |
      ### Outcome: Death by Checklist
      You spent your time building what the competition had instead of what only you could build. 

      By the time you added the features designers asked for, the market had moved on. You are a footnote in the history of the design wars.

      **League Score Impact:** -60 Points (Failure to Innovate).
---
Figma's victory was a **Structural Victory.** By choosing the browser, they accepted years of technical pain in exchange for a moat that native apps simply couldn't cross. The lesson? The hardest architecture often builds the strongest business.

**Related reading:** [Figma's Browser-First Design Revolution](/case-study/figma-browser-design)
