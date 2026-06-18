import { fetchWithTimeout } from "./lib/checkit/util";
async function test() {
  const url = "https://www.tcs.com/";
  const res = await fetchWithTimeout(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" } }, 5000);
  console.log("TCS", res.status);

  const res2 = await fetchWithTimeout("https://www.wtwco.com/", { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" } }, 5000);
  console.log("WTW", res2.status);
}
test();
