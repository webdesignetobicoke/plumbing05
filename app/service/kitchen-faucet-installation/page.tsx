import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Faucet Installation | Crystal Drain & Plumbing Toronto",
  description: "Professional kitchen faucet installation across Toronto area. From single-handle to pull-down sprayer faucets, we install all styles with expert connections.",
};

export default function Page() {
  return (
    <ServicePage
      title="Kitchen Faucet Installation"
      heroImg="https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg"
      parentCategory={{ label: "Kitchen Plumber", href: "/service-type/kitchen-plumber" }}
      tagline="Professional kitchen faucet installation across Toronto area. From single-handle to pull-down sprayer faucets, we install all styles with expert connections."
      sections={[
        {
          heading: "Types of Kitchen Faucets We Install",
          items: ["Single-handle faucets", "Two-handle faucets", "Pull-down sprayer faucets", "Pull-out sprayer faucets", "Bridge faucets", "Wall-mounted faucets", "Pot filler faucets (above the range)", "Touchless/sensor faucets"],
        },
        {
          heading: "Professional Installation Includes",
          items: ["Supply line connection to both hot and cold water lines", "Drain connection (if applicable)", "Secure mounting with proper sealing", "Testing for leaks and proper drainage", "Installation of aerator and strainer basket", "Shut-off valve inspection and testing", "Complete cleanup of work area"],
        },
        {
          heading: "Why Choose Crystal Drain & Plumbing",
          paragraphs: ["Proper faucet installation is crucial to prevent leaks that can damage cabinets and create mold growth. Our plumbers ensure every connection is watertight and every component is properly secured. We work with all major brands — Moen, Delta, Kohler, Grohe, Hansgrohe, and more — and your new faucet installation comes with our satisfaction guarantee."],
        },
      ]}
      faqs={[
        { q: "How long does kitchen faucet installation take?", a: "Most kitchen faucet installations take 30-60 minutes, depending on the existing plumbing configuration and whether we need to upgrade water lines or install new shut-off valves." },
        { q: "Can you install a faucet if we have an old one to remove?", a: "Absolutely. We'll remove your existing faucet, clean up the sink deck, and install your new faucet with all new connections. Removal and disposal of the old faucet is included." },
      ]}
    />
  );
}
