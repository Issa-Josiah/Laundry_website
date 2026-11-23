import Link from "next/link";

export default function ServicesContent({ content }) {
  return (
    <>
      <section className="services-hero">
        <div className="container services-hero-grid">
          <div>
            <p className="eyebrow" data-edit="hero.eyebrow">{content.hero.eyebrow}</p>
            <h1 data-edit="hero.title">{content.hero.title}</h1>
            <p className="lead" data-edit="hero.lead">{content.hero.lead}</p>
            <div className="btn-row">
              <Link href="/contact#contact-form" className="btn">Ask for a quote</Link>
              <Link href="/contact" className="btn btn-outline">Talk to us</Link>
            </div>
          </div>
          <aside className="services-hero-card">
            <h3 data-edit="hero.pricingTitle">{content.hero.pricingTitle}</h3>
            <ul className="price-list">
              {content.hero.pricingItems.map((item, i) => (
                <li key={i}>
                  <span className="pc-label" data-edit={`hero.pricingItems.${i}.label`}>{item.label}</span>
                  <span className="pc-text" data-edit={`hero.pricingItems.${i}.text`}>{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="card-foot" data-edit="hero.pricingFoot">{content.hero.pricingFoot}</p>
          </aside>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="services-grid">
            {content.services.map((s, i) => (
              <article key={s.id} className="service-tile">
                <div className="service-tile-media">
                  {s.image ? (
                    <img data-edit-image={`services.${i}.image`} src={s.image} alt={s.title} />
                  ) : (
                    <div className="ph">{s.title}</div>
                  )}
                  <span className="service-tile-num" data-edit={`services.${i}.id`}>{s.id}</span>
                </div>
                <div className="service-tile-body">
                  <h3 data-edit={`services.${i}.title`}>{s.title}</h3>
                  <p data-edit={`services.${i}.description`}>{s.description}</p>
                  <Link href={`/contact?service=${encodeURIComponent(s.title)}#contact-form`} className="service-tile-link">
                    Inquire <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {content.detergents && content.detergents.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <h3 data-edit="preference.title">{content.preference?.title || "Your laundry. Your preference."}</h3>
            <p className="lead" data-edit="preference.lead">{content.preference?.lead || "Tell us your preferred fabric softener when you inquire."}</p>
            <div className="detergents">
              {content.detergents.map((x, i) => (
                <div key={x.id} className="det">
                  {x.image && (
                    <img data-edit-image={`detergents.${i}.image`} src={x.image} alt={x.name} />
                  )}
                  <span data-edit={`detergents.${i}.name`}>{x.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="bulk-band">
            <div>
              <p className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }} data-edit="bulk.title">{content.bulk.title}</p>
              <h2 data-edit="bulk.text">{content.bulk.text}</h2>
            </div>
            <Link href="/contact#contact-form" className="btn btn-light" data-edit="bulk.cta">{content.bulk.cta}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
