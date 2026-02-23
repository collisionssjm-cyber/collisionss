import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Collision SS Full Audit",
              description: "Professional collision estimate audit",
            },
            unit_amount: 4900, // $49.00
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/upload?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Unable to create checkout session" },
      { status: 500 }
    );
  }
}
