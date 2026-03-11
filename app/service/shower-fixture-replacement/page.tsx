import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shower Fixture Replacement | Crystal Drain & Plumbing Wyoming",
  description: "Ready to upgrade your shower? Crystal Drain & Plumbing replaces shower valves and fixtures across Wyoming with professional installation.",
};

export default function Page() {
  return (
    <ServicePage
      title="Shower Fixture Replacement"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc6044dd3e3e68f4250c67_b4IKK17jSs5yOiVuLUERFcJ74cmy3sG73GaB7x_gvRI.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Ready to upgrade your shower? Crystal Drain & Plumbing replaces shower valves and fixtures across Wyoming with professional installation."
      sections={[
        {
          heading: "When to Replace Shower Fixtures",
          items: ["Old single-handle valves without anti-scald protection", "Upgrading to a thermostatic valve for precise temperature control", "Adding body sprays or a rain showerhead to existing shower", "Complete bathroom remodel requiring new shower valve", "Damaged valve body that cannot be repaired with cartridge replacement"],
        },
        {
          heading: "Valve Replacement Process",
          paragraphs: ["Replacing the shower valve body (not just the trim) requires wall access. Crystal Drain & Plumbing minimizes the size of the access opening, and we can work with your contractor for tile restoration after plumbing is complete. If access is from a utility room or closet behind the shower, tile may not need to be disturbed at all."],
        },
        {
          heading: "Upgrade Opportunities",
          items: ["Move from a basic pressure-balance valve to a thermostatic system", "Add volume controls for independent showerhead and body spray control", "Install a digital shower controller", "Add in-line filter to protect fixtures from hard water scale"],
        }
      ]}
      faqs={[
        { q: "How do I know what shower valve brand I have?", a: "Look for a logo on the trim plate or handle, or search the model number on the cartridge inside the valve. If you can't identify it, send us a photo and we'll help identify it and order the correct replacement parts." },
      ]}
    />
  );
}
