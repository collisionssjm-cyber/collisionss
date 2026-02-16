import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-extrabold tracking-tight">
            Collision <span className="text-blue-500">SS</span>
          </div>

          {/* HEADER BUTTONS */}
          <div className="flex items-center gap-4">
            <Link
              href="/quick-question"
              className="rounded-xl border border-white/70 px-4 py-2 text-sm font-semibold hover:border-blue-400 hover:text-blue-400 transition"
            >
              $1 Question
            </Link>

            <Link
              href="/full-audit"
              className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition"
            >
              Start Full Audit
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center text-center">

        {/* Background Image */}
        <Image
          src="/hero.jpg"
          alt="Luxury supercar with custom wet paint"
          fill
          priority
          className="object-cover object-center brightness-110 contrast-110"
        />

        {/* Blue performance overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-950/40 to-black/60" />

        {/* Glow Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.25),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl drop-shadow-2xl">
            Before You Approve the Repair,
            <span className="block text-blue-400">
              Verify the Documentation.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-200">
            We audit collision repair documentation, OEM procedures,
            and estimate logic to ensure the repair is properly written
            before work begins.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link
              href="/full-audit"
              className="rounded-2xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-2xl hover:bg-blue-500 transition"
            >
              Full Audit – $49
            </Link>

            <Link
              href="/quick-question"
              className="rounded-2xl border border-white/70 px-10 py-4 text-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition"
            >
              $1 Quick Question
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="bg-slate-950 py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Experience You Can Trust
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            With over <strong>30 years of hands-on experience</strong>, 
            <strong> I-CAR Platinum certifications</strong>, and access to the industry’s 
            largest databases of collision repair knowledge, OEM procedures, and 
            state regulations — Collision SS is here to empower everyone involved in the 
            auto collision repair process.
            <br /><br />
            Our mission is simple: equip you with clear, expert-backed insight so you 
            <strong> never get ripped off</strong> and always know what the repair should 
            actually look like.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-slate-950 pb-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-extrabold">
            Audit Services
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-2">

            {/* FULL AUDIT */}
            <Link
              href="/full-audit"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-10 shadow-xl transition hover:border-blue-600 hover:shadow-blue-900/30"
            >
              <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300">
                Full Collision Audit
              </h3>
              <p className="mt-4 text-3xl font-extrabold">$49</p>
              <p className="mt-6 text-sm text-slate-400">
                Complete estimate and photo review. OEM logic verification.
                Missing operations identified. Written audit summary included.
              </p>
            </Link>

            {/* QUICK QUESTION */}
            <Link
              href="/quick-question"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-10 shadow-xl transition hover:border-blue-600 hover:shadow-blue-900/30"
            >
              <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300">
                Quick Question
              </h3>
              <p className="mt-4 text-3xl font-extrabold">$1</p>
              <p className="mt-6 text-sm text-slate-400">
                One documentation-based question. Clear professional answer.
                Designed for fast clarification.
              </p>
            </Link>

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
