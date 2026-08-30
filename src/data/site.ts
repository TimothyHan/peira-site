// Site-wide data: nav, links, install command. /site-build-nav extends this.
export const site = {
  name: "Peira",
  tagline: "The intent compiler for API testing",
  installCommand: "npm install -g peira",
  github: "https://github.com/slowhama/peira",
  npm: "https://www.npmjs.com/package/peira",
  license: "MIT",
  version: "v0.2",
} as const;

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const nav: NavItem[] = [
  { label: "How it works", href: "#loop" },
  { label: "Measured", href: "#measured" },
  { label: "Evidence", href: "#evidence" },
  { label: "GitHub", href: "https://github.com/slowhama/peira", external: true },
];

export const companyInfo = {
  name: "Peira",
  license: "MIT",
  copyright: `© ${new Date().getFullYear()} Peira — πεῖρα: trial, the root of "empirical"`,
  links: [
    { label: "GitHub", href: "https://github.com/slowhama/peira" },
    { label: "npm", href: "https://www.npmjs.com/package/peira" },
  ],
} as const;
