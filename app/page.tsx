export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-extrabold tracking-tight">
            <span>Collision</span>{" "}
            <span className="text-blue-600">SS</span>
          </div>

          <a
            href="#audit"
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
          >
            Start an Audit
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="py-28 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Before You Approve the Repair,
            <span className="block text-blue-600">
              Verify the Documentation.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Collision SS audits collision repair estimates, invoices, and damage
            photos to identify missed operations, improper repair-vs-replace
            decisions, undocumented OEM procedures, and ADAS requirements.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500">
            We don’t attack insurers. We don’t attack shops.
            We analyze documentation.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="#audit"
              className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition"
            >
              Start Full Audit – $49
            </a>

            <a
              href="#question"
              className="rounded-2xl border px-8 py-4 text-lg font-semibold hover:bg-slate-50 transition"
            >
              $1 Quick Question
            </a>
          </div>
        </div>
      </section>

      {/* AUTHORITY STRIP */}
      <section className="border-y bg-slate-50 py-10">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-slate-600">
          Documentation Specialists • Estimate Analysts • Repair Logic Auditors • Industry Veterans
        </div>
      </section>

      {/* WHAT WE IDENTIFY */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-extrabold">
            What We Identify
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="rounded-xl border bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-600">
                Repair vs Replace Conflicts
              </h3>
              <p className="mt-4 text-sm text-slate-600">
                Panel distortion, cracked substrates, structural compromise —
                documented clearly when replacement may be required under OEM standards.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-600">
                Missing Operations
              </h3>
              <p className="mt-4 text-sm text-slate-600">
                Blend time, R&I procedures, corrosion protection, one-time-use parts,
                setup & measure, and overlooked line items that affect total repair value.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-600">
                ADAS & OEM Requirements
              </h3>
              <p className="mt-4 text-sm text-slate-600">
                Pre/post scans, calibration requirements, manufacturer repair
                restrictions, and required documentation standards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="audit" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-center text-3xl font-extrabold">
            Audit Services
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {/* FULL AUDIT */}
            <div className="rounded-2xl border bg-white p-10 shadow-sm">
              <h3 className="text-xl font-bold">Full Collision Audit</h3>
              <p className="mt-2 text-3xl font-extrabold text-blue-600">$49</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li>Estimate + photo review</li>
                <li>OEM procedure verification</li>
                <li>Repair vs replace analysis</li>
                <li>Missing labor & operations</li>
                <li>Written audit summary</li>
              </ul>

              <p className="mt-6 text-xs text-slate-500">
                We guarantee at least $100 in missed value identified or your money back.
              </p>

              <a
                href="/checkout/full-audit"
                className="mt-8 block rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700 transition"
              >
                Purchase Audit
              </a>
            </div>

            {/* QUICK QUESTION */}
            <div id="question" className="rounded-2xl border bg-white p-10 shadow-sm">
              <h3 className="text-xl font-bold">Quick Question</h3>
              <p className="mt-2 text-3xl font-extrabold text-blue-600">$1</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li>Single written question</li>
                <li>Professional documentation-based response</li>
                <li>Fast turnaround</li>
              </ul>

              <a
                href="/checkout/quick-question"
                className="mt-8 block rounded-xl border px-6 py-3 text-center font-semibold hover:bg-slate-50 transition"
              >
                Ask a Question
              </a>
            </div>

            {/* POST REPAIR */}
            <div className="rounded-2xl border bg-white p-10 shadow-sm">
              <h3 className="text-xl font-bold">Post-Repair Review</h3>
              <p className="mt-2 text-3xl font-extrabold text-blue-600">$49</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li>Invoice + repair photo review</li>
                <li>Blend & finish evaluation</li>
                <li>Visible workmanship flags</li>
                <li>Documentation gap analysis</li>
              </ul>

              <a
                href="/checkout/post-repair"
                className="mt-8 block rounded-xl border px-6 py-3 text-center font-semibold hover:bg-slate-50 transition"
              >
                Submit for Review
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-extrabold">
            Documentation Changes Everything.
          </h2>

          <p className="mt-6 text-slate-600">
            Insurance is protected. Shops are compensated.
            <br />
            Collision SS ensures the repair documentation protects you.
          </p>

          <a
            href="#audit"
            className="mt-10 inline-block rounded-2xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition"
          >
            Start Your Audit
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Collision SS, LLC. All rights reserved.
      </footer>

    </main>
  );
}
