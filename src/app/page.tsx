import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          C?a h?ng g?i ??ng k? / s?n ph?m s?
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Giao di?n hi?n ??i, th?n thi?n tr?n mobile. Ch? h??ng d?n mua h?p ph?p
          qua k?nh ch?nh th?c ho?c ??i l? u? quy?n.
        </p>
      </section>
      <section className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />)
        )}
      </section>
      <div className="mt-10 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md bg-black px-4 py-2 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Li?n h? h? tr?
        </Link>
      </div>
    </div>
  );
}
