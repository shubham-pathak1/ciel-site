import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
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
  title: "Ciel — Fast, Rust Based Download Manager",
  description: "Ciel is a high-performance, open-source download manager for Windows. Built for speed with multi-threaded acceleration, integrated yt-dlp support, and a native torrent engine.",
  keywords: [
    "ciel",
    "ciel download manager",
    "rust based download manger",
    "fast download manager",
    "lightweight download manager",
    "rust download manager",
    "ciel all in one dowload manager",
    "next gen download manager",
    "windows downloader",
    "yt-dlp gui",
    "yt-dlp downloader",
    "yt videos downloader",
    "youtube video downloader",
    "4k youtube video downloader"
  ],
  icons: {
    icon: "/64x64.png",
    shortcut: "/64x64.png",
    apple: "/64x64.png",
  },
  openGraph: {
    title: "Ciel — The Modern Download Manager",
    description: "Multi-threaded, video support, and torrents. All in one lightweight package built with Rust.",
    url: "https://ciel-app.vercel.app",
    siteName: "Ciel",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Ciel Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciel — Rust-based Download Manager",
    description: "High-performance, open-source download manager for Windows.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Ciel",
  "operatingSystem": "Windows",
  "applicationCategory": "DownloadManager",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "downloadUrl": "https://github.com/shubham-pathak1/ciel/releases/latest",
  "softwareVersion": "0.1.0",
  "description": "A high-performance, open-source download manager for Windows built with Rust, featuring yt-dlp and torrent support."
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
      </body>
    </html>
  );
}
