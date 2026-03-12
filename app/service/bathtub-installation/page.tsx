import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathtub Installation | Strong Plumbing Inc Toronto",
  description: "Professional bathtub installation for new construction and renovations across Toronto and the GTA.",
};

export default function Page() {
  return (
    <ServicePage
      title="Bathtub Installation"
      heroImg="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg"
      parentCategory={{ label: "Bathroom Plumber", href: "/service-type/bathroom-plumber" }}
      tagline="Professional bathtub installation for new construction and renovations across Toronto and the GTA."
      sections={[
        {
          heading: "Bathtub Types We Install",
          items: ["Alcove bathtubs - Standard 5 ft tubs designed for three-wall installations", "Corner bathtubs - Space-saving options for smaller bathrooms", "Freestanding bathtubs - Modern luxury tubs with exposed plumbing", "Drop-in bathtubs - Mounted on a rim that sits on a platform or deck", "Soaking tubs - Deep tubs for ultimate relaxation and hydrotherapy", "Whirlpool and air tubs - Therapeutic jets for massage and wellness", "Walk-in bathtubs - Accessible designs for mobility-impaired users", "Steam shower combinations - Integrated steamers with shower functionality"],
        },
        {
          heading: "Professional Installation Includes",
          items: ["Proper rough-in plumbing for water supply and drainage", "Installation of drain, overflow, and vent connections", "Structural support and framing preparation", "Waterproofing and moisture protection", "Connection to hot and cold water lines", "Proper slope of drainage for efficient flow", "Sealing and caulking around tub edges", "Testing for leaks and proper operation"],
        },
        {
          heading: "Custom Installation Options",
          paragraphs: ["Whether you're building new or renovating, we work with architects and contractors to ensure your bathtub installation meets all code requirements and design specifications. We can accommodate custom tile work, decorative surrounds, and integrated jets or features. Our team handles all plumbing rough-in work and coordinates with other trades to ensure a seamless installation process."],
        }
      ]}
      faqs={[
        { q: "How long does new bathtub installation take?", a: "A straightforward bathtub installation typically takes 3-5 hours. If significant plumbing rough-in or structural work is needed, installation may take longer. We'll provide a timeline during the estimate." },
        { q: "Do I need to prepare my bathroom before installation?", a: "Yes, the area should be clear of obstacles and debris. If you're replacing an existing tub, we'll handle the removal. For new construction, ensure the rough-in plumbing is complete and accessible." },
        { q: "What's the best bathtub for a small bathroom?", a: "Corner tubs and compact alcove tubs work well for smaller spaces. We can also install elongated soaking tubs if headroom is adequate. We'll recommend the best option based on your bathroom dimensions and layout." },
      ]}
    />
  );
}
