---
slug: moviepass-unlimited-pricing-2017
caseStudySlug: moviepass-unlimited-pricing-2017
type: historical
category: business
year: 2017
estimatedMinutes: 15
publishedAt: '2026-09-27T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-10-04T15:00:00+00:00'
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
