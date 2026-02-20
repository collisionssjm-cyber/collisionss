import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err) {
    console.error("Webhook signature verification failed.", err);
    return new NextResponse("Webhook Error", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail = session.customer_details?.email;

    try {
      // Email to you
      await resend.emails.send({
        from: "Collision SS <noreply@collisionss.com>",
        to: "joseph.marino@collisionss.com",
        subject: "New Audit Purchased",
        html: `<p>New audit purchased.</p>
               <p>Email: ${customerEmail}</p>
               <p>Session ID: ${session.id}</p>`,
      });

      // Email to customer
      if (customerEmail) {
        await resend.emails.send({
          from: "Collision SS <noreply@collisionss.com>",
          to: customerEmail,
          subject: "Collision SS Audit Confirmation",
          html: `<p>Thanks for your purchase.</p>
                 <p>Please upload your documents here:</p>
                 <a href="${process.env.NEXT_PUBLIC_BASE_URL}/upload?session_id=${session.id}">
                   Upload Files
                 </a>`,
        });
      }
    } catch (emailError) {
      console.error("Email error:", emailError);
    }
  }

  return NextResponse.json({ received: true });
}
