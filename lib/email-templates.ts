export function referralBonusTemplate({
  referrerUsername,
  buddyUsername,
  drillTitle,
  unsubscribeToken,
}: {
  referrerUsername: string;
  buddyUsername: string;
  drillTitle: string;
  unsubscribeToken: string;
}) {
  const unsubscribeUrl = `https://pmnorthstar.in/api/auth/unsubscribe?token=${unsubscribeToken}`;

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-w-xl mx-auto; color: #111;">
      <h2 style="color: #F3123C; margin-bottom: 16px;">+3 League Points! 🏆</h2>
      <p style="font-size: 16px; line-height: 1.5;">
        Hey <strong>@${referrerUsername}</strong>,
      </p>
      <p style="font-size: 16px; line-height: 1.5;">
        Your buddy <strong>@${buddyUsername}</strong> just played the <em>"${drillTitle}"</em> drill using your challenge link.
      </p>
      <p style="font-size: 16px; line-height: 1.5;">
        You've earned <strong>+3 points</strong> for the Season 1 leaderboard! Keep challenging friends to climb the ranks.
      </p>
      <div style="margin: 32px 0;">
        <a href="https://pmnorthstar.in/simulate" style="background-color: #F3123C; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
          Check the Leaderboard
        </a>
      </div>
      <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 32px 0;" />
      <p style="font-size: 12px; color: #666;">
        You're receiving this because you're participating in the northstar Simulation League. 
        <a href="${unsubscribeUrl}" style="color: #666; text-decoration: underline;">Unsubscribe from league notifications</a>.
      </p>
    </div>
  `;
}

export function matchdayLiveTemplate({
  drillTitle,
  drillSlug,
  unsubscribeToken,
}: {
  drillTitle: string;
  drillSlug: string;
  unsubscribeToken: string;
}) {
  const unsubscribeUrl = `https://pmnorthstar.in/api/auth/unsubscribe?token=${unsubscribeToken}`;
  const playUrl = `https://pmnorthstar.in/simulate/${drillSlug}`;

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-w-xl mx-auto; color: #111;">
      <h2 style="color: #F3123C; margin-bottom: 16px;">New Matchday is Live! 🚨</h2>
      <p style="font-size: 16px; line-height: 1.5;">
        The next Simulation League drill is now active:
      </p>
      <h3 style="font-size: 20px; margin: 24px 0;">"${drillTitle}"</h3>
      <p style="font-size: 16px; line-height: 1.5;">
        Remember: only your <strong>first attempt</strong> counts towards your League standing. Take your time, think through the trade-offs, and make the call.
      </p>
      <div style="margin: 32px 0;">
        <a href="${playUrl}" style="background-color: #F3123C; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
          Play the Match
        </a>
      </div>
      <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 32px 0;" />
      <p style="font-size: 12px; color: #666;">
        <a href="${unsubscribeUrl}" style="color: #666; text-decoration: underline;">Unsubscribe from matchday alerts</a>.
      </p>
    </div>
  `;
}
