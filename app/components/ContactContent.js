import { Suspense } from "react";
import ContactForm from "../ContactForm";
import SocialLinks from "../SocialLinks";
import { siteData as d } from "../../data/mockData";

export default function ContactContent({ content }) {
  const c = content.main;
  const telHref = `tel:${c.phone.split(" or ")[0].replace(/\s/g, "")}`;
  const phoneDisplay = c.phone.split(" or ")[0];

  return (
    <>
      <section className="contact-intro">
        <div className="container contact-intro-flex">
          <div className="contact-intro-text">
            <p className="eyebrow" data-edit="intro.eyebrow">{content.intro.eyebrow}</p>
            <h1 data-edit="intro.title">{content.intro.title}</h1>
            <p className="lead" data-edit="intro.lead">{content.intro.lead}</p>
            <div className="btn-row">
              <a href="#contact-form" className="btn" data-edit="intro.sendLabel">{content.intro.sendLabel}</a>
              <a href={telHref} className="btn btn-outline">{content.intro.callLabel} {phoneDisplay}</a>
            </div>
          </div>
          <aside className="quick-contact-card float-card" aria-label="Quick contacts">
            <h3 data-edit="quickContacts.title">{content.quickContacts.title}</h3>
            <p className="card-sub" data-edit="quickContacts.sub">{content.quickContacts.sub}</p>
            <ul className="quick-list">
              <li><span className="qc-label">Phone</span><a href={telHref} className="qc-value">{phoneDisplay}</a></li>
              <li><span className="qc-label">WhatsApp</span><a href={`https://wa.me/${c.whatsapp}`} className="qc-value">{c.whatsappDisplay}</a></li>
              <li><span className="qc-label">Email</span><a href={`mailto:${c.email}`} className="qc-value plain-link">{c.email}</a></li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="contact-form" className="section contact">
        <div className="container">
          <p className="eyebrow" data-edit="main.eyebrow">{c.eyebrow}</p>
          <h2 data-edit="main.title">{c.title}</h2>
          <p className="lead" data-edit="main.lead">{c.lead}</p>

          <div className="contact-grid">
            <div className="contact-card">
              <h3 data-edit="main.place">{c.place}</h3>
              <p className="line" data-edit="main.landmark">{c.landmark}</p>
              <div className="hours">
                {c.hours.map((h, i) => (
                  <div key={h.days} className="hours-row">
                    <span data-edit={`main.hours.${i}.days`}>{h.days}</span>
                    <span data-edit={`main.hours.${i}.time`}>{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="line" data-edit="main.note">{c.note}</p>
              <p className="big">Call: <span data-edit="main.phone">{c.phone}</span></p>
              <p className="big">Email: <a href={`mailto:${c.email}`} className="plain-link" data-edit="main.email">{c.email}</a></p>
              <div className="btn-row">
                <a href={telHref} className="btn">Call us</a>
                <a href={`https://wa.me/${c.whatsapp}`} className="btn">WhatsApp us</a>
              </div>
              <SocialLinks contact={d.contact} />
            </div>

            <Suspense fallback={<div className="form-card"><p>Loading form…</p></div>}>
              <ContactForm
                services={d.services.map((x) => x.title)}
                softeners={d.detergents.map((x) => x.name)}
                whatsapp={d.contact.whatsapp}
                business={d.header.brandName}
              />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
