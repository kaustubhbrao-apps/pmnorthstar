---
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
      - text: "Implement friction immediately. Restrict repeat viewings of the same movie, require ticket stub photos to prevent fraud, and block major blockbusters on opening weekend."
        points: 5
        pattern: survive-the-burn
        rationale: |
          You must stem the bleeding immediately, even if it hurts the user experience and slows growth. 
          Survival is more important than hypergrowth. You built an unsustainable model; the only way out is to deliberately throttle usage while you figure out a real business model.
        consequence: |
          Users are furious. Reddit goes crazy. But your daily cash burn drops by 35%. You buy yourself another quarter of runway.
        leadsTo: implement_friction
      - text: "Double down on growth. Raise more capital through public stock offerings, keep the unlimited promise pure, and force AMC to the table through sheer user demand."
        points: 0
        pattern: delusional-scale
        rationale: |
          Ignoring unit economics at this scale accelerates the death spiral. AMC has no incentive to rescue you; they are happy to take your retail ticket money while you bankrupt yourself. 
          Raising money to subsidize a structurally negative margin just burns investor capital faster.
        consequence: |
          You hit 3 million subscribers. Your burn rate hits $20 million a month. The stock price begins to wobble.
        leadsTo: double_down
      - text: "Try to monetize the data immediately. Sell user location and viewing habits to studios and advertisers."
        points: 1
        pattern: false-savior
        rationale: |
          A common Silicon Valley delusion: "Data is the new oil." 
          While the data is valuable, it is nowhere near valuable enough to offset losing $100 per user per month. Data monetization is a margin-enhancer, not a replacement for a broken core business model.
        consequence: |
          You make $500k selling data, while burning $15M in ticket costs. It's a drop in the bucket.
        leadsTo: double_down
  implement_friction:
    dimension: product
    prompt: |
      The friction reduces the burn slightly, but users feel like it's a bait-and-switch. The app's ratings plummet, and churn spikes. 
      
      You need a sustainable path forward that stops the bleeding permanently without destroying the entire user base. How do you restructure the product?
    options:
      - text: "Pivot to a tiered model: $9.95 for 3 movies a month. Higher tiers for unlimited or premium formats (IMAX/3D)."
        points: 5
        pattern: rational-pricing
        rationale: |
          The painful but correct move. A capped model (3 movies) provides predictable costs. If the average ticket is $10, you still lose money if they use all 3, but the breakage (users who go 0 or 1 time) makes the economics viable at scale. 
          It aligns value with price.
        consequence: |
          You lose 40% of your user base overnight. But the remaining users stabilize the unit economics. You finally reach break-even.
        leadsTo: tiered_model
      - text: "Keep the unlimited model, but introduce 'surge pricing' for popular movies and weekend showtimes to offset the cost."
        points: 0
        pattern: punitive-pricing
        rationale: |
          Surge pricing on top of a subscription feels deeply punitive and destroys the 'unlimited' value proposition completely. 
          It creates massive anxiety for the user, who never knows what a movie will actually cost until they get to the theater.
        consequence: |
          The backlash is immense. Users feel nickel-and-dimed. Churn accelerates faster than the tiered model, but without fixing the underlying economics.
        leadsTo: surge_pricing
  double_down:
    dimension: founder
    prompt: |
      You raised more money, but the cash incinerator is running too hot. 
      
      It is late July 2018 (Mission Impossible: Fallout opening weekend). You literally run out of cash. The debit cards stop working at the theaters. Users are stranded at the box office. 
      
      The stock price of your parent company crashes 99%. The SEC is asking questions. AMC is laughing. What is your final play?
    options:
      - text: "Halt the service immediately, declare bankruptcy, and try to sell the data assets to recoup some investor capital."
        points: 5
        pattern: accept-reality
        rationale: |
          Recognize when the game is over. Protect what little value remains. Operating while insolvent is legally dangerous and morally bankrupt.
        consequence: |
          You file for Chapter 11. It's a humiliating end, but the legal exposure is contained.
        leadsTo: declare_bankruptcy
      - text: "Take out a high-interest emergency loan ($5M) to turn the service back on just for the weekend blockbusters to keep the illusion alive while you try to raise more equity."
        points: 0
        pattern: the-death-spiral
        rationale: |
          This is desperation. Taking a predatory loan to fund a structurally negative business for 48 hours is the definition of a death spiral. 
          You are just prolonging the inevitable collapse and destroying whatever shareholder value is left.
        consequence: |
          The service comes back online, then crashes again on Monday. The stock is delisted.
        leadsTo: emergency_loan
      - text: "Force a massive reverse stock split (250-to-1) to keep the stock from being delisted and dilute current shareholders to raise cash."
        points: 1
        pattern: financial-engineering
        rationale: |
          Financial engineering does not fix unit economics. It just destroys retail investors who believed the hype.
        consequence: |
          The stock price temporarily rises, then immediately crashes 90% again as the market realizes the business model is still broken.
        leadsTo: emergency_loan
  tiered_model:
    isOutcome: true
    prompt: |
      ### Outcome: A Sustainable Niche
      
      The transition to a tiered model is painful. You lose a huge chunk of your hyper-growth user base, but the unit economics finally stabilize. 
      
      You become a smaller, niche service, but a sustainable one. You survived the hypergrowth trap by prioritizing survival over vanity metrics. You laid the groundwork for the modern theater-subscription model (which AMC eventually copied).
      
      **League Score Impact:** +80 Points.
  surge_pricing:
    isOutcome: true
    prompt: |
      ### Outcome: Death by a Thousand Cuts
      
      Surge pricing is a disaster. Users feel nickel-and-dimed and misled. The PR backlash is immense, and churn accelerates. 
      
      Because power users figure out ways around the surge pricing, the company still collapses under the weight of continued losses. You tried to fix the economics, but alienated the customer base too deeply.
  declare_bankruptcy:
    isOutcome: true
    prompt: |
      ### Outcome: An Honest Failure
      
      It's a bitter end, but the responsible one. You shut it down before facing massive legal repercussions for operating while insolvent. 
      
      You failed, but you failed honestly. The hyper-growth experiment proved that people love going to the movies if it's cheap, but it proved you can't subsidize that behavior forever.
  emergency_loan:
    isOutcome: true
    prompt: |
      ### Outcome: The Spectacular Collapse
      
      This is the historical reality. MoviePass took out a desperate $5M loan at exorbitant rates just to turn the app back on for a single weekend. 
      
      The company entered a death spiral of changing terms daily, app outages, massive reverse stock splits, and ultimate bankruptcy. The parent company's stock went from over $8,000 a share (adjusted for splits) to essentially zero. 
      
      You believed your own hype, ignored the math, and orchestrated one of the most spectacular implosions in modern startup history.
      
      **League Score Impact:** -100 Points.
---
## What actually happened — the reveal

This drill is based on the infamous rise and fall of **MoviePass** between 2017 and 2019 under CEO **Mitch Lowe** and parent company Helios and Matheson Analytics.

In August 2017, MoviePass dropped its price to **$9.95 a month for unlimited movies**. The service exploded, growing from 20,000 subscribers to over 3 million in less than a year. 

**However, they made the catastrophic choices represented in the losing branches:**
1. They ignored the apocalyptic unit economics (paying retail price for every ticket) believing that scale would force theaters like AMC to negotiate. AMC refused, correctly betting that MoviePass would simply run out of money.
2. They assumed they could monetize the data to cover the ticket losses, a wildly inaccurate assumption given the staggering burn rate (losing over $20 million a month).
3. When the money ran out in July 2018, they actually took out a desperate **$5 million emergency loan** just to turn the servers back on for the *Mission: Impossible - Fallout* opening weekend. 
4. They then initiated a chaotic series of desperate measures: blocking popular movies, introducing deeply unpopular surge pricing, and executing massive reverse stock splits that wiped out retail investors.

MoviePass officially shut down in September 2019 and filed for bankruptcy. The irony is that their core hypothesis—that consumers wanted a subscription model for theaters—was entirely correct. AMC watched MoviePass burn itself to the ground, learned from their mistakes, and launched **AMC Stubs A-List** (a capped, tiered model similar to the winning branch), which became wildly successful. MoviePass died so AMC A-List could live.
