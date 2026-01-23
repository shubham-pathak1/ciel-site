"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import MagicBento from "@/components/MagicBento";
import Lenis from "lenis";
import { useEffect } from "react";
import {
    Split,
    Film,
    Download,
    FolderTree,
    Cpu,
    ShieldCheck,
    ClipboardCheck,
    Cookie,
    Settings2
} from "lucide-react";

export default function FeaturesPage() {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    const coreFeatures = [
        {
            label: "Speed",
            title: "Parallel Downloading",
            description: "Optimized multi-threaded HTTP engine with segment-based chunk management for max speed.",
            className: "md:col-span-2",
            icon: Split
        },
        {
            label: "Media",
            title: "Video Support",
            description: "Integrated with yt-dlp to support high-resolution video and audio from thousands of platforms.",
            className: "md:col-span-2",
            icon: Film
        },
        {
            label: "P2P",
            title: "Torrent Support",
            description: "Full magnet link support with content preview, metadata polling, and selective file downloading.",
            className: "md:col-span-2",
            icon: Download
        },
        {
            label: "Organization",
            title: "Smart Categorization",
            description: "Automatically organizes downloads into Videos, Music, Archives, Software, and Documents.",
            className: "md:col-span-2",
            icon: FolderTree
        },
        {
            label: "Infrastructure",
            title: "Internal Sidecars",
            description: "yt-dlp and FFmpeg are bundled directly as Rust sidecars. No manual installation required for 8K video muxing.",
            className: "md:col-span-4",
            icon: Cpu
        }
    ];

    const experienceFeatures = [
        {
            label: "Utilities",
            title: "Clipboard Monitoring",
            description: "Ciel's 'Autocatch' technology works in the background to detect URLs and magnet links in your clipboard. Add downloads instantly without ever leaving your browser.",
            className: "md:col-span-2 md:row-span-2",
            icon: ClipboardCheck
        },
        {
            label: "Advanced",
            title: "Session Support",
            description: "Provide custom User-Agents and Cookies to bypass restrictions on premium file hosts and access restricted content.",
            className: "md:col-span-2",
            icon: Cookie
        },
        {
            label: "Modern",
            title: "Automation",
            description: "Automatic folder reveal, system shutdown options, and sound notifications to keep you informed.",
            className: "md:col-span-2",
            icon: Settings2
        }
    ];

    return (
        <div className="min-h-screen bg-[var(--bg)] selection:bg-white/10">
            <Header />

            <main className="pt-40 pb-32 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Grid 1: Core Performance */}
                    <header className="mb-16 text-center md:text-left">
                        <h2 className="text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-plus-jakarta)]">
                            Core Performance
                        </h2>
                        <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed">
                            The engine under the hood. Ciel combines custom multi-threading with the world's most powerful open-source utilities.
                        </p>
                    </header>

                    <MagicBento
                        cards={coreFeatures}
                        glowColor="255, 255, 255"
                        enableSpotlight
                        enableBorderGlow
                        className="grid-cols-1 md:grid-cols-4"
                    />

                    {/* Grid 2: Experience & Tools */}
                    <header className="mt-48 mb-16 text-center md:text-left">
                        <h2 className="text-4xl font-bold tracking-tight mb-6 font-[family-name:var(--font-plus-jakarta)]">
                            Experience & Tools
                        </h2>
                        <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed">
                            Downloads as they should be. Fast, automated, and built with modern workflows in mind.
                        </p>
                    </header>

                    <MagicBento
                        cards={experienceFeatures}
                        glowColor="255, 255, 255"
                        enableSpotlight
                        enableBorderGlow
                        className="grid-cols-1 md:grid-cols-4"
                    />
                </div>
            </main>

            <Footer />
        </div>
    );
}
