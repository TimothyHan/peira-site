import { ScrollAnimate } from "@/components/scroll-animate";
import { InstallCommand } from "@/components/ui/install-command";
import { hero } from "@/data/hero";
import { site } from "@/data/site";

// Section 6 · convert — cta-repetition-pattern (3rd and final placement of the
// install command; freemium-radical-honesty sub-copy).
export function CtaCloseSection() {
  return (
    <section className="bg-muted/30 py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <ScrollAnimate>
          <p className="eyebrow">run-end · 0 error</p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            Write the plan. <span className="headline-quiet">Compile the proof.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            One markdown file and one URL is enough to start. The first run writes evidence;
            the third run starts earning trust.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <InstallCommand command={hero.installCommand} />
            <p className="font-mono text-xs text-muted-foreground">{hero.honesty.join(" · ")}</p>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground"
            >
              Read the design (RFC 0001) and getting-started guide on GitHub
            </a>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
