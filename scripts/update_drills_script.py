import os

drills_dir = "/Users/Amber_User/downloads/northstar/content/drills"

netflix_content = r"""---
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
"""

moviepass_content = r"""---
slug: moviepass-unlimited-pricing-2017
type: historical
category: business
year: 2017
estimatedMinutes: 15
publishedAt: '2026-09-09T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-09-13T15:00:00+00:00'
principle: |
  Unit economics cannot be ignored by sheer scale. Subsidizing heavy usage without a clear, mathematical path to monetization is a death spiral, not a growth strategy. "We'll figure it out later" works in software where marginal cost is zero; it is fatal in real-world retail where marginal cost is $12 a ticket.
intro: |
  It is August 2017. You are part of the leadership team at MoviePass. The company has been struggling for years with various pricing models, trying to build a viable subscription service for theatrical movies. Growth has been stagnant at around 20,000 users.
  
  A new CEO and majority investor (Helios and Matheson Analytics) have just arrived with a radical, explosive idea: drop the price to $9.95 per month for an unlimited movie ticket every single day. 
  
  The hypothesis is simple: achieve massive, unprecedented scale overnight, change consumer behavior to make them go to the movies more often, and then use that massive audience leverage to force theater chains (like AMC) into revenue-sharing agreements, or monetize the massive data pool of moviegoer habits.
  
  The fundamental math is terrifying. You pay retail price (average $12-$15) for every ticket your users buy using the MoviePass debit card. If a user sees two movies a month, you lose money. If they see ten, you bleed cash. 
  
  The $9.95 launch is imminent, and the servers are already groaning under the weight of anticipation.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: business
    prompt: |
      The $9.95/month unlimited plan goes live, and the response is overwhelming. You hit 1 million subscribers in just a few months, far exceeding the wildest projections. 
      
      However, the cash burn is apocalyptic. You are losing millions of dollars a week because power users are seeing 15 movies a month. 
      
      AMC Theaters, the largest chain, has publicly declared war on you, calling the model unsustainable and refusing to negotiate any discount on tickets. What is your immediate strategy to manage the burn?
    options:
      - text: "Implement friction immediately. Restrict repeat viewings of the same movie, require ticket stub photos to prevent fraud."
        points: 15
        pattern: survive-the-burn
        rationale: |
          You must stem the bleeding immediately, even if it hurts the user experience and slows growth. 
        consequence: |
          Users are furious. Reddit goes crazy. But your daily cash burn drops by 35%. You buy yourself another quarter of runway.
        leadsTo: implement_friction
      - text: "Double down on growth. Raise more capital through public stock offerings, keep the unlimited promise pure."
        points: 0
        pattern: delusional-scale
        rationale: |
          Ignoring unit economics at this scale accelerates the death spiral.
        consequence: |
          You hit 3 million subscribers. Your burn rate hits $20 million a month. The stock price begins to wobble.
        leadsTo: double_down
      - text: "Try to monetize the data immediately. Sell user location and viewing habits to studios."
        points: 3
        pattern: false-savior
        rationale: |
          Data monetization is a margin-enhancer, not a replacement for a broken core business model.
        consequence: |
          You make $500k selling data, while burning $15M in ticket costs. It's a drop in the bucket.
        leadsTo: double_down
  implement_friction:
    dimension: product
    prompt: |
      The friction reduces the burn slightly, but users feel like it's a bait-and-switch. The app's ratings plummet, and churn spikes. 
      You need a sustainable path forward.
    options:
      - text: "Pivot to a tiered model: $9.95 for 3 movies a month."
        points: 15
        pattern: rational-pricing
        rationale: |
          A capped model provides predictable costs. Breakage makes economics viable.
        consequence: |
          You lose 40% of your user base overnight. But remaining users stabilize economics.
        leadsTo: tiered_execution
      - text: "Keep the unlimited model, but introduce 'surge pricing' for popular movies."
        points: 0
        pattern: punitive-pricing
        rationale: |
          Surge pricing on top of a subscription feels deeply punitive.
        consequence: |
          The backlash is immense. Churn accelerates faster without fixing underlying economics.
        leadsTo: surge_execution
  tiered_execution:
    dimension: business
    prompt: |
      You stabilized the economics, but theaters now launch their own competing subscriptions (e.g., AMC A-List). How do you respond?
    options:
      - text: "Partner with independent theaters to offer exclusive perks."
        points: 15
        pattern: indie-partnership
        rationale: |
          You can't fight major chains. Aligning with independents who need the foot traffic is the only viable path.
        consequence: |
          You build a loyal niche following among indie theaters.
        leadsTo: end-tiered-niche
      - text: "Start producing your own original movies (MoviePass Films) to own the content."
        points: 0
        pattern: overextension
        rationale: |
          Producing movies is incredibly expensive and risky. Doing it when you just barely stabilized is suicidal.
        consequence: |
          You burn your remaining cash on flop movies and go bankrupt.
        leadsTo: end-tiered-bankrupt
  surge_execution:
    dimension: product
    prompt: |
      Surge pricing causes a PR disaster. Users are screenshotting $8 surge fees on a $10 ticket. Churn is massive.
    options:
      - text: "Roll back surge pricing immediately and implement a strict 3-movie/month cap."
        points: 5
        pattern: late-rollback
        rationale: |
          Admitting a mistake quickly can save the company, though the brand damage is done.
        consequence: |
          You stabilize operations but lose the hypergrowth halo permanently.
        leadsTo: end-surge-saved
      - text: "Double down on surge, claiming it's 'dynamic demand management' and try to gamify it."
        points: 0
        pattern: stubborn-gamification
        rationale: |
          Users hate surge pricing. Gamifying it just makes them feel manipulated.
        consequence: |
          Power users find workarounds, average users quit. Company collapses.
        leadsTo: end-surge-death
  double_down:
    dimension: founder
    prompt: |
      You raised more money, but the cash incinerator is running too hot. It is late July 2018 (Mission Impossible: Fallout opening weekend). You literally run out of cash. Debit cards stop working at theaters.
    options:
      - text: "Halt the service immediately, declare bankruptcy."
        points: 15
        pattern: accept-reality
        rationale: |
          Operating while insolvent is legally dangerous and morally bankrupt.
        consequence: |
          You file for Chapter 11. It's a humiliating end.
        leadsTo: bankruptcy_handling
      - text: "Take out a high-interest emergency loan ($5M) to turn the service back on for the weekend."
        points: 0
        pattern: the-death-spiral
        rationale: |
          Taking a predatory loan to fund a negative business for 48 hours is a death spiral.
        consequence: |
          The service comes back online, then crashes again on Monday.
        leadsTo: loan_aftermath
      - text: "Force a massive reverse stock split (250-to-1) to raise cash."
        points: 3
        pattern: financial-engineering
        rationale: |
          Financial engineering does not fix unit economics.
        consequence: |
          Stock temporarily rises, then crashes 90%.
        leadsTo: loan_aftermath
  bankruptcy_handling:
    dimension: business
    prompt: |
      You filed for Chapter 11. What do you do with the remaining customer data and tech assets?
    options:
      - text: "Sell the data and tech to a theater chain or competitor."
        points: 10
        pattern: salvage-value
        rationale: |
          Liquidating assets to pay creditors is the responsible way to handle bankruptcy.
        consequence: |
          You recoup a small fraction of investor capital.
        leadsTo: end-declare_bankruptcy
      - text: "Try to pivot the bankrupt shell into a data-analytics consulting firm for Hollywood."
        points: 0
        pattern: zombie-pivot
        rationale: |
          Nobody in Hollywood wants consulting from the company that just spectacularly failed.
        consequence: |
          The idea goes nowhere. The shell is dissolved.
        leadsTo: end-bankrupt-ignored
  loan_aftermath:
    dimension: founder
    prompt: |
      You took the desperate route. You survived the weekend, but the loan terms are suffocating. Final desperate move?
    options:
      - text: "Auto-enroll all users into a new, more expensive plan without their explicit consent."
        points: 0
        pattern: illegal-enrollment
        rationale: |
          This is fraudulent and invites massive class-action lawsuits.
        consequence: |
          The SEC steps in. Massive lawsuits. Complete collapse.
        leadsTo: end-emergency_loan
      - text: "Shut down the app completely on weekdays, only allowing weekend check-ins."
        points: 2
        pattern: desperate-throttling
        rationale: |
          Breaks the core promise completely.
        consequence: |
          Users revolt and mass cancel. Game over.
        leadsTo: end-loan-throttle
  end-tiered-niche:
    isOutcome: true
    prompt: |
      ### Outcome: A Sustainable Niche
      You survived the hypergrowth trap by partnering with indies and maintaining a capped model. AMC dominates the major chains, but you carved out a sustainable, profitable niche in independent cinema.
  end-tiered-bankrupt:
    isOutcome: true
    prompt: |
      ### Outcome: Overextension
      You stabilized the core business, only to incinerate it by trying to become a Hollywood studio. You went bankrupt anyway.
  end-surge-saved:
    isOutcome: true
    prompt: |
      ### Outcome: Saved but Crippled
      Rolling back surge pricing saved the company from immediate bankruptcy, but the brand damage was irreversible. You limp along as a zombie company.
  end-surge-death:
    isOutcome: true
    prompt: |
      ### Outcome: Death by a Thousand Cuts
      Surge pricing is a disaster. Users feel nickel-and-dimed. The PR backlash is immense, and you collapse under the weight of continued losses.
  end-declare_bankruptcy:
    isOutcome: true
    prompt: |
      ### Outcome: An Honest Failure
      It's a bitter end, but the responsible one. You shut it down before facing massive legal repercussions. You proved consumers want theater subscriptions, but your math was wrong.
  end-bankrupt-ignored:
    isOutcome: true
    prompt: |
      ### Outcome: Ignored and Dissolved
      The consulting pivot was laughable. The industry watched you burn and moved on without you.
  end-emergency_loan:
    isOutcome: true
    prompt: |
      ### Outcome: The Spectacular Collapse
      You entered a death spiral of changing terms daily, app outages, and illegal auto-enrollments. You orchestrated one of the most spectacular implosions in modern startup history.
  end-loan-throttle:
    isOutcome: true
    prompt: |
      ### Outcome: The Weekend Death
      Throttling to weekends only was the final straw. Users canceled en masse, and the remaining cash evaporated.
---
## What actually happened — the reveal

This drill is based on the infamous rise and fall of **MoviePass** between 2017 and 2019 under CEO **Mitch Lowe** and parent company Helios and Matheson Analytics.

In August 2017, MoviePass dropped its price to **$9.95 a month for unlimited movies**. The service exploded, growing from 20,000 subscribers to over 3 million in less than a year. 

**However, they made the catastrophic choices represented in the losing branches:**
1. They ignored the apocalyptic unit economics (paying retail price for every ticket) believing that scale would force theaters like AMC to negotiate. AMC refused.
2. They assumed they could monetize the data to cover the ticket losses.
3. When the money ran out in July 2018, they actually took out a desperate **$5 million emergency loan** just to turn the servers back on for the *Mission: Impossible - Fallout* opening weekend. 
4. They then initiated a chaotic series of desperate measures: blocking popular movies, introducing deeply unpopular surge pricing, and even auto-enrolling users into new plans.

MoviePass officially shut down in September 2019 and filed for bankruptcy. The irony is that their core hypothesis—that consumers wanted a subscription model for theaters—was entirely correct. AMC watched MoviePass burn itself to the ground, learned from their mistakes, and launched **AMC Stubs A-List**, which became wildly successful. MoviePass died so AMC A-List could live.
"""

zune_content = r"""---
slug: microsoft-zune-launch-2006
type: historical
category: strategy
year: 2006
estimatedMinutes: 15
publishedAt: '2026-09-06T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-09-09T15:00:00+00:00'
principle: |
  Entering a mature market requires a 10x differentiator, not just feature parity with the dominant incumbent. 
  When consumers are locked into an ecosystem (like iTunes), they won't switch for a slightly bigger screen or an FM radio. You have to change the fundamental business model of the category to break the lock-in.
intro: |
  It is late 2006. Apple's iPod has an iron grip on the portable media player market, holding over 75% market share. More importantly, the iTunes ecosystem is a fortress. Consumers have spent hundreds of dollars buying $0.99 tracks that are DRM-locked to Apple devices.
  
  You are J Allard, the product lead for Microsoft's "Project Argos," which will soon be branded as the Zune. Microsoft can no longer cede the digital living room and portable audio market to Apple. You have the engineering might and massive bankroll of Redmond behind you, but you are five years late to the party. 
  
  The Zune hardware is solid, manufactured by Toshiba. It features a larger screen than the iPod Video, built-in Wi-Fi, and an FM radio. However, you know that hardware specs aren't enough to convince entrenched iPod users to abandon their iTunes libraries. You need a killer feature, and a flawless software ecosystem, to justify the switch.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: product
    prompt: |
      Your team proposes a unique feature: "Squirt." Utilizing the built-in Wi-Fi, it allows Zune users to wirelessly share songs with other Zune users nearby. 
      However, the major music labels are terrified of piracy. They threaten to withhold their catalogs if you allow unrestricted sharing.
      How do you implement and negotiate this social sharing feature?
    options:
      - text: "Cap the sharing: Shared songs can only be played 3 times over 3 days, and add heavy DRM."
        points: 0
        pattern: appeasing-incumbents
        rationale: |
          By appeasing the paranoid music labels, you destroy the user experience.
        consequence: |
          The labels are happy, but the users hate it. Tech reviewers mock the sharing feature.
        leadsTo: capped_sharing
      - text: "Fight the labels for a subscription model: Anyone with a 'Zune Pass' subscription can share and keep songs infinitely."
        points: 15
        pattern: business-model-innovation
        rationale: |
          The bold, correct move. If you can't beat Apple on track sales, you change the model to subscriptions.
        consequence: |
          The negotiations cost Microsoft millions, but you secure the deal.
        leadsTo: subscription_sharing
      - text: "Drop the sharing feature entirely. Focus solely on having better audio quality and a bigger screen."
        points: 3
        pattern: retreat-to-specs
        rationale: |
          You avoid the legal fight but surrender your only unique angle.
        consequence: |
          Zune launches as a generic media player.
        leadsTo: spec_war_marketing
  capped_sharing:
    dimension: business
    prompt: |
      Sales are incredibly sluggish compared to the iPod. Consumers buy an iPod Nano instead. You have a $100M marketing budget for the holidays. Where do you focus?
    options:
      - text: "Run an abstract lifestyle brand campaign ('Welcome to the Social') focusing on art and indie music."
        points: 0
        pattern: abstract-marketing-failure
        rationale: |
          Abstract marketing only works when the consumer already understands the product's value.
        consequence: |
          The campaign confuses consumers. Sales flatline.
        leadsTo: lifestyle_reaction
      - text: "Go head-to-head on specs: Highlight the larger screen, FM radio, and pre-loaded music in direct comparison ads."
        points: 6
        pattern: spec-comparison-trap
        rationale: |
          Spec wars rarely win against a deeply entrenched ecosystem.
        consequence: |
          You win some techies, but the general public stays with Apple.
        leadsTo: spec_reaction
  lifestyle_reaction:
    dimension: business
    prompt: |
      The 'Welcome to the Social' ads failed completely. What is your final attempt to fix the marketing?
    options:
      - text: "Fire the agency and pivot to product-focused ads."
        points: 5
        pattern: pivot-to-product
        rationale: |
          Better late than never to explain what the product actually does.
        consequence: |
          Slight recovery, but the initial launch momentum is gone forever.
        leadsTo: node_lifestyle_brand
      - text: "Double down on the 'social' aspect by sponsoring massive indie music festivals."
        points: 0
        pattern: doubling-down-on-failure
        rationale: |
          Spending millions on festivals doesn't fix the underlying lack of product-market fit.
        consequence: |
          You burn cash and the Zune remains a cultural joke.
        leadsTo: node_lifestyle_brand
  spec_reaction:
    dimension: product
    prompt: |
      Techies bought it, but mainstream ignored it. How do you broaden the appeal?
    options:
      - text: "Open the Zune platform to independent developers for apps and games."
        points: 10
        pattern: app-platform-attempt
        rationale: |
          Slightly ahead of its time, pre-iOS App Store, a smart directional bet.
        consequence: |
          You build a small but passionate indie dev community, though it doesn't break Apple's dominance.
        leadsTo: node_spec_comparison
      - text: "Try to publicly shame Apple into opening iTunes to Zune."
        points: 0
        pattern: pointless-pr-war
        rationale: |
          Apple ignores you, and you look desperate.
        consequence: |
          A humiliating PR defeat.
        leadsTo: node_spec_comparison
  subscription_sharing:
    dimension: product
    prompt: |
      Unlimited sharing is a massive hit with early adopters. Now, you have to handle the software ecosystem. Do you try to integrate with Microsoft's existing Windows Media Player (WMP), or build a bespoke Zune desktop app?
    options:
      - text: "Build a brand new, beautifully designed Zune desktop software from scratch."
        points: 15
        pattern: clean-break-software
        rationale: |
          A fresh, fast app is necessary to compete with iTunes.
        consequence: |
          The Zune desktop software is stunning and its 'Metro' design language is praised.
        leadsTo: software_evolution
      - text: "Skin the existing Windows Media Player."
        points: 0
        pattern: legacy-bloatware
        rationale: |
          WMP is a bloated mess. Syncing fails.
        consequence: |
          Users return their Zunes out of pure frustration.
        leadsTo: wmp_reaction
  software_evolution:
    dimension: business
    prompt: |
      Zune Pass and the Metro software are hits. Spotify is just launching in Europe. What's next?
    options:
      - text: "Bring Zune Pass to iOS and Android as a cross-platform streaming app."
        points: 15
        pattern: software-first
        rationale: |
          Decoupling the service from the hardware lets you compete with Spotify globally.
        consequence: |
          Zune Pass becomes the dominant streaming service globally before Spotify gains a foothold.
        leadsTo: node_new_software
      - text: "Keep Zune Pass exclusive to Windows and Zune hardware to drive device sales."
        points: 0
        pattern: hardware-lockin
        rationale: |
          Restricting a digital service to failing hardware dooms the service.
        consequence: |
          Spotify eats the market. Zune Pass dies with the hardware.
        leadsTo: node_new_software_fail
  wmp_reaction:
    dimension: product
    prompt: |
      WMP sync is killing you. Mass returns. How do you respond?
    options:
      - text: "Urgently rewrite the software from scratch."
        points: 5
        pattern: late-rewrite
        rationale: |
          Right move, but 18 months too late.
        consequence: |
          By the time the new software launches, the iPod Touch is out.
        leadsTo: node_skin_wmp
      - text: "Just patch WMP and hope users tolerate it."
        points: 0
        pattern: patch-bloat
        rationale: |
          Refusing to fix the core architecture flaw.
        consequence: |
          The product dies quickly.
        leadsTo: node_skin_wmp
  spec_war_marketing:
    dimension: business
    prompt: |
      You dropped the sharing feature. The Zune is now just a good media player. Sales are terrible. What is your final move?
    options:
      - text: "Pivot the Zune hardware into a dedicated high-end audiophile device."
        points: 9
        pattern: niche-retreat
        rationale: |
          Retreating to a profitable niche is a defensible survival strategy.
        consequence: |
          You sell a fraction of the units, but at a high margin.
        leadsTo: niche_evolution
      - text: "Cut the price by 50% to undercut the iPod Nano."
        points: 0
        pattern: race-to-the-bottom
        rationale: |
          Apple's margins mean they will always win a price war.
        consequence: |
          You lose hundreds of millions of dollars.
        leadsTo: price_reaction
  niche_evolution:
    dimension: product
    prompt: |
      Audiophiles love the new Zune HD. How do you iterate?
    options:
      - text: "Release a super-premium $500 version with a high-end built-in DAC."
        points: 10
        pattern: premium-niche
        rationale: |
          Leaning fully into the niche is highly profitable.
        consequence: |
          It becomes a legendary device among audiophiles.
        leadsTo: node_niche_survival
      - text: "Try to take the HD features downmarket to a cheaper device to fight Apple again."
        points: 0
        pattern: confused-strategy
        rationale: |
          Abandoning your profitable niche to fight a war you already lost.
        consequence: |
          The cheaper device is crushed by the iPod Touch.
        leadsTo: node_niche_survival_fail
  price_reaction:
    dimension: business
    prompt: |
      Price cut failed, you are losing money on every unit. Final move?
    options:
      - text: "Aggressively push into international markets where Apple is weaker."
        points: 5
        pattern: geographic-pivot
        rationale: |
          Finding markets with less incumbent dominance.
        consequence: |
          Slight success in LATAM, but ultimately the product line is shut down.
        leadsTo: node_lifestyle_brand
      - text: "Liquidate inventory to discount retailers to recoup cash."
        points: 0
        pattern: brand-destruction
        rationale: |
          Pure capitulation.
        consequence: |
          Brand is destroyed. Zune is discontinued immediately.
        leadsTo: node_lifestyle_brand
  node_lifestyle_brand:
    isOutcome: true
    prompt: |
      ### Outcome: The Punchline
      The campaign confused consumers. The crippled features were mocked. Microsoft chased Apple for years but never broke single-digit market share. You failed to break the ecosystem lock-in.
  node_spec_comparison:
    isOutcome: true
    prompt: |
      ### Outcome: A Tiny Niche
      Aggressive spec ads won a small following of tech enthusiasts, but the general public stayed with Apple. Zune carved out a tiny, unprofitable niche.
  node_new_software:
    isOutcome: true
    prompt: |
      ### Outcome: The Pioneer of Streaming
      The brilliant Zune desktop software combined with cross-platform Zune Pass created a massive hit. You forced Apple to adapt and proved that consumers will pay for access rather than ownership, laying the groundwork for the modern streaming era.
  node_new_software_fail:
    isOutcome: true
    prompt: |
      ### Outcome: Tied to a Sinking Ship
      You built a great service but shackled it to failing hardware. Spotify ate the world while Zune Pass died a quiet death.
  node_skin_wmp:
    isOutcome: true
    prompt: |
      ### Outcome: Death by Sync
      The clunky Windows Media Player software completely ruined the decent hardware. Users returned Zunes in droves. 
  node_niche_survival:
    isOutcome: true
    prompt: |
      ### Outcome: The Audiophile's Secret
      You retreated to a high-end niche. You didn't beat Apple, but you built a profitable, respected piece of hardware beloved by purists.
  node_niche_survival_fail:
    isOutcome: true
    prompt: |
      ### Outcome: Niche Abandoned
      By trying to go mass-market again, you alienated the audiophiles and still lost to Apple. A complete strategic failure.
---
## What actually happened — the reveal

This drill is based on the real 2006 launch of the **Microsoft Zune**, led by **J Allard**.

Microsoft was desperately trying to break Apple's absolute dominance of the portable media player market. 

**Historically, Microsoft made all the wrong choices:**
1. They implemented the brilliant wireless "Squirt" sharing feature, but bowed to pressure from music labels, capping it at **3 plays over 3 days** and wrapping it in heavy DRM. 
2. For marketing, they ran the abstract, confusing **"Welcome to the Social"** campaign.
3. They initially launched with a clunky software ecosystem.

The Zune became a cultural punchline. Despite later releasing the genuinely excellent Zune HD and the innovative Zune Pass subscription service, Microsoft never broke past single-digit market share. 

However, the Zune Pass pioneered the streaming subscription model years before Spotify dominated the US, and its beautiful desktop software pioneered the "Metro" design language.
"""

cloud_content = r"""---
slug: microsoft-cloud-pivot-2014
caseStudySlug: microsoft-cloud-turnaround
type: historical
category: strategic
publishedAt: '2026-09-02T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-09-06T15:00:00+00:00'
year: 2014
estimatedMinutes: 7
principle: |
  The hardest pivot for a successful company isn't building a new
  product — it's giving up the religion that built the old one.
  Incumbent transformations almost always require admitting that the
  thing your culture organized around is now the thing holding you
  back.
intro: |
  You are the newly-appointed CEO of a publicly-traded $400B+ market
  cap software giant. Your predecessor built the company around two
  identities: (1) we make operating systems, and (2) Windows is the
  hill we die on. Every other product — productivity software,
  servers, mobile attempts, browsers — has been treated as a Windows
  feature, never as an independent business.

  The reality on your desk in your first 30 days:
  - The desktop OS market is mature and shrinking
  - Mobile (where you have <5% share) is now the dominant platform
  - A competitor's cloud platform has crossed $5B in revenue with
    50%+ YoY growth, while your cloud is at $1B
  - Your developer-tools division is openly hostile to non-Windows
    development
  - Your office productivity suite ships only on Windows, even
    though 70% of your users have other devices in their lives
  - Your stock is roughly flat over 10 years while peers have 5-10x'd

  The board wants a 90-day plan.
nodes:
  start:
    dimension: founder
    prompt: |
      Windows is the religion. The market has moved. Pick the move.
    options:
      - text: Stay focused on Windows. Defend the home turf.
        points: 3
        pattern: defend-the-shrinking-fortress
        rationale: |
          Defending the fortress means you don't compete in growing categories.
        consequence: |
          Five years in, Windows revenue is flat. Cloud competitors have 5x'd.
        leadsTo: A_defend_followup
      - text: Pivot to cloud-first. Office on every platform. Compete with AWS.
        points: 15
        pattern: cannibalize-the-religion
        rationale: |
          You're saying: the thing that built us is now holding us back.
        consequence: |
          You announce Office on iOS. Internal revolt, then massive success.
        leadsTo: B_invest_followup
      - text: Pick one new bet (cloud OR mobile OR cross-platform Office). Don't fight on all fronts.
        points: 9
        pattern: pivot-but-pick-one
        rationale: |
          Cloud alone is a divisional win, not a transformation.
        consequence: |
          Cloud revenue grows, but the rest of the company stays Windows-centric.
        leadsTo: C_focus_followup
      - text: Acquire a major competitor to buy your way into a new identity.
        points: 6
        pattern: acquire-instead-of-build
        rationale: |
          Acquisitions amplify the strategy you already have; they don't change it.
        consequence: |
          Culture clash absorbs the acquisition. Transformation stalls.
        leadsTo: D_acquire_followup
  A_defend_followup:
    dimension: product
    prompt: |
      You defended Windows. The PC market is shrinking. How do you expand?
    options:
      - text: Try to launch another Windows Phone by acquiring Nokia for $7B.
        points: 3
        pattern: double-down-mobile
        rationale: |
          The app ecosystem is already lost to iOS/Android.
        consequence: |
          Market share remains below 5%. The acquisition is a massive failure.
        leadsTo: A_defend_crisis
      - text: Build a 'Windows App Store' taking an 80% cut from developers.
        points: 0
        pattern: greedy-platform
        rationale: |
          Alienating developers on a shrinking platform accelerates the decline.
        consequence: |
          Developers ignore the store entirely.
        leadsTo: A_defend_crisis
  A_defend_crisis:
    dimension: business
    prompt: |
      Your hardware and store plays failed. What's the final attempt to salvage value?
    options:
      - text: Write off the failures and aggressively cut costs/layoffs.
        points: 5
        pattern: structural-decline
        rationale: |
          Managing the decline of a cash cow.
        consequence: |
          Stock stabilizes but multiple compresses. Company is a utility.
        leadsTo: end-A
      - text: Try to run Android on your failed Windows Phone hardware.
        points: 0
        pattern: too-little-too-late
        rationale: |
          Completely confusing to consumers.
        consequence: |
          Massive write-downs. You are fired by the board.
        leadsTo: end-A
  B_invest_followup:
    dimension: business
    prompt: |
      Cloud revenue is growing. You invest $1B in a small AI lab (OpenAI). They deliver a breakthrough model (GPT-4). What do you do?
    options:
      - text: Integrate it immediately into Bing to attack Google Search.
        points: 10
        pattern: attack-the-incumbent
        rationale: |
          A bold move, but consumer search is incredibly hard to displace.
        consequence: |
          You capture headlines and force Google to dance, but search share barely moves.
        leadsTo: B_ai_deployment
      - text: Put it directly into Office and Enterprise tools as 'Copilot' for $30/user.
        points: 15
        pattern: monetize-the-base
        rationale: |
          Leveraging your massive enterprise distribution is the highest ROI play.
        consequence: |
          Instant multi-billion dollar ARR run-rate. Market cap skyrockets.
        leadsTo: B_ai_deployment
  B_ai_deployment:
    dimension: product
    prompt: |
      The AI integration is a massive hit. The partner lab wants more compute.
    options:
      - text: Give them exclusive access to your massive new supercomputers in exchange for perpetual IP rights.
        points: 15
        pattern: infrastructural-lock
        rationale: |
          You become the absolute necessary layer for the world's best AI.
        consequence: |
          You become the most valuable company in the world.
        leadsTo: end-B-great
      - text: Try to acquire the lab fully now that they are successful.
        points: 5
        pattern: kill-the-golden-goose
        rationale: |
          The founders will resist and leave, destroying the value.
        consequence: |
          Massive boardroom drama. The partnership is deeply strained.
        leadsTo: end-B-mixed
  C_focus_followup:
    dimension: product
    prompt: |
      You focused only on Cloud. Azure grows, but Office is losing ground to Google Workspace. Response?
    options:
      - text: Finally make Office cross-platform (iOS/Android).
        points: 10
        pattern: late-pivot
        rationale: |
          Better late than never, but Google has a foothold.
        consequence: |
          You stem the bleeding, but growth is slow.
        leadsTo: C_focus_crisis
      - text: Bundle Office aggressively with Windows enterprise agreements.
        points: 2
        pattern: antitrust-bundling
        rationale: |
          Using monopoly power to force usage instead of building a better product.
        consequence: |
          Regulators investigate.
        leadsTo: C_focus_crisis
  C_focus_crisis:
    dimension: business
    prompt: |
      Google is still winning startups. How do you fight back?
    options:
      - text: Acquire Slack to combat Teams' weakness and win startups.
        points: 8
        pattern: buy-the-cool-factor
        rationale: |
          Expensive but effective way to buy relevance.
        consequence: |
          You maintain enterprise dominance but the transformation is incomplete.
        leadsTo: end-C
      - text: Make a 'free tier' of Office web apps.
        points: 5
        pattern: freemium-defense
        rationale: |
          A defensive move that protects the flank.
        consequence: |
          You hold market share but don't grow it.
        leadsTo: end-C
  D_acquire_followup:
    dimension: founder
    prompt: |
      You bought a major enterprise platform, but it's stalling due to culture clash.
    options:
      - text: Leave them alone and ring-fence them.
        points: 8
        pattern: independence
        rationale: |
          Preserves their culture but limits integration value.
        consequence: |
          They survive, but synergy is zero.
        leadsTo: D_acquire_crisis
      - text: Fire the acquired founders and put Microsoft lifers in charge.
        points: 0
        pattern: crush-culture
        rationale: |
          Destroys the value of the acquisition immediately.
        consequence: |
          Product stagnates. Key talent leaves.
        leadsTo: D_acquire_crisis
  D_acquire_crisis:
    dimension: business
    prompt: |
      Wall Street is asking why you spent $20B on an acquisition with no synergy.
    options:
      - text: Force a deep data integration with Azure.
        points: 5
        pattern: late-synergy
        rationale: |
          Causes engineering delays but eventually produces value.
        consequence: |
          You show some ROI, but you missed the broader cloud transformation.
        leadsTo: end-D
      - text: Spin them back out at a loss.
        points: 0
        pattern: admit-defeat
        rationale: |
          A massive public failure.
        consequence: |
          You are replaced as CEO.
        leadsTo: end-D
  end-A:
    isOutcome: true
    prompt: |
      Defending Windows preserved the desktop business but missed every growth category of the era. The transformation eventually happened under a different CEO five years late.
  end-B-great:
    isOutcome: true
    prompt: |
      The pivot defined one of the most studied incumbent transformations in tech history. Market cap grew from $400B to $3T+. Cloud + AI + cross-platform Office became the three pillars of the company.
  end-B-mixed:
    isOutcome: true
    prompt: |
      Trying to fully acquire the AI lab caused massive friction. The story compounded but slower than true partnership would have. Still a strong outcome — just below ceiling.
  end-C:
    isOutcome: true
    prompt: |
      Cloud-focused pivot worked divisionally but didn't transform the company's identity. The stock grew but not at the pace a full transformation would have produced.
  end-D:
    isOutcome: true
    prompt: |
      The acquisition without cultural reform got absorbed by the existing identity. The transformation stalled and you were replaced.
---
## What actually happened

This drill is based on **Satya Nadella taking over as Microsoft CEO in 2014**. Microsoft had spent a decade losing every new platform while defending Windows.

Nadella's first major move was **Office on iOS**. He completely shifted the company to "Cloud First, Mobile First". Subsequent moves included open-sourcing .NET, acquiring GitHub, and the brilliant **$1B+ OpenAI partnership** structure (strategic investment + Azure exclusivity rather than full acquisition).

Microsoft's market cap grew from **~$300B in 2014 to over $3.5T by 2024**.
"""

linear_content = r"""---
slug: linear-pricing-2019
caseStudySlug: linear-brand-from-day-one
type: historical
category: pricing
publishedAt: '2026-08-30T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-09-02T15:00:00+00:00'
year: 2019
estimatedMinutes: 6
principle: |
  In categories where the dominant competitor is enterprise-priced
  and slow, free-forever for individuals is a market-entry weapon.
  But free-forever only works if you can defend the unit economics
  at scale.
intro: |
  You are the CEO of a new project-management tool for software teams. You've built a faster, opinionated alternative to the dominant incumbent. Your product is meaningfully better — faster, keyboard-shortcut-driven, designed for engineers.

  Launch is in four weeks. You've assembled a beta of ~200 software teams; they love the product. Pricing is the last big decision.
nodes:
  start:
    dimension: business
    prompt: |
      Pick the pricing model for public launch.
    options:
      - text: 'Match the incumbent: $8/user/month. Compete on product quality.'
        points: 6
        pattern: incumbent-match
        rationale: |
          Requires every prospect to actively switch — a motion that takes 6-9 months. You burn the velocity advantage of being new.
        consequence: |
          Initial signups are slow. By month 12 you have 200 paying teams; the incumbent has 100,000.
        leadsTo: A_match_followup
      - text: Free for small teams (under 10 users). $8/user/month for larger teams.
        points: 15
        pattern: free-for-the-trojan-horse
        rationale: |
          The right wedge. Small teams self-serve and bring you with them when they grow.
        consequence: |
          Signups hit 5,000 teams in 90 days. ARR compounds rapidly.
        leadsTo: B_free_followup
      - text: Free forever, no limits. Monetize later via enterprise features.
        points: 9
        pattern: monetize-much-later
        rationale: |
          Audacious, but free forever means no revenue for 12-18 months.
        consequence: |
          Adoption hits 20,000 teams in 6 months. Revenue stays at zero.
        leadsTo: C_free_followup
      - text: 'Aggressive undercut: $4/user/month flat. Half the incumbent price.'
        points: 3
        pattern: undercut-with-no-moat
        rationale: |
          The incumbent has 100x your capital and can match any price.
        consequence: |
          The incumbent matches your price for new customers. Margins are thin.
        leadsTo: D_undercut_followup
  B_free_followup:
    dimension: product
    prompt: |
      Twelve months post-launch. Free teams hit the 10-user limit and instead of upgrading, they create multiple workspaces to stay free.
    options:
      - text: Enforce a strict 'one workspace per organization' rule. Block abuse.
        points: 6
        pattern: enforce-the-gate-hard
        rationale: |
          Direct but adversarial. Users feel policed.
        consequence: |
          ~30% switch to a competitor. Brand trust takes a hit.
        leadsTo: B_enforce_hard
      - text: Make the upgrade feel like an upgrade — add valuable team features only available paid.
        points: 15
        pattern: positive-upgrade-pull
        rationale: |
          Pull, not push. Make the upgrade path more attractive than the workaround.
        consequence: |
          Upgrade rate jumps to 28%. Conversion engine compounds.
        leadsTo: B_positive_pull
      - text: Tighten free tier limits — drop from 10 users to 5.
        points: 3
        pattern: shrink-the-free-tier
        rationale: |
          Retroactive-narrowing destroys free-tier trust.
        consequence: |
          Backlash on social media. Net loss across the funnel.
        leadsTo: B_shrink_free
  B_enforce_hard:
    dimension: founder
    prompt: |
      Users are furious about the strict blocking. How do you recover?
    options:
      - text: Backtrack and apologize publicly.
        points: 8
        pattern: own-the-mistake
        rationale: |
          Humility saves brands.
        consequence: |
          You stop the bleeding but look indecisive.
        leadsTo: end-B-bad
      - text: Offer a 50% discount for the first year of paid to soften the blow.
        points: 5
        pattern: discount-apology
        rationale: |
          Trains users to expect discounts.
        consequence: |
          Conversion bumps, but long term LTV is damaged.
        leadsTo: end-B-bad
  B_positive_pull:
    dimension: business
    prompt: |
      Upgrade rate is fantastic. Larger enterprises now want to use the product.
    options:
      - text: Build an 'Enterprise' tier with SOC2 and SAML for $15/user.
        points: 15
        pattern: capture-enterprise-value
        rationale: |
          Standard SaaS progression.
        consequence: |
          You become a multi-hundred-million ARR business.
        leadsTo: end-B-great
      - text: Refuse to build enterprise bloat and stay strictly product-led for small teams.
        points: 8
        pattern: stay-small
        rationale: |
          You leave millions on the table.
        consequence: |
          A highly profitable lifestyle business, but not a unicorn.
        leadsTo: end-B-niche
  B_shrink_free:
    dimension: product
    prompt: |
      Backlash is intense. Competitors are actively poaching.
    options:
      - text: Grandfather existing users, applying the limit only to new signups.
        points: 10
        pattern: grandfathering
        rationale: |
          Should have been the first move.
        consequence: |
          Stops the immediate churn, but brand is permanently tarnished.
        leadsTo: end-B-terrible
      - text: Push through the pain. The angry users weren't going to pay anyway.
        points: 0
        pattern: ignore-the-mob
        rationale: |
          You lose your viral word-of-mouth distribution.
        consequence: |
          Growth flatlines.
        leadsTo: end-B-terrible
  A_match_followup:
    dimension: business
    prompt: |
      Growth is slow. How do you force momentum?
    options:
      - text: Hire a massive outbound sales team.
        points: 4
        pattern: premature-scaling
        rationale: |
          Outbound sales on a new, undifferentiated-pricing product burns cash.
        consequence: |
          Burn rate spikes.
        leadsTo: A_match_crisis
      - text: Pivot to targeting non-software teams (marketing/design).
        points: 8
        pattern: find-new-wedge
        rationale: |
          Finding a less contested market.
        consequence: |
          You survive but lose your core engineering identity.
        leadsTo: A_match_crisis
  A_match_crisis:
    dimension: founder
    prompt: |
      Cash is running low. Final move?
    options:
      - text: Lay off the sales team and rely on organic growth.
        points: 5
        pattern: painful-reset
        rationale: |
          Saves the company but resets growth to zero.
        consequence: |
          You become a slow-growth SaaS.
        leadsTo: end-A
      - text: Raise a down-round to fund the sales team.
        points: 2
        pattern: dilution
        rationale: |
          Founders are massively diluted.
        consequence: |
          You survive but lose control of the company.
        leadsTo: end-A
  C_free_followup:
    dimension: product
    prompt: |
      Adoption is huge but zero revenue. Runway is 6 months.
    options:
      - text: Introduce a hard usage limit immediately.
        points: 5
        pattern: bait-and-switch
        rationale: |
          Forces revenue but breaks trust.
        consequence: |
          Users revolt.
        leadsTo: C_free_crisis
      - text: Raise venture debt to keep the free tier alive while building enterprise.
        points: 2
        pattern: risky-leverage
        rationale: |
          Taking debt pre-revenue is incredibly risky.
        consequence: |
          You default on the debt when enterprise sales take too long.
        leadsTo: C_free_crisis
  C_free_crisis:
    dimension: business
    prompt: |
      You are out of options.
    options:
      - text: Launch an open-source version to win back goodwill.
        points: 6
        pattern: open-source-pivot
        rationale: |
          A valid pivot for developer tools.
        consequence: |
          You build a services business around the open source core.
        leadsTo: end-C
      - text: Sell the company to a larger player for the user base.
        points: 8
        pattern: acquihire
        rationale: |
          Best return for investors at this stage.
        consequence: |
          Acquired by Atlassian. Product is shut down.
        leadsTo: end-C
  D_undercut_followup:
    dimension: business
    prompt: |
      Incumbent matched your $4 price.
    options:
      - text: Drop to $2/user/month.
        points: 0
        pattern: suicidal-pricing
        rationale: |
          You lose money on every user.
        consequence: |
          Bankruptcy approaches rapidly.
        leadsTo: D_undercut_crisis
      - text: Pivot to focusing on small startups instead of enterprise.
        points: 5
        pattern: micro-smb
        rationale: |
          A retreat to a less profitable segment.
        consequence: |
          You survive as a cheap tool for early-stage companies.
        leadsTo: D_undercut_crisis
  D_undercut_crisis:
    dimension: founder
    prompt: |
      Margins are dead.
    options:
      - text: Raise prices back to $8/user.
        points: 4
        pattern: break-trust
        rationale: |
          You admit the undercut was a gimmick.
        consequence: |
          You lose users and brand trust.
        leadsTo: end-D
      - text: Pivot to web3/crypto project management.
        points: 0
        pattern: trend-chasing
        rationale: |
          Desperation pivot.
        consequence: |
          Company dies when the crypto bubble pops.
        leadsTo: end-D
  end-A:
    isOutcome: true
    prompt: |
      Matching the incumbent's price made the product invisible. You missed the launch momentum.
  end-B-great:
    isOutcome: true
    prompt: |
      The positive-upgrade-pull model worked. By year 5 you were the default project-management tool for software teams and a multi-hundred-million ARR business.
  end-B-niche:
    isOutcome: true
    prompt: |
      You built a great product but refused to scale it. You run a profitable indie business.
  end-B-bad:
    isOutcome: true
    prompt: |
      The enforcement worked technically but cost brand trust. The product still works but the love is gone.
  end-B-terrible:
    isOutcome: true
    prompt: |
      The retroactive limit change made you a case study in "how to destroy your community." 
  end-C:
    isOutcome: true
    prompt: |
      Free-forever drove huge adoption but no revenue. You eventually found an exit, but not the unicorn outcome you wanted.
  end-D:
    isOutcome: true
    prompt: |
      The undercut became a race to the bottom you couldn't win. The incumbent outlasted you.
---
## What actually happened

This drill is loosely based on **Linear's pricing model from 2019 onward**. Linear shipped with **free for teams under 10 users, $8/user/month above** — and made the paid tier compelling by adding genuinely valuable team features. 

The free tier became Linear's primary distribution channel. By 2024 Linear was the dominant project-management tool for high-growth software companies.
"""

gplus_content = r"""---
slug: google-plus-real-names-2011
type: historical
category: Strategy
year: 2011
estimatedMinutes: 15
publishedAt: '2026-08-19T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-08-23T15:00:00+00:00'
principle: |
  Identity policies must align with user trust and platform culture, not just internal
  data aggregation goals. Forcing strict real-name policies on vulnerable early adopters
  destroys network trust right when a platform needs evangelists the most.
intro: |
  It's July 2011. Google has just launched Google+, attempting to challenge Facebook.
  Early traction is phenomenal. Millions of users are signing up.
  
  However, a major crisis is brewing. The platform enforces a draconian "Real Names" policy.
  The executive goal is clear: Google wants to unify user identity to build a unified data profile that can beat Facebook's ad targeting.
  
  The backlash is fierce. Pseudonymous users are being abruptly mass-suspended without warning. The tech press is dubbing it the "Nymwars."
nodes:
  start:
    dimension: product
    prompt: |
      The volume of suspended accounts is spiking. High-profile tech influencers are deleting their profiles in protest. What is your immediate response?
    options:
      - text: "Double down on real names. The long-term value of unified identity outweighs short-term PR pain."
        points: 0
        pattern: policy-over-users
        rationale: |
          Prioritizes internal corporate strategy over user needs.
        consequence: |
          Suspensions continue. Narrative shifts to "Google+ is authoritarian." Growth stalls.
        leadsTo: node_double_down
      - text: "Immediately pause all suspensions, issue an apology, and allow pseudonyms."
        points: 15
        pattern: trust-rebuilding
        rationale: |
          Acknowledging diverse needs builds user trust and prevents a mass exodus.
        consequence: |
          Tech community praises the reversal. "Nymwars" end.
        leadsTo: node_pause_suspensions
      - text: "Implement an appeals process requiring a government ID."
        points: 3
        pattern: bureaucratic-friction
        rationale: |
          Maintains hostile policy with massive friction.
        consequence: |
          Appeals queue backs up for weeks. Users are insulted.
        leadsTo: node_appeals_followup
  node_double_down:
    dimension: business
    prompt: |
      Goodwill is gone. Growth stalled. Executive leadership is panicking. How do you force adoption?
    options:
      - text: "Force Google+ integration into all other Google products (e.g. YouTube comments)."
        points: 0
        pattern: forced-adoption
        rationale: |
          The ultimate dark pattern. Breeds massive resentment.
        consequence: |
          Backlash is legendary. Zero genuine social engagement.
        leadsTo: force_integration
      - text: "Pivot entirely to enterprise users as a corporate collaboration tool."
        points: 9
        pattern: enterprise-retreat
        rationale: |
          Real names make sense in corporate intranets. Abandons consumer fight.
        consequence: |
          Google+ survives within Google Workspace.
        leadsTo: enterprise_retreat
  force_integration:
    dimension: product
    prompt: |
      Backlash on YouTube is legendary. Users are posting ASCII tanks.
    options:
      - text: "Roll it back and admit defeat."
        points: 5
        pattern: late-surrender
        rationale: |
          Stops the bleeding but the brand is toxic.
        consequence: |
          Google+ becomes a ghost town.
        leadsTo: node_force_ghost
      - text: "Double down and disable comments entirely for non-G+ users."
        points: 0
        pattern: scorched-earth
        rationale: |
          Actively damages YouTube's engagement to prop up a failing social network.
        consequence: |
          Creators threaten to leave YouTube. Google fires the G+ leadership.
        leadsTo: node_force_ghost
  enterprise_retreat:
    dimension: business
    prompt: |
      You pivoted to enterprise. How do you build the product?
    options:
      - text: "Integrate deeply with Google Docs."
        points: 12
        pattern: leverage-strengths
        rationale: |
          Plays to Google's actual enterprise strengths.
        consequence: |
          Becomes a useful internal tool.
        leadsTo: node_enterprise
      - text: "Try to build a Slack-like chat interface."
        points: 5
        pattern: chase-the-next-thing
        rationale: |
          Late to another market.
        consequence: |
          Fails to gain traction against Slack.
        leadsTo: node_enterprise
  node_pause_suspensions:
    dimension: product
    prompt: |
      You stopped suspensions. You need a long-term identity solution for network quality.
    options:
      - text: "Implement robust verification (blue check) for public figures, allow pseudonyms for masses."
        points: 15
        pattern: flexible-identity
        rationale: |
          Solves impersonation while maintaining freedom of expression.
        consequence: |
          Community thrives in niche interest groups.
        leadsTo: verification
      - text: "Require users to link a credit card to use a pseudonym."
        points: 3
        pattern: friction-barrier
        rationale: |
          Too much friction. People won't hand over CC data to post memes.
        consequence: |
          High friction prevents broad adoption.
        leadsTo: friction_barrier
  verification:
    dimension: business
    prompt: |
      Community thrives in niches. Facebook launches identical 'Circles' feature. How do you respond?
    options:
      - text: "Focus on integrating exclusive Google tech like Hangouts video calls."
        points: 15
        pattern: tech-differentiator
        rationale: |
          Hangouts was genuinely better than anything Facebook had at the time.
        consequence: |
          You build a massive, highly engaged network based on interests and video hangouts.
        leadsTo: node_verification
      - text: "Launch a massive multi-million dollar TV ad campaign."
        points: 0
        pattern: waste-cash
        rationale: |
          Ads don't beat network effects.
        consequence: |
          Money wasted, Facebook maintains dominance.
        leadsTo: node_verification
  friction_barrier:
    dimension: product
    prompt: |
      Platform is clean but empty. How do you fix growth?
    options:
      - text: "Remove the CC requirement and use ML to flag spam."
        points: 10
        pattern: fix-the-friction
        rationale: |
          Right move, but momentum is already lost.
        consequence: |
          Slow recovery.
        leadsTo: node_verification_friction
      - text: "Pay influencers to join and post exclusively."
        points: 0
        pattern: artificial-seeding
        rationale: |
          When the money stops, the influencers leave.
        consequence: |
          Platform remains empty.
        leadsTo: node_verification_friction
  node_appeals_followup:
    dimension: business
    prompt: |
      Appeals queue is backed up for weeks. Users are flocking to Twitter.
    options:
      - text: "Hire 10,000 contractors to clear the queue."
        points: 2
        pattern: brute-force
        rationale: |
          Expensive and doesn't fix the underlying hostile policy.
        consequence: |
          Contractors approve fake IDs anyway.
        leadsTo: hire_contractors
      - text: "Abandon the ID requirement entirely."
        points: 8
        pattern: late-reversal
        rationale: |
          Finally doing the right thing.
        consequence: |
          You save some face, but growth is crippled.
        leadsTo: node_ghost_town
  hire_contractors:
    dimension: product
    prompt: |
      Contractors are approving fake IDs. The policy is a joke.
    options:
      - text: "Accept the fake names and quietly stop enforcing the policy."
        points: 5
        pattern: silent-surrender
        rationale: |
          At least it removes the friction.
        consequence: |
          Network becomes generic.
        leadsTo: node_ghost_town
      - text: "Fire contractors and use strict AI text-matching."
        points: 0
        pattern: algorithmic-tyranny
        rationale: |
          AI bans legitimate users with unusual names.
        consequence: |
          Massive PR disaster.
        leadsTo: node_ghost_town
  node_force_ghost:
    isOutcome: true
    prompt: |
      ### Outcome: The Forced Ghost Town
      You tied YouTube comments to Google+. The backlash was legendary. The network became a massive ghost town of forced accounts. Google+ eventually shut down in 2019.
  node_enterprise:
    isOutcome: true
    prompt: |
      ### Outcome: The Corporate Pivot
      Google+ pivots to enterprise. It survives as a workplace tool but fails its primary mission to unseat Facebook. 
  node_verification:
    isOutcome: true
    prompt: |
      ### Outcome: The Interest Graph
      By embracing pseudonyms and Hangouts, you build a massive, highly engaged network that competes fiercely with Reddit and Twitter.
  node_ghost_town:
    isOutcome: true
    prompt: |
      ### Outcome: The Bureaucratic Death
      By demanding government ID, you proved to the internet that Google was acting like a surveillance state. The early adopters fled. The product died in its crib.
  node_verification_friction:
    isOutcome: true
    prompt: |
      ### Outcome: The High Barrier
      The friction was too high. While you prevented spam, you also prevented growth. Google+ became a clean, well-lit, but ultimately empty room.
---
## What actually happened — the reveal

This drill is based on the infamous "Nymwars" that plagued Google+ shortly after its launch in July 2011.

Instead of reversing course quickly, Google doubled down. They aggressively forced Google+ integration into other products, most infamously forcing YouTube users to use a Google+ account to comment. 

Google+ never recovered its cultural momentum. In 2014, Google finally relented and allowed pseudonyms, but it was years too late. Google+ for consumers was officially shut down in April 2019.
"""

files = [
    ("netflix-dvd-streaming-bet-2007.md", netflix_content),
    ("moviepass-unlimited-pricing-2017.md", moviepass_content),
    ("microsoft-zune-launch-2006.md", zune_content),
    ("microsoft-cloud-pivot-2014.md", cloud_content),
    ("linear-pricing-2019.md", linear_content),
    ("google-plus-real-names-2011.md", gplus_content)
]

for filename, content in files:
    with open(os.path.join(drills_dir, filename), "w") as f:
        f.write(content)

print("Successfully expanded all drills.")
