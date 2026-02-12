export default function Page() {
  const VERSION = "HOME v1.9 — HERO BG TEST";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-extrabold tracking-tight">
            <span className="text-white">Collision</span>{" "}
            <span className="text-blue-400">SS</span>
          </div>

          <a
            href="#start"
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-500"
          >
            Start an Audit
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        {/* Background image (MUST be: /public/hero-bg.png) */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />

        {/* Premium overlays for contrast */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/80 via-slate-950/65 to-slate-950/90" />
        <div className="absolute -top-24 left-1/2 -z-10 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-28 left-1/2 -z-10 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />

        <div className="mx-auto max-w-5xl px-6 text-center">
          {/* Version stamp (you MUST see this change) */}
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="font-semibold">{VERSION}</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            The insurance companies are already rich.
            <span className="block text-blue-400">The shops are paid.</span>
            <span className="block text-white/90">You’re left questioning the bill.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            Collision SS audits estimates, damage photos, and final invoices to uncover repair-vs-replace
            issues, missing operations, and OEM requirements — before and after the repair.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-500"
            >
              Start an Audit
            </a>
            <a
              href="#what"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white/90 transition hover:bg-white/10"
            >
              What we catch
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE CATCH */}
      <section id="what" className="bg-slate-950 py-18">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-3xl font-extrabold">What We Catch</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-400">Repair vs Replace</h3>
              <p className="mt-4 text-sm text-white/70">
                Unsafe repair decisions and structural concerns documented clearly and professionally.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-400">Missing Operations</h3>
              <p className="mt-4 text-sm text-white/70">
                Blend time, R&amp;I procedures, corrosion protection, setup &amp; measure, one-time-use parts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-400">ADAS &amp; OEM Requirements</h3>
              <p className="mt-4 text-sm text-white/70">
                Pre/post scans, calibrations, OEM repair restrictions, and required documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* START */}
      <section id="start" className="bg-slate-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 p-10 text-center text-white shadow-xl">
            <h2 className="text-3xl font-extrabold">Start an Audit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/90">
              Intake is being finalized. For now, use email-only submission.
            </p>
            <div className="mt-8">
              <a
                href="mailto:collisionss@yourdomain.com?subject=Collision%20SS%20Audit%20Request"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-10 py-4 text-lg font-bold text-blue-700 shadow-lg transition hover:bg-slate-100"
              >
                Email Your Audit Request
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-white/40">
            © {new Date().getFullYear()} Collision SS, LLC.
          </p>
        </div>
      </section>
    </main>
  );
}
