# King's DryCleaners and Laundry

Multi-page Next.js website for King's DryCleaners and Laundry, Kirigiti Center.

## Pages
- `/` — Home
- `/services` — Services
- `/gallery` — Gallery
- `/about` — About
- `/contact` — Contact

## Develop
```bash
npm install
npm run dev
Build (static export)
bash
npm run build
Output goes to out/. Deploy to Cloudflare Pages with build command npx next build and output directory out.
Content
All editable content lives in data/mockData.js. Replace placeholder Facebook/TikTok URLs before going live.


## After running it

```bash
# 1. Clean install (your package.json has odd versions — verify first)
npm view next version
npm view @tailwindcss/turbopack version 2>/dev/null || echo "package not found — remove it from package.json"

# 2. Remove unused/broken deps if the above fails
npm uninstall @tailwindcss/turbopack tailwindcss lucide-react

# 3. Fix Next version if it's not real
# In package.json set: "next": "15.5.4" (latest stable as of writing)
# then:
npm install

# 4. Try the build
npm run build