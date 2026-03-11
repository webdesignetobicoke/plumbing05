import Image from "next/image";
import Link from "next/link";

const WEBCLIP = "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Brand col */}
        <div className="footer-col-brand">
          <div className="logo">
            <Link href="/"><Image src="/plumbing%20company%20-%20logos/strong%20plumbing%20logo.png" alt="Strong Plumbing Inc" width={180} height={46} /></Link>
          </div>
          <a href="tel:+14162584068" className="footer-phone">(416) 258-4068</a>
          <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", margin: "0.5rem 0 0 0" }}>contact@strongplumbinginc.com</p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", margin: "0.25rem 0 1rem 0" }}>18 King St East Suite #1400, Toronto ON</p>
          <Link href="/contact-us" className="btn btn-primary" style={{ fontSize: "0.7rem", padding: "0.7rem 1.25rem" }}>
            Schedule Service
          </Link>
        </div>

        {/* Plumbing */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/service/back-water-valve-installation">BackWater Valves</Link></li>
            <li><Link href="/service/sewer-line-repairs">Sewer Line Repairs</Link></li>
            <li><Link href="/service/video-camera-inspection">Video Inspection</Link></li>
            <li><Link href="/service/plumbing-installations">Plumbing Repairs</Link></li>
            <li><Link href="/service/waterproofing-sump-pump">Waterproofing</Link></li>
            <li><Link href="/service/water-service-installation">Water Services</Link></li>
          </ul>
        </div>

        {/* Locations */}
        <div className="footer-col">
          <h4>GTA Locations</h4>
          <ul>
            <li><Link href="/service-county/greater-toronto-area">Greater Toronto Area</Link></li>
            <li><Link href="/service-county/durham-region">Durham Region</Link></li>
            <li><Link href="/service-county/halton-region">Halton Region</Link></li>
            <li><Link href="/service-county/york-region">York Region</Link></li>
            <li><Link href="/service-county/niagara-region">Niagara Region</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/jobs">Hiring</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/financing">Financing</Link></li>
            <li><Link href="/social-media-profiles">Social Media Links</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><Link href="/contact-us">Schedule Service</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="/contact-us">Review Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Strong Plumbing Inc. All rights reserved. METRO License T95-3952530 / T94-4176905 / Master Plumbing License P#22280</p>
        <div className="footer-social">
          {[...Array(5)].map((_, i) => (
            <a key={i} href="#" className="footer-social-icon">
              <Image src={WEBCLIP} alt="" width={16} height={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
