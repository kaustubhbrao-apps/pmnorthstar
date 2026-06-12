---
slug: netflix-dvd-streaming-bet-2007
caseStudySlug: netflix-dvd-to-streaming
type: historical
category: strategic
publishedAt: '2026-09-13T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-09-16T15:00:00+00:00'
year: 2007
estimatedMinutes: 7
principle: |
  The hardest strategic move is cannibalizing your most profitable
  business before someone else does. Companies that protect the profit
  pool always lose to companies that race themselves into the next one.
  The Innovator's Dilemma isn't a theory — it's a calendar problem.
intro: |
  You are the CEO of a publicly-traded mail-order DVD rental company.
  ~$1B in annual revenue, profitable, market leader. Your business
  is at peak: 7M subscribers, ~95% gross margin on each DVD rented
  through the postal system. Wall Street loves you.

  Two facts on your desk this quarter:
  1. Broadband adoption just crossed a threshold — ~50% of US homes
  have connections fast enough to stream low-quality video on demand.
  2. Internal R&D has built a working streaming prototype. It works
  technically but the catalog is tiny (~1,000 titles vs. your 100K+
  DVD catalog) and the content licensing terms for streaming are
  brutal — studios will charge 3-5x more per stream than per DVD
  rental.

  Your CFO presents three scenarios for the next board meeting.
nodes:
  start:
    dimension: founder
    prompt: |
      The DVD business is at peak profitability. Streaming is coming
      but the unit economics are terrible today. Pick.
    options:
      - text: Stay focused on DVDs. Streaming will get viable in 3-4 years. Maximize the profit window.
        points: 3
        pattern: defend-the-profit-pool
        rationale: |
          The instinct that kills incumbents. You'd be choosing to
          maximize quarterly earnings while a structural shift moves
          under you.
        consequence: |
          The next 3 years of DVD profits are excellent. By year 4, a
          competitor has 20M subscribers. Your DVD business starts to shrink.
        leadsTo: A-dvd-doubledown
      - text: Launch streaming as a free add-on to the DVD subscription. Same price, both included.
        points: 15
        pattern: cannibalize-yourself-first
        rationale: |
          The contrarian move. You're effectively saying: "the DVD
          business will be cannibalized — better that we do it on our
          own terms than someone else's."
        consequence: |
          You announce the free streaming add-on. DVD subs barely
          notice; ~30% try streaming in the first month.
        leadsTo: B-bundle-followup
      - text: Split the company. Two CEOs, two brands, two stock tickers. Let each compete on its own terms.
        points: 6
        pattern: spin-off-too-early
        rationale: |
          Theoretically clean — eliminates internal conflict.
          Practically expensive and premature.
        consequence: |
          The split happens. Customers are confused about which brand
          is which. The streaming entity struggles to raise capital.
        leadsTo: C-spinoff-survival
      - text: Charge separately for streaming. New tier, $2/month add-on.
        points: 6
        pattern: monetize-the-transition
        rationale: |
          The "extract revenue from both" instinct. Wall Street loves
          this but you create customer-decision friction.
        consequence: |
          Streaming attach rate hits ~12% in year one. Stock looks fine
          quarterly, but long-term adoption is slow.
        leadsTo: D-paid-streaming
  A-dvd-doubledown:
    dimension: business
    prompt: |
      It's 3 years later. Your DVD business has generated massive cash flow, but subscriber growth flatlined. Streaming competitors are huge. The board is anxious. What is your strategy?
    options:
      - text: Use the DVD cash flow to aggressively acquire a mid-sized streaming competitor.
        points: 5
        pattern: buy-your-way-in
        rationale: |
          A classic late-incumbent move. You try to use capital to buy back time.
        consequence: |
          You buy a streaming competitor for a premium. Wall street likes it temporarily.
        leadsTo: A-acquire-integrate
      - text: Launch an internal skunkworks project to build a next-gen streaming platform.
        points: 2
        pattern: internal-catchup
        rationale: |
          Building from scratch when competitors are scaling means you are 2 years behind.
        consequence: |
          The skunkworks project takes 24 months. Market is saturated.
        leadsTo: A-skunkworks-launch
  A-acquire-integrate:
    dimension: product
    prompt: |
      You acquired the competitor. How do you integrate them?
    options:
      - text: Keep them as a separate brand to avoid culture clash.
        points: 6
        pattern: portfolio-approach
        rationale: |
          Prevents culture clash but fails to leverage your existing DVD subscriber base.
        consequence: |
          The streaming brand grows decently, but Netflix as a core brand becomes irrelevant.
        leadsTo: end-A-separate
      - text: Force a tight integration and rebrand them immediately.
        points: 0
        pattern: crush-the-acquisition
        rationale: |
          Forcing a modern tech stack onto legacy billing systems causes massive outages.
        consequence: |
          Key engineers leave. You write down the acquisition.
        leadsTo: end-A-failed-acquisition
  A-skunkworks-launch:
    dimension: business
    prompt: |
      Your internal platform is ready but has no users and little content. Go to market strategy?
    options:
      - text: Offer it to existing DVD subscribers for a steep discount.
        points: 4
        pattern: discount-conversion
        rationale: |
          Better late than never, but competitors have locked up the best content.
        consequence: |
          You get a small fraction to convert. The economics barely work.
        leadsTo: end-A-late-niche
      - text: Market it as a premium 'criterion collection' for cinephiles.
        points: 8
        pattern: niche-retreat
        rationale: |
          Retreating to a profitable niche is a defensible survival tactic.
        consequence: |
          You become a respected niche player, but lose the mass market.
        leadsTo: end-A-niche
  B-bundle-followup:
    dimension: business
    prompt: |
      Three years into the streaming bundle. ~40M total subscribers,
      ~70% now stream regularly. Content costs are exploding. You need
      to decide content strategy.
    options:
      - text: Pour profits into original content. Become a studio.
        points: 15
        pattern: vertical-integration-as-survival
        rationale: |
          The bet that defines the next decade. Original content creates a moat.
        consequence: |
          Year 1: ~$2B spent. Year 3: a flagship series defines the category.
        leadsTo: B-original-strategy
      - text: Stay licensing-only. Keep capital efficient.
        points: 6
        pattern: feature-not-content
        rationale: |
          Capital-efficient but doomed. The studios you license from will become competitors.
        consequence: |
          By year 5, major studios pull their catalogs.
        leadsTo: B-licensing-crisis
  B-original-strategy:
    dimension: product
    prompt: |
      You are committing to original content. A renowned director pitches a political drama, wanting $100M for two seasons upfront without a pilot.
    options:
      - text: Use proprietary user viewing data to validate the bet, then write the check.
        points: 15
        pattern: data-driven-conviction
        rationale: |
          Using data to derisk massive creative bets is the ultimate tech-first advantage.
        consequence: |
          The show is a massive hit.
        leadsTo: end-B-great
      - text: Reject the upfront demand. Insist on a traditional pilot episode.
        points: 5
        pattern: traditional-hollywood-model
        rationale: |
          Acting like a traditional network loses you the speed to poach top talent.
        consequence: |
          The director takes the show to HBO.
        leadsTo: end-B-mediocre-originals
  B-licensing-crisis:
    dimension: business
    prompt: |
      Studios are pulling content. Your catalog is shrinking. Emergency play?
    options:
      - text: Pivot late into original content, focusing on cheap reality TV.
        points: 4
        pattern: cheap-padding
        rationale: |
          Fills the catalog but damages brand prestige.
        consequence: |
          Churn increases as prestige shows disappear.
        leadsTo: end-B-reality-tv
      - text: Double down on licensing from independent/international studios.
        points: 10
        pattern: international-arbitrage
        rationale: |
          Finding undervalued global content builds a highly engaged niche audience.
        consequence: |
          You survive as a platform globally.
        leadsTo: end-B-international-niche
  C-spinoff-survival:
    dimension: founder
    prompt: |
      The split caused massive confusion. Users hate managing two queues. Do you stay the course?
    options:
      - text: Apologize publicly and instantly reverse the split.
        points: 10
        pattern: swallow-pride
        rationale: |
          Reversing a terrible decision quickly is a sign of strong leadership.
        consequence: |
          You take a PR hit but stabilize the core business.
        leadsTo: C-reverse-split
      - text: Stay the course. The market will eventually understand.
        points: 0
        pattern: stubborn-vision
        rationale: |
          Ignoring customer churn because you believe your vision is 'cleaner' is how companies die.
        consequence: |
          You lose 1M subscribers in a quarter.
        leadsTo: C-stubborn-split
  C-reverse-split:
    dimension: product
    prompt: |
      You reversed the split. How do you win back consumer trust?
    options:
      - text: Implement a massive price cut for the bundle.
        points: 3
        pattern: price-bandaid
        rationale: |
          Price cuts damage unit economics. Product must be the draw.
        consequence: |
          You win users back but destroy margins.
        leadsTo: end-C-low-margin
      - text: Fast-track a highly anticipated exclusive original series.
        points: 12
        pattern: content-as-savior
        rationale: |
          Great content makes people forget PR blunders.
        consequence: |
          The conversation shifts to your new hit show.
        leadsTo: end-C-content-save
  C-stubborn-split:
    dimension: business
    prompt: |
      Churn is devastating. What now?
    options:
      - text: Sell the DVD business to private equity to inject cash into streaming.
        points: 8
        pattern: sell-the-past
        rationale: |
          A pragmatic move. Get rid of distraction and get cash.
        consequence: |
          Streaming gets a lifeline but is permanently weakened.
        leadsTo: end-C-sold-dvd
      - text: Seek an emergency buyout of the entire company by a tech giant.
        points: 4
        pattern: capitulation
        rationale: |
          You've lost the ability to lead the market.
        consequence: |
          You are acquired at a massive discount.
        leadsTo: end-C-acquired
  D-paid-streaming:
    dimension: product
    prompt: |
      The $2 add-on has a slow attach rate. Streaming natives are growing faster.
    options:
      - text: Make the streaming tier the default, and make DVDs the $2 add-on.
        points: 12
        pattern: flip-the-default
        rationale: |
          Correctly aligns product with the future.
        consequence: |
          Streaming adoption spikes. DVD usage declines.
        leadsTo: D-streaming-default
      - text: Keep pricing, but invest heavily in exclusive streaming content.
        points: 6
        pattern: content-justification
        rationale: |
          Trying to fix a pricing problem with a content solution is expensive.
        consequence: |
          Attach rates improve slightly, but capital efficiency is terrible.
        leadsTo: D-expensive-add-on
  D-streaming-default:
    dimension: business
    prompt: |
      You face intense competition from Hulu. How do you differentiate?
    options:
      - text: Focus entirely on ad-free, binge-watching experiences.
        points: 15
        pattern: UX-differentiator
        rationale: |
          Binge-watching fundamentally changes consumer expectations.
        consequence: |
          You invent the modern streaming experience.
        leadsTo: end-D-binge-model
      - text: Adopt a weekly release schedule with ads to match network models.
        points: 5
        pattern: copy-the-networks
        rationale: |
          You lose the unique value proposition of internet TV.
        consequence: |
          You become just another cable channel.
        leadsTo: end-D-mediocre
  D-expensive-add-on:
    dimension: business
    prompt: |
      Content costs are rising, and the $2 add-on isn't covering it.
    options:
      - text: Capitulate and make streaming free for all DVD subscribers.
        points: 8
        pattern: late-bundle
        rationale: |
          Right move, years late.
        consequence: |
          You get a bump in usage but are a secondary player.
        leadsTo: end-D-late-bundle
      - text: Raise the add-on price to $5.
        points: 0
        pattern: death-spiral-pricing
        rationale: |
          Raising prices on a struggling product causes mass cancellations.
        consequence: |
          Attach rate plummets to near zero.
        leadsTo: end-D-death-spiral
  end-A-separate:
    isOutcome: true
    prompt: |
      By keeping the acquired streaming company separate, Netflix became a relic associated only with DVDs. The core company faded into obscurity.
  end-A-failed-acquisition:
    isOutcome: true
    prompt: |
      The forced integration destroyed the acquisition. You spent billions to buy a company only to break it.
  end-A-late-niche:
    isOutcome: true
    prompt: |
      The internal streaming platform launched too late. You missed the boat entirely.
  end-A-niche:
    isOutcome: true
    prompt: |
      Retreating to a cinephile niche was the only survival option left. You run a profitable, small business.
  end-B-great:
    isOutcome: true
    prompt: |
      The free-bundle plus data-driven original-content strategy made you the defining company of the streaming era. ~250M subscribers globally within a decade.
  end-B-mediocre-originals:
    isOutcome: true
    prompt: |
      By acting like a traditional Hollywood studio, you lost the agility of a tech company. Your originals were mediocre.
  end-B-reality-tv:
    isOutcome: true
    prompt: |
      You survived by pivoting to cheap reality TV, but the brand prestige was destroyed.
  end-B-international-niche:
    isOutcome: true
    prompt: |
      Pivoting to international content was a smart survival tactic. You built a robust, defensible global business.
  end-C-low-margin:
    isOutcome: true
    prompt: |
      The price cuts won back the users but destroyed your margins. You spent years trying to dig out of the financial hole.
  end-C-content-save:
    isOutcome: true
    prompt: |
      A hit original show saved the company from the PR disaster of the split. You survived and thrived.
  end-C-sold-dvd:
    isOutcome: true
    prompt: |
      Selling the DVD business provided the lifeline needed for streaming to survive. It was a painful amputation, but it saved the patient.
  end-C-acquired:
    isOutcome: true
    prompt: |
      The split was a fatal error. With churn out of control, selling the company to a tech giant was the only way to avoid bankruptcy.
  end-D-binge-model:
    isOutcome: true
    prompt: |
      Flipping the default to streaming and inventing the ad-free, binge-watching model was brilliant. You defined the category.
  end-D-mediocre:
    isOutcome: true
    prompt: |
      By copying the networks with weekly releases, you remained a minor player in a crowded market.
  end-D-late-bundle:
    isOutcome: true
    prompt: |
      You eventually bundled streaming, but it was too late. You survived, but never led the category.
  end-D-death-spiral:
    isOutcome: true
    prompt: |
      Raising prices to cover costs on a failing product triggered a death spiral. A complete failure.
---
## What actually happened

This drill is based on **Netflix's 2007-2010 streaming pivot**. Reed
Hastings and the Netflix leadership made the call in 2007 to bundle
streaming free with the DVD subscription — a deliberately cannibalizing
move when DVDs were ~95% gross margin and streaming was barely viable
unit-economically.

Wall Street initially punished the stock; the Netflix board reportedly
debated the move for months. The 2011 spinoff attempt (creating Qwikster
for DVDs) is generally considered the worst version of the strategy —
which Hastings later publicly apologized for and reversed within
weeks. The free-bundle strategy plus the **shift to original content
starting in 2013 with House of Cards** defined the modern streaming
industry.

Netflix grew from ~7M subscribers in 2007 to **280M+ in 2024**, with
a peak market cap above **$300B**. The DVD-by-mail business was
formally shut down in **September 2023**, with Hastings closing the
operation himself.

The principle Reed Hastings articulated: *"We had to disrupt our own
DVD-by-mail business before someone else did. That was the entire
strategic insight."*

**Related reading:** [Netflix's DVD-to-streaming pivot](/case-study/netflix-dvd-to-streaming)
