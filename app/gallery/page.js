import { siteData as d } from "../../data/mockData";

export const metadata = {
  title: "Gallery",
  description:
    "Freshly folded laundry, pressed garments and cleaning work from King's DryCleaners and Laundry.",
      alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | King's DryCleaners",
    description: "Visit us at Kirigiti Center, near Todas Restaurant. Call, WhatsApp or send an inquiry.",
    url: "/contact",
  },
};

export default function GalleryPage() {
  // Only render items that actually have an image
  const visible = d.gallery.filter((g) => g.image && g.image.trim() !== "");

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="gallery-hero">
        <div className="container">
          <p className="eyebrow">A look at fresh</p>
          <h1>Care you can see.</h1>
          <p className="lead">
            A glimpse of what leaves our shop — freshly folded, pressed and
            ready. More photos added as our work grows.
          </p>
        </div>
      </section>

      {/* ===== GRID ===== */}
      <section className="section">
        <div className="container">
          {visible.length === 0 ? (
            <div className="gallery-empty">
              <p>Photos are on the way — check back soon.</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {visible.map((g) => (
                <figure key={g.id} className="gallery-item">
                  <img src={g.image} alt={g.caption} loading="lazy" />
                  <figcaption>{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
