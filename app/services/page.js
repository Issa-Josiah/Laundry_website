import Link from "next/link";
import { siteData as d } from "../../data/mockData";

export const metadata = {
  title: "Services",
  description:
    "Wash & fold, dry cleaning, duvets, curtains, carpets, ironing, shoe cleaning and more. Prices confirmed per item.",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Care, down to the last fold</p>
        <h2>A clean for every need.</h2>
        <p className="lead">
          Final prices depend on weight, material, size and quantity.
          Contact us for a confirmed price.
        </p>

        <div className="services-grid">
          {d.services.map((s) => (
            <article key={s.id} className="card">
              <span className="num">{s.id}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <Link
                href={`/contact?service=${encodeURIComponent(s.title)}`}
                className="btn"
              >
                Inquire about this service
              </Link>
            </article>
          ))}
        </div>

        <div className="band" style={{ marginTop: 36 }}>
          <h3>{d.bulk.title}</h3>
          <p>{d.bulk.text}</p>
          <Link href="/contact" className="btn btn-light">{d.bulk.cta}</Link>
        </div>
      </div>
    </section>
  );
}
