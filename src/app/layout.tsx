import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import favicon from '../../public/favicon.ico';
import localFont from "next/font/local";
import Script from "next/script";
import GoogleAnalytics from "./Utility/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

const euclidFont = localFont({
  src: [
    {
      path: '../../public/fonts/EuclidCircularB/Euclid Circular B Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/EuclidCircularB/Euclid Circular B Light Italic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/EuclidCircularB/Euclid Circular B Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/EuclidCircularB/Euclid Circular B Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/EuclidCircularB/Euclid Circular B Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/EuclidCircularB/Euclid Circular B Medium Italic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/EuclidCircularB/Euclid Circular B SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/EuclidCircularB/Euclid Circular B SemiBold Italic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/EuclidCircularB/Euclid Circular B Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/EuclidCircularB/Euclid Circular B Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    }
  ],
  variable: '--font-euclid',
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Coddit",
  "url": "https://www.coddit.com",
  "logo": "https://www.coddit.com/logo.png",
  "description": "Coddit specializes in custom software development, analysis & discovery, and staff augmentation, focusing on sustainable and eco-friendly solutions.",
  "sameAs": [
    "https://www.linkedin.com/company/coddit-io",
    "https://github.com/coddit-io"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "info@coddit.com"
  }
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.coddit.com"),
  title: "Coddit | Sustainable Software Development",
  description: "Coddit specializes in custom software development, analysis & discovery, and staff augmentation, focusing on sustainable and eco-friendly solutions.",
  keywords: "Coddit, sustainable software, custom development, staff augmentation, eco-friendly tech",
  openGraph: {
    title: "Coddit | Sustainable Software Development",
    description: "Accelerating the transition to a sustainable economy through innovative software solutions.",
    url: "https://www.coddit.com",
    siteName: "Coddit",
    images: [
      {
        url: "https://www.coddit.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coddit - Sustainable Software Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coddit | Sustainable Software Development",
    description: "Accelerating the transition to a sustainable economy through innovative software solutions.",
    images: ["https://www.coddit.com/twitter-image.jpg"],
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
      <Head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className={`${inter.className} ${euclidFont.variable} font-sans`}>{children}</body>
    </html>
  );
}
