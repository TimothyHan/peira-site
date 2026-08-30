# Section: hero

## Type / Role
hero · hook (dual-cta-hero, adapted per patterns.md)

## Background
bg-background

## Component Type
server (hero.tsx) + client (hero-terminal.tsx type-on, install-command.tsx copy, scroll-animate.tsx)

## Files
- src/components/sections/hero.tsx
- src/components/sections/hero-terminal.tsx
- src/components/ui/install-command.tsx
- src/components/scroll-animate.tsx
- src/data/hero.ts

## Data Props
hero (eyebrow, headlineClaim/Tested/Quiet, lede, installCommand, honesty[], secondaryCta) + heroTerminal: TermLine[] {kind: cmd|out|pass|fail|dim|bug, text}

## Position in Page
1st section, after Header, before proof strip (next)

## Notes
- H1: Anton uppercase two-tone; "compiles." in text-pass (the tested claim — 27/27 in findings)
- Primary CTA = install command box (copy-to-clipboard, radical-honesty line beneath)
- Terminal type-on: 13 lines, verdict-colored; reduced-motion renders full transcript instantly
- Entrance stagger 0/.1/.2/.3/.35, 8px max travel (direction doc motion vocabulary)

## Archetype Source
saas-product-landing (funnel adapted; see site-kb/design/patterns.md)
