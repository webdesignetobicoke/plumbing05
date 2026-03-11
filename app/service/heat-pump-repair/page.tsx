import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heat Pump Repair | Crystal Drain & Plumbing Toronto",
  description: "Professional heat pump repair services to restore your heating and cooling comfort.",
};

export default function Page() {
  return (
    <ServicePage
      title="Heat Pump Repair"
      heroImg="https://images.pexels.com/photos/5081618/pexels-photo-5081618.jpeg?auto=compress&cs=tinysrgb&w=1200"
      parentCategory={{ label: "Home Heating", href: "/service-type/home-heating" }}
      tagline="Professional heat pump repair services to restore your heating and cooling comfort."
      sections={[
        {
          heading: "Heat Pump Problems We Solve",
          items: ["No heating or cooling - System won't turn on or produce conditioned air", "Weak performance - Insufficient heating or cooling output", "Frequent cycling - System turns on and off too often", "Refrigerant leaks - Reduced efficiency and cooling capacity", "Compressor issues - Strange noises or lack of pressure", "Blower problems - Weak or no airflow", "Thermostat malfunctions - Temperature control not responding", "Outdoor unit icing - Frost buildup reducing efficiency", "Strange noises - Grinding, squealing, or rattling sounds", "Defrost cycle problems - Inability to handle heating in cold weather"],
        },
        {
          heading: "Our Repair Expertise",
          items: ["Complete diagnostic testing of all system components", "Refrigerant recovery and leak detection", "Compressor and motor testing and repair", "Electrical system inspection and repair", "Thermostat calibration and controller replacement", "Coil cleaning and optimization", "Airflow analysis and ductwork repair", "Priority emergency service available 24/7"],
        },
        {
          heading: "Quick Recovery",
          paragraphs: ["When your heat pump fails, we understand the urgency. Our experienced technicians can diagnose and repair most issues quickly to restore your comfort. We stock common replacement parts and can often complete repairs same-day."],
        }
      ]}
      faqs={[
        { q: "Why is my heat pump icing up in winter?", a: "Heat pumps naturally cycle into defrost mode in cold weather. If excessive icing occurs, there may be a refrigerant leak or airflow problem that needs professional attention." },
        { q: "Can I repair my heat pump myself?", a: "Heat pump repairs require specialized tools, refrigerant certification, and technical knowledge. Professional service is necessary for safety and warranty compliance." },
        { q: "How much does heat pump repair cost?", a: "Repair costs vary based on the specific problem. We charge a diagnostic fee to identify the issue, then provide repair estimates." },
        { q: "What's covered under heat pump warranty?", a: "Most warranties cover parts for 5-10 years. Some extended warranties also cover labor. We can explain your specific coverage." },
      ]}
    />
  );
}
