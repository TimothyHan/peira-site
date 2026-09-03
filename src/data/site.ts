// Site-wide data: nav, links, install command. /site-build-nav extends this.

// The static export is served from a subpath (basePath in next.config.ts). Next rewrites
// <Link> automatically, but NOT raw href/src strings — so every internal link and asset goes
// through url(). Keep it in sync with next.config.ts's basePath.
export const BASE_PATH = "/peira";
export const url = (path: string) => `${BASE_PATH}${path}`;

// basePath is NOT applied to metadata. Canonical and hreflang written as "/docs/" resolved to
// timothyhan.github.io/docs/ — a 404 — which told Google the real page was a duplicate of a
// page that does not exist. Every metadata URL is absolute, built from here.
export const SITE_URL = "https://timothyhan.github.io/peira";
export const abs = (path: string) => `${SITE_URL}${path}`;
export const site = {
  name: "Peira",
  tagline: "The AI-native API testing tool",
  installCommand: "npm install -g peira",
  github: "https://github.com/TimothyHan/peira",
  npm: "https://www.npmjs.com/package/peira",
  license: "MIT",
  version: "v0.5",
} as const;

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const nav: NavItem[] = [
  { label: "How it works", href: url("/#loop") },
  { label: "Evidence", href: url("/#evidence") },
  { label: "Metrics", href: url("/#measured") },
  { label: "Docs", href: url("/docs") },
  { label: "GitHub", href: "https://github.com/TimothyHan/peira", external: true },
];

export const companyInfo = {
  name: "Peira",
  license: "MIT",
  copyright: `© ${new Date().getFullYear()} Peira — πεῖρα: trial, the root of "empirical"`,
  links: [
    { label: "GitHub", href: "https://github.com/TimothyHan/peira" },
    { label: "npm", href: "https://www.npmjs.com/package/peira" },
  ],
} as const;
