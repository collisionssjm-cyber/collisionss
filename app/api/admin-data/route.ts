import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { data: fullAudits, error: fullError } = await supabase
      .from("audits")
      .select("*")
      .eq("type", "full")
      .order("created_at", { ascending: false });

    const { data: questions, error: questionError } = await supabase
      .from("audits")
      .select("*")
      .eq("type", "question")
      .order("created_at", { ascending: false });

    if (fullError || questionError) {
      return NextResponse.json(
        { error: fullError?.message || questionError?.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      fullAudits: fullAudits || [],
      questions: questions || [],
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}