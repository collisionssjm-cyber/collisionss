export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-30">
        <div className="mx-auto max-w-6xl px-6 py-6 flex justify-between items-center">
          <div className="text-xl font-extrabold tracking-tight text-white">
            Collision <span className="text-blue-400">SS</span>
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-900/80 to-black/80"></div>

        <div className="relative z-10 max-w-5xl px-6 py-48">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl tracking-tight">
            Independent Collision Estimate Review.
            <br />
            <span className="text-blue-400">
              Built From Real Shop Management Experience.
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            OEM procedure verification, structural analysis, ADAS operation review,
            and documentation clarity — before repairs begin.
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-black text-white py-6 border-y border-slate-800">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap justify-center gap-10 text-sm tracking-wide opacity-80">
          <span>OEM Procedure Verification</span>
          <span>ADAS Analysis</span>
          <span>Structural Diagnostics</span>
          <span>Labor Overlap Review</span>
          <span>Documentation Defense</span>
        </div>
      </section>

      {/* REALITY */}
      <section className="py-28 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-extrabold">
            Most Vehicle Owners Never See What’s Missing.
          </h2>

          <div className="mt-16 space-y-6 text-slate-700 text-xl">
            <p>Insurance estimates prioritize speed over procedural accuracy.</p>
            <p>Required OEM repair steps are frequently undocumented.</p>
            <p>ADAS and structural operations are often incomplete or unsupported.</p>
            <p>Documentation gaps can weaken your claim position.</p>

            <p className="mt-10 font-semibold text-slate-900 text-2xl">
              You shouldn’t need collision repair expertise to protect your vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* SHOP SECTION */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-extrabold">
            Shop Audit & Production Review
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-slate-300 text-lg">
            Identify suppressed labor, missed billable operations,
            documentation weaknesses, and profit leakage hiding inside your production flow.
          </p>
        </div>
      </section>

 {/* COMMAND CENTER CTA */}
<section className="py-32 bg-white text-center">
  <div className="mx-auto max-w-5xl px-6">
    <h2 className="text-4xl font-extrabold">
      Choose Your Next Step.
    </h2>

    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      <a
        href="/audit"
        className="rounded-2xl bg-blue-600 px-6 py-6 text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
      >
        Full Audit
      </a>

      <a
        href="/quick-question"
        className="rounded-2xl bg-blue-600 px-6 py-6 text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
      >
        $1 Question
      </a>

      <a
        href="/shop-audit"
        className="rounded-2xl bg-blue-600 px-6 py-6 text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
      >
        Shop Audit
      </a>

      <a
        href="/parts-tracker"
        className="rounded-2xl bg-blue-600 px-6 py-6 text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
      >
        Parts Tracker
      </a>

    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t py-12 text-center text-sm text-slate-500 bg-white px-6">
        <p>
          Collision SS provides estimate analysis and advisory insight based on industry standards
          and manufacturer documentation. Collision SS is not a public adjuster,
          insurance adjuster, legal representative, or claims negotiator.
          All information provided is advisory in nature and intended for informational purposes only.
        </p>
        <p className="mt-6">
          © {new Date().getFullYear()} Collision SS, LLC.
        </p>
      </footer>

    </main>
  );
}