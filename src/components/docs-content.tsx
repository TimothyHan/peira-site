import { gettingStarted, cliCommands, caseAnatomy, agentLoop, agentClaudeMd, agentGuarantees, reference, referenceLede } from "@/data/docs";
import { gettingStartedKo, cliCommandsKo, referenceKo, referenceLedeKo, docsPageKo, agentGuaranteesKo, agentLoopKo } from "@/data/ko";
import { DocsNav } from "@/components/docs-nav";
import { InstallCommand } from "@/components/ui/install-command";
import { hero } from "@/data/hero";
import { heroKo } from "@/data/ko";
import type { AgentExchange } from "@/data/docs";
import type { Locale } from "@/data/sections";

const SECTIONS_EN = [
  { id: "getting-started", label: "getting-started" },
  { id: "agents", label: "with-your-agent" },
  { id: "cli", label: "cli-reference" },
  { id: "anatomy", label: "case-anatomy" },
  {
    id: "reference",
    label: "reference",
    children: [
      { id: "ref-case", label: "the case" },
      { id: "ref-request", label: "request step" },
      { id: "ref-expect", label: "expect" },
      { id: "ref-interpolation", label: "interpolation" },
      { id: "ref-bed", label: "bed.json" },
      { id: "ref-verdicts", label: "verdicts" },
      { id: "ref-escape-hatch", label: "escape hatch" },
    ],
  },
] as const;

const EN = {
  eyebrow: "docs · zero → ci",
  title: "Developer docs",
  lede: "The journey from zero to a green pipeline, how to drive it through your agent — the primary way to use Peira (PEER-uh) — the full CLI, and what a compiled case actually looks like. Everything below is real — commands, flags, and output shapes come from the tool, not from marketing.",
  navLabels: { gettingStarted: "getting-started", agents: "with-your-agent", cli: "cli-reference", anatomy: "case-anatomy", reference: "reference" },
  gettingStartedTitle: "Getting started",
  agentsTitle: "Using Peira through your agent",
  agentsLede: "This is the primary way to use Peira. It is agent-native by design: the authoring surfaces already run on your own Claude session, and the deterministic runner is exactly what makes agent-driven testing trustworthy. In practice you talk to your agent in intent-language — it edits the plan, compiles, runs, renders the report, and drafts triage for your adjudication.",
  agentsLoopTitle: "The loop, as a conversation",
  agentsInstructionsTitle: "Drop-in agent instructions",
  agentsInstructionsLede: "peira init scaffolds this as AGENTS.md — the cross-tool convention Claude, Cursor, and Copilot-style agents read, with a CLAUDE.md import for Claude Code — and the workflow above is what you get:",
  agentsGuaranteesTitle: "Why this is safe to hand to an agent",
  cliTitle: "CLI reference",
  cliLede: "Eleven commands. Only compile, triage, and adopt ever touch a model — on your own session, never in CI.",
  cliFooter: "full flag glossary: peira help",
  anatomyTitle: "Anatomy of a case",
  anatomyLede: "A case is JSON: optional setup steps, one test step, optional teardown. Five primitives cover what hand-written suites need — a real legacy suite re-expressed 27/27 specs with zero escape hatches.",
  anatomyFooter: "Cases are regenerable artifacts — never hand-patch one into divergence. Change the intent, recompile the section, review the diff. That is the whole discipline.",
  referenceTitle: "Reference",
  referenceLede,
  referenceFooter: "authority: schema/case.schema.json · full document: docs/REFERENCE.md in the repo",
} as const;

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded border border-border bg-[oklch(0.145_0.008_260)] p-4 font-mono text-[12.5px] leading-relaxed text-muted-foreground">
      {code}
    </pre>
  );
}

// Shared by /docs and /ko/docs — the same structure, different words.
export function DocsContent({ locale = "en" }: { locale?: Locale }) {
  const ko = locale === "ko";
  const t = ko ? { ...docsPageKo, referenceLede: referenceLedeKo } : EN;
  const steps = ko ? gettingStartedKo : gettingStarted;
  const commands = ko ? cliCommandsKo : cliCommands;
  const loop: readonly AgentExchange[] = ko ? agentLoopKo : agentLoop;
  const guarantees = ko ? agentGuaranteesKo : agentGuarantees;
  const refGroups = ko ? referenceKo : reference;
  const SECTIONS = ko
    ? SECTIONS_EN.map((s) => ({ ...s, label: t.navLabels[s.id === "getting-started" ? "gettingStarted" : s.id === "agents" ? "agents" : s.id === "cli" ? "cli" : s.id === "anatomy" ? "anatomy" : "reference"] }))
    : SECTIONS_EN;

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16 lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-12">
      <aside className="hidden lg:block">
        <DocsNav items={SECTIONS} />
      </aside>
      <div className="min-w-0 max-w-3xl">
      {/* header */}
      <div className="border-b border-border pb-6">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="mt-3 text-3xl md:text-4xl">{t.title}</h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {t.lede}
        </p>
        <nav aria-label="On this page" className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs lg:hidden">
          <a href="#getting-started" className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground">{t.navLabels.gettingStarted}</a>
          <a href="#agents" className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground">{t.navLabels.agents}</a>
          <a href="#cli" className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground">{t.navLabels.cli}</a>
          <a href="#anatomy" className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground">{t.navLabels.anatomy}</a>
          <a href="#reference" className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground">{t.navLabels.reference}</a>
        </nav>
      </div>

      {/* getting started */}
      <section id="getting-started" className="scroll-mt-20 pt-12">
        <h2 className="text-2xl md:text-3xl">{t.gettingStartedTitle}</h2>
        <div className="mt-8 space-y-12">
          {steps.map((step) => (
            <div key={step.num} className="grid gap-4 sm:grid-cols-[3rem_1fr]">
              <span className="font-mono text-xs font-semibold text-pass">{step.num}</span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-[1.8] text-foreground/75">{step.body}</p>
                {step.num === "00" ? (
                  <div className="mt-4">
                    <InstallCommand command={(ko ? heroKo : hero).installCommand} />
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

      {/* using peira through your agent — the primary way to use Peira, so it leads */}
      <section id="agents" className="scroll-mt-20 pt-16">
        <h2 className="text-2xl md:text-3xl">{t.agentsTitle}</h2>
        <p className="mt-3 text-sm leading-[1.8] text-foreground/75">
          {t.agentsLede}
        </p>

        <h3 className="mt-8 text-lg font-semibold">{t.agentsLoopTitle}</h3>
        <div className="mt-4 space-y-4 rounded border border-border bg-card p-5">
          {loop.map((turn, i) => (
            <div key={i} className="grid gap-1 sm:grid-cols-[4rem_1fr] sm:gap-4">
              <span
                className={`font-mono text-[11px] font-semibold uppercase tracking-[0.12em] ${
                  turn.speaker === "you" ? "text-foreground" : "text-pass"
                }`}
              >
                {turn.speaker}
              </span>
              <div className="min-w-0">
                <p className="text-sm leading-relaxed text-foreground/75">{turn.text}</p>
                {turn.runs && (
                  <div className="mt-2 space-y-1 overflow-x-auto font-mono text-[11.5px] text-muted-foreground">
                    {turn.runs.map((cmd) => (
                      <div key={cmd} className="whitespace-nowrap">
                        <span className="select-none text-pass">$ </span>
                        {cmd}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-10 text-lg font-semibold">{t.agentsInstructionsTitle}</h3>
        <p className="mt-2 text-sm leading-[1.8] text-foreground/75">
          {t.agentsInstructionsLede}
        </p>
        <div className="mt-4">
          <CodeBlock code={agentClaudeMd} />
        </div>

        <h3 className="mt-10 text-lg font-semibold">{t.agentsGuaranteesTitle}</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {guarantees.map((g) => (
            <div key={g.title} className="rounded border border-border p-5">
              <h4 className="text-sm font-semibold">{g.title}</h4>
              <p className="mt-2 text-[13px] leading-relaxed text-foreground/75">{g.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLI reference */}
      <section id="cli" className="scroll-mt-20 pt-16">
        <h2 className="text-2xl md:text-3xl">{t.cliTitle}</h2>
        <p className="mt-3 text-sm leading-[1.8] text-foreground/75">
          {t.cliLede}
        </p>
        <div className="mt-6 divide-y divide-border rounded border border-border">
          {commands.map((cmd) => (
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
          {t.cliFooter}
        </p>
      </section>

      {/* case anatomy */}
      <section id="anatomy" className="scroll-mt-20 pt-16">
        <h2 className="text-2xl md:text-3xl">{t.anatomyTitle}</h2>
        <p className="mt-3 text-sm leading-[1.8] text-foreground/75">
          {t.anatomyLede}
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
          {t.anatomyFooter}
        </p>
      </section>

      {/* reference — the complete closed surface, finite by design */}
      <section id="reference" className="scroll-mt-20 pt-16">
        <h2 className="text-2xl md:text-3xl">{t.referenceTitle}</h2>
        <p className="mt-3 text-sm leading-[1.8] text-foreground/75">{t.referenceLede}</p>
        <div className="mt-8 space-y-10">
          {refGroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-20">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              {group.intro && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.intro}</p>
              )}
              <dl className="mt-4 space-y-3">
                {group.entries.map((entry) => (
                  <div key={entry.term} className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-4">
                    <dt className="break-words font-mono text-[13px] font-semibold text-pass">{entry.term}</dt>
                    <dd className="text-sm leading-relaxed text-foreground/75">{entry.note}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <p className="mt-8 border-t border-border pt-5 font-mono text-xs text-muted-foreground">
          {t.referenceFooter}
        </p>
      </section>
      </div>
    </div>
  );
}
