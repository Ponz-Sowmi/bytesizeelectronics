import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLocalBusinessJsonLd } from "@/components/seo/localBusinessSchema";
import {
  BUSINESS_GEO,
  SITE_META_DESCRIPTION,
  SITE_NAME,
  SITE_KEYWORDS,
  SITE_URL,
} from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = "Byte Size Electronics | Computers, Printers & CCTV in Harur";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_META_DESCRIPTION,
  keywords: [...SITE_KEYWORDS],
  authors: { name: SITE_NAME, url: SITE_URL },
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: defaultTitle,
    description: SITE_META_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_META_DESCRIPTION,
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Harur",
    "geo.position": `${BUSINESS_GEO.latitude};${BUSINESS_GEO.longitude}`,
    ICBM: `${BUSINESS_GEO.latitude}, ${BUSINESS_GEO.longitude}`,
  },
};

const businessLd = getLocalBusinessJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white font-sans text-slate-900 antialiased">
        <JsonLd data={businessLd} id="ld-json-local-business" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton variant="float" label="WhatsApp Byte Size Electronics" />
      </body>
    </html>
  );
}
