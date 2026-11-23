import Link from "next/link";
import { siteData as d } from "../data/mockData";

export const metadata = {
  title: "Home",
  description:
    "You wear it, we care for it. Laundry, dry-cleaning, carpets, duvets, curtains and fumigation at Kirigiti Center.",
      alternates: { canonical: "/home" },
  openGraph: {
    title: "Home | King's DryCleaners",
    description: "You wear it, we care for it. Laundry, dry-cleaning, carpets, duvets, curtains and fumigation at Kirigiti Center.",
    url: "/home",
  },
};

export default function Home() {
  const featured = d.services.slice(0, 3);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero hero--tall hero--inset">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Laundry calling? Kings coming!</p>
            <h1>{d.hero.title}</h1>
            <p>{d.hero.subtitle}</p>
            <div className="btn-row">
              <Link href="/services" className="btn">Explore our services</Link>
              <Link href="/find-us#map" className="btn">Visit our shop</Link>
            </div>
            <span className="tag">{d.hero.locationTag}</span>
          </div>
          <img
            className="hero-img"
            src={d.hero.heroImage}
            alt="Basket of freshly folded laundry"
          />
        </div>
      </section>

      {/* ===== STEPS ===== */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">From drop-off to fresh</p>
          <h2>Simple from start to finish.</h2>
          <div className="steps">
            {d.steps.map((s) => (
              <div key={s.id} className="step">
                <span className="num">{s.id}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED SERVICES ===== */}
      <section className="section services-section">
        <div className="container">
          <p className="eyebrow">Care, down to the last fold</p>
          <h2>A clean for every need.</h2>
          <p className="lead">
            Final prices depend on weight, material, size and quantity.
            Contact us for a confirmed price.
          </p>

          <div className="services-grid three" style={{ marginTop: 28 }}>
            {featured.map((s) => (
              <article key={s.id} className="card service-card">
                {s.image ? (
                  <img className="service-img" src={s.image} alt={s.title} />
                ) : (
                  <div className="service-img ph">{s.title}</div>
                )}
                <div className="service-body">
                  <span className="num">{s.id}</span>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <Link
                    href={`/contact?service=${encodeURIComponent(s.title)}#contact-form`}
                    className="btn"
                  >
                    Inquire
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link href="/services" className="btn">See more services →</Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <p className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>
                Fresh starts here
              </p>
              <h2 className="cta-title">Ready when you are.</h2>
              <p className="cta-sub">
                View our gallery or get in touch — we&apos;ll pick it up from there.
              </p>
              <div className="btn-row" style={{ marginTop: 20 }}>
                <Link href="/gallery" className="btn btn-light">View gallery</Link>
                <Link href="/contact" className="btn btn-light">Contact us</Link>
              </div>
            </div>

            <div className="cta-decor" aria-hidden="true">
              <span className="cta-bubble" />
              <span className="cta-bubble cta-bubble--sm" />
              <span className="cta-bubble cta-bubble--md" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
