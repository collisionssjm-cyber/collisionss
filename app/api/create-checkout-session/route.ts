import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  try {
    const { name, email, year, make, model, comments } = await req.json();

    if (!name || !email || !year || !make || !model) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_PRICE_ID) {
      throw new Error("Missing STRIPE_PRICE_ID");
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],

      customer_email: email,

      metadata: {
        name,
        email,
        year,
        make,
        model,
        comments: comments || "",
        type: "full_audit",
      },

      success_url:
        "https://www.collisionss.com/upload?session_id={CHECKOUT_SESSION_ID}",

      cancel_url:
        "https://www.collisionss.com/audit",
    });

    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    console.error("Stripe ERROR:", error);

    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}