"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav, site, url } from "@/data/site";
import { navKo } from "@/data/ko";

// Flat anchor nav (single-page site — no mega-menu content exists).
// The mobile drawer is a custom fixed panel, NOT a portal: portals render
// outside .site-theme and lose the CSS custom properties.
export function Header() {
  // The Korean pages live under /ko; the switcher just crosses between the two trees.
  const pathname = usePathname() ?? "/";
  const isKo = pathname.startsWith("/ko");
  const items = isKo ? navKo : nav;
  const homeHref = isKo ? url("/ko/") : url("/");
  const otherHref = isKo ? url("/") : url("/ko/");
  const [open, setOpen] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const handleScroll = useCallback(() => {
    const el = navRef.current;
    if (!el) return;
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 8);
  }, []);

  // close the drawer on Escape; lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <a
          href={homeHref}
          className="flex cursor-pointer items-center gap-2.5 font-mono text-sm font-semibold tracking-widest outline-none ring-0 focus-visible:outline-2 focus-visible:outline-ring"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url("/icon.svg")} alt="" aria-hidden className="h-5 w-5 rounded-[4px]" />
          <span>
            PEIRA<span className="text-pass">(✓)</span>
          </span>
        </a>

        {/* desktop: flat anchors */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="cursor-pointer text-sm text-muted-foreground outline-none ring-0 transition-colors duration-100 hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
            >
              {item.label}
              {item.external && <span aria-hidden className="ml-1 text-muted-foreground/60">↗</span>}
            </a>
          ))}
          <a
            href={otherHref}
            className="cursor-pointer font-mono text-xs text-muted-foreground outline-none ring-0 transition-colors duration-100 hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
            lang={isKo ? "en" : "ko"}
          >
            {isKo ? "EN" : "한국어"}
          </a>
          <span className="eyebrow">{site.version}</span>
        </nav>

        {/* mobile: hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="cursor-pointer p-1 outline-none ring-0 focus-visible:outline-2 focus-visible:outline-ring lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* mobile drawer — in-tree, inherits .site-theme tokens */}
      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-50 bg-[oklch(0_0_0/50%)]"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="fixed right-0 top-0 z-50 flex h-dvh w-[280px] flex-col border-l border-border bg-background">
            <div className="flex h-14 items-center justify-between border-b border-border px-4">
              <span className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-widest">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url("/icon.svg")} alt="" aria-hidden className="h-5 w-5 rounded-[4px]" />
                <span>
                  PEIRA<span className="text-pass">(✓)</span>
                </span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="cursor-pointer p-1 outline-none ring-0 focus-visible:outline-2 focus-visible:outline-ring"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative flex-1 overflow-hidden">
              <nav
                ref={navRef}
                onScroll={handleScroll}
                aria-label="Mobile"
                className="flex h-full flex-col gap-1 overflow-y-auto overscroll-y-contain px-4 pb-6 pt-4"
              >
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    onClick={() => setOpen(false)}
                    className="cursor-pointer rounded px-2 py-2.5 text-sm text-muted-foreground outline-none ring-0 hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    {item.label}
                    {item.external && <span aria-hidden className="ml-1 text-muted-foreground/60">↗</span>}
                  </a>
                ))}
              </nav>
              <div
                aria-hidden
                className={`pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent transition-opacity duration-300 ${atBottom ? "opacity-0" : ""}`}
              />
            </div>
            <div className="border-t border-border px-4 py-4 font-mono text-xs text-muted-foreground">
              {site.installCommand}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
