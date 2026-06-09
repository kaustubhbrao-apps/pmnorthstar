---
slug: blackberry-touchscreen-delay-2008
type: historical
category: Strategy
year: 2008
estimatedMinutes: 15
publishedAt: '2026-07-08T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-07-12T15:00:00+00:00'
principle: Incremental half-measures fail when a paradigm shift demands a complete leap.
intro: |
  It's early 2008. You are a PM at Research In Motion (RIM / BlackBerry). The iPhone launched last year and, while initially dismissed as a toy without a physical keyboard, it's starting to gain serious traction with consumers and executives alike.
  
  Verizon, your biggest carrier partner, is demanding an "iPhone killer." They want a full touchscreen device to compete with AT&T's exclusive on the iPhone. But your core enterprise users—and your co-CEOs—firmly believe the physical keyboard is your untouchable moat.
  
  You need to design the BlackBerry Storm to satisfy Verizon without alienating your core base.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: product
    prompt: |
      How do you design the touchscreen for the new BlackBerry Storm?
    options:
      - text: "Invent 'SurePress' - a clicky, mechanical touchscreen that simulates a physical button press to bridge the gap."
        leadsTo: "node_surepress"
        points: 0
        rationale: "A mechanical touchscreen is complex, prone to hardware failure, and gives the worst of both worlds."
      - text: "Go full capacitive touchscreen like the iPhone. Abandon the physical click. It will take time to get the software right, but it's the future."
        leadsTo: "node_capacitive"
        points: 50
        rationale: "Skating to where the puck is going. The physical keyboard paradigm is dying for mainstream consumers."
  node_surepress:
    dimension: business
    prompt: |
      You launch the Storm with SurePress. It's a buggy nightmare. The screen clicks get stuck, the OS is slow, and return rates at Verizon approach 100%. Verizon is furious. What is your immediate triage?
    options:
      - text: "Recall the device immediately. Take the financial hit and salvage the relationship with Verizon."
        leadsTo: "end_recall"
        points: 50
        rationale: "Trust with your biggest distribution partner is more valuable than short-term revenue."
      - text: "Push software updates to try and fix the lag. Keep selling the hardware to meet quarterly targets."
        leadsTo: "end_brand_death"
        points: 0
        rationale: "You can't fix a fundamental hardware design flaw with software patches. The brand damage becomes permanent."
  node_capacitive:
    dimension: product
    prompt: |
      You build a capacitive touchscreen. But your legacy BlackBerry OS is built for trackballs, not touch. The UI is clunky. How do you fix the software experience?
    options:
      - text: "Acquire a company (like QNX) and rewrite the entire OS from scratch for touch, even if it delays the launch by 18 months."
        leadsTo: "end_qnx"
        points: 100
        rationale: "A legacy OS bolted onto modern hardware is a dead end. You need a modern foundation."
      - text: "Slap a touch-friendly skin on top of the legacy Java-based BlackBerry OS to get to market faster."
        leadsTo: "end_slow_death"
        points: 0
        rationale: "Technical debt will drown you. The performance will never match iOS."
  end_recall:
    isOutcome: true
    dimension: business
    summary: |
      You recall the Storm. It's a massive financial write-down, but Verizon appreciates your honesty. However, the failure paralyzes your hardware team. You lose two critical years, allowing Apple and Android to run away with the market.
  end_brand_death:
    isOutcome: true
    dimension: product
    summary: |
      The Storm becomes known as the worst device RIM ever made. Verizon forces RIM to pay hundreds of millions to replace defective units. The BlackBerry brand loses its premium reputation entirely.
  end_qnx:
    isOutcome: true
    dimension: founder
    summary: |
      You delay the launch to build on QNX. The wait is agonizing, and you lose market share in the short term. But when BlackBerry 10 finally launches, it's a modern, fluid OS that secures your position as a solid #3 player in the enterprise market, saving the company from total irrelevance.
  end_slow_death:
    isOutcome: true
    dimension: product
    summary: |
      The skinned OS is slow and buggy. Consumers mock it. Developers refuse to build apps for a dying, fragmented platform. BlackBerry's consumer market share plummets to zero.
---
