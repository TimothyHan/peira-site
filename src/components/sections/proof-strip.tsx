import { ScrollAnimate } from "@/components/scroll-animate";
import { stats } from "@/data/stats";

// Section 2 · prove — proof-strip (numerical variant, per patterns.md):
// replaces the archetype's logo wall/testimonials; every numeral traces to
// docs/findings/ in the peira repo. Hairline-divided grid, bun-style.
export function ProofStripSection() {
  return (
    <section id="measured" className="bg-muted/30 py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollAnimate>
          <p className="eyebrow">evidence · docs/findings/</p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            Measured, <span className="headline-quiet">not promised.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Peira&rsquo;s bed is a faithful re-implementation of a real production test target,
            plus its original 27-spec hand-written suite — a baseline to compare against, honestly.
          </p>
        </ScrollAnimate>
        <div className="mt-14 grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <ScrollAnimate key={stat.label} delay={i * 0.05}>
              <div className="h-full border-b border-r border-border p-7">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {stat.label}
                </p>
                <p
                  className={`mt-3 font-semibold tabular-nums tracking-tight ${
                    stat.featured ? "text-6xl text-pass md:text-7xl" : "text-5xl"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stat.detail}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
