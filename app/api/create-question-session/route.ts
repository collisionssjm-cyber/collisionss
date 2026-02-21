import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  
});

export async function POST(req: Request) {
  try {
    const { name, email, question } = await req.json();

    if (!process.env.STRIPE_QUESTION_PRICE_ID) {
      throw new Error("Missing STRIPE_QUESTION_PRICE_ID");
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: process.env.STRIPE_QUESTION_PRICE_ID,
          quantity: 1,
        },
      ],
     success_url: `https://collisionss.com/question-success?session_id={CHECKOUT_SESSION_ID}`,
     cancel_url: `https://collisionss.com/quick-question`,

      metadata: {
        name,
        email,
        question,
      },
    });

    if (!session.url) {
      throw new Error("Stripe did not return a session URL");
    }

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe ERROR:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
