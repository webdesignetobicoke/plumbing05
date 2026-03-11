import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drain Descaling Services | Crystal Drain & Plumbing Wyoming",
  description: "Mineral scale and rust buildup can significantly reduce your drain pipe's flow capacity. Crystal Drain & Plumbing's drain descaling services restore full flow to your pipes.",
};

export default function Page() {
  return (
    <ServicePage
      title="Drain Descaling Services"
      heroImg="https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc6005f413258b329ae7d7_k86O_G7TNFDdC_ma5WVjNVqlfiSIZD4rqlVM.jpeg"
      parentCategory={{ label: "Clogged Drains", href: "/service-type/clogged-drains" }}
      tagline="Mineral scale and rust buildup can significantly reduce your drain pipe's flow capacity. Crystal Drain & Plumbing's drain descaling services restore full flow to your pipes."
      sections={[
        {
          heading: "What Is Drain Descaling?",
          paragraphs: ["Descaling is the process of removing mineral deposits, rust scale, and calcium/magnesium buildup from the interior walls of drain and sewer pipes. Toronto's hard water accelerates scale formation, and cast iron sewer pipes are particularly susceptible to internal rust scale that can reduce the pipe's interior diameter by 50% or more over decades."],
        },
        {
          heading: "Our Descaling Methods",
          items: ["Mechanical descaling — chain flail and rotary cutters that scrub the pipe interior", "Hydro jetting — high-pressure water (3,500+ PSI) to blast scale deposits", "Chemical descaling — for specific mineral types where mechanical methods are not ideal", "Camera inspection before and after to verify results"],
        },
        {
          heading: "Signs Your Pipes Have Scale Buildup",
          items: ["Progressively slower drains despite no obvious blockage", "Recurring clogs even after professional snaking", "Discolored water (rust or mineral tint)", "Low water pressure at multiple fixtures", "Pipes are 30+ years old cast iron"],
        }
      ]}
      faqs={[
        { q: "Will descaling damage my pipes?", a: "No. Mechanical descaling tools are designed to remove scale without cutting into the pipe material. Our technicians use camera inspections to assess pipe condition before selecting the appropriate descaling method, ensuring the process is safe for your specific pipe material and condition." },
      ]}
    />
  );
}
