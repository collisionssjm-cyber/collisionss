import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const runtime = "nodejs";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      year,
      make,
      model,
      vin,
      part,
      budget,
      urgency,
    } = body;

    if (!name || !email || !part) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("parts_requests").insert([
      {
        name,
        email,
        phone,
        year,
        make,
        model,
        vin,
        part,
        budget,
        urgency,
        status: "new",
      },
    ]);

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    await resend.emails.send({
      from: "Collision SS <no-reply@collisionss.com>",
      to: process.env.EMAIL_USER!,
      subject: "New Parts Request",
      html: `
        <h2>New Parts Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Vehicle:</strong> ${year} ${make} ${model}</p>
        <p><strong>VIN:</strong> ${vin}</p>
        <p><strong>Part:</strong> ${part}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}