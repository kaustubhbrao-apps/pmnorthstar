---
slug: moviepass-unlimited-pricing-2017
type: historical
category: Business
year: 2017
estimatedMinutes: 15
publishedAt: '2026-09-02T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-09-06T15:00:00+00:00'
principle: Unit economics cannot be ignored; subsidizing heavy usage without a clear path to monetization is fatal.
intro: |
  It's August 2017. You are part of the leadership team at MoviePass. The company has been struggling for years with various pricing models, trying to build a subscription service for theatrical movies. 
  
  A new CEO and majority investor have just arrived with a radical, explosive idea: drop the price to $9.95 per month for an unlimited movie ticket every single day. The hypothesis is simple: achieve massive, unprecedented scale, change consumer behavior, and then use that leverage to force theater chains into revenue-sharing agreements or monetize the massive data pool.
  
  You pay retail price for every ticket your users buy. If a user sees two movies a month, you lose money. If they see ten, you bleed cash. The launch is imminent, and the servers are already groaning under the weight of anticipation.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: business
    prompt: |
      The $9.95/month unlimited plan goes live, and the response is overwhelming. You hit 1 million subscribers in months, far exceeding the wildest projections. However, the cash burn is apocalyptic. You are losing millions of dollars a week. AMC Theaters, the largest chain, has publicly declared war on you and refuses to negotiate. What is your immediate strategy to manage the burn?
    options:
      - text: "Implement friction. Limit access to major blockbusters opening weekend, restrict repeat viewings, and require ticket stub photos."
        next: "implement_friction"
        points: 50
        rationale: "You must stem the bleeding immediately, even if it hurts the user experience. Survival over hypergrowth."
      - text: "Double down on growth. Raise more capital, keep the unlimited promise pure, and force AMC to the table through sheer user demand."
        next: "double_down"
        points: 0
        rationale: "Ignoring unit economics at this scale accelerates the death spiral. AMC has no incentive to rescue you."

  implement_friction:
    dimension: product
    prompt: |
      The friction reduces the burn slightly, but users are furious. The app's ratings plummet, and churn spikes. You need a sustainable path forward that doesn't feel like a bait-and-switch. How do you restructure the product?
    options:
      - text: "Pivot to a tiered model: $9.95 for 3 movies a month, higher tiers for unlimited or premium formats (IMAX/3D)."
        next: "tiered_model"
        points: 50
        rationale: "A capped model provides predictable costs and aligns value with price."
      - text: "Keep the unlimited model, but introduce surge pricing for popular movies and times to offset the cost."
        next: "surge_pricing"
        points: 0
        rationale: "Surge pricing on top of a subscription feels punitive and destroys the 'unlimited' value proposition."

  double_down:
    dimension: founder
    prompt: |
      You raise more money, but the cash incinerator is running too hot. The stock price of your parent company is crashing. The service is experiencing 'outages' because you literally cannot afford to load the debit cards. The SEC is asking questions. What is your final play?
    options:
      - text: "Halt the service immediately, declare bankruptcy, and try to sell the data assets to recoup some investor capital."
        next: "declare_bankruptcy"
        points: 50
        rationale: "Recognize when the game is over. Protect what little value remains."
      - text: "Take out a high-interest emergency loan to turn the service back on for the weekend blockbusters to keep the illusion alive."
        next: "emergency_loan"
        points: 0
        rationale: "This is exactly what MoviePass did. It was a desperate, fatal move that just prolonged the inevitable collapse."

  tiered_model:
    isOutcome: true
    prompt: |
      The transition to a tiered model is painful. You lose a huge chunk of your user base, but the unit economics finally stabilize. You become a niche service, but a sustainable one. You survived the hypergrowth trap.
      
      Score: 100/100
      You prioritized survival over vanity metrics.

  surge_pricing:
    isOutcome: true
    prompt: |
      Surge pricing is a disaster. Users feel nickel-and-dimed. The backlash is immense, and churn accelerates. The company collapses under the weight of bad PR and continued losses.
      
      Score: 50/100
      You tried to fix the economics, but alienated the customer base too deeply.

  declare_bankruptcy:
    isOutcome: true
    prompt: |
      It's a bitter end, but the responsible one. You shut it down before facing legal repercussions for operating while insolvent.
      
      Score: 50/100
      You failed, but you failed honestly.

  emergency_loan:
    isOutcome: true
    prompt: |
      This is the historical reality. MoviePass took out a desperate $5M loan just to turn the app back on for a single weekend. The company entered a death spiral of changing terms, app outages, and massive shareholder value destruction.
      
      Score: 0/100
      You believed your own hype and ignored the math.
---
