import CountyPage from "@/components/CountyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing & HVAC Services Sublette County | Crystal Drain & Plumbing",
  description: "Expert plumbing and HVAC services throughout Sublette County. Crystal Drain & Plumbing serves all cities and communities in Sublette County, Wyoming.",
};

export default function Page() {
  return (
    <CountyPage
      county="Sublette County"
      state="Wyoming"
      tagline="Choose your city in Sublette County, and call Crystal Drain & Plumbing."
      cities={[
        { name: "Big Piney, WY", slug: "big-piney-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09922c5d5b4e2c1e7be5_MdphtEAqzZYkjgPQ1eqVr0K3I2C0BRbXy-tBGx6-I3c.webp" },
        { name: "Marbleton, WY", slug: "marbleton-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09d8cbdfabda680d7c7a_WJpJ8LiDBIm3ppSn15p64mkLk4JWnIAvF2kW1X_NLRQ.webp" },
      ]}
    />
  );
}
