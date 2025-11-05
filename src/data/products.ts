export type Product = {
  slug: string;
  name: string;
  priceUsd: number;
  priceLabel?: string;
  description: string;
  officialUrl: string;
  emoji: string;
};

export const products: Product[] = [
  {
    slug: "chatgpt-pro",
    name: "ChatGPT Pro",
    priceUsd: 20,
    description:
      "G?i n?ng cao cho ChatGPT v?i t?c ?? nhanh h?n, ?u ti?n truy c?p v? c?c kh? n?ng m?i nh?t.",
    officialUrl: "https://chat.openai.com/",
    emoji: "??",
  },
  {
    slug: "gemini-ultra",
    name: "Gemini Ultra",
    priceUsd: 20,
    description:
      "Truy c?p Gemini Advanced (Ultra) v?i c?c t?nh n?ng AI m?nh m? t? Google.",
    officialUrl: "https://one.google.com/ai",
    emoji: "?",
  },
  {
    slug: "gemini-pro-1y",
    name: "Gemini Pro (1 year)",
    priceUsd: 10,
    description:
      "G?i n?m cho Gemini Pro ? c?ng c? AI linh ho?t cho nghi?n c?u v? s?ng t?o.",
    officialUrl: "https://one.google.com/ai",
    emoji: "??",
  },
  {
    slug: "colab-pro-plus",
    name: "Colab Pro+",
    priceUsd: 15,
    description:
      "Hi?u n?ng cao h?n, th?i gian ch?y d?i h?n v? nhi?u t?i nguy?n GPU cho Colab.",
    officialUrl: "https://colab.research.google.com/signup",
    emoji: "??",
  },
  {
    slug: "colab-pro-1y",
    name: "Colab Pro (1 year)",
    priceUsd: 20,
    description:
      "G?i n?m Colab Pro v?i t?i nguy?n ?n ??nh ?? h?c t?p v? nghi?n c?u.",
    officialUrl: "https://colab.research.google.com/signup",
    emoji: "??",
  },
  {
    slug: "chatgpt-plus-1m",
    name: "ChatGPT Plus (1 month)",
    priceUsd: 10,
    description:
      "G?i th?ng ChatGPT Plus: t?c ?? nhanh, truy c?p ?n ??nh v?o c?c model m?i.",
    officialUrl: "https://chat.openai.com/",
    emoji: "?",
  },
  {
    slug: "perplexity-pro-12m",
    name: "Perplexity Pro (12 months)",
    priceUsd: 10,
    description:
      "T?m ki?m c? tr? l? AI v?i ngu?n d?n r? r?ng v? truy v?n n?ng cao.",
    officialUrl: "https://www.perplexity.ai/pro",
    emoji: "??",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
