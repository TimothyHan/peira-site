import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Peira — the intent compiler for API testing",
  description:
    "Peira compiles a human-written test plan into deterministic API tests. The LLM works at authoring time, never at runtime — every verdict traces back to a sentence a person wrote.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} ${mono.variable} antialiased`}>
        <div className="site-theme flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-14">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
