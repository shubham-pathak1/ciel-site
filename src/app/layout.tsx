import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  alternates: {
    canonical: "https://ciel-app.vercel.app",
  },
  keywords: [
    "ciel", "ciel download manager", "rust based download manger", "fast download manager",
    "lightweight download manager", "rust download manager", "ciel all in one dowload manager",
    "next gen download manager", "windows downloader", "yt-dlp gui", "yt-dlp downloader",
    "yt videos downloader", "youtube video downloader", "4k youtube video downloader",
    "8k video downloader", "hdr video downloader", "torrent downloader windows",
    "native torrent engine", "multi-threaded downloader", "idm alternative open source",
    "free download manager alternative", "neat download manager rival", "open source downloader",
    "tauri app downloader", "high speed downloader", "video grabber", "online video saver",
    "batch video downloader", "playlist downloader", "instagram video downloder",
    "twitter video downloader", "x.com downloader", "facebook video downloader",
    "tiktok video downloader", "reddit video downloader", "twitch clip downloader",
    "github download manager", "rust language app", "safe downloader", "no telemetry downloader",
    "private download manager", "efficient downloader", "low cpu downloader", "low ram downloader",
    "best windows downloader 2026", "ciel app", "ciel rust", "internet download manager replacement",
    "jdownloader alternative", "aria2 alternative", "motrix alternative", "eagleget alternative"
  ],
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
    icon: "/64x64.png",
    shortcut: "/64x64.png",
    apple: "/64x64.png",
  },
  openGraph: {
    title: "Ciel — The Modern, High-Performance Download Manager",
    description: "Multi-threaded downloads, video grabber, and native torrents. The open-source IDM alternative built with Rust.",
    url: "https://ciel-app.vercel.app",
    siteName: "Ciel",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ciel - The Rust-based Download Manager",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciel — The Ultimate Download Manager for Windows",
    description: "Fast, private, and open-source. Multi-threaded acceleration and native video/torrent support.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Ciel",
  "operatingSystem": "Windows",
  "applicationCategory": "UtilitiesApplication",
  "applicationSubCategory": "Download Manager",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "downloadUrl": "https://github.com/shubham-pathak1/ciel/releases/latest",
  "softwareVersion": "0.1.0",
  "description": "A high-performance, open-source download manager for Windows built with Rust, featuring multi-threaded acceleration, yt-dlp video downloading, and native torrent support.",
  "featureList": [
    "Multi-threaded HTTP downloads",
    "4K/8K/HDR Video Downloader (yt-dlp)",
    "Native Torrent Client",
    "Sequential Torrent Downloading",
    "No Telemetry or Tracking",
    "Ultra-low RAM Usage"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${plusJakarta.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
