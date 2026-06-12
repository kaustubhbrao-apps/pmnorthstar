---
slug: apple-opens-siri-to-llms-2026
type: current
category: strategic
publishedAt: '2026-06-11T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-07-08T15:00:00+00:00'
estimatedMinutes: 7
principle: |
  Platform moves by hyperscalers don't kill verticals — they reshape
  what the vertical has to be. When Apple opens Siri, the question
  isn't "do we compete with Siri" but "what do we own that becoming
  a Siri-plugin doesn't erase?"
intro: |
  You are the CEO of a voice-AI startup. ~$2M ARR. Your moat was
  "voice + AI in one product" — your assistant runs on iOS and Android,
  uses your own NLU pipeline plus an LLM backend, and your enterprise
  customers (call centers, legal intake, healthcare scheduling) pay
  $50-200/seat/month for it.

  This morning at WWDC, Apple announced that iOS 20 will let any
  third-party developer plug their own LLM into Siri for specific
  query categories. Users can pick their default LLM the same way
  they pick their default browser. The integration is deep: app
  context, on-device privacy guarantees, system-level voice access.

  Your phone is ringing. Your enterprise customers want to know what
  this means. Your board wants to know what you're doing. Your
  engineering team is split.
nodes:
  start:
    dimension: founder
    prompt: |
      The market has just changed shape. Pick the move.
    options:
      - text: Build a Siri plugin. Position as 'the best LLM for voice on iOS.'
        points: 9
        pattern: ride-the-platform
        rationale: |
          The defensive-but-fast move.
        consequence: |
          Plugin ships in 6 weeks. Downloads spike.
        leadsTo: A-plugin-followup
      - text: Pivot to a vertical — pick legal voice, medical voice, or call-center voice and own it.
        points: 15
        pattern: own-a-vertical
        rationale: |
          The right strategic move.
        consequence: |
          You spend 4 weeks picking the vertical, then commit.
        leadsTo: B-vertical-followup
      - text: Sell the company now while you can. Apple just commoditized your category.
        points: 6
        pattern: capitulate-too-early
        rationale: |
          Defensible logic, premature timing.
        consequence: |
          Acquisition talks begin.
        leadsTo: C-sell-2
      - text: Stay horizontal. Double down on Android + web where Apple's move doesn't reach.
        points: 6
        pattern: avoid-the-fight
        rationale: |
          The "go where they aren't" instinct.
        consequence: |
          You ship Android features through Q3.
        leadsTo: D-android-2

  A-plugin-followup:
    dimension: product
    prompt: |
      The plugin is live. Downloads are strong but ARPU collapsed. What now?
    options:
      - text: Make the consumer plugin free forever. Use it as a top-of-funnel for enterprise.
        points: 12
        pattern: free-tier-as-funnel
        rationale: |
          Smart funnel math.
        consequence: |
          Free plugin drives 200K downloads.
        leadsTo: A-free-3
      - text: Try to monetize the consumer plugin via premium features. Charge $5/month.
        points: 3
        pattern: monetize-where-platform-owns
        rationale: |
          Doomed. The user already pays Apple for iCloud.
        consequence: |
          Premium conversion is <0.4%.
        leadsTo: A-premium-3

  A-free-3:
    dimension: business
    prompt: |
      The free plugin is driving massive volume but the API costs are staggering.
    options:
      - text: Cap free usage aggressively to save cash.
        points: 6
        pattern: throttling-funnel
        rationale: |
          Kills the funnel momentum.
        consequence: |
          Users abandon the plugin, enterprise leads dry up.
        leadsTo: end-A-free-cap
      - text: Switch to a much cheaper open-source model for the free tier.
        points: 15
        pattern: architectural-efficiency
        rationale: |
          Solves the margin issue while preserving the funnel.
        consequence: |
          Margins stabilize, funnel continues to pump.
        leadsTo: end-A-free-model

  A-premium-3:
    dimension: founder
    prompt: |
      Premium conversion failed. You burned 6 months. Investors are angry.
    options:
      - text: Apologize, drop the paywall, and pivot back to enterprise.
        points: 12
        pattern: eat-crow
        rationale: |
          Takes humility but saves the business.
        consequence: |
          You recover the enterprise focus just in time.
        leadsTo: end-A-prem-pivot
      - text: Keep tweaking the premium features hoping to find product-market fit.
        points: 3
        pattern: stubborn-failure
        rationale: |
          Fighting the platform owner never works.
        consequence: |
          You run out of money and fold.
        leadsTo: end-A-prem-die

  B-vertical-followup:
    dimension: business
    prompt: |
      You picked Legal Voice. Pricing decision: per-seat or per-firm?
    options:
      - text: Per-firm flat fee. $50K/year for unlimited seats.
        points: 12
        pattern: simple-pricing-for-trust
        rationale: |
          Clean, defensible, easy for legal procurement.
        consequence: |
          You sign 12 firms in 6 months.
        leadsTo: B-firm-3
      - text: 'Per-seat: $200/month. Tiered by usage.'
        points: 9
        pattern: granular-pricing
        rationale: |
          Creates friction in legal procurement.
        consequence: |
          Sales cycles stretch to 5-6 months.
        leadsTo: B-seat-3
      - text: Free for solo lawyers. Pay only for firms over 10 attorneys.
        points: 15
        pattern: bottom-up-then-top-down
        rationale: |
          The PLG-into-enterprise move.
        consequence: |
          Solo signups hit 8K in 6 months.
        leadsTo: B-solo-3

  B-firm-3:
    dimension: product
    prompt: |
      You signed 12 firms. Some big firms are quietly absorbing hundreds of seats and ruining your compute margins.
    options:
      - text: Force a contract renegotiation immediately.
        points: 6
        pattern: breach-of-trust
        rationale: |
          Lawyers don't like renegotiating mid-contract.
        consequence: |
          You lose 4 of your best reference customers.
        leadsTo: end-B-firm-reneg
      - text: Eat the cost for Year 1, fix it in renewals.
        points: 15
        pattern: honor-the-deal
        rationale: |
          You bought market share and reference logos. Keep them happy.
        consequence: |
          You fix pricing in Year 2 and retain 100%.
        leadsTo: end-B-firm-eat

  B-seat-3:
    dimension: business
    prompt: |
      Sales cycles are 6 months long. Cash is getting tight.
    options:
      - text: Discount heavily to close deals faster.
        points: 6
        pattern: desperation-pricing
        rationale: |
          Devalues the product in a prestige market.
        consequence: |
          You close deals but destroy long-term ARPU.
        leadsTo: end-B-seat-disc
      - text: Hold the price, raise a bridge round.
        points: 12
        pattern: hold-the-line
        rationale: |
          Enterprise sales take time. Capitalize the business correctly.
        consequence: |
          You raise the bridge and close the massive deals.
        leadsTo: end-B-seat-bridge

  B-solo-3:
    dimension: product
    prompt: |
      8K solo lawyers are using it free. 47 join large firms.
    options:
      - text: Build advanced admin tools to help firms manage these bottom-up seats.
        points: 15
        pattern: enable-the-champion
        rationale: |
          You give IT a reason to say yes to the bottoms-up adoption.
        consequence: |
          Enterprise conversion skyrockets.
        leadsTo: end-B-solo-admin
      - text: Just cold-email the firm IT departments and demand payment.
        points: 3
        pattern: shadow-it-shakedown
        rationale: |
          Hostile tactic that alienates the buyer.
        consequence: |
          IT bans your app network-wide.
        leadsTo: end-B-solo-ban

  C-sell-2:
    dimension: founder
    prompt: |
      Best offer is 1x ARR. You take it. The team is demoralized.
    options:
      - text: Try to renegotiate at the last minute based on a new feature launch.
        points: 3
        pattern: bad-faith-deal
        rationale: |
          Destroys trust with the acquirer.
        consequence: |
          The acquirer walks away. You have nothing.
        leadsTo: C-reneg-3
      - text: Accept the deal gracefully and take care of the team.
        points: 9
        pattern: professional-exit
        rationale: |
          You lost, but you don't have to burn bridges.
        consequence: |
          The team lands softly.
        leadsTo: C-accept-3

  C-reneg-3:
    dimension: business
    prompt: |
      The acquirer walked. You are alone and out of money.
    options:
      - text: Fire sale to a competitor for literally anything.
        points: 6
        pattern: scrap-value
        rationale: |
          Getting pennies.
        consequence: |
          You sell the IP for $100K.
        leadsTo: end-C-ren-fire
      - text: Shut down and open source.
        points: 12
        pattern: community-salvage
        rationale: |
          Better karma than a $100K fire sale.
        consequence: |
          You shut down with dignity.
        leadsTo: end-C-ren-os

  C-accept-3:
    dimension: product
    prompt: |
      You are now inside a massive tech corp. They want to kill your product.
    options:
      - text: Fight internally to keep it alive.
        points: 6
        pattern: corporate-politics
        rationale: |
          You have no leverage.
        consequence: |
          You waste 2 years of your life in meetings.
        leadsTo: end-C-acc-fight
      - text: Vest and rest.
        points: 9
        pattern: check-out
        rationale: |
          Rational response to a dead product.
        consequence: |
          You collect your check and leave.
        leadsTo: end-C-acc-vest

  D-android-2:
    dimension: business
    prompt: |
      You shipped Android features. Google announces a similar plugin model at I/O.
    options:
      - text: Panic pivot to B2B enterprise voice.
        points: 9
        pattern: late-to-the-party
        rationale: |
          You are 12 months behind the people who pivoted at WWDC.
        consequence: |
          You struggle to catch up.
        leadsTo: D-b2b-3
      - text: Try to build your own hardware device (like Rabbit R1) to escape OS monopolies.
        points: 3
        pattern: hardware-delusion
        rationale: |
          Hardware is a completely different business with brutal capital requirements.
        consequence: |
          You burn your remaining $2M in supply chain costs.
        leadsTo: D-hardware-3

  D-b2b-3:
    dimension: founder
    prompt: |
      You are behind in B2B. Competitors have the best logos.
    options:
      - text: Go down-market to SMBs.
        points: 12
        pattern: find-open-water
        rationale: |
          SMBs are unserved by the enterprise players.
        consequence: |
          You build a decent mid-market business.
        leadsTo: end-D-b2b-smb
      - text: Try to out-engineer the leaders on enterprise features.
        points: 6
        pattern: fighting-from-behind
        rationale: |
          They have more funding and reference customers.
        consequence: |
          You fail to win deals.
        leadsTo: end-D-b2b-ent

  D-hardware-3:
    dimension: product
    prompt: |
      The hardware prototypes are buggy.
    options:
      - text: Ship it anyway to get revenue.
        points: 3
        pattern: ship-broken-hardware
        rationale: |
          Hardware doesn't iterate like software.
        consequence: |
          Massive returns, terrible reviews.
        leadsTo: end-D-hw-ship
      - text: Cancel the project and return remaining capital to investors.
        points: 15
        pattern: honest-failure
        rationale: |
          The most honorable move when the thesis breaks.
        consequence: |
          Investors respect you for not burning it all.
        leadsTo: end-D-hw-cancel

  end-A-free-cap:
    isOutcome: true
    prompt: |
      Capping the free tier killed your funnel. You eventually sold the company for parts.
  end-A-free-model:
    isOutcome: true
    prompt: |
      The open-source switch worked. You built a strong enterprise business powered by a massive free Siri presence.
  end-A-prem-pivot:
    isOutcome: true
    prompt: |
      You wasted time, but surviving is surviving. You rebuilt the enterprise business.
  end-A-prem-die:
    isOutcome: true
    prompt: |
      You fought the platform and the platform won. The company went bankrupt.
  end-B-firm-reneg:
    isOutcome: true
    prompt: |
      Renegotiating mid-contract ruined your reputation in the legal vertical. Growth stalled.
  end-B-firm-eat:
    isOutcome: true
    prompt: |
      Eating the cost built massive trust. By Year 2, you fixed pricing and became highly profitable.
  end-B-seat-disc:
    isOutcome: true
    prompt: |
      You became the "cheap" option in legal tech. A competitor took the premium market.
  end-B-seat-bridge:
    isOutcome: true
    prompt: |
      The bridge round gave you time to close. You became a $20M ARR juggernaut.
  end-B-solo-admin:
    isOutcome: true
    prompt: |
      Admin tools unlocked the enterprise. You executed the PLG playbook perfectly.
  end-B-solo-ban:
    isOutcome: true
    prompt: |
      Hostile IT tactics got you banned. Your bottoms-up growth engine died overnight.
  end-C-ren-fire:
    isOutcome: true
    prompt: |
      A $100K fire sale. A depressing end to a once-promising company.
  end-C-ren-os:
    isOutcome: true
    prompt: |
      Open-sourcing won you massive developer goodwill. Your next startup was easily funded.
  end-C-acc-fight:
    isOutcome: true
    prompt: |
      You wasted years fighting corporate bureaucracy. The product died anyway.
  end-C-acc-vest:
    isOutcome: true
    prompt: |
      You vested, rested, and moved on. The product was quietly sunsetted.
  end-D-b2b-smb:
    isOutcome: true
    prompt: |
      SMB voice became a great niche. You didn't win the category, but you built a real business.
  end-D-b2b-ent:
    isOutcome: true
    prompt: |
      You couldn't catch up in enterprise. The company folded.
  end-D-hw-ship:
    isOutcome: true
    prompt: |
      The hardware reviews were brutal. You had to process thousands of refunds and went bankrupt.
  end-D-hw-cancel:
    isOutcome: true
    prompt: |
      Returning the capital was the right move. The investors funded your next company immediately.
---
## What's at stake here

The pattern: when a platform owner (Apple, Google, Microsoft, Meta)
absorbs a horizontal capability into their OS, the founders who
**panic and pivot to compete with the platform** lose. The founders who
**panic and pivot to a vertical the platform won't ever serve
deeply** consistently win.

Examples from history: Mailchimp survived Google ads moving in by
going deep on small-business automation. Zapier survived Microsoft
Power Automate by owning the long-tail of integrations. Calendly
survived Google/Microsoft calendar features by owning the cross-
company scheduling use case.

The platform threat is a clarifying force, not an ending one.

**Related reading:** [Apple Intelligence Failed in 2026](/ai-decoded/apple-intelligence-flop-2026)
