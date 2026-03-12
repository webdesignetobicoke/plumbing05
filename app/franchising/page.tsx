import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing & HVAC Franchise Opportunities | Strong Plumbing Inc Toronto",
  description: "Own a Strong Plumbing Inc franchise. Bring the Gold Leaf Standard to the Greater Toronto Area with a proven plumbing business model.",
};

export default function FranchisingPage() {
  return (
    <>
      <Navbar />
      <section style={{ background: "var(--primary)", padding: "3rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Strong Plumbing Inc</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "1rem" }}>Franchising</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "2rem" }}>Own a Strong Plumbing Inc franchise and bring the Gold Leaf Standard to your community.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Build Your Future with Strong Plumbing Inc</h2>
          <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "1.5rem" }}>Strong Plumbing Inc is a fast-growing Toronto-based plumbing and HVAC company built on the Gold Leaf Standard of service. Our franchise model gives motivated entrepreneurs the opportunity to own and operate their own plumbing business with the support of an established brand, proven systems, and experienced leadership.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
            {[
              ["Proven Brand", "Leverage the Strong Plumbing Inc name, reputation, and marketing systems."],
              ["Training & Support", "Comprehensive training program and ongoing operational support."],
              ["Exclusive Territory", "Own your market with an exclusive service territory agreement."],
              ["Technology Stack", "Access to our ServiceTitan dispatch, booking, and customer management platform."],
            ].map(([title, desc]) => (
              <div key={title} style={{ padding: "1.5rem", background: "var(--cream)", borderLeft: "3px solid var(--accent)" }}>
                <h3 style={{ fontSize: "0.95rem", color: "var(--primary)", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--primary)", padding: "2rem", color: "#fff", textAlign: "center" }}>
            <h3 style={{ color: "var(--accent)", marginBottom: "0.75rem" }}>Interested in Franchising?</h3>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.5rem" }}>Contact us to learn more about franchise opportunities with Strong Plumbing Inc.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+16476864566" className="btn btn-primary">(647) 686-4566</a>
              <a href="/contact-us" className="btn btn-outline-white">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <GoldLeafCTA />
      <Footer />
    </>
  );
}
