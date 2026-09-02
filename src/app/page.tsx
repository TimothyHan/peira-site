// Homepage — section spine per site-kb/design/patterns.md (the archetype's
// saas-product-landing funnel, adapted: its own do-not-use-when disqualified
// the stock composition for developer-tooling dark-terminal builds).
//
// Spine (each section built by /site-build-section):
//   1. Hero            — dual-cta-hero: H1 + install command box (primary) + GitHub pill (secondary)
//   2. The loop        — process-step-timeline: author → compile → run → triage → record
//   3. Feature deep-dives — terminal/report panels on raised bands (dark-section class)
//   4. Evidence ledger — trust standings table, verdict chips
//   5. Metrics         — the earned numbers, hairline grid; reads as corroboration once the
//                        reader has seen what is being claimed, rather than before
//   6. CTA close       — cta-repetition-pattern: install command again + radical-honesty sub-copy
//
// Backgrounds alternate strictly: bg-background / muted / dark-section / bg-background /
// muted / bg-background. Moving the metrics strip down forced loop → muted and cta-close →
// bg-background to keep no two neighbours alike.

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
      <LoopSection />
      <FeaturesSection />
      <LedgerSection />
      <ProofStripSection />
      <CtaCloseSection />
    </>
  );
}
