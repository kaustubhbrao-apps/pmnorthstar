-- CheckIt audit log + RLS lockdown.
--
-- Idempotent: safe to re-run. Creates the checkit_audits table if it
-- doesn't exist and enables RLS on it plus every existing app table.
-- RLS with no policies = deny-all for the anon/authenticated keys;
-- Prisma connects via the service role and bypasses RLS, so the app
-- keeps working.

CREATE TABLE IF NOT EXISTS checkit_audits (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  host        text NOT NULL,
  score       int  NOT NULL,
  band        text NOT NULL,
  cached      boolean NOT NULL DEFAULT false,
  fetched_at  timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS checkit_audits_fetched_at_idx ON checkit_audits (fetched_at);
CREATE INDEX IF NOT EXISTS checkit_audits_host_idx ON checkit_audits (host);

ALTER TABLE checkit_audits         ENABLE ROW LEVEL SECURITY;
ALTER TABLE users                  ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions               ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_resources        ENABLE ROW LEVEL SECURITY;
ALTER TABLE liked_resources        ENABLE ROW LEVEL SECURITY;
ALTER TABLE password_reset_tokens  ENABLE ROW LEVEL SECURITY;
