import { ScrollAnimate } from "@/components/scroll-animate";
import { InstallCommand } from "@/components/ui/install-command";
import { hero } from "@/data/hero";
import { url } from "@/data/site";
import { heroKo } from "@/data/ko";
import { sections, type Locale } from "@/data/sections";

// Section 6 · convert — cta-repetition-pattern (3rd and final placement of the
// install command; freemium-radical-honesty sub-copy).
export function CtaCloseSection({ locale = "en" }: { locale?: Locale }) {
  const t = sections[locale].cta;
  const h = locale === "ko" ? heroKo : hero;
  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <ScrollAnimate>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            {t.headClaim} <span className="headline-quiet">{t.headQuiet}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.lede}
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <InstallCommand command={h.installCommand} />
            <p className="font-mono text-xs text-muted-foreground">{h.honesty.join(" · ")}</p>
            <a
              href={locale === "ko" ? url("/ko/docs") : url("/docs")}
              className="text-sm font-medium text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground"
            >
              {t.docsLink}
            </a>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
