// "Measured, not promised" — every number was earned against a real service
// and is recorded in the peira repo's docs/findings/.
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
    detail: "a real service's hand-written suite, in five primitives — zero escape hatches, zero sleeps",
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
    detail: "bug-vs-drift across 33 pre-registered behavior shifts; zero schema refusals or injections",
  },
  {
    value: "231",
    label: "tests on the tool itself",
    detail: "run against the exact compiled artifact that ships — strict TypeScript throughout",
  },
] as const;
