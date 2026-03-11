import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing & HVAC Video Resources | Crystal Drain & Plumbing Toronto",
  description: "Watch plumbing and HVAC videos from Crystal Drain & Plumbing — tips, service walkthroughs, and more from Toronto's trusted drain cleaning and plumbing experts.",
};

export default function VideosPage() {
  return (
    <>
      <Navbar />
      <section style={{ background: "var(--primary)", padding: "3rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Crystal Drain & Plumbing</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "1rem" }}>Video Vault</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "2rem" }}>Watch our latest plumbing tips, service walkthroughs, and company updates from Crystal Drain & Plumbing's Toronto and GTA experts.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+16476864566" className="btn btn-outline-white">(647) 686-4566</a>
            <a href="/contact-us" className="btn btn-accent">Schedule Service</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ color: "var(--text-mid)", marginBottom: "2rem" }}>Our video library is updated regularly. Subscribe to our YouTube channel to stay up to date.</p>
          <a href="https://www.youtube.com/@crystaldrainplumbing" target="_blank" rel="noopener noreferrer" className="btn btn-forest">Visit Our YouTube Channel</a>
        </div>
      </section>
      <GoldLeafCTA />
      <Footer />
    </>
  );
}
