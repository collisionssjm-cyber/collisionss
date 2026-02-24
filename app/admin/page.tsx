export const dynamic = "force-dynamic";

import { createClient } from "@supabase/supabase-js";

export default async function AdminPage() {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: audits } = await supabase
    .from("audits")
    .select("*")
    .order("id", { ascending: false });

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Collision SS Admin Dashboard
        </h1>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">

          <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Full Audit Submissions</h2>
            <span className="text-sm text-slate-400">
              {audits?.length || 0} total
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-slate-300">
                <tr>
                  <th className="text-left px-6 py-3">Name</th>
                  <th className="text-left px-6 py-3">Email</th>
                  <th className="text-left px-6 py-3">Vehicle</th>
                  <th className="text-left px-6 py-3">Insurance</th>
                  <th className="text-left px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {audits?.map((audit: any) => (
                  <tr
                    key={audit.id}
                    className="border-t border-slate-800 hover:bg-slate-800/40"
                  >
                    <td className="px-6 py-3">{audit.name}</td>
                    <td className="px-6 py-3">{audit.email}</td>
                    <td className="px-6 py-3">{audit.vehicle || "-"}</td>
                    <td className="px-6 py-3">
                      {audit.insurance_company || "-"}
                    </td>
                    <td className="px-6 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          audit.status === "paid"
                            ? "bg-emerald-600/20 text-emerald-400"
                            : "bg-yellow-600/20 text-yellow-400"
                        }`}
                      >
                        {audit.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {!audits?.length && (
              <div className="p-6 text-slate-400">
                No audit submissions yet.
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}