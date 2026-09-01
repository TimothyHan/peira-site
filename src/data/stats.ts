// Every number here was earned against the in-repo bed and is recorded in the peira
// repo's docs/findings/. The bed is a test fixture; the specs it ships with are originals.
export interface Stat {
  value: string;
  label: string;
  detail: string;
  /** the differentiator stat — rendered oversized in pass-green */
  featured?: boolean;
}

export const stats: readonly Stat[] = [
  {
    value: "0",
    label: "LLM calls at runtime",
    detail: "CI needs no API key, no session — the exit code gates the merge",
    featured: true,
  },
  {
    value: "27/27",
    label: "legacy specs re-expressed",
    detail: "the original hand-written suite, re-expressed in request, capture and expect — without dropping to custom code once, and with no sleeps",
  },
  {
    value: "3",
    label: "divergences surfaced",
    detail: "compiling its legacy test plan verbatim caught intent/implementation gaps — one never tested by anyone",
  },
  {
    value: "5/5",
    label: "external API, first try",
    detail: "compiled against a public third-party API; the bed config was one URL",
  },
  {
    value: "87.9%",
    label: "triage agreement",
    detail: "bug-vs-drift across 33 behavior changes planted in advance; zero schema refusals or injections",
  },
  {
    value: "258",
    label: "tests on the tool itself",
    detail: "run against the exact compiled artifact that ships — strict TypeScript, Linux and Windows in CI",
  },
  {
    value: "57ms",
    label: "to the first verdict",
    detail: "boot, load and validate the whole suite, issue a real request, report — no transform pipeline, no JVM, no browser",
  },
  {
    value: "0.17ms",
    label: "tool overhead per case",
    detail: "measured, not claimed (npm run bench) — what you wait for is your service, not the runner",
  },
] as const;
