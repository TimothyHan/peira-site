// Korean homepage — the same section components as /, given locale="ko".
import { HeroSection } from "@/components/sections/hero";
import { ProofStripSection } from "@/components/sections/proof-strip";
import { LoopSection } from "@/components/sections/loop";
import { FeaturesSection } from "@/components/sections/features";
import { LedgerSection } from "@/components/sections/ledger";
import { CtaCloseSection } from "@/components/sections/cta-close";

export default function KoHomePage() {
  return (
    <>
      <HeroSection locale="ko" />
      <LoopSection locale="ko" />
      <FeaturesSection locale="ko" />
      <LedgerSection locale="ko" />
      <ProofStripSection locale="ko" />
      <CtaCloseSection locale="ko" />
    </>
  );
}
