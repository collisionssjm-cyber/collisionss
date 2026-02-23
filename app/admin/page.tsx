export const dynamic = "force-dynamic";

import { createClient } from "@supabase/supabase-js";

export default async function AdminPage() {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // Fetch audits
  const { data: audits, error: auditError } = await supabase
    .from("audits")
    .select("*")
    .order("id", { ascending: false });

  // Fetch questions (only if table exists)
  const { data: questions, error: questionError } = await supabase
    .from("questions")
    .select("*")
    .order("id", { ascending: false });

  return (
    <div style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h1>Collision SS Admin</h1>

      <h2>Full Audits</h2>
      {auditError && (
        <div style={{ color: "red" }}>
          Error loading audits: {auditError.message}
        </div>
      )}
      <pre>
        {audits ? JSON.stringify(audits, null, 2) : "No audit data found."}
      </pre>

      <h2>$1 Questions</h2>
      {questionError && (
        <div style={{ color: "red" }}>
          Error loading questions: {questionError.message}
        </div>
      )}
      <pre>
        {questions
          ? JSON.stringify(questions, null, 2)
          : "No question data found."}
      </pre>
    </div>
  );
}