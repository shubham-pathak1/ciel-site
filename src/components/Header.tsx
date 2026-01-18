"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
    const pathname = usePathname();
    const isFeaturesPage = pathname === "/features";

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 font-[family-name:var(--font-plus-jakarta)]">
            <nav className="w-full max-w-3xl h-14 pl-4 pr-2 rounded-full border border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md shadow-2xl flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity pl-2">
                    <Image src="/logo.png" alt="Ciel" width={24} height={24} className="brightness-110 w-auto h-auto" />
                    <span className="font-semibold tracking-tight text-[15px] font-[family-name:var(--font-plus-jakarta)]">Ciel</span>
                </Link>
                <div className="flex items-center gap-2">
                    {isFeaturesPage ? (
                        <Link href="/" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors px-4 py-2">Home</Link>
                    ) : (
                        <Link href="/features" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors px-4 py-2">Features</Link>
                    )}
                    <a
                        href="https://github.com/shubham-pathak1/ciel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:block text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors px-4 py-2"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://github.com/shubham-pathak1/ciel/releases"
                        className="px-5 py-2 rounded-full bg-[var(--text)] text-[var(--bg)] text-sm font-medium hover:bg-white/90 transition-colors"
                    >
                        Download
                    </a>
                </div>
            </nav>
        </header>
    );
}
