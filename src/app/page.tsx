"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Lenis from "lenis";
import { Github } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-white/10">
      <Header />

      <main className="pt-48 pb-24 px-6 md:px-0">

        {/* Two-Column Hero Section */}
        <section className="max-w-6xl mx-auto mb-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <div className="text-center md:text-left">
            {/* Hero Logo Visual */}
            <div className="mb-8 flex justify-center md:justify-start md:pl-1">
              <Image
                src="/logo.png"
                alt="Ciel Logo"
                width={80}
                height={80}
                className="opacity-90 brightness-110 hover:scale-105 transition-transform duration-300 w-auto h-auto"
              />
            </div>

            <p className="text-xl font-[family-name:var(--font-plus-jakarta)] text-[var(--text-secondary)] leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              Ciel is a high-performance, open-source download manager for Windows.
              Built for speed with multi-threaded acceleration, integrated yt-dlp support, and a native torrent engine.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-20">
              <a
                href="https://github.com/shubham-pathak1/ciel/releases"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[var(--text)] text-[var(--bg)] font-semibold font-[family-name:var(--font-plus-jakarta)] hover:bg-white/90 transition-all"
              >
                Download for Windows
              </a>
              <a
                href="https://github.com/shubham-pathak1/ciel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-[var(--border)] text-[var(--text-secondary)] font-semibold font-[family-name:var(--font-plus-jakarta)] hover:text-[var(--text)] hover:border-[var(--text-muted)] transition-colors"
              >
                <Github className="w-4 h-4" />
                View Source
              </a>
            </div>

            {/* Made with Tech Stack */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <span className="text-xs font-semibold font-[family-name:var(--font-plus-jakarta)] text-[var(--text-muted)] uppercase tracking-widest">Made using</span>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <TechBadge name="Tauri" icon="/icons/tauri.svg" />
                <TechBadge name="Rust" icon="/icons/rust.png" />
                <TechBadge name="React" icon="/icons/react.svg" />
                <TechBadge name="TypeScript" icon="/icons/typescript.svg" />
              </div>
            </div>
          </div>

          {/* Right Column: App Placeholder */}
          <div className="relative group w-full md:w-[120%] md:-ml-[10%] transition-all duration-500">
            <div className="relative z-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] shadow-2xl overflow-hidden">
              <Image
                src="/ciel_demo.png"
                alt="Ciel App Screenshot"
                width={1000}
                height={750}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Feature Grid (Bento) */}
        <section id="features" className="max-w-6xl mx-auto pt-20 border-t border-[var(--border)]">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-2 md:px-0 md:auto-rows-[240px]">
            {/* Card 1: Torrent - Large 2x2 */}
            <div className="md:col-span-2 md:row-span-2 rounded-2xl bg-transparent border border-white/10 flex flex-col group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 p-6 pb-2 md:min-h-[140px] min-h-[100px]">
                <h3 className="text-xl font-bold mb-2">Native Torrent Support</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Download torrents directly. Selective file downloading, sequential mode, and encryption (PE) included.
                </p>
              </div>
              <DemoImage src="/torrent-demo.gif" alt="Torrent Support Demo" />
            </div>

            {/* Card 2: Video */}
            <div className="md:col-span-2 md:row-span-2 rounded-2xl bg-transparent border border-white/10 flex flex-col group hover:border-white/20 transition-colors overflow-hidden relative">
              <div className="relative z-10 p-6 pb-2 md:min-h-[140px] min-h-[100px]">
                <h3 className="text-xl font-bold mb-2">Video Downloader</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Powered by <a href="https://github.com/yt-dlp/yt-dlp" target="_blank" rel="noopener noreferrer" title="visit repo" className="underline underline-offset-2 decoration-white/30 hover:decoration-white/100 transition-all"><code className="bg-black/30 px-1 rounded">yt-dlp</code></a>, Ciel supports downloading 4K/8K & HDR videos from YouTube and also supports video downloading from X, Instagram, etc.
                </p>
              </div>
              <DemoImage src="/yt-demo.gif" alt="Video Downloader Demo" />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/features" className="text-sm font-medium font-[family-name:var(--font-plus-jakarta)] text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors border-b border-transparent hover:border-[var(--text)] pb-0.5">
              View full feature details
            </Link>
          </div>
        </section>

        {/* Comparison Section (SEO Targeting) */}
        <section className="max-w-4xl mx-auto pt-32 pb-48 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-plus-jakarta)]">A better alternative!!!</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto italic">
              Tired of bloated, pay-walled, and outdated legacy managers? Ciel is designed for the modern web—built with Rust for safety and performance.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function DemoImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-1 flex items-center justify-center p-0 md:p-4 md:pt-0 w-full relative z-10 overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={500}
          unoptimized={true}
          className="w-full h-auto md:rounded-lg shadow-xl md:opacity-80 md:scale-[0.98] group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"
        />
      </div>
    </div>
  );
}

function TechBadge({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[var(--text-muted)] transition-all duration-300 group cursor-default">
      <img src={icon} alt={name} className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
      <span className="text-sm font-medium tracking-wide">{name}</span>
    </div>
  );
}

