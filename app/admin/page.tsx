"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [audits, setAudits] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/admin-data")
      .then((res) => res.json())
      .then((data) => setAudits(data.audits));
  }, []);

  async function updateStatus(id: string, status: string) {
    const res = await fetch("/api/update-status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });

    const data = await res.json();

    if (data.error) {
      alert("Update failed: " + data.error);
      return;
    }

    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Collision SS Admin Dashboard
        </h1>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="px-6 py-4 border-b border-slate-800 flex justify-between">
            <h2 className="text-lg font-semibold">Full Audit Submissions</h2>
            <span className="text-sm text-slate-400">
              {audits.length} total
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-slate-300">
                <tr>
                  <th className="text-left px-6 py-3">Name</th>
                  <th className="text-left px-6 py-3">Email</th>
                  <th className="text-left px-6 py-3">Vehicle</th>
                  <th className="text-left px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {audits.map((audit) => (
                  <tr key={audit.id} className="border-t border-slate-800">
                    <td className="px-6 py-3">{audit.name}</td>
                    <td className="px-6 py-3">{audit.email}</td>
                    <td className="px-6 py-3">{audit.vehicle || "-"}</td>
                    <td className="px-6 py-3">
                      <select
                        value={audit.status}
                        onChange={(e) =>
                          updateStatus(audit.id, e.target.value)
                        }
                        className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1"
                      >
                        <option value="paid">Paid</option>
                        <option value="in_process">In Process</option>
                        <option value="complete">Complete</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {!audits.length && (
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