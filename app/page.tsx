export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-xl font-extrabold tracking-tight">
            <span className="text-white">Collision</span>{" "}
            <span className="text-blue-500">SS</span>
          </div>

          <a
            href="#start"
            className="rounded-xl bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
          >
            Start an Audit
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="py-28 text-center">
        <div className="mx-auto max-w-5xl px-6">

          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            The insurance companies are already rich.
            <span className="block text-blue-500 mt-4">
              The shops are paid.
            </span>
            <span className="block mt-4 text-slate-300">
              You’re left questioning the bill.
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-lg text-slate-400">
            Collision SS audits collision estimates, damage photos, and final invoices
            to uncover repair-vs-replace issues, missing operations, and required OEM procedures —
            before and after the repair.
          </p>

          <div className="mt-12">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-12 py-5 text-lg font-semibold text-white shadow-lg hover:bg-blue-700 transition"
            >
              Start an Audit
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE CATCH */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-extrabold">
            What We Catch
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">
              <h3 className="text-xl font-bold text-blue-500">
                Repair vs Replace
              </h3>
              <p className="mt-4 text-sm text-slate-400">
                Panels written to repair that require replacement,
                structural compromise, and unsafe cost-cutting decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">
              <h3 className="text-xl font-bold text-blue-500">
                Missing Operations
              </h3>
              <p className="mt-4 text-sm text-slate-400">
                Blend time, R&I, corrosion protection, setup & measure,
                one-time-use parts, and overlooked labor.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">
              <h3 className="text-xl font-bold text-blue-500">
                OEM & ADAS Requirements
              </h3>
              <p className="mt-4 text-sm text-slate-400">
                Required scans, calibrations, and manufacturer repair
                procedures that should never be skipped.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* START */}
      <section id="start" className="py-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-extrabold">
            Start Your Audit
          </h2>

          <p className="mt-6 text-slate-400">
            Intake is currently email submission while we finalize full automation.
          </p>

          <div className="mt-10">
            <a
              href="mailto:collisionss@yourdomain.com?subject=Collision%20SS%20Audit%20Request"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-12 py-5 text-lg font-bold text-white shadow-lg hover:bg-blue-700 transition"
            >
              Email Your Audit Request
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Collision SS, LLC.
      </footer>

    </main>
  );
}
