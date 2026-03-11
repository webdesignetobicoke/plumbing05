import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Conditioning Services Toronto | Crystal Drain & Plumbing",
  description: "Crystal Drain & Plumbing provides reliable and efficient air conditioning services to maximize comfort throughout the summer. Serving Toronto homeowners.",
};

const services = [
  { title: "AC Installation", href: "/service/ac-installation", img: "https://images.pexels.com/photos/5632635/pexels-photo-5632635.jpeg" },
  { title: "AC Repair", href: "/service/ac-repair", img: "https://images.pexels.com/photos/5632634/pexels-photo-5632634.jpeg" },
  { title: "AC Maintenance", href: "/service/ac-maintenance", img: "https://images.pexels.com/photos/5081620/pexels-photo-5081620.jpeg" },
  { title: "AC Replacement", href: "/service/ac-replacement", img: "https://images.pexels.com/photos/5632633/pexels-photo-5632633.jpeg" },
  { title: "Mini-Split Installation", href: "/service/mini-split-installation", img: "https://images.pexels.com/photos/5081618/pexels-photo-5081618.jpeg" },
  { title: "Mini-Split Repair", href: "/service/mini-split-repair", img: "https://images.pexels.com/photos/5632632/pexels-photo-5632632.jpeg" },
  { title: "Annual AC Tune-Up", href: "/service/ac-tune-up", img: "https://images.pexels.com/photos/5081621/pexels-photo-5081621.jpeg" },
];

export default function AirConditioningPage() {
  return (
    <>
      <Navbar />
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Crystal Drain & Plumbing — HVAC</span>
          <h1>Air Conditioning</h1>
          <p>Crystal Drain & Plumbing provides reliable and efficient air conditioning services to maximize comfort throughout the summer. <strong>*HVAC services not available in Albany County &amp; Laramie County</strong></p>
          <div className="page-hero-btns">
            <a href="tel:+18332697794" className="btn btn-outline-white">(647) 686-4566</a>
            <a href="/contact-us" className="btn btn-accent">Schedule Service</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", marginBottom: "4rem" }}>
            <div>
              <span className="eyebrow">Stay Cool</span>
              <h2>Expert Air Conditioning Services Across Toronto</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: "1rem" }}>
                Whether you need a new AC installation, emergency repair, or routine maintenance to keep your system running at peak efficiency, Crystal Drain & Plumbing is your trusted partner for all things cooling.
              </p>
              <p style={{ color: "var(--text-mid)" }}>
                Our certified HVAC technicians handle all makes and models of air conditioning equipment, from traditional central AC units to modern ductless mini-split systems.
              </p>
            </div>
            <Image
              src="https://images.pexels.com/photos/5632635/pexels-photo-5632635.jpeg"
              alt="Air Conditioning Services"
              width={600} height={420}
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="service-list">
            {services.map(s => (
              <Link key={s.href} href={s.href} className="service-item">
                <div className="service-item-img">
                  <Image src={s.img} alt={s.title} fill sizes="240px" />
                </div>
                <div className="service-item-body">
                  <h3>{s.title}</h3>
                  <span className="learn-more">Learn More →</span>
                </div>
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
