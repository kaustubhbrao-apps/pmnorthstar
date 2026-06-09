---
slug: apple-maps-launch-2012
type: historical
category: Strategy
year: 2012
estimatedMinutes: 15
publishedAt: '2026-07-01T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-07-05T15:00:00+00:00'
principle: Never ship a core, trust-based utility before it matches the incumbent's quality, even if the incumbent is your rival.
intro: |
  It's mid-2012. You are Scott Forstall, Apple's SVP of iOS Software. For years, Google Maps has been the default mapping application on the iPhone. However, tensions with Google (who is dominating with Android) are at an all-time high. 
  
  Google is withholding turn-by-turn navigation from the iOS version of Google Maps to keep it an Android exclusive. In response, Apple has decided to build its own mapping service from scratch, combining data from TomTom and other providers. 
  
  iOS 6 is weeks away from launch. Apple Maps looks beautiful with its 3D Flyover feature, but internal testing shows major issues: mislabeled cities, distorted satellite imagery, and dangerous routing errors.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: product
    prompt: |
      The launch date for iOS 6 is approaching. QA reports indicate that Apple Maps is significantly less accurate than the Google Maps it is replacing. What is your recommendation to Tim Cook?
    options:
      - text: "Delay Apple Maps. Keep the existing Google Maps app as default for one more year, renegotiating terms if necessary."
        next: "node_delay_maps"
        points: 50
        rationale: "Maps are a critical utility. Shipping a broken map degrades trust in the entire device."
      - text: "Ship it. We must control our destiny and break free from Google. We will fix the bugs rapidly post-launch."
        next: "node_ship_it"
        points: 0
        rationale: "Shipping a broken core utility caused massive reputational damage and led to your ouster."
        
  node_ship_it:
    dimension: founder
    prompt: |
      Apple Maps launches with iOS 6. It is a PR disaster. People are directed onto airport runways and lost in the outback. Tim Cook drafts a public apology letter and asks you to sign it alongside him as the leader of iOS.
    options:
      - text: "Refuse to sign the apology. Argue that the issues are exaggerated and Maps will improve over time."
        next: "node_refuse_apology"
        points: 0
        rationale: "Refusing to take accountability for a massive public failure is fatal for a leader."
      - text: "Sign the apology letter, take full responsibility, and outline a clear roadmap for fixes."
        next: "node_sign_apology"
        points: 20
        rationale: "While you still shipped a bad product, taking accountability might save your job."
        
  node_delay_maps:
    dimension: business
    prompt: |
      You've convinced Cook to delay. However, Google is still refusing to provide turn-by-turn navigation on iOS. How do you respond to Google's hardball tactics?
    options:
      - text: "Allow Google to release a standalone Google Maps app on the App Store with turn-by-turn, while quietly perfecting Apple Maps."
        next: "node_standalone_google"
        points: 50
        rationale: "Gives users what they want, breaks the contract stalemate, and buys time to build a true competitor."
      - text: "Block Google Maps from the App Store entirely to force users onto older navigation apps while we build."
        next: "node_block_google"
        points: 0
        rationale: "Anti-competitive, deeply user-hostile, and invites massive antitrust scrutiny."
        
  node_refuse_apology:
    isOutcome: true
    prompt: "You refused to sign. Tim Cook signs it alone, recommends users try rival map apps, and fires you shortly after. Your refusal to accept blame ends your career at Apple."
    
  node_sign_apology:
    isOutcome: true
    prompt: "You take the heat. The PR damage is severe, but you survive. You spend the next three years grinding on map data quality instead of innovating on new iOS features."
    
  node_standalone_google:
    isOutcome: true
    prompt: "Google releases their app. Users are happy. You spend two more years perfecting Apple Maps in the background. When it finally launches, it's a solid product. You remain a key leader at Apple."
    
  node_block_google:
    isOutcome: true
    prompt: "The public outcry is immense. Regulators step in. Apple's reputation for 'it just works' is destroyed by the perception of petty corporate warfare. You are forced out."
---
