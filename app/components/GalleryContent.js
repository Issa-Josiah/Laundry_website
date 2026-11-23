export default function GalleryContent({ content }) {
  const visible = content.gallery.filter((g) => g.image && g.image.trim() !== "");

  return (
    <>
      <section className="gallery-hero">
        <div className="container">
          <p className="eyebrow" data-edit="hero.eyebrow">{content.hero.eyebrow}</p>
          <h1 data-edit="hero.title">{content.hero.title}</h1>
          <p className="lead" data-edit="hero.lead">{content.hero.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {visible.length === 0 ? (
            <div className="gallery-empty"><p>Photos are on the way — check back soon.</p></div>
          ) : (
            <div className="gallery-grid">
              {visible.map((g) => (
                <figure key={g.id} className="gallery-item">
                  <img data-edit-image={`gallery.${g.id - 1}.image`} src={g.image} alt={g.caption} loading="lazy" />
                  <figcaption data-edit={`gallery.${g.id - 1}.caption`}>{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
