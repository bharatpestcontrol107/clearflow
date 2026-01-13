import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PHONE_NUMBER_FORMATTED } from "./constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clearflowgutters.co.uk"),

  title: {
    default:
      "ClearFlow Gutters | Professional Gutter Cleaning Services UK",
    template: "%s | ClearFlow Gutters",
  },

  description: `Professional gutter cleaning, repairs & maintenance across the UK. Fully insured with 15+ years experience. Same-day service available. Call ${PHONE_NUMBER_FORMATTED} for a free quote.`,

  keywords: [
    "gutter cleaning UK",
    "gutter repairs",
    "gutter maintenance",
    "commercial gutter cleaning",
    "clearflow gutters",
  ],

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111618" },
  ],

  appleWebApp: {
    capable: true,
    title: "ClearFlow Gutters",
    statusBarStyle: "black-translucent",
  },

  openGraph: {
    title: "ClearFlow Gutters – Professional Gutter Services UK",
    description:
      "Expert gutter cleaning and repairs across the UK. Fully insured and trusted professionals.",
    url: "https://clearflowgutters.co.uk",
    siteName: "ClearFlow Gutters",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ClearFlow Gutters",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
