import { Nunito } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";
import { siteData as d } from "../data/mockData";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const metadata = {
  title: {
    default: "King's DryCleaners and Laundry | Kirigiti Center",
    template: "%s | King's DryCleaners",
  },
  description:
    "Laundry, dry-cleaning, carpets, duvets, curtains, ironing and fumigation. Pickup and delivery near Todas Restaurant, Kirigiti Center.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  const c = d.contact;
  return (
    <html lang="en">
      <body className={nunito.className}>
        <header className="header">
          <div className="container header-inner">
            <a href="/" className="logo">
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

        <main>{children}</main>

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
                {c.hours.map((h) => (
                  <p key={h.days}>{h.days}: {h.time}</p>
                ))}
              </div>
              <div>
                <h4>Let&apos;s lighten your load</h4>
                <p>{c.phone}</p>
                <p>{c.email}</p>
                <SocialLinks contact={c} />
                <p style={{ marginTop: 10 }}>Visit Us or Contact Us for any inquiries.</p>
              </div>
            </div>
            <p className="copy">© 2026 {d.name}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
