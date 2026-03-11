import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BackWater Valve Installation Toronto | Strong Plumbing Inc",
  description: "Professional BackWater Valve installation to prevent sewage backups and basement flooding. City of Toronto rebates up to $1,250. Licensed Master Plumbers.",
};

export default function BackWaterValvePage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section style={{
        background: "linear-gradient(135deg, #003d7a 0%, #0050a7 100%)",
        color: "#fff",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        minHeight: "600px",
        display: "flex",
        alignItems: "center"
      }}>
        {/* Animated background circles */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "-200px",
          width: "500px",
          height: "500px",
          backgroundColor: "rgba(254, 97, 97, 0.08)",
          borderRadius: "50%",
          pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute",
          bottom: "-150px",
          right: "-100px",
          width: "400px",
          height: "400px",
          backgroundColor: "rgba(254, 97, 97, 0.06)",
          borderRadius: "50%",
          pointerEvents: "none"
        }} />

        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "3rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1
        }}>
          {/* Left - Large Image Section */}
          <div style={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end"
          }}>
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: "550px"
            }}>
              {/* Image container with shadow effect */}
              <div style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}>
                <Image
                  src="/backwater valve.jpeg"
                  alt="BackWater Valve Installation"
                  width={480}
                  height={420}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    display: "block"
                  }}
                />
              </div>
              
              {/* Accent badge */}
              <div style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                background: "#fe6161",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(254, 97, 97, 0.3)",
                zIndex: 10
              }}>
                <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>STOP</span>
                <span style={{ fontSize: "0.7rem", textAlign: "center", fontWeight: "bold" }}>BACKUPS</span>
              </div>
            </div>
          </div>

          {/* Right - Text Content Card */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <div style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(10px)",
              borderRadius: "16px",
              padding: "2.5rem",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
            }}>
              <span style={{
                display: "inline-block",
                fontSize: "0.8rem",
                fontWeight: "bold",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#fe6161",
                marginBottom: "1rem",
                background: "rgba(254, 97, 97, 0.2)",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                width: "fit-content"
              }}>
                ✓ Licensed & Insured
              </span>

              <h1 style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                lineHeight: 1.2
              }}>
                BackWater Valve Installation
              </h1>

              <p style={{
                fontSize: "1rem",
                marginBottom: "2rem",
                lineHeight: 1.8,
                opacity: 0.95,
                color: "#f0f0f0"
              }}>
                Protect your home from sewage backups and basement flooding. Professional installation with city rebates available.
              </p>

              {/* Feature list */}
              <div style={{
                display: "grid",
                gap: "0.8rem",
                marginBottom: "2rem"
              }}>
                {["24/7 Emergency Service", "City Rebates Up to $1,250", "Master Plumber Certified"].map((feature, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                    <span style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "24px",
                      height: "24px",
                      background: "#fe6161",
                      borderRadius: "50%",
                      fontSize: "0.75rem",
                      fontWeight: "bold"
                    }}>
                      ✓
                    </span>
                    <span style={{ fontSize: "0.95rem" }}>{feature}</span>
                  </div>
                ))}
              </div>

              <div style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap"
              }}>
                <a href="tel:+14162584068" style={{
                  background: "#fe6161",
                  color: "#fff",
                  padding: "0.9rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "inline-block",
                  transition: "all 0.3s",
                  border: "none",
                  cursor: "pointer"
                }}>
                  Call Now
                </a>
                <a href="/contact-us" style={{
                  background: "transparent",
                  color: "#fff",
                  padding: "0.9rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "inline-block",
                  border: "2px solid #fff",
                  cursor: "pointer",
                  transition: "all 0.3s"
                }}>
                  Schedule Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <h2>What is a BackWater Valve?</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
                A BackWater Valve is a specialized plumbing device installed on your sewer line to prevent sewage from flowing backwards into your home when sewage levels rise above the drainage level during floods or blockages.
              </p>
              
              <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Why You Need One</h3>
              <ul style={{ color: "var(--text-mid)", lineHeight: 1.8, paddingLeft: "1.5rem" }}>
                <li style={{ marginBottom: "0.75rem" }}>Prevents basement flooding from sewage backups during heavy rain</li>
                <li style={{ marginBottom: "0.75rem" }}>Protects your home from costly water damage and contamination</li>
                <li style={{ marginBottom: "0.75rem" }}>Eliminates hazardous gases and odors that can spread through the house</li>
                <li style={{ marginBottom: "0.75rem" }}>Mandatory in many municipalities for new construction</li>
                <li style={{ marginBottom: "0.75rem" }}>Qualifies for significant City of Toronto rebates</li>
              </ul>

              <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Potential Damage from Sewage Backups</h3>
              <p style={{ color: "var(--text-mid)", marginBottom: "0.5rem" }}>Without a BackWater Valve, sewage backup damage can cost:</p>
              <p style={{ fontSize: "1.25rem", fontWeight: "bold", color: "var(--primary)", marginBottom: "1rem" }}>$5,000 - $20,000+ for a 2,000 sq ft home</p>
              <p style={{ color: "var(--text-mid)" }}>BackWater Valve installation is a fraction of this cost and is the most cost-effective protection available.</p>
            </div>

            <div>
              <Image
                src="/about us.jpg"
                alt="BackWater Valve Installation"
                width={500}
                height={400}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Strong Plumbing Inc Services</span>
            <h2>BackWater Valve Installation Services</h2>
            <p>Complete installation from permit to inspection and City rebate application.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              {
                title: "Full Installation",
                desc: "Professional installation of Mainline BackWater Valves (manufactured in USA) on 4\" sewer/sanitary or storm lines, interior or exterior."
              },
              {
                title: "Permit & City Coordination",
                desc: "We handle all required permits from City and coordinate scheduling with City Inspectors to ensure proper installation to current codes."
              },
              {
                title: "Inspection & Approval",
                desc: "Our team is present for City inspection. We ensure your installation passes and provides the documentation needed for rebate applications."
              },
              {
                title: "Annual Maintenance",
                desc: "BackWater Valves require annual inspection to ensure the flapper/gate stays clean and operational. Our maintenance cost: $150."
              },
            ].map((service, idx) => (
              <div key={idx} style={{ background: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--primary)" }}>{service.title}</h3>
                <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", margin: 0 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rebates Section */}
      <section className="section">
        <div className="container">
          <div className="section-header center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Available Rebates</span>
            <h2>Save on Your BackWater Valve Installation</h2>
            <p>Multiple municipalities offer significant rebates to help offset installation costs.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              { city: "City of Toronto", rebate: "Up to $1,250", desc: "Under Basement Flooding Program" },
              { city: "City of Mississauga", rebate: "$750", desc: "For BackWater Valve installation" },
              { city: "City of Vaughan", rebate: "Up to $750", desc: "Available for residents" },
              { city: "City of Markham", rebate: "Up to $3,500+", desc: "Even more if installed outdoor" },
            ].map((rebate, idx) => (
              <div key={idx} style={{ background: "var(--primary)", color: "#fff", padding: "2rem", borderRadius: "8px", textAlign: "center" }}>
                <h3 style={{ fontSize: "1rem", margin: "0 0 0.5rem 0" }}>{rebate.city}</h3>
                <p style={{ fontSize: "1.8rem", fontWeight: "bold", margin: "0.5rem 0" }}>{rebate.rebate}</p>
                <p style={{ fontSize: "0.9rem", margin: 0, opacity: 0.9 }}>{rebate.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem", padding: "2rem", background: "var(--cream)", borderLeft: "4px solid var(--primary)", borderRadius: "4px" }}>
            <p style={{ color: "var(--text-mid)", margin: 0 }}>
              <strong>Strong Plumbing Inc handles all the paperwork!</strong> We assist with permit applications, coordinate with City inspectors, and help you maximize your rebate. We'll guide you through every step to ensure you receive the full rebate you qualify for.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Installation Process</span>
            <h2>How BackWater Valve Installation Works</h2>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {[
              { step: 1, title: "Assessment", desc: "We inspect your sewer line and determine the best location for BackWater Valve installation (interior or exterior)." },
              { step: 2, title: "Permit Application", desc: "Strong Plumbing obtains required permits from your municipality on your behalf." },
              { step: 3, title: "Installation", desc: "Professional installation of Mainline BackWater Valve on the 4\" sewer or storm line to current plumbing codes." },
              { step: 4, title: "City Inspection", desc: "We coordinate with City Inspector. Installation is inspected and must pass before pipe is covered." },
              { step: 5, title: "Rebate Assistance", desc: "We provide all documentation needed to apply for City rebates (up to $1,250 from Toronto)." },
            ].map((item, idx) => (
              <div key={idx} style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                <div style={{ width: "60px", height: "60px", minWidth: "60px", background: "var(--primary)", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.25rem" }}>
                  {item.step}
                </div>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem" }}>{item.title}</h3>
                  <p style={{ margin: 0, color: "var(--text-mid)" }}>{item.desc}</p>
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
            <h2 style={{ color: "#fff", margin: "0 0 1rem 0" }}>Protect Your Home Today</h2>
            <p style={{ fontSize: "1.05rem", margin: "0 0 2rem 0", opacity: 0.95 }}>Don't wait for a sewage backup to happen. Get professional BackWater Valve installation from Strong Plumbing Inc.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact-us" className="btn" style={{ background: "#fff", color: "var(--primary)" }}>Schedule Free Estimate</Link>
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
