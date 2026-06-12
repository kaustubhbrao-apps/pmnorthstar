import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";
import { generateUnsubscribeToken } from "../lib/email";
import { matchdayLiveTemplate } from "../lib/email-templates";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

async function main() {
  const args = process.argv.slice(2);
  const slugArg = args.find(a => a.startsWith("--slug="));
  const titleArg = args.find(a => a.startsWith("--title="));

  if (!slugArg || !titleArg) {
    console.error("Usage: npx tsx scripts/send-matchday-email.ts --slug=drill-slug --title=\"Drill Title\"");
    process.exit(1);
  }

  const drillSlug = slugArg.split("=")[1];
  const drillTitle = titleArg.split("=")[1];

  console.log(`Preparing to send matchday email for: ${drillTitle} (${drillSlug})`);

  // Query users who have NOT opted out and have played at least 1 drill
  const eligibleUsers = await prisma.user.findMany({
    where: {
      emailOptOut: false,
      drillAttempts: {
        some: {} // has at least one drill attempt
      }
    },
    select: { id: true, email: true }
  });

  console.log(`Found ${eligibleUsers.length} eligible users.`);

  if (!process.env.RESEND_API_KEY) {
    console.log("No RESEND_API_KEY found. Running in dry-run mode.");
    for (const user of eligibleUsers) {
      console.log(`Would send to: ${user.email}`);
    }
    process.exit(0);
  }

  let successCount = 0;
  let failCount = 0;

  // Resend has rate limits, so we send in small batches or sequentially with a delay
  for (const user of eligibleUsers) {
    try {
      const token = await generateUnsubscribeToken(user.id);
      const html = matchdayLiveTemplate({
        drillTitle,
        drillSlug,
        unsubscribeToken: token
      });

      await resend.emails.send({
        from: "Simulation League <league@pmnorthstar.in>",
        to: user.email,
        subject: "New Matchday is Live! 🚨",
        html,
      });

      successCount++;
      
      // Simple rate limit protection: 10 emails per second max
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (e) {
      console.error(`Failed to send to ${user.email}:`, e);
      failCount++;
    }
  }

  console.log(`\nFinished sending. Success: ${successCount}, Failed: ${failCount}`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
