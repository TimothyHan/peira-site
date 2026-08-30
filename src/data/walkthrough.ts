// "Follow one promise" — the same example at every stage of the loop.
// The promise: cancelling a shipped order must be refused. Values are
// consistent across steps (hash 6da1a5fc7ff5 → reworded → 91c02be411aa).
import type { Actor } from "./loop";

export interface WalkStep {
  key: string;
  tab: string;
  stage: string;
  title: string;
  narration: string;
  actor: Actor;
  actorLabel: string;
  artifactLabel: string;
  artifact: string;
}

export const walkthrough: readonly WalkStep[] = [
  {
    key: "write",
    tab: "01 write",
    stage: "01",
    title: "You describe the promise — plain English",
    narration:
      "Your whole job is the sentences. The tag is mechanical: your agent adds it (it's in the drop-in agent instructions), peira adopt adds it to existing documents, and untagged headings work anyway — ids derive from the text. The id just makes lineage survive rewording.",
    actor: "human",
    actorLabel: "Human · agent tags",
    artifactLabel: "intent/orders.md",
    artifact: `## Cancelling a shipped order                   ← you
<!-- peira: id=order-cancel-shipped kind=ac -->  ← your agent
Cancelling an order that has already shipped     ← you
is refused with 409, and the order stays SHIPPED.`,
  },
  {
    key: "compile",
    tab: "02 compile",
    stage: "02",
    title: "AI compiles it into a case",
    narration:
      "Your Claude session proposes; a deterministic schema gate disposes. Lineage is stamped mechanically — never trusted from the model — and you review the case as a diff, like any code review.",
    actor: "llm",
    actorLabel: "LLM · gated",
    artifactLabel: "cases/CASE-order-cancel-shipped-001.json",
    artifact: `{
  "id": "CASE-order-cancel-shipped-001",
  "from": { "intent": "order-cancel-shipped",
            "hash": "6da1a5fc7ff5" },
  "setup": [
    { "request": { "method": "post", "route": "/orders",
                   "auth": "$users.alice",
                   "body": { "note": "x {{unique.nonce}}" } },
      "capture": { "orderId": "body.id" } },
    { "request": { "method": "post",
                   "route": "/orders/$orderId/ship",
                   "auth": "$users.alice" } }
  ],
  "test": {
    "request": { "method": "post",
                 "route": "/orders/$orderId/cancel",
                 "auth": "$users.alice" },
    "expect": { "status": 409,
                "body": { "status": "SHIPPED" } }
  }
}`,
  },
  {
    key: "run",
    tab: "03 run",
    stage: "03",
    title: "The runner executes — zero LLM",
    narration:
      "Deterministic: same seed + same service state → same verdicts. Every request and response lands in the evidence log, so the diff below is backed by the actual HTTP exchange.",
    actor: "deterministic",
    actorLabel: "Deterministic",
    artifactLabel: "peira run",
    artifact: `$ peira run cases --bed bed.json --seed 42 --evidence run.jsonl
PASS  CASE-order-create-001
FAIL  CASE-order-cancel-shipped-001 — test: assertion failed
        status: expected 409, got 200 (status mismatch)
        body.status: expected "SHIPPED", got "CANCELLED"
seed 42 | 25 pass, 1 fail, 0 error`,
  },
  {
    key: "triage",
    tab: "04 triage",
    stage: "04",
    title: "Triage drafts the answer",
    narration:
      "Failures come back classified — bug, drift, or flake — judged against the intent text, with the evidence attached. Proposals only: nothing is ever applied by the tool.",
    actor: "llm",
    actorLabel: "LLM proposes",
    artifactLabel: "peira triage",
    artifact: `$ peira triage --evidence run.jsonl --intent intent
BUG   CASE-order-cancel-shipped-001
      the service cancelled an order that had already
      shipped; the intent names 409 and a SHIPPED
      terminal state exactly

finding: expected "409, order stays SHIPPED"
         actual   "200, order became CANCELLED"

proposals (nothing applied): run-triage.json`,
  },
  {
    key: "decide",
    tab: "05 decide",
    stage: "05",
    title: "You decide — one sentence of judgment",
    narration:
      "You file the bug. The run is recorded in the evidence ledger, and the section logs applied — it did its job catching the violation. Trust is earned by runs, not by hand.",
    actor: "human",
    actorLabel: "Human",
    artifactLabel: "peira evidence",
    artifact: `you: "That's a bug. File it and record the run."

$ peira evidence --evidence run.jsonl \\
    --triage run-triage.json --intent intent
ledger run run-seed-42-a41f2c:
  1 section(s) applied, 0 contradicted
  outcome DONE_WITH_CONCERNS`,
  },
  {
    key: "change",
    tab: "Δ change",
    stage: "Δ",
    title: "Six months later, the API changes",
    narration:
      "This is the maintenance story. Reword one sentence; the stale flag names exactly the affected cases; one command regenerates them for review. No grepping through test code — the plan is the program.",
    actor: "human",
    actorLabel: "Human + tooling",
    artifactLabel: "the change, end to end",
    artifact: `# reword one sentence in intent/orders.md:
- …is refused with 409, and the order stays SHIPPED.
+ …is refused with 422, and the order stays SHIPPED.

$ peira validate cases --bed bed.json --intent intent
warn  CASE-order-cancel-shipped-001 is STALE —
      intent "order-cancel-shipped" is now 91c02be411aa,
      case was compiled from 6da1a5fc7ff5

$ peira compile intent --out cases --bed bed.json \\
    --section order-cancel-shipped
compiled 1 case(s) from 1 section(s) → cases`,
  },
] as const;

export const tally = {
  writeLabel: "what you write",
  write: `## Cancelling a shipped order
<!-- peira: id=order-cancel-shipped kind=ac -->
Cancelling an order that has already shipped
is refused with 409, and the order stays SHIPPED.`,
  writeNote: "…that's the whole authoring surface.",
  getLabel: "what you get",
  gets: [
    "an executable, reviewable case — 16 sections became 26 cases in the reference bed",
    "5 fresh seeded probes per run for every invariant section",
    "Given/When/Then docs and a visual HTML run report, regenerated on demand",
    "a trust ledger where this section earns applied, run by run",
  ],
} as const;
