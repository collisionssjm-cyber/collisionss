export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-extrabold tracking-tight">
            <span className="text-white">Collision</span>{" "}
            <span className="text-blue-500">SS</span>
          </div>

          <a
            href="#audit"
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition"
          >
            Start an Audit
          </a>
        </div>
      </header>

  {/* HERO */}
<section className="relative overflow-hidden py-36 text-center">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=2000&q=80"
      alt="Luxury supercar with custom wet paint"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-blue-950/90" />
    <div className="absolute inset-0 bg-black/60" />
  </div>

  {/* Content */}
  <div className="relative mx-auto max-w-4xl px-6 text-white">
    <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl drop-shadow-xl">
      Before You Approve the Repair,
      <span className="block text-blue-400">
        Verify the Documentation.
      </span>
    </h1>

    <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-200">
      Collision SS audits collision estimates, invoices, and damage photos to
      identify missing operations, improper repair decisions, undocumented
      OEM procedures, and ADAS requirements.
    </p>

    <div className="mt-12 flex justify-center gap-6 flex-wrap">
      <a
        href="#audit"
        className="rounded-2xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-2xl hover:bg-blue-500 transition"
      >
        Full Audit – $49
      </a>

      <a
        href="#question"
        className="rounded-2xl border border-slate-400 px-10 py-4 text-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition"
      >
        $1 Quick Question
      </a>
    </div>
  </div>

</section>

      {/* WHAT WE IDENTIFY */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-white">
            What We Identify
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {[
              {
                title: "Repair vs Replace Conflicts",
                desc: "Panel distortion, cracked bumper substrates, structural compromise — evaluated against OEM logic."
              },
              {
                title: "Missing Operations",
                desc: "Blend time, R&I procedures, corrosion protection, one-time-use parts, and overlooked line items."
              },
              {
                title: "ADAS & OEM Requirements",
                desc: "Pre/post scans, calibrations, manufacturer repair restrictions, and documentation standards."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-lg transition hover:border-blue-600 hover:shadow-blue-900/30"
              >
                <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="audit" className="relative py-28">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950 opacity-95" />

        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-extrabold">
            Audit Services
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {[
              {
                title: "Full Collision Audit",
                price: "$49",
                features: [
                  "Estimate + photo review",
                  "OEM procedure verification",
                  "Repair vs replace analysis",
                  "Written audit summary"
                ],
                link: "/checkout/full-audit"
              },
              {
                title: "Quick Question",
                price: "$1",
                features: [
                  "Single written question",
                  "Documentation-based response",
                  "Fast turnaround"
                ],
                link: "/checkout/quick-question"
              },
              {
                title: "Post-Repair Review",
                price: "$49",
                features: [
                  "Invoice + photo review",
                  "Blend & finish evaluation",
                  "Workmanship flag review"
                ],
                link: "/checkout/post-repair"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-10 shadow-xl transition hover:border-blue-600"
              >
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-3xl font-extrabold text-blue-400">
                  {service.price}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-400">
                  {service.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                <a
                  href={service.link}
                  className="mt-8 block rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white shadow hover:bg-blue-500 transition"
                >
                  Get Started
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-slate-950 py-24 text-center border-t border-slate-800">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-extrabold text-white">
            Documentation Changes Everything.
          </h2>

          <p className="mt-6 text-slate-400">
            Insurance is protected. Shops are compensated.
            Collision SS ensures the documentation protects you.
          </p>

          <a
            href="#audit"
            className="mt-10 inline-block rounded-2xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 transition"
          >
            Start Your Audit
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Collision SS, LLC.
      </footer>

    </main>
  );
}
