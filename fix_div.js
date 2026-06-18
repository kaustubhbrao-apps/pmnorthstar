const fs = require('fs');
let code = fs.readFileSync('app/league/page.tsx', 'utf-8');

code = code.replace(/    <\/SidebarShell>/, '      </div>\n    </SidebarShell>');

fs.writeFileSync('app/league/page.tsx', code);
