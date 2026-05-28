// One-off Resend smoke test.
//
// Run via: npx tsx scripts/test-resend.ts
//
// Reads RESEND_API_KEY from .env, sends one test email, prints
// the result. Doesn't touch the database, doesn't change any state.
// Use this whenever email starts misbehaving in production to
// isolate "is Resend itself working" from "is our app's email
// code working."

import { Resend } from "resend";
import { readFileSync } from "fs";
import { join } from "path";

// Load .env manually — tsx doesn't auto-load it.
const envFile = readFileSync(join(process.cwd(), ".env"), "utf8");
for (const line of envFile.split("\n")) {
  const [key, ...rest] = line.split("=");
  if (key && rest.length > 0 && !process.env[key]) {
    process.env[key] = rest.join("=").trim();
  }
}

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error("❌ RESEND_API_KEY not found in .env");
  process.exit(1);
}

const TO = "kaustubhbrao@gmail.com";

async function main() {
  console.log(`Sending test email via Resend to ${TO}...`);
  const resend = new Resend(apiKey);

  // Resend's default sender for unverified domains is
  // onboarding@resend.dev — works without DNS setup.
  // Once you verify pmnorthstar.in in Resend, swap to
  // hello@pmnorthstar.in or similar.
  const result = await resend.emails.send({
    from: "northstar <onboarding@resend.dev>",
    to: TO,
    subject: "✅ northstar Resend smoke test",
    html: `
      <div style="font-family: -apple-system, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
        <h2 style="margin: 0 0 16px 0; font-size: 18px;">If you're reading this, Resend works.</h2>
        <p style="margin: 0 0 12px 0; line-height: 1.6;">This was sent from the smoke-test script at <code>scripts/test-resend.ts</code> using your <code>RESEND_API_KEY</code>.</p>
        <p style="margin: 0; color: #666; font-size: 13px;">No app state was changed. You can safely delete this email.</p>
      </div>
    `,
  });

  if (result.error) {
    console.error("❌ Resend returned an error:");
    console.error(JSON.stringify(result.error, null, 2));
    process.exit(1);
  }

  console.log(`✅ Sent — id: ${result.data?.id}`);
  console.log(`   Check the inbox at ${TO}. May land in spam first time.`);
}

main().catch((err) => {
  console.error("❌ Script crashed:");
  console.error(err);
  process.exit(1);
});
