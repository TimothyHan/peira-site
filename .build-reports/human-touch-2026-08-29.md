# Human Touch Pass — 2026-08-29

## Pages touched
| Page | Pitch-carrier | Why it carries the pitch |
|---|---|---|
| / (only page) | hero | "Your test plan compiles / the runner never thinks" IS the sale; every section below is supporting evidence |

## Moves applied (2 of max 3 — third deliberately skipped)
| Page | Section | Move | File | Why |
|---|---|---|---|---|
| / | hero | Oversize the line | src/components/sections/hero.tsx (h1: +lg:text-8xl, leading-[0.93]) | H1 sat one tier above section H2s — not enough dominance for the page's single pitch; at 8xl "COMPILES." owns a full line in pass-green |
| / | proof-strip | Anchor with a quiet detail (oversized numeral) | src/data/stats.ts + src/components/sections/proof-strip.tsx | "0 LLM calls at runtime" reordered first and rendered as the page's ONE green numeral, one tier larger — it is the differentiator stat and rhymes with the hero's "Zero LLM at runtime" honesty line directly above it |

## Moves considered and rejected
- Break the grid (span/offset a stat or triage card): 6 stats in a 3-col hairline-fused grid — a 2-col span leaves a ragged 7th cell, and translate offsets break the shared hairlines. The uniform grid IS the direction doc's bun-register; breaking it would damage, not emphasize.
- Demote the supporting cast: the only hero-adjacent section is the proof strip, which move 2 deliberately elevates. Demoting elsewhere had no nameable pitch benefit — cap is a maximum, not a target.

## Pages skipped
none (single-page site; no utility pages exist)

## Verification
- 1440px + 375px checked live in the preview pane (before/after captured in-session)
- No horizontal scroll at 375 (document.scrollWidth check: false)
- No bleeds introduced → no overflow-x-clip needed
- No motion components touched → useReducedMotion gating unchanged
- Production build: PASS

**Status:** DONE
**Summary:** 2 editorial moves on the homepage (hero oversized; featured green zero-stat); 1 move deliberately withheld
**Next steps:** /site-visual-qa
