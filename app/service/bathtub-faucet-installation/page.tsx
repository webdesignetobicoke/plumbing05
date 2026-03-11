import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathtub Faucet Installation | Crystal Drain & Plumbing Toronto",
  description: "Professional bathtub faucet and valve installation across Toronto. Expert installation of shower valves and trim.",
};

export default function Page() {
  return (
    <ServicePage
      title="Bathtub Faucet Installation"
      heroImg="https://images.pexels.com/photos/5711732/pexels-photo-5711732.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Professional bathtub faucet and valve installation across Toronto. Expert installation of shower valves and trim."
      sections={[
        {
          heading: "Types of Bathtub Faucets We Install",
          items: ["Wall-mounted single-handle valves - Sleek design with temperature and volume controls", "Deck-mounted faucets - For platform or tub-mounted installations", "Thermostatic mixing valves - Precision temperature control", "Pressure-balance valves - Child safety with anti-scald protection", "Diverter valves - Switch water between tub spout and shower head", "Tub and shower combo kits - Complete faucet and showerhead packages", "Rain head showers - Large overhead rainfall shower experience", "Body spray systems - Multiple jets for full-body coverage"],
        },
        {
          heading: "Professional Installation Includes",
          items: ["Rough-in plumbing for supply and return lines", "Valve body installation (if replacing the internal valve)", "Trim kit installation and trim ring placement", "Spout and diverter installation", "Showerhead connection and sealing", "Testing water temperature and flow", "Caulking and finishing around the installation", "Verification of anti-scald function"],
        },
        {
          heading: "We Work with All Major Brands",
          paragraphs: ["We install quality bathtub faucets from leading manufacturers including Moen, Delta, Kohler, Grohe, and Hans Grohe. Our team handles everything from the rough-in plumbing to the final trim installation. Whether you're upgrading with a modern shower system or installing comfort features like thermostatic controls, we ensure professional installation with proper function and durability."],
        }
      ]}
      faqs={[
        { q: "How long does bathtub faucet installation take?", a: "A straightforward bathtub faucet installation typically takes 2-4 hours. If you need the rough-in valve replaced or require plumbing modifications, installation may take longer." },
        { q: "Do you install trim-only replacements or need the whole valve?", a: "We can often replace just the trim kit if the existing valve is in good condition. However, if the valve body is old or faulty, we recommend full valve replacement for reliability and performance." },
        { q: "Can I upgrade my shower with body sprays?", a: "Yes! We can add body spray systems to existing showers. This requires running additional plumbing lines through the wall and adding a manifold to split water to multiple jets. We'll assess your bathroom and recommend the best setup." },
      ]}
    />
  );
}
