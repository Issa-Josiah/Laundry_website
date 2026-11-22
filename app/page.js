import Link from "next/link";
import { siteData as d } from "../data/mockData";

export const metadata = {
  title: "Home",
  description:
    "You wear it, we care for it. Laundry, dry-cleaning, carpets, duvets, curtains and fumigation at Kirigiti Center.",
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Laundry calling? Kings coming!</p>
            <h1>{d.hero.title}</h1>
            <p>{d.hero.subtitle}</p>
            <div className="btn-row">
              <Link href="/services" className="btn">Explore our services</Link>
              <Link href="/contact" className="btn">Visit our shop</Link>
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

      <section className="section">
        <div className="container">
          <p className="eyebrow">Care, down to the last fold</p>
          <h2>A clean for every need.</h2>
          <p className="lead">
            Final prices depend on weight, material, size and quantity.
            Contact us for a confirmed price.
          </p>
          <div className="btn-row" style={{ marginTop: 20 }}>
            <Link href="/services" className="btn">See all services</Link>
            <Link href="/gallery" className="btn">View gallery</Link>
            <Link href="/about" className="btn">About us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
