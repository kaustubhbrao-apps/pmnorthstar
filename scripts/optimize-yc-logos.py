#!/usr/bin/env python3
"""Convert raw YC logo thumbnails into small square WebP files.

Called automatically at the end of scripts/yc-audit-study.ts. Reads every
image in .yc-logos-raw/ and writes a 64x64 (2x for a 32px slot) WebP into
public/yc-logos/, transparent padding preserved.

Self-hosting rather than hotlinking keeps the report independent of YC's
S3 bucket, and plain <img> rather than next/image keeps 496 logos off the
Vercel image-optimization quota.
"""
import os
import sys
from PIL import Image

RAW = ".yc-logos-raw"
OUT = os.path.join("public", "yc-logos")
SIZE = 64

os.makedirs(OUT, exist_ok=True)

written, failed = 0, 0
for name in sorted(os.listdir(RAW)):
    src = os.path.join(RAW, name)
    slug = os.path.splitext(name)[0]
    try:
        im = Image.open(src).convert("RGBA")
        im.thumbnail((SIZE, SIZE), Image.LANCZOS)
        canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
        canvas.paste(im, ((SIZE - im.width) // 2, (SIZE - im.height) // 2), im)
        canvas.save(os.path.join(OUT, f"{slug}.webp"), "WEBP", quality=82, method=6)
        written += 1
    except Exception as e:
        failed += 1
        print(f"  skip {slug}: {e}", file=sys.stderr)

print(f"✓ public/yc-logos: {written} written, {failed} skipped")
