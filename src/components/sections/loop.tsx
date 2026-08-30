import { ScrollAnimate } from "@/components/scroll-animate";
import { loopStages, type Actor } from "@/data/loop";

const ACTOR_CLASS: Record<Actor, string> = {
  human: "text-foreground",
  llm: "text-error",
  deterministic: "text-pass",
};

// Section 3 · explain — process-step-timeline (adapted per patterns.md):
// the compile loop as a numbered sequence; each stage carries its actor tag.
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
            Intent is the only source of truth. Everything downstream is a regenerable
            artifact — schema-gated on the way in, evidence-logged on the way out.
          </p>
        </ScrollAnimate>
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {loopStages.map((stage, i) => (
            <ScrollAnimate key={stage.num} delay={i * 0.07} className="h-full">
              <div className="flex h-full flex-col gap-3 bg-background p-6">
                <span className="font-mono text-xs font-semibold text-muted-foreground">
                  {stage.num}
                </span>
                <h3 className="text-lg font-semibold">{stage.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
                <span
                  className={`mt-auto pt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] ${ACTOR_CLASS[stage.actor]}`}
                >
                  {stage.actorLabel}
                </span>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
