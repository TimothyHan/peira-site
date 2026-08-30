// Hero content. Every terminal line reflects a real Peira session shape
// (verdict counts consistent: 26 cases → 25 pass / 1 fail / 0 error).
export type TermLineKind = "cmd" | "out" | "pass" | "fail" | "dim" | "bug";

export interface TermLine {
  kind: TermLineKind;
  text: string;
}

export const hero = {
  eyebrow: "run-start · ai-native api testing",
  headlineClaim: "Your test plan",
  headlineTested: "compiles.",
  headlineQuiet: "A deterministic runner executes it.",
  lede: "Intent compiler, deterministic runner, failure triage, and evidence ledger in a single CLI. Use peira compile and peira run against any REST API — the config can be one URL.", // rendered with inline /docs#cli links in hero.tsx
  installCommand: "npm install -g peira",
  honesty: ["No API key", "No signup", "Zero LLM at runtime", "MIT"],
  secondaryCta: { label: "View on GitHub", href: "https://github.com/slowhama/peira" },
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
