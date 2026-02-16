"use client";

import { useState } from "react";

export default function QuickQuestionPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const res = await fetch("/api/create-question-session", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        question: formData.get("question"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    window.location.href = data.url;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-2xl bg-slate-900 p-10 shadow-xl border border-slate-800">
        <h1 className="text-3xl font-extrabold text-center">
          $1 Quick Question
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-lg bg-slate-800 p-4 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded-lg bg-slate-800 p-4 text-white"
          />

          <textarea
            name="question"
            placeholder="Your Question"
            required
            rows={4}
            className="w-full rounded-lg bg-slate-800 p-4 text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold hover:bg-blue-500 transition"
          >
            {loading ? "Redirecting..." : "Submit & Pay $1"}
          </button>
        </form>
      </div>
    </main>
  );
}
