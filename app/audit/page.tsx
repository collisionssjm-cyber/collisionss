"use client";

import { useState } from "react";

export default function AuditPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    year: "",
    make: "",
    model: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-3xl font-extrabold text-center">
          Full Estimate Audit
        </h1>

        <p className="mt-6 text-center text-slate-600">
          Provide basic information below. After secure payment,
          you will upload your estimate and supporting documentation.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6 rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
        >

          <input
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          />

          <div className="grid gap-4 sm:grid-cols-3">
            <input
              name="year"
              placeholder="Vehicle Year"
              required
              onChange={handleChange}
              className="rounded-lg border border-slate-300 px-4 py-3"
            />
            <input
              name="make"
              placeholder="Make"
              required
              onChange={handleChange}
              className="rounded-lg border border-slate-300 px-4 py-3"
            />
            <input
              name="model"
              placeholder="Model"
              required
              onChange={handleChange}
              className="rounded-lg border border-slate-300 px-4 py-3"
            />
          </div>

          <textarea
            name="comments"
            placeholder="Additional Comments (optional)"
            rows={4}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          />

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-blue-800 disabled:opacity-50"
            >
              {loading ? "Redirecting..." : "Proceed to Secure Payment ($49)"}
            </button>
          </div>

        </form>

      </div>
    </main>
  );
}