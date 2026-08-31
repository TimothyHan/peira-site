import { ScrollAnimate } from "@/components/scroll-animate";
import { SeedToggle } from "@/components/ui/seed-toggle";
import { renderedCase, triageKinds } from "@/data/features";
import { triageKindsKo, featureCopyKo } from "@/data/ko";
import type { Locale } from "@/data/sections";

// Section 4 · show — feature deep-dives on the raised band (dark-section).
// Three features; each visual is the tool's real output shape, not illustration.
const ENGLISH_RENDER = "Cases are JSON with subset-matching semantics. One command turns the same case into Given/When/Then — or a full visual HTML run report with the observed request/response log attached to every failure.";
const ENGLISH_SEED = "The seed is a run's replay number. Every \u201Crandom\u201D value is hash(seed, case id, key) — pure functions, nothing stored. Same seed, same service state → same verdicts. Any failure replays exactly.";
const ENGLISH_TRIAGE = "Infrastructure errors are routed away before the model sees anything — misreading an unreachable environment as a product bug is mechanically impossible. What remains is judged against the intent text, not the case.";

export function FeaturesSection({ locale = "en" }: { locale?: Locale }) {
  const kinds = locale === "ko" ? triageKindsKo : triageKinds;
  const f = locale === "ko" ? featureCopyKo : null;
  return (
    <section className="dark-section py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-6xl space-y-24 px-4">
        {/* Feature A: readable renders */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ScrollAnimate>
            <p className="eyebrow">{f ? f.render.eyebrow : "peira render"}</p>
            <h2 className="mt-4 text-3xl md:text-5xl">
              {f ? f.render.headClaim : "Readable output"}{(f ? f.render.headQuiet : "") ? <> <span className="headline-quiet">{f ? f.render.headQuiet : ""}</span></> : null}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {f ? f.render.lede : ENGLISH_RENDER}
            </p>
          </ScrollAnimate>
          <ScrollAnimate delay={0.1} direction="none">
            <div className="rounded border border-border bg-card p-5">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="chip chip-pass">PASS</span>
                <span className="text-muted-foreground">{renderedCase.id}</span>
              </div>
              <div className="mt-4 space-y-2.5 text-sm">
                {renderedCase.lines.map((line) => (
                  <p key={line.kw} className="leading-relaxed">
                    <span className="mr-2 inline-block w-14 font-mono text-[11px] font-semibold uppercase tracking-wider text-pass">
                      {line.kw}
                    </span>
                    <span className="text-muted-foreground">{line.text}</span>
                  </p>
                ))}
              </div>
              <p className="mt-4 border-t border-border pt-3 font-mono text-[11px] leading-relaxed text-muted-foreground/80">
                {renderedCase.lineage}
              </p>
            </div>
          </ScrollAnimate>
        </div>

        {/* Feature B: seeds */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ScrollAnimate className="lg:order-2">
            <p className="eyebrow">{f ? f.seed.eyebrow : "--seed 42"}</p>
            <h2 className="mt-4 text-3xl md:text-5xl">
              {f ? f.seed.headClaim : "Seeded test data"}{(f ? f.seed.headQuiet : "") ? <> <span className="headline-quiet">{f ? f.seed.headQuiet : ""}</span></> : null}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {f ? f.seed.lede : ENGLISH_SEED}
            </p>
          </ScrollAnimate>
          <ScrollAnimate delay={0.1} direction="none" className="lg:order-1">
            <SeedToggle />
          </ScrollAnimate>
        </div>

        {/* Feature C: triage */}
        <div>
          <ScrollAnimate>
            <p className="eyebrow">{f ? f.triage.eyebrow : "peira triage"}</p>
            <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">
              {f ? f.triage.headClaim : "Failure triage"}{(f ? f.triage.headQuiet : "") ? <> <span className="headline-quiet">{f ? f.triage.headQuiet : ""}</span></> : null}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {f ? f.triage.lede : ENGLISH_TRIAGE}
            </p>
          </ScrollAnimate>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {kinds.map((kind, i) => (
              <ScrollAnimate key={kind.chip} delay={i * 0.07} className="h-full">
                <div className="h-full rounded border border-border bg-card p-6">
                  <span className={`chip chip-${kind.chip === "bug" ? "fail" : kind.chip === "drift" ? "error" : "neutral"}`}>
                    {kind.chip.toUpperCase()}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{kind.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{kind.body}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
