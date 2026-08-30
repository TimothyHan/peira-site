import { ScrollAnimate } from "@/components/scroll-animate";
import { InstallCommand } from "@/components/ui/install-command";
import { HeroTerminal } from "./hero-terminal";
import { hero, heroTerminal } from "@/data/hero";

// Section 1 · hook — dual-cta-hero (adapted per site-kb/design/patterns.md):
// primary CTA = the install command, secondary = GitHub hairline pill.
export function HeroSection() {
  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="container mx-auto grid min-h-[calc(100vh-14rem)] max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <ScrollAnimate delay={0}>
            <p className="eyebrow">{hero.eyebrow}</p>
          </ScrollAnimate>
          <ScrollAnimate delay={0.1}>
            <h1 className="mt-5 text-5xl leading-[0.93] md:text-7xl xl:text-8xl">
              {hero.headlineClaim} <span className="text-pass">{hero.headlineTested}</span>
              <br />
              <span className="headline-quiet">{hero.headlineQuiet}</span>
            </h1>
          </ScrollAnimate>
          <ScrollAnimate delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {hero.lede}
            </p>
          </ScrollAnimate>
          <ScrollAnimate delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <InstallCommand command={hero.installCommand} />
              <a
                href={hero.secondaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="hover-hairline rounded border border-border px-5 py-3 text-sm font-medium"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              {hero.honesty.join(" · ")}
            </p>
          </ScrollAnimate>
        </div>
        <ScrollAnimate delay={0.35} direction="none">
          <HeroTerminal lines={[...heroTerminal]} />
        </ScrollAnimate>
      </div>
    </section>
  );
}
