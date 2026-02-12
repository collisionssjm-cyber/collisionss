export default function Page() {
  return (
    <main className="cs-page">
      <header className="cs-header">
        <div className="cs-header-inner">
          <a className="cs-brand" href="#">
            <div className="cs-logo">CS</div>
            <div>
              <div className="cs-brand-name">Collision SS</div>
              <div className="cs-brand-tag">Collision Support Services</div>
            </div>
          </a>

          <nav className="cs-nav">
            <a href="#how">How it works</a>
            <a href="#why">What we catch</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a className="cs-nav-cta" href="/start">Start an Audit</a>
          </nav>

          <a className="cs-btn cs-btn-primary cs-btn-sm cs-header-cta" href="/start">
            Start an Audit
          </a>
        </div>
      </header>

      <section className="cs-hero">
        <div className="cs-hero-inner">
          <div className="cs-hero-left">
            <div className="cs-badge">Aggressive accuracy. Professional delivery.</div>
            <h1>Stop accepting underwritten collision estimates.</h1>
            <p className="cs-subhead">
              Collision SS audits your estimate and photos to identify missing labor, wrong repair/replace calls,
              unsupported line items, and OEM-required operations — before you get stuck paying.
            </p>

            <div className="cs-hero-ctas">
              <a className="cs-btn cs-btn-primary" href="/start">Start Your Audit</a>
              <a className="cs-btn cs-btn-ghost" href="#how">See How It Works</a>
            </div>

            <div className="cs-trust">
              <div className="cs-trust-card">
                <div className="cs-trust-title">Written for reality</div>
                <div className="cs-trust-text">Not for “what fits the program.”</div>
              </div>
              <div className="cs-trust-card">
                <div className="cs-trust-title">Photo-driven</div>
                <div className="cs-trust-text">Damage proves the line item.</div>
              </div>
              <div className="cs-trust-card">
                <div className="cs-trust-title">OEM-aware</div>
                <div className="cs-trust-text">Procedures + justification built-in.</div>
              </div>
            </div>
          </div>

          <div className="cs-hero-right">
            <div className="cs-mock">
              <div className="cs-mock-top">
                <div className="cs-dots"><span /><span /><span /></div>
                <div className="cs-mock-title">Audit Snapshot</div>
              </div>

              <div className="cs-mock-body">
                <div className="cs-mock-row">
                  <span className="cs-pill cs-pill-red">Replace</span>
                  <span className="cs-mock-label">Bumper cover</span>
                  <span className="cs-mock-note">Written as “repair”</span>
                </div>
                <div className="cs-mock-row">
                  <span className="cs-pill cs-pill-amber">Missing</span>
                  <span className="cs-mock-label">ADAS scan / calibrations</span>
                  <span className="cs-mock-note">OEM required</span>
                </div>
                <div className="cs-mock-row">
                  <span className="cs-pill cs-pill-blue">Add</span>
                  <span className="cs-mock-label">Blend + R&amp;I operations</span>
                  <span className="cs-mock-note">Photo-supported</span>
                </div>

                <div className="cs-divider" />

                <div className="cs-mock-total">
                  <div>
                    <div className="cs-mock-total-label">Estimated missed value</div>
                    <div className="cs-mock-total-value">$1,240 – $3,980</div>
                  </div>
                  <div className="cs-mock-total-hint">Varies by vehicle + damage</div>
                </div>
              </div>
            </div>

            <div className="cs-small-note">
              *Preview example. Your audit is based on your estimate + photos.
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="cs-section">
        <div className="cs-inner">
          <h2>How it works</h2>
          <p className="cs-lead">Simple flow. No fluff. We focus on what changes the outcome.</p>

          <div className="cs-grid3">
            <div className="cs-card">
              <div className="cs-step">1</div>
              <div className="cs-card-title">Upload</div>
              <div className="cs-card-text">Provide your estimate and photos. If you don’t have shop photos yet, we’ll guide what to capture.</div>
            </div>

            <div className="cs-card">
              <div className="cs-step">2</div>
              <div className="cs-card-title">Audit</div>
              <div className="cs-card-text">We check repair vs replace logic, labor omissions, required operations, and OEM-aware documentation.</div>
            </div>

            <div className="cs-card">
              <div className="cs-step">3</div>
              <div className="cs-card-title">Report</div>
              <div className="cs-card-text">You get corrections + photo-backed justifications you can use with the insurer or shop.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="cs-section cs-alt">
        <div className="cs-inner">
          <h2>What we catch</h2>

          <div className="cs-split">
            <div>
              <div className="cs-feature">
                <div className="cs-feature-title">Repair vs Replace</div>
                <div className="cs-feature-text">
                  If a part is torn, creased, kinked, compromised at a mounting point, or safety-critical —
                  replacement is required. Insurers often write “repair” first and ask for photos so the damage is documented
                  before it reaches the shop. Collision SS makes sure the estimate matches reality.
                </div>
              </div>

              <div className="cs-feature">
                <div className="cs-feature-title">Missing operations</div>
                <div className="cs-feature-text">
                  R&amp;I for blends, corrosion protection, seam sealer, cavity wax, setup/measure/pull, sublet necessities —
                  the stuff that “doesn’t make it” onto first writes.
                </div>
              </div>

              <div className="cs-feature">
                <div className="cs-feature-title">OEM-required steps</div>
                <div className="cs-feature-text">
                  ADAS scans/calibrations, one-time-use hardware, structural restrictions, and clean justification notes.
                </div>
              </div>
            </div>

            <div className="cs-quote">
              <div className="cs-quote-text">
                “You don’t win these arguments by yelling. You win with photos, procedures, and clean documentation.”
              </div>
              <div className="cs-quote-by">— Collision SS methodology</div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="cs-section">
        <div className="cs-inner">
          <h2>Pricing</h2>
          <p className="cs-lead">Simple for rollout. Dial it in after Monday.</p>

          <div className="cs-grid2">
            <div className="cs-price">
              <div className="cs-price-top">
                <div>
                  <div className="cs-price-name">Single Audit</div>
                  <div className="cs-price-note">Estimate + photo review</div>
                </div>
                <div className="cs-price-value">$49</div>
              </div>
              <ul className="cs-ul">
                <li>Repair vs replace corrections</li>
                <li>Missing operations list</li>
                <li>ADAS / calibrations flags</li>
                <li>Clean justification notes</li>
              </ul>
              <a className="cs-btn cs-btn-primary" href="/start">Start</a>
            </div>

            <div className="cs-price cs-price-strong">
              <div className="cs-price-top">
                <div>
                  <div className="cs-price-name">For Shops</div>
                  <div className="cs-price-note">Workflow + consistency</div>
                </div>
                <div className="cs-price-value">Custom</div>
              </div>
              <ul className="cs-ul">
                <li>Multi-RO intake</li>
                <li>Standardized line notes</li>
                <li>Compliance templates</li>
                <li>White-label option</li>
              </ul>
              <a className="cs-btn cs-btn-ghost" href="/shops">Shop page</a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="cs-section cs-alt">
        <div className="cs-inner">
          <h2>FAQ</h2>

          <div className="cs-grid3">
            <div className="cs-faq">
              <div className="cs-faq-q">Do I need shop photos?</div>
              <div className="cs-faq-a">No. Start with what you have. We’ll tell you what to capture next.</div>
            </div>

            <div className="cs-faq">
              <div className="cs-faq-q">Is Collision SS a body shop?</div>
              <div className="cs-faq-a">No. Collision Support Services audits documentation and estimate logic.</div>
            </div>

            <div className="cs-faq">
              <div className="cs-faq-q">Turnaround time?</div>
              <div className="cs-faq-a">Rollout prioritizes speed. We’ll publish turn-times once volume is steady.</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="cs-footer">
        <div className="cs-inner cs-footer-inner">
          <div className="cs-footer-left">
            <div className="cs-footer-brand">
              <span className="cs-footer-logo">CS</span>
              <span className="cs-footer-name">Collision SS</span>
              <span className="cs-footer-tag">Collision Support Services</span>
            </div>
            <div className="cs-footer-fine">© {new Date().getFullYear()} Collision SS. All rights reserved.</div>
          </div>

          <div className="cs-footer-links">
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="/shops">For Shops</a>
            <a href="/start">Start</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
