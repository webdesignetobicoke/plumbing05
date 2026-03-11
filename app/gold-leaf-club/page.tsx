import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Leaf Club Maintenance Plan | Crystal Drain & Plumbing",
  description: "Join our Gold Leaf Club for 15% off plumbing services, yearly inspections, water heater maintenance & exclusive benefits. Premium home care for $36.99 monthly.",
};

const features = [
  "Yearly Plumbing Inspection",
  "Friends & Family Discount",
  "Flush Your Water Heater Tank",
  "Double Your Labor Warranty",
  "Tankless Water Heater Clean ($100 Off)",
  "Annual Flood Protection",
  "Double Your Labor Warranty",
  "Priority Service",
];

const whyJoin = [
  { title: "Save 15% On All Services", desc: "Gold Leaf Club members receive 15% off all plumbing services — repairs, installations, and everything in between." },
  { title: "Friends & Family Discount", desc: "Share the love! Your friends and family members receive a 10% discount when they use Crystal Drain & Plumbing." },
  { title: "Priority Scheduling", desc: "Skip the queue. As a Gold Leaf Club member, you receive priority scheduling for all service calls." },
  { title: "Annual Inspections Included", desc: "A certified Crystal Drain & Plumbing technician will conduct a yearly inspection of your home's entire plumbing system." },
  { title: "Water Heater Maintenance", desc: "We'll flush your water heater tank annually to extend its life and maintain peak performance." },
  { title: "Flood Protection", desc: "Annual flood protection check gives you peace of mind that your home is protected from potential plumbing disasters." },
];

export default function GoldLeafClubPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
            <span className="eyebrow">Crystal Drain & Plumbing</span>
          <h1>Gold Leaf Club</h1>
          <p>Get 15% off all plumbing services with the Crystal Drain & Plumbing Gold Leaf Club. As a Gold Leaf Club member, your friends and family receive a 10% discount. Start saving your time, and money, by becoming a Gold Leaf Club member today!</p>
          <div className="page-hero-btns">
            <a href="tel:+18332697794" className="btn btn-outline-white">(647) 686-4566</a>
            <a href="/contact-us" className="btn btn-accent">Schedule Service</a>
          </div>
        </div>
      </section>

      {/* Membership card */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            {/* Card */}
            <div className="membership-card">
              <div className="membership-title">Gold Leaf Club</div>
              <div className="membership-name">Plumbing Service Membership</div>
              <div className="membership-sub">Monthly Plan</div>
              <div className="membership-price">$36.99<span>/mo</span></div>
              <hr className="membership-divider" />
              <div className="membership-includes">Includes:</div>
              <ul className="membership-features">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <Link href="/contact-us" className="btn btn-accent" style={{ display: "block", textAlign: "center", width: "100%" }}>
                Sign Up Now!
              </Link>
            </div>

            {/* Why join */}
            <div>
              <span className="eyebrow">Why Join?</span>
              <h2>Protect Your Home, Save Money Year-Round</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: "2rem" }}>
                Regular plumbing maintenance is crucial for preventing costly emergencies and ensuring your home&apos;s plumbing system operates smoothly. The Gold Leaf Club offers Toronto area homeowners an easy, cost-effective way to keep their plumbing in top condition all year long.
              </p>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                {whyJoin.map(item => (
                  <div key={item.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", fontWeight: 900, fontSize: "1.2rem", marginTop: "2px", flexShrink: 0 }}>✓</span>
                    <div>
                      <h3 style={{ fontSize: "0.95rem", marginBottom: "0.25rem", fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>{item.title}</h3>
                      <p style={{ fontSize: "0.825rem", color: "var(--text-mid)", margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldLeafCTA />
      <Footer />
    </>
  );
}
