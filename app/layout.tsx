import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PHONE_NUMBER_FORMATTED } from './constants';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClearFlow Gutters | Professional Gutter Cleaning Services UK | clearflowgutters.co.uk",
  description:
    `Professional gutter cleaning, repairs & maintenance across the UK. Fully insured with 15+ years experience. Same-day service available. Call ${PHONE_NUMBER_FORMATTED} for free quote.`,
  keywords: "gutter cleaning UK, gutter repairs, professional gutter services, gutter maintenance, clearflow gutters, commercial gutter cleaning",
  openGraph: {
    title: "ClearFlow Gutters - Professional Gutter Cleaning Services UK",
    description: "Expert gutter cleaning and repairs across the UK. Fully insured, reliable service with 100% satisfaction guarantee.",
    url: "https://clearflowgutters.co.uk",
    siteName: "ClearFlow Gutters",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f6f8f8] text-[#111618]`}
      >
        {children}
      </body>
    </html>
  );
}

