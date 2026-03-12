import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect With Strong Plumbing Inc | Toronto Social Media Profiles",
  description: "Follow Strong Plumbing Inc on social media. Find us on Facebook, Instagram, YouTube, and more.",
};

const articles = [
  { title: "Toronto Water Quality: What Every Homeowner Should Know", href: "/blog", img: "https://images.pexels.com/photos/11658940/pexels-photo-11658940.jpeg?w=600&h=400&fit=crop" },
  { title: "Winter Pipe Freezing Prevention Guide for Toronto Homes", href: "/blog", img: "https://images.pexels.com/photos/7937299/pexels-photo-7937299.jpeg?w=600&h=400&fit=crop" },
  { title: "Energy Rebates for Toronto Homeowners: Save on Your Plumbing Upgrades", href: "/blog", img: "https://images.pexels.com/photos/1029635/pexels-photo-1029635.jpeg?w=600&h=400&fit=crop" },
  { title: "Drain Cleaning Technology: What's New in Toronto Plumbing", href: "/blog", img: "https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?w=600&h=400&fit=crop" },
  { title: "Tankless Water Heaters: Toronto Homeowner's Guide", href: "/blog", img: "https://images.pexels.com/photos/7937300/pexels-photo-7937300.jpeg?w=600&h=400&fit=crop" },
  { title: "Bathroom Plumbing Renovation Ideas for Toronto Homes", href: "/blog", img: "https://images.pexels.com/photos/271631/pexels-photo-271631.jpeg?w=600&h=400&fit=crop" },
];

export default function SocialMediaPage() {
  return (
    <>
      <Navbar />
      <section style={{ background: "var(--primary)", padding: "4rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>STRONG PLUMBING INC</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "0.75rem" }}>Social Media Profiles</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "0.5rem" }}>The Gold Leaf Standard of Plumbing.</p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", marginBottom: "2rem" }}>Greater Toronto Area</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.facebook.com/crystaldrainplumbing" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Facebook</a>
            <a href="https://www.instagram.com/crystaldrainplumbing" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">Instagram</a>
            <a href="https://www.youtube.com/@crystaldrainplumbing" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">YouTube</a>
            <a href="/contact-us" className="btn btn-accent">Schedule Service</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: "1.25rem", color: "var(--primary)", marginBottom: "1.5rem", textAlign: "center" }}>Featured Articles</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "3rem" }}>
            {articles.map((a, i) => (
              <Link key={i} href={a.href} style={{ display: "block", background: "#fff", border: "1px solid #e8e8e8", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <Image src={a.img} alt={a.title} width={400} height={220} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                <div style={{ padding: "1rem", fontSize: "0.85rem", fontWeight: 600, color: "var(--primary)", lineHeight: 1.5 }}>{a.title}</div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", background: "var(--primary)", padding: "2.5rem", color: "#fff" }}>
            <h3 style={{ color: "var(--accent)", marginBottom: "1rem" }}>WEBSITE LINKS</h3>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/contact-us" className="btn btn-accent">SCHEDULE SERVICE</a>
              <Link href="/about-us" className="btn btn-outline-white">ABOUT US</Link>
              <Link href="/contact-us" className="btn btn-outline-white">CONTACT</Link>
            </div>
          </div>
        </div>
      </section>

      <GoldLeafCTA />
      <Footer />
    </>
  );
}
