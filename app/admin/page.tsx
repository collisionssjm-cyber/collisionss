"use client";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const [audits, setAudits] = useState<any[]>([]);
  const [filteredAudits, setFilteredAudits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  async function loadAudits() {
    setLoading(true);
    const { data, error } = await supabase
      .from("audits")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setAudits(data || []);
      setFilteredAudits(data || []);
    }

    setLoading(false);
  }

  function handleLogin() {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthenticated(true);
      loadAudits();
    } else {
      alert("Incorrect password");
    }
  }

  function applyFilters(searchTerm: string, status: string) {
    let list = [...audits];

    if (status !== "all") {
      list = list.filter((a) => a.status === status);
    }

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      list = list.filter(
        (a) =>
          (a.name?.toLowerCase() || "").includes(term) ||
          (a.email?.toLowerCase() || "").includes(term) ||
          (a.vehicle?.toLowerCase() || "").includes(term)
      );
    }

    setFilteredAudits(list);
  }

  function handleSearchChange(e: any) {
    const value = e.target.value;
    setSearch(value);
    applyFilters(value, statusFilter);
  }

  function handleStatusFilter(e: any) {
    const value = e.target.value;
    setStatusFilter(value);
    applyFilters(search, value);
  }

  async function updateInternalNotes(id: string, notes: string) {
    await supabase.from("audits").update({ internal_notes: notes }).eq("id", id);
  }

  async function updateStatus(id: string, newStatus: string) {
    await supabase.from("audits").update({ status: newStatus }).eq("id", id);
    loadAudits();
  }

  function exportCSV() {
    const rows = [
      [
        "Name",
        "Email",
        "Vehicle",
        "Insurance",
        "Notes",
        "Status",
        "Internal Notes",
      ],
      ...audits.map((a) => [
        a.name,
        a.email,
        a.vehicle,
        a.insurance_company,
        a.notes,
        a.status,
        a.internal_notes,
      ]),
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      rows.map((r) => r.map(String).join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "audits_export.csv";
    link.click();
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="p-8 bg-slate-800 rounded-xl w-96 text-center space-y-4">
          <h1 className="text-xl font-bold">Admin Login</h1>
          <input
            type="password"
            className="w-full p-2 rounded bg-slate-700"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-500"
          >
            Login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={exportCSV}
          className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500"
        >
          Export CSV
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-6">
        <input
          className="bg-slate-800 p-2 rounded w-1/3"
          placeholder="Search by name, email, or vehicle..."
          value={search}
          onChange={handleSearchChange}
        />

        <select
          className="bg-slate-800 p-2 rounded"
          value={statusFilter}
          onChange={handleStatusFilter}
        >
          <option value="all">All Statuses</option>
          <option value="paid">Paid</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {loading ? (
        <p>Loading…</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-slate-700">
            <thead className="bg-slate-800">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Vehicle</th>
                <th className="p-3">Insurance</th>
                <th className="p-3">Files</th>
                <th className="p-3">Notes</th>
                <th className="p-3">Status</th>
                <th className="p-3">Internal Notes</th>
              </tr>
            </thead>

            <tbody>
              {filteredAudits.map((audit) => (
                <tr key={audit.id} className="border-t border-slate-700">
                  <td className="p-3">{audit.name}</td>
                  <td className="p-3">{audit.email}</td>
                  <td className="p-3">{audit.vehicle}</td>
                  <td className="p-3">{audit.insurance_company}</td>

                  <td className="p-3">
                    {audit.files?.length > 0 ? (
                      <ul className="space-y-1">
                        {audit.files.map((url: string, i: number) => (
                          <li key={i}>
                            <a
                              className="text-blue-400 underline"
                              href={url}
                              target="_blank"
                            >
                              File {i + 1}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-slate-500">None</span>
                    )}
                  </td>

                  <td className="p-3">{audit.notes || "—"}</td>

                  <td className="p-3">
                    <select
                      className="bg-slate-800 p-2 rounded"
                      value={audit.status}
                      onChange={(e) =>
                        updateStatus(audit.id, e.target.value)
                      }
                    >
                      <option value="paid">Paid</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>

                  <td className="p-3">
                    <textarea
                      className="bg-slate-800 w-full p-2 rounded"
                      defaultValue={audit.internal_notes || ""}
                      onBlur={(e) =>
                        updateInternalNotes(audit.id, e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
