---
slug: zomato-blinkit-2022
caseStudySlug: zomato-blinkit-bet
type: historical
category: strategic
publishedAt: '2026-12-09T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-12-13T15:00:00+00:00'
year: 2022
estimatedMinutes: 5
principle: |
  When a competitor's adjacent category is growing faster than your
  core, the bet to make is acquisition before they reach scale —
  not parallel-build. By the time you've matched them organically,
  they've captured the consumer habit you needed to compete for.
intro: |
  You are the CEO of a publicly-listed food-delivery company in
  India. Revenue is ~$1B annualized, ~30% YoY growth. Your closest
  competitor is similar size. Both of you are noticing the same
  shift: 10-minute grocery delivery (~$1B category in India, growing
  3x year-over-year) has emerged as a new consumer habit, dominated
  by a 4-year-old startup called Blinkit.

  Blinkit is unprofitable but growing 5x YoY. Your competitor is
  publicly building their own 10-minute grocery vertical
  (Instamart). You have three options on the table. The decision
  affects ~$2B of capital allocation and the company's positioning
  for the next decade.
nodes:
  start:
    dimension: business
    prompt: |
      The 10-min delivery category is real. Pick the move.
    options:
      - text: Acquire Blinkit. ~$570M in stock. Move fast before your competitor matches the scale.
        points: 15
        pattern: acquire-the-leader
        rationale: |
          Defensible aggressive bet. Blinkit has the consumer habit,
          the dark-store infrastructure, and the operational
          muscle that would take you 24-36 months to build
          organically. Your competitor will need similar time.
          Buying the leader at $570M is expensive but cheaper than
          ceding the category. The risk: dilutive issuance for an
          unprofitable acquisition; investors may punish the
          stock short-term.
        consequence: |
          Acquisition closes in Q3 2022. Stock drops ~15% on the
          announcement (dilution + unprofitability concerns). Six
          months in, integration is messy but the consumer habit
          is preserved. Two years later, Blinkit becomes
          contribution-positive and the bet looks prescient.
        leadsTo: A-acquire-followup
      - text: Build organically. Launch a parallel 10-minute service. Compete on operational excellence.
        points: 6
        pattern: build-vs-buy
        rationale: |
          The traditionalist call. You build with your existing
          dark-store knowledge, brand, and capital. Problem:
          time-to-scale is the constraint, not capability. Blinkit
          has a 3-year lead on operational learnings and consumer
          habit. By the time your organic version reaches
          competitive scale, the category is decided.
        consequence: |
          Organic 10-min service launches in 9 months. By month
          18, it has ~12% market share in covered cities. Blinkit
          (now owned by competitor) has 65%. Investors mark down
          the long-term grocery thesis for your stock.
        leadsTo: B-build-followup
      - text: Stay focused on food delivery. Don't enter 10-min grocery. Let the competitor own it.
        points: 3
        pattern: refuse-the-adjacent-bet
        rationale: |
          The "stick to the core" reflex. Defensible-sounding but
          ignores the consumer trend that's reshaping the
          delivery category broadly. Consumers who use 10-min
          grocery start to expect that speed across categories,
          including food. Ceding 10-min grocery doesn't preserve
          food delivery — it weakens it because the competitor
          who owns 10-min grocery has consumer access you don't.
        consequence: |
          Three years later, your competitor (now with Blinkit-
          scale grocery + food delivery) cross-sells more
          effectively. Your food delivery share slowly erodes
          from cross-app gravity.
        leadsTo: C-stay-focused-followup
      - text: Partner with Blinkit. Co-brand integration without acquisition. Cheaper, faster.
        points: 9
        pattern: partnership-instead-of-acquisition
        rationale: |
          Cheaper but structurally weaker. Partnerships in
          consumer-app integration tend to break down at the
          first capital-allocation conflict (whose UX gets
          priority, who owns the customer). Blinkit's
          independence preserves their option to be acquired by
          a competitor — which means your partnership is always
          one quarter from disruption.
        consequence: |
          The partnership ships but feels half-baked in both
          apps. Six months in, your competitor acquires Blinkit.
          The partnership ends. You're back at zero in 10-min
          grocery with less time.
        leadsTo: D-partner-followup
  A-acquire-followup:
    dimension: product
    prompt: |
      Blinkit acquired. Integration in progress. Question: should
      Blinkit stay a separate brand and app, or merge into the
      main food delivery app?
    options:
      - text: Keep separate. Blinkit has its own brand equity in grocery; don't dilute either brand.
        points: 15
        pattern: separate-brands-different-jobs
        rationale: |
          Right answer for category-different jobs. Food delivery
          and 10-min grocery serve genuinely different consumer
          moments (planned meal vs urgent need). Keeping the
          brands separate preserves Blinkit's grocery equity
          while letting your food delivery brand stay focused.
          Backend infrastructure can be shared without forcing
          UX consolidation.
        consequence: |
          Both apps grow independently with shared backend
          efficiencies. Blinkit reaches contribution-positive in
          Q2 of next year. Two-app structure becomes the
          textbook for category-distinct acquisitions.
        leadsTo: A-brand-separate
      - text: Merge into one app. 'Order food and groceries from one place.' Unified UX.
        points: 9
        pattern: merge-for-cross-sell
        rationale: |
          Theoretically efficient, practically messy. Consumer
          habit research shows users want different mental models
          for different jobs — they don't want grocery and food
          in the same flow because the urgency, the basket size,
          and the discovery patterns are different. The merge
          would force a unified UX that hurts both jobs.
        consequence: |
          The merged app launches in 6 months. Friction in both
          flows. Grocery users find the food-delivery flow
          confusing; food users find the grocery flow heavy.
          The two-app structure is restored 12 months later.
        leadsTo: A-brand-merge
  A-brand-separate:
    dimension: product
    prompt: |
      The brands are separate. Now for the logistics fleet: do you merge the delivery fleets or keep them separate?
    options:
      - text: Merge fleets to increase utilization and density.
        points: 15
        pattern: operational-efficiency
        rationale: |
          Shared logistics on the backend is where the real margin is.
        consequence: Fleet utilization goes up, making the unit economics work.
        leadsTo: end-A-great
      - text: Keep fleets entirely separate.
        points: 5
        pattern: over-isolation
        rationale: |
          Separation of brand is good, separation of backend is wasteful.
        consequence: Economics remain tough.
        leadsTo: end-A-mixed
  A-brand-merge:
    dimension: product
    prompt: |
      The merged app is live but users are confused. Orders are dropping.
    options:
      - text: Revert back to two separate apps quickly.
        points: 15
        pattern: swallow-pride
        rationale: Fix the mistake quickly before long term damage.
        consequence: You lose 6 months but recover.
        leadsTo: end-A-mixed
      - text: Force users to adapt. It's the future.
        points: 0
        pattern: arrogance
        rationale: Don't fight consumer habits.
        consequence: Market share plummets.
        leadsTo: end-A-bad
  B-build-followup:
    dimension: business
    prompt: |
      You launched your organic 10-min service. 9 months in, market share is low. Blinkit is pulling away.
    options:
      - text: Burn heavy cash on marketing and discounts to catch up.
        points: 5
        pattern: buying-share
        rationale: Expensive and temporary.
        consequence: You bleed cash, but growth is a sugar high.
        leadsTo: B-marketing
      - text: Focus on extreme density in top 3 cities only.
        points: 15
        pattern: niche-domination
        rationale: If you can't win everywhere, win somewhere.
        consequence: You build a profitable but smaller niche.
        leadsTo: B-niche
  B-marketing:
    dimension: business
    prompt: |
      You are burning cash fast. The board is getting anxious.
    options:
      - text: Keep burning. We must win.
        points: 0
        pattern: sunk-cost
        rationale: You are throwing good money after bad.
        consequence: The unit economics collapse.
        leadsTo: end-B
      - text: Stop the discounts, focus on retention.
        points: 10
        pattern: course-correct
        rationale: Smart, but it's too late to win the category.
        consequence: You settle for second place.
        leadsTo: end-B
  B-niche:
    dimension: strategy
    prompt: |
      You own the top 3 cities, but the competitor owns the rest of the country.
    options:
      - text: Expand slowly, city by city.
        points: 15
        pattern: methodical-growth
        rationale: Safe and sustainable.
        consequence: You remain a strong secondary player.
        leadsTo: end-B-niche
      - text: Launch nationwide simultaneously now.
        points: 0
        pattern: premature-scaling
        rationale: You lack the operational infrastructure.
        consequence: Quality drops, you lose the top 3 cities too.
        leadsTo: end-B
  C-stay-focused-followup:
    dimension: product
    prompt: |
      You stayed focused on food delivery. Your cross-category competitor is stealing your users via their grocery app.
    options:
      - text: Launch an aggressive loyalty program.
        points: 10
        pattern: defensive-loyalty
        rationale: Good defense, but doesn't solve the core missing category.
        consequence: It slows the bleed.
        leadsTo: C-loyalty
      - text: Cut food delivery fees to zero to regain volume.
        points: 0
        pattern: race-to-bottom
        rationale: Destroys your core margins.
        consequence: You start losing money on your only business.
        leadsTo: C-fees
  C-loyalty:
    dimension: product
    prompt: |
      The loyalty program is expensive.
    options:
      - text: Subsidize it with ad revenue from restaurants.
        points: 15
        pattern: smart-monetization
        rationale: Offset costs creatively.
        consequence: Margins stabilize.
        leadsTo: end-C
      - text: Pass costs to restaurants.
        points: 0
        pattern: squeeze-supply
        rationale: Restaurants revolt.
        consequence: You lose supply side.
        leadsTo: end-C
  C-fees:
    dimension: business
    prompt: |
      Zero fees are killing your P&L.
    options:
      - text: Raise fees back up slowly.
        points: 10
        pattern: slow-recovery
        rationale: Better late than never.
        consequence: You lose users again, but stop bleeding.
        leadsTo: end-C-margin
      - text: Keep them at zero, pray for volume.
        points: 0
        pattern: hopium
        rationale: Volume won't fix negative unit economics.
        consequence: Bankruptcy looming.
        leadsTo: end-C-margin
  D-partner-followup:
    dimension: strategy
    prompt: |
      The partnership ships. Six months in, your competitor makes an outright acquisition bid for Blinkit.
    options:
      - text: Make an aggressive counter-bid to acquire them now.
        points: 10
        pattern: late-reaction
        rationale: You now have to pay a massive premium over what it would have cost 6 months ago.
        consequence: You win the bid, but overpay severely.
        leadsTo: D-counter
      - text: Let the competitor acquire them.
        points: 0
        pattern: surrender
        rationale: You lose the category.
        consequence: You are back at zero.
        leadsTo: D-letgo
  D-counter:
    dimension: strategy
    prompt: |
      You won the bid, but investors are furious about the price.
    options:
      - text: Keep Blinkit independent to protect its growth.
        points: 15
        pattern: protect-the-asset
        rationale: Don't mess with what you just overpaid for.
        consequence: It works out eventually.
        leadsTo: end-D-expensive
      - text: Merge it immediately to show 'synergies'.
        points: 0
        pattern: forced-synergy
        rationale: Destroys the value.
        consequence: Complete disaster.
        leadsTo: end-D
  D-letgo:
    dimension: strategy
    prompt: |
      Competitor owns Blinkit. You need a grocery play.
    options:
      - text: Build organically from scratch now.
        points: 5
        pattern: way-too-late
        rationale: You are years behind.
        consequence: Waste of money.
        leadsTo: end-D
      - text: Acquire the 3rd place player.
        points: 10
        pattern: sloppy-seconds
        rationale: Best bad option left.
        consequence: You remain a distant second.
        leadsTo: end-D
  end-A-great:
    isOutcome: true
    prompt: |
      The Blinkit acquisition + separate-brand strategy became one
      of the most successful adjacent-category bets in Indian
      consumer tech. By 2024, Blinkit was contribution-positive,
      the food delivery brand stayed focused, and the parent
      company's stock recovered to all-time highs.
  end-A-mixed:
    isOutcome: true
    prompt: |
      Acquisition correct, execution rocky. The friction cost growth in both categories. The
      eventual two-app restoration worked, just later than
      necessary.
  end-A-bad:
    isOutcome: true
    prompt: |
      Acquisition right, execution fatal. Merging the apps destroyed Blinkit's magic.
  end-B:
    isOutcome: true
    prompt: |
      Build-organically came too late. Your competitor's
      acquisition of the same category leader gave them 3 years
      of compounding advantage you never closed. Stock
      underperformed.
  end-B-niche:
    isOutcome: true
    prompt: |
      You built a profitable but small grocery business in a few cities.
  end-C:
    isOutcome: true
    prompt: |
      Staying-focused on food delivery preserved short-term
      margins but lost long-term consumer share. The cross-
      category competitor compounded; your single-category
      growth slowed.
  end-C-margin:
    isOutcome: true
    prompt: |
      You destroyed your margins trying to defend your core without expanding.
  end-D:
    isOutcome: true
    prompt: |
      The partnership fell apart when the competitor acquired
      Blinkit outright. You restarted in 10-min grocery at a
      structural disadvantage. 
  end-D-expensive:
    isOutcome: true
    prompt: |
      You got the asset, but overpaid wildly because you waited too long.
---
## What actually happened

This drill is based on **Zomato's acquisition of Blinkit in 2022**.
In June 2022, Zomato announced the acquisition of Blinkit (formerly
Grofers) for approximately **$570M in an all-stock deal**. The
stock dropped ~15% on the announcement due to dilution concerns
and Blinkit's unprofitability.

Zomato kept Blinkit as a separate brand and app, sharing backend
infrastructure but preserving distinct UX for the food delivery
and 10-minute grocery jobs. By Q4 2023, Blinkit had reached
contribution-positive margins and was growing 100%+ YoY.

By 2024, Blinkit was widely considered the most successful
acquisition in Indian consumer tech of the decade. The bet looked
prescient: Swiggy (the competitor) was building Instamart in
parallel but couldn't catch Blinkit's category lead. Zomato's
stock recovered to all-time highs on the strength of the combined
food + grocery thesis.

The principle: when a competitor's adjacent category is growing
faster than your core, acquire the leader before they reach scale
— even if it looks expensive in the moment.

**Related reading:** [Zomato's Blinkit bet](/case-study/zomato-blinkit-bet)
