import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ciel - Built for Speed",
  description: "A high-performance, open-source download manager for Windows. Multi-threaded downloads, video support, and torrent integration.",
  keywords: ["download manager", "windows", "open source", "yt-dlp", "torrent", "fast"],
  openGraph: {
    title: "Ciel - Built for Speed",
    description: "A high-performance, open-source download manager for Windows.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
