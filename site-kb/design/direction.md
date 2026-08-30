# Design Direction — Peira showcase

Gathered 2026-08-29 from two live references chosen by the user. The prior
Claude-artifact page (aegean blue + Archivo + Newsreader, light/dark dual theme)
is explicitly discarded — nothing below inherits from it.

## References
- **vitest.dev** (observed live): the test-tool genre-mate — terminal output as hero imagery, verdict chips as graphic language.
- **bun.sh** (observed live, 2026 redesign): the OSS-CLI showcase — compressed grotesque headlines, install command as the hero CTA, stat blocks as proof.

## Observations — vitest.dev
1. Ground is a single committed near-black (~#131418); no light mode on the landing surface.
2. Hero headline is a neo-grotesque in white, sentence-case, ~56px, centered; zero decoration around it.
3. Wordmark plays a typographic game: `VITEST(✓)` — a parenthetical glyph in the accent green, mono-adjacent.
4. Real test-runner output is the hero image: a dark terminal panel listing spec files with ✓ marks, filenames in mono, timing in ms.
5. `PASS` is a filled green chip with dark text — the verdict badge is a first-class graphic element.
6. Full-bleed accent bands: green gradient with visible grain/noise texture, holding a floating terminal panel; feature copy sits on black between bands.
7. CTAs are outlined pills; primary gets a soft green outer glow, secondary a plain 1px hairline.
8. Section eyebrows are uppercase letterspaced mono in grey (`SPECIAL`).
9. Counter-observation: no photography anywhere; the only "illustration" is a 3D isometric tile (Jest tile stacking onto Vitest) — product metaphor, not decoration.

## Observations — bun.sh
1. Ground is near-black; text is a strict two-tone system: white for the claim, ~55% grey for the qualifier — often within the same headline ("Four tools, designed together." white / "Adopt one, or all of them." grey).
2. Headline face is a heavily-compressed grotesque, tight tracking, large (~44px at 800px viewport) — poster energy, sentence case.
3. Exactly one hot accent (pink #f472b6-ish) used surgically: one word in the H1 ("fast"), the `$` prompt glyph, the `NEW` chip. Never as a wash or gradient.
4. The hero CTA is not a button — it is the install command in a bordered mono code box: `$ curl -fsSL https://bun.sh/install | bash`, with a copy affordance and an OS toggle.
5. Cards are hairline-bordered (1px, ~10% white), square-cornered, shadowless; the grid's dividers do the layout work.
6. Playful counterweight: starburst "REPLACES NODE.JS" stickers in candy colors rotate over the sober card grid — one joke per card, contained.
7. Stat blocks: uppercase letterspaced mono label in grey (`FASTER WARM INSTALLS`), then a huge white numeral (`7×`), then a one-line qualifier. Repeated in a hairline grid.
8. Release banding: a version chip (`V1.4.0`) + mono eyebrow dates the content; the page reads as maintained, not brochure-frozen.
9. Counter-observation: refuses gradients, shadows, photography, and testimonial walls; the primary white button has a notched (cut) corner rather than a radius.

## Shared bones (convergence)
- One committed near-black world; no light mode on the showcase surface.
- The tool's real output IS the imagery — terminal panels, verdict chips, command boxes; no photography, no stock illustration.
- Monospace is structural, not decorative: eyebrows, labels, chips, stats, commands.
- Hairline borders (1px white at ~8–12% alpha) instead of shadows; corners square to 4px max.
- One saturated accent on an achromatic ground, deployed surgically (a word, a glyph, a chip) — never a gradient wash (vitest's grain bands are the exception Peira will not take).
- Numbers as proof: huge numerals with mono labels, not adjectives.

## Signature move (what Peira owns)
**The page is chromatically honest the way the runner is: the only colors are
verdict colors.** No brand accent exists. Pass-green, fail-red, and error-amber
— Peira's own verdict taxonomy — are the entire chromatic vocabulary, on an
achromatic near-black ground. Green appears only where something passed, red
only where something failed, amber only where infrastructure broke. The H1
picks out one word in pass-green because that claim is *tested*. Section
eyebrows are styled as evidence-log records (`run-start seed=42`,
`case-verdict PASS`), so scrolling the page reads like scrolling a run.
Display type is a single ultra-compressed uppercase face used at poster scale
— one weight, doing all hierarchy work through size alone, the way the runner
has one verdict vocabulary doing all judgment work.

## What this brand is NOT
- Not vitest's texture: no gradient bands, no grain/noise art, no 3D isometric tiles — Peira's evidence aesthetic forbids decorative surface.
- Not a SaaS trust theater: no logo walls, no testimonials, no G2 badges — the archetype funnel's Logos/Testimonials slots are replaced by measured-results stat blocks (every number on the page was actually earned in `docs/findings/`).
- Not the prior artifact: no aegean blue, no serif body, no light/dark dual theme, no Greek-etymology hero framing.
- Not a mascot/sticker brand: bun's starbursts stay at bun — Peira's one permitted joke is the verdict chip itself.
- Not gradient-AI-purple, not cream-and-terracotta editorial.

## Token implications (hints for /design-system)
- Ground: OKLCH 0.17 0.008 260 (near-black, faint cool cast); raised surface 0.21; hairline white at 10% alpha.
- Ink: off-white OKLCH 0.93 0.005 260; muted OKLCH 0.68 0.01 260. Two-tone headline system (white claim / muted qualifier) is a rule, not an option.
- Chromatic ink (the ONLY chroma): pass OKLCH 0.75 0.17 155; fail OKLCH 0.64 0.19 25; error OKLCH 0.78 0.14 85. Chips: filled color + near-black text (vitest's PASS treatment).
- Display: Anton (single weight 400, uppercase, tight tracking, used H1/H2 only, poster scale — clamp 44–96px hero). Body/UI: Geist 400/500. Mono: Geist Mono for eyebrows (11–12px, +0.14em, uppercase), chips, commands, stats, terminal panels.
- Density: hero ≥50% whitespace with the terminal panel as the only object; below, sections tighten; stat grid runs hairline-divided like bun's.
- Motion vocabulary: terminal type-on once in the hero; scroll-fade at most 8px/200ms; hover = hairline brightens to 25% alpha in ~80ms. No parallax, no gradient animation. All gated by `useReducedMotion`.
- Components: radius 0–4px, borders not shadows; primary CTA = the install command box with `$` glyph in pass-green; secondary = 1px hairline pill.

## Overlay sanity check
No aesthetic overlay is close — all five in the library are F&B/retail
registers. Run `/site-design-system` with the aesthetic list empty and feed it
this direction directly. The `saas-product-landing` archetype's structural
funnel applies with two named divergences: (1) Logos and Testimonials slots are
replaced by measured-results stat blocks, (2) hero CTA is an install command
box, not a signup button (`freemium-radical-honesty-cta` register: OSS, MIT,
no signup exists).

## Pattern handles
- `saas-product-landing-funnel` — structural spine; slots amended per divergences above.
- `dual-cta-hero` — primary = copyable install command, secondary = GitHub hairline pill.
- `proof-strip` — the "Measured, not promised" stat band; every numeral traces to a findings doc.

**Status:** DONE
**Summary:** Direction captured from 2 live references; signature move = verdict-colors-only chromatic system + evidence-log chrome
**Next steps:** /site-patterns, then /site-design-system reads this doc as primary input
