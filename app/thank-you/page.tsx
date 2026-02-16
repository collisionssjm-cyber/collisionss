export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-slate-900 p-10 rounded-2xl border border-slate-800 text-center">

        <h1 className="text-3xl font-bold text-blue-400 mb-6">
          Thank You
        </h1>

        <p className="text-slate-300">
          Your files have been received.
        </p>

        <p className="mt-4 text-slate-400 text-sm">
          We’ll begin reviewing your documentation and contact you shortly.
        </p>

      </div>
    </main>
  );
}
