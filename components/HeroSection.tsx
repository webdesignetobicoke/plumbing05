import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-simple">
      <div className="hero-simple-container">
        {/* Left Content */}
        <div className="hero-simple-content">
          <h1 className="hero-simple-title animate-up">
            Expert <span>Plumbing & Drain</span> Services
          </h1>
          
          <p className="hero-simple-tagline animate-up animate-up-1">
            Protecting Your Home Since 34+ Years
          </p>

          {/* Features List */}
          <ul className="hero-simple-features animate-up animate-up-2">
            <li>
              <span className="check">✓</span>
              <span>Licensed Master Plumbers</span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>24/7 Emergency Services</span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>Upfront Pricing</span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>Same-Day Service</span>
            </li>
          </ul>

          {/* Badges */}
          <div className="hero-simple-badges animate-up animate-up-3">
            <div className="badge">
              <strong className="stars-rating">★★★★★</strong>
              <span>HOMESTARS Trusted</span>
            </div>
            <div className="badge">
              <strong className="badge-plus">A+</strong>
              <span>BBB Accredited</span>
            </div>
          </div>

          {/* CTA */}
          <div className="hero-simple-cta animate-up animate-up-3">
            <a href="/contact-us" className="btn btn-accent btn-lg">Schedule Service</a>
            <a href="tel:+14162584068" className="btn btn-phone btn-lg">(416) 258-4068</a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-simple-image animate-up animate-up-1">
          <Image
            src="/hero image.jpg"
            alt="Strong Plumbing Inc team"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
}
