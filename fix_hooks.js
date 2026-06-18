const fs = require('fs');
let code = fs.readFileSync('components/HeroBanner.tsx', 'utf-8');

// remove unused react imports
code = code.replace(/import \{ useRef, useEffect, useState, useCallback \} from "react";/, '');
// remove scrollRef, activeSlide etc.
code = code.replace(/  const scrollRef = useRef<HTMLDivElement>\(null\);\n  const \[activeSlide, setActiveSlide\] = useState\(0\);\n\n  const updateActiveSlide = useCallback\(\(\) => \{\n    if \(!scrollRef\.current\) return;\n    const \{ scrollLeft, clientWidth \} = scrollRef\.current;\n    setActiveSlide\(Math\.round\(scrollLeft \/ clientWidth\)\);\n  \}, \[\]\);\n\n  useEffect\(\(\) => \{\n    const el = scrollRef\.current;\n    if \(!el\) return;\n    el\.addEventListener\("scroll", updateActiveSlide, \{ passive: true \}\);\n    return \(\) => el\.removeEventListener\("scroll", updateActiveSlide\);\n  \}, \[updateActiveSlide\]\);\n\n  useEffect\(\(\) => \{\n    const interval = setInterval\(\(\) => \{\n      if \(scrollRef\.current\) \{\n        const \{ scrollLeft, scrollWidth, clientWidth \} = scrollRef\.current;\n        if \(scrollLeft >= scrollWidth - clientWidth - 10\) \{\n          scrollRef\.current\.scrollTo\(\{ left: 0, behavior: "smooth" \}\);\n        \} else \{\n          scrollRef\.current\.scrollBy\(\{ left: clientWidth, behavior: "smooth" \}\);\n        \}\n      \}\n    \}, 4000\);\n    return \(\) => clearInterval\(interval\);\n  \}, \[\]\);\n/, '');

// remove unused DecisionGrid and MiniRing
code = code.replace(/\/\/ SimulateIt visual hook[\s\S]*$/, '');

fs.writeFileSync('components/HeroBanner.tsx', code);
