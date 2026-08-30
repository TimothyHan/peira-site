import { ScrollAnimate } from "@/components/scroll-animate";
import { ledgerCopy, ledgerRows } from "@/data/ledger";

// Section 5 · trust — the evidence ledger standings (`peira trust` output shape,
// rows from the peira repo's real committed ledger).
export function LedgerSection() {
  return (
    <section id="evidence" className="bg-background py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollAnimate>
          <p className="eyebrow">{ledgerCopy.eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">{ledgerCopy.heading}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {ledgerCopy.body}
          </p>
        </ScrollAnimate>
        <ScrollAnimate delay={0.1} direction="none">
          <div className="mt-12 overflow-x-auto rounded border border-border">
            <table className="w-full min-w-[560px] font-mono text-[13px] tabular-nums">
              <thead>
                <tr className="border-b border-border bg-muted/50 text-left">
                  {["section", "applied", "contradicted", "runs", "last applied"].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ledgerRows.map((row) => (
                  <tr key={row.section} className="border-b border-border last:border-b-0">
                    <td className="px-4 py-3">{row.section}</td>
                    <td className={`px-4 py-3 font-semibold ${row.applied > 0 ? "text-pass" : "text-muted-foreground"}`}>
                      {row.applied}
                    </td>
                    <td className={`px-4 py-3 font-semibold ${row.contradicted > 0 ? "text-fail" : "text-muted-foreground"}`}>
                      {row.contradicted}
                    </td>
                    <td className="px-4 py-3">{row.runs}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.lastApplied}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            real rows — peira&rsquo;s own committed ledger, 3 recorded runs
          </p>
        </ScrollAnimate>
      </div>
    </section>
  );
}
