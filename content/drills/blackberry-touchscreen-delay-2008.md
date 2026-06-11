---
slug: blackberry-touchscreen-delay-2008
type: historical
category: Strategy
year: 2008
estimatedMinutes: 20
publishedAt: '2026-07-08T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-07-12T15:00:00+00:00'
principle: Incremental half-measures fail when a paradigm shift demands a complete leap. Defending a legacy moat against a disruptive platform shift only guarantees you die with your moat intact.
intro: |
  It's early 2008. You are a senior PM at Research In Motion (RIM / BlackBerry), the undisputed king of the smartphone market. 

  The iPhone launched last year. Initially, your co-CEOs dismissed it as a toy—it has terrible battery life, no secure enterprise email, and most glaringly, no physical keyboard. But the iPhone is starting to gain serious traction with consumers, and worse, executives are starting to bring their personal iPhones into the office and demanding IT support them.

  Verizon, your biggest carrier partner and distribution channel, is panicking. They want an "iPhone killer." They are demanding a full touchscreen device from RIM to compete with AT&T's exclusive lock on the iPhone. 

  But your core enterprise users—and your executive board—firmly believe the physical keyboard is your untouchable moat. Typing on a flat screen is seen as an inferior, frustrating experience.

  You need to design the BlackBerry Storm to satisfy Verizon without alienating your core base. 

  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal for the company.
nodes:
  start:
    dimension: product
    prompt: |
      The hardware design phase is kicking off for the BlackBerry Storm. How do you design the touchscreen experience to compete with Apple while satisfying your internal stakeholders?
    options:
      - text: Invent 'SurePress' - a clicky, mechanical touchscreen where the entire screen acts as a giant physical button that depresses when pushed, simulating a real keyboard.
        leadsTo: node_surepress
        points: 0
        pattern: complex-half-measure
        rationale: |
          Wrong. A mechanical touchscreen is incredibly complex, prone to hardware failure, and gives the worst of both worlds: it lacks the fluid typing of a capacitive screen and the tactile certainty of individual physical keys. You are trying to bridge a paradigm shift with a mechanical hack.
        consequence: |
          The engineering team spends millions developing SurePress. It's thick, heavy, and the mechanism gets jammed easily. Verizon is skeptical but desperate, so they agree to launch it.
      - text: Go full capacitive touchscreen like the iPhone. Abandon the physical click. It will take time to get the predictive software right, but it's the future.
        leadsTo: node_capacitive
        points: 50
        pattern: paradigm-acceptance
        rationale: |
          Correct. Skating to where the puck is going. The physical keyboard paradigm is dying for mainstream consumers. You must rip the band-aid off and compete on the new vector (software, apps, touch interface) rather than defending the old one.
        consequence: |
          The hardware is a sleek slate. The executives hate it, but you push it through. However, the legacy Java-based BlackBerry OS was never designed for touch.
      - text: Refuse Verizon. Build a better physical keyboard phone (the Bold). Tell Verizon that touchscreens are a consumer fad and enterprise will never adopt them.
        leadsTo: node_refuse_verizon
        points: 0
        pattern: denial-of-reality
        rationale: |
          Wrong. While the Bold is a great phone for your existing base, refusing Verizon means you lose your primary distribution channel for any new consumer product. You are choosing to shrink your total addressable market to zero growth.
        consequence: |
          Verizon signs an exclusive deal with Google for the upcoming "Droid" franchise. You lose the carrier battle entirely.
  node_surepress:
    dimension: business
    prompt: |
      You launch the Storm with SurePress. It's a buggy nightmare. The screen clicks get stuck, the legacy OS is incredibly slow when handling touch inputs, and the browser crashes constantly. 

      Return rates at Verizon approach a staggering 100%. Verizon's CEO is furious and demanding answers. What is your immediate triage?
    options:
      - text: Recall the device immediately. Take the financial hit, apologize to Verizon, and start from scratch.
        leadsTo: end_recall
        points: 50
        pattern: extreme-ownership
        rationale: |
          Trust with your biggest distribution partner is more valuable than short-term revenue. A total recall stops the brand bleeding and shows Verizon you are a reliable partner, even in failure.
        consequence: |
          The recall costs hundreds of millions. The press has a field day. But Verizon appreciates your honesty and agrees to wait for your next attempt.
      - text: Push software updates to try and fix the lag. Keep selling the hardware to meet quarterly targets and avoid a write-down.
        leadsTo: end_brand_death
        points: 0
        pattern: protecting-the-quarter
        rationale: |
          You can't fix a fundamental hardware design flaw with software patches. By keeping a broken device in the market, you guarantee that every new customer has a terrible experience. The brand damage becomes permanent.
        consequence: |
          Verizon store reps actively tell customers *not* to buy the Storm because they don't want to deal with the returns. The BlackBerry brand becomes synonymous with "broken."
      - text: Blame the users. Release a statement saying people are "typing on it wrong" and just need to get used to SurePress.
        leadsTo: end_arrogance
        points: 0
        pattern: blaming-the-customer
        rationale: |
          Arrogance in the face of product failure is fatal. If the user can't use the product, the product is wrong.
        consequence: |
          The tech press mocks you endlessly. Apple runs ads making fun of the SurePress click. Sales drop to zero.
  node_capacitive:
    dimension: product
    prompt: |
      You build a capacitive touchscreen. But your legacy BlackBerry OS is built for trackballs and physical keys, not touch. The UI is clunky, scrolling stutters, and the browser is archaic. You need a modern OS to power this modern hardware. How do you fix the software experience?
    options:
      - text: Acquire a company (like QNX) and rewrite the entire OS from scratch for touch, even if it delays the launch by 18 months.
        leadsTo: end_qnx
        points: 100
        pattern: structural-rebuild
        rationale: |
          A legacy OS bolted onto modern hardware is a dead end. You need a modern UNIX-like foundation to support a real browser and modern apps. Taking the pain of an 18-month delay is the only way to survive the decade.
        consequence: |
          You delay the Storm. Verizon is angry but accepts it. You spend the next year and a half rewriting the company's core technology.
      - text: Slap a touch-friendly UI skin on top of the legacy Java-based OS to get to market faster and hit the holiday quarter.
        leadsTo: end_slow_death
        points: 0
        pattern: technical-debt-shortcut
        rationale: |
          Technical debt will drown you. The performance will never match iOS. A skin doesn't fix the underlying architecture's inability to handle modern web browsing or fluid animations.
        consequence: |
          The device ships on time but feels laggy and cheap compared to the iPhone. App developers refuse to build for the outdated Java platform.
      - text: Adopt Android. Put BlackBerry services (BBM, secure email) on top of Google's new open-source OS.
        leadsTo: end_android
        points: 20
        pattern: platform-surrender
        rationale: |
          A valid survival strategy, but you surrender the platform moat. You become just another hardware manufacturer in a low-margin race to the bottom, though you survive.
        consequence: |
          You launch a secure Android phone. It sells moderately well to enterprise users who want modern apps, but your hardware margins collapse.
  node_refuse_verizon:
    dimension: business
    prompt: |
      Verizon is gone. They are pushing Motorola Droids heavily. Your enterprise sales are still strong, but consumer growth has flatlined. The board wants a consumer strategy.
    options:
      - text: Double down on enterprise. Ignore the consumer market. Build hyper-secure phones for governments and banks.
        leadsTo: end_enterprise_niche
        points: 30
        pattern: retreat-to-niche
        rationale: |
          If you can't win the mainstream, dominating a highly profitable niche is a valid strategy.
        consequence: |
          RIM shrinks drastically but remains highly profitable for several years as the default phone for Wall Street and the Pentagon.
      - text: Launch a tablet (the PlayBook) to show we can innovate in new consumer form factors.
        leadsTo: end_playbook
        points: 0
        pattern: unforced-expansion
        rationale: |
          You can't even build a touch phone, and you want to build a touch tablet? It's a distraction that burns capital.
        consequence: |
          The PlayBook launches without a native email app. It is a catastrophic failure that drains the company's cash reserves.
  end_recall:
    isOutcome: true
    dimension: business
    prompt: |
      **The Lost Years.**
      
      You recall the Storm. It's a massive financial write-down, but Verizon appreciates your honesty. However, the failure paralyzes your hardware team. 
      
      You lose two critical years trying to figure out what to do next, allowing Apple and Android to run away with the market. You eventually launch BlackBerry 10, but the app ecosystem has already been won by iOS and Android. RIM fades away.
  end_brand_death:
    isOutcome: true
    dimension: product
    prompt: |
      **The Death of a Brand.**
      
      The Storm becomes known as the worst device RIM ever made. Verizon forces RIM to pay hundreds of millions to replace defective units. The BlackBerry brand loses its premium reputation entirely. Enterprise users start demanding iPhones because they no longer want to be seen with a BlackBerry. The collapse is rapid and total.
  end_arrogance:
    isOutcome: true
    dimension: founder
    prompt: |
      **The Hubris Collapse.**
      
      Blaming the user is the final nail in the coffin. The market interprets RIM as an arrogant dinosaur. Sales plummet, the co-CEOs are forced out, and the company is sold for parts.
  end_qnx:
    isOutcome: true
    dimension: product
    prompt: |
      **The Painful Salvation.**
      
      You delay the launch to build on QNX. The wait is agonizing, and you lose market share in the short term. But when BlackBerry 10 finally launches, it's a modern, fluid OS that supports Android apps. 
      
      You don't beat Apple, but you secure your position as a solid #3 player in the market, deeply entrenched in enterprise and government, saving the company from total irrelevance.
  end_slow_death:
    isOutcome: true
    dimension: product
    prompt: |
      **Death by a Thousand Cuts.**
      
      The skinned OS is slow, buggy, and frustrating. Consumers mock it. Developers refuse to build apps for a dying, fragmented platform. 
      
      BlackBerry's consumer market share plummets from 50% to zero over the next four years as people flock to iOS and Android for apps.
  end_android:
    isOutcome: true
    dimension: business
    prompt: |
      **The Hardware Commodity.**
      
      You survive by adopting Android early. You become a niche hardware player making secure Android phones with physical keyboards. You exist, but you are no longer a platform kingmaker.
  end_enterprise_niche:
    isOutcome: true
    dimension: business
    prompt: |
      **The Secure Niche.**
      
      You retreat to enterprise. The company is much smaller, but highly profitable. You avoid the consumer bloodbath entirely and focus on software services and secure communications.
  end_playbook:
    isOutcome: true
    dimension: product
    prompt: |
      **The Final Distraction.**
      
      The PlayBook failure drains billions from the company. It distracts engineering from fixing the phones. The company goes bankrupt shortly after.
---
## What actually happened — the reveal

This drill is based on the real 2008 launch of the **BlackBerry Storm** by **Research In Motion**.

Under immense pressure from Verizon to deliver an "iPhone killer," RIM's co-CEOs (Mike Lazaridis and Jim Balsillie) pushed the hardware team to create a touchscreen device. But because they couldn't let go of their physical keyboard moat, they invented "SurePress"—a mechanical screen that required the user to physically depress the entire glass display to register a click.

It was a catastrophic failure. The legacy Java OS couldn't handle touch inputs smoothly, and the SurePress hardware was prone to jamming and failure. Verizon faced near 100% return rates in some stores. RIM eventually had to pay Verizon roughly $500 million to cover the losses.

Instead of taking the time to rebuild their OS from scratch (which they eventually tried to do years later with QNX/BlackBerry 10, but far too late), RIM opted for a complex hardware hack to bridge a paradigm shift.

The Storm destroyed BlackBerry's reputation for rock-solid reliability and opened the floodgates for Android (via the Motorola Droid) to become Verizon's true iPhone competitor. BlackBerry never recovered.

**Related reading:** [Why legacy moats become traps during platform shifts](/case-study/blackberry-touchscreen-delay-2008)
