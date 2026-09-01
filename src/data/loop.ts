// The five-stage loop (process-step-timeline, adapted). Order IS information.
export type Actor = "human" | "llm" | "deterministic";

export interface LoopStage {
  num: string;
  title: string;
  body: string;
  actor: Actor;
  actorLabel: string;
}

export const loopStages: readonly LoopStage[] = [
  {
    num: "01",
    title: "Author intent",
    body: "A markdown test plan. Each ## section is one promise, tagged with a stable id.",
    actor: "human",
    actorLabel: "Human",
  },
  {
    num: "02",
    title: "Compile",
    body: "Sections become JSON cases via your own Claude session. A deterministic gate refuses anything malformed, and the link back to the intent section is recorded by the tool, not the model.",
    actor: "llm",
    actorLabel: "LLM · gated",
  },
  {
    num: "03",
    title: "Run",
    body: "Zero LLM. Seeded, reproducible, parallel without losing determinism. Verdicts are pass | fail | error — assertion and infrastructure failures never conflate.",
    actor: "deterministic",
    actorLabel: "Deterministic",
  },
  {
    num: "04",
    title: "Triage",
    body: "Failures come back classified — bug, drift, or flake — with evidence attached. Proposals only: a human adjudicates, nothing self-applies.",
    actor: "llm",
    actorLabel: "LLM proposes · human decides",
  },
  {
    num: "05",
    title: "Record",
    body: "Adjudicated runs land in the evidence ledger. Intent sections earn trust run by run — or lose it, with the reason quoted verbatim.",
    actor: "deterministic",
    actorLabel: "Deterministic",
  },
] as const;

// The paradigm shift — what "AI-native" changes about API testing.
export interface ParadigmRow {
  before: string;
  after: string;
}

export const paradigm: readonly ParadigmRow[] = [
  { before: "Humans hand-write test code", after: "Humans write intent — plain markdown, one promise per section" },
  { before: "Test code silently drifts from the spec", after: "Every case records the intent it came from; when that text changes, the case is flagged and recompiled" },
  { before: "Sleeps, retries, and flaky green", after: "Seeded, deterministic verdicts — any failure replays exactly" },
  { before: "A red build is a chore to diagnose", after: "Failures come back triaged — bug | drift | flake — with evidence" },
] as const;
