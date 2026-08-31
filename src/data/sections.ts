// Section headings and ledes, per locale. These used to live inline in the section
// components; they moved here so /ko can render the same components with different words
// instead of duplicating six files that would then drift apart.

export type Locale = "en" | "ko";

export interface SectionCopy {
  eyebrow: string;
  headClaim: string;
  /** optional second half of the two-tone headline; empty for single-phrase titles */
  headQuiet: string;
  lede: string;
}

interface SectionSet {
  proof: SectionCopy;
  loop: SectionCopy;
  cta: SectionCopy & { docsLink: string };
}

export const sections: Record<Locale, SectionSet> = {
  en: {
    proof: {
      eyebrow: "evidence · docs/findings/",
      headClaim: "Quick metrics",
      headQuiet: "",
      lede: "Peira’s bed is a faithful re-implementation of a real production test target, plus its original 27-spec hand-written suite — a baseline to compare against, honestly.",
    },
    loop: {
      eyebrow: "run-start · the loop",
      headClaim: "How it works",
      headQuiet: "",
      lede: "AI-native testing is not old testing with a model bolted on — the division of labor changes. Follow one promise through the whole loop, artifacts included.",
    },
    cta: {
      eyebrow: "run-end · 0 error",
      headClaim: "Get started",
      headQuiet: "",
      lede: "One markdown file and one URL is enough to start. The first run writes evidence; the third run starts earning trust.",
      docsLink: "Read the docs — getting started, CLI reference, case anatomy",
    },
  },
  ko: {
    proof: {
      eyebrow: "evidence · docs/findings/",
      headClaim: "측정값",
      headQuiet: "",
      // Gloss the name once per page, at its first appearance in prose. Greek πεῖρα
      // ("trial") — the reader has no way to guess how to say it otherwise.
      lede: "Peira(피라)의 베드는 실제 운영 테스트 대상을 충실히 재구현한 것이며, 그 서비스의 원래 27개 손으로 쓴 명세도 함께 있습니다 — 정직하게 견줄 기준선입니다.",
    },
    loop: {
      eyebrow: "run-start · the loop",
      headClaim: "동작 원리",
      headQuiet: "",
      lede: "AI-네이티브 테스팅은 예전 테스팅에 모델을 덧붙인 것이 아닙니다 — 역할 분담 자체가 달라집니다. 약속 하나가 루프 전체를 지나는 과정을, 산출물까지 함께 따라가 보세요.",
    },
    cta: {
      eyebrow: "run-end · 0 error",
      headClaim: "시작하기",
      headQuiet: "",
      lede: "마크다운 파일 하나와 URL 하나면 시작할 수 있습니다. 첫 실행은 증거를 남기고, 세 번째 실행부터 신뢰가 쌓이기 시작합니다.",
      docsLink: "문서 읽기 — 시작하기, CLI 레퍼런스, 케이스 해부",
    },
  },
};
