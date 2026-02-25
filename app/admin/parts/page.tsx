"use client";

import { useEffect, useState } from "react";

export default function AdminPartsPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/get-parts")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data || []);
        setLoading(false);
      });
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/admin/update-part-status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });

    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-extrabold mb-8">
        Parts Requests
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Vehicle</th>
              <th className="p-3 text-left">Part</th>
              <th className="p-3 text-left">Urgency</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3">
                  {item.name}
                  <div className="text-xs text-slate-500">
                    {item.email}
                  </div>
                </td>

                <td className="p-3">
                  {item.year} {item.make} {item.model}
                  <div className="text-xs text-slate-500">
                    {item.vin}
                  </div>
                </td>

                <td className="p-3 max-w-xs">
                  {item.part}
                </td>

                <td className="p-3">
                  {item.urgency}
                </td>

                <td className="p-3">
                  <select
                    value={item.status}
                    onChange={(e) =>
                      updateStatus(item.id, e.target.value)
                    }
                    className="border rounded px-2 py-1"
                  >
                    <option value="new">New</option>
                    <option value="reviewing">Reviewing</option>
                    <option value="invoice_sent">Invoice Sent</option>
                    <option value="paid">Paid</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>

                <td className="p-3 text-xs">
                  {new Date(item.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}