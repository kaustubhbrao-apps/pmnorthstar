---
slug: slack-pivot-from-glitch-2013
caseStudySlug: slack-gaming-pivot
type: historical
category: pivots
publishedAt: '2026-11-01T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-10-21T15:00:00+00:00'
year: 2013
estimatedMinutes: 8
principle: |
  The strongest pivot signal is when your internal tool — built to support
  the product you're failing at — is the thing your team actually loves.
  A team that loves something they built tells you more about
  product-market-fit than any user survey.
intro: |
  You are the CEO of a venture-funded gaming studio. Five years in,
  $17M raised, ~50 employees. Your flagship MMO has been live for
  fourteen months and bookings are still under $1M ARR. Player retention
  is flat. The board is asking pointed questions about runway.

  Internally, your team uses a chat tool you built to replace IRC for
  the studio. It has channels, file sharing, and a search-everything-
  ever feature that nobody else's enterprise chat has. Your team uses
  it 12 hours a day. Two of your engineers refuse to take meetings
  unless they happen in your chat tool. A friend who works at a small
  agency in San Francisco asked if he could try it.

  You have about 9 months of runway and one big decision to make in
  the next month.
nodes:
  start:
    dimension: founder
    prompt: |
      The game isn't working. The chat tool is. What do you do?
    options:
      - text: Pour another year into the game. The genre takes time to develop. Cut costs to extend runway.
        points: 3
        pattern: sunk-cost-doubling-down
        rationale: |
          The instinct to honor the original mission. You raised $17M
          to build a game; pivoting feels like a betrayal of your
          investors' thesis.
        consequence: |
          The next year is brutal. Player numbers don't move. Runway
          runs out. The chat tool dies on the company's servers.
        leadsTo: A-game-survival
      - text: Spin the chat tool out as its own product. Pivot the whole company to it. Tell investors.
        points: 15
        pattern: pivot-from-strength
        rationale: |
          The hardest move emotionally, the right move strategically.
          You're abandoning a five-year bet to chase the only thing your team has built that has real internal pull.
        consequence: |
          You tell the team. Half of them are visibly relieved. You
          pivot the company in 8 weeks.
        leadsTo: B-pivot-followup
      - text: Open the chat tool as a side product but keep the game alive. Diversify the bet.
        points: 6
        pattern: zombie-portfolio
        rationale: |
          The "keep all options open" trap. You burn money on both.
        consequence: |
          Six months later both products are limping. Two senior engineers leave.
        leadsTo: C-zombie-followup

  A-game-survival:
    dimension: business
    prompt: |
      You committed to the game. You have 9 months of runway. You need to boost retention or cut costs.
    options:
      - text: Cut the team by 40% to extend runway to 15 months. Keep building features.
        points: 3
        pattern: cut-to-survive
        rationale: |
          Extends timeline but kills morale.
        consequence: |
          Features ship slower. The game still doesn't grow.
        leadsTo: A-game-marketing
      - text: Launch a massive marketing push with remaining cash to acquire new players.
        points: 0
        pattern: burn-on-marketing
        rationale: |
          Without retention, marketing spend is wasted.
        consequence: |
          A brief spike in users followed by immediate churn. Runway drops to 3 months.
        leadsTo: A-game-marketing

  A-game-marketing:
    dimension: product
    prompt: |
      3 months left. Do you try a crazy feature or shut down?
    options:
      - text: Try a wild new game mode (battle royale style).
        points: 3
        pattern: hail-mary
        rationale: |
          Desperate pivot. Usually too little, too late.
        consequence: |
          The mode is buggy due to rushed development.
        leadsTo: end-A-fail
      - text: Prepare an orderly shutdown and return remaining 5% of capital to investors.
        points: 9
        pattern: graceful-shutdown
        rationale: |
          The responsible choice when you've hit the end.
        consequence: |
          You shut down gracefully.
        leadsTo: end-A-graceful

  B-pivot-followup:
    dimension: product
    prompt: |
      Eight weeks into the pivot. Your first 8 customers love it. Pick the angle for your public launch.
    options:
      - text: Position as 'email killer for teams' — go after the broad knowledge-worker market
        points: 9
        pattern: market-too-broad
        rationale: |
          Massive TAM but hard to win without a wedge.
        consequence: |
          The launch lands soft. Sales cycles are 4-6 months.
        leadsTo: B-growth-strategy-soft
      - text: Position as 'where work happens for software teams' — pick the niche, dominate it first
        points: 15
        pattern: niche-then-expand
        rationale: |
          The correct call. Owning a niche gives immediate revenue.
        consequence: |
          Launch hits Hacker News. By month 6 you have 1,000 paying teams.
        leadsTo: B-growth-strategy-strong
      - text: Stay closed beta. Wait until you have enterprise-ready security and SSO before any launch.
        points: 6
        pattern: perfection-over-presence
        rationale: |
          Competitors gather early adopters while you polish.
        consequence: |
          A competitor launches 8 weeks before you.
        leadsTo: B-growth-strategy-late

  B-growth-strategy-strong:
    dimension: business
    prompt: |
      You've launched to software teams. Inbound is flooding in. How do you price it?
    options:
      - text: Freemium. Free forever for small teams, charge for archive/integrations.
        points: 15
        pattern: freemium-flywheel
        rationale: |
          Reduces friction for bottoms-up adoption.
        consequence: |
          Virality explodes.
        leadsTo: end-B-strong
      - text: Free trial for 30 days, then $10/user/month. No free tier.
        points: 6
        pattern: hard-paywall
        rationale: |
          Hurts the long-term viral loop.
        consequence: |
          Revenue spikes initially, but bottom-up adoption slows.
        leadsTo: end-B-moderate

  B-growth-strategy-soft:
    dimension: business
    prompt: |
      Sales cycles are 4-6 months. How do you course correct?
    options:
      - text: Narrow the ICP immediately to just tech startups. Rewire the landing page.
        points: 12
        pattern: correct-the-niche
        rationale: |
          You recognize the error and narrow focus.
        consequence: |
          Inbound recovers.
        leadsTo: end-B-soft-recovered
      - text: Hire enterprise sales reps to push through the 4-6 month cycles.
        points: 3
        pattern: premature-scaling
        rationale: |
          Scaling sales before nailing positioning burns cash.
        consequence: |
          Sales efficiency is terrible. You burn through your remaining cash.
        leadsTo: end-B-soft

  B-growth-strategy-late:
    dimension: business
    prompt: |
      Competitor launched first. You finally ship with SSO. How do you win back attention?
    options:
      - text: Undercut them on price. Go 50% cheaper.
        points: 3
        pattern: price-war
        rationale: |
          A race to the bottom.
        consequence: |
          You look cheap. Teams stick with the market leader.
        leadsTo: end-B-late
      - text: Lean into your superior UI/UX and focus heavily on user love and organic virality.
        points: 9
        pattern: product-led-rebound
        rationale: |
          Focusing on the product experience can win back users.
        consequence: |
          It's an uphill battle, but you slowly carve out a loyal user base.
        leadsTo: end-B-late-recovered

  C-zombie-followup:
    dimension: founder
    prompt: |
      Six months later. Both products limping. Team is split.
    options:
      - text: Finally kill the game. Focus everyone on the chat tool now.
        points: 9
        pattern: delayed-pivot
        rationale: |
          Better late than never.
        consequence: |
          Team rallies around the chat tool.
        leadsTo: C-late-pivot-strategy
      - text: Keep both, but try to hire a GM for the chat tool to run it independently.
        points: 0
        pattern: abdicate-responsibility
        rationale: |
          Delegating the only working product is fatal.
        consequence: |
          The GM lacks founder authority. The chat tool continues to languish.
        leadsTo: C-late-pivot-strategy

  C-late-pivot-strategy:
    dimension: business
    prompt: |
      You're running low on runway. You need a bridge round to survive.
    options:
      - text: Pitch investors on the chat tool traction to raise a bridge round.
        points: 6
        pattern: bridge-on-traction
        rationale: |
          A tough pitch, but the only viable survival path.
        consequence: |
          You secure a small bridge round on punishing terms.
        leadsTo: end-C-bridge
      - text: Try to sell the company for parts before bankruptcy.
        points: 3
        pattern: fire-sale
        rationale: |
          Giving up early.
        consequence: |
          You sell the assets for pennies on the dollar.
        leadsTo: end-C-fail

  end-A-fail:
    isOutcome: true
    prompt: |
      The hail mary failed. The company went bankrupt.
  end-A-graceful:
    isOutcome: true
    prompt: |
      You shut down gracefully. You maintained investor trust, but the company is over.
  end-B-strong:
    isOutcome: true
    prompt: |
      The pivot defined a category. Within 2 years you were the fastest-growing enterprise software company.
  end-B-moderate:
    isOutcome: true
    prompt: |
      The hard paywall slowed viral growth. You built a solid, profitable business, but left value on the table.
  end-B-soft-recovered:
    isOutcome: true
    prompt: |
      Correcting the niche saved the company. You lost a year but recovered.
  end-B-soft:
    isOutcome: true
    prompt: |
      The pivot worked but the launch fumbled. The company was acqui-hired.
  end-B-late:
    isOutcome: true
    prompt: |
      You built a good product into a market that no longer noticed you.
  end-B-late-recovered:
    isOutcome: true
    prompt: |
      By focusing on product love, you slowly clawed back market share.
  end-C-bridge:
    isOutcome: true
    prompt: |
      You survived with a painful bridge round.
  end-C-fail:
    isOutcome: true
    prompt: |
      The hedge failed. Neither product had full weight. The company was sold for parts.

---
## What actually happened

This drill is based on the **Stewart Butterfield / Tiny Speck → Slack
pivot** in 2013. Tiny Speck had spent four years and $17M building
*Glitch*, a browser-based MMO with a devoted but small player base.
The internal team chat tool — used to coordinate game development —
was beloved by the team but invisible to the world.

Butterfield made the call to **shut down Glitch** and pivot the
entire company to the chat tool, naming it **Slack** (Searchable Log
of All Conversation and Knowledge). The pivot took place over roughly
eight weeks in late 2013. Slack launched publicly in February 2014
positioned squarely at **software teams** as the wedge.

Within 24 months Slack was the fastest-growing SaaS company in
history. **Salesforce acquired Slack for $27.7B in 2021**, making the
Glitch → Slack pivot one of the most studied in startup history.

The principle: pivot from strength, not from desperation. The chat
tool worked because Butterfield's team had been using it daily for
years. They knew the product had to exist — they just had to admit
the game didn't.

**Related reading:** [Slack's pivot from gaming](/case-study/slack-gaming-pivot)
