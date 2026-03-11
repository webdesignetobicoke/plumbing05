import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toilet Seat Replacement | Crystal Drain & Plumbing Toronto",
  description: "Quick and affordable toilet seat replacement across Toronto. Same-day service available.",
};

export default function Page() {
  return (
    <ServicePage
      title="Toilet Seat Replacement"
      heroImg="https://images.pexels.com/photos/633860/pexels-photo-633860.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Quick and affordable toilet seat replacement across Toronto. Same-day service available."
      sections={[
        {
          heading: "Types of Toilet Seats We Install",
          items: ["Standard round seats - Classic design for round bowls", "Elongated seats - Longer for comfort on elongated bowls", "Soft-close seats - Quiet closing with no slamming", "Quick-release seats - Easy removal for cleaning", "Heated seats - Comfortable warmth in cold months", "Bidet seats - Integrated cleaning and drying features", "Child seats - Smaller size for kids and training", "Raised seats - Accessibility aids for seniors or mobility issues"],
        },
        {
          heading: "Professional Replacement Includes",
          items: ["Removal of old toilet seat and mounting hardware", "Inspection of toilet bowl rim for damage", "Cleaning of mounting area", "Installation of new seat and bolts", "Adjustment for proper fit and tightness", "Testing for stability and secure attachment"],
        },
        {
          heading: "Quick Easy Upgrade",
          paragraphs: ["A new toilet seat is a quick and affordable way to refresh your bathroom. Whether you want a soft-close seat for comfort, a heated seat for luxury, or a basic replacement, our team can install it quickly. Most toilet seat replacements take less than 30 minutes, and we can do it on the same day you call."],
        }
      ]}
      faqs={[
        { q: "How do I know what toilet seat to buy?", a: "Toilet seats come in round or elongated styles. Measure your bowl or check your current seat. Round bowls need round seats, elongated bowls need elongated seats. We can help you pick the right one." },
        { q: "Can you install a bidet or heated toilet seat?", a: "Yes, we install all types of toilet seats including bidet and heated models. Some may require electrical connection. We'll handle installation and can coordinate electrical work if needed." },
        { q: "Do you do same-day toilet seat replacements?", a: "Yes, toilet seat replacements are quick and we often have same-day availability. Call us to schedule a convenient time." },
      ]}
    />
  );
}
