"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function UploadPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");

  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!sessionId || files.length === 0) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("session_id", sessionId);

    files.forEach((file) => {
      formData.append("files", file);
    });

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      router.push("/thank-you");
    } else {
      setLoading(false);
      alert("Upload failed. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-slate-900 p-10 rounded-2xl border border-slate-800">

        <h1 className="text-2xl font-bold mb-6 text-blue-400">
          Upload Estimate & Photos
        </h1>

        <form onSubmit={handleSubmit}>

          {/* SELECT FILES BLOCK */}
          <label className="block mb-4 text-sm font-semibold text-slate-300">
            Select Files
          </label>

          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="mb-6 block w-full text-sm bg-slate-800 p-3 rounded-lg border border-slate-700"
          />

          {files.length > 0 && (
            <div className="mb-6 text-sm text-slate-400">
              <p className="mb-2">Selected Files:</p>
              <ul className="list-disc pl-5 space-y-1">
                {files.map((file, i) => (
                  <li key={i}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Upload Files"}
          </button>

        </form>
      </div>
    </main>
  );
}
