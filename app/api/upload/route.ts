import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Supabase server client
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: "No files received" },
        { status: 400 }
      );
    }

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("audit-files") // your bucket name
        .upload(fileName, buffer, {
          contentType: file.type,
        });

      if (error) {
        console.error("Upload error:", error);
        return NextResponse.json(
          { error: "Upload failed" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true });

  } catch (err: any) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
