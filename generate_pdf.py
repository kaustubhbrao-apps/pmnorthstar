import re

with open('presentation.html', 'r') as f:
    html = f.read()

# Extract the slides
slides_match = re.search(r'(<!-- SLIDE 1: Title -->.*?)</div>\s*<script>', html, re.DOTALL)
slides_content = slides_match.group(1) if slides_match else ""

# Remove any "active" classes
slides_content = slides_content.replace('slide-1 active', 'slide-1')

print_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>northstar — Business Plan</title>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {{
    --primary: #E11D48;
    --text-dark: #111111;
    --text-muted: #555555;
    --bg-slide: #FFFFFF;
    --border: #E5E7EB;
  }}
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  
  @page {{
    size: 1280px 720px;
    margin: 0;
  }}
  
  body {{ 
    font-family: 'Plus Jakarta Sans', sans-serif; 
    background-color: white;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}
  
  .slide {{ 
    width: 1280px;
    height: 720px;
    position: relative; 
    padding: 80px 100px; 
    display: flex; 
    flex-direction: column; 
    background: white;
    page-break-after: always;
    overflow: hidden;
  }}

  /* Persistent Slide Footer */
  .slide-footer {{
    position: absolute; bottom: 30px; left: 100px; right: 100px;
    display: flex; justify-content: space-between;
    font-size: 11px; color: #999; text-transform: uppercase; letter-spacing: 0.15em;
    border-top: 1px solid var(--border); padding-top: 16px;
  }}
  .slide-footer .logo {{ font-weight: 700; color: var(--text-dark); }}

  /* Typography Polish */
  h1 {{ font-family: 'Instrument Serif', serif; font-size: 110px; font-weight: 400; line-height: 1; margin-bottom: 24px; color: var(--primary); letter-spacing: -0.02em; }}
  h2 {{ font-family: 'Instrument Serif', serif; font-size: 56px; font-weight: 400; margin-bottom: 40px; color: var(--text-dark); line-height: 1; letter-spacing: -0.01em; }}
  h3 {{ font-size: 18px; font-weight: 700; margin-bottom: 12px; color: var(--text-dark); text-transform: uppercase; letter-spacing: 0.05em; }}
  p {{ font-size: 17px; line-height: 1.6; color: var(--text-muted); margin-bottom: 20px; }}
  
  ul.clean-list {{ list-style: none; margin-left: 0; }}
  ul.clean-list li {{ position: relative; padding-left: 24px; font-size: 16px; line-height: 1.6; color: var(--text-muted); margin-bottom: 12px; }}
  ul.clean-list li::before {{ content: "—"; position: absolute; left: 0; color: var(--primary); font-weight: bold; }}
  strong {{ color: var(--text-dark); font-weight: 600; }}

  /* Classic Editorial Layouts */
  .columns-2 {{ display: grid; grid-template-columns: 1fr 1fr; gap: 80px; height: 100%; }}
  .divider-vertical {{ border-left: 1px solid var(--border); padding-left: 80px; }}
  .header-line {{ border-bottom: 2px solid var(--text-dark); padding-bottom: 12px; margin-bottom: 24px; }}
  .header-line-red {{ border-bottom: 2px solid var(--primary); padding-bottom: 12px; margin-bottom: 24px; color: var(--primary); }}

  /* Value Prop Canvas Layout */
  .vpc-box {{ border: 2px solid var(--text-dark); padding: 30px; position: relative; }}
  .vpc-box.red {{ border-color: var(--primary); }}

  /* 4Ps Layout */
  .four-p {{ display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }}
  .four-p-card {{ border-top: 4px solid var(--text-dark); padding-top: 20px; }}
  .four-p-card.red {{ border-top-color: var(--primary); }}
  .four-p-card h3 {{ font-size: 40px; font-family: 'Instrument Serif'; margin-bottom: 10px; color: var(--primary); text-transform: none; letter-spacing: 0; }}

  /* SIPOC Layout */
  .sipoc {{ display: flex; gap: 10px; text-align: center; margin-top: 40px; }}
  .sipoc-box {{ flex: 1; border: 2px solid var(--text-dark); padding: 30px 15px; position: relative; background: #fff; }}
  .sipoc-header {{ font-size: 50px; font-family: 'Instrument Serif'; color: var(--primary); margin-bottom: 10px; line-height: 1; }}
  .sipoc-title {{ font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; font-size: 13px; margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 10px; }}

  /* Tuckman Flow */
  .tuckman {{ display: flex; align-items: flex-start; justify-content: space-between; margin-top: 60px; position: relative; }}
  .tuckman::before {{ content: ''; position: absolute; top: 30px; left: 0; right: 0; height: 2px; background: var(--border); z-index: 1; }}
  .tuckman-step {{ flex: 1; text-align: center; position: relative; z-index: 2; padding: 0 20px; }}
  .tuckman-circle {{ width: 60px; height: 60px; background: #fff; border: 4px solid var(--text-dark); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Instrument Serif'; font-size: 30px; margin: 0 auto 20px auto; }}
  .tuckman-step:nth-child(2) .tuckman-circle {{ border-color: var(--primary); color: var(--primary); }}
  .tuckman-step:nth-child(4) .tuckman-circle {{ background: var(--primary); border-color: var(--primary); color: #fff; }}

  /* CSS Bar Chart */
  .chart-container {{ display: flex; align-items: flex-end; justify-content: space-around; height: 320px; border-bottom: 3px solid var(--text-dark); border-left: 3px solid var(--text-dark); padding: 0 40px; margin-top: 20px; }}
  .bar-wrapper {{ display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%; position: relative; width: 80px; }}
  .bar {{ width: 100%; background: var(--primary); position: relative; }}
  .bar-label-top {{ position: absolute; top: -35px; left: 50%; transform: translateX(-50%); font-weight: 600; font-size: 20px; color: var(--text-dark); }}
  .bar-label-bottom {{ position: absolute; bottom: -40px; left: 50%; transform: translateX(-50%); font-weight: 700; font-size: 14px; color: var(--text-dark); text-transform: uppercase; white-space: nowrap; }}

</style>
</head>
<body>
{slides_content}
</body>
</html>
"""

with open('presentation_print.html', 'w') as f:
    f.write(print_html)
