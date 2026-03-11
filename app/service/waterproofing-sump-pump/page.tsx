import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waterproofing & Sump Pump Installation Toronto | City Rebates | Strong Plumbing",
  description: "Professional sump pump and basement waterproofing solutions. Liberty Pumps. Battery backup systems. Toronto 80% subsidy up to $1,750. Licensed Master Plumbers.",
};

export default function WaterproofingSumpPumpPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Strong Plumbing Inc</span>
          <h1>Waterproofing & Sump Pump Installation</h1>
          <p>Protect your basement from flooding and water damage. Professional sump pump and waterproofing solutions using premium Liberty Pumps. Qualify for city rebates up to $6,000.</p>
          <div className="page-hero-btns">
            <a href="tel:+14162584068" className="btn btn-outline-white">(416) 258-4068</a>
            <a href="/contact-us" className="btn btn-accent">Schedule Consultation</a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <h2>Complete Basement Protection</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
                Basement flooding can cause $20,000+ in damage and compromise your home's structural integrity. Strong Plumbing Inc provides complete waterproofing and sump pump solutions to keep your basement dry and protected.
              </p>
              
              <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Services We Offer</h3>
              <ul style={{ color: "var(--text-mid)", lineHeight: 1.8, paddingLeft: "1.5rem" }}>
                <li style={{ marginBottom: "0.75rem" }}>Liberty Pump sump pump installation</li>
                <li style={{ marginBottom: "0.75rem" }}>Sump pit installation and sizing</li>
                <li style={{ marginBottom: "0.75rem" }}>Battery backup sump pump systems</li>
                <li style={{ marginBottom: "0.75rem" }}>Foundation drain and weeping tile installation</li>
                <li style={{ marginBottom: "0.75rem" }}>Sewage ejector systems</li>
                <li style={{ marginBottom: "0.75rem" }}>Basement waterproofing consultation</li>
                <li style={{ marginBottom: "0.75rem" }}>Annual maintenance and inspections</li>
              </ul>

              <div style={{ background: "var(--cream)", padding: "1.5rem", borderLeft: "4px solid var(--accent)", borderRadius: "4px", marginTop: "2rem" }}>
                <p style={{ margin: 0, color: "var(--text-dark)", fontWeight: "bold" }}>
                  ✓ Up to $6,000 in Municipal Rebates
                </p>
                <p style={{ margin: "0.5rem 0 0 0", color: "var(--text-mid)", fontSize: "0.9rem" }}>
                  We help you qualify and apply for city rebates
                </p>
              </div>
            </div>

            <div>
              <Image
                src="/sump pump.jpeg"
                alt="Sump Pump Installation"
                width={500}
                height={400}
                style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "1.5rem" }}
              />
              <div style={{ background: "var(--primary)", color: "#fff", padding: "1.5rem", borderRadius: "8px", textAlign: "center" }}>
                <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", opacity: 0.9 }}>Prevent Basement Floods</p>
                <p style={{ margin: 0, fontSize: "1.6rem", fontWeight: "bold" }}>24/7 Protection</p>
                <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.85rem", opacity: 0.9 }}>Even during power outages with battery backup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liberty Pumps */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Premium Equipment</span>
            <h2>Liberty Pump Systems</h2>
            <p>Made in the USA. Built for durability and reliability.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
            {[
              {
                model: "Liberty 441",
                desc: "Versatile sump pump for standard residential basements. Handles typical water volumes with reliability.",
                features: ["1/3 HP", "3450 RPM", "Automatic float switch", "Durable motor"]
              },
              {
                model: "Liberty 442",
                desc: "Heavy-duty sump pump for high-volume water removal. Ideal for wet basement conditions.",
                features: ["1/2 HP", "3450 RPM", "Powerful performance", "Extended warranty"]
              },
              {
                model: "Liberty SJ10",
                desc: "Automatic sewage ejector for basement plumbing fixtures below the main sewer line.",
                features: ["Handles solids", "Reliable duty cycle", "Basement toilet & sink capable", "Automatic operation"]
              },
            ].map((pump, idx) => (
              <div key={idx} style={{ background: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "var(--primary)" }}>{pump.model}</h3>
                <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>{pump.desc}</p>
                <ul style={{ margin: 0, paddingLeft: "1.5rem", color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {pump.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", padding: "2rem", borderRadius: "8px", border: "2px solid var(--primary)" }}>
            <h3 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Why Liberty Pumps?</h3>
            <p style={{ color: "var(--text-mid)", margin: "0 0 1rem 0" }}>
              Liberty is the leading manufacturer of residential water and sewage pumps in North America. Their products are manufactured in New York, USA, with a reputation for durability that spans decades.
            </p>
            <p style={{ color: "var(--text-mid)", margin: 0 }}>
              We choose Liberty because they deliver the reliability and performance your basement protection demands.
            </p>
          </div>
        </div>
      </section>

      {/* City Rebates */}
      <section className="section">
        <div className="container">
          <div className="section-header center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Save With Rebates</span>
            <h2>Municipal Rebate Programs</h2>
            <p>You may qualify for significant rebates from your city when installing sump pumps and foundation drainage.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              {
                city: "City of Toronto",
                program: "Sump Pump Installation Subsidy",
                details: "80% of eligible costs up to $1,750",
                icon: "🏢"
              },
              {
                city: "City of Mississauga",
                program: "Foundation Drain Installation",
                details: "$6,000 subsidy available for Foundation Drain Collector streets",
                icon: "💧"
              },
              {
                city: "Eligible Areas",
                program: "Additional Municipalities",
                details: "Other GTA cities may have rebate programs. We check eligibility for you.",
                icon: "✓"
              },
            ].map((rebate, idx) => (
              <div key={idx} style={{ background: "var(--cream)", padding: "2rem", borderRadius: "8px", border: "1px solid var(--primary)" }}>
                <p style={{ margin: 0, fontSize: "0.85rem", textTransform: "uppercase", color: "var(--primary)", fontWeight: "bold" }}>{rebate.icon} {rebate.city}</p>
                <h3 style={{ color: "var(--text-dark)", margin: "0.5rem 0 0.5rem 0", fontSize: "1.1rem" }}>{rebate.program}</h3>
                <p style={{ margin: 0, color: "var(--text-mid)", fontSize: "0.95rem" }}>{rebate.details}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem", background: "var(--primary)", color: "#fff", padding: "2rem", borderRadius: "8px", textAlign: "center" }}>
            <h3 style={{ color: "#fff", margin: "0 0 1rem 0" }}>We Handle the Rebate Process</h3>
            <p style={{ margin: 0 }}>
              Let us manage your rebate application. Strong Plumbing Inc will help you qualify and complete all documentation for maximum savings.
            </p>
          </div>
        </div>
      </section>

      {/* Battery Backup */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="eyebrow">Continuous Protection</span>
              <h2>Battery Backup Systems</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
                Most sump pumps fail when you need them most—during a power outage caused by the same storm that's flooding your basement. Our battery backup systems ensure your sump pump keeps running 24/7, even without electricity.
              </p>
              
              <h3 style={{ marginBottom: "1rem" }}>How It Works</h3>
              <ul style={{ color: "var(--text-mid)", lineHeight: 1.8, paddingLeft: "1.5rem" }}>
                <li style={{ marginBottom: "0.75rem" }}>Charges during normal operation</li>
                <li style={{ marginBottom: "0.75rem" }}>Automatically kicks in during power loss</li>
                <li style={{ marginBottom: "0.75rem" }}>Provides hours of backup pumping</li>
                <li style={{ marginBottom: "0.75rem" }}>No generator needed</li>
                <li style={{ marginBottom: "0.75rem" }}>Integrates seamlessly with existing pumps</li>
                <li style={{ marginBottom: "0.75rem" }}>Water level alarm alerts you to problems</li>
              </ul>

              <Link href="/contact-us" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>Get Battery Backup Quote</Link>
            </div>

            <div>
              <div style={{ background: "var(--accent)", color: "#fff", padding: "2rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
                <h3 style={{ color: "#fff", margin: "0 0 1rem 0" }}>Peace of Mind</h3>
                <p style={{ margin: "0 0 1rem 0", lineHeight: 1.8 }}>
                  Sleep better knowing your basement stays dry during storms and power outages. Battery backup systems provide protection when you need it most.
                </p>
                <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>
                  When your main pump can't operate, your battery backup takes over automatically.
                </p>
              </div>

              <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                <p style={{ margin: "0 0 1rem 0", fontSize: "0.85rem", fontWeight: "bold", color: "var(--primary)", textTransform: "uppercase" }}>Why It Matters</p>
                <p style={{ margin: "0 0 0.75rem 0", color: "var(--text-mid)", fontSize: "0.95rem" }}>
                  ⚡ Power outages eliminate your sump pump exactly when basement flooding is most likely
                </p>
                <p style={{ margin: 0, color: "var(--text-mid)", fontSize: "0.95rem" }}>
                  🌪️ Severe storms cause both flooding AND power loss
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waterproofing Solutions */}
      <section className="section">
        <div className="container">
          <div className="section-header center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Complete Protection</span>
            <h2>Foundation & Waterproofing Solutions</h2>
            <p>Comprehensive approaches to keep water out of your basement.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
            {[
              {
                title: "Weeping Tile Installation",
                desc: "French drain systems around your foundation to collect and divert groundwater away from basement walls."
              },
              {
                title: "Foundation Drain Repair",
                desc: "Replace or repair existing drainage systems that may be blocked or deteriorated."
              },
              {
                title: "Sump Pit Installation",
                desc: "Proper sump pit sizing and installation to effectively collect water for pump removal."
              },
              {
                title: "Exterior Grade Sloping",
                desc: "Consultation on proper grading to direct surface water away from your foundation."
              },
              {
                title: "Basement Drainage Assessment",
                desc: "Professional evaluation to identify weak points and water intrusion risks."
              },
              {
                title: "Annual Maintenance",
                desc: "Regular inspection and cleaning of sump pumps and drainage systems for peak performance."
              },
            ].map((solution, idx) => (
              <div key={idx} style={{ background: "#fff", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ fontSize: "1rem", marginBottom: "0.75rem", color: "var(--primary)" }}>{solution.title}</h3>
                <p style={{ color: "var(--text-mid)", fontSize: "0.9rem", margin: 0 }}>{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Warning Signs</span>
            <h2>Signs You Need Waterproofing</h2>
            <p>Don't wait for a flood. Watch for these warning signs.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              "Standing water in basement",
              "Wet spots or efflorescence",
              "Foundation cracks",
              "Musty odors",
              "Mold or mildew growth",
              "Water stains on walls",
              "Damp carpet or flooring",
              "Condensation on pipes",
              "Peeling paint or wallpaper",
              "Rust on basement appliances",
            ].map((sign, idx) => (
              <div key={idx} style={{ background: "#fff", padding: "1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                <span style={{ color: "var(--accent)", fontSize: "1.2rem", fontWeight: "bold" }}>!</span>
                <p style={{ margin: 0, color: "var(--text-mid)", fontSize: "0.9rem" }}>{sign}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem", background: "#fff", padding: "2rem", borderRadius: "8px", border: "2px solid var(--accent)" }}>
            <p style={{ margin: 0, color: "var(--text-mid)", textAlign: "center" }}>
              If you notice any of these signs, contact Strong Plumbing Inc for a professional assessment. Early action prevents expensive water damage.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div style={{ background: "var(--primary)", color: "#fff", padding: "3rem", borderRadius: "8px", textAlign: "center" }}>
            <h2 style={{ color: "#fff", margin: "0 0 1rem 0" }}>Protect Your Basement Today</h2>
            <p style={{ fontSize: "1.05rem", margin: "0 0 1rem 0", opacity: 0.95 }}>Qualify for city rebates up to $6,000 and get professional sump pump installation.</p>
            <p style={{ fontSize: "0.9rem", margin: "0 0 2rem 0", opacity: 0.9 }}>Strong Plumbing Inc uses premium Liberty Pumps with battery backup protection.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact-us" className="btn" style={{ background: "#fff", color: "var(--primary)" }}>Free Consultation</Link>
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
