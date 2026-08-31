// /docs content — sourced from the peira repo's docs/GETTING-STARTED.md and
// the CLI's own usage text. Every command shown is real.
export interface DocStep {
  num: string;
  title: string;
  body: string;
  code?: string;
  codeLang?: "bash" | "json" | "markdown" | "yaml";
  note?: string;
}

export const gettingStarted: readonly DocStep[] = [
  {
    num: "00",
    title: "Install",
    body: "Node ≥ 18, one first-party dependency — no third-party code on the trust path. Running, validating, and rendering need nothing else, ever. Only the authoring commands (compile, adopt) and offline triage use a model, and they shell out to your own logged-in Claude Code CLI session: no API key to provision, nothing in CI.",
    code: "npm install -g peira",
    codeLang: "bash",
  },
  {
    num: "01",
    title: "Describe your service — bed.json",
    body: "The bed config is the only place Peira learns anything about your service. Everything except baseUrl is optional: users are named principals cases refer to as $users.alice (never raw credentials); reset is one HTTP call before each run pointed at your service's own wipe-state endpoint; drain tells the runner how to ask your service whether an async job has settled, so one case's leftovers can never poison the next case's timing; timeouts declares a slow environment's latency envelope (ceilings only — hitting one is an error verdict, never a fail).",
    code: `{
  "baseUrl": "http://localhost:8080",
  "users": { "alice": { "username": "alice", "password": "test-pw" } },
  "reset": { "method": "post", "url": "/test/reset" },
  "drain": { "route": "/orders/status", "idParam": "id",
             "statusPath": "body.state", "terminal": ["SHIPPED", "CANCELLED"] }
}`,
    codeLang: "json",
    note: "Keep one bed file per environment (bed.json, bed.ci.json): same cases, different target.",
  },
  {
    num: "02",
    title: "Write intent — intent/*.md",
    body: "Intent is the human-owned source of truth: plain markdown, one ## section per acceptance criterion or invariant. Tags are optional but recommended — the id is a permanent lineage anchor, so a tagged section can be reworded freely without orphaning its cases. kind=invariant sections compile to templates that mint fresh seeded probes every run. Organize files by capability, not endpoint: the section is the unit of everything.",
    code: `## Creating an order
<!-- peira: id=order-create kind=ac -->
POST /orders with a valid payment method returns 201 with the new order's id.

## Order isolation
<!-- peira: id=order-isolation kind=invariant -->
For all orders o, for all users u ≠ owner(o): GET /orders/{o} as u → 403.`,
    codeLang: "markdown",
    note: "Already have a messy test plan? peira adopt restructures it once — never rewrites — and prints a content-preservation report. You review and commit; from then on it is your document.",
  },
  {
    num: "03",
    title: "Compile",
    body: "Runs on your Claude session. Every candidate case passes the same schema gate as a hand-written one; lineage is stamped mechanically; the compile manifest accounts for every section (compiled / skipped-with-reason / refused). Review the generated cases as a diff — that review is the human checkpoint the trust model is built on.",
    code: "peira compile intent --out cases --bed bed.json",
    codeLang: "bash",
  },
  {
    num: "04",
    title: "Run locally — and close the loop",
    body: "Verdicts are pass | fail | error — assertion failures and infrastructure failures are never conflated. The seed is always printed: any failure reproduces exactly with the same seed against the same service state. First runs usually surface both real bugs and stale intent — that's the point.",
    code: `peira run cases --bed bed.json --seed 42 --evidence run.jsonl
peira run cases --bed bed.json --seed 42 --only CASE-order-cancel-001   # re-run the one failing case
peira run cases --bed bed.json --parallel 8   # worker pool; verdicts + evidence identical to serial
peira run cases --bed bed.json --intent intent --watch   # re-run on change, mapped by lineage
peira triage --evidence run.jsonl --intent intent   # proposes bug | drift | flake; applies nothing
# you adjudicate: fix the service, or edit the intent…
peira validate cases --bed bed.json --intent intent # stale flags name the affected cases
peira compile intent --out cases --bed bed.json --section <changed-section>`,
    codeLang: "bash",
    note: "Watch mode maps changes by lineage, not an import graph: a case edit re-runs exactly that case; an intent edit re-checks staleness and names the affected cases — recompiling stays your call, never an LLM on a save hook. And share readable documentation any time: peira render cases --intent intent --evidence run.jsonl (Given/When/Then, or a full HTML run report; one-way output — regenerate, never edit).",
  },
  {
    num: "05",
    title: "CI — zero LLM",
    body: "Commit intent/, cases/, and the bed configs. CI needs no key and no session; the exit code gates the merge, and --junit writes standard JUnit XML (pass/fail/error map to testcase/failure/error) so any CI test-report UI renders the run without wrapper scripts. When CI goes red, pull the evidence artifact and triage it locally — adjudication stays a human act, never a bot in the pipeline.",
    code: `# .github/workflows/api-tests.yml
- run: npm ci
- run: docker compose up -d orders-service
- run: npx peira validate cases --bed bed.ci.json --intent intent
- run: npx peira run cases --bed bed.ci.json --seed \${{ github.run_id }} --evidence run.jsonl --junit junit.xml
- if: always()
  uses: actions/upload-artifact@v4
  with: { name: evidence, path: run.jsonl }`,
    codeLang: "yaml",
    note: "Then record the adjudicated run: peira evidence --evidence run.jsonl --triage run-triage.json --intent intent. Passing sections log applied; adjudicated drift logs contradicted with the verbatim note; peira trust shows the standings. Trust is earned by runs, not by hand.",
  },
] as const;

export interface CliCommand {
  name: string;
  synopsis: string;
  description: string;
}

export const cliCommands: readonly CliCommand[] = [
  { name: "validate", synopsis: "peira validate [casesDir] [--bed <path>] [--intent <dir>]", description: "Schema + static checks on every case; with --intent also flags stale cases and lints intent structure." },
  { name: "run", synopsis: "peira run [casesDir] --bed <path> [--seed <n>] [--evidence <path>] [--only <id>]… [--grep <substr>] [--parallel <n>] [--junit <path>] [--shard <i>/<n>] [--watch]", description: "The deterministic runner. Zero LLM; seeded, reproducible; writes evidence JSONL with credentials redacted at write time. --only/--grep re-run just the cases you name; --parallel runs a worker pool with verdicts and evidence order identical to serial; --junit emits CI-standard XML; --shard fans out across machines in disjoint deterministic slices; --watch re-runs on change, mapped by lineage." },
  { name: "compile", synopsis: "peira compile [intentDir] --out <dir> [--bed <path>] [--section <id>]…", description: "Intent sections → schema-gated JSON cases via your own Claude session. --section recompiles exactly the named sections and merges the manifest." },
  { name: "stats", synopsis: "peira stats [casesDir] [--openapi <spec.json>]", description: "DSL coverage and recurring escape-hatch shapes — the compiler telling you which primitive the DSL is missing, with evidence. With --openapi: endpoint coverage against your API surface — which endpoints have no case. The spec stays optional; the report only exists when you offer one." },
  { name: "triage", synopsis: "peira triage --evidence <run.jsonl> --intent <dir>", description: "Offline failure classification: bug | drift | flake, judged against the intent text. Proposals only — nothing is ever applied." },
  { name: "evidence", synopsis: "peira evidence --evidence <run.jsonl> [--triage <file>] --intent <dir>", description: "Records an adjudicated run into the evidence ledger (plus a portable JSONL export). Sections earn applied / contradicted per run." },
  { name: "trust", synopsis: "peira trust", description: "The ledger standings — per intent section: applied, contradicted, runs, last applied." },
  { name: "render", synopsis: "peira render [casesDir] [--evidence <run.jsonl>] [--format md|html]", description: "One-way readable documentation: Given/When/Then markdown, or a self-contained visual HTML run report with observed exchanges on failures." },
  { name: "adopt", synopsis: "peira adopt <messy.md> --out <intent/name.md>", description: "One-time authoring assist: restructures an arbitrary document into tagged intent, with a content-preservation report. You review; you own the result." },
] as const;

export interface AnatomyNote {
  key: string;
  note: string;
}

export const caseAnatomy = {
  code: `{
  "id": "CASE-order-isolation-001",
  "title": "Another user cannot read my order",
  "from": { "intent": "order-isolation", "hash": "ae5ab7a63816" },
  "setup": [{
    "request": { "method": "post", "route": "/orders",
                 "auth": "$users.alice",
                 "body": { "note": "x {{unique.nonce}}" } },
    "capture": { "orderId": "body.id" }
  }],
  "test": {
    "request": { "method": "get", "route": "/orders/$orderId",
                 "auth": "$users.bob" },
    "expect": { "status": 403 }
  },
  "teardown": { "drain": true }
}`,
  notes: [
    { key: "from", note: "Lineage, stamped mechanically at compile time — never trusted from the model. When the intent section's text changes, this hash mismatch flags the case stale." },
    { key: "$users.alice", note: "A bed principal by name. Cases never contain credentials; the bed maps names to auth per environment." },
    { key: "{{unique.nonce}}", note: "Seed-derived discriminator: hash(seed, case id, key). Same seed → same value; no fixture files." },
    { key: "capture", note: "Maps an alias to a response path (body.id). Later steps reference it as $orderId (whole value) or {{orderId}} inside strings." },
    { key: "expect", note: "Subset matching, Jest toMatchObject parity, on status, headers (case-insensitive — {\"content-type\": {\"$contains\": \"application/json\"}}), and body. Matchers: {\"$any\": \"string\" | \"number\" | \"boolean\"}, {\"$contains\": \"<substring>\"}, and literal null. Add pollUntil for eventual consistency — never wall-clock sleeps." },
    { key: "teardown.drain", note: "Declares that this case must clean up; the bed's drain probe knows how. The runner polls every captured job to a terminal state before the next case runs." },
  ] as readonly AnatomyNote[],
} as const;

// "Using Peira through your agent" — Peira is agent-native by design: the
// authoring surfaces already run on the author's own Claude session, and the
// deterministic runner is what makes agent-driven testing trustworthy.
export interface AgentExchange {
  speaker: "you" | "agent";
  text: string;
  runs?: readonly string[];
}

export const agentLoop: readonly AgentExchange[] = [
  {
    speaker: "you",
    text: "Add coverage: cancelling an order that already shipped must be refused.",
  },
  {
    speaker: "agent",
    text: "Added a tagged section to intent/orders.md, compiled just that section, and ran the suite:",
    runs: [
      "peira compile intent --out cases --bed bed.json --section order-cancel-shipped",
      "peira run cases --bed bed.json --evidence run.jsonl",
    ],
  },
  {
    speaker: "agent",
    text: "1 failure — the service answers 200 where the intent requires 409. Triage proposes BUG with the request/response evidence attached. Here's the report; do we file it, or should the intent change?",
    runs: [
      "peira triage --evidence run.jsonl --intent intent",
      "peira render cases --intent intent --evidence run.jsonl --format html --out report.html",
    ],
  },
  {
    speaker: "you",
    text: "That's a bug. File it and record the run.",
  },
  {
    speaker: "agent",
    text: "Filed. Run recorded in the evidence ledger — the section logged applied (it did its job catching the violation).",
    runs: ["peira evidence --evidence run.jsonl --triage run-triage.json --intent intent"],
  },
] as const;

export const agentClaudeMd = `# CLAUDE.md — API testing with Peira

- Tests are compiled from intent/*.md. NEVER edit cases/*.json by hand —
  edit the intent section, then recompile exactly that section:
    peira compile intent --out cases --bed bed.json --section <id>
- Run and keep the evidence (note the printed seed for exact replays):
    peira run cases --bed bed.json --evidence run.jsonl
- On failures, triage and PRESENT the proposals — adjudication belongs
  to the human, never to you:
    peira triage --evidence run.jsonl --intent intent
- When the human wants to see results, render the visual report:
    peira render cases --intent intent --evidence run.jsonl --format html --out report.html
- After adjudication, record the run so intent sections earn trust:
    peira evidence --evidence run.jsonl --triage run-triage.json --intent intent`;

export const agentGuarantees: readonly { title: string; body: string }[] = [
  {
    title: "The runner can't be sweet-talked",
    body: "Verdicts are deterministic — a function of (cases, seed, service state). Zero LLM at runtime means an agent cannot wiggle a red run green; it can only fix the service or propose an intent change you approve.",
  },
  {
    title: "The gate refuses, it never patches",
    body: "Everything a model emits — compiled cases, triage proposals, adopted intent — passes a deterministic schema gate. Malformed output is refused with reasons, never silently corrected.",
  },
  {
    title: "Nothing self-applies",
    body: "Triage proposes bug | drift | flake; the human adjudicates. Intent is yours; cases are regenerable artifacts; the evidence ledger records what was decided, with the reason quoted verbatim.",
  },
  {
    title: "It runs on your session",
    body: "compile, triage, and adopt shell out to your own logged-in Claude Code CLI — the same session your agent lives in. No API key to provision, nothing extra to secure.",
  },
] as const;
