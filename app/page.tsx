export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-extrabold tracking-tight">
            <span className="text-slate-900">Collision</span>{" "}
            <span className="text-blue-600">SS</span>
          </div>

          <a
            href="#start"
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            Start an Audit
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        {/* Base steel/blue background */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-100 via-white to-blue-50" />

        {/* Optional image layer (place hero-bg.png in /public) */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />

        {/* Premium overlay for readability */}
        <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white/70 via-white/55 to-slate-50/80" />

        {/* Subtle vignette */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" />
          <div className="absolute -right-24 top-32 h-72 w-72 rounded-full bg-slate-200/50 blur-3xl" />
        </div>

        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            BUILT FOR VEHICLE OWNERS
          </div>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
            The insurance companies are already rich.
            <span className="block mt-2 text-blue-600">The shops are paid.</span>
            <span className="block mt-2 text-slate-800">You’re left questioning the bill.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Collision SS audits estimates, damage photos, and final invoices to uncover repair-vs-replace
            issues, missing operations, and OEM requirements — before and after the repair.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Start an Audit
            </a>

            <a
              href="#what"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white/80 px-8 py-4 text-lg font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              What we catch
            </a>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/75 p-5 shadow-sm">
              <div className="text-sm font-bold text-slate-900">Clarity</div>
              <div className="mt-1 text-sm text-slate-600">
                We explain what’s missing in plain English.
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/75 p-5 shadow-sm">
              <div className="text-sm font-bold text-slate-900">Documentation</div>
              <div className="mt-1 text-sm text-slate-600">
                OEM + line-item support when it matters.
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/75 p-5 shadow-sm">
              <div className="text-sm font-bold text-slate-900">Confidence</div>
              <div className="mt-1 text-sm text-slate-600">
                You approve repairs knowing what you’re paying for.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE CATCH */}
      <section id="what" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">
            What We Catch
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            The stuff that quietly gets skipped — until the car is “done” and you’re stuck living with it.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">Repair vs Replace</h3>
              <p className="mt-4 text-sm text-slate-600">
                Unsafe repairs, torn panels, structural compromise — called out cleanly and professionally.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">Missing Operations</h3>
              <p className="mt-4 text-sm text-slate-600">
                Blend time, R&amp;I procedures, corrosion protection, setup &amp; measure, one-time-use parts.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">ADAS &amp; OEM Requirements</h3>
              <p className="mt-4 text-sm text-slate-600">
                Pre/post scans, calibrations, repair restrictions, and the documentation insurers love to “forget.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POST REPAIR */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">
            The repair is done. But is it right?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            Upload final photos and your invoice. If something feels off — we document it properly.
          </p>
          <div className="mt-10">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-blue-600 px-10 py-4 text-lg font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              Request Post-Repair Review
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-xs text-slate-500">
            Documentation support only. Not legal advice.
          </p>
        </div>
      </section>

      {/* START */}
      <section id="start" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-center text-white shadow-xl">
            <h2 className="text-3xl font-extrabold">Start an Audit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/90">
              Intake is being finalized. For now, use email-only submission.
            </p>
            <div className="mt-8">
              <a
                href="mailto:collisionss@yourdomain.com?subject=Collision%20SS%20Audit%20Request"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-10 py-4 text-lg font-bold text-blue-600 shadow-lg transition hover:bg-slate-100"
              >
                Email Your Audit Request
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Collision SS, LLC.
      </footer>
    </main>
  );
}
