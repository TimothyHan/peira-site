# Patterns — Peira showcase

Source: site-buddy-university catalog at ~/.claude/skills/site-university/patterns/
Read by: /design-system, /build-section, /build-page, /human-touch

## Anchored composition
- **none** — `saas-product-landing-funnel` was the archetype's composition, but its own
  `do-not-use-when` names this build exactly: *"developer-tooling SaaS with dark-mode
  terminal aesthetic — page-default may invert."* Peira is a dev tool whose direction doc
  commits to a near-black terminal world, so the composition is rejected rather than
  stretched. The page spine is assembled manually from the components below:
  **hero (install) → proof strip (measured results) → the loop (5-step timeline) →
  feature deep-dives (terminal/report panels) → evidence-ledger section → CTA close.**
  This preserves the funnel's conversion-at-every-depth logic while dropping its
  disqualified slots (logo wall, testimonials, pricing teaser, mega footer).

## Anchored components
- **dual-cta-hero** (structural-section) — two commitment thresholds in the hero.
  - Direction-doc evidence: "primary CTA = the install command box with `$` glyph in pass-green; secondary = 1px hairline pill" — and both references exhibit exactly this pair (vitest: Get Started / View on GitHub; bun: install command / quickstart link).
  - Adaptation recorded: the two paths are OSS-honest — primary = copyable `npm install -g peira`, secondary = GitHub repo. Both destinations are real and distinct, which is what the pattern's disqualifiers actually guard (cosmetic duplication, empty demo paths).
  - Beats `no-hero-cta` because: the page's single job is adoption; both references converge on an install-forward hero.
- **proof-strip** (structural-section, numerical variant) — proof before story.
  - Direction-doc evidence: "the archetype funnel's Logos/Testimonials slots are replaced by measured-results stat blocks (every number on the page was actually earned in `docs/findings/`)."
  - Preconditions satisfied: 2+ quantifiable trust facts — 27/27 re-expressed, 3 divergences surfaced, 0 runtime LLM calls, 5/5 external first-try, 87.9% triage agreement, 215 tests.
  - Beats `testimonial-strip` (its listed alternative) because: the direction doc's NOT-list forbids trust theater; Peira's brand line is literally "Measured, not promised."
- **process-step-timeline** (structural-section) — the five-stage loop as a numbered sequence.
  - Direction-doc evidence: "section eyebrows are styled as evidence-log records… so scrolling the page reads like scrolling a run" — the loop (author → compile → run → triage → record) is a real, repeatable, ordered process; numbered step badges encode true sequence, not decoration.
  - Adaptation recorded: register shifts from franchise (문의→상담→계약→오픈) to the compile loop; step badges set in mono as evidence-log chrome; each step carries its actor tag (Human / LLM·gated / Deterministic).
  - Beats `numbered-advantage-cards` because: that pattern uses numbering as a tone signal over unordered claims; here the order itself carries information, which the direction doc's structure discipline requires.
- **freemium-radical-honesty-cta** (copy) — the anti-funnel contract at the button.
  - Direction-doc evidence: "install command replaces signup button (`freemium-radical-honesty-cta` register: OSS, MIT, no signup exists)."
  - Preconditions satisfied: genuinely free forever (MIT), no card/signup exists at all, developer audience allergic to trial choreography.
  - Adaptation recorded: the sub-copy carries Peira's specific honesty contract — "No API key. No signup. Zero LLM at runtime. MIT." — each clause operationally true.

## Cross-cutting
- **cta-repetition-pattern** — the install command reappears at three depths: hero, after the proof strip, and the footer close.
  - Why it spans the build: with no composition anchoring conversion density, this pattern carries the funnel's conversion-at-every-scroll-depth logic across the manually assembled spine; 3 placements (not the funnel's 4–8) keeps the editorial restraint the direction doc demands.

## Alternates (substitutes if a precondition fails mid-build)
- For **dual-cta-hero**: `no-hero-cta` if the GitHub secondary ever reads as filler — a single install command box alone is the honest fallback.
- For **proof-strip**: fold the stats into per-feature sections if the six-stat band overwhelms the hero's whitespace budget at mobile widths.
- For **process-step-timeline**: collapse to a one-line mono pipeline (`intent → cases → verdicts → evidence`) if five cards crowd the page rhythm.

## Rejected candidates (and why — prevents re-litigation)
- `saas-product-landing-funnel` rejected: self-disqualified — "developer-tooling SaaS with dark-mode terminal aesthetic" is this build.
- `ai-prominence-hero` rejected: Peira's differentiator is *inverted* AI prominence — "zero LLM at runtime" is the claim; a 2026-AI-wave hero would misposition the product and date the page (the record's own consequence).
- `testimonial-strip` rejected: no testimonials exist and the direction doc's NOT-list forbids SaaS trust theater; `proof-strip` (numerical) is its listed alternative and won.
- `freemium-cta-language` rejected: "free trial" vocabulary is dishonest for MIT OSS (nothing is a trial); its intensified sibling `freemium-radical-honesty-cta` carries the register truthfully.
- `numbered-advantage-cards` rejected: numbering-as-tone over unordered claims is fake sequence here; the loop is genuinely ordered, so `process-step-timeline` wins.

**Status:** DONE
**Summary:** 5 patterns anchored (4 components + 1 cross-cutting, composition rejected by its own disqualifier); 3 alternates, 5 rejections recorded
**Next steps:** /site-design-system reads this doc + direction.md for token decisions
