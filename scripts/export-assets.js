const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new'
  });
  const page = await browser.newPage();
  
  const artifactDir = '/Users/Amber_User/.gemini/antigravity-cli/brain/2b02bfb4-8818-456e-b798-da3c49ff6f4a';
  const htmlPath = `file://${path.join(artifactDir, 'simulation-league-presentation.html')}`;
  
  await page.goto(htmlPath, { waitUntil: 'networkidle0' });
  
  // 1. Generate PDF
  await page.pdf({
    path: path.join(artifactDir, 'Simulation_League_Deck.pdf'),
    printBackground: true,
    preferCSSPageSize: true
  });
  console.log('✅ PDF generated.');

  // 2. Generate Instagram Vertical Images (1080x1350)
  // Inject styles to convert the 16:9 presentation into 4:5 vertical portrait
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.textContent = `
      body, html { height: auto; overflow: visible; background: #E5E5E5; padding: 50px; display: flex; flex-direction: column; gap: 50px; align-items: center; justify-content: flex-start; }
      .nav-hint, .progress-bar-container { display: none !important; }
      .presentation-window { height: auto; width: 100%; box-shadow: none; border: none; overflow: visible; background: transparent; display: flex; flex-direction: column; gap: 50px; align-items: center; }
      .slide { 
        position: relative !important; 
        width: 1080px !important; 
        height: 1350px !important; /* Vertical portrait! */
        padding: 250px 120px !important;
        opacity: 1 !important; 
        transform: none !important; 
        display: flex !important;
        background: #FFFFFF !important;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
      }
      .slide-footer { position: absolute; bottom: 80px; left: 120px; right: 120px; }
      /* Adjust typography for vertical layout */
      h1 { font-size: 150px; margin-bottom: 50px; line-height: 0.95; }
      h2 { font-size: 100px; margin-bottom: 60px; line-height: 1.05; }
      p { font-size: 42px; line-height: 1.4; max-width: 850px; }
      .metric-label { font-size: 20px; margin-bottom: 20px; }
      .metric-value { font-size: 36px; }
      .metric-cards { flex-direction: column; gap: 60px; }
      .rule-number { right: 80px; font-size: 700px; top: 60%; }
      .cta-box { font-size: 48px; padding: 50px 100px; margin-top: 100px; }
      .slide-footer { font-size: 20px; }
    `;
    document.head.appendChild(style);
  });

  // Take a screenshot of each slide
  const slideCount = await page.evaluate(() => document.querySelectorAll('.slide').length);
  for (let i = 0; i < slideCount; i++) {
    const elements = await page.$$('.slide');
    await elements[i].screenshot({ path: path.join(artifactDir, `IG_Slide_${i+1}.png`) });
    console.log(`✅ IG Slide ${i+1} generated.`);
  }

  await browser.close();
  console.log('Done!');
})();
