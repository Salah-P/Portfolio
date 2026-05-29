import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Salah Asif Parbhulkar | AI Engineer Portfolio",
  description:
    "AI Engineer specializing in LLM systems, agentic workflows, model benchmarking, FastAPI development, and scalable AI infrastructure.",

  keywords: [
    "AI Engineer",
    "Machine Learning",
    "LLM",
    "FastAPI",
    "Python",
    "LangChain",
    "Artificial Intelligence",
    "Portfolio",
    "Salah Asif Parbhulkar",
  ],

  authors: [
    {
      name: "Salah Asif Parbhulkar",
    },
  ],

  creator: "Salah Asif Parbhulkar",

  openGraph: {
    title: "Salah Asif Parbhulkar | AI Engineer",
    description:
      "Portfolio showcasing AI systems, LLM benchmarking, agentic workflows, research, and software engineering projects.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Salah Asif Parbhulkar | AI Engineer",
    description:
      "AI Engineer specializing in LLMs, agentic workflows, benchmarking systems, and scalable APIs.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
