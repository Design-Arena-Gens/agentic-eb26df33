export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200/60 py-10 text-sm text-zinc-600 dark:border-zinc-800/60 dark:text-zinc-400">
      <div className="mx-auto max-w-6xl px-4">
        <p>
          L?u ?: Ch?ng t?i ch? khuy?n ngh? mua qua k?nh ch?nh th?c ho?c ??i l? ???c
          u? quy?n. Kh?ng h? tr? ho?c g?i ? c?c k?nh giao d?ch kh?ng r? ngu?n g?c.
        </p>
        <p className="mt-2">? {new Date().getFullYear()} G?i ??ng K? S?</p>
      </div>
    </footer>
  );
}
