"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LOGO = "/plumbing%20company%20-%20logos/strong%20plumbing%20logo.png";

const plumbingServices = [
  {
    label: "Drain Cleaning",
    href: "/service-type/clogged-drains",
    subServices: [
      { label: "Bathroom Drain Cleaning", href: "/service/bathroom-drain-cleaning" },
      { label: "Kitchen Drain Cleaning", href: "/service/kitchen-drain-cleaning" },
      { label: "Shower Drain Cleaning", href: "/service/shower-drain-cleaning" },
      { label: "Toilet Drain Cleaning", href: "/service/toilet-drain-cleaning" },
      { label: "Floor Drain Cleaning", href: "/service/floor-drain-cleaning" },
      { label: "Drain Camera Inspection", href: "/service/drain-camera-inspection" },
      { label: "Hydro-Jetting", href: "/service/hydro-jetting" },
    ]
  },
  {
    label: "Sewer Repair",
    href: "/service-type/residential-plumber",
    subServices: [
      { label: "Sewer Line Repair", href: "/service/sewer-line-repair" },
      { label: "Sewer Line Replacement", href: "/service/sewer-line-replacement" },
      { label: "Sewer Line Installation", href: "/service/sewer-line-installation" },
      { label: "Sewer Pump Repair", href: "/service/sewer-pump-repair" },
      { label: "Sewer Pump Replacement", href: "/service/sewer-pump-replacement" },
      { label: "Grease Trap Cleaning", href: "/service/grease-trap-cleaning" },
    ]
  },
  {
    label: "Main Drain",
    href: "/service-type/bathroom-plumber",
    subServices: [
      { label: "Main Line Drain Cleaning", href: "/service/main-line-drain-cleaning" },
    ]
  },
  {
    label: "Power Flushing",
    href: "/service-type/kitchen-plumber",
    subServices: [
      { label: "Power Flushing", href: "/service/power-flushing" },
      { label: "Pipe Coating Services", href: "/service/pipe-coating-services" },
    ]
  },
  {
    label: "Commercial Services",
    href: "/service/commercial-services",
    subServices: [
      { label: "Commercial Clogged Drains", href: "/service/commercial-clogged-drain-services" },
    ]
  },
  {
    label: "Water Leak Detection",
    href: "/service/water-leak-detection",
    subServices: [
      { label: "Leak Detection", href: "/service/leak-detection" },
      { label: "Water Line Repair", href: "/service/water-line-repair" },
      { label: "Water Line Installation", href: "/service/water-line-installation" },
    ]
  },
  {
    label: "Gas Line Services",
    href: "/service/gas-line-repair",
    subServices: [
      { label: "Gas Line Installation", href: "/service/gas-line-installation" },
      { label: "Gas Line Repair", href: "/service/gas-line-repair" },
      { label: "Gas Line Replacement", href: "/service/gas-line-replacement" },
    ]
  },
  {
    label: "Emergency Plumbing",
    href: "/service/burst-pipe-repair",
    subServices: [
      { label: "Burst Pipe Repair", href: "/service/burst-pipe-repair" },
      { label: "Plumbing Winterization", href: "/service/plumbing-winterization-service" },
    ]
  },
  {
    label: "Water Heater Services",
    href: "/service/water-heater-repair",
    subServices: [
      { label: "Water Heater Installation", href: "/service/water-heater-installation" },
      { label: "Water Heater Repair", href: "/service/water-heater-repair" },
      { label: "Water Heater Replacement", href: "/service/water-heater-replacement" },
      { label: "Tankless Water Heater Installation", href: "/service/tankless-water-heater-installation" },
      { label: "Tankless Water Heater Repair", href: "/service/tankless-water-heater-repair" },
    ]
  },
];
const hvacServices = [
  {
    label: "Home Heating",
    href: "/service-type/home-heating",
    subServices: [
      { label: "Furnace Installation", href: "/service/furnace-installation" },
      { label: "Furnace Repair", href: "/service/furnace-repair" },
      { label: "Furnace Replacement", href: "/service/furnace-replacement" },
      { label: "Furnace Maintenance", href: "/service/furnace-maintenance" },
      { label: "Boiler Repair", href: "/service/boiler-repair" },
      { label: "Boiler Installation", href: "/service/boiler-installation" },
      { label: "Heat Pump Installation", href: "/service/heat-pump-installation" },
      { label: "Heat Pump Repair", href: "/service/heat-pump-repair" },
      { label: "Annual Heating Tune-Up", href: "/service/annual-heating-tune-up" },
    ]
  },
  {
    label: "Air Conditioning",
    href: "/service-type/air-conditioning"
  },
];
const primaryLocations = [
  { label: "Toronto, ON", href: "/locations/toronto-on" },
  { label: "Mississauga, ON", href: "/locations/mississauga-on" },
  { label: "Etobicoke, ON", href: "/locations/etobicoke-on" },
  { label: "Scarborough, ON", href: "/locations/scarborough-on" },
  { label: "North York, ON", href: "/locations/north-york-on" },
  { label: "Oakville, ON", href: "/locations/oakville-on" },
  { label: "Brampton, ON", href: "/locations/brampton-on" },
  { label: "Hamilton, ON", href: "/locations/hamilton-on" },
  { label: "Ajax, ON", href: "/locations/ajax-on" },
  { label: "Pickering, ON", href: "/locations/pickering-on" },
  { label: "Oshawa, ON", href: "/locations/oshawa-on" },
  { label: "Whitby, ON", href: "/locations/whitby-on" },
  { label: "Burlington, ON", href: "/locations/burlington-on" },
  { label: "Richmond Hill, ON", href: "/locations/richmond-hill-on" },
  { label: "Newmarket, ON", href: "/locations/newmarket-on" },
];
const counties = [
  { label: "Greater Toronto Area", href: "/service-county/greater-toronto-area" },
  { label: "Niagara Region", href: "/service-county/niagara-region" },
  { label: "Durham Region", href: "/service-county/durham-region" },
  { label: "Halton Region", href: "/service-county/halton-region" },
  { label: "York Region", href: "/service-county/york-region" },
];
const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
  { label: "Video Vault", href: "/videos" },
  { label: "Social Media", href: "/social-media-profiles" },
  { label: "Gold Leaf Club", href: "/gold-leaf-club" },
  { label: "Leasing Program", href: "/leasing-program" },
  { label: "Franchising", href: "/franchising" },
  { label: "Photo Upload", href: "/photo-upload" },
  { label: "Hiring", href: "/jobs" },
  { label: "Financing", href: "/financing" },
];
const contactLinks = [
  { label: "Schedule Service", href: "/contact-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Write a Review", href: "/write-review" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [expandedSubService, setExpandedSubService] = useState<string | null>(null);

  const toggleSection = (s: string) =>
    setMobileSection(mobileSection === s ? null : s);

  const toggleSubService = (key: string) =>
    setExpandedSubService(expandedSubService === key ? null : key);

  const ChevronDown = () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
      <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );

  return (
    <>
      <nav className="navbar">
        {/* Purple Header */}
        <div className="navbar-header">
          <div className="navbar-header-inner">
            {/* Logo */}
            <Link href="/" className="nav-logo">
              <Image src={LOGO} alt="Strong Plumbing Inc" width={3600} height={900} priority />
            </Link>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <Link href="/contact-us" className="btn btn-accent">Schedule Service</Link>
              <a href="tel:+14162584068" className="nav-phone">(416) 258-4068</a>
              {/* Mobile button */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                style={{ color: "white" }}
              >
                {mobileOpen ? (
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="navbar-inner">
          {/* Desktop nav */}
          <ul className="nav-links">
            <li className="nav-item"><Link href="/">Home</Link></li>

            {/* Plumbing */}
            <li className="nav-item">
              <button>Plumbing Services <ChevronDown /></button>
              <div className="nav-dropdown">
                {plumbingServices.map(s => (
                  <div key={s.href} className="nav-dropdown-item-wrapper">
                    <Link href={s.href}>{s.label}</Link>
                    {s.subServices && (
                      <div className="nav-sub-dropdown">
                        {s.subServices.map(sub => (
                          <Link key={sub.href} href={sub.href}>{sub.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </li>

            {/* HVAC */}
            <li className="nav-item">
              <button>HVAC <ChevronDown /></button>
              <div className="nav-dropdown">
                {hvacServices.map(s => (
                  <div key={s.href} className="nav-dropdown-item-wrapper">
                    <Link href={s.href}>{s.label}</Link>
                    {s.subServices && (
                      <div className="nav-sub-dropdown">
                        {s.subServices.map(sub => (
                          <Link key={sub.href} href={sub.href}>{sub.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </li>

            {/* Service Areas */}
            <li className="nav-item">
              <button>Service Areas <ChevronDown /></button>
              <div className="nav-dropdown">
                {primaryLocations.map(l => (
                  <Link key={l.href} href={l.href}>{l.label}</Link>
                ))}
              </div>
            </li>

            {/* Company */}
            <li className="nav-item">
              <button>About Us <ChevronDown /></button>
              <div className="nav-dropdown" style={{ minWidth: 260 }}>
                {companyLinks.map(l => (
                  <Link key={l.href} href={l.href}>{l.label}</Link>
                ))}
              </div>
            </li>

            <li className="nav-item"><Link href="/blog">Blog</Link></li>
            <li className="nav-item"><Link href="/reviews">Reviews</Link></li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
          <div className="mobile-nav-inner">
            <Link href="/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Home</Link>

            {/* Plumbing accordion */}
            <button 
              className="mobile-nav-link" 
              style={{ background: "none", border: "none", cursor: "pointer", width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between" }} 
              onClick={() => toggleSection("plumbing")}
              aria-expanded={mobileSection === "plumbing"}
            >
              Plumbing Services <ChevronDown />
            </button>
            {mobileSection === "plumbing" && (
              <div className="mobile-nav-section">
                {plumbingServices.map(s => (
                  <div key={s.href}>
                    {s.subServices ? (
                      <button
                        onClick={() => toggleSubService(s.href)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          width: "100%",
                          textAlign: "left",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0.4rem 0 0.4rem 0.75rem",
                          color: "#ffffff",
                          fontSize: "0.82rem",
                          fontFamily: "'Montserrat', sans-serif"
                        }}
                        className="mobile-nav-sub-link-expandable"
                      >
                        {s.label}
                        <span style={{
                          transform: expandedSubService === s.href ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                          display: "inline-flex",
                          alignItems: "center"
                        }}>
                          <ChevronDown />
                        </span>
                      </button>
                    ) : (
                      <Link href={s.href} className="mobile-nav-sub-link" onClick={() => setMobileOpen(false)}>{s.label}</Link>
                    )}
                    {s.subServices && expandedSubService === s.href && (
                      <div className="mobile-nav-sub-section">
                        {s.subServices.map(sub => (
                          <Link key={sub.href} href={sub.href} className="mobile-nav-sub-sub-link" onClick={() => setMobileOpen(false)}>{sub.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* HVAC accordion */}
            <button 
              className="mobile-nav-link" 
              style={{ background: "none", border: "none", cursor: "pointer", width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between" }} 
              onClick={() => toggleSection("hvac")}
              aria-expanded={mobileSection === "hvac"}
            >
              HVAC <ChevronDown />
            </button>
            {mobileSection === "hvac" && (
              <div className="mobile-nav-section">
                {hvacServices.map(s => (
                  <div key={s.href}>
                    {s.subServices ? (
                      <button
                        onClick={() => toggleSubService(s.href)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          width: "100%",
                          textAlign: "left",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0.4rem 0 0.4rem 0.75rem",
                          color: "#ffffff",
                          fontSize: "0.82rem",
                          fontFamily: "'Montserrat', sans-serif"
                        }}
                        className="mobile-nav-sub-link-expandable"
                      >
                        {s.label}
                        <span style={{
                          transform: expandedSubService === s.href ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                          display: "inline-flex",
                          alignItems: "center"
                        }}>
                          <ChevronDown />
                        </span>
                      </button>
                    ) : (
                      <Link href={s.href} className="mobile-nav-sub-link" onClick={() => setMobileOpen(false)}>{s.label}</Link>
                    )}
                    {s.subServices && expandedSubService === s.href && (
                      <div className="mobile-nav-sub-section">
                        {s.subServices.map(sub => (
                          <Link key={sub.href} href={sub.href} className="mobile-nav-sub-sub-link" onClick={() => setMobileOpen(false)}>{sub.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <button 
              className="mobile-nav-link" 
              style={{ background: "none", border: "none", cursor: "pointer", width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between" }} 
              onClick={() => toggleSection("company")}
              aria-expanded={mobileSection === "company"}
            >
              About Us <ChevronDown />
            </button>
            {mobileSection === "company" && (
              <div className="mobile-nav-section">
                {companyLinks.map(l => <Link key={l.href} href={l.href} className="mobile-nav-sub-link" onClick={() => setMobileOpen(false)}>{l.label}</Link>)}
              </div>
            )}

            <Link href="/blog" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/reviews" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Reviews</Link>

            <a href="tel:+14162584068" className="mobile-nav-phone">(416) 258-4068</a>
            <div style={{ marginTop: "1.25rem" }}>
              <Link href="/contact-us" className="btn btn-accent" style={{ display: "block", textAlign: "center" }} onClick={() => setMobileOpen(false)}>
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
