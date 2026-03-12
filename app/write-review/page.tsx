"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";

export default function WriteReviewPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--primary)", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Strong Plumbing Inc</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "1rem" }}>Write a Review</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 600, margin: "0 auto" }}>
            Share your experience with Strong Plumbing Inc and help other Toronto homeowners find trusted plumbing services.
          </p>
        </div>
      </section>

      {/* ── FORM SECTION ────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 600 }}>
          <form style={{ background: "#fff", padding: "2rem", border: "1px solid #e8e8e8", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
            {/* Star Rating */}
            <div style={{ marginBottom: "2rem" }}>
              <label style={{ display: "block", fontWeight: 700, color: "var(--primary)", marginBottom: "0.75rem", fontSize: "0.95rem" }}>Rating (5 stars max) *</label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    style={{
                      background: "transparent",
                      border: "2px solid #ddd",
                      borderRadius: "50%",
                      width: "48px",
                      height: "48px",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => {
                      const btn = e.currentTarget;
                      btn.style.borderColor = "var(--accent)";
                      btn.style.color = "var(--accent)";
                      btn.textContent = "★";
                    }}
                    onMouseLeave={e => {
                      const btn = e.currentTarget;
                      btn.style.borderColor = "#ddd";
                      btn.style.color = "inherit";
                      btn.textContent = "☆";
                    }}
                  >
                    ☆
                  </button>
                ))}
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--text-mid)", marginTop: "0.5rem" }}>Click on stars to rate your experience</p>
            </div>

            {/* Name */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label htmlFor="name" style={{ display: "block", fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Smith"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontFamily: "inherit",
                  fontSize: "0.95rem",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Location */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label htmlFor="location" style={{ display: "block", fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>Location (City, ON) *</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Toronto, ON"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontFamily: "inherit",
                  fontSize: "0.95rem",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Review Text */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label htmlFor="review" style={{ display: "block", fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>Your Review *</label>
              <textarea
                id="review"
                name="review"
                placeholder="Tell us about your experience with Strong Plumbing Inc. What service did you use? How was the technician? Would you recommend them?"
                required
                rows={6}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontFamily: "inherit",
                  fontSize: "0.95rem",
                  boxSizing: "border-box",
                  resize: "vertical",
                }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label htmlFor="email" style={{ display: "block", fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>Email (for verification) *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontFamily: "inherit",
                  fontSize: "0.95rem",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Service Used */}
            <div style={{ marginBottom: "2rem" }}>
              <label htmlFor="service" style={{ display: "block", fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>Service Used</label>
              <select
                id="service"
                name="service"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontFamily: "inherit",
                  fontSize: "0.95rem",
                  boxSizing: "border-box",
                  background: "#fff",
                }}
              >
                <option value="">Select a service...</option>
                <option value="drain-cleaning">Drain Cleaning</option>
                <option value="sewer-repair">Sewer Repair</option>
                <option value="plumbing-installation">Plumbing Installation</option>
                <option value="furnace-repair">Furnace Repair</option>
                <option value="ac-installation">AC Installation</option>
                <option value="emergency-plumbing">Emergency Plumbing</option>
                <option value="other">Other Service</option>
              </select>
            </div>

            {/* Submit Button */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                Submit Review
              </button>
              <a href="/reviews" className="btn btn-outline-secondary" style={{ flex: 1, textAlign: "center" }}>
                Back to Reviews
              </a>
            </div>

            <p style={{ fontSize: "0.75rem", color: "var(--text-mid)", marginTop: "1.5rem", textAlign: "center" }}>
              * Required fields. Reviews are moderated and may take 24-48 hours to appear. Thank you for your feedback!
            </p>
          </form>
        </div>
      </section>

      {/* ── CTA SECTION ────────────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container" style={{ maxWidth: 800, textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem", color: "var(--primary)" }}>Why Write a Review?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
            <div>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem", color: "var(--primary)" }}>★</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Help Others</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-mid)" }}>Your review helps Toronto homeowners find the right plumbing service.</p>
            </div>
            <div>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem", color: "var(--primary)" }}>✓</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Share Your Story</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-mid)" }}>Tell your experience with Strong Plumbing Inc's service.</p>
            </div>
            <div>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem", color: "var(--primary)" }}>◇</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>We Appreciate You</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-mid)" }}>Your feedback drives us to maintain our Gold Leaf Standard.</p>
            </div>
          </div>
        </div>
      </section>

      <GoldLeafCTA />
      <Footer />
    </>
  );
}
