const SITE_URL = "https://kingslaundry.co.ke"; // ← change to your real domain

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE_URL,               lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/gallery`,  lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${SITE_URL}/about`,    lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${SITE_URL}/find-us`,  lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    { url: `${SITE_URL}/contact`,  lastModified: now, changeFrequency: "yearly",  priority: 0.9 },
  ];
}
