---
slug: quibi-pricing-2020
caseStudySlug: quibi-shutdown
type: historical
category: pricing
publishedAt: '2026-10-21T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-10-28T15:00:00+00:00'
year: 2020
estimatedMinutes: 5
principle: |
  A premium price requires a premium use case. If your product
  doesn't have a clear "why now and why this" moment for the user,
  charging more than alternatives is a moat-killer, not a moat-builder.
intro: |
  You are the head of growth at a new streaming startup. The product:
  ~10-minute "quick bites" of premium-quality video content
  (scripted shows, Hollywood production values, A-list stars),
  designed exclusively for mobile-vertical viewing during commute
  moments. You have $1.75B in raised capital and 50+ shows in the
  pipeline.

  Two pricing decisions on the table:
  1. Subscription price: $4.99/month with ads or $7.99 ad-free
  2. Distribution: mobile-only, or also TV/web?

  Launch is in 90 days. Netflix is $13/mo, Disney+ is $7/mo, HBO Max
  is $15/mo, YouTube is free. The pandemic has just hit; commute time
  has dropped to near-zero.
nodes:
  start:
    dimension: business
    prompt: |
      You have launch terms to set. Pick.
    options:
      - text: 'Launch as planned: $4.99 with ads, $7.99 ad-free, mobile-only, premium short-form.'
        points: 3
        pattern: ignore-market-shift
        rationale: |
          Ignores the most important fact: commute time has just collapsed.
        consequence: |
          Launch lands with strong press but lukewarm retention.
        leadsTo: A-launch-followup
      - text: Postpone launch by 6 months. Reposition for a post-pandemic moment when commute returns.
        points: 12
        pattern: wait-for-the-thesis-to-return
        rationale: |
          Defensible patience.
        consequence: |
          You postpone.
        leadsTo: B-postpone-followup
      - text: 'Pivot positioning: drop the commute frame. Make it premium short-form for any device.'
        points: 15
        pattern: reposition-product
        rationale: |
          Right adaptive call.
        consequence: |
          You ship web, TV apps, and mobile in parallel.
        leadsTo: C-reposition-followup
      - text: Drop the price to $2.99 with ads. Compete with TikTok and YouTube for attention.
        points: 3
        pattern: race-to-the-bottom
        rationale: |
          Wrong axis.
        consequence: |
          Subscriber count grows but ARPU collapses.
        leadsTo: D-price-war

  A-launch-followup:
    dimension: product
    prompt: |
      You launched as planned. Retention is plummeting because users are stuck at home.
    options:
      - text: Rush out a screen-casting feature so users can cast from phone to TV.
        points: 6
        pattern: band-aid-fix
        rationale: |
          A necessary feature, but doesn't fix the core content formatting issues.
        consequence: |
          It helps slightly, but churn remains high.
        leadsTo: A-panic-mode
      - text: Double down on mobile-only marketing. Try to invent new "at-home" mobile use cases.
        points: 0
        pattern: denial
        rationale: |
          Forcing user behavior never works.
        consequence: |
          Marketing spend is entirely wasted.
        leadsTo: A-panic-mode

  A-panic-mode:
    dimension: business
    prompt: |
      Six months in. You are burning cash rapidly. Shutdown is imminent.
    options:
      - text: Sell the content library to Roku or Apple immediately.
        points: 9
        pattern: salvage-value
        rationale: |
          Recoup what you can for investors.
        consequence: |
          You sell the library for a fraction of its cost.
        leadsTo: end-A-salvage
      - text: Keep trying to raise more money to pivot.
        points: 0
        pattern: throwing-good-money-after-bad
        rationale: |
          No investor will touch this.
        consequence: |
          You burn down to $0 and shut down abruptly.
        leadsTo: end-A-zero

  B-postpone-followup:
    dimension: business
    prompt: |
      You postponed 6 months. Commutes are partially back.
    options:
      - text: Launch exactly the original mobile-only product.
        points: 3
        pattern: failure-to-adapt
        rationale: |
          You waited, but didn't improve the offering.
        consequence: |
          Launch is mediocre.
        leadsTo: B-new-launch
      - text: Spend the 6 months building TV apps to launch as multi-platform.
        points: 12
        pattern: productive-delay
        rationale: |
          Using the delay to expand the addressable market.
        consequence: |
          Launch is much stronger across devices.
        leadsTo: B-new-launch

  B-new-launch:
    dimension: product
    prompt: |
      You are launching now.
    options:
      - text: Maintain the $7.99 premium pricing.
        points: 9
        pattern: defend-premium
        rationale: |
          You need ARPU to cover content costs.
        consequence: |
          Growth is slow but economics are better.
        leadsTo: end-B-premium
      - text: Drop to $4.99 ad-free to simulate growth.
        points: 3
        pattern: panic-pricing
        rationale: |
          Destroys your unit economics.
        consequence: |
          You get users but bleed cash.
        leadsTo: end-B-cheap

  C-reposition-followup:
    dimension: product
    prompt: |
      Repositioned to "premium short-form for any device." Web + TV apps shipped.
    options:
      - text: Stay premium. The differentiation is the production value.
        points: 12
        pattern: premium-or-nothing
        rationale: |
          Right call. Going downstream erases differentiation.
        consequence: |
          Subscriber growth is steady but slow.
        leadsTo: C-content-strategy
      - text: Add a creator-tier. Open the platform to creators making 10-minute premium content.
        points: 15
        pattern: marketplace-as-flywheel
        rationale: |
          Best long-term move.
        consequence: |
          Creator-tier launches in 6 months. Catalog grows 10x.
        leadsTo: C-content-strategy

  C-content-strategy:
    dimension: business
    prompt: |
      You have your platform. What is the long-term play?
    options:
      - text: Focus on deep engagement and high retention in your niche.
        points: 12
        pattern: build-a-moat
        rationale: |
          A strong, loyal niche is better than a weak broad audience.
        consequence: |
          You build a highly profitable specialty service.
        leadsTo: end-C-good
      - text: Try to acquire massive cultural scale by buying sports rights.
        points: 3
        pattern: overreach
        rationale: |
          You cannot outbid Amazon and Apple for sports.
        consequence: |
          You burn billions and fail to win the bids.
        leadsTo: end-C-overreach

  D-price-war:
    dimension: business
    prompt: |
      You dropped the price. Sub count is up, but ARPU is terrible.
    options:
      - text: Start stuffing the app with aggressive, unskippable ads.
        points: 0
        pattern: hostile-monetization
        rationale: |
          Users will immediately churn to TikTok.
        consequence: |
          Subscribers flee.
        leadsTo: D-cash-crunch
      - text: Try to slowly raise the price back to $4.99.
        points: 6
        pattern: boil-the-frog
        rationale: |
          Difficult to pull off without adding immense new value.
        consequence: |
          High churn upon price increase.
        leadsTo: D-cash-crunch

  D-cash-crunch:
    dimension: founder
    prompt: |
      You are running out of cash fast.
    options:
      - text: File for bankruptcy immediately.
        points: 3
        pattern: give-up
        rationale: |
          The end of the line.
        consequence: |
          Company closes.
        leadsTo: end-D-bankrupt
      - text: Do a massive layoff and try to pivot to a B2B video platform.
        points: 6
        pattern: desperate-pivot
        rationale: |
          Extremely hard to pivot a B2C content company to B2B SaaS.
        consequence: |
          You fail, but you tried.
        leadsTo: end-D-fail

  end-A-salvage:
    isOutcome: true
    prompt: |
      You shut down 6 months in, returning ~$350M to shareholders. Roku bought the library.
  end-A-zero:
    isOutcome: true
    prompt: |
      You burned it all. A massive failure.
  end-B-premium:
    isOutcome: true
    prompt: |
      Postponing worked okay. You exist as a niche player.
  end-B-cheap:
    isOutcome: true
    prompt: |
      You ran out of money due to poor unit economics.
  end-C-good:
    isOutcome: true
    prompt: |
      Repositioning produced a sustainable, profitable niche business.
  end-C-overreach:
    isOutcome: true
    prompt: |
      You overreached and destroyed your profitable niche by burning cash on sports rights.
  end-D-bankrupt:
    isOutcome: true
    prompt: |
      Racing to the bottom on price killed the company quickly.
  end-D-fail:
    isOutcome: true
    prompt: |
      The desperate B2B pivot failed. The company is dead.
---
## What actually happened

This drill is based on **Quibi's launch in April 2020**. Jeffrey
Katzenberg and Meg Whitman raised **$1.75B** to launch a premium
short-form mobile video service. The pricing was $4.99 with ads or
$7.99 ad-free, mobile-vertical only.

The pandemic launched simultaneously, killing the commute use case
the entire product thesis depended on. Quibi did not reposition,
did not expand to TV/web on launch, and did not adapt the content
strategy to the new context. The product shut down in **October
2020**, six months after launch, returning ~$350M to shareholders
out of the $1.75B raised — one of the largest VC-backed shutdowns
in entertainment history.

The lesson: premium pricing requires a premium use case. When the
use case disappears (or never existed strongly), the price becomes
the moat-killer, not the moat-builder.

**Related reading:** [Quibi: the $1.75B shutdown](/case-study/quibi-shutdown)
