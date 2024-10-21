import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'animate.css';
import Head from 'next/head';
import favicon from '../../public/favicon.ico';
import localFont from "next/font/local";
import Script from "next/script";
import GoogleAnalytics from "./Utility/GoogleAnalytics";

export const runtime = 'edge';

const inter = Inter({ subsets: ["latin"] });

// const euclidFont = localFont({
//   src: [
//     {
//       path: '../../public/fonts/EuclidCircularB/Euclid Circular B Light.ttf',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/EuclidCircularB/Euclid Circular B Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/EuclidCircularB/Euclid Circular B Medium.ttf',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/EuclidCircularB/Euclid Circular B SemiBold.ttf',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/EuclidCircularB/Euclid Circular B Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-euclid',
// })

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Orellana Capital Advisors",
  "url": "https://www.orellanacapitaladvisors.com",
  "logo": "https://www.orellanacapitaladvisors.com/images/logo.svg",
  "description": "",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "info@orellanacapitaladvisors.com"
  }
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.orellanacapitaladvisors.com"),
  title: "Orellana Capital Advisors",
  description: "Asesoramiento Financiero Estratégico",
  keywords: "asesoramiento,finanzas, estrategia, consultoria",
  openGraph: {
    title: "Orellana Capital Advisors | Asesoramiento Financiero Estratégico",
    description: "Impulsamos tu Crecimiento Empresarial con Soluciones Financieras Estratégicas",
    url: "https://www.orellanacapitaladvisors.com",
    siteName: "Orellana Capital Advisors",
    images: [
      {
        url: "https://www.orellanacapitaladvisors.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Orellana Capital Advisor - Asesoramiento Financiero Estratégico",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: favicon.src,
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <Script
        id="jsonLd"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body >{children}</body>
    </html>
  );
}
// className={`${inter.className} ${euclidFont.variable} font-sans`}