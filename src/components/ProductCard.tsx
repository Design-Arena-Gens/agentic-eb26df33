import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800/60 dark:bg-zinc-900">
      <div className="flex items-center gap-3">
        <div className="text-2xl">{product.emoji}</div>
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{product.name}</h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            ${product.priceUsd} / th?ng ho?c theo g?i
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-zinc-500 dark:text-zinc-400">Xem chi ti?t v? h??ng d?n</span>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center rounded-md bg-black px-3 py-1.5 text-sm text-white transition group-hover:bg-zinc-800 dark:bg-white dark:text-black dark:group-hover:bg-zinc-200"
        >
          Xem chi ti?t
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-black/0 transition group-hover:ring-8 group-hover:ring-black/5 dark:group-hover:ring-white/5" />
    </div>
  );
}
