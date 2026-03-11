import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Plumber Services Toronto | Crystal Drain & Plumbing",
  description: "Need a licensed plumber to add value to your kitchen? Crystal Drain & Plumbing offers complete kitchen plumbing solutions across Toronto.",
};

const services = [
  { title: "Kitchen Sink Replacement", href: "/service/kitchen-sink-replacement", img: "https://images.pexels.com/photos/87299/pexels-photo-87299.jpeg" },
  { title: "Kitchen Sink Repair", href: "/service/kitchen-sink-repair", img: "https://images.pexels.com/photos/220612/pexels-photo-220612.jpeg" },
  { title: "Kitchen Faucet Installation", href: "/service/kitchen-faucet-installation", img: "https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg" },
  { title: "Kitchen Faucet Repair", href: "/service/kitchen-faucet-repair", img: "https://images.pexels.com/photos/4239115/pexels-photo-4239115.jpeg" },
  { title: "Garbage Disposal Installation", href: "/service/garbage-disposal-installation", img: "https://images.pexels.com/photos/3964796/pexels-photo-3964796.jpeg" },
  { title: "Garbage Disposal Replacement", href: "/service/garbage-disposal-replacement", img: "https://images.pexels.com/photos/2837863/pexels-photo-2837863.jpeg" },
  { title: "Dishwasher Installation", href: "/service/dishwasher-installation", img: "https://images.pexels.com/photos/372796/pexels-photo-372796.jpeg" },
  { title: "Dishwasher Replacement", href: "/service/dishwasher-replacement", img: "https://images.pexels.com/photos/2310904/pexels-photo-2310904.jpeg" },
  { title: "Kitchen Drain Cleaning", href: "/service/kitchen-drain-cleaning", img: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg" },
];

export default function KitchenPlumberPage() {
  return (
    <>
      <Navbar />
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Crystal Drain & Plumbing</span>
          <h1>Kitchen Plumber</h1>
          <p>Need a licensed plumber to add value to your kitchen? The kitchen, the heart of every home, deserves an impeccable plumbing system. From fixing leaky faucets to installing state-of-the-art fixtures, our expert team ensures your kitchen plumbing runs flawlessly.</p>
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
