const SITE_URL = "https://kingslaundry.co.ke"; // ← change to your real domain

export const dynamic = "force-static";
export const revalidate = false;

export default function manifest() {
  return {
    name: "King's DryCleaners and Laundry",
    short_name: "Kings Laundry",
    description: "Laundry, dry-cleaning, carpets, duvets, curtains, ironing and fumigation at Kirigiti Center.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2ece0",
    theme_color: "#6FAEED",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png", purpose: "maskable" },
    ],
  };
}
