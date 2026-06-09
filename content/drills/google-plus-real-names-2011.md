---
slug: google-plus-real-names-2011
type: historical
category: Strategy
year: 2011
estimatedMinutes: 15
publishedAt: '2026-08-12T15:00:00+00:00'
isLeagueMatch: true
leagueEndsAt: '2026-08-16T15:00:00+00:00'
principle: Identity policies must align with user trust and platform culture, not just data aggregation goals.
intro: |
  It's July 2011. Google has just launched Google+, its most ambitious attempt yet to challenge Facebook's dominance in social networking. Early traction is phenomenal—millions of users are signing up, drawn by Circles and a cleaner interface. 
  
  However, a crisis is brewing. You are a product leader on the Google+ team. The platform enforces a strict "Real Names" policy, requiring users to use their common, real-world names. This policy is designed to clean up the web, combat spam, and unify Google's identity system across all its services.
  
  But the backlash is fierce. Pseudonymous users, activists, marginalized groups, and early tech adopters are being abruptly suspended. The tech press is dubbing it the "Nymwars." The community is outraged, and your strict identity enforcement is actively alienating the power users who are supposed to be your early evangelists.
  
  This is a Tier 1 League Match. The decisions are binary and the consequences are terminal.
nodes:
  start:
    dimension: product
    prompt: |
      The volume of suspended accounts is spiking, and high-profile users are publicly deleting their profiles. The policy team argues that relaxing the rule will turn Google+ into a spam-filled wasteland like YouTube comments. What is your immediate response to the backlash?
    options:
      - text: "Double down on real names. The long-term value of verified identity across Google outweighs short-term PR pain."
        next: "node_double_down"
        points: 0
        rationale: "Forcing real names alienated vulnerable users and early adopters, eroding trust right when the network needed growth."
      - text: "Immediately pause suspensions, apologize, and start allowing pseudonyms and nicknames to stem the bleeding."
        next: "node_pause_suspensions"
        points: 50
        rationale: "Acknowledging the diverse needs for pseudonymity builds user trust and prevents a mass exodus of early influencers."
  
  node_double_down:
    dimension: business
    prompt: |
      You stick to the real names policy. Suspensions continue. The press narrative shifts from "Google+ is a Facebook killer" to "Google+ is out of touch and authoritarian." Growth begins to stall. How do you attempt to restart momentum?
    options:
      - text: "Force Google+ integration into all other Google products (YouTube, Gmail) to force adoption."
        next: "node_force_integration"
        points: 0
        rationale: "Forced integration bred massive resentment and didn't create genuine social engagement."
      - text: "Shift focus to enterprise users, pitching Google+ as a corporate collaboration tool."
        next: "node_enterprise"
        points: 20
        rationale: "A safer pivot, but completely abandons the original consumer social goal."
        
  node_pause_suspensions:
    dimension: product
    prompt: |
      You've stopped the suspensions. Now you need a long-term identity solution. How do you balance the need for a clean, spam-free network with user demands for privacy?
    options:
      - text: "Implement a verification system (like Twitter's blue check) for public figures, but allow anyone to use any name."
        next: "node_verification"
        points: 50
        rationale: "Solves the impersonation problem while maintaining freedom of expression."
      - text: "Require users to link a credit card or phone number to use a pseudonym."
        next: "node_verification_friction"
        points: 10
        rationale: "Adds too much friction and privacy concern for the average user."
        
  node_force_integration:
    isOutcome: true
    prompt: "You tied YouTube comments to Google+ real names. The backlash was legendary. Bob sent an army of ASCII tanks. The network became a ghost town of forced accounts. Google+ eventually shut down in 2019."
    
  node_enterprise:
    isOutcome: true
    prompt: "Google+ pivots to enterprise. It survives as a workplace tool but fails its primary mission to unseat Facebook. You essentially built an early version of Google Currents."
    
  node_verification:
    isOutcome: true
    prompt: "By embracing pseudonyms but verifying public figures, Google+ maintains its early adopter goodwill. The community thrives, and you build a sustainable, differentiated social network based on interests, not forced identity."
    
  node_verification_friction:
    isOutcome: true
    prompt: "The high friction prevents adoption. Users flock to platforms with lower barriers to entry like Instagram and Twitter. Google+ remains a niche product."
---
