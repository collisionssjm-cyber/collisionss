export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-xl font-extrabold tracking-tight">
            <span className="text-slate-900">Collision</span>{" "}
            <span className="text-blue-700">SS</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
          Stop Letting Insurance Companies Control Your Claim.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          Collision SS audits repair estimates using OEM procedures, documented industry standards,
          and real-world collision shop management expertise — built to protect vehicle owners.
        </p>
      </section>

      {/* REALITY */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-extrabold text-center">
            Most Vehicle Owners Never See What’s Missing.
          </h2>
          <div className="mt-10 space-y-4 text-center text-slate-600">
            <p>Insurance estimates are written quickly.</p>
            <p>Required procedures get overlooked.</p>
            <p>Necessary operations get denied.</p>
            <p>Documentation gaps go unnoticed.</p>
            <p className="mt-6 font-medium text-slate-800">
              You shouldn’t need to understand collision repair to protect your claim.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRY EXPERIENCE */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-extrabold text-center">
            Built From Real Collision Shop Experience.
          </h2>
          <div className="mt-10 grid gap-6 text-slate-600 sm:grid-cols-2">
            <ul className="space-y-3">
              <li>• OEM repair procedure verification</li>
              <li>• Labor operation and overlap review</li>
              <li>• Structural and suspension diagnostics</li>
            </ul>
            <ul className="space-y-3">
              <li>• ADAS-related operation analysis</li>
              <li>• Estimate accuracy evaluation</li>
              <li>• Insurer documentation behavior insight</li>
            </ul>
          </div>
          <p className="mt-8 text-center text-slate-600">
            Powered by a purpose-built AI service advisor trained on real collision repair workflows,
            our process focuses on clarity and structured documentation.
          </p>
        </div>
      </section>

      {/* SHOP SECTION */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-extrabold text-center">
            Shop Audit & Production Review
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-slate-600">
            Collision SS provides structured shop audits designed to increase profitability,
            tighten operations, and improve production efficiency.
          </p>
          <div className="mt-10 grid gap-6 text-slate-600 sm:grid-cols-2">
            <ul className="space-y-3">
              <li>• Operational workflow analysis</li>
              <li>• Estimate accuracy review</li>
              <li>• Missed operation identification</li>
            </ul>
            <ul className="space-y-3">
              <li>• Profit leakage detection</li>
              <li>• Production bottleneck evaluation</li>
              <li>• Structured performance guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SINGLE ACTION SECTION */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-extrabold">
            Choose Your Next Step.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            Whether you’re a vehicle owner seeking clarity or a repair facility looking to improve performance,
            Collision SS provides structured, experience-driven guidance.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/audit"
              className="rounded-xl bg-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-blue-800"
            >
              Start a Full Audit
            </a>
            <a
              href="/quick-question"
              className="rounded-xl border border-slate-300 px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Ask a $1 Question
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white py-10 text-center text-sm text-slate-500">
        <p>
          Collision SS provides estimate analysis and advisory insight based on industry standards
          and manufacturer documentation. Collision SS is not a public adjuster, insurance adjuster,
          legal representative, or claims negotiator. All information provided is advisory in nature
          and intended for informational purposes only.
        </p>
        <p className="mt-4">
          © {new Date().getFullYear()} Collision SS, LLC.
        </p>
      </footer>
    </main>
  );
}
