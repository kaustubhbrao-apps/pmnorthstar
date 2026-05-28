-- Add Google OAuth fields to users table.
--
-- Makes password_hash nullable so Google-only signups don't need
-- a password. Adds google_id (unique) for OAuth identity lookup
-- and image (avatar URL from Google profile).
--
-- Idempotent: safe to re-run.

ALTER TABLE users
  ALTER COLUMN password_hash DROP NOT NULL;

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS google_id text;

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS image text;

CREATE UNIQUE INDEX IF NOT EXISTS users_google_id_key
  ON users (google_id)
  WHERE google_id IS NOT NULL;
