import { ScrollAnimate } from "@/components/scroll-animate";
import { paradigm } from "@/data/loop";
import { tally } from "@/data/walkthrough";
import { WalkthroughStepper } from "./walkthrough-stepper";

// Section 3 · explain — process-step-timeline, made concrete: the five stages
// (+ the maintenance revisit) shown as ONE promise's real artifacts at every
// stage, framed by the effort tally and the before/after paradigm table.
export function LoopSection() {
  return (
    <section id="loop" className="bg-background py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollAnimate>
          <p className="eyebrow">run-start · the loop</p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            Five stages. <span className="headline-quiet">One thinks. Four prove.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            AI-native testing is not old testing with a model bolted on — the division of
            labor changes. Follow one promise through the whole loop, artifacts included.
          </p>
        </ScrollAnimate>

        {/* what you write / what you get */}
        <ScrollAnimate delay={0.05}>
          <div className="mt-10 grid overflow-hidden rounded border border-border md:grid-cols-2">
            <div className="border-b border-border p-6 md:border-b-0 md:border-r">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {tally.writeLabel}
              </p>
              <pre className="mt-3 overflow-x-auto font-mono text-[12px] leading-relaxed text-foreground/85">
                {tally.write}
              </pre>
              <p className="mt-3 text-[13px] italic text-muted-foreground">{tally.writeNote}</p>
            </div>
            <div className="p-6">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-pass">
                {tally.getLabel}
              </p>
              <ul className="mt-3 space-y-2.5">
                {tally.gets.map((g) => (
                  <li key={g} className="flex gap-2.5 text-sm leading-relaxed text-foreground/75">
                    <span aria-hidden className="select-none font-mono text-pass">✓</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollAnimate>

        {/* follow one promise */}
        <ScrollAnimate delay={0.1} direction="none">
          <div className="mt-10">
            <WalkthroughStepper />
          </div>
        </ScrollAnimate>

        {/* the paradigm, generalized */}
        <ScrollAnimate delay={0.05}>
          <div className="mt-10 overflow-hidden rounded border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="border-b border-border p-4 sm:border-b-0 sm:border-r">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  api testing before ai
                </span>
              </div>
              <div className="hidden p-4 sm:block">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-pass">
                  ai-native
                </span>
              </div>
            </div>
            {paradigm.map((row) => (
              <div key={row.before} className="grid grid-cols-1 border-t border-border sm:grid-cols-2">
                <p className="border-b border-border p-4 text-sm leading-relaxed text-muted-foreground line-through decoration-border sm:border-b-0 sm:border-r">
                  {row.before}
                </p>
                <p className="p-4 text-sm leading-relaxed text-foreground/85">{row.after}</p>
              </div>
            ))}
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
