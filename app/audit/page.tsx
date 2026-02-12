export default function AuditPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      {/* Top bar */}
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-zinc-900" />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-zinc-900">Collision SS</div>
              <div className="text-xs text-zinc-500">Estimate Audit</div>
            </div>
          </div>

          <a href="/" className="text-sm text-zinc-600 hover:text-zinc-900">
            ← Back to home
          </a>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left: pitch */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Built for real-world collision claims
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Start your Collision SS audit
            </h1>

            <p className="mt-3 text-base leading-relaxed text-zinc-600">
              Upload your estimate details and photos. We’ll review what’s missing — operations insurers
              commonly leave out, documentation language, and clear next steps.
            </p>

            {/* Trust / bullet points */}
            <div className="mt-6 grid gap-3">
              <div className="flex items-start gap-3 rounded-2xl border bg-white p-4 shadow-sm">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                <div>
                  <div className="text-sm font-medium text-zinc-900">Audit checklist approach</div>
                  <div className="text-sm text-zinc-600">
                    Missing ops, OEM notes, materials, and “why it matters.”
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border bg-white p-4 shadow-sm">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                <div>
                  <div className="text-sm font-medium text-zinc-900">Copy/paste script</div>
                  <div className="text-sm text-zinc-600">
                    Clean wording you can send to the shop/adjuster.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border bg-white p-4 shadow-sm">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                <div>
                  <div className="text-sm font-medium text-zinc-900">Next steps</div>
                  <div className="text-sm text-zinc-600">
                    What to ask for, what to document, and what not to agree to.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div className="rounded-3xl border bg-white p-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">Audit intake</h2>
                <p className="mt-1 text-sm text-zinc-600">
                  Takes ~60 seconds. No spam. Just progress.
                </p>
              </div>
              <div className="rounded-full border bg-zinc-50 px-3 py-1 text-xs text-zinc-600">
                Secure intake
              </div>
            </div>

            <form className="mt-6 space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-zinc-800">Full name</label>
                <input
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-zinc-900/10 focus:ring-4"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-zinc-800">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-zinc-900/10 focus:ring-4"
                  placeholder="you@email.com"
                />
              </div>

              {/* Claim details */}
              <div>
                <label className="text-sm font-medium text-zinc-800">Claim / vehicle details</label>
                <textarea
                  className="mt-2 w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-zinc-900/10 focus:ring-4"
                  rows={5}
                  placeholder="Year/Make/Model, where the hit is, insurer, estimate date, what they’re refusing…"
                />
              </div>

              {/* Photos */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-zinc-800">Photos (required)</label>
                  <span className="text-xs text-zinc-500">JPG/PNG/HEIC • up to ~15</span>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-sm font-medium text-zinc-900">What to capture</p>
                  <div className="mt-2 grid gap-2 text-sm text-zinc-600 sm:grid-cols-2">
                    <div className="rounded-xl border bg-white px-3 py-2">4 corners (wide)</div>
                    <div className="rounded-xl border bg-white px-3 py-2">Front + Rear (wide)</div>
                    <div className="rounded-xl border bg-white px-3 py-2">Left side sections</div>
                    <div className="rounded-xl border bg-white px-3 py-2">Right side sections</div>
                    <div className="rounded-xl border bg-white px-3 py-2">VIN tag (barcode)</div>
                    <div className="rounded-xl border bg-white px-3 py-2">Odometer</div>
                    <div className="rounded-xl border bg-white px-3 py-2">Damage close-ups</div>
                    <div className="rounded-xl border bg-white px-3 py-2">Wheel/tire if hit</div>
                  </div>

                  <p className="mt-3 text-xs text-zinc-500">
                    Tip: take wide shots first, then close-ups. We’ll sort them later.
                  </p>
                </div>

                {/* Regular upload (works everywhere) */}
                <input
                  className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-zinc-900/10 focus:ring-4"
                  type="file"
                  accept="image/*"
                  multiple
                />

                {/* Camera capture (best on phone) */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="flex cursor-pointer items-center justify-center rounded-2xl border bg-white px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50">
                    Take photos (phone camera)
                    <input
                      className="hidden"
                      type="file"
                      accept="image/*"
                      capture="environment"
                      multiple
                    />
                  </label>

                  <div className="rounded-2xl border bg-zinc-50 px-4 py-3 text-xs text-zinc-600">
                    If camera doesn’t pop up, use the upload field above (some devices block capture).
                  </div>
                </div>
              </div>

              {/* Submit (wiring comes next) */}
              <button
                type="button"
                className="w-full rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 active:bg-zinc-900"
              >
                Submit audit request
              </button>

              <p className="text-xs leading-relaxed text-zinc-500">
                By submitting, you confirm you own the estimate/photos and authorize Collision SS to review them.
              </p>
            </form>

            {/* mini trust strip */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-zinc-600">
              <div className="rounded-2xl border bg-zinc-50 px-3 py-2">Fast</div>
              <div className="rounded-2xl border bg-zinc-50 px-3 py-2">Clear</div>
              <div className="rounded-2xl border bg-zinc-50 px-3 py-2">Accurate</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
