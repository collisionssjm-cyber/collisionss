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

          {/* ONE PRIMARY CTA IN HEADER */}
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
            The insurance companies are already rich.
            <span className="block text-blue-800">Shops are compensated.</span>
            <span className="block text-slate-800">You’re left questioning the bill.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Collision SS audits collision estimates and damage photos to uncover missed labor,
            incorrect repair-vs-replace decisions, undocumented operations, and required OEM procedures —
            before you approve the repair.
          </p>

          {/* ONE PRIMARY CTA IN HERO */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-700 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-800"
            >
              Start an Audit
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              Pricing
            </a>
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
            The common “misses” that quietly cost owners money and delay proper repairs.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-800">Repair vs Replace</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Items written to “repair” that clearly require replacement. We document it using the photos
                and clear reasoning so it can’t be brushed off.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-800">Missing Operations</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Blending, R&amp;I, corrosion protection, seam sealer, setup/measure/pull, sublets,
                and other operations that vanish on first writes.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-800">ADAS &amp; OEM Requirements</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Scans, calibrations, one-time-use hardware, and OEM procedure requirements —
                flagged and explained cleanly.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-slate-600">
            Want a faster answer?{" "}
            <a href="#pricing" className="font-semibold text-blue-800 underline underline-offset-2">
              See $1 Quick Question
            </a>
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
            Upload final photos and your invoice. If something feels off — we document concerns clearly
            so they’re taken seriously.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-sm text-slate-600">
            See pricing below —{" "}
            <a href="#pricing" className="font-semibold text-blue-800 underline underline-offset-2">
              jump to Pricing
            </a>
            .
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-xs text-slate-500">
            Documentation support only. Not legal advice.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">
            Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
            Simple, flat pricing for launch. No subscriptions.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* $1 QUICK QUESTION */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="text-sm font-semibold text-slate-700">Fast answer</div>
              <div className="mt-2 text-4xl font-extrabold text-slate-900">$1</div>
              <div className="mt-1 text-slate-600">Quick Question</div>

              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li>• “Is this repair vs replace wrong?”</li>
                <li>• “Do I need scans/calibration?”</li>
                <li>• “What’s missing on this estimate line?”</li>
              </ul>

              <div className="mt-8">
                <a
                  href="mailto:collisionss@yourdomain.com?subject=%241%20Quick%20Question%20-%20Collision%20SS&body=Type%20your%20question%20here:%0A%0A(Attach%20photos%20or%20estimate%20if%20needed)%0A%0AName:%0APhone:%0ARole:%20(vehicle%20owner%20/%20shop%20/%20dealer)%0A"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                >
                  Email a $1 Question
                </a>
              </div>
            </div>

            {/* $49 AUDIT */}
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-8 shadow-sm">
              <div className="text-sm font-semibold text-blue-900">Full review</div>
              <div className="mt-2 text-4xl font-extrabold text-slate-900">$49</div>
              <div className="mt-1 text-slate-600">Estimate + Photo Audit</div>

              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li>• Missed damage + missed operations</li>
                <li>• Repair vs replace issues documented</li>
                <li>• ADAS / scan / calibration flags</li>
                <li>• Clean notes you can use immediately</li>
              </ul>

              <div className="mt-8">
                <a
                  href="#start"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-700 px-10 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-800"
                >
                  Start the $49 Audit
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-600">
                Launch note: submit by email while automation is finalized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* START */}
      <section id="start" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-900">Start an Audit</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-600">
              For launch, audits are submitted by email while we finalize full automation.
              Attach your estimate (PDF) and photos.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:collisionss@yourdomain.com?subject=Collision%20SS%20Audit%20Request%20-%20%2449&body=Name:%0A%0APhone:%0A%0AVehicle%20Year/Make/Model:%0A%0AInsurer:%0A%0AClaim%20%23:%0A%0AWhat%20happened:%0A%0A(Attach%20estimate%20PDF%20and%20photos)%0A"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-700 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-800"
              >
                Email Your $49 Audit Request
              </a>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Back to Pricing
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
