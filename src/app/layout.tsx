import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    template: "%s | WA Tools",
    default: "WA Tools - Testimonial Generator & More",
  },
  description: "A collection of useful tools including Testimonial Generator.",
  openGraph: {
    title: "WA Tools - Testimonial Generator & More",
    description:
      "A collection of useful tools including Testimonial Generator.",
    url: "https://watools.com",
    siteName: "WA Tools",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WA Tools - Testimonial Generator & More",
    description:
      "A collection of useful tools including Testimonial Generator.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body>
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR_ADSENSE_PUBLISHER_ID"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
