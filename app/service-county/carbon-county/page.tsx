import CountyPage from "@/components/CountyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing & HVAC Services Carbon County | Crystal Drain & Plumbing",
  description: "Expert plumbing and HVAC services throughout Carbon County. Crystal Drain & Plumbing serves all cities and communities in Carbon County, Wyoming.",
};

export default function Page() {
  return (
    <CountyPage
      county="Carbon County"
      state="Wyoming"
      tagline="Choose your city in Carbon County, and call Crystal Drain & Plumbing."
      cities={[
        { name: "Rawlins, WY", slug: "rawlins-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09eecbdfabda680d8c75_Hd0dJBz1J8E-7OwHFSnU8xYkj8nGg_kJxj0OenVUqso.webp" },
      ]}
    />
  );
}
