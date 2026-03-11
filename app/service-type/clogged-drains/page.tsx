import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clogged Drain Services Toronto | Crystal Drain & Plumbing",
  description: "Expert clogged drain services across Toronto. Our technicians are always available to answer your drain cleaning questions and resolve any blockage fast.",
};

const services = [
  { title: "Main Line Drain Cleaning", href: "/service/main-line-drain-cleaning", img: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg" },
  { title: "Sewer Drain Cleaning", href: "/service/sewer-drain-cleaning", img: "https://images.pexels.com/photos/372796/pexels-photo-372796.jpeg" },
  { title: "Kitchen Drain Cleaning", href: "/service/kitchen-drain-cleaning", img: "https://images.pexels.com/photos/87299/pexels-photo-87299.jpeg" },
  { title: "Bathroom Drain Cleaning", href: "/service/bathroom-drain-cleaning", img: "https://images.pexels.com/photos/220612/pexels-photo-220612.jpeg" },
  { title: "Floor Drain Cleaning", href: "/service/floor-drain-cleaning", img: "https://images.pexels.com/photos/3964796/pexels-photo-3964796.jpeg" },
  { title: "Drain Camera Inspection", href: "/service/drain-camera-inspection", img: "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg" },
];

export default function CloggedDrainsPage() {
  return (
    <>
      <Navbar />
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Crystal Drain & Plumbing</span>
          <h1>Clogged Drains</h1>
          <p>If you are looking for a plumber in Toronto GTA that can provide clogged drain repair services, then Crystal Drain & Plumbing is the company for you. Our technicians are always available to answer your drain cleaning questions.</p>
        </div>
      </section>

      {/* Info section */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", marginBottom: "4rem" }}>
            <div>
              <span className="eyebrow">How To Tell</span>
              <h2>Signs of a Clogged Drain</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: "1.5rem" }}>
                Usually signs of gurgling toilets, or slow draining sinks are a good indicator. Water coming up in any drain is a definite indication of a clogged drain. It could be a simple clog in the p-trap under the sink or could be an obstruction in the pipe.
              </p>
              <p style={{ color: "var(--text-mid)", marginBottom: "1.5rem" }}>
                Usually in our area it is caused by root intrusion from the increased growth of bushes and trees in the spring and fall times. We also see it caused by homeowners putting things down the drains that shouldn&apos;t be.
              </p>
              <h3 style={{ fontSize: "1rem", marginBottom: "1rem" }}>4 Types of Drain Cleaning Equipment We Use:</h3>
              <ul style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: "2", paddingLeft: "1.25rem" }}>
                <li>Electric drain snake / auger</li>
                <li>Hydro jetting (high-pressure water)</li>
                <li>Drain camera inspection</li>
                <li>UV cure-and-replace pipe lining (Lightray LR3)</li>
              </ul>
            </div>
            <div>
              <Image
                src="https://images.pexels.com/photos/4239115/pexels-photo-4239115.jpeg"
                alt="Clogged Drains"
                width={600} height={420}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="section-header center">
            <span className="eyebrow">Our Services</span>
            <h2>Drain & Plumbing Services</h2>
            <p>If there's a plumbing or drain issue in or outside your home, we can fix it. We specialize in professional drain and plumbing services.</p>
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
