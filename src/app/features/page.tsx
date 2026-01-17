"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
    Film,
    Download,
    ClipboardCheck,
    FolderTree,
    CalendarClock,
    Cookie,
    Merge,
    Settings2,
    ShieldCheck,
    ChevronsRight
} from "lucide-react";
import Lenis from "lenis";
import { useEffect } from "react";

export default function FeaturesPage() {
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

            <main className="pt-40 pb-24 px-6 md:px-0 max-w-4xl mx-auto">


                <div className="grid gap-20">
                    {/* Core Features */}
                    <section className="mb-24">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-plus-jakarta)]">
                                Core Features
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                            <FeatureItem icon={ChevronsRight} title="Parallel Downloading" description="Optimized multi-threaded HTTP engine with segment-based chunk management for max speed." />
                            <FeatureItem icon={Film} title="Video Support" description="Integrated with yt-dlp to support high-resolution video and audio from thousands of platforms." />
                            <FeatureItem icon={Download} title="Torrent Support" description="Full magnet link support with content preview, metadata polling, and selective file downloading." />
                            <FeatureItem icon={ClipboardCheck} title="Clipboard Monitoring" description="&quot;Autocatch&quot; technology detects URLs in your clipboard for seamless link addition." />
                            <FeatureItem icon={FolderTree} title="Smart Categorization" description="Automatically organizes downloads into Videos, Music, Archives, Software, and Documents." />
                            <FeatureItem icon={CalendarClock} title="Download Scheduler" description="Plan your queue to start or pause at specific times for better bandwidth management." />
                        </div>
                    </section>

                    {/* Advanced Capabilities */}
                    <section className="mb-24">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold tracking-tight mb-4 font-[family-name:var(--font-plus-jakarta)]">
                                Advanced Capabilities
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                            <FeatureItem icon={Cookie} title="Session Support" description="Provide custom User-Agents and Cookies to bypass restrictions on premium file hosts." />
                            <FeatureItem icon={Merge} title="Auto-Muxing" description="Seamlessly merges high-quality video and audio streams into a single file using FFmpeg." />
                            <FeatureItem icon={Settings2} title="Automation" description="Automatic folder reveal upon completion, system shutdown options, and sound notifications." />
                            <FeatureItem icon={ShieldCheck} title="Privacy Focus" description="Completely offline-first. No tracking, no telemetry, no accounts. All data stays local." />
                        </div>
                    </section>

                    {/* Internal Engines */}
                    <section className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8">
                        <h2 className="text-xl font-bold mb-6 text-[var(--text)] font-[family-name:var(--font-plus-jakarta)]">
                            Internal Engines
                        </h2>
                        <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                            To ensure Ciel "just works" out of the box, <span className="text-[var(--text)] font-medium">yt-dlp</span> and <span className="text-[var(--text)] font-medium">FFmpeg</span> are bundled directly as Rust sidecars. No manual installation required.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-1.5 rounded-md bg-zinc-800 text-zinc-400 shrink-0">
                                    <Film className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="font-medium text-[var(--text)] block mb-1">yt-dlp</span>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Handles high-speed metadata extraction and video stream downloads.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-1.5 rounded-md bg-zinc-800 text-zinc-400 shrink-0">
                                    <Merge className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="font-medium text-[var(--text)] block mb-1">FFmpeg</span>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Handles transparent merging of 4K/8K video and audio tracks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-[var(--border)]">
                            <p className="text-xs text-[var(--text-secondary)] italic">
                                <strong>Note:</strong> Bundling these allows for a seamless, technical-free experience. However, if you prefer a "Lite" version of Ciel without these internal binaries, a separate build is available on request.
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function FeatureItem({ title, description, icon: Icon }: { title: string; description: string; icon: any }) {
    return (
        <div className="flex gap-5">
            <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)]">
                    <Icon className="w-5 h-5" />
                </div>
            </div>
            <div>
                <h3 className="font-bold text-lg mb-2 text-[var(--text)] font-[family-name:var(--font-plus-jakarta)] tracking-tight">{title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">{description}</p>
            </div>
        </div>
    );
}
