import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathtub Replacement | Crystal Drain & Plumbing Toronto",
  description: "Professional bathtub replacement across Toronto and the GTA. We install quality tubs with expert plumbing connections.",
};

export default function Page() {
  return (
    <ServicePage
      title="Bathtub Replacement"
      heroImg="https://images.pexels.com/photos/2837863/pexels-photo-2837863.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Professional bathtub replacement across Toronto and the GTA. We install quality tubs with expert plumbing connections."
      sections={[
        {
          heading: "Types of Bathtubs We Install",
          items: ["Alcove bathtubs - Standard 5 ft tubs with walls on three sides", "Corner bathtubs - Compact designs perfect for smaller bathrooms", "Freestanding bathtubs - Luxury soaking tubs for spa-like bathrooms", "Walk-in bathtubs - Accessible designs with built-in seating and grab bars", "Whirlpool tubs - Jets and massage features for ultimate relaxation", "Cast iron tubs - Durable, classic style that retains heat", "Acrylic tubs - Lightweight, affordable, easy to maintain"],
        },
        {
          heading: "Professional Replacement Includes",
          items: ["Removal of old bathtub and proper disposal", "Inspection of plumbing rough-in and drainage", "Preparation of subfloor and wall framing", "Installation of new drain and overflow connections", "Proper waterproofing and sealing", "Connection to hot and cold water supply lines", "Testing for leaks and proper drainage", "Caulking and finishing touches"],
        },
        {
          heading: "We Work with All Major Brands",
          paragraphs: ["We install quality bathtubs from leading manufacturers including Kohler, Delta, Moen, American Standard, and Gerber. Whether you're looking for a basic functional tub or a luxury soaking experience, our team can source and install exactly what you need. We handle all plumbing connections and ensure your new bathtub is properly installed and ready to use."],
        }
      ]}
      faqs={[
        { q: "How long does bathtub replacement take?", a: "Most bathtub replacements take 1-2 days depending on the complexity of the plumbing connections and any structural repairs needed. If the subfloor needs replacing or significant remodeling is required, it may take longer." },
        { q: "Can you remove my old bathtub and install a new one the same day?", a: "Yes, we can typically remove an old tub and install a new one in the same day if it's a straightforward replacement with existing connections. More complex projects may require additional time." },
        { q: "Do I need to tile around the new tub?", a: "That depends on your bathroom design and the type of tub you're installing. Our team can advise on the best approach and coordinate with tile contractors if needed." },
      ]}
    />
  );
}
