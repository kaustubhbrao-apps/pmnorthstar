---
slug: wework-hypergrowth-2017
caseStudySlug: wework-hypergrowth-2017
type: historical
category: Founder
year: 2017
estimatedMinutes: 15
publishedAt: '2026-12-06T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-11-25T15:00:00+00:00'
principle: |
  Disguising a capital-intensive real estate business as a high-margin software technology company 
  will eventually collapse under public market scrutiny. The reality distortion field that works on 
  venture capitalists shatters when exposed to institutional public market fundamentals.
intro: |
  It's 2017. You are the Chief Financial Officer at WeWork, working closely with the charismatic and 
  mercurial founder, Adam Neumann. SoftBank, led by Masayoshi Son, has just poured billions into the 
  company, valuing it at an astronomical $20 billion. The mandate from Neumann and Son is simple: 
  blitzscale. Grow at all costs, open locations globally, and dominate the market before anyone else can.
  
  Internally, the financial reality is terrifying. The company's core business model involves signing 
  15-year commercial leases at market peaks, renovating the spaces heavily with capital expenditure, and 
  then renting them out on month-to-month terms to freelancers and startups. The mismatch in duration 
  liability is massive. To hide the bleeding, the company uses a fabricated metric called "Community 
  Adjusted EBITDA" which strips out basic operating expenses like rent, marketing, and administration.
  
  You are aggressively expanding, acquiring completely unrelated companies (like a wave pool startup and 
  a superfood company), and positioning WeWork not as a real estate company, but as a "physical social 
  network," a "state of consciousness," and a tech company. 
  
  The IPO is looming on the horizon. This is a Tier 1 League Match. The decisions are binary and the 
  consequences are terminal.
nodes:
  start:
    dimension: strategy
    prompt: |
      The push for expansion is relentless. Adam wants to double the global square footage in the next 12 
      months. This requires signing hundreds of new, highly expensive long-term leases immediately. Your 
      internal finance team models show that a slight dip in macroeconomic occupancy will cause a severe, 
      unrecoverable cash crisis. What is your recommendation to the board and Adam?
    options:
      - text: Advise pulling back immediately. Focus on achieving profitability in existing mature locations before signing any new leases.
        points: 15
        pattern: financial-fiduciary
        rationale: |
          Fundamentals matter. A real estate business cannot scale infinitely without sound unit economics. 
          Ignoring a massive liability mismatch in a cyclical industry like commercial real estate is fiduciary 
          negligence.
        consequence: |
          You present the models. The finance team supports you. The room goes dead silent. Adam Neumann glares 
          at you.
        leadsTo: pull_back
      - text: Support the hypergrowth. SoftBank is demanding it, and capturing the global market now will give you pricing power later.
        points: 0
        pattern: enabling-delusion
        rationale: |
          This accelerates the massive liability mismatch. You are building a house of cards. Real estate 
          does not have the zero-marginal-cost network effects of software; you do not gain monopolistic 
          pricing power just by being the biggest tenant in a city.
        consequence: |
          You sign off on the leases. The burn rate skyrockets to $100 million a week. The valuation hits $47B.
        leadsTo: support_growth

  pull_back:
    dimension: founder
    prompt: |
      Adam Neumann is furious. He views your caution as a lack of vision and a betrayal of the company's 
      "spiritual energy." Masayoshi Son agrees with Adam, famously telling him he isn't being "crazy enough." 
      Adam threatens to push you out of the leadership team entirely if you don't align with the hypergrowth 
      mandate. What do you do?
    options:
      - text: Stand your ground. Present the hard financial data directly to the major institutional investors, risking your job.
        points: 15
        pattern: professional-integrity
        rationale: |
          Fiduciary duty requires confronting a founder who is completely disconnected from financial reality, 
          even if it costs you your position. You cannot sign off on fraudulent metrics.
        consequence: |
          You are fired within the week. You are stripped of unvested equity and escorted from the building.
        leadsTo: stand_ground_outcome
      - text: Back down. You can't fight the founder and the lead investor. Try to manage the margins incrementally from within.
        points: 0
        pattern: cowardly-compliance
        rationale: |
          Incremental margin management cannot fix a fundamentally broken business model. By staying, you become 
          complicit in the impending disaster.
        consequence: |
          You stay. You sign off on the aggressive leases, knowing they are toxic.
        leadsTo: support_growth

  support_growth:
    dimension: business
    prompt: |
      The hypergrowth continues unabated. The private valuation hits $47 billion. You are preparing the S-1 
      document for the highly anticipated IPO. 
      
      Adam insists on including several toxic elements in the filing: retaining absolute voting control (20 
      votes per share), disclosing that he charged the company $5.9M for the "We" trademark, detailing massive 
      loans the company gave him personally, and heavily featuring the nonsensical "Community Adjusted EBITDA" 
      metric. 
      
      The investment bankers are getting extremely nervous, but Adam is adamant. What is your stance on the S-1?
    options:
      - text: Force a rewrite. Remove the absurd metrics, limit Adam's control, and present WeWork honestly as a real estate company.
        points: 12
        pattern: reality-check
        rationale: |
          Public markets will not accept the reality distortion field that worked on private venture capitalists. 
          Institutional investors read S-1s looking for governance risks and cash flow reality.
        consequence: |
          Adam refuses the rewrite. It becomes a massive boardroom battle, but you force some concessions.
        leadsTo: force_rewrite_outcome
      - text: Publish the S-1 exactly as Adam wants. The tech-like narrative is the only way to justify the $47B valuation.
        points: 0
        pattern: public-market-hubris
        rationale: |
          This is the historical reality. Believing that Wall Street will buy a real estate company at software 
          multiples just because the founder uses the word "community" is the height of corporate hubris.
        consequence: |
          The S-1 drops on the SEC website. The financial press and Twitter tear it to absolute shreds within hours.
        leadsTo: post_s1_crisis

  post_s1_crisis:
    dimension: strategy
    prompt: |
      The S-1 is a disaster. It is universally mocked. The media exposes the self-dealing, the bizarre corporate 
      structure, and the horrific unit economics. Institutional investors are balking. The underwriters (JPMorgan 
      and Goldman Sachs) warn that the IPO might only price at a $15 billion valuation, down from $47B. 
      Cash is running out. What is your emergency move?
    options:
      - text: Delay the IPO indefinitely. Oust Adam Neumann to appease investors, and beg SoftBank for a bailout.
        points: 15
        pattern: emergency-amputation
        rationale: |
          The founder has become the primary liability. The public markets will not invest a dollar while he 
          remains in control. You must amputate the leadership to save the underlying assets.
        consequence: |
          The board moves against Adam. He is ousted as CEO (with a massive golden parachute). SoftBank agrees 
          to a highly dilutive bailout to prevent immediate bankruptcy.
        leadsTo: historical_collapse
      - text: Push forward with the roadshow immediately. Rely on Adam's charisma to win over retail investors.
        points: 0
        pattern: terminal-delusion
        rationale: |
          Institutional investors control the IPO process, not retail. Charisma does not survive detailed 
          questions about massive negative cash flows and self-dealing from cynical mutual fund managers.
        consequence: |
          The roadshow is a catastrophe. Investors walk out of meetings. The underwriters officially pull the IPO.
        leadsTo: terminal_bankruptcy

  stand_ground_outcome:
    isOutcome: true
    prompt: |
      You were fired, but you left with your integrity intact. Months later, the S-1 is published, the public 
      markets reject it violently, and the company nearly goes bankrupt. You watch from the sidelines, entirely 
      vindicated, and are soon hired as CFO for a much more stable company.
      
      Score: 100/100
      You correctly identified a toxic and unsustainable business model and refused to compromise your fiduciary duty.

  force_rewrite_outcome:
    isOutcome: true
    prompt: |
      The more honest S-1 reveals massive losses and a traditional real estate model. The valuation is slashed 
      to $15B before the roadshow even begins. It's a painful down-round IPO, but the company goes public, 
      raises the necessary capital, and avoids total collapse. Adam's wings are clipped early.
      
      Score: 60/100
      You forced a painful reality check, but the damage of the hypergrowth phase was already largely done.

  historical_collapse:
    isOutcome: true
    prompt: |
      This is the historical reality. The IPO was pulled. Adam Neumann was ousted in a boardroom coup. The 
      valuation plummeted from $47 billion to under $8 billion in a matter of weeks. The company underwent 
      massive layoffs and barely survived via a multi-billion dollar bailout from SoftBank, becoming the poster 
      child for unicorn hubris.
      
      Score: 20/100
      You participated in one of the greatest corporate delusions in modern history, but managed to hit the 
      eject button right before the plane hit the mountain.

  terminal_bankruptcy:
    isOutcome: true
    prompt: |
      By pushing forward with the roadshow, the underwriters abandon you. The company runs out of cash three 
      weeks later and files for Chapter 11 bankruptcy. Billions of dollars are wiped out overnight.
      
      Score: 0/100
      You drove the company straight off the cliff.

---
## What actually happened — the reveal

This drill is based on the spectacular 2019 collapse of **WeWork's** initial public offering.

Under the leadership of Adam Neumann and fueled by billions from SoftBank's Vision Fund, WeWork attempted 
to scale a traditional, capital-intensive commercial real estate business as if it were a high-margin software 
company. They signed massive, long-term liabilities while booking short-term, volatile revenues.

The delusion held in the private markets, where Neumann's charisma and SoftBank's seemingly infinite capital 
pushed the private valuation to an absurd **$47 billion**. 

However, public markets demand rigorous financial disclosures. When WeWork filed its S-1 document in August 2019, 
the "reality distortion field" vanished. Financial analysts and the media tore the document apart. They mocked 
the fabricated "Community Adjusted EBITDA" metric, which attempted to pretend that basic expenses didn't exist. 
More devastatingly, the S-1 revealed egregious corporate governance issues and self-dealing, including Neumann 
trademarking the word "We" and selling it back to his own company for $5.9 million.

The institutional investor pushback was so severe that the estimated valuation plummeted to below $15 billion 
within weeks. Seeing the impending disaster, the underwriters balked, and the IPO was officially withdrawn.

Facing immediate insolvency, the board ousted Adam Neumann (though he left with a controversial $1.7 billion 
exit package). SoftBank was forced to orchestrate a massive bailout to save the company from bankruptcy. 

WeWork's failed IPO remains one of the most defining cautionary tales in business history, marking the end of 
an era of "growth at all costs" venture capital and a return to evaluating unit economics and corporate governance.
