import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shower Fixture Installation | Crystal Drain & Plumbing Wyoming",
  description: "Crystal Drain & Plumbing installs shower valves, showerheads, body sprays, and complete shower systems across Wyoming.",
};

export default function Page() {
  return (
    <ServicePage
      title="Shower Fixture Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc6044dd3e3e68f4250c67_b4IKK17jSs5yOiVuLUERFcJ74cmy3sG73GaB7x_gvRI.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Crystal Drain & Plumbing installs shower valves, showerheads, body sprays, and complete shower systems across Wyoming."
      sections={[
        {
          heading: "Shower Fixtures We Install",
          items: ["Pressure-balancing shower valves (standard code requirement)", "Thermostatic shower valves for precise temperature control", "Showerheads — rain, handheld, and wall-mount", "Body spray systems", "Shower columns and panels", "Steam shower generators", "Tub/shower diverter valves", "Shower faucet trim kits (handle and cover plates)"],
        },
        {
          heading: "Code-Compliant Installation",
          paragraphs: ["All showers in Wyoming require a pressure-balancing or thermostatic valve to prevent scalding. Crystal Drain & Plumbing installs only code-compliant valves and ensures all shower work meets Wyoming plumbing code requirements. For new shower installations, we handle the rough-in valve installation and trim installation in two separate phases around your tile work."],
        },
        {
          heading: "Brands We Install",
          items: ["Moen", "Delta", "Kohler", "American Standard", "Grohe", "Hansgrohe", "Rohl", "Brizo"],
        }
      ]}
      faqs={[
        { q: "What is a pressure-balancing shower valve?", a: "A pressure-balancing valve automatically adjusts to maintain a consistent water temperature when other fixtures in the home are used (like a toilet flushing). This prevents sudden temperature spikes that can cause scalding. It is required by code in all Wyoming showers." },
      ]}
    />
  );
}
