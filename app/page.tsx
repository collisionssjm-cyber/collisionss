export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-black" />
            <span className="text-sm font-semibold tracking-tight">Collision SS</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
            <a className="hover:text-black" href="#pricing">Pricing</a>
            <a className="hover:text-black" href="#how">How it works</a>
            <a className="hover:text-black" href="#testimonials">Results</a>
            <a className="hover:text-black" href="#faq">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#pricing"
              className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
            >
              See pricing
            </a>
            <a
              href="#start"
              className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-900"
            >
              Start an audit
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-6">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Built by a high-production collision shop manager
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Technical consulting for vehicle owners.
            </h1>

            <p className="max-w-xl text-lg text-zinc-700">
              We review estimates, explain what’s missing, and give you the exact language
              to push back — confidently. If you’re already in a dispute with a shop or insurer,
              we give you the ammo.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#start"
                className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900"
              >
                Start an audit
              </a>
              <a
                href="#pricing"
                className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold hover:bg-zinc-50"
              >
                See pricing
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-zinc-600">
              <span className="rounded-full bg-zinc-100 px-3 py-1">Estimate review</span>
              <span className="rounded-full bg-zinc-100 px-3 py-1">Supplement strategy</span>
              <span className="rounded-full bg-zinc-100 px-3 py-1">Dispute support</span>
              <span className="rounded-full bg-zinc-100 px-3 py-1">OEM procedure logic</span>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-3xl border border-zinc-200 p-6 shadow-sm">
            <p className="text-sm font-semibold text-zinc-600">What you get</p>

            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-zinc-200 p-4">
                <p className="font-semibold">1) Missing items + why they matter</p>
                <p className="mt-1 text-sm text-zinc-700">
                  We point out the common “left out” operations that move claims by thousands.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-4">
                <p className="font-semibold">2) Script you can send to insurance/shop</p>
                <p className="mt-1 text-sm text-zinc-700">
                  Copy/paste wording that doesn’t sound emotional — it sounds correct.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-4">
                <p className="font-semibold">3) Clear next steps</p>
                <p className="mt-1 text-sm text-zinc-700">
                  What to ask for, what to document, and what to stop agreeing to.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-zinc-50 p-4">
              <p className="text-sm font-semibold">Real talk:</p>
              <p className="mt-1 text-sm text-zinc-700">
                Most people lose money because they don’t know what to question.
                We fix that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">How it works</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold text-zinc-600">Step 1</p>
              <p className="mt-2 text-lg font-semibold">Upload your estimate</p>
              <p className="mt-2 text-sm text-zinc-700">
                Email it or paste it. Photos help. VIN helps. Keep it simple.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold text-zinc-600">Step 2</p>
              <p className="mt-2 text-lg font-semibold">We review + mark it up</p>
              <p className="mt-2 text-sm text-zinc-700">
                We identify missing operations, improper assumptions, and red flags.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold text-zinc-600">Step 3</p>
              <p className="mt-2 text-lg font-semibold">You send the script</p>
              <p className="mt-2 text-sm text-zinc-700">
                We give you the exact wording to push back and what to request next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">Pricing</h2>
        <p className="mt-2 text-zinc-700">
          Start small. Upgrade when you’re ready.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 p-6">
            <p className="text-sm font-semibold text-zinc-600">Quick Question</p>
            <p className="mt-2 text-4xl font-bold">$1</p>
            <p className="mt-2 text-sm text-zinc-700">
              One focused question. Fast, blunt answer.
            </p>
            <a
              id="start"
              href="#"
              className="mt-6 inline-flex w-full justify-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-900"
            >
              Ask now
            </a>
          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-900 p-6 text-white">
            <p className="text-sm font-semibold text-zinc-200">Basic Audit</p>
            <p className="mt-2 text-4xl font-bold">$49</p>
            <p className="mt-2 text-sm text-zinc-200">
              Estimate review + missing items + script to send.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-200">
              <li>• What’s missing (and why)</li>
              <li>• Pushback script (insurance/shop)</li>
              <li>• Next steps checklist</li>
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex w-full justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-100"
            >
              Start a $49 audit
            </a>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-6">
            <p className="text-sm font-semibold text-zinc-600">Shop Audit</p>
            <p className="mt-2 text-4xl font-bold">$99</p>
            <p className="mt-2 text-sm text-zinc-700">
              For repair facilities that want clean, defendable files.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>• Estimate logic review</li>
              <li>• Documentation improvements</li>
              <li>• “Ready for adjuster” notes</li>
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex w-full justify-center rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
            >
              Start a $99 audit
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm text-zinc-600">
          PDF report can be added on checkout. Email delivery is standard.
        </p>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">Results people care about</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <p className="text-sm text-zinc-700">
                “I sent your wording to Progressive and the supplement got approved the same week.”
              </p>
              <p className="mt-4 text-sm font-semibold">— Vehicle owner, NY</p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <p className="text-sm text-zinc-700">
                “You caught operations the shop didn’t even mention. I avoided a bad repair.”
              </p>
              <p className="mt-4 text-sm font-semibold">— Claimant</p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <p className="text-sm text-zinc-700">
                “Clean, defendable file. Adjuster stopped playing games when the notes were tight.”
              </p>
              <p className="mt-4 text-sm font-semibold">— Shop owner</p>
            </div>
          </div>

          <p className="mt-6 text-sm text-zinc-600">
            *Testimonials are examples for now. We’ll replace with real ones as you collect them.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 p-6">
            <p className="font-semibold">Do you talk to insurance for me?</p>
            <p className="mt-2 text-sm text-zinc-700">
              Not directly. We give you the exact wording and strategy so you can push it through.
            </p>
          </div>
          <div className="rounded-3xl border border-zinc-200 p-6">
            <p className="font-semibold">Is this “public adjusting”?</p>
            <p className="mt-2 text-sm text-zinc-700">
              No. This is consulting and documentation support — you remain in control of your claim.
            </p>
          </div>
          <div className="rounded-3xl border border-zinc-200 p-6">
            <p className="font-semibold">Can you help if I’m unhappy with the repair?</p>
            <p className="mt-2 text-sm text-zinc-700">
              Yes. We’ll outline what to document, what to request, and how to force corrections.
            </p>
          </div>
          <div className="rounded-3xl border border-zinc-200 p-6">
            <p className="font-semibold">What do you need from me?</p>
            <p className="mt-2 text-sm text-zinc-700">
              Estimate, photos if you have them, and your goal (maximize payout vs quality repair vs dispute).
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Collision SS. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-black" href="#">Privacy</a>
            <a className="hover:text-black" href="#">Terms</a>
            <a className="hover:text-black" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
