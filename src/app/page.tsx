// Homepage — section spine per site-kb/design/patterns.md (the archetype's
// saas-product-landing funnel, adapted: its own do-not-use-when disqualified
// the stock composition for developer-tooling dark-terminal builds).
//
// Spine (each section built by /site-build-section):
//   1. Hero            — dual-cta-hero: H1 + install command box (primary) + GitHub pill (secondary)
//   2. Proof strip     — "Measured, not promised" six earned stats, hairline grid
//   3. The loop        — process-step-timeline: author → compile → run → triage → record
//   4. Feature deep-dives — terminal/report panels on raised bands (dark-section class)
//   5. Evidence ledger — trust standings table, verdict chips
//   6. CTA close       — cta-repetition-pattern: install command again + radical-honesty sub-copy

import { HeroSection } from "@/components/sections/hero";
import { ProofStripSection } from "@/components/sections/proof-strip";
import { LoopSection } from "@/components/sections/loop";
import { FeaturesSection } from "@/components/sections/features";
import { LedgerSection } from "@/components/sections/ledger";
import { CtaCloseSection } from "@/components/sections/cta-close";

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <ProofStripSection />
      <LoopSection />
      <FeaturesSection />
      <LedgerSection />
      <CtaCloseSection />
    </>
  );
}
