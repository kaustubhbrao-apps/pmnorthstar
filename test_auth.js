const http = require('http');

async function testAuth() {
  console.log("Starting test...");
  const startRes = await fetch("http://localhost:3000/api/auth/google/start?next=/");
  console.log("Start URL:", startRes.url); // should be the callback url with mock_code
  
  const cookies = startRes.headers.get("set-cookie");
  console.log("Cookies from start:", cookies);

  // Instead of following automatically, let's fetch the callback directly
  // The fetch above might have already followed the redirect. Let's see where it ended up.
  console.log("Final URL:", startRes.url);
  const finalCookies = startRes.headers.get("set-cookie");
  console.log("Final cookies:", finalCookies);
  
  const meRes = await fetch("http://localhost:3000/api/auth/me", {
    headers: {
      "Cookie": finalCookies || ""
    }
  });
  console.log("Me response:", await meRes.text());
}

testAuth();
