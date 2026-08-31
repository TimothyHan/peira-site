"use client";

import { useState } from "react";
import { walkthrough } from "@/data/walkthrough";
import { walkthroughKo } from "@/data/ko";
import type { Locale } from "@/data/sections";
import type { Actor } from "@/data/loop";

const ACTOR_CLASS: Record<Actor, string> = {
  human: "text-foreground",
  llm: "text-error",
  deterministic: "text-pass",
};

// "Follow one promise" — one example shown as the real artifact at every
// stage. Plain tabs + state; no motion, so nothing to gate on reduced-motion.
export function WalkthroughStepper({ locale = "en" }: { locale?: Locale }) {
  const [active, setActive] = useState(0);
  const steps = locale === "ko" ? walkthroughKo : walkthrough;
  const step = steps[active];

  return (
    <div className="rounded border border-border">
      <div
        role="tablist"
        aria-label="Workflow stages"
        className="flex overflow-x-auto border-b border-border"
      >
        {steps.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            id={`walk-tab-${s.key}`}
            aria-selected={i === active}
            aria-controls={`walk-panel-${s.key}`}
            onClick={() => setActive(i)}
            className={`cursor-pointer whitespace-nowrap border-b-2 px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.1em] outline-none ring-0 transition-colors duration-100 focus-visible:outline-2 focus-visible:outline-ring ${
              i === active
                ? "border-pass text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {s.tab}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`walk-panel-${step.key}`}
        aria-labelledby={`walk-tab-${step.key}`}
        className="grid gap-6 p-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
      >
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs font-semibold text-pass">{step.stage}</span>
            <h3 className="text-lg font-semibold">{step.title}</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.narration}</p>
          <span
            className={`mt-4 inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.12em] ${ACTOR_CLASS[step.actor]}`}
          >
            {step.actorLabel}
          </span>
          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={() => setActive((n) => Math.max(0, n - 1))}
              disabled={active === 0}
              className="cursor-pointer rounded border border-border px-3 py-1.5 text-xs font-medium outline-none ring-0 transition-colors duration-100 hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-default disabled:opacity-40"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={() => setActive((n) => Math.min(steps.length - 1, n + 1))}
              disabled={active === steps.length - 1}
              className="cursor-pointer rounded border border-border px-3 py-1.5 text-xs font-medium outline-none ring-0 transition-colors duration-100 hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-default disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>

        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {step.artifactLabel}
          </p>
          <pre className="mt-2 max-h-[26rem] overflow-auto rounded border border-border bg-[oklch(0.145_0.008_260)] p-4 font-mono text-[12px] leading-relaxed text-muted-foreground">
            {step.artifact}
          </pre>
        </div>
      </div>
    </div>
  );
}
