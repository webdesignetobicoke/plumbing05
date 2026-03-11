import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toronto Plumbing & HVAC Tips | Crystal Drain & Plumbing Blog",
  description: "Expert plumbing and drain cleaning tips for Toronto GTA homeowners from Crystal Drain & Plumbing.",
};

const featuredPosts = [
  {
    title: "Toronto Water Quality: What Every Homeowner Should Know",
    excerpt: "Understanding Toronto's water system and what it means for your home's plumbing and health. Learn about water hardness and treatment options.",
    img: "https://images.pexels.com/photos/11658940/pexels-photo-11658940.jpeg?w=600&h=400&fit=crop",
    href: "#",
  },
  {
    title: "Winter Pipe Freezing Prevention Guide for Toronto Homes",
    excerpt: "Expert tips from Crystal Drain & Plumbing on how to prevent burst pipes during Toronto's harsh winters.",
    img: "https://images.pexels.com/photos/7937299/pexels-photo-7937299.jpeg?w=600&h=400&fit=crop",
    href: "#",
  },
  {
    title: "Drain Cleaning Technology: What's New in Toronto Plumbing",
    excerpt: "Learn about the latest drain cleaning and plumbing repair technology available to Greater Toronto Area homeowners.",
    img: "https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?w=600&h=400&fit=crop",
    href: "#",
  },
  {
    title: "Tankless Water Heaters: Toronto Homeowner's Guide",
    excerpt: "Comparing tankless vs traditional water heaters for Toronto homes. Find out which is best for your needs and budget.",
    img: "https://images.pexels.com/photos/7937300/pexels-photo-7937300.jpeg?w=600&h=400&fit=crop",
    href: "#",
  },
  {
    title: "Energy Rebates for Toronto Homeowners: Save on Your Plumbing Upgrades",
    excerpt: "Discover available rebates and incentives in Toronto for upgrading to energy-efficient plumbing and HVAC systems.",
    img: "https://images.pexels.com/photos/1029635/pexels-photo-1029635.jpeg?w=600&h=400&fit=crop",
    href: "#",
  },
  {
    title: "Bathroom Plumbing Renovation Ideas for Toronto Homes",
    excerpt: "Transform your Toronto bathroom with modern plumbing solutions. Ideas for sink installations, fixtures, and layouts.",
    img: "https://images.pexels.com/photos/271631/pexels-photo-271631.jpeg?w=600&h=400&fit=crop",
    href: "#",
  },
];

const allPosts = [
  { title: "Toronto Water Quality: What Every Homeowner Should Know", img: "https://images.pexels.com/photos/11658940/pexels-photo-11658940.jpeg?w=600&h=400&fit=crop", href: "#", cat: "Plumbing" },
  { title: "Winter Pipe Freezing Prevention Guide for Toronto Homes", img: "https://images.pexels.com/photos/7937299/pexels-photo-7937299.jpeg?w=600&h=400&fit=crop", href: "#", cat: "Plumbing" },
  { title: "Drain Cleaning Technology: What's New in Toronto Plumbing", img: "https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?w=600&h=400&fit=crop", href: "#", cat: "Plumbing" },
  { title: "Tankless Water Heaters: Toronto Homeowner's Guide", img: "https://images.pexels.com/photos/7937300/pexels-photo-7937300.jpeg?w=600&h=400&fit=crop", href: "#", cat: "HVAC" },
  { title: "Energy Rebates for Toronto Homeowners", img: "https://images.pexels.com/photos/1029635/pexels-photo-1029635.jpeg?w=600&h=400&fit=crop", href: "#", cat: "HVAC" },
  { title: "Bathroom Plumbing Renovation Ideas", img: "https://images.pexels.com/photos/271631/pexels-photo-271631.jpeg?w=600&h=400&fit=crop", href: "#", cat: "Plumbing" },
  { title: "Kitchen Drain Care & Maintenance", img: "https://images.pexels.com/photos/87299/pexels-photo-87299.jpeg?w=600&h=400&fit=crop", href: "#", cat: "Plumbing" },
  { title: "Toronto HVAC System Maintenance Tips", img: "https://images.pexels.com/photos/5632637/pexels-photo-5632637.jpeg?w=600&h=400&fit=crop", href: "#", cat: "HVAC" },
  { title: "Sewer Repair & Replacement in Greater Toronto Area", img: "https://images.pexels.com/photos/4239115/pexels-photo-4239115.jpeg?w=600&h=400&fit=crop", href: "#", cat: "Plumbing" },
  { title: "Emergency Plumbing: When to Call Crystal Drain", img: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?w=600&h=400&fit=crop", href: "#", cat: "Plumbing" },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Crystal Drain & Plumbing</span>
          <h1>The Crystal Drain & Plumbing Blog</h1>
          <p>Expert tips for Toronto GTA homeowners.</p>
        </div>
      </section>

      {/* Featured posts */}
      <section className="section">
        <div className="container">
          <div className="blog-featured" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {featuredPosts.map(post => (
              <Link key={post.href} href={post.href} className="blog-card">
                <div className="blog-card-img">
                  <Image src={post.img} alt={post.title} fill sizes="360px" />
                  <span className="blog-card-tag">Featured</span>
                </div>
                <div className="blog-card-body">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="blog-card-link">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All posts */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="section-header">
            <h2>All Crystal Drain & Plumbing Blog Articles</h2>
          </div>
          <div className="blog-grid">
            {allPosts.map(post => (
              <Link key={post.href} href={post.href} className="blog-card">
                <div className="blog-card-img">
                  <Image src={post.img} alt={post.title} fill sizes="360px" />
                  <span className="blog-card-tag">{post.cat}</span>
                </div>
                <div className="blog-card-body">
                  <h3>{post.title}</h3>
                  <span className="blog-card-link">Read more →</span>
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
