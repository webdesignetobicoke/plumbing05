"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";

const WEBCLIP = "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg";

const serviceCategories = [
  { label: "Residential Plumber", href: "/service-type/residential-plumber", icon: "■" },
  { label: "Clogged Drains", href: "/service-type/clogged-drains", icon: "●" },
  { label: "Bathroom Plumber", href: "/service-type/bathroom-plumber", icon: "▲" },
  { label: "Kitchen Plumber", href: "/service-type/kitchen-plumber", icon: "◆" },
  { label: "Home Heating", href: "/service-type/home-heating", icon: "▸" },
  { label: "Air Conditioning", href: "/service-type/air-conditioning", icon: "○" },
];

const googleProfiles = [
  { city: "Toronto, ON", rating: "4.9", reviews: "428", href: "https://maps.app.goo.gl/" },
  { city: "Mississauga, ON", rating: "4.8", reviews: "356", href: "https://maps.app.goo.gl/" },
  { city: "Etobicoke, ON", rating: "4.8", reviews: "312", href: "https://maps.app.goo.gl/" },
];

export interface ServiceSection {
  heading: string;
  items?: string[];
  paragraphs?: string[];
}

export interface ServicePageProps {
  title: string;
  heroImg: string;
  parentCategory: { label: string; href: string };
  tagline: string;
  sections: ServiceSection[];
  faqs?: { q: string; a: string }[];
}

export default function ServicePage({ title, heroImg, parentCategory, tagline, sections, faqs }: ServicePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      {/* Breadcrumb + hero */}
      <section style={{ background: "var(--primary)", paddingBottom: 0 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "1rem 2rem 0", display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <Link href={parentCategory.href} style={{ color: "#fff", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.05em" }}>{parentCategory.label}</Link>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem" }}>›</span>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem" }}>{title}</span>
        </div>
      </section>

      {/* Hero image + title */}
      <section style={{ background: "var(--primary)" }}>
        <div className="service-hero-grid" style={{ maxWidth: 1280, margin: "0 auto", padding: "1.5rem 2rem 3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>{title}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <span style={{ color: "var(--accent)", fontSize: "1rem" }}>★★★★★</span>
              <span style={{ color: "#fff", fontWeight: 900 }}>4.7</span>
              <a href="https://maps.google.com/maps?cid=17655562515239911386" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem" }}>(353)</a>
            </div>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", fontSize: "1rem", lineHeight: 1.7 }}>{tagline}</p>
            <div className="service-hero-buttons" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="https://booking.crystaldrainplumbing.com" className="btn btn-accent btn-lg">Schedule Service</a>
              <a href="tel:+14162584068" className="btn btn-phone btn-lg">(416) 258-4068</a>
            </div>
          </div>
          <div className="service-hero-image">
            <Image
              src={heroImg}
              alt={title}
              width={600}
              height={400}
              style={{ width: "100%", height: "320px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "3rem", alignItems: "start" }} className="service-main-grid">

            {/* Main content */}
            <div>
              {sections.map((sec, i) => (
                <div key={i} style={{ marginBottom: "2rem" }}>
                  <h2 style={{ fontSize: "1.25rem", color: "#000", marginBottom: "1rem" }}>{sec.heading}</h2>
                  {sec.paragraphs?.map((p, j) => (
                    <p key={j} style={{ color: "#444", fontSize: "0.925rem", lineHeight: 1.8, marginBottom: "0.75rem" }}>{p}</p>
                  ))}
                  {sec.items && (
                    <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {sec.items.map((item, j) => (
                        <li key={j} style={{ color: "#444", fontSize: "0.9rem", lineHeight: 1.7 }}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* FAQs */}
              {faqs && faqs.length > 0 && (
                <div style={{ marginTop: "2.5rem" }}>
                  <h2 style={{ fontSize: "1.25rem", color: "#000", marginBottom: "1.5rem" }}>FAQs on {title}</h2>
                  <div className="faq-accordion">
                    {faqs.map((faq, i) => (
                      <div key={i} className="faq-item" style={{ borderBottom: "1px solid #e0e0e0", marginBottom: 0 }}>
                        <button
                          onClick={() => toggleFaq(i)}
                          className="faq-toggle"
                          style={{
                            width: "100%",
                            padding: "1.25rem",
                            background: "#f9f9f9",
                            border: "none",
                            textAlign: "left",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            transition: "background 0.2s",
                          }}
                        >
                          <h3 style={{ fontSize: "0.95rem", fontFamily: "'Lato', sans-serif", fontWeight: 700, color: "#000", margin: 0 }}>{faq.q}</h3>
                          <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--primary)", transform: openFaqIndex === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>▼</span>
                        </button>
                        {openFaqIndex === i && (
                          <div style={{ padding: "1.25rem", background: "#fff" }}>
                            <p style={{ fontSize: "0.875rem", color: "#444", margin: 0, lineHeight: 1.75 }}>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Service categories for mobile - appears under FAQ */}
              <div className="service-sidebar-mobile" style={{ background: "var(--primary)", padding: "1.5rem", marginTop: "2.5rem", borderRadius: "4px" }}>
                <h4 style={{ fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", marginBottom: "1rem" }}>Service Categories</h4>
                {serviceCategories.map(cat => (
                  <Link key={cat.href} href={cat.href} style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.75)", fontSize: "0.82rem", transition: "color 0.15s" }}>
                    <span style={{ fontSize: "1.2rem" }}>{cat.icon}</span>
                    {cat.label}
                  </Link>
                ))}
              </div>

              {/* Google profiles for mobile - appears under FAQ */}
              <div className="service-sidebar-mobile" style={{ background: "#f8f8f8", padding: "1.5rem", marginTop: "1.5rem", borderRadius: "4px" }}>
                <h4 style={{ fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>Our Google Business Profiles</h4>
                {googleProfiles.map(p => (
                  <a key={p.city} href={p.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: "0.75rem", background: "#fff", marginBottom: "0.5rem", transition: "box-shadow 0.15s", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
                    <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#000", marginBottom: "0.2rem" }}>Strong Plumbing Inc - {p.city}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                      <span style={{ color: "var(--accent)", fontSize: "0.8rem" }}>★★★★★</span>
                      <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#000" }}>{p.rating}</span>
                      <span style={{ fontSize: "0.72rem", color: "#666" }}>({p.reviews})</span>
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "var(--accent)", fontWeight: 700, marginTop: "0.35rem" }}>Book Online →</div>
                  </a>
                ))}
              </div>

              {/* Schedule CTA inline */}
              <div style={{ background: "#f8f8f8", padding: "2rem", marginTop: "2.5rem", borderLeft: "4px solid var(--accent)" }}>
                <h3 style={{ fontSize: "1.1rem", color: "#000", marginBottom: "0.5rem" }}>Schedule Your Service Today!</h3>
                <p style={{ fontSize: "0.875rem", color: "#444", margin: "0 0 1.25rem" }}>Easy to use online booking platform with up-to-date availability.</p>
                <a href="https://booking.crystaldrainplumbing.com" className="btn btn-accent">Book Online Now</a>
              </div>
            </div>

            {/* Sidebar - desktop only */}
            <aside style={{ position: "sticky", top: "90px" }} className="service-sidebar-desktop">
              {/* Google profiles */}
              <div style={{ background: "#f8f8f8", padding: "1.5rem", marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>Our Google Business Profiles</h4>
                {googleProfiles.map(p => (
                  <a key={p.city} href={p.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: "0.75rem", background: "#fff", marginBottom: "0.5rem", transition: "box-shadow 0.15s", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
                    <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#000", marginBottom: "0.2rem" }}>Strong Plumbing Inc - {p.city}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                      <span style={{ color: "var(--accent)", fontSize: "0.8rem" }}>★★★★★</span>
                      <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#000" }}>{p.rating}</span>
                      <span style={{ fontSize: "0.72rem", color: "#666" }}>({p.reviews})</span>
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "var(--accent)", fontWeight: 700, marginTop: "0.35rem" }}>Book Online →</div>
                  </a>
                ))}
              </div>

              {/* Service categories */}
              <div style={{ background: "var(--primary)", padding: "1.5rem" }}>
                <h4 style={{ fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", marginBottom: "1rem" }}>Service Categories</h4>
                {serviceCategories.map(cat => (
                  <Link key={cat.href} href={cat.href} style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.75)", fontSize: "0.82rem", transition: "color 0.15s" }}>
                    <span style={{ fontSize: "1.2rem" }}>{cat.icon}</span>
                    {cat.label}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <GoldLeafCTA />
      <Footer />
    </>
  );
}
