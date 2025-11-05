"use client";

import { useState } from "react";

export default function ContactForm({ defaultProduct }: { defaultProduct?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("G?i th?t b?i");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message ?? "?? c? l?i x?y ra");
    }
  }

  return (
    <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900">
      <h3 className="text-lg font-semibold tracking-tight">G?i y?u c?u</h3>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        ?i?n th?ng tin ?? ch?ng t?i h? tr?. Ho?c email: <a className="underline" href="mailto:support@example.com">support@example.com</a>
      </p>
      <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-4">
        <input
          type="text"
          name="name"
          placeholder="H? v? t?n"
          required
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-zinc-950"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-zinc-950"
        />
        <input
          type="text"
          name="product"
          placeholder="S?n ph?m quan t?m (tu? ch?n)"
          defaultValue={defaultProduct}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-zinc-950"
        />
        <textarea
          name="message"
          placeholder="N?i dung y?u c?u"
          rows={4}
          required
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-zinc-950"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          {status === "loading" ? "?ang g?i..." : "G?i y?u c?u"}
        </button>
        {status === "success" && (
          <p className="text-sm text-green-600">?? g?i th?nh c?ng! Ch?ng t?i s? ph?n h?i s?m.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </form>
    </div>
  );
}
