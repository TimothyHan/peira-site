# Design System: Peira showcase

## Loaded Overlays
- Archetype: saas-product-landing
- Regional: none
- Industry: none
- Aesthetic: none — `site-kb/design/direction.md` is the sole visual authority (approved by user)

## Resolved Defaults
- Theme class: `site-theme`
- Dark section class: `dark-section` — **repurposed**: in this single-world system it is the *raised band* (L 0.215 vs base 0.17), not a light↔dark flip. All semantic tokens still fully overridden inside it (universal contract kept).
- Body font: Geist (400/500)
- Heading font: Anton (single weight 400, uppercase, H1/H2 only; H3+ falls back to Geist 600)
- Mono font: Geist Mono (`--font-mono-face`) — structural: eyebrows, chips, commands, stats, terminal panels

## Direction-Doc Choices (overrides recorded)
- **Universal "derive all colors from one hue" overridden**: the ground is achromatic (C 0.005–0.008, faint 260 cast); the only chroma is the verdict trio. Direction doc wins per methodology precedence.
- **Dark-mode default**: sanctioned by the archetype's own design-opinions §1 carve-out ("developer-tooling SaaS… dark-mode default, defensible when brand is developer-first") — direction and archetype agree.
- **`primary` = pass-green**: there is no separate brand accent; success IS the brand color. `destructive` = fail-red (same value as `--verdict-fail`).
- **Component conventions override universal**: radius 0–4px (not rounded-2xl), hairline borders (not shadows), hover = border brighten 80ms (not shadow+lift), primary CTA = mono command box (not pill button).
- **No gradient utilities** — direction's NOT-list forbids gradient washes; none emitted.

## Brand Color
- Source: direction.md (references vitest.dev + bun.sh; no `.sitebuddy.json` brandColor set)
- Primary: `oklch(0.75 0.17 155)` (verdict pass-green) — no hex authority; OKLCH is the definition

## Color Tokens (single world + raised band)
| Token | `.site-theme` | `.dark-section` (raised) |
|---|---|---|
| background | oklch(0.17 0.008 260) | oklch(0.215 0.008 260) |
| foreground | oklch(0.93 0.005 260) | oklch(0.94 0.005 260) |
| primary | oklch(0.75 0.17 155) | same |
| primary-foreground | oklch(0.16 0.02 155) | same |
| muted | oklch(0.21 0.008 260) | oklch(0.25 0.008 260) |
| muted-foreground | oklch(0.68 0.01 260) | oklch(0.72 0.01 260) |
| border | oklch(1 0 0 / 10%) | oklch(1 0 0 / 14%) |
| card | oklch(0.205 0.008 260) | oklch(0.245 0.008 260) |
| card-foreground | oklch(0.93 0.005 260) | oklch(0.94 0.005 260) |
| destructive | oklch(0.64 0.19 25) | same |
| ring | oklch(0.75 0.17 155) | same |
| verdict-pass | oklch(0.75 0.17 155) | same |
| verdict-fail | oklch(0.64 0.19 25) | same |
| verdict-error | oklch(0.78 0.14 85) | same |

Exposed to Tailwind (v4 `@theme inline`): `bg-background`, `text-foreground`, `text-pass`, `text-fail`, `text-error`, `border-border`, `bg-card`, etc.; fonts as `font-sans`, `font-display`, `font-mono`.

## Spacing Convention (universal, kept)
- Section padding: `py-20 md:py-28 lg:py-32`
- Heading→content: `mb-6` / `mb-10` / `mb-14 md:mb-16`
- Container: `container mx-auto px-4`; text `max-w-2xl`, mixed `max-w-3xl`, wide `max-w-4xl`, grids `max-w-5xl`
- Card gaps: `gap-4` / `gap-6` / `gap-8`
- Direction nuance: hero keeps ≥50% whitespace (terminal panel is the only object); stat grid runs hairline-divided.

## Typography Scale
- Hero H1: `font-display text-5xl md:text-7xl lg:text-8xl` (Anton, uppercase via CSS, tracking normal-tight, line-height 0.96) — one word may take `text-pass` because that claim is tested
- Section H2: `font-display text-3xl md:text-5xl`
- Two-tone headline rule: qualifier phrase gets `.headline-quiet` (muted)
- Card title (H3): `text-lg font-semibold` (Geist)
- Body: `text-base md:text-lg leading-relaxed`
- Eyebrow: `.eyebrow` utility (Geist Mono 12px, +0.14em, uppercase) — content styled as evidence-log records (`run-start seed=42`)
- Stats: mono uppercase label + `font-sans font-semibold text-5xl tabular-nums` numeral

## Component Utilities Written
- `.chip` + `.chip-pass/-fail/-error` — filled verdict chips, near-black text
- `.eyebrow` — evidence-log eyebrow
- `.headline-quiet` — two-tone headline second phrase
- `.hover-hairline` — 80ms border-brighten hover
- Buttons: secondary = `rounded border border-border px-5 py-2 hover-hairline`; primary = command box (component-level, `/build-section` implements with copy affordance)

## Font Loading (for /scaffold layout.tsx)
```tsx
import { Anton, Geist, Geist_Mono } from "next/font/google";
const heading = Anton({ variable: "--font-heading", subsets: ["latin"], weight: "400" });
const body = Geist({ variable: "--font-body", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono-face", subsets: ["latin"] });
// <body className={`${heading.variable} ${body.variable} ${mono.variable} site-theme antialiased`}>
```

## Files Written
- src/app/globals.css

**Status:** DONE
**Summary:** Design system generated — 14 tokens (verdict trio as sole chroma), single dark world + raised band, Anton/Geist/Geist Mono, globals.css written
**Next steps:** /site-scaffold
