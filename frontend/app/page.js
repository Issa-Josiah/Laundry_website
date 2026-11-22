import { siteData as d } from "../data/mockData";

export default function Home() {
  const c = d.contact;
  return (
    <main>
      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="logo">
            {d.header.logo.show && (
              <img
                className="logo-img"
                src={d.header.logo.src}
                alt={d.header.logo.alt}
                style={{ width: d.header.logo.width, height: d.header.logo.height }}
              />
            )}
            <span className="logo-text">
              <strong>{d.header.brandName}</strong>
              <small>{d.header.tagline}</small>
            </span>
          </a>
          <nav className="nav">
            {d.header.nav.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Laundry calling? Kings coming!</p>
            <h1>{d.hero.title}</h1>
            <p>{d.hero.subtitle}</p>
            <div className="btn-row">
              <a href="#services" className="btn">Explore our services</a>
              <a href="#preference" className="btn">Visit our shop</a>
            </div>
            <span className="tag">{d.hero.locationTag}</span>
          </div>
          <img className="hero-img" src={d.hero.heroImage} alt="Basket of freshly folded laundry" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <p className="eyebrow">Care, down to the last fold</p>
          <h2>A clean for every need.</h2>
          <p className="lead">Final prices depend on weight, material, size and quantity. Contact us for a confirmed price.</p>

          <div className="services-grid">
            {d.services.map((s) => (
              <article key={s.id} className="card">
                <span className="num">{s.id}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <p className="meta">{s.pricingRule}</p>
                <p className="meta">{s.note}</p>
                <a href="#contact" className="btn">Inquire about this service</a>
              </article>
            ))}
          </div>

          <div className="band">
            <h3>{d.bulk.title}</h3>
            <p>{d.bulk.text}</p>
            <a href="#contact" className="btn btn-light">{d.bulk.cta}</a>
          </div>

          <div id="preference">
            <h3>Your laundry. Your preference.</h3>
            <p className="lead">Tell us your preferred fabric softener or detergent when you inquire.</p>
            <div className="detergents">
              {d.detergents.map((x) => (
                <div key={x.id} className="det">
                  <img src={x.image} alt={x.name} />
                  {x.name}
                </div>
              ))}
            </div>
          </div>

          <div className="band" style={{ marginTop: 36 }}>
            <h3>Tired of handwashing?</h3>
            <h3>We pick. We wash. We deliver.</h3>
            <p>Free pickup &amp; delivery in Kirigiti Ridge, near Todas Restaurant. Fast · Reliable · Hassle-free.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section gallery-wrap">
        <div className="container">
          <p className="eyebrow">A look at fresh</p>
          <h2>Care you can see.</h2>
          <div className="gallery">
            {d.gallery.map((g) => (
              <figure key={g.id}>
                <img src={g.image} alt={g.caption} />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + STEPS */}
      <section id="about" className="section">
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

          <h2 style={{ marginTop: 56 }}>Simple from drop-off to fresh.</h2>
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

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <div className="container">
          <p className="eyebrow">Let&apos;s lighten your load</p>
          <h2>Fresh starts here.</h2>
          <p className="lead">Visit us or contact us for any inquiries. Speak with us about prices, drop-off, collection, pickup or order updates.</p>

          <div className="contact-card">
            <h3>{c.place}</h3>
            <p>{c.landmark}</p>
            <p className="small">{c.hours}</p>
            <a href={c.mapsUrl} target="_blank" rel="noreferrer" className="btn">Get directions on Google Maps</a>
            <p className="small">{c.note}</p>
            <p className="big">Call: {c.phone}</p>
            <p className="big">WhatsApp: {c.phone}</p>
            <div className="btn-row">
              <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="btn">Call us</a>
              <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noreferrer" className="btn">WhatsApp us</a>
            </div>
            <div className="socials">
              <a href={`https://wa.me/${c.whatsapp}`} className="social wa" aria-label="WhatsApp">WA</a>
              <a href="#" className="social" aria-label="Instagram">IG</a>
              <a href="#" className="social" aria-label="X">X</a>
              <a href="#" className="social" aria-label="TikTok">TT</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h4>{d.name}</h4>
              <p>Tired of Handwashing?</p>
              <p>You wear it, We Care for it!</p>
            </div>
            <div>
              <h4>Visit us</h4>
              <p>{c.place}, near Todas Restaurant</p>
              <p>Monday – Saturday: 8:00 AM – 5:00 PM</p>
              <p>Sunday available upon request</p>
            </div>
            <div>
              <h4>Let&apos;s lighten your load</h4>
              <p>{c.phone}</p>
              <p>Visit Us or Contact Us for any inquiries.</p>
            </div>
          </div>
          <p className="copy">© 2026 {d.name}</p>
        </div>
      </footer>
    </main>
  );
}