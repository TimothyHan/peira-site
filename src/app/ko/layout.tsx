import type { Metadata } from "next";
import { abs } from "@/data/site";

export const metadata: Metadata = {
  title: "Peira — AI-네이티브 API 테스팅",
  description:
    "Peira는 AI-네이티브 API 테스팅 도구입니다. 마크다운 테스트 계획은 당신의 것이고, AI가 그것을 결정론적 테스트로 컴파일하며, 러너는 LLM 없이 실행합니다 — 모든 판정은 사람이 쓴 문장 하나로 되짚어집니다.",
  alternates: {
    canonical: abs("/ko/"),
    languages: { en: abs("/"), ko: abs("/ko/") },
  },
  openGraph: {
    type: "website",
    siteName: "Peira",
    url: abs("/ko/"),
    title: "Peira — AI-네이티브 API 테스팅",
    description: "Peira는 AI-네이티브 API 테스팅 도구입니다. 마크다운 테스트 계획은 당신의 것이고, AI가 그것을 결정론적 테스트로 컴파일하며, 러너는 LLM 없이 실행합니다 — 모든 판정은 사람이 쓴 문장 하나로 되짚어집니다.",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
  },
};

// lang + .ko-root: the Latin display faces carry no Hangul, so /ko swaps to the Korean
// families declared in the root layout (see globals.css).
export default function KoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="ko" className="ko-root">
      {children}
    </div>
  );
}
