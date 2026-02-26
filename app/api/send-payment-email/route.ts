import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, link } = await req.json();

    if (!email || !link) {
      return NextResponse.json(
        { error: "Missing email or link" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Collision SS <no-reply@collisionss.com>",
      to: [email],
      subject: "Your Parts Payment Link",
      html: `
        <h2>Parts Payment</h2>
        <p>Your requested part is ready.</p>
        <p><a href="${link}" target="_blank">Click here to complete payment</a></p>
        <p>If the button does not work, copy and paste this link:</p>
        <p>${link}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}