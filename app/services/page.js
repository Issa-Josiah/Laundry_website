import Link from "next/link";
import { siteData as d } from "../../data/mockData";

export const metadata = {
  title: "Services",
  description: "Wash & fold, dry cleaning, duvets, curtains, carpets, ironing, shoe cleaning and more. Prices confirmed per item.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | King's DryCleaners",
    description: "Wash & fold, dry cleaning, duvets, curtains, carpets, ironing, shoe cleaning and more.",
    url: "/services",
  },
};

export default function ServicesPage() {
  const c = d.contact;

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="services-hero">
        <div className="container services-hero-grid">
          <div>
            <p className="eyebrow">Care, down to the last fold</p>
            <h1>A clean for every need.</h1>
            <p className="lead">
              From everyday laundry to carpets, duvets and upholstery — everything
              you care for, cleaned with care. Final prices depend on weight,
              material, size and quantity.
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
            <h3>How pricing works</h3>
            <ul className="price-list">
              <li>
                <span className="pc-label">Weight-based</span>
                <span className="pc-text">Laundry &amp; wash-and-fold</span>
              </li>
              <li>
                <span className="pc-label">Per item</span>
                <span className="pc-text">Dry-cleaning, ironing, shoes</span>
              </li>
              <li>
                <span className="pc-label">Per sq. metre</span>
                <span className="pc-text">Carpets, rugs, sofas</span>
              </li>
            </ul>
            <p className="card-foot">
              Bulk orders get discounts. Ask us for a confirmed price.
            </p>
          </aside>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="section services-section">
        <div className="container">
          <div className="services-grid">
            {d.services.map((s) => (
              <article key={s.id} className="service-tile">
                <div className="service-tile-media">
                  {s.image ? (
                    <img src={s.image} alt={s.title} />
                  ) : (
                    <div className="ph">{s.title}</div>
                  )}
                  <span className="service-tile-num">{s.id}</span>
                </div>
                <div className="service-tile-body">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <Link
                    href={`/contact?service=${encodeURIComponent(s.title)}#contact-form`}
                    className="service-tile-link"
                  >
                    Inquire <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BULK / CTA ===== */}
      <section className="section">
        <div className="container">
          <div className="bulk-band">
            <div>
              <p className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>
                {d.bulk.title}
              </p>
              <h2>{d.bulk.text}</h2>
            </div>
            <Link href="/contact#contact-form" className="btn btn-light">
              {d.bulk.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
