import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/80 backdrop-blur dark:border-zinc-800/60 dark:bg-black/50">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            <span className="text-lg">G?i ??ng K? S?</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-300">
            <Link href="/" className="hover:text-black dark:hover:text-white">S?n ph?m</Link>
            <Link href="/contact" className="inline-flex items-center rounded-md bg-black px-3 py-1.5 text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">Li?n h?</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
