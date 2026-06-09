---
slug: sony-betamax-format-war-1975
type: historical
category: Strategy
year: 1975
estimatedMinutes: 15
publishedAt: '2026-10-25T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-10-28T15:00:00+00:00'
principle: In network effect markets, open standards and widespread adoption beat proprietary technical superiority.
intro: |
  It's 1975. You are a senior executive at Sony. You are about to launch the Betamax, a revolutionary home video cassette recorder. It boasts superior picture quality, a compact tape design, and the unmatched engineering pedigree of Sony. You intend to own the living room.
  
  However, your rival JVC is developing a competing standard called VHS. It's bulkier and has slightly inferior video quality, but they have a different strategy. While you want to keep Betamax a proprietary Sony format, JVC is aggressively courting other manufacturers to license and build VHS players.
  
  The format war is about to begin. The decisions you make now will determine who controls the home entertainment market for the next two decades.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: strategy
    prompt: |
      The Betamax is ready for launch. The engineering team has optimized it for a 1-hour recording time, perfect for high-quality playback and ensuring the cassette remains small. JVC's VHS tape is larger and aims for a 2-hour recording time. What is your tape length strategy?
    options:
      - text: "Stick with 1-hour. Emphasize the superior picture quality and compact design. Quality is Sony's brand."
        leadsTo: "stick_1_hour"
        points: 0
        rationale: "Failing to understand the primary use case (recording full movies/sports games) is a fatal flaw."
      - text: "Delay the launch to re-engineer the tape and player for at least a 2-hour capacity, sacrificing some quality if necessary."
        leadsTo: "delay_2_hours"
        points: 50
        rationale: "Aligning the product with consumer needs (recording a 2-hour movie) is more important than theoretical technical superiority."

  stick_1_hour:
    dimension: business
    prompt: |
      You launch the 1-hour Betamax. It's a marvel, but consumers complain they can't record a full football game or movie. JVC launches VHS with a 2-hour capacity. JVC is also offering cheap licensing to Panasonic, Hitachi, and Sharp. What is your licensing strategy?
    options:
      - text: "Open up licensing immediately to other manufacturers, even if it means losing some control and initial hardware margins."
        leadsTo: "open_licensing"
        points: 50
        rationale: "In a format war, market share and ecosystem size are everything. You must commoditize the hardware to win the standard."
      - text: "Keep tight control. Only license to a few select partners who agree to strict quality standards and high royalties."
        leadsTo: "tight_control"
        points: 0
        rationale: "This is exactly what Sony did. They lost the ecosystem war by prioritizing hardware margins over format dominance."

  delay_2_hours:
    dimension: business
    prompt: |
      You delay the launch and re-engineer for a 2-hour tape. The product is slightly bulkier, but hits the critical consumer use case. JVC is still aggressively licensing VHS. How do you respond to their ecosystem play?
    options:
      - text: "Aggressively license Betamax to all manufacturers, subsidizing the tech to guarantee it becomes the dominant standard."
        leadsTo: "aggressive_license"
        points: 50
        rationale: "Combining a product that meets consumer needs with an open ecosystem strategy ensures victory."
      - text: "Rely on Sony's massive brand power and marketing budget to out-sell the combined forces of the VHS alliance."
        leadsTo: "rely_on_brand"
        points: 0
        rationale: "Brand power alone cannot overcome a massive, multi-company network effect."

  tight_control:
    isOutcome: true
    prompt: |
      This is the historical reality. Sony's insistence on proprietary control, high prices, and the initial 1-hour limit doomed Betamax. VHS flooded the market with cheap players and massive video rental library support. Betamax became a niche professional format while VHS conquered the world.
      
      Score: 0/100
      You won the engineering battle but lost the war.

  open_licensing:
    isOutcome: true
    prompt: |
      You pivot to open licensing, but it's late. You secure some market share, and the format war drags on for years in a messy stalemate. You survive, but you don't achieve the total dominance Sony expected.
      
      Score: 50/100
      You course-corrected, but gave JVC too much of a head start.

  aggressive_license:
    isOutcome: true
    prompt: |
      By matching the 2-hour requirement and aggressively pushing an open ecosystem, Betamax crushes VHS. Sony controls the licensing standard for the home video revolution, reaping massive long-term rewards.
      
      Score: 100/100
      You understood that winning the standard requires sacrificing short-term hardware control.

  rely_on_brand:
    isOutcome: true
    prompt: |
      Your brand is strong, but the sheer volume of cheap VHS players floods the market. Video rental stores start stocking only VHS because that's what everyone owns. You lose the network effect battle.
      
      Score: 50/100
      You failed to recognize the power of a unified competitor alliance.
---
