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
            EXPERT PLUMBING & DRAIN SERVICES
          </h1>
          
          <p className="hero-simple-tagline animate-up animate-up-1">
            Protecting Your Home Since 34+ Years
          </p>

          {/* Features List */}
          <ul className="hero-simple-features animate-up animate-up-2">
            <li>
              <span className="check">✓</span>
              <span>Expert Drain Snaking Service to Clear Clogs Fast</span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>Our team is certified and trained</span>
            </li>
            <li>
              <span className="check">✓</span>
              <span>All services are guaranteed</span>
            </li>
          </ul>

          {/* Ratings & Badges */}
          <div className="hero-simple-ratings animate-up animate-up-3">
            <div className="ratings-grid">
              {/* Google Guaranteed */}
              <div className="rating-badge">
                <Image
                  src="/badges/google%20guaranteed%20logo.png"
                  alt="Google Guaranteed"
                  width={60}
                  height={60}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="rating-badge-text">
                  <span className="reviews-count">Over 1,244 repair reviews</span>
                </div>
              </div>

              {/* HomeStars */}
              <div className="rating-badge">
                <Image
                  src="/badges/homestars.webp"
                  alt="HomeStars Verified"
                  width={60}
                  height={60}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="rating-badge-text">
                  <span className="verified-text">Verified customer feedback</span>
                </div>
              </div>
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
