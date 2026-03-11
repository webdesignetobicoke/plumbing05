import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Fireplace Installation | Crystal Drain & Plumbing Wyoming",
  description: "Add warmth and ambiance to your Wyoming home with a gas fireplace installed by Crystal Drain & Plumbing. We handle the gas line connection and all plumbing aspects of your installation.",
};

export default function Page() {
  return (
    <ServicePage
      title="Gas Fireplace Installation"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc601b8280398b5c21ca58_LikN3wctQ46akbJ511RBPSLeH2_KshqCDgI3FK_fFqM.jpeg"
      parentCategory={{ label: "Residential Plumber", href: "/service-type/residential-plumber" }}
      tagline="Add warmth and ambiance to your Wyoming home with a gas fireplace installed by Crystal Drain & Plumbing. We handle the gas line connection and all plumbing aspects of your installation."
      sections={[
        {
          heading: "Types of Gas Fireplaces We Connect",
          items: ["Gas fireplace inserts (convert existing wood-burning fireplace)", "Built-in/zero-clearance gas fireplaces for new installations", "Freestanding gas stoves and fireplaces", "Outdoor gas fire pits and fire tables", "Linear and contemporary gas fireplace units"],
        },
        {
          heading: "What Crystal Drain & Plumbing Provides",
          paragraphs: ["Our role in a gas fireplace installation is the critical gas line work: running a new dedicated gas line from your main gas supply to the fireplace location, installing the appropriate shut-off valve, connecting the gas appliance, performing a pressure test, and completing the startup and safety checks.", "We coordinate with fireplace dealers and contractors to ensure the gas work integrates seamlessly with the overall installation."],
        },
        {
          heading: "Wyoming Winter Comfort",
          paragraphs: ["A gas fireplace is one of the most popular home improvement projects in Wyoming — and for good reason. In a state where temperatures can drop to -20°F, a reliable, efficient gas fireplace provides both supplemental heat and year-round ambiance at the touch of a button."],
        }
      ]}
      faqs={[
        { q: "How far can a gas fireplace be from the gas meter?", a: "Gas fireplaces can be connected from considerable distances, but the pipe size must be properly calculated to ensure adequate gas pressure at the appliance. Our technicians will size the gas line correctly for your specific fireplace's BTU requirements regardless of the distance from the meter." },
        { q: "Do gas fireplaces require venting?", a: "Most gas fireplaces require either a direct vent system (uses outside air for combustion and exhausts through a coaxial pipe) or a B-vent system. Vent-free models are available but have restrictions in some areas. The fireplace manufacturer specifies the venting requirements, and our technicians will ensure the installation is compliant." },
      ]}
    />
  );
}
