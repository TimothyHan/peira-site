"use client";

import { useEffect, useRef, useState } from "react";

export interface DocsNavItem {
  id: string;
  label: string;
  children?: readonly { id: string; label: string }[];
}

// Sticky side nav with scroll-spy (desktop only — mobile keeps the top anchor row).
// Scroll-driven, not IntersectionObserver (throttled/suppressed in some embeds).
// One nesting level: Reference lists its groups.
//
// Two end-of-page rules keep clicks honest: a clicked link is highlighted immediately
// (the spy pauses while smooth scroll settles — sections near the bottom can never reach
// the reading line, so the spy alone would land on an earlier group), and hitting the
// page bottom snaps to the last section so it is reachable by organic scrolling too.
export function DocsNav({ items }: { items: readonly DocsNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const suppressUntil = useRef(0);

  useEffect(() => {
    const ids = items.flatMap((item) => [item.id, ...(item.children ?? []).map((c) => c.id)]);
    const onScroll = () => {
      if (Date.now() < suppressUntil.current) return;
      const doc = document.documentElement;
      let current = ids[0];
      if (window.scrollY + window.innerHeight >= doc.scrollHeight - 2) {
        current = ids[ids.length - 1]; // bottom snap
      } else {
        const line = Math.max(100, window.innerHeight * 0.25); // the reading line
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= line) current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const pick = (id: string) => {
    setActive(id);
    suppressUntil.current = Date.now() + 900; // let the smooth scroll settle
  };

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
                onClick={() => pick(item.id)}
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
                        onClick={() => pick(child.id)}
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
