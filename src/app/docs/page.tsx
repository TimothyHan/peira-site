import type { Metadata } from "next";
import { DocsContent } from "@/components/docs-content";
import { abs } from "@/data/site";

export const metadata: Metadata = {
  title: "Docs — Peira",
  description:
    "Getting started with Peira: install, describe your service, write intent, compile, run, and gate CI with zero LLM calls. Drive it through your agent; full CLI reference and case anatomy.",
  alternates: { canonical: abs("/docs/"), languages: { en: abs("/docs/"), ko: abs("/ko/docs/") } },
};

export default function DocsPage() {
  return <DocsContent />;
}
