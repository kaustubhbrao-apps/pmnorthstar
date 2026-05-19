import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string; // Last crumb has no href (current page).
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
}

// Visible breadcrumb nav. Pairs with the BreadcrumbList JSON-LD already
// emitted at the layout level — Google can show this directly in SERPs
// when both visible and structured-data versions agree.
export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  if (items.length === 0) return null;
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-1 text-xs ${className}`}
    >
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={`${item.label}-${idx}`} className="inline-flex items-center gap-1">
            {idx > 0 && (
              <ChevronRight
                size={11}
                strokeWidth={1.8}
                style={{ color: "var(--text-faint)" }}
              />
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="transition-colors hover:opacity-80"
                style={{ color: "var(--text-muted)" }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                style={{
                  color: isLast ? "var(--text-primary)" : "var(--text-muted)",
                  fontWeight: isLast ? 600 : 400,
                }}
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
