export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-20">
        <div className="mx-auto max-w-6xl px-6 py-6 flex justify-between items-center">
          <div className="text-xl font-extrabold tracking-tight text-white">
            Collision <span className="text-blue-300">SS</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/60"></div>

        <div className="relative z-10 max-w-4xl px-6 py-40">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Stop Letting Insurance Companies Control Your Claim.
          </h1>
          <p className="mt-6 text-lg text-slate-200">
            Collision SS audits repair estimates using OEM procedures,
            documented industry standards, and real-world collision shop
            management expertise — built to protect vehicle owners.
          </p>
        </div>
      </section>

      {/* REALITY */}
      <section className="bg-blue-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-extrabold">
            Most Vehicle Owners Never See What’s Missing.
          </h2>

          <div className="mt-10 space-y-4 text-slate-600">
            <p>Insurance estimates are written quickly.</p>
            <p>Required procedures get overlooked.</p>
            <p>Necessary operations get denied.</p>
            <p>Documentation gaps go unnoticed.</p>

            <p className="mt-6 font-semibold text-slate-800">
              You shouldn’t need to understand collision repair to protect your claim.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-extrabold text-center">
            Built From Real Collision Shop Experience.
          </h2>

          <div className="mt-12 grid gap-8 text-slate-600 sm:grid-cols-2">
            <ul className="space-y-4">
              <li>• OEM repair procedure verification</li>
              <li>• Labor operation and overlap review</li>
              <li>• Structural and suspension diagnostics</li>
            </ul>

            <ul className="space-y-4">
              <li>• ADAS-related operation analysis</li>
              <li>• Estimate accuracy evaluation</li>
              <li>• Insurer documentation behavior insight</li>
            </ul>
          </div>

          <p className="mt-10 text-center text-slate-600">
            Powered by a purpose-built AI service advisor trained on real collision repair workflows,
            our process focuses on clarity and structured documentation.
          </p>
        </div>
      </section>

      {/* SHOP SECTION */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-extrabold">
            Shop Audit & Production Review
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600">
            Collision SS provides structured shop audits designed to increase profitability,
            tighten operations, and improve production efficiency.
          </p>

          <div className="mt-12 grid gap-8 text-slate-600 sm:grid-cols-2 text-left">
            <ul className="space-y-4">
              <li>• Operational workflow analysis</li>
              <li>• Estimate accuracy review</li>
              <li>• Missed operation identification</li>
            </ul>

            <ul className="space-y-4">
              <li>• Profit leakage detection</li>
              <li>• Production bottleneck evaluation</li>
              <li>• Structured performance guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SINGLE ACTION SECTION */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-extrabold">
            Choose Your Next Step.
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-600">
            Whether you’re a vehicle owner seeking clarity or a repair facility
            looking to improve performance, Collision SS provides structured,
            experience-driven guidance.
          </p>

          <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <a
              href="/audit"
              className="rounded-xl bg-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-800"
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
      <footer className="border-t py-10 text-center text-sm text-slate-500 bg-white px-6">
        <p>
          Collision SS provides estimate analysis and advisory insight based on industry standards
          and manufacturer documentation. Collision SS is not a public adjuster,
          insurance adjuster, legal representative, or claims negotiator.
          All information provided is advisory in nature and intended for informational purposes only.
        </p>
        <p className="mt-4">
          © {new Date().getFullYear()} Collision SS, LLC.
        </p>
      </footer>

    </main>
  );
}