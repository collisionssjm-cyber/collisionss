"use client";

import { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    vehicle: "",
    insuranceCompany: "",
    notes: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong.");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("Checkout failed.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold">
          Full Collision Audit – $49
        </h1>

        <p className="mt-4 text-slate-400">
          Provide your estimate details below. Payment is collected securely
          after submission.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-10 shadow-xl"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3"
          />

          <input
            type="text"
            name="vehicle"
            placeholder="Vehicle (Year / Make / Model)"
            value={formData.vehicle}
            onChange={handleChange}
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3"
          />

          <input
            type="text"
            name="insuranceCompany"
            placeholder="Insurance Company"
            value={formData.insuranceCompany}
            onChange={handleChange}
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3"
          />

          <textarea
            name="notes"
            rows={4}
            placeholder="Additional Notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold hover:bg-blue-500 transition disabled:opacity-50"
          >
            {loading ? "Redirecting..." : "Continue to Secure Checkout"}
          </button>
        </form>
      </div>
    </div>
  );
}