import { ScrollAnimate } from "@/components/scroll-animate";
import { InstallCommand } from "@/components/ui/install-command";
import { HeroTerminal } from "./hero-terminal";
import { hero, heroTerminal } from "@/data/hero";
import { heroKo, heroTerminalKo, heroLedeKo } from "@/data/ko";
import type { Locale } from "@/data/sections";
import { url } from "@/data/site";

// Section 1 · hook — dual-cta-hero (adapted per site-kb/design/patterns.md):
// primary CTA = the install command, secondary = GitHub hairline pill.
export function HeroSection({ locale = "en" }: { locale?: Locale }) {
  const h = locale === "ko" ? heroKo : hero;
  const term = locale === "ko" ? heroTerminalKo : heroTerminal;
  const docs = locale === "ko" ? url("/ko/docs#cli") : url("/docs#cli");
  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="container mx-auto grid min-h-[calc(100vh-14rem)] max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <ScrollAnimate delay={0}>
            <p className="eyebrow">{h.eyebrow}</p>
          </ScrollAnimate>
          <ScrollAnimate delay={0.1}>
            <h1 className="mt-5 text-5xl leading-[0.93] md:text-7xl xl:text-8xl">
              {h.headlineClaim}{locale === "ko" ? <br /> : " "}<span className="text-pass">{h.headlineTested}</span>
              <br />
              {/* consequence line, one tier down — the claim stays the pitch-carrier */}
              <span className="headline-quiet block text-[0.62em] leading-[1.05]">{h.headlineQuiet}</span>
            </h1>
          </ScrollAnimate>
          <ScrollAnimate delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {locale === "ko" ? heroLedeKo.before : "Intent compiler, deterministic runner, failure triage, and evidence ledger in a single CLI. Use "}
              <a href={docs} className="font-mono text-[0.9em] text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">
                peira compile
              </a>{" "}
              {locale === "ko" ? heroLedeKo.middle : " and "}
              <a href={docs} className="font-mono text-[0.9em] text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">
                peira run
              </a>{" "}
              {locale === "ko" ? heroLedeKo.after : " against any REST API — the config can be one URL."}
            </p>
          </ScrollAnimate>
          <ScrollAnimate delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <InstallCommand command={h.installCommand} />
              <a
                href={h.secondaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="hover-hairline rounded border border-border px-5 py-3 text-sm font-medium"
              >
                {h.secondaryCta.label}
              </a>
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              {h.honesty.join(" · ")}
            </p>
          </ScrollAnimate>
        </div>
        <ScrollAnimate delay={0.35} direction="none">
          <HeroTerminal lines={[...term]} />
        </ScrollAnimate>
      </div>
    </section>
  );
}
