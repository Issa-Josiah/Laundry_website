import { Nunito } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
import SocialLinks from "./SocialLinks";
import { siteData as d } from "../data/mockData";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

// ⚠️ Change this to your real domain before deploying
const SITE_URL = "https://kingslaundry.co.ke";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "King's DryCleaners and Laundry | Kirigiti Center",
    template: "%s | King's DryCleaners",
  },
  description:
    "Laundry, dry-cleaning, carpets, duvets, curtains, ironing and fumigation. Pickup and delivery near Todas Restaurant, Kirigiti Center.",

  // PWA manifest
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Kings Laundry",
    statusBarStyle: "default",
  },

  // Open Graph — WhatsApp / Facebook / LinkedIn previews
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "King's DryCleaners and Laundry",
    title: "King's DryCleaners and Laundry | Kirigiti Center",
    description:
      "Laundry, dry-cleaning, carpets, duvets, curtains, ironing and fumigation. Pickup and delivery near Todas Restaurant.",
    locale: "en_KE",
    images: [
      {
        url: "/images/hero-basket.png",
        width: 1200,
        height: 630,
        alt: "Basket of freshly folded laundry — King's DryCleaners",
      },
    ],
  },

  // Twitter / X cards
  twitter: {
    card: "summary_large_image",
    title: "King's DryCleaners and Laundry | Kirigiti Center",
    description:
      "Laundry, dry-cleaning, carpets, duvets, curtains and fumigation at Kirigiti Center.",
    images: ["/images/hero-basket.png"],
  },
};

export const viewport = {
  themeColor: "#6FAEED",
  width: "device-width",
  initialScale: 1,
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
                <p>
                  <a href={`mailto:${c.email}`} className="plain-link">{c.email}</a>
                </p>
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
