import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sewer Line Repair & Replacement Toronto | Pipe Burst Technology | Strong Plumbing",
  description: "Professional sewer line repair and replacement using advanced Pipe Burst technology. 25-year warranty. Video camera inspection. Licensed Master Plumbers.",
};

export default function SewerLinePage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Strong Plumbing Inc</span>
          <h1>Sewer Line Repairs & Replacements</h1>
          <p>Expert sewer line repair and replacement using advanced trenchless Pipe Burst technology. Minimal property damage, maximum results. 25-year warranty on all replacements.</p>
          <div className="page-hero-btns">
            <a href="tel:+14162584068" className="btn btn-outline-white">(416) 258-4068</a>
            <a href="/contact-us" className="btn btn-accent">Schedule Service</a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <h2>Comprehensive Sewer Line Services</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
                Strong Plumbing Inc offers a full range of sewer line services from cleaning and inspection to complete replacement. Whether you need a minor repair or full line replacement, we have the expertise and technology to get the job done right.
              </p>
              
              <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Services We Offer</h3>
              <ul style={{ color: "var(--text-mid)", lineHeight: 1.8, paddingLeft: "1.5rem" }}>
                <li style={{ marginBottom: "0.75rem" }}>Drain roto cleaning with Ridgid K-60 heavy duty machines</li>
                <li style={{ marginBottom: "0.75rem" }}>Sewer line snaking with 7/8" cables to remove grease and tree roots</li>
                <li style={{ marginBottom: "0.75rem" }}>Video camera inspection and location services</li>
                <li style={{ marginBottom: "0.75rem" }}>Inside and outside excavations</li>
                <li style={{ marginBottom: "0.75rem" }}>Trenchless Pipe Burst replacement technology</li>
                <li style={{ marginBottom: "0.75rem" }}>Mandatory Utilities Location before any digging</li>
              </ul>

              <div style={{ background: "var(--cream)", padding: "1.5rem", borderLeft: "4px solid var(--primary)", borderRadius: "4px", marginTop: "2rem" }}>
                <p style={{ margin: 0, color: "var(--text-mid)", fontWeight: "bold" }}>
                  ✓ 25-Year Full Warranty on all pipe replacements
                </p>
              </div>
            </div>

            <div>
              <Image
                src="/sewar repair.jpeg"
                alt="Sewer Line Repair"
                width={500}
                height={400}
                style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "1.5rem" }}
              />
              <div style={{ background: "var(--primary)", color: "#fff", padding: "1.5rem", borderRadius: "8px", textAlign: "center" }}>
                <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", opacity: 0.9 }}>Warranty Coverage</p>
                <p style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>25 YEARS</p>
                <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.85rem", opacity: 0.9 }}>on all replaced pipes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipe Burst Technology */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Technology</span>
            <h2>Pipe Burst Trenchless Replacement</h2>
            <p>Revolutionary technology that replaces old pipes with minimal property damage.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
            {[
              {
                title: "Hydraulic Pipe Burst",
                desc: "Works with any pipe size (4\" or 6\"), clay, plastic, or cast-iron. Bursts old pipe and installs new pipe in one operation."
              },
              {
                title: "Pneumatic Pipe Burst",
                desc: "Alternative method using pneumatic force for situations where hydraulic may not be ideal. Same excellent results."
              },
              {
                title: "Real Replacement",
                desc: "This is NOT epoxy lining (Formadrain). We install an actual brand new full-size pipe, not a coating inside the old one."
              },
              {
                title: "Minimal Disruption",
                desc: "Requires only small access points. No extensive excavation needed. Your property stays intact."
              },
            ].map((tech, idx) => (
              <div key={idx} style={{ background: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--primary)" }}>{tech.title}</h3>
                <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", margin: 0 }}>{tech.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", padding: "2rem", borderRadius: "8px", border: "2px solid var(--primary)" }}>
            <h3 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Building Trap & Breather Removal</h3>
            <p style={{ color: "var(--text-mid)", marginBottom: "1rem" }}>
              We strongly recommend full removal of old Building Trap and Breather pipes (those mushroom-cap pipes sometimes visible in your front yard). These are a main cause of sewage floods and backups.
            </p>
            <p style={{ color: "var(--text-mid)", margin: 0 }}>
              This removal is mandatory in our installation process, and we ensure all work is performed to current plumbing codes with proper Utilities Location calls before any digging.
            </p>
          </div>
        </div>
      </section>

      {/* Video Camera Inspection */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow">Advanced Diagnostics</span>
              <h2>RIDGID Video Camera Inspection</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
                We use state-of-the-art RIDGID video camera equipment to accurately diagnose sewer line issues without excavation.
              </p>
              
              <h3 style={{ marginBottom: "1rem" }}>Inspection Details</h3>
              <ul style={{ color: "var(--text-mid)", lineHeight: 1.8, paddingLeft: "1.5rem" }}>
                <li style={{ marginBottom: "0.75rem" }}>Inspect up to 200 feet of your drain line</li>
                <li style={{ marginBottom: "0.75rem" }}>Identify cracks, leaks, and breaks</li>
                <li style={{ marginBottom: "0.75rem" }}>Locate mineral deposits</li>
                <li style={{ marginBottom: "0.75rem" }}>Detect tree root penetration</li>
                <li style={{ marginBottom: "0.75rem" }}>Discover pipe damage from settling</li>
                <li style={{ marginBottom: "0.75rem" }}>Recorded video provided with each inspection</li>
              </ul>

              <div style={{ marginTop: "2rem" }}>
                <Link href="/contact-us" className="btn btn-primary">Get Free Estimate</Link>
              </div>
            </div>

            <div>
              <div style={{ background: "var(--primary)", color: "#fff", padding: "2rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
                <h3 style={{ color: "#fff", margin: "0 0 1rem 0" }}>Why Video Inspection?</h3>
                <ul style={{ paddingLeft: "1.5rem", margin: 0, lineHeight: 1.8 }}>
                  <li style={{ marginBottom: "0.75rem" }}>Accurate diagnosis without guessing</li>
                  <li style={{ marginBottom: "0.75rem" }}>Precise cost estimates for repairs</li>
                  <li style={{ marginBottom: "0.75rem" }}>Visual documentation for insurance claims</li>
                  <li style={{ marginBottom: "0.75rem" }}>Non-destructive testing method</li>
                  <li style={{ marginBottom: "0.75rem" }}>Peace of mind knowing exactly what needs fixing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Common Problems</span>
            <h2>Sewer Line Issues We Fix</h2>
            <p>From minor clogs to complete replacements, we handle all sewer line problems.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {[
              "Slow Drains & Clogs",
              "Tree Root Intrusion",
              "Broken or Cracked Pipes",
              "Grease Buildup",
              "Sewage Backups",
              "Settling & Bellies",
              "Corrosion Damage",
              "Offset Joints",
            ].map((issue, idx) => (
              <div key={idx} style={{ background: "#fff", padding: "1.5rem", borderRadius: "8px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                <p style={{ margin: 0, color: "var(--primary)", fontWeight: "bold", fontSize: "0.95rem" }}>{issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div style={{ background: "var(--primary)", color: "#fff", padding: "3rem", borderRadius: "8px", textAlign: "center" }}>
            <h2 style={{ color: "#fff", margin: "0 0 1rem 0" }}>Restore Your Sewer Line</h2>
            <p style={{ fontSize: "1.05rem", margin: "0 0 2rem 0", opacity: 0.95 }}>With 25-year warranty and advanced Pipe Burst technology, Strong Plumbing Inc can fix any sewer line problem.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact-us" className="btn" style={{ background: "#fff", color: "var(--primary)" }}>Schedule Free Inspection</Link>
              <a href="tel:+14162584068" className="btn" style={{ background: "transparent", border: "2px solid #fff", color: "#fff" }}>(416) 258-4068</a>
            </div>
          </div>
        </div>
      </section>

      <GoldLeafCTA />
      <Footer />
    </>
  );
}
