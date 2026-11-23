export default function FindUsContent({ content }) {
  const c = content.location;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.mapsQuery)}`;
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(c.mapsQuery)}&output=embed`;
  const telHref = `tel:${c.phone.split(" or ")[0].replace(/\s/g, "")}`;

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow" data-edit="hero.eyebrow">{content.hero.eyebrow}</p>
        <h2 data-edit="hero.title">{content.hero.title}</h2>
        <p className="lead" data-edit="hero.lead">{content.hero.lead}</p>

        <div className="lost-banner">
          <div>
            <h3 data-edit="hero.lostTitle">{content.hero.lostTitle}</h3>
            <p data-edit="hero.lostText">{content.hero.lostText}</p>
          </div>
          <a href={telHref} className="btn">{content.hero.callLabel} {c.whatsappDisplay}</a>
        </div>

        <div className="map-wrap" id="map">
          <iframe title="Map to King's DryCleaners and Laundry" src={embedSrc} width="100%" height="420" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>

        <div className="find-grid">
          <div className="contact-card">
            <h3 data-edit="location.place">{c.place}</h3>
            <p className="line" data-edit="location.landmark">{c.landmark}</p>
            <div className="hours">
              {c.hours.map((h, i) => (
                <div key={h.days} className="hours-row">
                  <span data-edit={`location.hours.${i}.days`}>{h.days}</span>
                  <span data-edit={`location.hours.${i}.time`}>{h.time}</span>
                </div>
              ))}
            </div>
            <p className="big">Call: <span data-edit="location.phone">{c.phone}</span></p>
            <p className="big">WhatsApp: <span data-edit="location.whatsappDisplay">{c.whatsappDisplay}</span></p>
            <div className="btn-row">
              <a href={mapsHref} target="_blank" rel="noreferrer" className="btn">Open in Google Maps</a>
              <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noreferrer" className="btn">WhatsApp us</a>
            </div>
          </div>
          <div className="contact-card">
            <h3 data-edit="gettingHere.title">{content.gettingHere.title}</h3>
            <p className="line" data-edit="gettingHere.text">{content.gettingHere.text}</p>
            <p className="big" style={{ marginTop: 16 }}>Ask for: <span data-edit="gettingHere.askFor">{content.gettingHere.askFor}</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
