import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Faucet Installation | Crystal Drain & Plumbing Toronto",
  description: "Professional bathroom faucet installation across Toronto area. We install all brands and styles with expert plumbing connections.",
};

export default function Page() {
  return (
    <ServicePage
      title="Bathroom Faucet Installation"
      heroImg="https://images.pexels.com/photos/586019/pexels-photo-586019.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Professional bathroom faucet installation across Toronto area. We install all brands and styles with expert plumbing connections."
      sections={[
        {
          heading: "Types of Bathroom Faucets We Install",
          items: ["Single-handle faucets", "Double-handle faucets", "Wall-mounted faucets", "Vessel sink faucets", "Touchless/sensor faucets", "High-arc spout faucets", "Low-arc faucets"],
        },
        {
          heading: "Professional Installation Includes",
          items: ["Supply line connections to both hot and cold water", "Drain connection and overflow pipe", "Secure mounting with proper sealing", "Testing for leaks and water pressure", "Cleanup and debris removal"],
        },
        {
          heading: "We Work with All Major Brands",
          paragraphs: ["Whether you choose Moen, Delta, Kohler, Grohe, Hansgrohe, or another quality brand, our plumbers are experienced with all manufacturer specifications. Your new faucet installation comes with our satisfaction guarantee."],
        },
      ]}
      faqs={[
        { q: "How long does bathroom faucet installation take?", a: "Most bathroom faucet installations take 30-60 minutes, depending on the existing plumbing configuration and whether we need to upgrade water lines or install new shut-off valves." },
        { q: "Can you install a faucet if we have an old one to remove?", a: "Absolutely. We'll remove your existing faucet, clean up the sink deck, and install your new faucet with all new connections. Removal and disposal of the old faucet is included." },
      ]}
    />
  );
}
