# Section: loop
Role: explain (process-step-timeline, adapted) · Background: bg-background · Type: server
Files: src/components/sections/loop.tsx, src/data/loop.ts
Position: 3rd · Notes: 5 numbered stages, actor tags color-coded (human=white, llm=error-amber, deterministic=pass-green); gap-px hairline grid.

## Amendment (2026-08-29, user-directed)
The abstract 5-stage card grid was replaced by the "Follow one promise" interactive
walkthrough (walkthrough-stepper.tsx, client): the SAME example (order-cancel-shipped)
shown as its real artifact at every stage — intent md → case JSON → FAIL diff → triage BUG
→ adjudication → "Δ change" maintenance step (reword → stale flag → --section recompile).
Framed by a "what you write / what you get" tally strip above and the paradigm table below.
Actor tags preserved per step. New files: src/data/walkthrough.ts,
src/components/sections/walkthrough-stepper.tsx. loopStages data retained but no longer rendered.
