import { NextResponse } from "next/server";
import { Resend } from "resend";

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
      photos
    } = body;

    // Basic validation
    if (!name || !email || !part) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ===============================
    // 📩 EMAIL TO YOU (ADMIN)
    // ===============================
    await resend.emails.send({
      from: "Collision SS <no-reply@collisionss.com>",
      to: ["joseph.marino@collisionss.com"], // MUST BE ARRAY
      subject: "New Parts Request",
      html: `
        <h2>New Parts Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <hr/>
        <p><strong>Vehicle:</strong> ${year || ""} ${make || ""} ${model || ""}</p>
        <p><strong>VIN:</strong> ${vin || "N/A"}</p>
        <p><strong>Requested Part:</strong> ${part}</p>
        <p><strong>Budget:</strong> ${budget || "N/A"}</p>
        <p><strong>Urgency:</strong> ${urgency || "Standard"}</p>
      `
    });

    // ===============================
    // 📩 CONFIRMATION TO CUSTOMER
    // ===============================
    await resend.emails.send({
      from: "Collision SS <no-reply@collisionss.com>",
      to: [email], // MUST BE ARRAY
      subject: "We Received Your Parts Request",
      html: `
        <h2>Parts Request Received</h2>
        <p>Hi ${name},</p>
        <p>We’ve received your request for:</p>
        <p><strong>${part}</strong></p>
        <p>Our team is sourcing the best available options now.</p>
        <p>You will receive a secure payment link once sourcing is complete.</p>
        <br/>
        <p>– Collision SS</p>
      `
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Parts Tracker Error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}