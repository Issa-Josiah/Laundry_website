import Link from "next/link";
import { siteData as d } from "../../data/mockData";
import ServiceCarousel from "./ServiceCarousel";

export const metadata = {
  title: "About Us",
  description:
    "Good care starts close to home. King's DryCleaners serves Kirigiti Center with laundry, dry-cleaning and home fabric care.",
      alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | King's DryCleaners",
    description: "Good care starts close to home. King's DryCleaners serves Kirigiti Center with laundry, dry-cleaning and home fabric care.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ===== WELCOME: shop picture + note + CTAs ===== */}
      <section className="section welcome-section">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-image">
              {/* Replace with an actual photo of the shop when ready */}
              <img
                src={d.about.image}
                alt="King's DryCleaners shop front"
              />
            </div>

          <div className="welcome-note welcome-note--pop">
            <p className="eyebrow">Welcome to King&apos;s</p>
            <h1>Good care starts close to home.</h1>

            <ul className="welcome-facts">
              <li>
                <span className="fact-label">Location</span>
                <span className="fact-value">{d.contact.place}, {d.contact.landmark}</span>
              </li>
              {d.contact.hours.map((h) => (
                <li key={h.days}>
                  <span className="fact-label">{h.days}</span>
                  <span className="fact-value">{h.time}</span>
                </li>
              ))}
            </ul>

            <p className="trust-phrase">
              Trusted by families and businesses around Kirigiti — you wear it, we care for it.
            </p>

            <div className="btn-row">
              <Link href="/find-us" className="btn">Find us</Link>
              <Link href="/contact" className="btn btn-outline">Contact us</Link>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ===== STEPS + ROTATING SERVICES ===== */}
      <section className="section section-alt">
        <div className="container">
          <div className="two-col">
            <div className="steps-col">
              <p className="eyebrow">From drop-off to fresh</p>
              <h2>Simple from start to finish.</h2>
              <div className="steps vertical">
                {d.steps.map((s) => (
                  <div key={s.id} className="step">
                    <span className="num">{s.id}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-col">
              <ServiceCarousel services={d.services} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ORIGINAL "GOOD CARE" BLOCK ===== */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <img src={d.about.image} alt="Wash, Dry, Fold sign" />
            <div>
              <p className="eyebrow">{d.about.eyebrow}</p>
              <h2>{d.about.title}</h2>
              <p>{d.about.text}</p>
              <p className="highlight">{d.about.highlight}</p>
              <p>{d.about.text2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
