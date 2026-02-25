"use client";

import { useEffect, useState } from "react";

export default function InquiriesPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/get-inquiries")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/admin/update-inquiry-status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });

    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Shop Inquiries</h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Shop</th>
            <th className="text-left p-2">Contact</th>
            <th className="text-left p-2">Volume</th>
            <th className="text-left p-2">DRP %</th>
            <th className="text-left p-2">Interest</th>
            <th className="text-left p-2">Status</th>
            <th className="text-left p-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{item.shop_name || "-"}</td>
              <td className="p-2">{item.contact_name || "-"}</td>
              <td className="p-2">{item.monthly_vehicle_count ?? "-"}</td>
              <td className="p-2">{item.drp_percentage ?? "-"}</td>
              <td className="p-2">{item.interest_type || "-"}</td>
              <td className="p-2">
                <select
                  value={item.status || "new"}
                  onChange={(e) =>
                    updateStatus(item.id, e.target.value)
                  }
                  className="border p-1"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="closed">Closed</option>
                </select>
              </td>
              <td className="p-2">
                {item.created_at
                  ? new Date(item.created_at).toLocaleDateString()
                  : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}