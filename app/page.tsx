"use client";

import { useEffect, useRef, useState } from "react";

function FadeIn({ children }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-x-hidden">

      {/* LAUNCH BANNER */}
      <div className="w-full bg-emerald-600 text-center py-2 text-sm font-medium">
        🎉 Official Launch — Independent Collision Protection Is Now Live
      </div>

      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-30">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="text-xl font-extrabold tracking-tight text-white">
            Collision <span className="text-blue-400">SS</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-900/85 to-black/90"></div>

        <div className="relative z-10 max-w-5xl px-6 py-48">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Stop Letting Insurance Companies Decide
            <br />
            <span className="text-blue-400">What Your Vehicle Deserves.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Independent estimate review, shop audits, professional insight,
            and structured parts locating — built from real collision shop
            management experience.
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-black py-6 border-y border-slate-800">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap justify-center gap-10 text-sm tracking-wide opacity-80">
          <span>OEM Procedure Verification</span>
          <span>ADAS Analysis</span>
          <span>Structural Diagnostics</span>
          <span>Labor Operation Review</span>
          <span>Documentation Clarity</span>
        </div>
      </section>

      {/* FULL AUDIT */}
      <FadeIn>
        <section className="py-28 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold">Full Collision Estimate Audit</h2>
          <p className="mt-8 text-slate-300 max-w-3xl mx-auto">
            A structured, line-by-line evaluation of your repair estimate.
            We verify OEM procedures, structural requirements, ADAS operations,
            and documentation accuracy before repairs begin.
          </p>

          <div className="mt-12">
            <a
              href="/audit"
              className="inline-block rounded-xl bg-blue-600 px-10 py-4 font-semibold hover:bg-blue-700 transition-all hover:scale-105"
            >
              Start Full Audit
            </a>
          </div>
        </section>
      </FadeIn>

      {/* $1 QUESTION */}
      <FadeIn>
        <section className="py-28 px-6 max-w-6xl mx-auto text-center border-t border-slate-800">
          <h2 className="text-4xl font-extrabold">$1 Professional Question</h2>
          <p className="mt-8 text-slate-300 max-w-3xl mx-auto">
            Quick, direct insight from real collision management experience.
            Get clarity before approving repairs, disputing documentation,
            or making claim decisions.
          </p>

          <div className="mt-12">
            <a
              href="/quick-question"
              className="inline-block rounded-xl bg-blue-600 px-10 py-4 font-semibold hover:bg-blue-700 transition-all hover:scale-105"
            >
              Ask a Question
            </a>
          </div>
        </section>
      </FadeIn>

      {/* SHOP AUDIT */}
      <FadeIn>
        <section className="py-28 px-6 max-w-6xl mx-auto text-center border-t border-slate-800">
          <h2 className="text-4xl font-extrabold">Shop Audit & Production Review</h2>
          <p className="mt-8 text-slate-300 max-w-3xl mx-auto">
            Identify suppressed labor, missed operations, structural billing gaps,
            and documentation weaknesses inside your repair flow.
            Built for shop owners who want operational clarity and accountability.
          </p>

          <div className="mt-12">
            <a
              href="/shop-audit"
              className="inline-block rounded-xl bg-blue-600 px-10 py-4 font-semibold hover:bg-blue-700 transition-all hover:scale-105"
            >
              Request Shop Audit
            </a>
          </div>
        </section>
      </FadeIn>

      {/* PARTS TRACKER */}
      <FadeIn>
        <section className="py-28 px-6 max-w-6xl mx-auto text-center border-t border-slate-800">
          <h2 className="text-4xl font-extrabold">Parts Locator</h2>
          <p className="mt-8 text-slate-300 max-w-3xl mx-auto">
            Submit vehicle details and part information for structured locating support.
            We identify available vendors and provide verified sourcing information
            to assist with hard-to-find or specialty components.
          </p>

          <div className="mt-12">
            <a
              href="/parts-tracker"
              className="inline-block rounded-xl bg-blue-600 px-10 py-4 font-semibold hover:bg-blue-700 transition-all hover:scale-105"
            >
              Locate a Part
            </a>
          </div>
        </section>
      </FadeIn>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-12 text-center text-sm text-slate-400 px-6">
        <p>
          Collision SS provides estimate analysis and advisory insight based on
          industry standards and manufacturer documentation. Collision SS is not
          a public adjuster, insurance adjuster, legal representative, or claims negotiator.
          All information provided is advisory in nature.
        </p>
        <p className="mt-6">
          © {new Date().getFullYear()} Collision SS, LLC.
        </p>
      </footer>

    </main>
  );
}