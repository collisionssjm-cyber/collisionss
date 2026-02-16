import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: body.lineItems,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      metadata: body.metadata,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("CHECKOUT ERROR:", err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
