# Page: docs

## Pattern
simple-content (universal), adapted for developer docs: numbered step journey + hairline-divided command reference + annotated code with definition list

## Archetype Source
universal (archetype's dev-platform-pattern consulted implicitly via homepage patterns; no archetype template applied)

## Component Type
server (reuses client InstallCommand for step 00 only)

## Files
- src/app/docs/page.tsx
- src/data/docs.ts

## Data Interface
DocStep {num, title, body, code?, codeLang?, note?} · CliCommand {name, synopsis, description} · caseAnatomy {code, notes: AnatomyNote[]}

## Sections
getting-started (6 steps, 00–05) · cli-reference (9 commands) · case-anatomy (annotated JSON + 6-term vocabulary)

## Dark Sections
none (content page)

## Notes
- All content sourced from peira repo docs/GETTING-STARTED.md + CLI usage; no invented commands
- Content-page density: py-12/16, max-w-3xl, text-2xl/3xl headings (not hero scale)
- Nav updated: Docs item added; homepage anchors now /#-prefixed (cross-page safe); cta-close tertiary link → /docs
