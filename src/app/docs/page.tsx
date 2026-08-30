import type { Metadata } from "next";
import { gettingStarted, cliCommands, caseAnatomy } from "@/data/docs";
import { InstallCommand } from "@/components/ui/install-command";
import { hero } from "@/data/hero";

export const metadata: Metadata = {
  title: "Docs — Peira",
  description:
    "Getting started with Peira: install, describe your service, write intent, compile, run, and gate CI with zero LLM calls. Full CLI reference and case anatomy.",
};

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded border border-border bg-[oklch(0.145_0.008_260)] p-4 font-mono text-[12.5px] leading-relaxed text-muted-foreground">
      {code}
    </pre>
  );
}

// Developer docs — server component; content from src/data/docs.ts.
export default function DocsPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
      {/* header */}
      <div className="border-b border-border pb-6">
        <p className="eyebrow">docs · zero → ci</p>
        <h1 className="mt-3 text-3xl md:text-4xl">Developer docs</h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          The journey from zero to a green pipeline, the full CLI, and what a compiled case
          actually looks like. Everything below is real — commands, flags, and output shapes
          come from the tool, not from marketing.
        </p>
        <nav aria-label="On this page" className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs">
          <a href="#getting-started" className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground">getting-started</a>
          <a href="#cli" className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground">cli-reference</a>
          <a href="#anatomy" className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground">case-anatomy</a>
        </nav>
      </div>

      {/* getting started */}
      <section id="getting-started" className="pt-12">
        <h2 className="text-2xl md:text-3xl">Getting started</h2>
        <div className="mt-8 space-y-12">
          {gettingStarted.map((step) => (
            <div key={step.num} className="grid gap-4 sm:grid-cols-[3rem_1fr]">
              <span className="font-mono text-xs font-semibold text-pass">{step.num}</span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-[1.8] text-foreground/75">{step.body}</p>
                {step.num === "00" ? (
                  <div className="mt-4">
                    <InstallCommand command={hero.installCommand} />
                  </div>
                ) : (
                  step.code && (
                    <div className="mt-4">
                      <CodeBlock code={step.code} />
                    </div>
                  )
                )}
                {step.note && (
                  <p className="mt-3 border-l-2 border-border pl-3 text-[13px] leading-relaxed text-muted-foreground">
                    {step.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLI reference */}
      <section id="cli" className="pt-16">
        <h2 className="text-2xl md:text-3xl">CLI reference</h2>
        <p className="mt-3 text-sm leading-[1.8] text-foreground/75">
          Nine commands. Only <code className="font-mono text-[13px]">compile</code>,{" "}
          <code className="font-mono text-[13px]">triage</code>, and{" "}
          <code className="font-mono text-[13px]">adopt</code> ever touch a model — on your own
          session, never in CI.
        </p>
        <div className="mt-6 divide-y divide-border rounded border border-border">
          {cliCommands.map((cmd) => (
            <div key={cmd.name} className="p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-mono text-sm font-semibold text-pass">{cmd.name}</h3>
                <code className="min-w-0 font-mono text-xs text-muted-foreground">{cmd.synopsis}</code>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{cmd.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          full flag glossary: <span className="text-foreground">peira help</span>
        </p>
      </section>

      {/* case anatomy */}
      <section id="anatomy" className="pt-16">
        <h2 className="text-2xl md:text-3xl">Anatomy of a case</h2>
        <p className="mt-3 text-sm leading-[1.8] text-foreground/75">
          A case is JSON: optional setup steps, one test step, optional teardown. Five
          primitives cover what hand-written suites need — Peira&rsquo;s 2022 ancestor
          re-expressed 27/27 specs with zero escape hatches.
        </p>
        <div className="mt-6">
          <CodeBlock code={caseAnatomy.code} />
        </div>
        <dl className="mt-6 space-y-4">
          {caseAnatomy.notes.map((n) => (
            <div key={n.key} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="font-mono text-[13px] font-semibold text-pass">{n.key}</dt>
              <dd className="text-sm leading-relaxed text-foreground/75">{n.note}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
          Cases are regenerable artifacts — never hand-patch one into divergence. Change the
          intent, recompile the section, review the diff. That is the whole discipline.
        </p>
      </section>
    </div>
  );
}
