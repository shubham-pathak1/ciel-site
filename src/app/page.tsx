import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* Nav */}
      <nav className="container py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Ciel" width={28} height={28} />
          <span className="font-medium">Ciel</span>
        </div>
        <a
          href="https://github.com/shubham-pathak1/ciel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline"
          style={{ color: 'var(--text-dim)' }}
        >
          GitHub →
        </a>
      </nav>

      {/* Hero */}
      <section className="container flex-1 flex flex-col justify-center py-24">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
          Built for speed.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-lg leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          A fast, open-source download manager for Windows. Parallel downloads, video support, torrents. No bloat.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/shubham-pathak1/ciel/releases/latest"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
            style={{ background: 'var(--text)', color: 'var(--bg)' }}
          >
            Download
          </a>
          <a
            href="https://github.com/shubham-pathak1/ciel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border transition-colors hover:bg-white/5"
            style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}
          >
            View source
          </a>
        </div>
      </section>

      {/* Features - just a simple list, not cards */}
      <section className="container py-24 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          <Feature title="Fast" desc="Multi-threaded HTTP downloads. Up to 64 connections." />
          <Feature title="Video" desc="yt-dlp integration. Download from YouTube, Twitter, and more." />
          <Feature title="Torrents" desc="Magnet links with file selection and privacy encryption." />
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-8 border-t flex items-center justify-between text-sm" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
        <span>Made by <a href="https://github.com/shubham-pathak1" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--text-dim)' }}>shubham-pathak1</a></span>
        <span>MIT</span>
      </footer>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>{desc}</p>
    </div>
  );
}
