import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Plumbing Services Toronto | Crystal Drain & Plumbing",
  description: "Complete residential plumbing solutions for Toronto homes. Expert water heater services, pipe repairs & water line installations. Serving Rock Springs, Cheyenne & beyond.",
};

const services = [
  { title: "Water Line Repair", href: "/service/water-line-repair", img: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg" },
  { title: "Water Line Installation", href: "/service/water-line-installation", img: "https://images.pexels.com/photos/2837863/pexels-photo-2837863.jpeg" },
  { title: "Water Leak Detection", href: "/service/water-leak-detection", img: "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg" },
  { title: "Water Heater Replacement", href: "/service/water-heater-replacement", img: "https://images.pexels.com/photos/4494656/pexels-photo-4494656.jpeg" },
  { title: "Water Heater Repair", href: "/service/water-heater-repair", img: "https://images.pexels.com/photos/372796/pexels-photo-372796.jpeg" },
  { title: "Water Heater Installation", href: "/service/water-heater-installation", img: "https://images.pexels.com/photos/220612/pexels-photo-220612.jpeg" },
  { title: "Water Filtration Installation", href: "/service/water-filtration-installation", img: "https://images.pexels.com/photos/2815899/pexels-photo-2815899.jpeg" },
  { title: "Tankless Water Heater Replacement", href: "/service/tankless-water-heater-replacement", img: "https://images.pexels.com/photos/87299/pexels-photo-87299.jpeg" },
  { title: "Tankless Water Heater Repair", href: "/service/tankless-water-heater-repair", img: "https://images.pexels.com/photos/3964796/pexels-photo-3964796.jpeg" },
  { title: "Tankless Water Heater Maintenance", href: "/service/tankless-water-heater-maintenance", img: "https://images.pexels.com/photos/4239115/pexels-photo-4239115.jpeg" },
  { title: "Tankless Water Heater Installation", href: "/service/tankless-water-heater-installation", img: "https://images.pexels.com/photos/2310904/pexels-photo-2310904.jpeg" },
  { title: "Sewer Pump Replacement", href: "/service/sewer-pump-replacement", img: "https://images.pexels.com/photos/586019/pexels-photo-586019.jpeg" },
  { title: "Sewer Pump Repair", href: "/service/sewer-pump-repair", img: "https://images.pexels.com/photos/5711732/pexels-photo-5711732.jpeg" },
  { title: "Sewer Pump Installation", href: "/service/sewer-pump-installation", img: "https://images.pexels.com/photos/633860/pexels-photo-633860.jpeg" },
  { title: "Sewer Line Replacement", href: "/service/sewer-line-replacement", img: "https://images.pexels.com/photos/1029635/pexels-photo-1029635.jpeg" },
  { title: "Sewer Line Repair", href: "/service/sewer-line-repair", img: "https://images.pexels.com/photos/3721272/pexels-photo-3721272.jpeg" },
  { title: "Sewer Line Installation", href: "/service/sewer-line-installation", img: "https://images.pexels.com/photos/4440227/pexels-photo-4440227.jpeg" },
  { title: "Sewer Cleaning", href: "/service/sewer-cleaning", img: "https://images.pexels.com/photos/2238808/pexels-photo-2238808.jpeg" },
  { title: "Plumbing Winterization Service", href: "/service/plumbing-winterization-service", img: "https://images.pexels.com/photos/2569839/pexels-photo-2569839.jpeg" },
  { title: "Pipe Coating Services", href: "/service/pipe-coating-services", img: "https://images.pexels.com/photos/3421636/pexels-photo-3421636.jpeg" },
  { title: "Outdoor Spigot Replacement", href: "/service/outdoor-spigot-replacement", img: "https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg" },
  { title: "Outdoor Spigot Repair", href: "/service/outdoor-spigot-repair", img: "https://images.pexels.com/photos/2455119/pexels-photo-2455119.jpeg" },
  { title: "Outdoor Spigot Installation", href: "/service/outdoor-spigot-installation", img: "https://images.pexels.com/photos/257770/pexels-photo-257770.jpeg" },
  { title: "Leak Detection Service", href: "/service/leak-detection", img: "https://images.pexels.com/photos/3964796/pexels-photo-3964796.jpeg" },
  { title: "Gas Line Replacement", href: "/service/gas-line-replacement", img: "https://images.pexels.com/photos/587889/pexels-photo-587889.jpeg" },
  { title: "Gas Line Repair", href: "/service/gas-line-repair", img: "https://images.pexels.com/photos/2837863/pexels-photo-2837863.jpeg" },
  { title: "Gas Line Installation", href: "/service/gas-line-installation", img: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg" },
  { title: "Gas Fireplace Installation", href: "/service/gas-fireplace-installation", img: "https://images.pexels.com/photos/372796/pexels-photo-372796.jpeg" },
  { title: "Garbage Disposal Replacement", href: "/service/garbage-disposal-replacement", img: "https://images.pexels.com/photos/87299/pexels-photo-87299.jpeg" },
  { title: "Floor Drain Cleaning", href: "/service/floor-drain-cleaning", img: "https://images.pexels.com/photos/3964796/pexels-photo-3964796.jpeg" },
  { title: "Faucet Repair", href: "/service/faucet-repair", img: "https://images.pexels.com/photos/220612/pexels-photo-220612.jpeg" },
  { title: "Faucet Installation", href: "/service/faucet-installation", img: "https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg" },
  { title: "Dishwasher Replacement", href: "/service/dishwasher-replacement", img: "https://images.pexels.com/photos/87299/pexels-photo-87299.jpeg" },
  { title: "Burst Pipe Repair", href: "/service/burst-pipe-repair", img: "https://images.pexels.com/photos/2238808/pexels-photo-2238808.jpeg" },
  { title: "Basic Plumbing Inspection", href: "/service/basic-plumbing-inspection", img: "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg" },
];

export default function ResidentialPlumberPage() {
  return (
    <>
      <Navbar />
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Crystal Drain & Plumbing</span>
          <h1>Residential Plumber</h1>
          <p>Welcome to the Residential Plumber section of Crystal Drain & Plumbing. Here, you&apos;ll find expert solutions tailored for your home&apos;s plumbing needs.</p>
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
