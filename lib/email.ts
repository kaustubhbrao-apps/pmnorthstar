import { Resend } from "resend";
import { SignJWT, jwtVerify } from "jose";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? "fallback_dev_secret_change_in_prod"
);

export async function generateUnsubscribeToken(userId: string): Promise<string> {
  return new SignJWT({ userId, action: "unsubscribe" })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("30d")
    .sign(SECRET);
}

export async function verifyUnsubscribeToken(token: string): Promise<string | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    if (payload.action === "unsubscribe" && payload.userId) {
      return payload.userId as string;
    }
    return null;
  } catch {
    return null;
  }
}

export async function sendLeagueEmail(to: string, subject: string, html: string) {
  // In dev, if there's no real API key, just log it.
  if (!process.env.RESEND_API_KEY) {
    console.log(`[EMAIL DEV MODE] To: ${to} | Subject: ${subject}`);
    return { id: "dev_mock_id" };
  }

  return resend.emails.send({
    from: "Simulation League <league@pmnorthstar.in>", // Fallback to onboarding@resend.dev if not verified
    to,
    subject,
    html,
  });
}
