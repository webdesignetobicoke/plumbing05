import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing & HVAC Career Opportunities | Crystal Drain & Plumbing Toronto",
  description: "Join the Crystal Drain & Plumbing team. We are hiring licensed plumbers and HVAC technicians across the Greater Toronto Area.",
};

export default function JobsPage() {
  return (
    <>
      <Navbar />
      <section style={{ background: "var(--primary)", padding: "3rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Crystal Drain & Plumbing</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "1rem" }}>Now Hiring</h1>
          <p style={{ color: "rgba(255,255,255,0.75)" }}>Crystal Drain & Plumbing is always looking for new talent to join our prospering team. With multiple opportunities across the Greater Toronto Area, we are ready to work with you!</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: "1.25rem", color: "var(--primary)", textAlign: "center", marginBottom: "2rem" }}>Hiring In The Following Service Locations</h2>
          <p style={{ textAlign: "center", color: "var(--text-mid)", marginBottom: "2.5rem" }}>Choose your desired work location to start your Crystal Drain & Plumbing career!</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))", gap: "2rem", maxWidth: 800, margin: "0 auto" }}>
            <div style={{ overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <Image src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg" alt="Plumbing Jobs Toronto" width={500} height={300} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
              <div style={{ padding: "1.5rem", background: "#fff" }}>
                <h3 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Toronto, ON</h3>
                <a href="/contact-us" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply Now</a>
              </div>
            </div>
            <div style={{ overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <Image src="https://images.pexels.com/photos/2837863/pexels-photo-2837863.jpeg" alt="Careers in GTA" width={500} height={300} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
              <div style={{ padding: "1.5rem", background: "#fff" }}>
                <h3 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Greater Toronto Area</h3>
                <a href="/contact-us" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)", padding: "3rem 2rem", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <h2 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Ready to Join Our Team?</h2>
          <p style={{ color: "var(--text-mid)", marginBottom: "1.5rem" }}>Contact us today to discuss available positions and opportunities with Crystal Drain & Plumbing.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+16476864566" className="btn btn-primary">(647) 686-4566</a>
            <a href="/contact-us" className="btn btn-outline-primary">Contact Us</a>
          </div>
        </div>
      </section>
      <GoldLeafCTA />
      <Footer />
    </>
  );
}
