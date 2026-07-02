---
slug: uber-cold-start-seattle-2011
caseStudySlug: uber-cold-start-seattle-2011
type: historical
category: Strategy
year: 2011
estimatedMinutes: 16
publishedAt: '2026-11-25T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-12-02T15:00:00+00:00'
principle: In a two-sided marketplace, liquidity is the only metric that matters.
intro: |
  It is March 2011. You are the Launch Lead for Uber. After a successful but small launch in San Francisco, you are tasked with opening your first expansion city: Seattle.
  The problem is the "Cold Start." You have zero drivers and zero riders. If a rider opens the app and sees "No Cars Available," they delete the app and never come back. If a driver logs on and gets no rides for an hour, they go back to driving for a traditional limo company.
  You have a limited budget from Travis Kalanick. You need to create "Liquidity" (the state where a rider can get a car in under 5 minutes) as fast as possible. But Seattle is a different beast than SF. The hills are steeper, the weather is worse, and the taxi lobby is more aggressive.
  You must decide how to prime the pump. Do you focus your scarce resources on recruiting drivers (Supply) or acquiring riders (Demand)? In the marketplace wars, getting this sequence wrong is the fastest way to burn $10M and fail the expansion test.
nodes:
  start:
    dimension: business
    prompt: |
      You are landing in Seattle with $50,000 for your first month. You need to
      solve the Chicken-and-Egg problem. Your team is divided on the "First
      Move." 

      How do you allocate the majority of your launch budget?
    options:
      - text: 'Demand-First: Spend $40k on ''Free First Ride'' coupons for tech workers in downtown Seattle.'
        points: 5
        pattern: False Growth
        rationale: Creates an immediate surge in app downloads, but without enough drivers on the road, 90% of those riders will see 'No Cars Available' and have a terrible first experience.
        consequence: You get 5,000 downloads in 48 hours. But the 'ETA' for a car is 45 minutes. Riders are furious. You've poisoned the well in Seattle before the first car even hits the road.
        leadsTo: demand_failure
      - text: 'Supply-First: Spend $40k guaranteeing drivers $30/hour to stay logged in, even if they have zero rides.'
        points: 30
        pattern: Liquidity Priming
        rationale: This 'guarantees' supply. It removes the risk for drivers, ensuring they are on the road the moment you turn on the marketing for riders. You are buying 'Inventory' to ensure a low ETA.
        consequence: You secure 20 reliable drivers. ETAs in the downtown core drop to 6 minutes. You are now ready to 'pull' the demand lever because you know the product will actually work.
        leadsTo: rider_acquisition
      - text: 'The ''Limo Blitz'': Partner with existing high-end limo companies to list their entire fleet on Uber for a high commission.'
        points: 15
        pattern: Asset-Light Entry
        rationale: Quickly adds supply without the 'Guaranteed Pay' risk. But these drivers will always prioritize their own high-paying private clients over your occasional Uber pings.
        consequence: You have 50 cars on the map, but 'phantom' availability. Drivers cancel Uber rides the moment a private client calls them. Reliability is spotty, and the brand is seen as 'unreliable luxury.'
        leadsTo: reliability_crisis
  rider_acquisition:
    dimension: business
    prompt: |
      Supply is locked in. You have 20 cars circling Seattle. Now you need
      riders. The traditional taxi companies have found out about you and are
      lobbyng the city council to ban 'unlicensed' dispatch apps.

      You need to build a base of 'Power Users' fast to create political
      leverage. How do you target?
    options:
      - text: 'The ''Rainy Day'' Surge: Wait for a typical Seattle storm and send a push notification: ''Taxis are full. Uber is here. 50% off.'''
        points: 30
        pattern: Contextual Utility
        rationale: Taxis are impossible to find in Seattle rain. By solving a high-pain problem at the perfect moment, you turn a 'curious downloader' into a 'lifelong advocate.'
        consequence: It works. You hit 2,000 rides in one night. The user feedback is ecstatic. You've found 'Product-Market Fit' for the Seattle context.
        leadsTo: scaling_the_moat
      - text: 'The ''Influencer'' Event: Sponsor the ''Seattle Tech Awards'' and provide free rides for all attendees.'
        points: 10
        pattern: Ego-Driven Marketing
        rationale: Gets the 'right' people talking, but it's a one-off event. It doesn't build the daily habit needed for marketplace liquidity.
        consequence: You get some nice tweets, but the 'Monday Morning' ride volume is still low. You are burning your supply guarantees with no organic demand to replace them.
        leadsTo: market_exit
  reliability_crisis:
    dimension: product
    prompt: |
      Your 'Limo Blitz' supply strategy is failing. Cancellation rates are at
      40%. Riders are opening the app, seeing a car 2 minutes away, only for the
      driver to cancel 30 seconds later. 

      You are losing trust. How do you fix the driver behavior?
    options:
      - text: 'The ''Penalty Box'': Automatically ban any driver who cancels more than 10% of their Uber pings.'
        points: 5
        pattern: Punitive Management
        rationale: Tries to force behavior, but these drivers don't 'need' Uber yet. They will simply stop using the app entirely.
        consequence: Supply drops by 70%. You now have zero cars on the map. The Seattle launch is effectively dead.
        leadsTo: market_exit
      - text: 'The ''Uber-Only'' Bonus: Offer a $500 weekly bonus to any driver who completes 40+ rides exclusively through your app.'
        points: 25
        pattern: Incentivized Loyalty
        rationale: Converts 'Part-Time' supply into 'Dedicated' supply. It's expensive, but it's the only way to ensure the car stays on the map for your riders.
        consequence: Reliability improves. 15 drivers become 'Uber-dedicated.' ETAs stabilize, but your 'Burn Rate' per ride is unsustainable. You need a massive demand spike now to stay alive.
        leadsTo: rider_acquisition
  scaling_the_moat:
    dimension: product
    prompt: |
      You have won the 'Downtown' core. But expansion to the suburbs is slow.
      Drivers don't want to go there because they fear 'dead-heading' (driving
      back empty). 

      How do you expand the 'Liquidity Zone' without breaking your unit
      economics?
    options:
      - text: 'The ''Heat Map'': Show drivers exactly where the demand is in real-time to encourage them to spread out.'
        points: 20
        pattern: Information Transparency
        rationale: Uses data to solve driver anxiety. It encourages 'self-balancing' of the marketplace without direct subsidies.
        consequence: The map fills out. You hit 'City-Wide Liquidity.' ETAs are under 8 minutes everywhere in Greater Seattle. You have successfully conquered your first expansion city.
        leadsTo: expansion_champion
      - text: 'Suburban Subsidies: Pay drivers an extra $5 per ride for any pickup outside the downtown core.'
        points: 10
        pattern: Direct Subsidy
        rationale: Guarantees coverage, but you're now paying for rides that might not be profitable. It trains drivers to only work where the 'bonus' is.
        consequence: Coverage is great, but the moment you lower the subsidy, drivers return to the city. You haven't built a sustainable marketplace; you've built a dependency.
        leadsTo: unit_economic_failure
  demand_failure:
    isOutcome: true
    prompt: |
      ### Outcome: The Empty Map
      You focused on the 'Vanity' of downloads before the 'Utility' of supply. 

      Thousands of people opened your app and saw an empty map. In the world of high-frequency utilities, you only get one chance at a first impression. You've branded Uber as 'the app that doesn't have cars' in Seattle. 

      **League Score Impact:** -40 Points (Fundamental Marketplace Error).
  market_exit:
    isOutcome: true
    prompt: |
      ### Outcome: The Seattle Retreat
      By failing to manage driver incentives and reacting punitively to supply shortages, you've alienated the driver community. 

      The taxi companies have won the PR war by claiming Uber is 'unreliable and dangerous.' Travis pulls the plug on Seattle to focus on New York. Your career at Uber is likely over.

      **League Score Impact:** -60 Points (Catastrophic Failure).
  unit_economic_failure:
    isOutcome: true
    prompt: |
      ### Outcome: The Subsidy Trap
      You launched successfully, but you never transitioned from 'Buying Growth' to 'Organic Liquidity.' 

      Your LTV/CAC ratio is upside down. While you have a large user base, the company is losing $10 on every ride in Seattle. Investors are worried you can't scale without endless VC cash.

      **League Score Impact:** +20 Points (Good growth, bad business).
  expansion_champion:
    isOutcome: true
    prompt: |
      ### Outcome: The Expansion Blueprint
      You didn't just launch Seattle; you built the **Uber Playbook.** 

      By prioritizing supply guarantees, using rain as a demand trigger, and balancing the market with data (heat maps), you've created a machine that can be dropped into any city in the world. You are promoted to Head of Global Expansion.

      **League Score Impact:** +80 Points (Mastery of Marketplace Dynamics).
---
The Uber Seattle launch was the moment the company realized it wasn't a 'Limo App'—it was a **Liquidity Engine.** They learned that 'ETA' is the only product metric that actually correlates with user retention. If the car is there in 5 minutes, you win. Everything else is secondary.

**Related reading:** [Uber's City-by-City Blitzscaling Playbook](/case-study/uber-blitzscaling)
