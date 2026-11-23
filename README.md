# King's DryCleaners and Laundry — Website

Multi-page marketing site for **King's DryCleaners and Laundry**, Kirigiti Center, Kenya.

Built with **Next.js (App Router)**, plain CSS, and a single content file (`data/mockData.js`). Statically exported and deployed on **Cloudflare Pages**.

---

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, 3-step process, 3 featured services, closing CTA |
| `/services` | Full service catalogue (14 services), pricing info, bulk order CTA |
| `/gallery` | Photo grid — only items with an image are shown |
| `/about` | Welcome / location facts, rotating service carousel, "good care" block |
| `/find-us` | Google Maps embed, location info, "call if lost" banner |
| `/contact` | Contact hero, quick-contact card, branch cards, WhatsApp inquiry form |

---

## Tech stack

- **Next.js** (App Router, static export)
- **React**
- **Plain CSS** (`app/globals.css`) — no Tailwind, no CSS-in-JS
- **Nunito** font via `next/font/google`
- Zero runtime backend — contact form hands off to **WhatsApp**

---

## Project structure

.
├── app/
│ ├── layout.js # Root layout: header, footer, global metadata, font
│ ├── page.js # Home
│ ├── globals.css # All site styles
│ ├── Nav.js # Responsive nav (client component)
│ ├── SocialLinks.js # WhatsApp / Facebook / TikTok icons
│ ├── ContactForm.js # Inquiry form → WhatsApp (client component)
│ ├── services/page.js
│ ├── gallery/page.js
│ ├── about/
│ │ ├── page.js
│ │ └── ServiceCarousel.js # Rotating service carousel (client)
│ ├── find-us/page.js
│ └── contact/page.js
├── data/
│ └── mockData.js # ALL site content lives here
├── public/
│ └── images/ # Logo, hero, services, gallery, detergents
├── jsconfig.json
├── next.config.mjs # Static export config
└── package.json

text

---

## Getting started

```bash
# Install dependencies
npm install

# Run dev server → http://localhost:3000
npm run dev

# Production build (static export → ./out)
npm run build

# Preview the production build locally
npx serve out
The build requires Node.js 20+. On Cloudflare Pages, set the env var NODE_VERSION=20 if builds fail.

Editing content
Almost everything is controlled from data/mockData.js.

What you want to change	Where
Brand name, tagline, logo	siteData.header
Hero headline, subtitle, image	siteData.hero
Services (title, description, image)	siteData.services[]
Bulk-order message	siteData.bulk
Fabric-softener options	siteData.detergents[]
Gallery photos (30 slots)	siteData.gallery[]
About text and image	siteData.about
"How it works" steps	siteData.steps[]
Address, hours, phone, email, socials	siteData.contact
Adding gallery photos
The gallery has 30 pre-defined slots. Only items with a non-empty image field are rendered — empty slots stay hidden automatically.

js
// data/mockData.js
gallery: [
  { id: 1, caption: "Freshly folded", image: "/images/folded.png" }, // visible
  { id: 2, caption: "Pressed & ready", image: "" },                  // hidden
  // ...
]
To make a photo appear:

Drop the image into public/images/.

Set its image path in the matching gallery slot.

No code changes needed.

Adding service photos
Same idea — give each service in siteData.services an image path:

js
{ id: "01", title: "Wash & Fold", description: "...", image: "/images/wash-fold.png" }
Services without an image fall back to a styled text placeholder on cards.

Contact form
The form on /contact doesn't hit a backend. On submit it:

Validates service + phone

Builds a multi-line WhatsApp message

Opens https://wa.me/<number>?text=<message> in a new tab

Inquiry buttons across the site link to /contact?service=<name>#contact-form, which pre-selects the service in the form and scrolls to it.

The WhatsApp number is siteData.contact.whatsapp — set in international format without the leading + (e.g. 25492590662).

SEO
Page titles/descriptions use the Next.js metadata export per page.

The root layout defines a title.template so page titles read "Services | King's DryCleaners".

Favicons are file-based: drop favicon.ico, icon.png, and apple-icon.png into app/ and Next.js wires them up automatically.

Deployment — Cloudflare Pages
The project is configured for static export (output: "export" in next.config.mjs).

Push the repo to GitHub.

Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.

Pick the repository.

Use these build settings:

Setting	Value
Framework preset	Next.js (Static HTML Export)
Build command	npx next build
Build output directory	out
Environment variable (if needed)	NODE_VERSION=20
Deploy.

Every push to the connected branch triggers an automatic redeploy.

Notes on static export
searchParams is not available at build time. The contact page reads ?service= on the client via useSearchParams() (inside <Suspense>), so pre-selection still works after hydration.

Next.js image optimization is disabled (images.unoptimized: true) — this is required for static export. All images in public/images/ are served as-is.

No server functions, no API routes, no ISR. If you later need a backend (e.g. an admin upload editor), Cloudflare Functions or Workers can be added alongside Pages.

Known TODO
□ Replace placeholder Facebook / TikTok URLs in siteData.contact (currently empty strings, icons are hidden when empty).
□ Add all referenced images under public/images/ (logo, hero, services, gallery, detergents, about).
□ Fill remaining gallery slots as photos become available.
□ Plan/admin editor for uploading gallery photos (future phase).
License
Private project. All content © King's DryCleaners and Laundry.

---

## Favicons & metadata

### Favicons

Next.js auto-detects these files in `app/`:

| File | Purpose |
|---|---|
| `app/favicon.ico` | Browser tab (32×32) |
| `app/icon.png` | General icon (512×512) |
| `app/apple-icon.png` | iOS home screen (180×180) |

Generate them from `public/images/logo.png` using [realfavicongenerator.net](https://realfavicongenerator.net) or ImageMagick:

```bash
convert public/images/logo.png -resize 32x32   app/favicon.ico
convert public/images/logo.png -resize 512x512 app/icon.png
convert public/images/logo.png -resize 180x180 app/apple-icon.png
Metadata
All SEO metadata is in app/layout.js — page titles use a template, so per-page metadata only needs title + description + alternates.canonical.

Before going live, change:

js
const SITE_URL = "https://kingslaundry.co.ke";
to your actual domain in:

app/layout.js

app/sitemap.js

app/robots.js

Open Graph image
metadata.openGraph.images points to /images/hero-basket.png. For best results, either resize it to 1200×630 or add a dedicated public/images/og-image.png at that size and update the path.

Sitemap & robots
Auto-generated at build time:

/sitemap.xml — from app/sitemap.js

/robots.txt — from app/robots.js

After deploy, submit https://yourdomain.com/sitemap.xml to Google Search Console.
