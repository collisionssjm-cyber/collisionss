"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminPage() {
  const [audits, setAudits] = useState<any[]>([]);
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data: auditsData } = await supabase
      .from("audits")
      .select("*")
      .order("created_at", { ascending: false });

    const { data: questionsData } = await supabase
      .from("questions")
      .select("*")
      .order("created_at", { ascending: false });

    setAudits(auditsData || []);
    setQuestions(questionsData || []);
    setLoading(false);
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading admin dashboard...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-8 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-12">
          CollisionSS Admin Dashboard
        </h1>

        {/* AUDITS */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Full Audits</h2>

          <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Vehicle</th>
                  <th className="p-3 text-left">Session ID</th>
                  <th className="p-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {audits.map((audit) => (
                  <tr key={audit.id} className="border-t">
                    <td className="p-3">{audit.name}</td>
                    <td className="p-3">{audit.email}</td>
                    <td className="p-3">{audit.vehicle}</td>
                    <td className="p-3 text-xs">{audit.session_id}</td>
                    <td className="p-3">
                      {new Date(audit.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* QUESTIONS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">$1 Questions</h2>

          <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Question</th>
                  <th className="p-3 text-left">Session ID</th>
                  <th className="p-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((q) => (
                  <tr key={q.id} className="border-t">
                    <td className="p-3">{q.name}</td>
                    <td className="p-3">{q.email}</td>
                    <td className="p-3">{q.question}</td>
                    <td className="p-3 text-xs">{q.session_id}</td>
                    <td className="p-3">
                      {new Date(q.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </main>
  );
}