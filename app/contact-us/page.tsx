import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Strong Plumbing Inc | Emergency Plumbing Service Toronto",
  description: "Contact Strong Plumbing Inc for emergency and routine plumbing services in Greater Toronto Area. Call (416) 258-4068. 24/7 availability. Licensed Master Plumbers.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow">Strong Plumbing Inc</span>
          <h1>Contact Us</h1>
          <p>Ready for professional plumbing service? Contact Strong Plumbing Inc for emergency or routine drain and plumbing needs across Greater Toronto Area. 24/7 availability.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact info */}
            <div>
              <span className="eyebrow">Get In Touch</span>
              <h2>Professional Plumbing Service Available</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: "2.5rem" }}>
                Strong Plumbing Inc is available 24/7 for emergency and routine service. Contact us by phone, email, or use our online form. We provide free estimates weekdays 9am-4pm and emergency response anytime.
              </p>

              <div className="contact-info-item">
                <div className="contact-info-icon" style={{ color: "var(--primary)" }}>☎</div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+14162584068">(416) 258-4068</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon" style={{ color: "var(--primary)" }}>✉</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:contact@strongplumbinginc.com">contact@strongplumbinginc.com</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon" style={{ color: "var(--primary)" }}>📍</div>
                <div>
                  <h4>Main Office</h4>
                  <p>18 King St East Suite #1400</p>
                  <p>Toronto, ON M5C 1C4</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon" style={{ color: "var(--primary)" }}>📍</div>
                <div>
                  <h4>Mississauga Office</h4>
                  <p>1 Yonge Street Suite 1801</p>
                  <p>Toronto, ON M5E-1W7</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon" style={{ color: "var(--primary)" }}>🕐</div>
                <div>
                  <h4>Service Hours</h4>
                  <p>Free Estimates: 9am-4pm M-F</p>
                  <p>Emergency Services: 24/7</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="(307) 000-0000" />
                </div>
              </div>
              <div className="form-group">
                <label>Service Needed</label>
                <select>
                  <option value="">Select a service...</option>
                  <option>BackWater Valve Installation</option>
                  <option>Sewer Line Repair</option>
                  <option>Video Camera Inspection</option>
                  <option>Waterproofing & Sump Pump</option>
                  <option>Water Service Installation</option>
                  <option>Plumbing Installation & Repair</option>
                  <option>Emergency Service</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Your City</label>
                <input type="text" placeholder="Toronto, Mississauga, Etobicoke..." />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Describe your plumbing issue or question..." />
              </div>
              <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Send Message
              </button>
              <p style={{ fontSize: "0.75rem", color: "var(--text-light)", marginTop: "1rem", textAlign: "center" }}>
                Thank you! Your submission has been received! — We&apos;ll be in touch shortly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GoldLeafCTA />
      <Footer />
    </>
  );
}
