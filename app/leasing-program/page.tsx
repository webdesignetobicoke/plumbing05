import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Equipment Leasing Program Toronto | Crystal Drain & Plumbing",
  description: "Lease a water heater, tankless system, or water softener from Crystal Drain & Plumbing. No credit checks, flexible options, low monthly rates.",
};

export default function LeasingPage() {
  return (
    <>
      <Navbar />
      <section style={{ background: "var(--primary)", padding: "3rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Crystal Drain & Plumbing</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "1rem" }}>Leasing Program</h1>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+16476864566" className="btn btn-outline-white">(647) 686-4566</a>
            <a href="/contact-us" className="btn btn-accent">Schedule Service</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start", marginBottom: "3rem" }}>
            <div>
              <h2 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Get The Plumbing Unit You Need Now, Pay Over Time!</h2>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "1.5rem" }}>Get ready to transform your plumbing experience with Crystal Drain & Plumbing's leasing payment program. Your perfect plumbing solution is just a click away!</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--accent)", fontSize: "1.2rem", marginTop: "0.1rem" }}>✓</span>
                  <div><strong style={{ color: "var(--primary)" }}>No Credit Checks:</strong> <span style={{ color: "var(--text-mid)" }}>Get started without any credit concerns</span></div>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--accent)", fontSize: "1.2rem", marginTop: "0.1rem" }}>✓</span>
                  <div><strong style={{ color: "var(--primary)" }}>Flexible Options:</strong> <span style={{ color: "var(--text-mid)" }}>Lease any combination of products*</span></div>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--accent)", fontSize: "1.2rem", marginTop: "0.1rem" }}>✓</span>
                  <div><strong style={{ color: "var(--primary)" }}>Monthly Rates:</strong> <span style={{ color: "var(--text-mid)" }}>Low minimum monthly payments</span></div>
                </div>
              </div>
              <a href="/contact-us" className="btn btn-accent" style={{ marginTop: "1.5rem", display: "inline-block" }}>SCHEDULE SERVICE</a>
            </div>
            <div>
              <Image src="https://images.pexels.com/photos/2310904/pexels-photo-2310904.jpeg" alt="Leasing Program - Crystal Drain & Plumbing" width={580} height={380} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
          </div>

          <h2 style={{ color: "var(--primary)", marginBottom: "1.5rem" }}>Plumbing Unit Leasing</h2>
          <p style={{ color: "var(--text-mid)", marginBottom: "1.5rem" }}>Crystal Drain & Plumbing GTA customers can lease the following products:</p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
              <thead>
                <tr style={{ background: "var(--primary)", color: "#fff" }}>
                  <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontSize: "0.8rem", letterSpacing: "0.05em" }}>Product</th>
                  <th style={{ padding: "0.85rem 1rem", textAlign: "center", fontSize: "0.8rem", letterSpacing: "0.05em" }}>Company</th>
                  <th style={{ padding: "0.85rem 1rem", textAlign: "center", fontSize: "0.8rem", letterSpacing: "0.05em" }}>Monthly Rate</th>
                  <th style={{ padding: "0.85rem 1rem", textAlign: "center", fontSize: "0.8rem", letterSpacing: "0.05em" }}>Initial Installation</th>
                </tr>
              </thead>
              <tbody>
            <tr>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", fontWeight: 600, color: "var(--primary)" }}>50 Gal Natural Gas Water Heater</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center" }}>Crystal Drain & Plumbing</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center", fontWeight: 700, color: "var(--primary)" }}>$44.99/mo</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center" }}>$544.99</td>
            </tr>
            <tr>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", fontWeight: 600, color: "var(--primary)" }}>50 Gal Electric Water Heater</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center" }}>Crystal Drain & Plumbing</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center", fontWeight: 700, color: "var(--primary)" }}>$35.99/mo</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center" }}>$535.99</td>
            </tr>
            <tr>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", fontWeight: 600, color: "var(--primary)" }}>Tankless Water Heater</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center" }}>Crystal Drain & Plumbing</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center", fontWeight: 700, color: "var(--primary)" }}>$98.99/mo</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center" }}>$1,298.99</td>
            </tr>
            <tr>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", fontWeight: 600, color: "var(--primary)" }}>Water Softener - Halo 5</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center" }}>Crystal Drain & Plumbing</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center", fontWeight: 700, color: "var(--primary)" }}>$90.99/mo</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center" }}>$1,090.99</td>
            </tr>
            <tr>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", fontWeight: 600, color: "var(--primary)" }}>Water Softener</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center" }}>Crystal Drain & Plumbing</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center", fontWeight: 700, color: "var(--primary)" }}>$78.99/mo</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center" }}>$578.99</td>
            </tr>
            <tr>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", fontWeight: 600, color: "var(--primary)" }}>Tankless Water Heater & Halo 5</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center" }}>Crystal Drain & Plumbing</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center", fontWeight: 700, color: "var(--primary)" }}>$126.98/mo</td>
              <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #e8e8e8", textAlign: "center" }}>$1,836.98</td>
            </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--text-light)", marginTop: "0.75rem" }}>*Based on home address and location.</p>
        </div>
      </section>

      <GoldLeafCTA />
      <Footer />
    </>
  );
}
