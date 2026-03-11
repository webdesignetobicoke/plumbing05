import CountyPage from "@/components/CountyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing & HVAC Services Albany County | Crystal Drain & Plumbing",
  description: "Expert plumbing and HVAC services throughout Albany County. Crystal Drain & Plumbing serves all cities and communities in Albany County, Wyoming.",
};

export default function Page() {
  return (
    <CountyPage
      county="Albany County"
      state="Wyoming"
      tagline="Choose your city in Albany County, and call Crystal Drain & Plumbing. Note: HVAC services are not available in Albany County."
      cities={[
        { name: "Laramie, WY", slug: "laramie-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09d1a3ae0e01b74b2561_MQdv7r5G5OfT3FBGAw2xbWnFT0IJn0iYMJXLVgPGLcQ.webp" },
      ]}
    />
  );
}
