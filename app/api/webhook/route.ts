import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature") as string;
  const body = await req.text();

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as any;

      const email = session.metadata.email;
      const name = session.metadata.name;
      const insuranceCompany = session.metadata.insuranceCompany || "";
      const notes = session.metadata.notes || "";
      const vehicle = session.metadata.vehicle || "";
      const isQuick = session.metadata.isQuick === "true";

      console.log("Webhook received:", {
        email,
        name,
        insuranceCompany,
        notes,
        vehicle,
        isQuick,
      });

      // INTERNAL EMAIL
      await resend.emails.send({
        from: "Collision SS <no-reply@collisionss.com>",
        to: "collisionss.jm@gmail.com",
        subject: isQuick ? "New $1 Question" : "New Full Audit",
        html: `
          <h2>New Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Insurance:</strong> ${insuranceCompany}</p>
          <p><strong>Vehicle:</strong> ${vehicle}</p>
          <p><strong>Notes:</strong><br>${notes.replace(/\n/g, "<br>")}</p>
        `,
      });

      // CUSTOMER EMAIL
      await resend.emails.send({
        from: "Collision SS <no-reply@collisionss.com>",
        to: email,
        subject: isQuick
          ? "Your $1 Question Was Received"
          : "Your Collision Audit Was Received",
        html: isQuick
          ? `
            <h2>We Received Your Question</h2>
            <p>Your $1 documentation question has been submitted.</p>
            <p>You will receive a reply shortly.</p>
          `
          : `
            <h2>Your Audit Has Been Received</h2>
            <p>Thank you for submitting your collision repair audit.</p>
            <p>You will receive your completed audit soon.</p>
          `,
      });
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("WEBHOOK ERROR:", err);
    return new NextResponse("Webhook Error", { status: 400 });
  }
}
