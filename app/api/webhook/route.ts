import Stripe from "stripe";
import { headers } from "next/headers";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const sig = headers().get("stripe-signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed.", err);
    return new Response("Webhook Error", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail = session.customer_details?.email;
    const amount = session.amount_total ? session.amount_total / 100 : 0;

    try {
      // Email to YOU
      await resend.emails.send({
        from: "Collision SS <noreply@collisionss.com>",
        to: "joseph.marino@collisionss.com",
        subject: "New Audit Payment Received",
        html: `
          <h2>New Payment Received</h2>
          <p>Customer Email: ${customerEmail}</p>
          <p>Amount: $${amount}</p>
        `,
      });

      // Email to CUSTOMER
      if (customerEmail) {
        await resend.emails.send({
          from: "Collision SS <noreply@collisionss.com>",
          to: customerEmail,
          subject: "We Received Your Submission – Collision SS",
          html: `
            <h2>Thank You</h2>
            <p>We received your submission and payment.</p>
            <p>Our team is reviewing your documents and will contact you shortly.</p>
            <p>– Collision SS</p>
          `,
        });
      }

    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }
  }

  return new Response("Success", { status: 200 });
}