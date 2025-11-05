import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, product } = body ?? {};

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Thi?u th?ng tin b?t bu?c" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("[Contact]", { name, email, product: product ?? null, message });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: "?? c? l?i x?y ra" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
