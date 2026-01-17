export function Footer() {
    return (
        <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-12 px-6 font-[family-name:var(--font-plus-jakarta)]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[var(--text-secondary)] text-sm font-semibold">
                    © 2026 Ciel. Built by <a href="https://github.com/shubham-pathak1" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition-colors">shubham-pathak1</a>
                </p>
                <div className="flex gap-6">
                    <a href="https://github.com/shubham-pathak1/ciel/blob/main/LICENSE" className="hover:text-[var(--text)] transition-colors">MIT License</a>
                    <a href="https://github.com/shubham-pathak1/ciel/issues" className="hover:text-[var(--text)] transition-colors">Report Issue</a>
                </div>
            </div>
        </footer>
    );
}
