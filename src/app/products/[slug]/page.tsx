import Link from "next/link";
import { getProductBySlug, products } from "@/data/products";
import ContactForm from "@/components/ContactForm";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{product.emoji}</div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">{product.name}</h1>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Gi? tham kh?o: ${product.priceUsd}
              </p>
            </div>
          </div>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">{product.description}</p>

          <div className="mt-6 rounded-xl border border-zinc-200/60 bg-zinc-50 p-4 text-sm dark:border-zinc-800/60 dark:bg-zinc-950">
            <h3 className="font-medium">H??ng d?n mua h?p ph?p</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
              <li>
                Mua tr?c ti?p t?i k?nh ch?nh th?c ho?c ??i l? u? quy?n c?a d?ch v?.
              </li>
              <li>
                Tr?nh m?i h?nh th?c giao d?ch kh?ng r? ngu?n g?c; kh?ng chia s? t?i kho?n ho?c vi ph?m ?i?u kho?n s? d?ng.
              </li>
              <li>
                Sau khi thanh to?n ch?nh th?c, b?n s? nh?n email x?c nh?n/m? k?ch ho?t v? h??ng d?n s? d?ng t? nh? cung c?p.
              </li>
            </ul>
            <div className="mt-3">
              <Link
                href={product.officialUrl}
                target="_blank"
                className="inline-flex items-center rounded-md bg-black px-3 py-1.5 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Mua t?i k?nh ch?nh th?c
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <ContactForm defaultProduct={product.name} />
      </div>
    </div>
  );
}
