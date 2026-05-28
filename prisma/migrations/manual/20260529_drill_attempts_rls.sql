-- SimulateIt drill attempts log + RLS lockdown.
--
-- Idempotent: safe to re-run. Creates the drill_attempts table if it
-- doesn't exist and enables RLS on it. RLS with no policies = deny-all
-- for the anon/authenticated keys; Prisma connects via the service role
-- and bypasses RLS, so the app keeps working.
--
-- One row per drill completion by a logged-in user. Anonymous plays
-- stay in localStorage and never reach this table. Per-dimension
-- scores stored so the profile page renders rollups without
-- re-parsing path_taken on every request.

-- user_id is text (not uuid) because users.id is Prisma's
-- `String @id @default(uuid())` which maps to text in Postgres.
-- The UUID generation happens client-side via @default(uuid()) —
-- the column type itself stays text. Foreign-key column types must
-- match exactly, so user_id is text here.
CREATE TABLE IF NOT EXISTS drill_attempts (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         text NOT NULL,
  drill_slug      text NOT NULL,
  score           int  NOT NULL,
  max_possible    int  NOT NULL,
  product_score   int  NOT NULL DEFAULT 0,
  product_max     int  NOT NULL DEFAULT 0,
  business_score  int  NOT NULL DEFAULT 0,
  business_max    int  NOT NULL DEFAULT 0,
  founder_score   int  NOT NULL DEFAULT 0,
  founder_max     int  NOT NULL DEFAULT 0,
  path_taken      jsonb NOT NULL,
  attempted_at    timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT drill_attempts_user_fkey
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS drill_attempts_user_attempted_idx
  ON drill_attempts (user_id, attempted_at DESC);
CREATE INDEX IF NOT EXISTS drill_attempts_drill_slug_idx
  ON drill_attempts (drill_slug);

ALTER TABLE drill_attempts ENABLE ROW LEVEL SECURITY;
