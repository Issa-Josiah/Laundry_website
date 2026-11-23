"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";

export default function SiteChrome({ data, contact }) {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="/" className="logo">
            {data.header.logo.show && (
              <img
                className="logo-img"
                src={data.header.logo.src}
                alt={data.header.logo.alt}
                style={{
                  width: data.header.logo.width,
                  height: data.header.logo.height,
                }}
              />
            )}

            <span className="logo-text">
              <strong>{data.header.brandName}</strong>
              <small>{data.header.tagline}</small>
            </span>
          </a>

          <Nav
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Gallery", href: "/gallery" },
              { label: "Find Us", href: "/find-us" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </div>
      </header>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h4>{data.name}</h4>
              <p>Tired of Handwashing?</p>
              <p>You wear it, We Care for it!</p>
            </div>

            <div>
              <h4>Visit us</h4>
              <p>{contact.place}, near Todas Restaurant</p>
              {contact.hours.map((h) => (
                <p key={h.days}>
                  {h.days}: {h.time}
                </p>
              ))}
            </div>

            <div>
              <h4>Let's lighten your load</h4>
              <p>{contact.phone}</p>
              <p>
                <a href={`mailto:${contact.email}`} className="plain-link">
                  {contact.email}
                </a>
              </p>

              <SocialLinks contact={contact} />

              <p style={{ marginTop: 10 }}>
                Visit Us or Contact Us for any inquiries.
              </p>
            </div>
          </div>

          <p className="copy">© 2026 {data.name}</p>
        </div>
      </footer>
    </>
  );
}
