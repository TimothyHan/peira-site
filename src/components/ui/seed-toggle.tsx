"use client";

import { useState } from "react";
import { seedDemo, type SeedRow } from "@/data/features";

// Interactive proof that "random" data is a pure function of the seed.
// The values are genuine sha256 derivations from peira's uniqueValue().
export function SeedToggle() {
  const [seed, setSeed] = useState<"42" | "1337">("42");
  const rows: readonly SeedRow[] = seedDemo[seed];

  return (
    <div className="rounded border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          seed
        </span>
        {(["42", "1337"] as const).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSeed(s)}
            aria-pressed={seed === s}
            className={`rounded border px-3 py-1 font-mono text-sm transition-colors duration-100 ${
              seed === s
                ? "border-pass bg-pass font-semibold text-primary-foreground"
                : "border-border text-muted-foreground hover:border-border hover:text-foreground"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="mt-4 space-y-1 overflow-x-auto font-mono text-[12.5px] leading-7">
        {rows.map((row) => (
          <div key={row.caseId + row.key} className="whitespace-nowrap text-muted-foreground">
            hash({seed}, {row.caseId}, {row.key}) ={" "}
            <span className="font-semibold text-pass">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
