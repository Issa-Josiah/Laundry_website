import { Suspense } from "react";
import ContactForm from "../ContactForm";
import SocialLinks from "../SocialLinks";
import { siteData as d } from "../../data/mockData";

export const metadata = {
  title: "Contact",
  description:
    "Visit us at Kirigiti Center, near Todas Restaurant. Call, WhatsApp or send an inquiry.",
};

export default function ContactPage() {
  const c = d.contact;
  const telHref = `tel:${c.phone.split(" or ")[0].replace(/\s/g, "")}`;
  const phoneDisplay = c.phone.split(" or ")[0];
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.mapsQuery)}`;

  return (
    <>
      {/* ===== INTRO ROW (new, on top) ===== */}
      <section className="contact-intro">
        <div className="container contact-intro-flex">
          <div className="contact-intro-text">
            <p className="eyebrow">Contact King&apos;s DryCleaners</p>
            <h1>Talk to the Kings team</h1>
            <p className="lead">
              Need a pickup, a quote, or help with dry-cleaning, carpets, duvets
              or curtains? Reach out and we&apos;ll respond the same day.
            </p>
            <div className="btn-row">
              <a href="#contact-form" className="btn">Send a message</a>
              <a href={telHref} className="btn btn-outline">Call {phoneDisplay}</a>
            </div>
          </div>

          {/* Floating quick contacts — hidden on mobile */}
          <aside className="quick-contact-card float-card" aria-label="Quick contacts">
            <h3>Quick contacts</h3>
            <p className="card-sub">Pick the route that fits your request.</p>
            <ul className="quick-list">
              <li>
                <span className="qc-label">Phone</span>
                <a href={telHref} className="qc-value">{phoneDisplay}</a>
              </li>
              <li>
                <span className="qc-label">WhatsApp</span>
                <a
                  href={`https://wa.me/${c.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="qc-value"
                >
                  {c.whatsappDisplay}
                </a>
              </li>
              <li>
                <span className="qc-label">Email</span>
                <a href={`mailto:${c.email}`} className="qc-value plain-link">
                  {c.email}
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* ===== ORIGINAL LAYOUT (kept) ===== */}
      <section id="contact-form" className="section contact">
        <div className="container">
          <p className="eyebrow">Let&apos;s lighten your load</p>
          <h2>Fresh starts here.</h2>
          <p className="lead">
            Visit us or contact us for any inquiries. Speak with us about prices,
            drop-off, collection, pickup or order updates.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>{c.place}</h3>
              <p className="line">{c.landmark}</p>

              <div className="hours">
                {c.hours.map((h) => (
                  <div key={h.days} className="hours-row">
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>

              <a href={mapsHref} target="_blank" rel="noreferrer" className="btn">
                Get directions on Google Maps
              </a>
              <p className="line">{c.note}</p>

              <p className="big">Call: {c.phone}</p>
              <p className="big">WhatsApp: {c.whatsappDisplay}</p>
              <p className="big">
                Email: <a href={`mailto:${c.email}`} className="plain-link">{c.email}</a>
              </p>

              <div className="btn-row">
                <a href={telHref} className="btn">Call us</a>
                <a
                  href={`https://wa.me/${c.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  WhatsApp us
                </a>
              </div>
              <SocialLinks contact={c} />
            </div>

            <Suspense fallback={<div className="form-card"><p>Loading form…</p></div>}>
              <ContactForm
                services={d.services.map((x) => x.title)}
                softeners={d.detergents.map((x) => x.name)}
                whatsapp={c.whatsapp}
                business={d.header.brandName}
              />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
