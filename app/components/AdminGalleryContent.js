const EMPTY_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 420'%3E%3Crect width='640' height='420' fill='%23f1f5f9'/%3E%3Ctext x='320' y='195' text-anchor='middle' font-size='60' fill='%2394a3b8'%3E%2B%3C/text%3E%3Ctext x='320' y='250' text-anchor='middle' font-size='24' fill='%2364748b'%3EUpload photo%3C/text%3E%3C/svg%3E";

export default function AdminGalleryContent({ content }) {
  return (
    <>
      <section className="gallery-hero">
        <div className="container">
          <p className="eyebrow" data-edit="hero.eyebrow">
            {content.hero.eyebrow}
          </p>

          <h1 data-edit="hero.title">
            {content.hero.title}
          </h1>

          <p className="lead" data-edit="hero.lead">
            {content.hero.lead}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {content.gallery.map((g, index) => {
              const hasImage =
                typeof g.image === "string" &&
                g.image.trim() !== "";

              return (
                <figure
                  key={g.id}
                  className={`gallery-item ${
                    hasImage ? "" : "gallery-empty-slot"
                  }`}
                >
                  <img
                    data-edit-image={`gallery.${index}.image`}
                    src={hasImage ? g.image : EMPTY_IMAGE}
                    alt={g.caption}
                    loading="lazy"
                  />

                  <figcaption
                    data-edit={`gallery.${index}.caption`}
                  >
                    {g.caption}
                  </figcaption>

                  {!hasImage && (
                    <span className="gallery-slot-label">
                      Photo not uploaded
                    </span>
                  )}
                </figure>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
