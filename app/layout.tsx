import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navigation } from "@/components/navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alsoknownaszac.github.io"),
  title: {
    default: "Collins Amayo — Software Engineer & Full-Stack Developer",
    template: "%s — Collins Amayo",
  },
  description:
    "Collins Amayo is a software engineer specializing in production-grade web applications across fintech, SaaS, healthcare, and digital commerce. Based in Nigeria, available for remote opportunities.",
  keywords: [
    "Collins Amayo",
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Fintech Developer",
    "Nigeria Software Engineer",
    "Remote Developer",
    "Zac Amayo",
    "alsoknownaszac",
  ],
  authors: [{ name: "Collins Amayo", url: "https://alsoknownaszac.github.io" }],
  creator: "Collins Amayo",
  publisher: "Collins Amayo",
  alternates: {
    canonical: "https://alsoknownaszac.github.io",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Collins Amayo — Portfolio",
    url: "https://alsoknownaszac.github.io",
    title: "Collins Amayo — Software Engineer & Full-Stack Developer",
    description:
      "Collins Amayo is a software engineer building production-grade web applications across fintech, SaaS, healthcare, and digital commerce. Based in Nigeria, open to remote opportunities.",
    images: [
      {
        url: "/apple-icon.png",
        width: 180,
        height: 180,
        alt: "Collins Amayo — CA Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@alsoknownaszac",
    creator: "@alsoknownaszac",
    title: "Collins Amayo — Software Engineer & Full-Stack Developer",
    description:
      "Software engineer building production-grade web applications across fintech, SaaS, healthcare, and digital commerce.",
    images: ["/apple-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-dark-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-light-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/icon.svg",
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
