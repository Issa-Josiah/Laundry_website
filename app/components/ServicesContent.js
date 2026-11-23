import Link from "next/link";

const EMPTY_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 420'%3E%3Crect width='640' height='420' fill='%23f1f5f9'/%3E%3Ctext x='320' y='190' text-anchor='middle' font-size='65' fill='%2394a3b8'%3E%2B%3C/text%3E%3Ctext x='320' y='250' text-anchor='middle' font-size='24' fill='%2364748b'%3EChange photo%3C/text%3E%3C/svg%3E";

export default function ServicesContent({
  content,
  showEmptyImageSlots = false,
}) {
  return (
    <>
      <section className="services-hero">
        <div className="container services-hero-grid">
          <div>
            <p className="eyebrow" data-edit="hero.eyebrow">
              {content.hero.eyebrow}
            </p>
            <h1 data-edit="hero.title">{content.hero.title}</h1>
            <p className="lead" data-edit="hero.lead">
              {content.hero.lead}
            </p>
            <div className="btn-row">
              <Link href="/contact#contact-form" className="btn">
                Ask for a quote
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Talk to us
              </Link>
            </div>
          </div>

          <aside className="services-hero-card">
            <h3 data-edit="hero.pricingTitle">
              {content.hero.pricingTitle}
            </h3>
            <ul className="price-list">
              {content.hero.pricingItems.map((item, i) => (
                <li key={i}>
                  <span data-edit={`hero.pricingItems.${i}.label`}>
                    {item.label}
                  </span>
                  <span data-edit={`hero.pricingItems.${i}.text`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="card-foot" data-edit="hero.pricingFoot">
              {content.hero.pricingFoot}
            </p>
          </aside>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section">
        <div className="container">
          <div className="services-grid">
            {content.services.map((s, i) => {
              const hasImage =
                typeof s.image === "string" && s.image.trim() !== "";

              return (
                <article key={s.id} className="service-tile">
                  <div className="service-tile-media">
                    {hasImage || showEmptyImageSlots ? (
                      <img
                        className={
                          !hasImage ? "admin-service-image" : ""
                        }
                        data-edit-image={`services.${i}.image`}
                        src={hasImage ? s.image : EMPTY_IMAGE}
                        alt={s.title}
                      />
                    ) : (
                      <div className="ph">{s.title}</div>
                    )}

                    <span
                      className="service-tile-num"
                      data-edit={`services.${i}.id`}
                    >
                      {s.id}
                    </span>
                  </div>

                  <div className="service-tile-body">
                    <h3 data-edit={`services.${i}.title`}>
                      {s.title}
                    </h3>
                    <p data-edit={`services.${i}.description`}>
                      {s.description}
                    </p>
                    <Link
                      href={`/contact?service=${encodeURIComponent(s.title)}#contact-form`}
                      className="service-tile-link"
                    >
                      Inquire <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETERGENTS */}
      {content.detergents && content.detergents.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <h3 data-edit="preference.title">
              {content.preference?.title ||
                "Your laundry. Your preference."}
            </h3>

            <p className="lead" data-edit="preference.lead">
              {content.preference?.lead ||
                "Tell us your preferred fabric softener when you inquire."}
            </p>

            <div className="detergents">
              {content.detergents.map((x, i) => {
                const hasImage =
                  typeof x.image === "string" &&
                  x.image.trim() !== "";

                return (
                  <div key={x.id} className="det">
                    {hasImage || showEmptyImageSlots ? (
                      <img
                        className={
                          !hasImage ? "admin-detergent-image" : ""
                        }
                        data-edit-image={`detergents.${i}.image`}
                        src={hasImage ? x.image : EMPTY_IMAGE}
                        alt={x.name}
                      />
                    ) : null}

                    <span data-edit={`detergents.${i}.name`}>
                      {x.name}
                    </span>

                    {showEmptyImageSlots && !hasImage && (
                      <small className="gallery-slot-label">
                        Photo not uploaded
                      </small>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* BULK ORDERS */}
      <section className="section">
        <div className="container">
          <div className="bulk-band">
            <div>
              <p
                className="eyebrow"
                style={{ color: "rgba(255,255,255,0.85)" }}
                data-edit="bulk.title"
              >
                {content.bulk.title}
              </p>
              <h2 data-edit="bulk.text">{content.bulk.text}</h2>
            </div>
            <Link
              href="/contact#contact-form"
              className="btn btn-light"
              data-edit="bulk.cta"
            >
              {content.bulk.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
