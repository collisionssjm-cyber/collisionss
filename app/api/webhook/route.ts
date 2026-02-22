import Stripe from "stripe";
import { headers } from "next/headers";
import { Resend } from "resend";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const body = await req.text();

  const headerList = await headers();
  const signature = headerList.get("stripe-signature");

  if (!signature) {
    return new Response("Missing Stripe signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed.", err);
    return new Response("Webhook Error", { status: 400 });
  }

  // 🔥 Only act on successful checkout
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail = session.customer_details?.email;
    const amount = session.amount_total
      ? (session.amount_total / 100).toFixed(2)
      : "0.00";

    try {
      // 📩 Email to YOU
      await resend.emails.send({
        from: "Collision SS <noreply@collisionss.com>",
        to: "collisionss.jm@gmail.com", // change if needed
        subject: "🚨 New Payment Received – Collision SS",
        html: `
          <h2>New Payment Received</h2>
          <p><strong>Customer Email:</strong> ${customerEmail}</p>
          <p><strong>Amount:</strong> $${amount}</p>
          <p>Login to dashboard and review submission.</p>
        `,
      });

      // 📩 Email to CUSTOMER
      if (customerEmail) {
        await resend.emails.send({
          from: "Collision SS <noreply@collisionss.com>",
          to: customerEmail,
          subject: "We Received Your Submission – Collision SS",
          html: `
            <h2>Thank You</h2>
            <p>We’ve received your payment and documents.</p>
            <p>Our team is reviewing everything carefully.</p>
            <p>You’ll hear from us shortly.</p>
            <br/>
            <p>– Collision SS</p>
          `,
        });
      }

      console.log("Emails sent successfully");
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }
  }

  return new Response("Success", { status: 200 });
}