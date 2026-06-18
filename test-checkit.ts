import { runAudit } from "./lib/checkit/audit";
runAudit("https://www.wtwco.com/en-in/about-us/overview").then(console.log);
runAudit("https://www.tcs.com/").then(console.log);
