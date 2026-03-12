import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing & HVAC Financing Options Wyoming | Strong Plumbing Inc",
  description: "Strong Plumbing Inc offers financing through FTL Finance for convenient low-interest monthly payments on plumbing and HVAC services in Wyoming.",
};

export default function FinancingPage() {
  return (
    <>
      <Navbar />
      <section style={{ background: "var(--primary)", padding: "3rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Strong Plumbing Inc</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "1rem" }}>Financing</h1>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+18332697794" className="btn btn-primary">(647) 686-4566</a>
            <a href="/contact-us" className="btn btn-outline-white">Schedule Service</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Flexible Financing for Your Plumbing & HVAC Needs</h2>
          <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "1.5rem" }}>We understand that plumbing and HVAC repairs and replacements can be unexpected expenses. That&apos;s why Strong Plumbing Inc partners with financing companies to offer convenient low-interest monthly payment options — so you can get the service you need now without financial stress.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
            {[
              ["Fast Approval", "Apply quickly and get a decision fast — no long waiting periods."],
              ["Low Interest Rates", "Competitive financing rates to keep your monthly payments manageable."],
              ["Flexible Terms", "Choose the repayment term that works best for your budget."],
              ["No Hidden Fees", "Transparent financing with no surprise charges."],
            ].map(([title, desc]) => (
              <div key={title} style={{ padding: "1.5rem", background: "var(--cream)", borderLeft: "3px solid var(--accent)" }}>
                <h3 style={{ fontSize: "0.95rem", color: "var(--primary)", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--primary)", padding: "2rem", color: "#fff", textAlign: "center" }}>
            <h3 style={{ color: "var(--accent)", marginBottom: "0.75rem" }}>Ready to Get Started?</h3>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.5rem" }}>Contact Strong Plumbing Inc today to discuss financing options for your plumbing or HVAC project.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+18332697794" className="btn btn-primary">(647) 686-4566</a>
              <a href="/contact-us" className="btn btn-outline-white">Schedule Service</a>
            </div>
          </div>
        </div>
      </section>

      <GoldLeafCTA />
      <Footer />
    </>
  );
}
