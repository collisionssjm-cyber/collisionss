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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        question: formData.get("question"),
      }),
    });

    const data = await res.json();
    console.log("API RESPONSE:", data);

    if (!res.ok) {
      alert("Server error");
      setLoading(false);
      return;
    }

    if (!data.url) {
      alert("No checkout URL returned");
      setLoading(false);
      return;
    }

    window.location.href = data.url;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-4"
      >
        <input
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-4 rounded bg-gray-800"
        />

        <input
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-4 rounded bg-gray-800"
        />

        <textarea
          name="question"
          placeholder="Your Question"
          required
          rows={4}
          className="w-full p-4 rounded bg-gray-800"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full p-4 rounded bg-blue-600 font-bold"
        >
          {loading ? "Redirecting..." : "Submit & Pay $1"}
        </button>
      </form>
    </main>
  );
}
