// Feature deep-dives. Each feature's visual is the tool's real output shape.
// Seed values below are GENUINE: computed by peira's uniqueValue(seed, caseId, key).
export interface SeedRow {
  caseId: string;
  key: string;
  value: string;
}

export const seedDemo: Record<"42" | "1337", readonly SeedRow[]> = {
  "42": [
    { caseId: "CASE-status-visible-001", key: "nonce", value: "u7fa659b70a" },
    { caseId: "CASE-status-visible-001", key: "label", value: "uc5ce68469e" },
    { caseId: "CASE-isolation-001", key: "nonce", value: "u00048b8088" },
  ],
  "1337": [
    { caseId: "CASE-status-visible-001", key: "nonce", value: "u0775dfc867" },
    { caseId: "CASE-status-visible-001", key: "label", value: "uf0619b60a2" },
    { caseId: "CASE-isolation-001", key: "nonce", value: "u86178e27d8" },
  ],
} as const;

export interface TriageKind {
  chip: "bug" | "drift" | "flake";
  title: string;
  body: string;
}

export const triageKinds: readonly TriageKind[] = [
  {
    chip: "bug",
    title: "The service broke its promise",
    body: "Observed behavior contradicts what the intent requires. Comes back as a finding — expectation, observation — ready to file.",
  },
  {
    chip: "drift",
    title: "The promise moved",
    body: "The case's encoding is violated while the intent's real requirements still hold. Comes back as the smallest intent-level diff — you approve or reject it.",
  },
  {
    chip: "flake",
    title: "The evidence is thin",
    body: "A failure pattern suggesting nondeterminism. Comes back as a re-run prescription — with the seed, so the replay is exact.",
  },
] as const;

// A rendered Given/When/Then case — real output shape of `peira render`.
export const renderedCase = {
  id: "CASE-status-visible-001",
  verdict: "pass" as const,
  lines: [
    { kw: "Given", text: "POST /orders as alice — captures orderId ← body.id" },
    { kw: "When", text: "GET /orders/status?id=$orderId, polling until { status: \"CONFIRMED\" }" },
    { kw: "Then", text: "the response is 200, and the body matches { id: $orderId, status: \"CONFIRMED\" }" },
    { kw: "Finally", text: "every captured job is drained to a terminal state" },
  ],
  lineage: "From intent status-visibility @ ae5ab7a63816 — when the section's text changes, this case is flagged stale and recompiled.",
} as const;
