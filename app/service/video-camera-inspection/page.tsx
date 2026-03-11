import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Camera Drain Inspection Toronto | RIDGID Equipment | Strong Plumbing",
  description: "Professional video camera inspection services. Identify drain issues without excavation. 200-foot range. Recorded documentation. Non-destructive testing.",
};

export default function VideoCameraInspectionPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Strong Plumbing Inc</span>
          <h1>Video Camera Drain Inspection</h1>
          <p>Advanced RIDGID video camera inspection to accurately diagnose drainage issues without excavation. See exactly what's wrong with recorded video documentation.</p>
          <div className="page-hero-btns">
            <a href="tel:+14162584068" className="btn btn-outline-white">(416) 258-4068</a>
            <a href="/contact-us" className="btn btn-accent">Schedule Inspection</a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <h2>Accurate Drain Diagnostics</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
                Is your drain running slowly? Not sure what's causing the problem? Our professional video camera inspection service uses state-of-the-art RIDGID equipment to see inside your pipes and identify exactly what needs to be fixed.
              </p>
              
              <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>What We Inspect</h3>
              <ul style={{ color: "var(--text-mid)", lineHeight: 1.8, paddingLeft: "1.5rem" }}>
                <li style={{ marginBottom: "0.75rem" }}>Interior drain lines and sewer pipes</li>
                <li style={{ marginBottom: "0.75rem" }}>Roof drain lines</li>
                <li style={{ marginBottom: "0.75rem" }}>Underground drainage systems</li>
                <li style={{ marginBottom: "0.75rem" }}>Storm drains</li>
                <li style={{ marginBottom: "0.75rem" }}>Commercial drain systems</li>
                <li style={{ marginBottom: "0.75rem" }}>Property drainage issues</li>
              </ul>

              <div style={{ background: "var(--cream)", padding: "1.5rem", borderLeft: "4px solid var(--primary)", borderRadius: "4px", marginTop: "2rem" }}>
                <p style={{ margin: 0, color: "var(--text-mid)", fontWeight: "bold" }}>
                  ✓ 1-Year Full Warranty on all inspections
                </p>
                <p style={{ margin: "0.5rem 0 0 0", color: "var(--text-mid)", fontSize: "0.9rem" }}>
                  Includes recorded video documentation
                </p>
              </div>
            </div>

            <div>
              <Image
                src="/video inspection.jpeg"
                alt="Video Camera Drain Inspection"
                width={500}
                height={400}
                style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "1.5rem" }}
              />
              <div style={{ background: "var(--accent)", color: "#fff", padding: "1.5rem", borderRadius: "8px", textAlign: "center" }}>
                <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", opacity: 0.9 }}>Inspection Range</p>
                <p style={{ margin: 0, fontSize: "1.8rem", fontWeight: "bold" }}>UP TO 200 FEET</p>
                <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.85rem", opacity: 0.9 }}>of your drainage system</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Video Inspection */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Benefits</span>
            <h2>Why Choose Video Inspection?</h2>
            <p>See inside your pipes without expensive excavation.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              {
                title: "Accurate Diagnosis",
                desc: "Stop guessing about drain problems. Video inspection pinpoints exactly what's causing the issue—from tree roots to cracks to mineral buildup."
              },
              {
                title: "No Excavation Needed",
                desc: "Our cameras can reach most drainage areas without digging. Your landscape and property stay intact and undamaged."
              },
              {
                title: "Cost Effective",
                desc: "Save thousands on emergency repairs. Identifying problems early prevents costly backup damage and emergency service fees."
              },
              {
                title: "Recorded Documentation",
                desc: "Receive a complete video recording of the inspection. Perfect for insurance claims, real estate transactions, or future reference."
              },
              {
                title: "Precise Repairs",
                desc: "Instead of replacing entire drain lines, we can target specific problem areas for repair or replacement."
              },
              {
                title: "Real Estate Verification",
                desc: "Get proof of drain condition for property inspections, acquisitions, or warranty purposes."
              },
            ].map((benefit, idx) => (
              <div key={idx} style={{ background: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--primary)" }}>{benefit.title}</h3>
                <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", margin: 0 }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Detect */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow">Diagnostics</span>
              <h2>Problems We Identify</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
                Our RIDGID video cameras detect a wide range of drainage problems with precision accuracy.
              </p>
              
              <h3 style={{ marginBottom: "1rem" }}>Our cameras reveal:</h3>
              <ul style={{ color: "var(--text-mid)", lineHeight: 1.8, paddingLeft: "1.5rem" }}>
                <li style={{ marginBottom: "0.75rem" }}>Cracks and breaks in pipes</li>
                <li style={{ marginBottom: "0.75rem" }}>Complete blockages and partial clogs</li>
                <li style={{ marginBottom: "0.75rem" }}>Tree root intrusion and damage</li>
                <li style={{ marginBottom: "0.75rem" }}>Mineral deposits and scale buildup</li>
                <li style={{ marginBottom: "0.75rem" }}>Grease accumulation</li>
                <li style={{ marginBottom: "0.75rem" }}>Pipe misalignment or settling</li>
                <li style={{ marginBottom: "0.75rem" }}>Corrosion and deterioration</li>
                <li style={{ marginBottom: "0.75rem" }}>Joint problems and offset pipes</li>
              </ul>
            </div>

            <div>
              <div style={{ background: "var(--primary)", color: "#fff", padding: "2rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
                <h3 style={{ color: "#fff", margin: "0 0 1rem 0" }}>Without Damage or Excavation</h3>
                <p style={{ margin: "0 0 1rem 0", lineHeight: 1.8 }}>
                  Traditional drain inspection meant digging up your yard and destroying landscaping. With video camera technology, we see everything without any excavation.
                </p>
                <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>
                  Non-destructive testing for maximum property protection.
                </p>
              </div>

              <div style={{ background: "var(--cream)", padding: "1.5rem", borderRadius: "8px", textAlign: "center" }}>
                <p style={{ margin: "0 0 1rem 0", fontSize: "0.85rem", fontWeight: "bold", color: "var(--primary)", textTransform: "uppercase" }}>Comparison</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div style={{ background: "var(--accent)", color: "#fff", padding: "1rem", borderRadius: "4px" }}>
                    <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: "bold" }}>Old Method</p>
                    <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.8rem" }}>Excavation, property damage, high cost</p>
                  </div>
                  <div style={{ background: "var(--primary)", color: "#fff", padding: "1rem", borderRadius: "4px" }}>
                    <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: "bold" }}>Our Method</p>
                    <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.8rem" }}>Video, no damage, accurate diagnosis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Risk Prevention</span>
            <h2>Prevent Costly Damage</h2>
            <p>A small drain problem can turn into a $20,000+ disaster.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div style={{ background: "var(--accent)", color: "#fff", padding: "2rem", borderRadius: "8px", textAlign: "center" }}>
              <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.85rem", textTransform: "uppercase", opacity: 0.9 }}>Potential Damage Cost</p>
              <p style={{ margin: 0, fontSize: "1.8rem", fontWeight: "bold" }}>$2,000 - $20,000+</p>
              <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", opacity: 0.9 }}>Sewage backup, foundation damage, flooring, remediation</p>
            </div>

            <div style={{ background: "var(--primary)", color: "#fff", padding: "2rem", borderRadius: "8px", textAlign: "center" }}>
              <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.85rem", textTransform: "uppercase", opacity: 0.9 }}>Video Inspection Cost</p>
              <p style={{ margin: 0, fontSize: "1.8rem", fontWeight: "bold" }}>Fraction of Damage</p>
              <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", opacity: 0.9 }}>Peace of mind + accurate diagnosis</p>
            </div>
          </div>

          <div style={{ marginTop: "3rem", background: "#fff", padding: "2rem", borderRadius: "8px", border: "2px solid var(--primary)" }}>
            <h3 style={{ color: "var(--primary)", marginBottom: "1rem", textAlign: "center" }}>Early Detection Saves Money</h3>
            <p style={{ color: "var(--text-mid)", textAlign: "center", margin: 0 }}>
              Video inspection identifies problems before they become emergencies. Catch tree roots in your line, spot cracks forming, or detect grease buildup—all before they cause a backup or damage your property.
            </p>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="section">
        <div className="container">
          <div className="section-header center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Our Process</span>
            <h2>How Video Inspection Works</h2>
            <p>Simple, non-invasive, and informative.</p>
          </div>

          <div style={{ display: "grid", gap: "2rem" }}>
            {[
              {
                num: "1",
                title: "Initial Assessment",
                desc: "We discuss the issue you're experiencing and determine the best entry point for the camera."
              },
              {
                num: "2",
                title: "Camera Deployment",
                desc: "Our technician feeds the high-resolution RIDGID camera into your drain line using small access points (usually through existing cleanouts)."
              },
              {
                num: "3",
                title: "Real-Time Inspection",
                desc: "We navigate the camera through up to 200 feet of your drainage system, observing everything in real-time."
              },
              {
                num: "4",
                title: "Problem Identification",
                desc: "We document any issues found—cracks, roots, blockages, corrosion, etc.—noting their location and severity."
              },
              {
                num: "5",
                title: "Video Recording & Report",
                desc: "You receive a complete recorded video of the inspection plus a professional report with our recommendations and cost estimates."
              },
              {
                num: "6",
                title: "Recommendations",
                desc: "Based on findings, we recommend the best repair or replacement options and provide precise pricing."
              },
            ].map((step, idx) => (
              <div key={idx} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: "2rem", alignItems: "start", paddingBottom: "1.5rem", borderBottom: idx < 5 ? "1px solid var(--cream-dark)" : "none" }}>
                <div style={{
                  background: "var(--primary)",
                  color: "#fff",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  flexShrink: 0
                }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem" }}>{step.title}</h3>
                  <p style={{ margin: 0, color: "var(--text-mid)" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div style={{ background: "var(--primary)", color: "#fff", padding: "3rem", borderRadius: "8px", textAlign: "center" }}>
            <h2 style={{ color: "#fff", margin: "0 0 1rem 0" }}>Get Complete Clarity</h2>
            <p style={{ fontSize: "1.05rem", margin: "0 0 2rem 0", opacity: 0.95 }}>Know exactly what's happening in your drains. Schedule your video camera inspection today.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact-us" className="btn" style={{ background: "#fff", color: "var(--primary)" }}>Schedule Inspection</Link>
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
