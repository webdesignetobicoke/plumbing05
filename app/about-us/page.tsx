import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Strong Plumbing Inc: Toronto's Premier Licensed Master Plumbers | 34+ Years",
  description: "Strong Plumbing Inc has over 34 years of experience providing expert drain and plumbing services to Toronto and the GTA. Licensed Master Plumbers, bonded and insured. 24/7 emergency services.",
};

const timeline = [
  { year: "1990", text: "Strong Plumbing founded with a commitment to excellence in draining and plumbing services." },
  { year: "2000", text: "Expanded operations with fully licensed Master Plumbers team across Greater Toronto Area." },
  { year: "2010", text: "Introduced advanced video camera inspection and Pipe Burst technology for trenchless repairs." },
  { year: "2015", text: "Achieved METRO licensing T95-3952530 / T94-4176905 and Master Plumbing License P#22280." },
  { year: "2018", text: "Added Waterproofing and Sump Pump installation services with City of Toronto certifications." },
  { year: "2020", text: "Expanded to Mississauga with local Master Plumber licenses (2024 008613 TC and 2024 008615 TM)." },
  { year: "2024", text: "Strong Plumbing Inc continues as the most reliable and honest plumbing company in Greater Toronto Area with 34+ years of proven excellence." },
];

const teamMembers = [
  {
    name: "Valentin",
    role: "Owner & Master Plumber",
    bio: "Valentin brings 34+ years of master plumbing expertise to Strong Plumbing Inc. His commitment to quality, honesty, and customer satisfaction has made Strong Plumbing the most trusted plumbing company in Greater Toronto Area.",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    cta: "(416) 258-4068",
    ctaHref: "tel:+14162584068",
  },
  {
    name: "Dennis",
    role: "Lead Plumbing Technician",
    bio: "Dennis is one of Strong Plumbing's most experienced technicians, known for his neat work, professionalism, and prompt service. His dedication ensures every project meets our high standards.",
    img: "https://images.pexels.com/photos/2128911/pexels-photo-2128911.jpeg",
    cta: "SCHEDULE SERVICE",
    ctaHref: "/contact-us",
  },
  {
    name: "Master Plumber Team",
    role: "Licensed & Bonded Specialists",
    bio: "Our team of Licensed Master Plumbers brings expertise in BackWater Valve installation, Sewer Line repairs, Video Camera inspection, and advanced trenchless technologies for residential and commercial needs.",
    img: "https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg",
    cta: "(416) 258-4068",
    ctaHref: "tel:+14162584068",
  },
  {
    name: "Professional Craftspeople",
    role: "Pipe Burst & Waterproofing Experts",
    bio: "Our specialists are trained in the latest technology including Hydraulic and Pneumatic Pipe Burst, Torpedo water service installation, and complete waterproofing solutions with sump pump installation.",
    img: "https://images.pexels.com/photos/2128906/pexels-photo-2128906.jpeg",
    cta: "SCHEDULE SERVICE",
    ctaHref: "/contact-us",
  },
  {
    name: "Customer Service Team",
    role: "24/7 Support & Dispatch",
    bio: "Strong Plumbing provides round-the-clock customer support and emergency dispatch. We make scheduling easy with free estimates 9am-4pm M-F and emergency response 24/7 across the GTA.",
    img: "https://images.pexels.com/photos/3719517/pexels-photo-3719517.jpeg",
    cta: "(416) 258-4068",
    ctaHref: "tel:+14162584068",
  },
  {
    name: "City Inspector Coordination",
    role: "Permit & Rebate Specialists",
    bio: "We handle all permit applications and coordinate with City inspectors for BackWater Valves and waterproofing work. We help you maximize rebates: up to $1,250 from Toronto, $750 from Mississauga, and more.",
    img: "https://images.pexels.com/photos/2172282/pexels-photo-2172282.jpeg",
    cta: "(416) 258-4068",
    ctaHref: "tel:+14162584068",
  },
  {
    name: "Copper Water Service Team",
    role: "Water Line Installation Experts",
    bio: "Specialists in installing new copper water services using trenchless Torpedo technology. We use only special K-type copper for underground installations, never plastic or PEX pipes.",
    img: "https://images.pexels.com/photos/2128910/pexels-photo-2128910.jpeg",
    cta: "(416) 258-4068",
    ctaHref: "tel:+14162584068",
  },
  {
    name: "Video Camera Inspection Team",
    role: "Advanced Diagnostics Specialists",
    bio: "Using RIDGID video camera equipment, we provide detailed drain inspections with recorded video documentation. We locate issues up to 200 feet and provide precise estimates for repairs.",
    img: "https://images.pexels.com/photos/2733917/pexels-photo-2733917.jpeg",
    cta: "(416) 258-4068",
    ctaHref: "tel:+14162584068",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Strong Plumbing Inc</span>
          <h1>About Strong Plumbing Inc</h1>
          <p>Over 34 years of expert draining and plumbing services for residential and commercial sectors. Licensed Master Plumbers, bonded and insured. 24/7 emergency services across Greater Toronto Area.</p>
          <div className="page-hero-btns">
            <a href="tel:+14162584068" className="btn btn-outline-white">(416) 258-4068</a>
            <a href="/contact-us" className="btn btn-accent">Schedule Service</a>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <span className="eyebrow">Strong Plumbing Inc</span>
              <h2>Our 34-Year Journey</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: "2.5rem" }}>
                Strong Plumbing Inc has been serving Greater Toronto Area with exceptional draining and plumbing services for over 34 years. We provide a wide range of services for residential and commercial needs with Licensed Master Plumbers bonded and insured.
              </p>
              <div className="timeline">
                {timeline.map(item => (
                  <div key={item.year} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-year">{item.year}</div>
                    <p className="timeline-text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality cards */}
            <div>
              <div style={{ marginBottom: "2rem" }}>
                <span className="eyebrow">Strong Plumbing Inc</span>
                <h2>The Most Reliable & Honest Plumbing Company</h2>
                <p style={{ color: "var(--text-mid)", marginBottom: "2rem" }}>
                  Strong Plumbing Inc is known throughout Greater Toronto Area for quality, professionalism, and honesty. For small to large jobs, we're here to help with advanced technology and expert craftsmanship.
                </p>
                <div style={{ display: "grid", gap: "1.25rem" }}>
                  {[
                    { title: "Proven Quality", desc: "25-year warranty on sewer line replacements and proven track record of excellence." },
                    { title: "Licensed & Certified", desc: "METRO License T95-3952530 / T94-4176905 / Master Plumbing License P#22280. Mississauga Licenses 2024 008613 TC and 2024 008615 TM." },
                  ].map(card => (
                    <div key={card.title} style={{ background: "var(--cream)", padding: "1.5rem", borderLeft: "3px solid var(--accent)" }}>
                      <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>{card.title}</h3>
                      <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", margin: 0 }}>{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Image
                src="https://images.pexels.com/photos/3964796/pexels-photo-3964796.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Strong Plumbing Inc Professional Team"
                width={600} height={380}
                style={{ width: "100%", height: "280px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Strong Plumbing Inc</span>
            <h2>Our Expert Team</h2>
            <p>Licensed Master Plumbers with 34+ years of combined experience and expertise in advanced plumbing technologies.</p>
            <div style={{ marginTop: "1rem" }}>
              <Link href="/jobs" className="btn btn-primary">Now Hiring!</Link>
            </div>
          </div>

          <div className="team-grid">
            {teamMembers.map(m => (
              <div key={m.name} className="team-card">
                <div className="team-card-img">
                  <Image src={m.img} alt={m.name} fill sizes="240px" />
                </div>
                <div className="team-card-body">
                  <div className="team-card-name">{m.name}</div>
                  <div className="team-card-role">{m.role}</div>
                  <p className="team-card-bio">{m.bio}</p>
                  <a href={m.ctaHref}>{m.cta}</a>
                </div>
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
