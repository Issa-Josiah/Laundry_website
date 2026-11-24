
export const dynamic = "force-static";
export const revalidate = false;

export default function manifest() {
  return {
    name: "King's DryCleaners and Laundry",
    short_name: "Kings Laundry",
    description:
      "Laundry, dry-cleaning, carpets, duvets, curtains, ironing and fumigation at Kirigiti Center.",

    start_url: "/",
    scope: "/",
    display: "standalone",

    background_color: "#f2ece0",
    theme_color: "#0B3D91",

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
