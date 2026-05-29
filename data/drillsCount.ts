// Standalone drill count for the home banner. Importing the full
// drills.ts (~260kB of scenario content + branching graphs) just to
// read .length pulls the entire payload into the home page bundle.
// This tiny module is auto-updated by scripts/sync-content.ts so the
// number stays in sync with content/drills/*.md.
export const DRILL_COUNT = 27;
