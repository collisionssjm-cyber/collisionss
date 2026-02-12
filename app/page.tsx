export default function Home() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto", fontFamily: "Arial" }}>
      
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        Collision SS
      </h1>

      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Vehicle Damage Audit & Insurance Estimate Review
      </h2>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        We review collision estimates line by line and identify what’s missing,
        underpaid, or improperly written. If you’re in a dispute with a shop or
        insurance company, we give you the technical leverage to respond correctly.
      </p>

      <h3>What You Get:</h3>
      <ul style={{ marginBottom: "20px" }}>
        <li>✔ Missing operations & OEM-required procedures</li>
        <li>✔ Clear explanation of what was overlooked</li>
        <li>✔ Language you can send directly to insurance or the shop</li>
        <li>✔ Strategic next steps</li>
      </ul>

      <h2>$49 Basic Audit</h2>
      <p style={{ marginBottom: "20px" }}>
        Professional estimate review. Delivered by email.
      </p>

      <a href="/audit">
        <button style={{ padding: "12px 24px", fontSize: "16px", cursor: "pointer" }}>
          Start Your Audit
        </button>
      </a>

    </main>
  );
}
