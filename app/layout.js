
import { Nunito } from "next/font/google";
import "./globals.css";
import SocialLinks from "./SocialLinks";
import { siteData as d } from "../data/mockData";
import PublicHeader from "./PublicHeader";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const SITE_URL = "https://kingslaundry.co.ke";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "King's DryCleaners and Laundry | Kirigiti, Near Todas Restaurant",
    template: "%s | King's DryCleaners",
  },

  description:
    "King's DryCleaners offers professional laundry, dry cleaning, carpet, duvet and curtain cleaning, ironing and fumigation in Kirigiti near Todas Restaurant, Kiambu. Pickup and delivery available within approximately 5 km.",

  applicationName: "King's DryCleaners and Laundry",

  authors: [
    {
      name: "Lincovate Technologies",
      url: "https://lincovate.com",
    },
  ],

  creator: "Lincovate Technologies",
  publisher: "King's DryCleaners and Laundry",

  category: "Laundry and Dry Cleaning",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },

  manifest: "/manifest.webmanifest",

  appleWebApp: {
    capable: true,
    title: "Kings Laundry",
    statusBarStyle: "default",
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "King's DryCleaners and Laundry",
    locale: "en_KE",

    title:
      "King's DryCleaners and Laundry | Kirigiti, Kiambu",

    description:
      "Professional laundry and dry cleaning near Todas Restaurant, Kirigiti, Kiambu. Carpet, duvet, curtain cleaning, ironing and pickup and delivery within approximately 5 km.",

    images: [
      {
        url: "/images/hero-basket.png",
        width: 1200,
        height: 630,
        alt: "King's DryCleaners and Laundry services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "King's DryCleaners and Laundry | Kirigiti, Kiambu",

    description:
      "Laundry, dry cleaning, carpet, duvet and curtain cleaning near Todas Restaurant, Kirigiti. Pickup and delivery available.",

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

  // Local business structured data for Google
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",

    name: "King's DryCleaners and Laundry",
    url: SITE_URL,

    image: `${SITE_URL}/images/hero-basket.png`,

    description:
      "Professional laundry, dry cleaning, carpet, duvet, curtain cleaning, ironing and fumigation services in Kirigiti near Todas Restaurant, Kiambu County. Pickup and delivery available within approximately 5 km.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Kirigiti",
      addressRegion: "Kiambu County",
      addressCountry: "KE",
    },

    telephone: c.phone,
    email: c.email,

    areaServed: {
      "@type": "Place",
      name:
        "Kirigiti and surrounding areas within approximately 5 km of Todas Restaurant, Kiambu, Kenya",
    },

    parentOrganization: {
      "@type": "Organization",
      name: "King's DryCleaners and Laundry",
    },
  };

  return (
    <html lang="en-KE">
      <body className={nunito.className}>
        <PublicHeader data={d} />

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
                <p>
                  {c.place}, near Todas Restaurant,
                  Kirigiti, Kiambu
                </p>

                {c.hours.map((h) => (
                  <p key={h.days}>
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>

              <div>
                <h4>Let's lighten your load</h4>

                <p>{c.phone}</p>

                <p>
                  <a
                    href={`mailto:${c.email}`}
                    className="plain-link"
                  >
                    {c.email}
                  </a>
                </p>

                <SocialLinks contact={c} />

                <p style={{ marginTop: 10 }}>
                  Visit Us or Contact Us for any inquiries.
                </p>
              </div>

            </div>

            <p className="copy">
              © {new Date().getFullYear()} {d.name}
            </p>
          </div>
        </footer>

        {/* GOOGLE LOCAL BUSINESS STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

      </body>
    </html>
  );
}
