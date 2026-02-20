import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err) {
    return NextResponse.json({ error: "Webhook Error" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail = session.customer_details?.email;

    // 📩 Email to YOU
    await resend.emails.send({
      from: "Collision SS <noreply@collisionss.com>",
      to: "joseph.marino@collisionss.com",
      subject: "🚨 New Collision SS Audit Purchase",
      html: `
        <h2>New Audit Purchased</h2>
        <p><strong>Customer Email:</strong> ${customerEmail}</p>
        <p><strong>Amount:</strong> $49.00</p>
        <p>Log into dashboard to review.</p>
      `,
    });

    // 📩 Email to CUSTOMER
    if (customerEmail) {
      await resend.emails.send({
        from: "Collision SS <noreply@collisionss.com>",
        to: customerEmail,
        subject: "Your Collision SS Audit Has Started",
        html: `
          <h2>You're In.</h2>
          <p>We received your audit request.</p>
          <p>Please upload your estimate, photos, and final invoice using the link below:</p>
          <a href="https://collisionss.com/upload">Upload Documents</a>
          <p>We’ll review and respond within 24 hours.</p>
        `,
      });
    }
  }

  return NextResponse.json({ received: true });
}
