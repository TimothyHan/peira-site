import { ScrollAnimate } from "@/components/scroll-animate";
import { SeedToggle } from "@/components/ui/seed-toggle";
import { renderedCase, triageKinds } from "@/data/features";

// Section 4 · show — feature deep-dives on the raised band (dark-section).
// Three features; each visual is the tool's real output shape, not illustration.
export function FeaturesSection() {
  return (
    <section className="dark-section py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-6xl space-y-24 px-4">
        {/* Feature A: readable renders */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ScrollAnimate>
            <p className="eyebrow">peira render</p>
            <h2 className="mt-4 text-3xl md:text-5xl">
              Declarative enough to diff. <span className="headline-quiet">Readable enough to review.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Cases are JSON with subset-matching semantics. One command turns the same case
              into Given/When/Then — or a full visual HTML run report with the observed
              request/response log attached to every failure.
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
            <p className="eyebrow">--seed 42</p>
            <h2 className="mt-4 text-3xl md:text-5xl">
              Test data by formula, <span className="headline-quiet">not fixture file.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              The seed is a run&rsquo;s replay number. Every &ldquo;random&rdquo; value is
              hash(seed, case&nbsp;id, key) — pure functions, nothing stored. Same seed, same
              service state → same verdicts. Any failure replays exactly.
            </p>
          </ScrollAnimate>
          <ScrollAnimate delay={0.1} direction="none" className="lg:order-1">
            <SeedToggle />
          </ScrollAnimate>
        </div>

        {/* Feature C: triage */}
        <div>
          <ScrollAnimate>
            <p className="eyebrow">peira triage</p>
            <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">
              A red build is a question. <span className="headline-quiet">Triage drafts the answer.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Infrastructure errors are routed away before the model sees anything — misreading
              an unreachable environment as a product bug is mechanically impossible. What
              remains is judged against the intent text, not the case.
            </p>
          </ScrollAnimate>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {triageKinds.map((kind, i) => (
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
