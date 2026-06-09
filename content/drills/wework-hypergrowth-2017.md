---
slug: wework-hypergrowth-2017
type: historical
category: Founder
year: 2017
estimatedMinutes: 15
publishedAt: '2026-11-22T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-11-25T15:00:00+00:00'
principle: Disguising a capital-intensive real estate business as a high-margin tech company will eventually collapse under public scrutiny.
intro: |
  It's 2017. You are a senior executive at WeWork, working closely with charismatic founder Adam Neumann. SoftBank has just poured billions into the company, valuing it at $20 billion. The mandate from Neumann and Masa Son is simple: blitzscale. Grow at all costs, open locations globally, and dominate the market.
  
  Internally, the numbers are terrifying. The company signs 15-year commercial leases, renovates the spaces heavily, and then rents them out on month-to-month terms. The mismatch in liabilities is massive. The "Community Adjusted EBITDA" metric you use to show profitability strips out basic operating expenses like rent and marketing.
  
  You are aggressively expanding, acquiring unrelated companies (like a wave pool startup), and positioning WeWork not as a real estate company, but as a "physical social network" and a tech company. The IPO is looming on the horizon.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: strategy
    prompt: |
      The push for expansion is relentless. Adam wants to double the global square footage in the next 12 months. This requires signing hundreds of new, highly expensive long-term leases at market peak. The internal finance team is warning that a slight dip in occupancy will cause a severe cash crisis. What is your recommendation to the board?
    options:
      - text: "Advise pulling back. Focus on achieving profitability in existing mature locations before signing any new leases."
        leadsTo: "pull_back"
        points: 50
        rationale: "Fundamentals matter. A real estate business cannot scale infinitely without sound unit economics."
      - text: "Support the hypergrowth. SoftBank is demanding it, and capturing the market now will give you pricing power later."
        leadsTo: "support_growth"
        points: 0
        rationale: "This accelerates the massive liability mismatch. You are building a house of cards."

  pull_back:
    dimension: founder
    prompt: |
      Adam Neumann is furious. He views your caution as a lack of vision. He threatens to push you out of the leadership team if you don't align with the "spiritual energy" of the company's growth. What do you do?
    options:
      - text: "Stand your ground. Present the hard financial data to the major investors, even if it means risking your job."
        leadsTo: "stand_ground"
        points: 50
        rationale: "Fiduciary duty requires confronting a founder who is disconnected from financial reality."
      - text: "Back down. You can't fight the founder and SoftBank. Try to manage the margins incrementally from within."
        leadsTo: "back_down"
        points: 0
        rationale: "Incremental margin management cannot fix a fundamentally broken business model."

  support_growth:
    dimension: business
    prompt: |
      The hypergrowth continues. The valuation hits $47 billion. You are preparing the S-1 document for the IPO. Adam insists on retaining absolute voting control, charging the company $5.9M for the "We" trademark, and including the "Community Adjusted EBITDA" metric. The bankers are getting nervous. What is your stance on the S-1?
    options:
      - text: "Force a rewrite. Remove the absurd metrics, limit Adam's control, and present WeWork honestly as a real estate company."
        leadsTo: "force_rewrite"
        points: 50
        rationale: "Public markets will not accept the reality distortion field that worked on private investors."
      - text: "Publish it as Adam wants. The tech-like narrative is the only way to justify the $47B valuation to the public markets."
        leadsTo: "publish_s1"
        points: 0
        rationale: "This is the historical reality. The S-1 became a laughingstock and triggered the company's collapse."

  stand_ground:
    isOutcome: true
    prompt: |
      You are fired, but you leave with your integrity intact. Months later, the S-1 is published, the public markets reject it, and the company nearly goes bankrupt. You are vindicated.
      
      Score: 100/100
      You correctly identified a toxic and unsustainable business model.

  back_down:
    isOutcome: true
    prompt: |
      You go along for the ride. The S-1 drops, the valuation collapses from $47B to $8B in weeks, the IPO is pulled, and you are swept out in the massive layoffs that follow.
      
      Score: 50/100
      You saw the disaster coming but lacked the courage to stop it.

  force_rewrite:
    isOutcome: true
    prompt: |
      The honest S-1 reveals massive losses and a traditional real estate model. The valuation is slashed to $15B before the roadshow even begins. It's painful, but the company goes public and avoids total collapse.
      
      Score: 50/100
      You forced a painful reality check, but the damage of the hypergrowth phase was already done.

  publish_s1:
    isOutcome: true
    prompt: |
      This is the historical reality. The WeWork S-1 is considered one of the most disastrous in corporate history. Public scrutiny exposed the self-dealing, the fake tech metrics, and the horrific unit economics. The IPO was cancelled, Adam Neumann was ousted, and the valuation plummeted by $40 billion in weeks.
      
      Score: 0/100
      You participated in one of the greatest corporate delusions in modern history.
---
