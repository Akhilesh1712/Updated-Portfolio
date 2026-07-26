import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Akhilesh Kumar — AI & Software Engineer",
    template: "%s — Akhilesh Kumar",
  },
  description:
    "Akhilesh Kumar is a software and AI engineer with 2+ years of experience building LLM applications, Java backend services, GIS systems, and full-stack products.",
  keywords: ["Akhilesh Kumar", "AI engineer", "Java developer", "full stack developer", "GIS developer", "LangGraph", "RAG"],
  authors: [{ name: "Akhilesh Kumar" }],
  creator: "Akhilesh Kumar",
  openGraph: {
    title: "Akhilesh Kumar — AI & Software Engineer",
    description: "Production AI, resilient backend systems, GIS intelligence, and award-winning engineering.",
    url: "/",
    siteName: "Akhilesh Kumar Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhilesh Kumar — AI & Software Engineer",
    description: "Production AI, resilient backend systems, GIS intelligence, and award-winning engineering.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body>{children}</body>
    </html>
  );
}
