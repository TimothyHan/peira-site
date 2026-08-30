"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { TermLine } from "@/data/hero";

const KIND_CLASS: Record<TermLine["kind"], string> = {
  cmd: "text-foreground font-medium",
  out: "text-muted-foreground",
  pass: "text-pass",
  fail: "text-fail",
  dim: "text-muted-foreground/70",
  bug: "text-error",
};

// The hero's only object: a real session replaying itself once.
// Reduced motion (or completion) renders the full static transcript.
export function HeroTerminal({ lines }: { lines: TermLine[] }) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? lines.length : 0);

  useEffect(() => {
    if (reduced || shown >= lines.length) return;
    const next = lines[shown];
    const delay = next.kind === "cmd" ? 420 : 130;
    const t = setTimeout(() => setShown((n) => n + 1), delay);
    return () => clearTimeout(t);
  }, [reduced, shown, lines]);

  return (
    <div className="overflow-hidden rounded border border-border bg-[oklch(0.145_0.008_260)]">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div aria-hidden className="flex gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-border" />
          <i className="h-2.5 w-2.5 rounded-full bg-border" />
          <i className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
          seed 42
        </span>
      </div>
      <div className="min-h-[21rem] overflow-x-auto p-4 font-mono text-[13px] leading-relaxed">
        {lines.slice(0, shown).map((line, i) => (
          <div key={i} className={`whitespace-pre ${KIND_CLASS[line.kind]}`}>
            {line.kind === "cmd" && <span className="select-none text-pass">$ </span>}
            {line.text}
          </div>
        ))}
        {shown < lines.length && (
          <span aria-hidden className="inline-block h-3.5 w-1.5 animate-pulse bg-pass align-middle" />
        )}
      </div>
    </div>
  );
}
