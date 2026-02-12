export default function Page() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.brand}>
            <div style={styles.logoMark}>CS</div>
            <div>
              <div style={styles.brandName}>Collision SS</div>
              <div style={styles.brandTag}>Collision Support Services</div>
            </div>
          </div>

          <nav style={styles.nav}>
            <a href="#how" style={styles.navLink}>How it works</a>
            <a href="#why" style={styles.navLink}>What we catch</a>
            <a href="#pricing" style={styles.navLink}>Pricing</a>
            <a href="#faq" style={styles.navLink}>FAQ</a>
          </nav>

          <a href="#start" style={styles.primaryBtn}>Start an Audit</a>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.heroLeft}>
            <div style={styles.badge}>Aggressive accuracy. Professional delivery.</div>
            <h1 style={styles.h1}>
              Stop accepting underwritten collision estimates.
            </h1>
            <p style={styles.subhead}>
              Collision SS audits your estimate, photos, and documented damage to identify missing
              labor, wrong repair/replace calls, unsupported line items, and OEM-required operations —
              before you get stuck paying.
            </p>

            <div style={styles.heroCtas}>
              <a href="#start" style={styles.primaryBtnLarge}>Start Your Audit</a>
              <a href="#how" style={styles.secondaryBtnLarge}>See How It Works</a>
            </div>

            <div style={styles.trustRow}>
              <div style={styles.trustItem}>
                <div style={styles.trustTitle}>Written for reality</div>
                <div style={styles.trustText}>Not for “what fits the program.”</div>
              </div>
              <div style={styles.trustItem}>
                <div style={styles.trustTitle}>Photo-driven</div>
                <div style={styles.trustText}>Damage proves the line item.</div>
              </div>
              <div style={styles.trustItem}>
                <div style={styles.trustTitle}>OEM-aware</div>
                <div style={styles.trustText}>Procedures + justification built-in.</div>
              </div>
            </div>
          </div>

          <div style={styles.heroRight}>
            <div style={styles.mockCard}>
              <div style={styles.mockHeader}>
                <div style={styles.mockDotRow}>
                  <span style={styles.dot} />
                  <span style={styles.dot} />
                  <span style={styles.dot} />
                </div>
                <div style={styles.mockTitle}>Audit Snapshot</div>
              </div>

              <div style={styles.mockBody}>
                <div style={styles.mockLine}>
                  <span style={styles.pillRed}>Replace</span>
                  <span style={styles.mockLabel}>Bumper cover</span>
                  <span style={styles.mockNote}>Written as “repair”</span>
                </div>
                <div style={styles.mockLine}>
                  <span style={styles.pillAmber}>Missing</span>
                  <span style={styles.mockLabel}>ADAS scan / calibrations</span>
                  <span style={styles.mockNote}>OEM required</span>
                </div>
                <div style={styles.mockLine}>
                  <span style={styles.pillBlue}>Add</span>
                  <span style={styles.mockLabel}>Blend + R&amp;I operations</span>
                  <span style={styles.mockNote}>Photo-supported</span>
                </div>
                <div style={styles.mockDivider} />
                <div style={styles.mockTotals}>
                  <div>
                    <div style={styles.mockTotalsLabel}>Estimated missed value</div>
                    <div style={styles.mockTotalsValue}>$1,240 – $3,980</div>
                  </div>
                  <div style={styles.mockTotalsHint}>Varies by vehicle + damage</div>
                </div>
              </div>
            </div>

            <div style={styles.smallNote}>
              *This is a preview example. Your audit is based on your estimate + photos.
            </div>
          </div>
        </div>
      </section>

      <section id="how" style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.h2}>How it works</h2>
          <p style={styles.sectionLead}>
            Simple flow. No fluff. We focus on what changes the outcome.
          </p>

          <div style={styles.cardGrid}>
            <div style={styles.card}>
              <div style={styles.cardIcon}>1</div>
              <div style={styles.cardTitle}>Upload</div>
              <div style={styles.cardText}>
                Provide your estimate and photos. If you don’t have shop photos yet, that’s fine —
                we’ll guide what to capture.
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardIcon}>2</div>
              <div style={styles.cardTitle}>Audit</div>
              <div style={styles.cardText}>
                We check repair vs replace logic, labor omissions, required operations, and OEM procedures.
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardIcon}>3</div>
              <div style={styles.cardTitle}>Report</div>
              <div style={styles.cardText}>
                You get a clear list of corrections + photo-supported justifications you can use with the insurer or shop.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" style={styles.sectionAlt}>
        <div style={styles.sectionInner}>
          <h2 style={styles.h2}>What we catch</h2>

          <div style={styles.split}>
            <div>
              <div style={styles.feature}>
                <div style={styles.featureTitle}>Repair vs Replace (your Section 2)</div>
                <div style={styles.featureText}>
                  If a part is torn, creased, kinked, compromised at a mounting point, or safety-critical —
                  replacement is required. Insurers often write “repair” first and ask for photos so the damage is documented
                  before it reaches the shop. Collision SS makes sure the estimate matches reality.
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.featureTitle}>Missing operations</div>
                <div style={styles.featureText}>
                  R&amp;I for blends, corrosion protection, seam sealer, cavity wax, setup/measure/pull, sublet necessities —
                  the things that mysteriously “don’t make it” onto first writes.
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.featureTitle}>OEM-required steps</div>
                <div style={styles.featureText}>
                  ADAS scans/calibrations, one-time-use hardware, structural restrictions, and repair procedure notes.
                </div>
              </div>
            </div>

            <div style={styles.quoteCard}>
              <div style={styles.quote}>
                “You don’t win these arguments by yelling. You win with photos, procedures, and clean documentation.”
              </div>
              <div style={styles.quoteBy}>— Collision SS methodology</div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.h2}>Pricing</h2>
          <p style={styles.sectionLead}>Keep it simple for rollout. You can tune pricing after Monday.</p>

          <div style={styles.pricingGrid}>
            <div style={styles.priceCard}>
              <div style={styles.priceTop}>
                <div style={styles.priceName}>Single Audit</div>
                <div style={styles.priceValue}>$49</div>
              </div>
              <ul style={styles.ul}>
                <li style={styles.li}>Estimate + photo review</li>
                <li style={styles.li}>Repair vs replace corrections</li>
                <li style={styles.li}>Missing operations list</li>
                <li style={styles.li}>Clean justification notes</li>
              </ul>
              <a href="#start" style={styles.primaryBtnLarge}>Start</a>
            </div>

            <div style={styles.priceCardStrong}>
              <div style={styles.priceTop}>
                <div style={styles.priceName}>Shop / Team</div>
                <div style={styles.priceValue}>Custom</div>
              </div>
              <ul style={styles.ul}>
                <li style={styles.li}>Multi-RO workflow</li>
                <li style={styles.li}>Standardized line notes</li>
                <li style={styles.li}>Compliance templates</li>
                <li style={styles.li}>White-label option</li>
              </ul>
              <a href="#start" style={styles.secondaryBtnLarge}>Talk to us</a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" style={styles.sectionAlt}>
        <div style={styles.sectionInner}>
          <h2 style={styles.h2}>FAQ</h2>

          <div style={styles.faqGrid}>
            <div style={styles.faq}>
              <div style={styles.faqQ}>Do I need shop photos?</div>
              <div style={styles.faqA}>
                No. If you only have insurer photos, start there. We’ll tell you what to capture next to support corrections.
              </div>
            </div>

            <div style={styles.faq}>
              <div style={styles.faqQ}>Is Collision SS a body shop?</div>
              <div style={styles.faqA}>
                No. Collision SS is Collision Support Services — we audit documentation and estimate logic.
              </div>
            </div>

            <div style={styles.faq}>
              <div style={styles.faqQ}>How fast is the turnaround?</div>
              <div style={styles.faqA}>
                For rollout: prioritize speed. Once we see volume, we’ll lock turn-times and publish them.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="start" style={styles.section}>
        <div style={styles.sectionInner}>
          <div style={styles.ctaCard}>
            <div>
              <h2 style={styles.h2}>Ready to start?</h2>
              <p style={styles.sectionLead}>
                For rollout, we can run “email-only” intake. You’ll add real upload + automation next.
              </p>
            </div>
            <a
              href="mailto:collisionss@yourdomain.com?subject=Collision%20SS%20Audit%20Request&body=Name:%0A%0APhone:%0A%0AVehicle:%0A%0AInsurer:%0A%0AWhat happened:%0A%0AAttach estimate + photos if available."
              style={styles.primaryBtnLarge}
            >
              Email Your Audit Request
            </a>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerLeft}>
            <div style={styles.brandMini}>
              <span style={styles.logoMini}>CS</span>
              <span style={styles.footerName}>Collision SS</span>
              <span style={styles.footerTag}>Collision Support Services</span>
            </div>
            <div style={styles.footerFine}>
              © {new Date().getFullYear()} Collision SS. All rights reserved.
            </div>
          </div>

          <div style={styles.footerRight}>
            <a href="#how" style={styles.footerLink}>How it works</a>
            <a href="#pricing" style={styles.footerLink}>Pricing</a>
            <a href="#faq" style={styles.footerLink}>FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    background: "#ffffff",
    color: "#0b1220",
    minHeight: "100vh",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
  },
  headerInner: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "14px 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  brand: { display: "flex", alignItems: "center", gap: 10 },
  logoMark: {
    width: 38,
    height: 38,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    border: "1px solid rgba(15, 23, 42, 0.12)",
    fontWeight: 800,
    letterSpacing: "-0.02em",
  },
  brandName: { fontWeight: 800, lineHeight: 1.1 },
  brandTag: { fontSize: 12, color: "rgba(15, 23, 42, 0.65)" },
  nav: { display: "flex", alignItems: "center", gap: 16 },
  navLink: {
    fontSize: 14,
    color: "rgba(15, 23, 42, 0.75)",
    textDecoration: "none",
  },
  primaryBtn: {
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: 12,
    background: "#0b1220",
    color: "#ffffff",
    fontSize: 14,
    fontWeight: 700,
  },
  hero: {
    borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
    background:
      "radial-gradient(900px 500px at 30% 0%, rgba(2,132,199,0.10), rgba(255,255,255,0)), radial-gradient(700px 420px at 90% 10%, rgba(16,185,129,0.08), rgba(255,255,255,0))",
  },
  heroInner: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "64px 18px 56px",
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 28,
    alignItems: "start",
  },
  heroLeft: {},
  heroRight: {},
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(15, 23, 42, 0.12)",
    background: "rgba(255,255,255,0.8)",
    fontSize: 13,
    fontWeight: 700,
    color: "rgba(15, 23, 42, 0.85)",
  },
  h1: {
    margin: "14px 0 10px",
    fontSize: 44,
    lineHeight: 1.05,
    letterSpacing: "-0.04em",
  },
  subhead: {
    margin: 0,
    fontSize: 16,
    lineHeight: 1.6,
    color: "rgba(15, 23, 42, 0.75)",
    maxWidth: 560,
  },
  heroCtas: { display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" },
  primaryBtnLarge: {
    textDecoration: "none",
    padding: "12px 16px",
    borderRadius: 14,
    background: "#0b1220",
    color: "#ffffff",
    fontSize: 15,
    fontWeight: 800,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryBtnLarge: {
    textDecoration: "none",
    padding: "12px 16px",
    borderRadius: 14,
    background: "transparent",
    color: "#0b1220",
    border: "1px solid rgba(15, 23, 42, 0.18)",
    fontSize: 15,
    fontWeight: 800,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  trustRow: {
    marginTop: 22,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
  },
  trustItem: {
    padding: "14px 14px",
    borderRadius: 16,
    border: "1px solid rgba(15, 23, 42, 0.10)",
    background: "rgba(255,255,255,0.75)",
  },
  trustTitle: { fontWeight: 800, fontSize: 13 },
  trustText: { marginTop: 4, fontSize: 13, color: "rgba(15, 23, 42, 0.70)" },

  mockCard: {
    borderRadius: 20,
    border: "1px solid rgba(15, 23, 42, 0.12)",
    background: "rgba(255,255,255,0.9)",
    boxShadow: "0 12px 36px rgba(2, 6, 23, 0.10)",
    overflow: "hidden",
  },
  mockHeader: {
    padding: "12px 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
  },
  mockDotRow: { display: "flex", gap: 6 },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "rgba(15, 23, 42, 0.18)",
    display: "inline-block",
  },
  mockTitle: { fontWeight: 800, fontSize: 13, color: "rgba(15, 23, 42, 0.75)" },
  mockBody: { padding: 14 },
  mockLine: {
    display: "grid",
    gridTemplateColumns: "78px 1fr 1fr",
    gap: 10,
    alignItems: "center",
    padding: "10px 10px",
    borderRadius: 14,
    border: "1px solid rgba(15, 23, 42, 0.08)",
    marginBottom: 10,
  },
  pillRed: {
    fontSize: 12,
    fontWeight: 800,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(239,68,68,0.12)",
    color: "rgba(185,28,28,1)",
    textAlign: "center",
  },
  pillAmber: {
    fontSize: 12,
    fontWeight: 800,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(245,158,11,0.14)",
    color: "rgba(146,64,14,1)",
    textAlign: "center",
  },
  pillBlue: {
    fontSize: 12,
    fontWeight: 800,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(59,130,246,0.14)",
    color: "rgba(29,78,216,1)",
    textAlign: "center",
  },
  mockLabel: { fontWeight: 800, fontSize: 13 },
  mockNote: { fontSize: 13, color: "rgba(15, 23, 42, 0.70)" },
  mockDivider: { height: 1, background: "rgba(15, 23, 42, 0.08)", margin: "10px 0" },
  mockTotals: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 },
  mockTotalsLabel: { fontSize: 12, color: "rgba(15, 23, 42, 0.60)", fontWeight: 700 },
  mockTotalsValue: { fontSize: 18, fontWeight: 900, letterSpacing: "-0.02em" },
  mockTotalsHint: { fontSize: 12, color: "rgba(15, 23, 42, 0.55)", fontWeight: 700 },
  smallNote: { marginTop: 10, fontSize: 12, color: "rgba(15, 23, 42, 0.55)" },

  section: { padding: "56px 0" },
  sectionAlt: {
    padding: "56px 0",
    background: "rgba(2, 6, 23, 0.02)",
    borderTop: "1px solid rgba(15, 23, 42, 0.06)",
    borderBottom: "1px solid rgba(15, 23, 42, 0.06)",
  },
  sectionInner: { maxWidth: 1120, margin: "0 auto", padding: "0 18px" },
  h2: { margin: 0, fontSize: 28, letterSpacing: "-0.03em" },
  sectionLead: { marginTop: 8, marginBottom: 18, color: "rgba(15, 23, 42, 0.70)", lineHeight: 1.6 },

  cardGrid: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14 },
  card: {
    borderRadius: 18,
    border: "1px solid rgba(15, 23, 42, 0.10)",
    background: "#fff",
    padding: 16,
  },
  cardIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    border: "1px solid rgba(15, 23, 42, 0.12)",
    fontWeight: 900,
  },
  cardTitle: { marginTop: 10, fontWeight: 900 },
  cardText: { marginTop: 8, color: "rgba(15, 23, 42, 0.70)", lineHeight: 1.6 },

  split: { display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 16, alignItems: "start" },
  feature: {
    borderRadius: 18,
    border: "1px solid rgba(15, 23, 42, 0.10)",
    background: "#fff",
    padding: 16,
    marginBottom: 12,
  },
  featureTitle: { fontWeight: 900 },
  featureText: { marginTop: 8, color: "rgba(15, 23, 42, 0.72)", lineHeight: 1.65 },

  quoteCard: {
    borderRadius: 18,
    border: "1px solid rgba(15, 23, 42, 0.10)",
    background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
    padding: 18,
  },
  quote: { fontSize: 16, fontWeight: 800, lineHeight: 1.55, letterSpacing: "-0.01em" },
  quoteBy: { marginTop: 10, fontSize: 13, color: "rgba(15, 23, 42, 0.65)", fontWeight: 700 },

  pricingGrid: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 14 },
  priceCard: {
    borderRadius: 20,
    border: "1px solid rgba(15, 23, 42, 0.10)",
    background: "#fff",
    padding: 18,
  },
  priceCardStrong: {
    borderRadius: 20,
    border: "1px solid rgba(15, 23, 42, 0.18)",
    background: "#fff",
    padding: 18,
    boxShadow: "0 16px 38px rgba(2, 6, 23, 0.08)",
  },
  priceTop: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 },
  priceName: { fontWeight: 900, fontSize: 16 },
  priceValue: { fontWeight: 900, fontSize: 28, letterSpacing: "-0.03em" },
  ul: { margin: "12px 0 16px", paddingLeft: 18, color: "rgba(15, 23, 42, 0.75)", lineHeight: 1.7 },
  li: { marginBottom: 6 },

  faqGrid: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14 },
  faq: {
    borderRadius: 18,
    border: "1px solid rgba(15, 23, 42, 0.10)",
    background: "#fff",
    padding: 16,
  },
  faqQ: { fontWeight: 900 },
  faqA: { marginTop: 8, color: "rgba(15, 23, 42, 0.72)", lineHeight: 1.65 },

  ctaCard: {
    borderRadius: 22,
    border: "1px solid rgba(15, 23, 42, 0.12)",
    background: "linear-gradient(90deg, rgba(2,132,199,0.08), rgba(16,185,129,0.06))",
    padding: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },

  footer: { borderTop: "1px solid rgba(15, 23, 42, 0.08)", padding: "28px 0" },
  footerInner: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },
  brandMini: { display: "flex", alignItems: "center", gap: 10 },
  logoMini: {
    width: 28,
    height: 28,
    borderRadius: 10,
    display: "grid",
    placeItems: "center",
    border: "1px solid rgba(15, 23, 42, 0.12)",
    fontWeight: 900,
    fontSize: 12,
  },
  footerName: { fontWeight: 900 },
  footerTag: { fontSize: 12, color: "rgba(15, 23, 42, 0.65)" },
  footerFine: { marginTop: 8, fontSize: 12, color: "rgba(15, 23, 42, 0.55)" },
  footerLeft: {},
  footerRight: { display: "flex", alignItems: "center", gap: 14 },
  footerLink: { textDecoration: "none", color: "rgba(15, 23, 42, 0.70)", fontSize: 13, fontWeight: 700 },
};
