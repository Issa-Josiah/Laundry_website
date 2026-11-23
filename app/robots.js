const SITE_URL = "https://kingslaundry.co.ke"; // ← change to your real domain

export const dynamic = "force-static";
export const revalidate = false;

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
