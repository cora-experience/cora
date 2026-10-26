import type { Metadata, Viewport } from "next";
import { Inter, Jost } from "next/font/google";

import { RevealObserver } from "@/components/reveal-observer";
import { absoluteUrl, ogImage, siteConfig } from "@/data/site";

import "./globals.css";
import "./cora.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-jost",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.url}/`),
  title: {
    default: siteConfig.title,
    template: "%s — CORA",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "lifestyle",
  keywords: [
    "CORA",
    "CORA STAYS",
    "CORA WEARS",
    "CORA LIVING",
    "CORA PROJECTS",
    "camere Salerno",
    "case vacanza Salerno",
    "Cilento",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: siteConfig.name,
    title: "CORA — A World of Possibilities",
    description: siteConfig.shortDescription,
    url: absoluteUrl("/"),
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "CORA — A World of Possibilities",
    description: siteConfig.shortDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4efe6",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`js ${jost.variable} ${inter.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
