import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldLeafCTA from "@/components/GoldLeafCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Strong Plumbing Inc Toronto",
  description: "See what Toronto GTA homeowners are saying about Strong Plumbing Inc. Read real Google reviews from our satisfied customers.",
};

const photoIds = [2379004, 2128911, 2733918, 2128906, 3719517, 2172282, 2379006, 2128910];

const reviews = [
        {
          name: "Cindy Keen Reynders",
          location: "Toronto, ON",
          text: "Excellent as always!",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[0]}/pexels-photo-${photoIds[0]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "David Rosette",
          location: "Mississauga, ON",
          text: "Great service, fast response. Professional job done right. Can't be more happy with the company.",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[1]}/pexels-photo-${photoIds[1]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "Charles Emery",
          location: "Oakville, ON",
          text: "Great company! Professional and experienced. Customer service was outstanding and they are accountable.",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[2]}/pexels-photo-${photoIds[2]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "H.S. Daniels",
          location: "Etobicoke, ON",
          text: "Friendly, knowledgeable, and up front with pricing -- everything you'd hope for. I will be using them again.",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[3]}/pexels-photo-${photoIds[3]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "Ashley Merrell",
          location: "Brampton, ON",
          text: "Kalvin and Jake were absolutely amazing! After a bad experience with another plumbing company, they showed up within half an hour of us calling them! Very knowledgeable and wonderful!",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[4]}/pexels-photo-${photoIds[4]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "Trafalgar Law",
          location: "Toronto, ON",
          text: "If you can get their technician Tre, then it's worth it. Showed up early and did a professional install on some piping under my kitchen sink. Awesome guy and took the time to explain everything.",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[5]}/pexels-photo-${photoIds[5]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "joe eskelson",
          location: "Scarborough, ON",
          text: "Very professional. Calvin Brown did an amazing job putting our water softener system in and RO system. Will recommend to anyone with plumbing needs. A+ service.",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[6]}/pexels-photo-${photoIds[6]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "Tasha Mowrey",
          location: "North York, ON",
          text: "Very good experience. Didn't push services I didn't need. Will use again if needed.",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[7]}/pexels-photo-${photoIds[7]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "Caleb Hill",
          location: "Toronto, ON",
          text: "I called many plumbing companies and Strong Plumbing Inc was the only one willing to fix my issue same-day. The technician was incredibly nice and transparent throughout the whole process.",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[0]}/pexels-photo-${photoIds[0]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "Tyler Burdette",
          location: "Hamilton, ON",
          text: "Logan did a great job for my home today. Was clean and professional. I would recommend him to come to anyone's home or business. Thanks again.",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[1]}/pexels-photo-${photoIds[1]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "Marilyn Snyder",
          location: "Ajax, ON",
          text: "Jake and Logan came to work on my sewer line and did a fantastic job. I am very pleased with the work and kindness they showed. I will definitely have them back.",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[2]}/pexels-photo-${photoIds[2]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "Kyle Perry",
          location: "Pickering, ON",
          text: "Travis was great. He was very knowledgeable, courteous, and concerned about our issue. Showed up early and got the job done quickly. Even cleaned up after the job which is a rarity.",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[3]}/pexels-photo-${photoIds[3]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "Nate Purvis",
          location: "Whitby, ON",
          text: "Strong Plumbing Inc is great to work with. Fast, reliable, fair and very professional. Calvin is thorough and does a great job communicating his troubleshooting. I highly recommend using Strong Plumbing Inc.",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[4]}/pexels-photo-${photoIds[4]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "Joshua Monagle",
          location: "Toronto, ON",
          text: "Jake Reed was our tech and was one of the best plumbers I've ever dealt with. He was friendly, knowledgeable and direct. Will be a customer for life.",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[5]}/pexels-photo-${photoIds[5]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "Fely Cotera",
          location: "Burlington, ON",
          text: "Highly recommend Strong Plumbing Inc. Our technician Mr. Travis James was friendly, professional, and very knowledgeable. Will be calling Strong Plumbing Inc if we need future plumbing work.",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[6]}/pexels-photo-${photoIds[6]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
        {
          name: "Shaundra Britton",
          location: "Richmond Hill, ON",
          text: "Our first experience with Strong Plumbing Inc has been incredible. We had a main water line leak. The office staff was extremely professional and efficient. Jake Reed was outstanding.",
          stars: 5,
          img: `https://images.pexels.com/photos/${photoIds[7]}/pexels-photo-${photoIds[7]}.jpeg?auto=compress&cs=tinysrgb&w=100`,
        },
];

const locations = ["All", "Toronto, ON", "Mississauga, ON", "Etobicoke, ON"];

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <section style={{ background: "var(--primary)", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Strong Plumbing Inc</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "1rem" }}>Our Reviews</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 600, margin: "0 auto" }}>
            Toggle between our different Google Business Profile locations to see what homeowners near you are saying about Strong Plumbing Inc.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {locations.map(loc => (
              <span key={loc} style={{ padding: "0.4rem 1.25rem", border: "1px solid var(--primary)", fontSize: "0.8rem", fontWeight: 700, color: "var(--primary)", borderRadius: "2px", cursor: "pointer" }}>{loc}</span>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e8e8e8", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <Image src={r.img} alt={r.name} width={40} height={40} style={{ borderRadius: "50%", objectFit: "cover" }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--primary)" }}>{r.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-mid)" }}>{r.location}</div>
                  </div>
                  <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "#4285F4", fontWeight: 700 }}>Google</span>
                </div>
                <div style={{ color: "var(--accent)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>★★★★★</div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.7, margin: 0 }}>{r.text}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="/write-review" className="btn btn-primary">Write a Review</a>
          </div>
        </div>
      </section>

      <GoldLeafCTA />
      <Footer />
    </>
  );
}
