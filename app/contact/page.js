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
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.mapsQuery)}`;

  return (
    <section className="section contact">
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
              Email: <a href={`mailto:${c.email}`}>{c.email}</a>
            </p>

            <div className="btn-row">
              <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="btn">Call us</a>
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
  );
}
