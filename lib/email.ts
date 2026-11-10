import { SignJWT, jwtVerify } from "jose";

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
