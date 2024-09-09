import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import favicon from '../../public/favicon.ico';
import localFont from "next/font/local";

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

export const metadata: Metadata = {
  title: "Coddit",
  description: "Sustainable Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
      <Head>
        <link rel="icon" href={favicon.src} />
      </Head>
      <body className={`${inter.className} ${euclidFont.variable} font-sans`}>{children}</body>
    </html>
  );
}
