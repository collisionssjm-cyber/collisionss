"use client";

import { useEffect, useState } from "react";

export default function AdminPartsPage() {
  const [requests, setRequests] = useState<any[]>([]);
  const [priceInputs, setPriceInputs] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    fetch("/api/admin-data?type=parts")
      .then((res) => res.json())
      .then((data) => setRequests(data.parts || []));
  }, []);

  async function sendPaymentLink(request: any) {
    const finalPrice = priceInputs[request.id];

    if (!finalPrice) {
      alert("Enter a price first.");
      return;
    }

    // Create Stripe session
    const paymentRes = await fetch("/api/create-parts-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: request.email,
        amount: finalPrice,
        requestId: request.id,
      }),
    });

    const paymentData = await paymentRes.json();

    if (!paymentData.url) {
      alert("Payment session failed.");
      return;
    }

    // Send email with link
    await fetch("/api/send-payment-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: request.email,
        link: paymentData.url,
      }),
    });

    alert("Payment link sent.");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Parts Tracker Admin</h1>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
          <table className="w-full text-sm">
            <thead className="bg-slate-800 text-slate-300">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Part</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-t border-slate-800">
                  <td className="px-6 py-3">{request.name}</td>
                  <td className="px-6 py-3">{request.email}</td>
                  <td className="px-6 py-3">{request.part}</td>

                  <td className="px-6 py-3">
                    <input
                      type="number"
                      placeholder="Enter price"
                      className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1"
                      onChange={(e) =>
                        setPriceInputs({
                          ...priceInputs,
                          [request.id]: Number(e.target.value),
                        })
                      }
                    />
                  </td>

                  <td className="px-6 py-3">
                    <button
                      onClick={() => sendPaymentLink(request)}
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                    >
                      Send Payment Link
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!requests.length && (
            <div className="p-6 text-slate-400">
              No parts requests yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}