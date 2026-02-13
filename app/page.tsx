export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-extrabold tracking-tight">
            <span className="text-slate-900">Collision</span>{" "}
            <span className="text-blue-700">SS</span>
          </div>

          <a
            href="#start"
            className="rounded-xl bg-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-800"
          >
            Start an Audit
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-700" />
            LAUNCH MODE — EMAIL INTAKE
          </div>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
            Insurance is protected.
            <span className="block text-blue-800">Shops are compensated.</span>
            <span className="block text-slate-800">Who’s protecting you?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Collision SS audits collision estimates and damage photos to uncover missed labor,
            incorrect repair-vs-replace decisions, undocumented operations, and required OEM procedures —
            before you approve the repair.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-700 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-800"
            >
              Start an Audit
            </a>
            <a
              href="#what"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              What we catch
            </a>
          </div>

          {/* quick credibility strip */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-bold text-slate-900">Photo-backed</div>
              <div className="mt-1 text-sm text-slate-600">
                We use your photos to support every correction.
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-bold text-slate-900">OEM-aware</div>
              <div className="mt-1 text-sm text-slate-600">
                We flag required scans/calibrations and procedures.
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-bold text-slate-900">Clear report</div>
              <div className="mt-1 text-sm text-slate-600">
                Clean notes you can use with the insurer or shop.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE CATCH */}
      <section id="what" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">
            What We Catch
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
            The common “misses” that quietly cost owners and delay proper repairs.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-800">Repair vs Replace</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Parts written to “repair” that obviously require replacement. We document it using
                damage photos and proper reasoning so it can’t be brushed off.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-800">Missing Operations</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Blending, R&amp;I, corrosion protection, seam sealer, setup/measure/pull, sublet needs,
                and other operations that don’t show up on first writes.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-800">ADAS &amp; OEM Requirements</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Scans, calibrations, one-time-use hardware, and OEM procedure requirements — flagged
                and explained clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POST REPAIR */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Post-Repair Inspection
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Upload final photos and your invoice. If something feels off — we document concerns
            clearly so they’re taken seriously.
          </p>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 text-left md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-sm font-bold text-slate-900">Final bill review</div>
              <div className="mt-2 text-sm text-slate-600">
                Compare approved work vs final invoice. Flag inconsistencies.
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-sm font-bold text-slate-900">Quality concerns</div>
              <div className="mt-2 text-sm text-slate-600">
                Gaps, overspray, paint match, warning lights — documented with photos.
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-sm font-bold text-slate-900">OEM compliance</div>
              <div className="mt-2 text-sm text-slate-600">
                Was a required scan/calibration completed? We flag it.
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-blue-700 px-10 py-4 text-lg font-semibold text-blue-800 transition hover:bg-blue-700 hover:text-white"
            >
              Request Post-Repair Review
            </a>
          </div>

          <p className="mx-auto mt-4 max-w-3xl text-xs text-slate-500">
            Documentation support only. Not legal advice.
          </p>
        </div>
      </section>

      {/* START */}
      <section id="start" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-900">Start an Audit</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-600">
              For launch, audits are submitted by email while we finalize full automation.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:collisionss@yourdomain.com?subject=Collision%20SS%20Audit%20Request&body=Name:%0A%0APhone:%0A%0AVehicle%20Year/Make/Model:%0A%0AInsurer:%0A%0AClaim%20%23:%0A%0AWhat%20happened:%0A%0AAttach%20estimate%20(PDF)%20and%20photos."
                className="inline-flex items-center justify-center rounded-2xl bg-blue-700 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-800"
              >
                Email Your Audit Request
              </a>

              <a
                href="#what"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                See what we catch
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
