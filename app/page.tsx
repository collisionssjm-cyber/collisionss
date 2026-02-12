export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
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
      <section className="relative overflow-hidden py-32">

        {/* Background Image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/75 to-black/65" />

        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            The insurance companies are already rich.
            <span className="block text-blue-400">
              The shops are getting paid.
            </span>
            <span className="block">
              You're left scratching your head.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Collision SS audits collision estimates, damage photos,
            and final invoices to uncover missed operations,
            improper repair decisions, and undocumented OEM requirements.
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
              className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              What We Catch
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE CATCH */}
      <section id="what" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">
            What We Catch
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">
                Repair vs Replace
              </h3>
              <p className="mt-4 text-sm text-slate-600">
                Structural compromise, torn panels, unsafe repair decisions
                documented clearly and professionally.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">
                Missing Operations
              </h3>
              <p className="mt-4 text-sm text-slate-600">
                Blend time, R&amp;I procedures, corrosion protection,
                one-time-use parts, setup &amp; measure.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">
                ADAS &amp; OEM Requirements
              </h3>
              <p className="mt-4 text-sm text-slate-600">
                Pre/post scans, calibrations, manufacturer repair restrictions,
                and required documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POST REPAIR */}
      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">
            The repair is done. But is it right?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            Upload final photos and your invoice. If something feels off —
            we document it properly and clearly.
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

      {/* START SECTION */}
      <section id="start" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-extrabold">
              Start an Audit
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/90">
              Intake is currently email-only while the upload system is finalized.
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
