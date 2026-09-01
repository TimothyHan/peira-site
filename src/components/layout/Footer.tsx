"use client";

import { usePathname } from "next/navigation";
import { companyInfo, nav, site } from "@/data/site";
import { navKo, footerBlurbKo } from "@/data/ko";

// Client only so it can read the locale off the path, exactly as Header does. It lives in the
// root layout, so a page-level prop cannot reach it — and rendering the English nav on /ko was
// sending Korean readers back to the English tree.
export function Footer() {
  const pathname = usePathname() ?? "/";
  const isKo = pathname.startsWith("/ko");
  const items = isKo ? navKo : nav;
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <p className="font-mono text-sm font-semibold tracking-widest">
              PEIRA<span className="text-pass">(✓)</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {isKo
                ? footerBlurbKo
                : `${site.tagline}. A run comes back pass, fail, or error — an assertion that did not hold is never filed as a broken environment.`}
            </p>
          </div>
          <div className="flex gap-14">
            <nav aria-label="Footer" className="flex flex-col gap-2">
              {items
                .filter((i) => !i.external)
                .map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
            </nav>
            <div className="flex flex-col gap-2">
              {companyInfo.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label} <span aria-hidden className="text-muted-foreground/60">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
          {companyInfo.copyright} · {companyInfo.license}
        </p>
      </div>
    </footer>
  );
}
