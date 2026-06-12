---
slug: mcp-build-or-skip-2026
type: current
category: strategic
publishedAt: '2026-07-13T19:00:00+05:30'
estimatedMinutes: 6
principle: |
  Standards become moats only when they're inevitable. Investing in
  an emerging standard early is a bet on its trajectory, not on its
  current adoption. The right question isn't "is the standard
  popular today?" but "does its momentum show it will be a default
  in 18 months?"
intro: |
  You are the CTO of a Series-B SaaS company (~$15M ARR, 80
  customers). Your product is a CRM for sales teams with deep
  integrations into email, calendar, and call-recording tools.

  Anthropic's MCP (Model Context Protocol) is gaining traction —
  major foundation-model providers and AI agent frameworks are
  adopting it as the way agents discover and call into third-party
  tools. Building an MCP server for your product would let any AI
  agent (Claude, OpenAI's, Cursor, Linear's agents) query and
  modify CRM data through a standard interface.

  Your engineering team has 6 people. The MCP server is roughly
  3-4 weeks of work for a senior engineer. Your Q3 roadmap is
  already committed to enterprise security features (SSO, audit
  log) that two paying customers asked for. You can't do both.
nodes:
  start:
    dimension: product
    prompt: |
      Ship MCP server in Q3 or do the security features. Pick.
    options:
      - text: Ship MCP. Skip or defer the SSO/audit features. Bet on the standard.
        points: 12
        pattern: standard-bet-over-customer-ask
        rationale: |
          Bold but defensible. MCP momentum is real — adoption is compounding.
        consequence: |
          MCP ships in 4 weeks. Inbound mentions "we want a CRM that works with our AI agent."
        leadsTo: A-mcp-followup
      - text: Ship security features. MCP can wait until the standard is more proven.
        points: 9
        pattern: customer-ask-over-standard
        rationale: |
          The defensible "ship what they're asking for" call.
        consequence: |
          Security features ship. Both customers stay. AI-agent inbound goes to competitor.
        leadsTo: B-security-followup
      - text: Hire a contractor to ship MCP in parallel. Keep the security roadmap intact.
        points: 15
        pattern: contractor-for-the-bet
        rationale: |
          The right answer. MCP is a defined surface that a contractor can ship.
        consequence: |
          Both features ship in Q3. Inbound agent-traffic compounds.
        leadsTo: C-both-followup
      - text: Wait for Q4. Defer both. Q3 is for selling the existing pipeline.
        points: 3
        pattern: defer-both
        rationale: |
          The "let's plan more" instinct. Deferring isn't free.
        consequence: |
          One enterprise customer churns. A competitor ships MCP.
        leadsTo: D-defer-followup

  A-mcp-followup:
    dimension: business
    prompt: |
      The MCP server is live. ~12% of new inbound mentions AI agent
      compatibility. The remaining SSO-asking customer is at
      renewal. They want SSO + audit log; you don't have it.
    options:
      - text: Offer them a credit and a Q4 ETA on SSO. Stretch the relationship.
        points: 12
        pattern: relationship-bridge
        rationale: |
          Right balance. You acknowledge the gap and give a clear timeline.
        consequence: |
          They renew on a 6-month term instead of 12.
        leadsTo: A-bridge-crisis
      - text: Let them churn cleanly. Refer them to a competitor with SSO.
        points: 6
        pattern: prioritize-strategy-over-customer
        rationale: |
          Losing a paying enterprise customer actively signals bad faith.
        consequence: |
          The customer churns. Two other enterprise prospects pause pipelines.
        leadsTo: A-churn-crisis

  A-bridge-crisis:
    dimension: engineering
    prompt: |
      The customer accepted the 6-month extension. Now it's Q4, and the SSO 
      build is delayed because the MCP server requires constant maintenance updates.
    options:
      - text: "Pull engineers off MCP to finish SSO immediately."
        points: 10
        pattern: honor-the-debt
        rationale: |
          You made a promise. You must keep it, even if it hurts your new shiny toy.
        consequence: |
          SSO ships just in time. MCP server degrades slightly but recovers.
        leadsTo: end-A-good
      - text: "Tell the customer SSO is delayed again."
        points: 0
        pattern: broken-promises
        rationale: |
          You can only stretch a customer's patience once.
        consequence: |
          The customer churns furiously and writes a negative G2 review.
        leadsTo: end-A-bad

  A-churn-crisis:
    dimension: marketing
    prompt: |
      Word got out that you pushed a legacy customer away. The market thinks 
      your product isn't "enterprise-ready."
    options:
      - text: "Double down on the 'AI-native' marketing, targeting only startups."
        points: 8
        pattern: shifting-icp
        rationale: |
          If enterprise doesn't want you, own the startup niche.
        consequence: |
          You survive, but your Average Contract Value (ACV) drops by 50%.
        leadsTo: end-A-startup
      - text: "Launch an aggressive enterprise PR campaign to fix the narrative."
        points: 2
        pattern: hollow-marketing
        rationale: |
          PR can't fix a product gap (missing SSO).
        consequence: |
          Enterprise buyers see through it. Growth stalls.
        leadsTo: end-A-stall

  B-security-followup:
    dimension: product
    prompt: |
      You shipped security, but your competitor shipped MCP. They are now 
      the default CRM for the top 3 AI agent frameworks.
    options:
      - text: "Build an MCP server now, rushing it in Q4."
        points: 10
        pattern: fast-follow
        rationale: |
          Better late than never, but you are playing catch-up.
        consequence: |
          You get basic parity, but the competitor has already captured mindshare.
        leadsTo: B-catchup-crisis
      - text: "Skip MCP entirely. Build native AI features directly into your own UI."
        points: 8
        pattern: walled-garden
        rationale: |
          A valid strategy, but you are betting against the open ecosystem.
        consequence: |
          You become a walled garden. Solid, but isolated.
        leadsTo: B-walled-crisis

  B-catchup-crisis:
    dimension: strategy
    prompt: |
      You rushed the MCP server, but the competitor has already integrated 
      deep write-actions, while yours is read-only.
    options:
      - text: "Commit the next two quarters to achieving full parity."
        points: 10
        pattern: grinding-parity
        rationale: |
          It's painful, but necessary to stay relevant.
        consequence: |
          You eventually catch up, but sacrificed all other feature development.
        leadsTo: end-B
      - text: "Accept being read-only and pivot marketing to 'data safety'."
        points: 5
        pattern: marketing-spin
        rationale: |
          Spinning a technical deficit as a feature rarely works on developers.
        consequence: |
          Agent developers ignore your platform entirely.
        leadsTo: end-B-alt

  B-walled-crisis:
    dimension: sales
    prompt: |
      Your native AI features are good, but enterprise buyers want to use 
      their own custom AI agents, not yours.
    options:
      - text: "Hold firm. We own the experience end-to-end."
        points: 5
        pattern: apple-strategy
        rationale: |
          Hard to pull off unless your native AI is 10x better than standard models.
        consequence: |
          You lose deals to the competitor who embraces external agents.
        leadsTo: end-B-walled
      - text: "Capitulate and build the MCP server anyway, 12 months late."
        points: 8
        pattern: late-capitulation
        rationale: |
          You wasted a year fighting the tide.
        consequence: |
          You finally build it, but you are permanently the #2 player.
        leadsTo: end-B

  C-both-followup:
    dimension: product
    prompt: |
      Both features shipped. AI-agent inbound is now 18% of new pipeline.
      Your competitor is reading the same pattern. They announce a V2. Pick.
    options:
      - text: Ship the deepest MCP integration in the category. Write actions, multi-step workflows.
        points: 15
        pattern: depth-over-breadth
        rationale: |
          The right move. Depth is defensible.
        consequence: |
          You become the reference customer for Anthropic's MCP documentation.
        leadsTo: C-deep-crisis
      - text: Stay at MCP parity. Don't over-invest in a category that's still uncertain.
        points: 9
        pattern: parity-not-depth
        rationale: |
          Defensible hedge, but forfeits the differentiation.
        consequence: |
          You stay current but don't lead it.
        leadsTo: C-parity-crisis

  C-deep-crisis:
    dimension: engineering
    prompt: |
      Your deep integration is a massive hit, but an AI agent goes rogue 
      and deletes a customer's CRM data because of a bug in your write-action handler.
    options:
      - text: "Implement strict rollback and audit layers for all agent actions."
        points: 15
        pattern: robust-engineering
        rationale: |
          You must build trust layers when allowing AI to write data.
        consequence: |
          You pioneer safe AI-agent interactions and strengthen the moat.
        leadsTo: end-C-great
      - text: "Disable all write actions globally until you figure it out."
        points: 5
        pattern: panic-shutdown
        rationale: |
          You break the workflows of thousands of users who relied on it.
        consequence: |
          Trust is broken, and users revert to the competitor's simpler tool.
        leadsTo: end-C-stable

  C-parity-crisis:
    dimension: business
    prompt: |
      Staying at parity kept costs low, but the competitor just raised a massive 
      Series C based on their dominant "Agent-First CRM" narrative.
    options:
      - text: "Pivot your narrative to emphasize human-centric sales workflows."
        points: 12
        pattern: counter-positioning
        rationale: |
          If they own AI, you must own the humans.
        consequence: |
          You carve out a strong niche among traditional sales teams.
        leadsTo: end-C-stable
      - text: "Try to copy their narrative without the deep tech to back it up."
        points: 2
        pattern: fake-it
        rationale: |
          The market sees through hollow marketing.
        consequence: |
          You look like a cheap imitation.
        leadsTo: end-C-poor

  D-defer-followup:
    dimension: business
    prompt: |
      You deferred. Q4 arrives. The enterprise customer churned anyway, 
      and the competitor launched MCP. You are behind on both fronts.
    options:
      - text: "Fire the VP of Engineering for the delay."
        points: 0
        pattern: blame-shifting
        rationale: |
          It was your strategic call, not their execution failure.
        consequence: |
          The engineering team mutinies.
        leadsTo: D-blame-crisis
      - text: "Take ownership. Do a massive sprint to build MCP and SSO simultaneously."
        points: 5
        pattern: hero-complex
        rationale: |
          Burning out the team to fix a strategic error rarely works.
        consequence: |
          Both features ship with critical bugs.
        leadsTo: D-hero-crisis

  D-blame-crisis:
    dimension: team
    prompt: |
      The engineering team is furious. Productivity drops to zero.
    options:
      - text: "Hire a new aggressive VP to whip them into shape."
        points: 0
        pattern: toxic-leadership
        rationale: |
          Adding toxicity to a mutiny destroys the company.
        consequence: |
          Mass exodus. The company folds.
        leadsTo: end-D
      - text: "Apologize, step down as CTO, and hire a replacement."
        points: 10
        pattern: ultimate-accountability
        rationale: |
          You failed. Stepping aside is the only way the company survives.
        consequence: |
          The company survives under new leadership, but your equity is slashed.
        leadsTo: end-D-alt

  D-hero-crisis:
    dimension: product
    prompt: |
      The rushed features are buggy. A security flaw in the SSO implementation 
      causes a minor data breach.
    options:
      - text: "Disclose immediately, patch it, and offer free credit monitoring."
        points: 12
        pattern: transparent-crisis-management
        rationale: |
          Honesty is the only policy in a breach.
        consequence: |
          You take a PR hit but survive the lawsuit.
        leadsTo: end-D-alt
      - text: "Try to quietly patch it without notifying users."
        points: 0
        pattern: criminal-negligence
        rationale: |
          This is illegal and company-ending.
        consequence: |
          You are sued into oblivion.
        leadsTo: end-D

  end-A-good:
    isOutcome: true
    prompt: |
      The MCP bet plus the customer-bridge worked. You honored the technical debt, shipped SSO, and the bet on the standard compounded.
  end-A-bad:
    isOutcome: true
    prompt: |
      You stretched the customer too far. They churned, and your reputation as a reliable enterprise partner was ruined.
  end-A-startup:
    isOutcome: true
    prompt: |
      You survived by pivoting down-market to startups, but you lost the high-margin enterprise business permanently.
  end-A-stall:
    isOutcome: true
    prompt: |
      Hollow PR couldn't hide the lack of enterprise features. The business stalled.
  end-B:
    isOutcome: true
    prompt: |
      Security features kept existing customers happy, but you spent a year playing catch-up on MCP. You are permanently the #2 player.
  end-B-alt:
    isOutcome: true
    prompt: |
      Marketing spin couldn't save a weak product. Agent developers ignored you.
  end-B-walled:
    isOutcome: true
    prompt: |
      Your walled garden approach alienated the broader ecosystem. You survived, but growth plateaued.
  end-C-great:
    isOutcome: true
    prompt: |
      The deep MCP integration, combined with robust safety layers, positioned you as the undisputed AI-first CRM.
  end-C-stable:
    isOutcome: true
    prompt: |
      Parity worked, but didn't compound. You retained the agent traffic you had but didn't grow it. Net stable quarter.
  end-C-poor:
    isOutcome: true
    prompt: |
      Fake marketing destroyed your credibility. The competitor ran away with the market.
  end-D:
    isOutcome: true
    prompt: |
      Deferring both bets, followed by terrible crisis management, destroyed the company entirely.
  end-D-alt:
    isOutcome: true
    prompt: |
      You survived the crisis by taking extreme accountability, but the company lost 18 months of momentum and market share.
---
## What's at stake here

The MCP decision is a live case for every developer-tool and SaaS
company in 2026. The companies treating MCP as a Q4-or-later
roadmap item are losing the agent-distribution channel to faster
movers. The companies investing aggressively in MCP integration
depth are capturing inbound from every AI agent that queries their
category.

The pattern: emerging standards reward early movers
asymmetrically because the discoverability surface (model
registries, MCP marketplaces, agent search) sorts integrations by
quality and recency. Late-arrivers fight for visibility against
the established defaults.

**Related reading:** [MCP becoming the standard](/ai-decoded/mcp-becoming-standard-2026)
