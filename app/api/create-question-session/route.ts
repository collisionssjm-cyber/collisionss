import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, question } = await req.json();

    if (!name || !email || !question) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_QUESTION_PRICE_ID) {
      throw new Error("Missing STRIPE_QUESTION_PRICE_ID");
    }

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      throw new Error("Missing NEXT_PUBLIC_SITE_URL");
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: process.env.STRIPE_QUESTION_PRICE_ID,
          quantity: 1,
        },
      ],

      // 🔥 This is what fixes your email issue
      customer_email: email,

      metadata: {
        name,
        email,
        question,
      },

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/question-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/quick-question`,
    });

    if (!session.url) {
      throw new Error("Stripe did not return a session URL");
    }

    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    console.error("Stripe ERROR:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}