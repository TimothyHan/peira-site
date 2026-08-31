"use client";

import { useEffect, useState } from "react";

export interface DocsNavItem {
  id: string;
  label: string;
  children?: readonly { id: string; label: string }[];
}

// Sticky side nav with scroll-spy (desktop only — mobile keeps the top anchor row).
// Plain anchors + IntersectionObserver; no motion, so nothing to gate on reduced-motion.
// One nesting level: Reference lists its groups.
export function DocsNav({ items }: { items: readonly DocsNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    // scroll-driven spy (not IntersectionObserver — throttled/suppressed in some embeds):
    // the LAST section whose top has passed the header line is current; children follow
    // their parent in document order, so the deepest match wins naturally.
    const ids = items.flatMap((item) => [item.id, ...(item.children ?? []).map((c) => c.id)]);
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const linkClass = (id: string, indent: boolean) =>
    `-ml-px block border-l py-1 ${indent ? "pl-6" : "pl-3"} font-mono text-xs outline-none ring-0 transition-colors duration-100 focus-visible:outline-2 focus-visible:outline-ring ${
      active === id
        ? "border-pass text-foreground"
        : "border-transparent text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav aria-label="Docs sections" className="sticky top-24 hidden lg:block">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        on this page
      </p>
      <ul className="mt-3 space-y-1 border-l border-border">
        {items.map((item) => {
          const childActive = (item.children ?? []).some((c) => c.id === active);
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={linkClass(item.id, false) + (childActive ? " text-foreground" : "")}
              >
                {item.label}
              </a>
              {item.children && (
                <ul className="space-y-0.5">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <a
                        href={`#${child.id}`}
                        aria-current={active === child.id ? "true" : undefined}
                        className={linkClass(child.id, true)}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
