import CountyPage from "@/components/CountyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing & HVAC Services Lincoln County | Crystal Drain & Plumbing",
  description: "Expert plumbing and HVAC services throughout Lincoln County. Crystal Drain & Plumbing serves all cities and communities in Lincoln County, Wyoming.",
};

export default function Page() {
  return (
    <CountyPage
      county="Lincoln County"
      state="Wyoming"
      tagline="Choose your city in Lincoln County, and call Crystal Drain & Plumbing."
      cities={[
        { name: "Kemmerer, WY", slug: "kemmerer-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09cc0c8a0d06ae6d48b6_ZI19MrUDsefFpRhlBOb9WMzb8N-Ob53sN8_9IpFHblo.webp" },
        { name: "Diamondville, WY", slug: "diamondville-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09a8be0b68b15db1b7ab_6Bh4NE5g_ZJqBr6nnp3MZy3R5fONEm7_8rSxHXiRiPk.webp" },
        { name: "LaBarge, WY", slug: "labarge-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09cf0c8a0d06ae6d54de_7Zl6TtnKCOEi4DxYr-8-kRYVjMb04oBGLZj5mFDsyGA.webp" },
        { name: "Opal, WY", slug: "opal-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09e39d7ab3cff8b0d11b_GKs_yxcOkbXDCFpuWVMqhzFRilAPbmVBjbMNFXRJe44.webp" },
        { name: "Frontier, WY", slug: "frontier-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09b51e3462cbcdf6d27f_bkLF7PzlQ8YZQ8V5HrVJfMELnLqLEi_P9gYaGEtZo1A.webp" },
        { name: "Robertson, WY", slug: "robertson-wy", img: "https://cdn.prod.website-files.com/66fbfa10acc227665751a712/66fc09f3db3ef3d37ea5c4ca_LH8bLfUZrTR_3OO7O7aBZx7wKQ7l9E8TQIW0TUXXkYo.webp" },
      ]}
    />
  );
}
