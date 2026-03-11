import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garbage Disposal Installation | Crystal Drain & Plumbing Toronto",
  description: "Keep your kitchen clean and odor-free. Crystal Drain & Plumbing installs garbage disposals of all brands and sizes across Toronto area.",
};

export default function Page() {
  return (
    <ServicePage
      title="Garbage Disposal Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc5ff5548041b53d4a054d_PLzMEJcdBCghWc9XKQ-QcUXsXB3-8DT8k-O7hGxYIJE.jpeg"
      parentCategory={{ label: "Kitchen Plumber", href: "/service-type/kitchen-plumber" }}
      tagline="Keep your kitchen clean and odor-free. Crystal Drain & Plumbing installs garbage disposals of all brands and sizes across Toronto area."
      sections={[
        {
          heading: "When to Install a New Garbage Disposal",
          items: ["Your kitchen does not currently have a garbage disposal", "Upgrading to a higher-horsepower or quieter model", "New kitchen remodel or renovation", "Your existing disposal is beyond repair"],
        },
        {
          heading: "Installation Process",
          items: ["Verify electrical circuit is adequate (most disposals need a dedicated 15-amp circuit)", "Remove existing disposal or sink basket if replacing", "Mount new disposal to sink flange", "Connect drain and dishwasher drain (if applicable)", "Test operation through multiple cycles", "Demonstrate proper use and maintenance to homeowner"],
        },
        {
          heading: "Brands We Install",
          items: ["InSinkErator Evolution Series", "InSinkErator Badger Series", "Waste King / Moen", "KitchenAid", "GE", "Whirlpool"],
        }
      ]}
      faqs={[
        { q: "Do I need an electrician to install a garbage disposal?", a: "If you're replacing an existing disposal that already has an electrical connection, no electrician is required — Crystal Drain & Plumbing handles the complete installation. If installing a disposal for the first time and no electrical circuit is present, we'll coordinate with an electrician for the circuit installation." },
      ]}
    />
  );
}
