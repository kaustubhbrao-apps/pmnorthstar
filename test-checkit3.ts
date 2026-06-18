import { runAudit } from "./lib/checkit/audit";
async function test() {
  const res = await runAudit("https://www.tcs.com/");
  console.log("TCS", res.totalScore, res.fatalError, res.dimensions.find(d => d.id === "seo")?.checks.find(c => c.id === "sitemap-xml"));

  const res2 = await runAudit("https://www.wtwco.com/en-in/about-us/overview");
  console.log("WTW", res2.totalScore, res2.fatalError);
}
test();
