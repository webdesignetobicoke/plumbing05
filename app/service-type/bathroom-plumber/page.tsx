import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Plumber Services Toronto | Crystal Drain & Plumbing",
  description: "We provide quality bathroom plumbing services in Toronto GTA. Expert toilet repair, shower installation, sink repair and more from Crystal Drain & Plumbing.",
};

const services = [
  { title: "Toilet Replacement", href: "/service/toilet-replacement", img: "https://images.pexels.com/photos/220612/pexels-photo-220612.jpeg" },
  { title: "Toilet Repair", href: "/service/toilet-repair", img: "https://images.pexels.com/photos/4239115/pexels-photo-4239115.jpeg" },
  { title: "Toilet Installation", href: "/service/toilet-installation", img: "https://images.pexels.com/photos/87299/pexels-photo-87299.jpeg" },
  { title: "Shower Replacement", href: "/service/shower-replacement", img: "https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg" },
  { title: "Shower Repair", href: "/service/shower-repair", img: "https://images.pexels.com/photos/372796/pexels-photo-372796.jpeg" },
  { title: "Shower Installation", href: "/service/shower-installation", img: "https://images.pexels.com/photos/3964796/pexels-photo-3964796.jpeg" },
  { title: "Bathroom Sink Replacement", href: "/service/bathroom-sink-replacement", img: "https://images.pexels.com/photos/587889/pexels-photo-587889.jpeg" },
  { title: "Bathroom Sink Repair", href: "/service/bathroom-sink-repair", img: "https://images.pexels.com/photos/2455119/pexels-photo-2455119.jpeg" },
  { title: "Bathroom Faucet Installation", href: "/service/bathroom-faucet-installation", img: "https://images.pexels.com/photos/257770/pexels-photo-257770.jpeg" },
  { title: "Bathtub Replacement", href: "/service/bathtub-replacement", img: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg" },
  { title: "Bathtub Repair", href: "/service/bathtub-repair", img: "https://images.pexels.com/photos/2837863/pexels-photo-2837863.jpeg" },
  { title: "Bathtub Installation", href: "/service/bathtub-installation", img: "https://images.pexels.com/photos/2310904/pexels-photo-2310904.jpeg" },
];

export default function BathroomPlumberPage() {
  return (
    <>
      <Navbar />
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Crystal Drain & Plumbing</span>
          <h1>Bathroom Plumber</h1>
          <p>We provide quality bathroom plumbing services in Toronto GTA. Crystal Drain & Plumbing recognizes the importance of a fully functional bathroom for every homeowner.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
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
