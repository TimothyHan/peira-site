import type { Metadata } from "next";
import { DocsContent } from "@/components/docs-content";

export const metadata: Metadata = {
  title: "문서 — Peira",
  description:
    "Peira 시작하기: 설치, 서비스 서술, 인텐트 작성, 컴파일, 실행, 그리고 LLM 호출 없이 CI 게이트까지. 에이전트로 구동하는 법과 전체 CLI 레퍼런스, 케이스 해부를 담았습니다.",
  alternates: { canonical: "/ko/docs/", languages: { en: "/docs/", ko: "/ko/docs/" } },
};

export default function KoDocsPage() {
  return <DocsContent locale="ko" />;
}
