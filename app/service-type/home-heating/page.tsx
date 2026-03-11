import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Heating Services Toronto | Crystal Drain & Plumbing",
  description: "Crystal Drain & Plumbing offers reliable and efficient home heating services to ensure your home-comfort throughout the winter. *Not available in Albany or Laramie County.",
};

const services = [
  { title: "Furnace Installation", href: "/service/furnace-installation", img: "https://images.pexels.com/photos/5632637/pexels-photo-5632637.jpeg" },
  { title: "Furnace Repair", href: "/service/furnace-repair", img: "https://images.pexels.com/photos/5081619/pexels-photo-5081619.jpeg" },
  { title: "Furnace Maintenance", href: "/service/furnace-maintenance", img: "https://images.pexels.com/photos/5632630/pexels-photo-5632630.jpeg" },
  { title: "Heat Pump Installation", href: "/service/heat-pump-installation", img: "https://images.pexels.com/photos/2659685/pexels-photo-2659685.jpeg" },
  { title: "Heat Pump Repair", href: "/service/heat-pump-repair", img: "https://images.pexels.com/photos/5632638/pexels-photo-5632638.jpeg" },
  { title: "Boiler Installation", href: "/service/boiler-installation", img: "https://images.pexels.com/photos/4393661/pexels-photo-4393661.jpeg" },
  { title: "Boiler Repair", href: "/service/boiler-repair", img: "https://images.pexels.com/photos/5632636/pexels-photo-5632636.jpeg" },
  { title: "Annual Heating Tune-Up", href: "/service/heating-tune-up", img: "https://images.pexels.com/photos/6393323/pexels-photo-6393323.jpeg" },
];

export default function HomeHeatingPage() {
  return (
    <>
      <Navbar />
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Crystal Drain & Plumbing — HVAC</span>
          <h1>Home Heating</h1>
          <p>Crystal Drain & Plumbing offers reliable and efficient home heating services to ensure your home-comfort throughout the winter. <strong>*HVAC services not available in Albany County &amp; Laramie County</strong></p>
          <div className="page-hero-btns">
            <a href="tel:+18332697794" className="btn btn-outline-white">(647) 686-4566</a>
            <a href="/contact-us" className="btn btn-accent">Schedule Service</a>
          </div>
        </div>
      </section>

      {/* Info blurb */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", marginBottom: "4rem" }}>
            <div>
              <span className="eyebrow">Expert HVAC Service</span>
              <h2>Keeping Toronto Homes Warm All Winter Long</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: "1rem" }}>
                Our team of certified HVAC technicians has undergone extensive training to diagnose, repair, and maintain a wide range of home heating systems. Whether you have a traditional furnace, a heat pump, or a boiler, we&apos;ve got you covered.
              </p>
              <p style={{ color: "var(--text-mid)" }}>
                From annual tune-ups and maintenance to emergency repairs, we&apos;re here to ensure that your heating system runs efficiently and effectively through Toronto&apos;s harshest winters.
              </p>
            </div>
            <Image
              src="https://images.pexels.com/photos/5632637/pexels-photo-5632637.jpeg"
              alt="Home Heating Services"
              width={600} height={420}
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="section-header center">
            <span className="eyebrow">Our HVAC Services</span>
            <h2>Home Heating Services</h2>
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
