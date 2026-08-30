"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

// The primary CTA is the install command itself (dual-cta-hero, adapted:
// freemium-radical-honesty register — there is no signup to route to).
export function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable (permissions) — the command is still selectable
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy install command: ${command}`}
      className="hover-hairline group flex w-fit items-center gap-3 rounded border border-border bg-card px-4 py-3 font-mono text-sm"
    >
      <span aria-hidden className="select-none font-semibold text-pass">$</span>
      <span>{command}</span>
      {copied ? (
        <Check aria-hidden className="h-4 w-4 text-pass" />
      ) : (
        <Copy aria-hidden className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
      )}
    </button>
  );
}
