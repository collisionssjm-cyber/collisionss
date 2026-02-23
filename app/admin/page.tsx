import { createClient } from "@supabase/supabase-js";

export default async function AdminPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: audits } = await supabase
    .from("audits")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: questions } = await supabase
    .from("questions")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div style={{ padding: 40 }}>
      <h1>Collision SS Admin</h1>

      <h2>Full Audits</h2>
      <pre>{JSON.stringify(audits, null, 2)}</pre>

      <h2>$1 Questions</h2>
      <pre>{JSON.stringify(questions, null, 2)}</pre>
    </div>
  );
}