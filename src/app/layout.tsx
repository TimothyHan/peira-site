import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono, Black_Han_Sans, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const heading = Anton({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
});

// Korean faces. Anton and Geist carry no Hangul, so Korean text would silently fall back to
// whatever the OS provides and lose the design. Black Han Sans is the closest Korean analogue
// to Anton's heavy condensed display weight; Noto Sans KR carries the body.
const headingKr = Black_Han_Sans({
  variable: "--font-heading-kr",
  subsets: ["latin"],
  weight: "400",
});

const bodyKr = Noto_Sans_KR({
  variable: "--font-body-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Peira — AI-native API testing",
  description:
    "Peira is the AI-native API testing tool: you own a markdown test plan, AI compiles it into deterministic tests, and the runner executes with zero LLM — every verdict traces back to a sentence a person wrote.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} ${mono.variable} ${headingKr.variable} ${bodyKr.variable} antialiased`}>
        <div className="site-theme flex min-h-screen flex-col">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:outline-2 focus:outline-ring"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="flex-1 pt-14">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
