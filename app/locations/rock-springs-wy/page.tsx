import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumber Rock Springs, WY | Crystal Drain & Plumbing",
  description: "Crystal Drain & Plumbing provides expert plumbing and HVAC services in Rock Springs, WY. Zip codes: 82901, 82902, 82942. Call (647) 686-4566.",
};

export default function RockSpringsPage() {
  return (
    <>
      <Navbar />
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Crystal Drain & Plumbing</span>
          <h1>Plumber in Rock Springs, WY</h1>
          <p>Serving zip codes 82901, 82902, 82942. Crystal Drain & Plumbing is the trusted choice for plumbing and HVAC services in Rock Springs and the surrounding Sweetwater County area.</p>
          <div className="page-hero-btns">
            <a href="tel:+18332697794" className="btn btn-outline-white">(647) 686-4566</a>
            <a href="/contact-us" className="btn btn-accent">Schedule Service</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <span className="eyebrow">Our Home Base</span>
              <h2>Rock Springs, Wyoming — Where It All Started</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: "1.25rem" }}>
                Crystal Drain & Plumbing was founded in Rock Springs, Wyoming in 2013 by Lance Ball. From a single service vehicle to a growing fleet, we&apos;ve served the Rock Springs community with pride for over a decade.
              </p>
              <p style={{ color: "var(--text-mid)", marginBottom: "1.25rem" }}>
                Rock Springs is our home. We know this community, we live here, and we treat every customer&apos;s home as if it were our own. From downtown to the surrounding neighborhoods, Crystal Drain & Plumbing is your local plumber.
              </p>
              <p style={{ color: "var(--text-mid)", marginBottom: "2rem" }}>
                <strong>Address:</strong> 1219 Elk St, Rock Springs, WY 82901<br />
                <strong>Phone:</strong> <a href="tel:+18332697794">(647) 686-4566</a><br />
                <strong>Service Area:</strong> 82901, 82902, 82942
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                {[
                  { label: "Plumbing", items: ["Water Heater Repair", "Drain Cleaning", "Pipe Repair", "Water Line Services"] },
                  { label: "HVAC", items: ["Furnace Installation", "AC Services", "Heat Pumps", "Annual Tune-Ups"] },
                ].map(cat => (
                  <div key={cat.label} style={{ background: "var(--cream)", padding: "1.25rem" }}>
                    <h4 style={{ fontSize: "0.75rem", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>{cat.label}</h4>
                    <ul style={{ fontSize: "0.82rem", color: "var(--text-mid)", lineHeight: 2, padding: 0, listStyle: "none" }}>
                      {cat.items.map(i => <li key={i}>→ {i}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <a href="/contact-us" className="btn btn-accent">Schedule Service in Rock Springs</a>
            </div>

            <div>
              <Image
                src="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/672035eb6c795aa59bedd64d_HQb297NrdxzXS-oOPeLV_31vI7qMHzDNRh-24mV5BPs.png"
                alt="Crystal Drain & Plumbing Rock Springs"
                width={600} height={500}
                style={{ width: "100%", marginBottom: "1.5rem" }}
              />

              {/* Local reviews */}
              <div style={{ background: "var(--cream)", padding: "1.5rem", borderLeft: "3px solid var(--accent)" }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: "0.75rem" }}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: "var(--accent)" }}>★</span>)}
                </div>
                <p style={{ fontStyle: "italic", fontSize: "0.875rem", color: "var(--text-mid)", marginBottom: "1rem" }}>
                  &ldquo;We developed a leak and they were there within 2 hours! He was so nice and did such a wonderful job!&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Image src="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/67203617902bd8bbd99dda13_ucQL_An8TBD9yngYxR8aySk_8lA1BGYpoL7FUmv3M_M.png" alt="Tami McWhorter" width={36} height={36} style={{ borderRadius: "50%" }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.82rem" }}>Tami McWhorter</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-light)" }}>Rock Springs, WY · Google</div>
                  </div>
                </div>
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
