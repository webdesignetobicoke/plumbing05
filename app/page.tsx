import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import FAQList from "@/components/FAQList";
import HeroSection from "@/components/HeroSection";

// ─── DATA ──────────────────────────────────────────────────────────────────────
const allLocations = [
  { city: "Toronto, ON", zip: "M8X", slug: "toronto-on" },
  { city: "Mississauga, ON", zip: "L4W", slug: "mississauga-on" },
  { city: "Etobicoke, ON", zip: "M9C", slug: "etobicoke-on" },
  { city: "Scarborough, ON", zip: "M1G", slug: "scarborough-on" },
  { city: "North York, ON", zip: "M3J", slug: "north-york-on" },
  { city: "Oakville, ON", zip: "L6H", slug: "oakville-on" },
  { city: "Brampton, ON", zip: "L6V", slug: "brampton-on" },
  { city: "Hamilton, ON", zip: "L8H", slug: "hamilton-on" },
  { city: "Ajax, ON", zip: "L1S", slug: "ajax-on" },
  { city: "Pickering, ON", zip: "L1V", slug: "pickering-on" },
  { city: "Oshawa, ON", zip: "L1G", slug: "oshawa-on" },
  { city: "Whitby, ON", zip: "L1N", slug: "whitby-on" },
  { city: "Burlington, ON", zip: "L7R", slug: "burlington-on" },
  { city: "Richmond Hill, ON", zip: "L4B", slug: "richmond-hill-on" },
  { city: "Newmarket, ON", zip: "L3Y", slug: "newmarket-on" },
];

const plumbingServices = [
  {
    title: "BackWater Valve Installation",
    desc: "Prevent sewage backups and basement flooding with professional BackWater Valve installation.",
    cta: "Learn More About BackWater Valves",
    href: "/service/back-water-valve-installation",
    img: "/drain cleaning.jpeg",
  },
  {
    title: "Sewer Line Repairs & Replacements",
    desc: "Expert sewer line repair and replacement using advanced trenchless Pipe Burst technology.",
    cta: "Sewer Repair Services",
    href: "/service/sewer-line-repairs",
    img: "/sewar repair.jpeg",
  },
  {
    title: "Video Camera Inspection",
    desc: "Advanced video camera inspection to identify drainage issues without excavation.",
    cta: "Video Inspection Services",
    href: "/service/video-camera-inspection",
    img: "/main drain.webp",
  },
  {
    title: "Waterproofing & Sump Pump Installation",
    desc: "Complete waterproofing solutions and sump pump installation for basement protection.",
    cta: "Waterproofing Services",
    href: "/service/waterproofing-sump-pump",
    img: "/emergency plumbing.jpg",
  },
];

const hvacServices = [
  {
    title: "Water Service Installation",
    desc: "Install new copper water services using trenchless Torpedo technology.",
    cta: "Water Service Services",
    href: "/service/water-service-installation",
    img: "/power flushing.png",
  },
  {
    title: "Plumbing Installations & Repairs",
    desc: "Professional plumbing installations, repairs, and fixture replacements.",
    cta: "Plumbing Services",
    href: "/service/plumbing-installations",
    img: "/commercial plumbing.jpeg",
  },
];

const brands = [
  { name: "Toto", src: "https://cdn.prod.website-files.com/66f99713e14c68996f4f3756/671eabc651a636515fdd47b5_619682f0ca86cb0b5f8c66e5_Toto%2520Plumbing%2520Brand%2520Logo-p-2000.jpg" },
  { name: "Moen", src: "https://cdn.prod.website-files.com/66f99713e14c68996f4f3756/671eabc90923ab93604195eb_619682f0ca86cbf09e8c66ed_Moen%2520Plumbing%2520Brand%2520Logo-p-2000.jpg" },
  { name: "Kohler", src: "https://cdn.prod.website-files.com/66f99713e14c68996f4f3756/671eabced6db6b63e9ef6fc3_619682f0ca86cb59648c66f4_Kohler%20Plumbing%20Brand%20Logo.jpg" },
  { name: "Rheem", src: "https://cdn.prod.website-files.com/66f99713e14c68996f4f3756/671eabd02f9e377b98d2aa7e_619682f0ca86cbf8f68c66f9_fc2186e0279f863381b6c5e60f1f3dee.png" },
  { name: "Watts", src: "https://cdn.prod.website-files.com/66f99713e14c68996f4f3756/671eabd3ff2e27e86cadcf19_619682f0ca86cbc3098c6704_logo-f9ac6595b799acfb4432dce93e91d7749bff6db5d6e2a2fc7fe81b6f07813bbb.png" },
  { name: "Bradford White", src: "https://cdn.prod.website-files.com/66f99713e14c68996f4f3756/671eabd47ceef04e6cb3f6ef_619682f0ca86cb50be8c6706_bradford-white.png" },
  { name: "HALO", src: "https://cdn.prod.website-files.com/66f99713e14c68996f4f3756/671eabd672d463d63bb9e98d_619682f0ca86cb6e548c670a_HALO%20Brand%20Logo.png" },
  { name: "Wolverine Brass", src: "https://cdn.prod.website-files.com/66f99713e14c68996f4f3756/671eabd8997520a67a7c94da_63bdb42cbbee642db9efa4f6_Wolverine%20Brass%20Logo.png" },
  { name: "Gerber", src: "https://cdn.prod.website-files.com/66f99713e14c68996f4f3756/671eac0b6557e857761845fd_619682f0ca86cb83b58c66ff_Gerber%20Plumbing%20Brand%20Logo.jpg" },
  { name: "American Standard", src: "https://cdn.prod.website-files.com/66f99713e14c68996f4f3756/671eabdca5f1a82b0c159ca3_619682f0ca86cbe8578c670e_american-standard-logo.svg" },
];

const reviews = [
  { name: "Gratia Malone", location: "Etobicoke, ON", text: "We had Valentin from Strong Plumbing fix plumbing issues at our old house. He was right on time and upfront about fees. He fixed our kitchen taps and identified a toilet sealing issue. We're so pleased our basement is now odor free! I would highly recommend Strong Plumbing.", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },
  { name: "Json Walker", location: "Toronto, ON", text: "Valentin was prompt and courteous. His crew showed up on time and were very neat and tidy. Dennis was incredible. I would not hesitate to recommend this company! I've already referred them to many friends and family members.", img: "https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg" },
  { name: "Catherine", location: "Mississauga, ON", text: "Great workmanship, very skilled and honest. Strong Plumbing delivered exceptional service from start to finish.", img: "https://images.pexels.com/photos/2128906/pexels-photo-2128906.jpeg" },
  { name: "Kevin", location: "Toronto, ON", text: "Valentin contacted me quickly and gave a competitive quotation. His crew showed up early, worked professionally, and passed inspection. They also fixed other issues with pipes in our older home. I will definitely call for future plumbing needs.", img: "https://images.pexels.com/photos/2172282/pexels-photo-2172282.jpeg" },
  { name: "George McFarlen", location: "Toronto, ON", text: "We had a mid overflow in basement due to root penetration. Valentin came within hours with the best price. He managed the excavation and replacement work excellently, protecting the pipe from future root issues.", img: "https://images.pexels.com/photos/3719517/pexels-photo-3719517.jpeg" },
  { name: "Raja", location: "Mississauga, ON", text: "Strong Plumbing proposed Video Camera Drainage Inspection and gave a great price. After determining the issue, they provided the best price for excavation and fixing. My drainage system works perfectly now!", img: "https://images.pexels.com/photos/2128911/pexels-photo-2128911.jpeg" },
];

const articles = [
  { title: "Toronto Water Quality: What Every Homeowner Should Know", excerpt: "Understanding Toronto's water system and what it means for your home's plumbing. Learn about water hardness and treatment options for GTA homes.", img: "https://images.pexels.com/photos/11658940/pexels-photo-11658940.jpeg?w=600&h=400&fit=crop", href: "/blog" },
  { title: "Energy Rebates for Toronto Homeowners: Save on Your Plumbing Upgrades", excerpt: "Discover available rebates and incentives in Toronto for upgrading to energy-efficient plumbing and HVAC systems.", img: "https://images.pexels.com/photos/1029635/pexels-photo-1029635.jpeg?w=600&h=400&fit=crop", href: "/blog" },
  { title: "Winter Pipe Freezing Prevention Guide for Toronto Homes", excerpt: "Expert tips from Crystal Drain & Plumbing on how to prevent burst pipes during Toronto's harsh winters.", img: "https://images.pexels.com/photos/7937299/pexels-photo-7937299.jpeg?w=600&h=400&fit=crop", href: "/blog" },
  { title: "Drain Cleaning Technology: What's New in Toronto Plumbing", excerpt: "Learn about the latest drain cleaning and plumbing repair technology available to Greater Toronto Area homeowners.", img: "https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?w=600&h=400&fit=crop", href: "/blog" },
  { title: "Tankless Water Heaters: Toronto Homeowner's Guide", excerpt: "Comparing tankless vs traditional water heaters for Toronto homes. Find out which is best for your needs and budget.", img: "https://images.pexels.com/photos/7937300/pexels-photo-7937300.jpeg?w=600&h=400&fit=crop", href: "/blog" },
  { title: "Bathroom Plumbing Renovation Ideas for Toronto Homes", excerpt: "Transform your Toronto bathroom with modern plumbing solutions. Ideas for sink installations, fixtures, and layouts.", img: "https://images.pexels.com/photos/271631/pexels-photo-271631.jpeg?w=600&h=400&fit=crop", href: "/blog" },
];

const faqs = [
  { q: "What is a BackWater Valve and why do I need one?", a: "A BackWater Valve is a device installed on your sewer line to prevent sewage from flowing back into your home during floods or blockages. It's especially important in Toronto where many homes are susceptible to basement flooding. City of Toronto offers rebates up to $1,250 for installation." },
  { q: "Do you offer video camera drain inspection?", a: "Yes! We use advanced RIDGID video camera equipment to inspect your drainage system up to 200 feet. We can identify clogs, leaks, cracks, root penetration, and other issues without excavation. We provide recorded video documentation with each inspection." },
  { q: "What is Pipe Burst technology?", a: "Pipe Burst is a trenchless technology we use to replace broken sewer lines with new piping without extensive excavation. This method minimizes damage to your property and is significantly faster than traditional methods. We offer a 25-year full warranty on replaced pipes." },
  { q: "Do you use only copper for water services?", a: "Yes! We use only special K-type copper for underground water service installations. We strongly recommend avoiding plastic, PEX, or poly pipes for water services. Copper provides durability, reliability, and maintains water quality." },
  { q: "What are your service hours?", a: "We provide 24/7 emergency plumbing services throughout the Greater Toronto Area. Free estimates are available 9am-4pm M-F. We pride ourselves on fast response times for both routine and emergency service calls." },
];

function Stars() {
  return (
    <div className="review-stars">
      {[...Array(5)].map((_, i) => <span key={i} className="review-star">★</span>)}
    </div>
  );
}

function ServiceCard({ s }: { s: typeof plumbingServices[0] }) {
  return (
    <Link href={s.href} className="service-card">
      <div className="service-card-img">
        <Image src={s.img} alt={s.title} fill sizes="(max-width:768px) 100vw, 300px" />
      </div>
      <div className="service-card-body">
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
        <span className="service-card-link">{s.cta} →</span>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── LOCATION FINDER ──────────────────────────────────────────────── */}
      <section className="section location-finder">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Strong Plumbing Inc</span>
            <h2>Service Areas Across Greater Toronto Area</h2>
            <p>We service all Greater Toronto Area and surrounding regions. Find your service location:</p>
          </div>
          <div className="location-search">
            <input type="text" placeholder="Enter city or postal code..." />
            <button>Search</button>
          </div>
          <div className="locations-grid">
            {allLocations.map(loc => (
              <Link key={loc.slug} href={`/locations/${loc.slug}`} className="location-card">
                <div style={{ fontSize: "1.5rem", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px" }}>
                  📍
                </div>
                <div>
                  <div className="city">{loc.city}</div>
                  <div className="zip">{loc.zip}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BADGES ───────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#e8f3ff", paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Strong Plumbing Inc</span>
            <h2>Licensed & Certified Professionals</h2>
            <p>We maintain the highest industry standards and certifications to serve you with excellence and integrity.</p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            gap: "1.5rem",
            alignItems: "center"
          }}>
            {[
              { src: "/badges /HomeStars.png", alt: "HomeStars" },
              { src: "/badges /bbb logo.png", alt: "BBB" },
              { src: "/badges /google guaranteed logo.png", alt: "Google Guaranteed" },
              { src: "/badges /trust pilot reviews logo.png", alt: "TrustPilot" },
              { src: "/badges /yelp reviews logo.png", alt: "Yelp" },
              { src: "/badges /baeumler approved logo.png", alt: "Baeumler Approved" },
              { src: "/badges /toronto cash back program logo.png", alt: "Toronto Cash Back" },
              { src: "/badges /wsib cspaat ontario logo.png", alt: "WSIB" },
            ].map((badge, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src={badge.src} alt={badge.alt} width={80} height={80} style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap">
              <Image
                src="/about us.jpg"
                alt="Strong Plumbing Inc team"
                width={600} height={500}
              />
            </div>
            <div>
              <span className="eyebrow">Strong Plumbing Inc</span>
              <h2>About Us - Strong Plumbing Inc</h2>
              <div className="about-pillars">
                {[
                  { title: "34+ Years of Excellence", desc: "Over 34 years providing exceptional plumbing and drain services to residential and commercial sectors with Licensed Master Plumbers bonded and insured.", num: "1" },
                  { title: "Reliable & Honest Service", desc: "We handle jobs of any size with integrity, professionalism, and a commitment to minimizing property damage through advanced technologies.", num: "2" },
                  { title: "Advanced Technology", desc: "We use state-of-the-art equipment including RIDGID video cameras, Pipe Burst technology, and Torpedo trenchless solutions.", num: "3" },
                ].map(p => (
                  <div key={p.title} className="about-pillar">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", backgroundColor: "var(--primary)", color: "#fff", borderRadius: "50%", fontSize: "1.5rem", fontWeight: "bold", flexShrink: 0 }}>
                      {p.num}
                    </div>
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about-us" className="btn btn-outline-secondary">About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLUMBING SERVICES ────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Strong Plumbing Inc</span>
            <h2>Residential & Commercial Services</h2>
            <p>We offer a comprehensive range of expert plumbing and drain services for every need. From small repairs to major replacements.</p>
          </div>
          <div className="services-grid">
            {plumbingServices.map(s => <ServiceCard key={s.href} s={s} />)}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL SERVICES ────────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Strong Plumbing Inc</span>
            <h2>Specialized Solutions</h2>
            <p>Advanced plumbing technologies and specialized services for complex drainage and water issues.</p>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
            {hvacServices.map(s => <ServiceCard key={s.href} s={s} />)}
          </div>
        </div>
      </section>

      {/* ── SCHEDULE BANNER ──────────────────────────────────────────────── */}
      <a href="/contact-us" className="schedule-banner">
        <Image
          src="https://cdn.prod.website-files.com/66f99713e14c68996f4f3756/671e9b8e420cf85029140445_Plumbing%20Gold%20Leaf%20Standard%20-%20Aspen%20Mountain%20Plumbing.jpg"
          alt="Schedule Your Service"
          width={1440} height={500}
          style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
        />
        <div className="schedule-banner-overlay">
          <div className="schedule-banner-text">
            <span className="eyebrow" style={{ color: "rgba(201,168,76,0.9)", textAlign: "center", display: "block", marginBottom: "0.5rem" }}>Strong Plumbing Inc</span>
            <h2>Ready to Solve Your Plumbing Issue?</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.5rem" }}>Contact Strong Plumbing Inc for fast, professional, and reliable service. Available 24/7.</p>
            <span className="btn btn-primary">Call (416) 258-4068</span>
          </div>
        </div>
      </a>

      {/* ── STATS & BRANDS ───────────────────────────────────────────────── */}
      <section className="section stats-brands">
        <div className="container">
          <div className="section-header center" style={{ marginBottom: "2rem" }}>
            <span className="eyebrow" style={{ color: "rgba(201,168,76,0.85)" }}>Strong Plumbing Inc</span>
            <h2 style={{ color: "#fff" }}>Premium Plumbing Brands & Equipment</h2>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>We use industry-leading brands and advanced technology to deliver superior plumbing solutions.</p>
          </div>

          {/* Brand scroll */}
          <div className="brands-strip">
            <div className="brands-track">
              {[...brands, ...brands].map((b, i) => (
                <div key={i} className="brand-item">
                  <Image src={b.src} alt={b.name} width={120} height={40} />
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {[
              { value: "34+", label: "Years of Service" },
              { value: "Unlimited", label: "Availability (24/7)" },
              { value: "GTA+", label: "Service Coverage" },
              { value: "100%", label: "Licensed & Bonded" },
            ].map(s => (
              <div key={s.label} className="stat-item">
                <div className="stat-value" style={{ color: "rgba(201,168,76,0.9)", fontWeight: 900, fontSize: "2.5rem" }}>{s.value}</div>
                <div className="stat-label" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section className="section" id="reviews">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Strong Plumbing Inc</span>
            <h2>Customer Testimonials</h2>
            <p>Read what homeowners and businesses are saying about Strong Plumbing Inc's professional service and expertise.</p>
          </div>
          <div className="reviews-grid">
            {reviews.map(r => (
              <div key={r.name} className="review-card">
                <Stars />
                <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                <div className="review-author">
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.9rem", flexShrink: 0 }}>
                    {r.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-location">{r.location} · HOMESTARS</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span className="eyebrow">Crystal Drain & Plumbing</span>
              <h2>Our Latest Articles</h2>
              <p>Check out Crystal Drain & Plumbing's up-to-date content on all things drain cleaning and plumbing services.</p>
            </div>
            <Link href="/blog" className="btn btn-outline-secondary" style={{ flexShrink: 0 }}>Our Blog</Link>
          </div>
          <div className="blog-grid">
            {articles.map(a => (
              <Link key={a.href} href={a.href} className="blog-card">
                <div className="blog-card-img">
                  <Image src={a.img} alt={a.title} fill sizes="(max-width:768px) 100vw, 360px" />
                </div>
                <div className="blog-card-body">
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <span className="blog-card-link">Full Article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Strong Plumbing Inc</span>
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common questions about our plumbing and drain services.</p>
          </div>
          <FAQList faqs={faqs} />
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <p style={{ color: "var(--text-mid)", marginBottom: "1rem", fontWeight: 700 }}>Still have questions?</p>
            <p style={{ color: "var(--text-mid)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>Feel free to reach out to Strong Plumbing Inc. We're here to help!</p>
            <Link href="/contact-us" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

      <GoldLeafCTA />
      <Footer />
    </>
  );
}
