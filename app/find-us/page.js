import { siteData as d } from "../../data/mockData";

export const metadata = {
  title: "Find Us",
  description:
    "Find King's DryCleaners and Laundry at Kirigiti Center, along Kirigiti Riabai Road, near Todas Restaurant. Call us if you get lost.",
};

export default function FindUsPage() {
  const c = d.contact;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.mapsQuery)}`;
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(c.mapsQuery)}&output=embed`;
  const telHref = `tel:${c.phone.split(" or ")[0].replace(/\s/g, "")}`;

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Come see us</p>
        <h2>Find us.</h2>
        <p className="lead">
          We are at {c.place}, {c.landmark} If you get lost, just give us a call.
        </p>

        {/* Call-ask-if-lost banner */}
        <div className="lost-banner">
          <div>
            <h3>Can&apos;t find us?</h3>
            <p>Call and we&apos;ll guide you in.</p>
          </div>
          <a href={telHref} className="btn"> Call Now </a>
        </div>

        {/* Map embed */}
        <div className="map-wrap">
          <iframe
            title="Map to King's DryCleaners and Laundry"
            src={embedSrc}
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Location info grid */}
        <div className="find-grid">
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

            <p className="big">Call: {c.phone}</p>
            <p className="big">WhatsApp: {c.whatsappDisplay}</p>

            <div className="btn-row">
              <a href={mapsHref} target="_blank" rel="noreferrer" className="btn">
                Open in Google Maps
              </a>
              <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noreferrer" className="btn">
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="contact-card">
            <h3>Getting here</h3>
            <p className="line">
              Along Kirigiti Riabai Road, near Todas Restaurant. Free pickup and
              delivery in Kirigiti Riabai.
            </p>
            <p className="line">{c.note}</p>
            <p className="big" style={{ marginTop: 16 }}>
              Ask for: <span>Kings DryCleaners and Laundry</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
