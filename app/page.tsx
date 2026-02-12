export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-bold">Collision SS</div>
          <a
            href="#start"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
          >
            Start an Audit
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            Insurance is protected. Shops are compensated. Who’s protecting you?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-700">
            Collision SS audits collision estimates and damage photos to uncover missed labor, incorrect
            repair-vs-replace decisions, undocumented operations, and required OEM procedures — before
            you approve the repair.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-3 text-base font-semibold text-white"
            >
              Start an Audit
            </a>
            <a
              href="#what"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-900"
            >
              What we catch
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE CATCH */}
      <section id="what" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold">What We Catch</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold">Repair vs Replace</h3>
              <p className="mt-3 text-sm text-slate-600">
                If a panel is torn, kinked, or structurally compromised, replacement is required. We
                document why — clearly and professionally.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold">Missing Operations</h3>
              <p className="mt-3 text-sm text-slate-600">
                Blend time, R&amp;I procedures, corrosion protection, setup &amp; measure, one-time-use parts.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold">ADAS &amp; OEM Requirements</h3>
              <p className="mt-3 text-sm text-slate-600">
                Pre/post scans, calibrations, manufacturer repair restrictions, and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POST REPAIR */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold">The repair is done. But is it right?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            Upload final photos and your invoice. If something feels off — we document it properly.
          </p>
          <div className="mt-8">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-900 px-8 py-3 text-base font-semibold text-slate-900"
            >
              Request Post-Repair Review
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-xs text-slate-500">
            Documentation support only. Not legal advice.
          </p>
        </div>
      </section>

      {/* START (anchor target) */}
      <section id="start" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border bg-white p-8 text-center">
            <h2 className="text-2xl font-bold">Start an Audit</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Intake is being finalized. For now, use email-only submission.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:collisionss@yourdomain.com?subject=Collision%20SS%20Audit%20Request&body=Name:%0A%0APhone:%0A%0AVehicle:%0A%0AInsurer:%0A%0AWhat happened:%0A%0AAttach estimate + photos if available."
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-3 text-base font-semibold text-white"
              >
                Email Your Audit Request
              </a>
              <a
                href="#what"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-900"
              >
                See what we catch
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Collision SS, LLC.
      </footer>
    </main>
  );
}
