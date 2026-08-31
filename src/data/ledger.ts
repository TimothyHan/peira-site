// Evidence-ledger standings — the shape `peira trust` prints, with real rows
// from the peira repo's own committed ledger (3 recorded runs).
export interface LedgerRow {
  section: string;
  applied: number;
  contradicted: number;
  runs: number;
  lastApplied: string;
}

export const ledgerRows: readonly LedgerRow[] = [
  { section: "plan#parallel-request-queueing", applied: 3, contradicted: 0, runs: 3, lastApplied: "2026-08-29" },
  { section: "plan#robustness", applied: 3, contradicted: 0, runs: 3, lastApplied: "2026-08-29" },
  { section: "plan#get-status", applied: 2, contradicted: 1, runs: 2, lastApplied: "2026-08-29" },
  { section: "plan#post-submit", applied: 2, contradicted: 1, runs: 2, lastApplied: "2026-08-29" },
] as const;

export const ledgerCopy = {
  eyebrow: "case-verdict → applied | contradicted",
  heading: "Evidence ledger",
  body: "Record an adjudicated run with peira evidence; read the standings with peira trust. A passing section logs applied — and so does a triaged bug, because the section did its job catching the violation. Adjudicated drift logs contradicted, with the reason quoted verbatim. Unadjudicated noise logs nothing.",
} as const;
