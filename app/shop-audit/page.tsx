"use client";

import { useState } from "react";

export default function ShopAuditPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/facility-inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
    } else {
      alert("Something went wrong. Try again.");
    }
  }

  if (success) {
    return (
      <div className="max-w-xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Inquiry Received
        </h1>
        <p>
          We’ll review your information and reach out directly.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-20">
      <h1 className="text-3xl font-bold mb-6">
        Full Shop Audit & Parts Sourcing
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="shop_name" placeholder="Shop Name" required className="w-full border p-2" />
        <input name="contact_name" placeholder="Contact Name" required className="w-full border p-2" />
        <input name="title" placeholder="Title" className="w-full border p-2" />
        <input name="email" type="email" placeholder="Email" required className="w-full border p-2" />
        <input name="phone" placeholder="Phone" className="w-full border p-2" />
        <input name="monthly_vehicle_count" type="number" placeholder="Monthly Vehicle Count" className="w-full border p-2" />
        <input name="drp_percentage" type="number" placeholder="DRP %" className="w-full border p-2" />
        <input name="body_rate" type="number" step="0.01" placeholder="Body Labor Rate" className="w-full border p-2" />
        <input name="paint_rate" type="number" step="0.01" placeholder="Paint Labor Rate" className="w-full border p-2" />
        <input name="mechanical_rate" type="number" step="0.01" placeholder="Mechanical Labor Rate" className="w-full border p-2" />

        <select name="interest_type" className="w-full border p-2">
          <option value="">What are you interested in?</option>
          <option value="full_audit">Full Shop Audit</option>
          <option value="parts_sourcing">Parts Sourcing</option>
          <option value="both">Both</option>
        </select>

        <textarea name="description" placeholder="Tell us about your shop..." className="w-full border p-2" />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white p-3"
        >
          {loading ? "Submitting..." : "Request Review"}
        </button>
      </form>
    </div>
  );
}