---
slug: apple-iphone-cannibalization-2005
caseStudySlug: apple-iphone-cannibalization-2005
type: historical
category: Strategy
year: 2005
estimatedMinutes: 20
publishedAt: '2026-07-12T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-07-19T15:00:00+00:00'
principle: If you don't cannibalize yourself, someone else will.
intro: |
  It is late 2005. You are a Senior VP of Product at Apple, reporting directly to Steve Jobs. 

  The iPod is a monster. It accounts for 45% of Apple's total revenue and 50% of its profit. You are essentially a hardware company that sells music players. But Steve is terrified. He sees a trend: cell phone makers (Nokia, Motorola, Sony Ericsson) are starting to put MP3 players inside their phones. 

  Steve's logic is brutal: "The device that is always with you is the device that wins. If a phone can play music, no one will carry an iPod. We have to build a phone, or we are dead."

  But Apple has never built a phone. You don't have the radio technology, you don't have the relationship with carriers (Cingular, Verizon), and most importantly—building a phone will almost certainly kill the iPod business. You are being asked to destroy your most successful product to save the future of the company.

  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: product
    prompt: |
      You have zero mobile expertise. To move fast and block Nokia, Steve suggests a partnership with Motorola (who owns the 'Razr' hype) to build a 'Music Phone' that runs a version of iTunes. 

      The internal team is furious. They want to build an 'Apple Phone' from scratch, but engineering says that will take at least 3 years. Motorola can ship in 6 months. What is your move?
    options:
      - text: 'The Partnership: Ship the Motorola ROKR. Let Motorola handle the radio and hardware; Apple handles the music software.'
        points: 5
        pattern: Compromised Speed
        rationale: Gets Apple into the phone market immediately without the massive R&D risk. It's a safe 'Testing the Waters' play.
        consequence: The ROKR is a disaster. It's ugly, limited to only 100 songs, and the interface is clunky. Steve is humiliated on stage. You've branded Apple as a 'bad phone maker' and wasted a year of development time.
        leadsTo: partnership_failure
      - text: 'The ''Purple'' Project: Reject Motorola. Build an Apple-branded phone from scratch, even if it delays entry by years.'
        points: 35
        pattern: Radical Self-Reliance
        rationale: If the experience isn't 'insanely great,' it's not an Apple product. You decide to own the entire stack (Hardware, Software, Radio), even if it's the hardest thing the company has ever done.
        consequence: The company enters 'War Room' mode. You pull the best engineers from the Mac and iPod teams. The iPod business starts to slow down because of the lack of resources, but the 'Purple' prototype starts to show promise.
        leadsTo: tech_gamble
      - text: 'The M&A Play: Buy a struggling phone maker (like Palm or BlackBerry) to acquire their radio patents and speed up the launch.'
        points: 20
        pattern: Speed via Acquisition
        rationale: Attempts to buy expertise. But these companies have legacy 'Keyboard-First' cultures that clash with Apple's design ethos.
        consequence: You spend $2B on an acquisition. Integration is a nightmare. The resulting product is a 'Franken-Phone' that feels like a PDA. You've missed the smartphone window entirely.
        leadsTo: commodity_death
  tech_gamble:
    dimension: product
    prompt: |
      The 'Purple' project is alive. But you hit a technical wall. The team is divided into two factions: 
      1. 'iPod+': A phone with a physical click-wheel (like the iPod) because it's what users know.
      2. 'The Safari': A radical design with no buttons—just a giant multi-touch glass screen that requires an entirely new OS (OS X Mobile).

      The glass screen is unproven, expensive, and the software is constantly crashing. Carriers hate the idea because it uses too much data. Which path do you take to the finish line?
    options:
      - text: 'Physical Click-Wheel: It''s familiar, reliable, and fits the iPod brand. It''s the ''Safe'' iPhone.'
        points: 10
        pattern: Iterative Thinking
        rationale: Leverages Apple's existing strength. It's effectively an 'iPod that makes calls.'
        consequence: You ship a decent phone, but it's just a better Nokia. It doesn't change the world. It becomes a niche product for iPod fans. You've failed to disrupt the computing industry.
        leadsTo: niche_failure
      - text: 'Multi-Touch Glass: Kill the buttons. Bet everything on a capacitive touch screen and a full desktop-class browser.'
        points: 35
        pattern: Paradigm Shift
        rationale: If you are going to cannibalize the iPod, the new device must be 10x better. A screen that changes its UI based on the app is the only way to build a 'Computer in your Pocket.'
        consequence: 'It''s the hardest hardware project in history. You have to invent ''Gorilla Glass'' with Corning and rebuild the OS from scratch. But the first time Steve swipes to unlock the prototype, everyone knows: this is the future.'
        leadsTo: carrier_negotiation
  partnership_failure:
    dimension: product
    prompt: |
      The ROKR failed. Motorola is blaming Apple's 'stubborn' software. Your reputation is at an all-time low. To save the company, you must now build your own phone, but you've lost the trust of the Carriers (who control the distribution).

      How do you get the iPhone onto a network?
    options:
      - text: 'Carrier Concession: Give the carrier (Cingular) full control over the apps and branding in exchange for a launch slot.'
        points: 5
        pattern: Distribution at any cost
        rationale: Standard industry practice. Carriers usually decide what's on the phone.
        consequence: The phone is filled with 'Carrier Bloatware.' The UI is ruined. You've built a product that carriers love but users hate. The iPhone becomes just another forgettable handset.
        leadsTo: commodity_death
      - text: 'The ''Jobs'' ultimatum: Demand total control over the software AND a share of the monthly service fee, or you won''t ship it at all.'
        points: 30
        pattern: High-Stakes Leverage
        rationale: An insane demand in 2006. No manufacturer has ever told a carrier how to run their network. But you bet that Cingular is desperate enough for an 'Exclusive' hit to say yes.
        consequence: Cingular (AT&T) blinks. They give you the 'Purple' project total freedom. You have the perfect distribution partner and the perfect product. You are ready for January 2007.
        leadsTo: carrier_negotiation
  carrier_negotiation:
    dimension: product
    prompt: |
      You have the prototype. You have the vision. But you still need a carrier who will sell the phone without putting their logo on the front or pre-installing garbage apps.

      You are in the final hour of negotiations with Cingular (AT&T). They are demanding a 'Back Door' to the App Store.
    options:
      - text: 'Zero Compromise: Reject the back door. No carrier apps, no carrier branding, no carrier control. Ever.'
        points: 30
        pattern: Brand Integrity
        rationale: The iPhone is a computer, not a handset. If the carrier controls the software, the paradigm shift fails. You are willing to walk away from the deal.
        consequence: Cingular blinks. They realize the iPhone is their only chance to beat Verizon. You get the best deal in the history of mobile. The iPhone launches in its purest form.
        leadsTo: carrier_wars
      - text: 'The ''Yellow Page'' Compromise: Allow one folder of carrier-approved web links in exchange for a $100 subsidy per phone.'
        points: 10
        pattern: Tactical Concession
        rationale: Lowers the price for the user while keeping the OS mostly clean. It's the practical business choice.
        consequence: The OS is clean, but the precedent is set. Every other carrier demands more. You've lost your absolute authority over the user experience.
        leadsTo: niche_failure
  carrier_wars:
    isOutcome: true
    prompt: |
      ### Outcome: The Smartphone Revolution
      By choosing the hardest possible path—cannibalizing your own iPod revenue, inventing multi-touch, and bullying the carriers—you didn't just build a phone. You built the **iPhone.** 

      The iPod died within 5 years, just as Steve predicted. But Apple became the most valuable company on Earth. You've redefined human communication and the global economy. 

      **League Score Impact:** +100 Points (Legendary Achievement).
  niche_failure:
    isOutcome: true
    prompt: |
      ### Outcome: The 'iPod Phone'
      You built a decent accessory. The 'iPod Phone' sold well to existing fans, but it never replaced the PC. 

      By being too afraid to kill the physical click-wheel, you left the door open for Google (Android) to realize the touch-screen dream first. Apple remains a successful music company, but it never becomes the platform giant it is today.

      **League Score Impact:** +40 Points (Incomplete Vision).
  commodity_death:
    isOutcome: true
    prompt: |
      ### Outcome: The Commodity Trap
      You treated the phone like a secondary project. By relying on partnerships or concessions, you allowed the carriers and competitors to dictate your product's soul. 

      Apple's stock plummets as the iPod market dries up and the 'Apple Phone' fails to gain traction. The company is eventually acquired by Microsoft or Google in 2010.

      **League Score Impact:** -80 Points (Strategic Cowardice).
---
The iPhone launch was the ultimate act of **Strategic Courage.** Most companies are too afraid to kill their 'Golden Goose' (the iPod). Apple didn't just kill it; they built the weapon and pulled the trigger themselves. That is why they won.

**Related reading:** [How Apple Reinvented the Phone with iPhone](/case-study/apple-iphone-launch)
