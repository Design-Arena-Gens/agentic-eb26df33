import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Li?n h? ? G?i ??ng K? S?",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-semibold tracking-tight">Li?n h? h? tr?</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        G?i y?u c?u c?a b?n, ch?ng t?i s? ph?n h?i s?m nh?t c? th?.
      </p>
      <div className="mt-6">
        <ContactForm />
      </div>
    </div>
  );
}
