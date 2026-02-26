import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-01-28.clover",
});

export async function POST(req: Request) {
  try {
    const { email, amount, requestId } = await req.json();

    console.log("Incoming:", { email, amount });

    if (!email || !amount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Collision SS Parts Sourcing",
            },
            unit_amount: Math.round(Number(amount) * 100),
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/admin/parts",
      metadata: {
        requestId,
      },
    });

    console.log("Stripe session created:", session.url);

    return NextResponse.json({ url: session.url });

  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json(
      { error: "Stripe session failed" },
      { status: 500 }
    );
  }
}