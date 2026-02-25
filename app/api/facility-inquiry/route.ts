import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const runtime = "nodejs";

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 🔹 Insert into Supabase
    const { error } = await supabase.from("facility_inquiries").insert([
      {
        shop_name: body.shop_name,
        contact_name: body.contact_name,
        title: body.title,
        monthly_vehicle_count: body.monthly_vehicle_count
          ? Number(body.monthly_vehicle_count)
          : null,
        drp_percentage: body.drp_percentage
          ? Number(body.drp_percentage)
          : null,
        body_rate: body.body_rate
          ? Number(body.body_rate)
          : null,
        paint_rate: body.paint_rate
          ? Number(body.paint_rate)
          : null,
        mechanical_rate: body.mechanical_rate
          ? Number(body.mechanical_rate)
          : null,
        interest_type: body.interest_type,
        description: body.description,
        phone: body.phone,
        email: body.email,
      },
    ]);

    if (error) {
      console.error("Supabase Insert Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 🔹 EMAIL TO YOU (Notification)
    await resend.emails.send({
      from: "Collision SS <notifications@collisionss.com>",
      to: "joseph.marino@collisionss.com",
      subject: `New Shop Inquiry – ${body.shop_name}`,
      replyTo: body.email,
      html: `
        <h2>New Shop Audit Inquiry</h2>
        <p><strong>Shop:</strong> ${body.shop_name}</p>
        <p><strong>Contact:</strong> ${body.contact_name}</p>
        <p><strong>Title:</strong> ${body.title || "N/A"}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
        <p><strong>Monthly Vehicles:</strong> ${body.monthly_vehicle_count || "N/A"}</p>
        <p><strong>DRP %:</strong> ${body.drp_percentage || "N/A"}</p>
        <p><strong>Body Rate:</strong> ${body.body_rate || "N/A"}</p>
        <p><strong>Paint Rate:</strong> ${body.paint_rate || "N/A"}</p>
        <p><strong>Mechanical Rate:</strong> ${body.mechanical_rate || "N/A"}</p>
        <p><strong>Interest:</strong> ${body.interest_type || "N/A"}</p>
        <p><strong>Description:</strong></p>
        <p>${body.description || "N/A"}</p>
      `,
    });

    // 🔹 AUTO-REPLY TO SHOP
    await resend.emails.send({
      from: "Collision SS <notifications@collisionss.com>",
      to: body.email,
      subject: "We Received Your Collision SS Shop Inquiry",
      html: `
        <h2>Thank You for Reaching Out</h2>
        <p>Hi ${body.contact_name || "there"},</p>

        <p>Your inquiry has been received.</p>

        <p>We personally review every shop submission. Based on the information provided, we evaluate:</p>

        <ul>
          <li>Labor rate positioning</li>
          <li>DRP structure analysis</li>
          <li>Parts sourcing opportunities</li>
          <li>Estimate documentation accuracy</li>
          <li>Operational efficiency gaps</li>
        </ul>

        <p>You can expect a direct follow-up within 24 hours.</p>

        <p>– Collision SS</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Facility inquiry error:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}