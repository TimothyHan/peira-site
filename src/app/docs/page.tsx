import type { Metadata } from "next";
import { DocsContent } from "@/components/docs-content";

export const metadata: Metadata = {
  title: "Docs — Peira",
  description:
    "Getting started with Peira: install, describe your service, write intent, compile, run, and gate CI with zero LLM calls. Drive it through your agent; full CLI reference and case anatomy.",
  alternates: { canonical: "/docs/", languages: { en: "/docs/", ko: "/ko/docs/" } },
};

export default function DocsPage() {
  return <DocsContent />;
}
