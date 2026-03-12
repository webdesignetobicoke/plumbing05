import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";

export interface CountyCity {
  name: string;
  slug: string;
  img: string;
}

export interface CountyPageProps {
  county: string;
  state: string;
  tagline: string;
  cities: CountyCity[];
}

export default function CountyPage({ county, state, tagline, cities }: CountyPageProps) {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "var(--primary)", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Strong Plumbing Inc</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>{county}</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", maxWidth: 600, margin: "0 auto 2rem" }}>{tagline}</p>
          <a href="https://crystaldrain.ca" className="btn btn-accent">Schedule Service</a>
        </div>
      </section>

      {/* Cities grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {cities.map(city => (
              <Link key={city.slug} href={`/locations/${city.slug}`} style={{ display: "block", overflow: "hidden", background: "var(--cream)", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
                <Image
                  src={city.img}
                  alt={city.name}
                  width={300}
                  height={180}
                  style={{ width: "100%", height: "160px", objectFit: "cover" }}
                />
                <div style={{ padding: "0.75rem 1rem", fontWeight: 700, color: "var(--primary)", fontSize: "0.9rem" }}>{city.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldLeafCTA />
      <Footer />
    </>
  );
}
