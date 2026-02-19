export const dynamic = "force-dynamic";
export const runtime = "nodejs"; 
export const revalidate = 0;

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ---- VERIFY ENV VARS AT RUNTIME ----
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase environment variables missing");
}

const supabase = createClient(supabaseUrl, supabaseKey);

// ------------------------------------

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files provided" }, { status: 400 });
    }

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = `${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("audit-files")
        .upload(fileName, buffer, {
          contentType: file.type
        });

      if (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Upload route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
