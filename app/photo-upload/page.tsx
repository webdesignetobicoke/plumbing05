import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload Your Photo | Crystal Drain & Plumbing Toronto",
  description: "Share a photo of your plumbing issue with Crystal Drain & Plumbing so we can better prepare for your service appointment.",
};

export default function PhotoUploadPage() {
  return (
    <>
      <Navbar />
      <section style={{ background: "var(--primary)", padding: "3rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Crystal Drain & Plumbing</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "1rem" }}>Upload Your Photo</h1>
          <p style={{ color: "rgba(255,255,255,0.75)" }}>Share a photo of your plumbing issue with us so our technicians can arrive fully prepared for your service appointment.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 600, textAlign: "center" }}>
          <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "1.5rem" }}>Photos help our technicians diagnose your issue faster and arrive with the right parts and equipment — saving you time and money. Please share a clear photo of the problem area along with your name and contact information.</p>
          <div style={{ background: "var(--cream)", padding: "2rem", marginBottom: "1.5rem" }}>
            <p style={{ color: "var(--primary)", fontWeight: 700, marginBottom: "0.5rem" }}>To upload your photo, contact us at:</p>
            <a href="tel:+18332697794" style={{ color: "var(--accent)", fontWeight: 900, fontSize: "1.25rem", display: "block", marginBottom: "0.5rem" }}>(647) 686-4566</a>
            <p style={{ color: "var(--text-mid)", fontSize: "0.875rem" }}>or use our online contact form</p>
          </div>
          <a href="/contact-us" className="btn btn-primary">Contact Us</a>
        </div>
      </section>

      <GoldLeafCTA />
      <Footer />
    </>
  );
}
