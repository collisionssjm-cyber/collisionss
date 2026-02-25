"use client";

import { useState } from "react";

export default function PartsTrackerPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    vin: "",
    part: "",
    budget: "",
    urgency: "normal",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      const res = await fetch("/api/parts-tracker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Parts request submitted successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          year: "",
          make: "",
          model: "",
          vin: "",
          part: "",
          budget: "",
          urgency: "normal",
        });
      } else {
        alert("Something went wrong.");
      }

    } catch (error) {
      console.error(error);
      alert("Submission failed.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Parts Sourcing Request
        </h1>

        <p className="text-center text-slate-600 mb-12">
          Hard-to-find parts, high-dollar components, or price comparison support.
          Submit the details below and we’ll source the information.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-slate-200 p-10 shadow-lg"
        >

          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />

          <div className="grid sm:grid-cols-3 gap-4">
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={formData.year}
              onChange={handleChange}
              className="rounded-lg border px-4 py-3"
            />

            <input
              type="text"
              name="make"
              placeholder="Make"
              value={formData.make}
              onChange={handleChange}
              className="rounded-lg border px-4 py-3"
            />

            <input
              type="text"
              name="model"
              placeholder="Model"
              value={formData.model}
              onChange={handleChange}
              className="rounded-lg border px-4 py-3"
            />
          </div>

          <input
            type="text"
            name="vin"
            placeholder="VIN (Highly Recommended)"
            value={formData.vin}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />

          <textarea
            name="part"
            required
            rows={4}
            placeholder="Describe the part needed (OEM number if known, condition, quantity, etc.)"
            value={formData.part}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="text"
            name="budget"
            placeholder="Budget (Optional)"
            value={formData.budget}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />

          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          >
            <option value="normal">Normal</option>
            <option value="urgent">Urgent</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Parts Request"}
          </button>

        </form>

      </div>
    </div>
  );
}