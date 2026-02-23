console.log("AUDIT PAGE LOADED NEW VERSION")
"use client";

import { useState } from "react";

export default function AuditPage() {
  const [estimate, setEstimate] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!estimate) {
      setError("Please upload your estimate PDF.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!data.url) {
        throw new Error("Failed to create checkout session");
      }

      window.location.href = data.url;

    } catch (err: any) {
      setError("Something went wrong. Please try again.");
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
          Upload your repair estimate and supporting photos.
          Our team will perform a structured review using OEM-backed procedures.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-8 rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
        >

          {/* Upload Area */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Upload Estimate (PDF)
            </label>

            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white p-10 text-center hover:border-blue-500 transition">
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) =>
                  setEstimate(e.target.files ? e.target.files[0] : null)
                }
                className="mb-4"
                required
              />

              {estimate ? (
                <p className="text-sm text-green-600 font-medium">
                  {estimate.name} selected
                </p>
              ) : (
                <p className="text-sm text-slate-500">
                  Drag and drop or select your PDF file
                </p>
              )}
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          {/* Submit */}
          <div className="text-center">
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