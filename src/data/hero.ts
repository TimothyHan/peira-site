// Hero content. Every terminal line reflects a real Peira session shape
// (verdict counts consistent: 26 cases → 25 pass / 1 fail / 0 error).
export type TermLineKind = "cmd" | "out" | "pass" | "fail" | "dim" | "bug";

export interface TermLine {
  kind: TermLineKind;
  text: string;
}

// Split around the two inline /docs#cli links, mirroring heroLedeKo so hero.tsx reads both
// locales from data. The English copy used to be hardcoded in the component, which is how it
// drifted from this file in the first place.
export const heroLede = {
  before: "You write down what your API is supposed to do, in plain markdown. Peira turns that into test cases and runs them. Point ",
  middle: " and ",
  after: " at any REST API — the config can be one URL.",
} as const;

export const hero = {
  eyebrow: "peira (peer-uh) · ai-native api testing",
  headlineClaim: "Your test plan",
  headlineTested: "compiles.",
  headlineQuiet: "A deterministic runner executes it.",
  installCommand: "npm install -g peira",
  honesty: ["No API key", "No signup", "Zero LLM at runtime", "MIT"],
  secondaryCta: { label: "View on GitHub", href: "https://github.com/TimothyHan/peira" },
} as const;

export const heroTerminal: TermLine[] = [
  { kind: "cmd", text: "peira compile intent --out cases --bed bed.json" },
  { kind: "dim", text: "compiling status-visibility …" },
  { kind: "out", text: "compiled 26 case(s) from 16 section(s) → cases" },
  { kind: "cmd", text: "peira run cases --bed bed.json --seed 42" },
  { kind: "pass", text: "PASS  CASE-submit-accepted-001" },
  { kind: "pass", text: "PASS  CASE-status-visible-001" },
  { kind: "fail", text: "FAIL  CASE-result-isolation-001 — assertion failed" },
  { kind: "dim", text: "        status: expected 404, got 200" },
  { kind: "out", text: "seed 42 | 25 pass, 1 fail, 0 error" },
  { kind: "cmd", text: "peira triage --evidence run.jsonl --intent intent" },
  { kind: "bug", text: "BUG   CASE-result-isolation-001 — another user can read" },
  { kind: "bug", text: "      the submitter's result; the intent names this exactly" },
  { kind: "dim", text: "proposals (nothing applied): run-triage.json" },
];
