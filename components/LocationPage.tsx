import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";

export interface LocationPageProps {
  city: string;
  state: string;
  slug: string;
  county: string;
  countySlug: string;
  phone: string;
  heroImg: string;
  tagline: string;
  diagnosticFee?: string;
  rating?: string;
  reviewCount?: string;
  services: string[];
  serviceDescriptions: { title: string; description: string }[];
  zipCodes?: string[];
}

export default function LocationPage({
  city, state, county, countySlug, phone, heroImg, tagline,
  diagnosticFee = "$110", rating = "4.7", reviewCount = "372",
  services, serviceDescriptions
}: LocationPageProps) {
  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <section style={{ background: "var(--primary)", padding: "1rem 2rem 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <Link href={`/service-county/${countySlug}`} style={{ color: "var(--accent)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.05em" }}>{county}</Link>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem" }}>›</span>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem" }}>{city}, {state}</span>
        </div>
      </section>

      {/* Hero */}
      <section style={{ background: "var(--primary)", padding: "2rem 2rem 3rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>{city}, {state}</h1>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.5rem", fontSize: "1rem", lineHeight: 1.7 }}>{tagline}</p>
            <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Call Crystal Drain & Plumbing</p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>Schedule your plumbing service today!</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={`tel:${phone.replace(/\D/g,'')}`} className="btn" style={{ border: "2px solid rgba(255,255,255,0.3)", background: "transparent", color: "#fff", textAlign: "center" }}>{phone}</a>
              <a href="https://booking.crystaldrainplumbing.com" className="btn btn-accent" style={{ textAlign: "center" }}>Schedule Service</a>
            </div>
            {services.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Services:</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {services.map(s => (
                    <span key={s} style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", padding: "0.2rem 0.7rem", fontSize: "0.75rem", borderRadius: "2px" }}>{s}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <Image src={heroImg} alt={`${city}, ${state}`} width={580} height={380} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
            <div style={{ background: "#fff", padding: "1.25rem", marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.95rem" }}>{city}, {state}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-mid)" }}>Minimum Diagnostic Fee* <strong style={{ color: "var(--primary)" }}>{diagnosticFee}</strong></div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span style={{ color: "var(--accent)" }}>★★★★★</span>
                <span style={{ fontSize: "0.78rem", color: "var(--text-mid)" }}>({rating} stars) • {reviewCount} reviews</span>
              </div>
              <p style={{ fontSize: "0.65rem", color: "var(--text-light)", margin: "0.25rem 0 0.75rem" }}>* The minimum diagnostic fee is waived upon initiation of service at the time of diagnostic evaluation.</p>
              <a href="https://booking.crystaldrainplumbing.com" className="btn btn-accent" style={{ textAlign: "center", fontSize: "0.8rem" }}>SCHEDULE SERVICE</a>
            </div>
          </div>
        </div>
      </section>

      {/* Service descriptions */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: "1.35rem", color: "var(--primary)", marginBottom: "2rem" }}>About Our Plumbing Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {serviceDescriptions.map(sd => (
              <div key={sd.title} style={{ padding: "1.5rem", background: "var(--cream)", borderLeft: "3px solid var(--accent)" }}>
                <h3 style={{ fontSize: "0.95rem", color: "var(--primary)", marginBottom: "0.6rem" }}>{sd.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.75, margin: 0 }}>{sd.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldLeafCTA />
      <Footer />
    </>
  );
}
