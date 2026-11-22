import { siteData as d } from "../../data/mockData";

export const metadata = {
  title: "Gallery",
  description:
    "Freshly folded laundry, pressed garments and cleaning work from King's DryCleaners and Laundry.",
};

export default function GalleryPage() {
  return (
    <section className="section gallery-wrap">
      <div className="container">
        <p className="eyebrow">A look at fresh</p>
        <h2>Care you can see.</h2>
        <div className="gallery">
          {d.gallery.map((g) => (
            <figure key={g.id}>
              {g.image ? (
                <img src={g.image} alt={g.caption} />
              ) : (
                <div className="ph">Photo coming soon</div>
              )}
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
