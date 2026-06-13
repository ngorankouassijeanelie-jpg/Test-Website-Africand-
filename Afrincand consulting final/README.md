# Africand Consulting — Website

M&A and strategic advisory for agro-industrial value chains across West Africa.

---

## Project Structure

```
Afrincand consulting final/
├── index.html               # Homepage
├── approach.html
├── services.html
├── projects.html
├── team.html
├── insights.html
├── careers.html
├── contact.html
├── robots.txt
├── sitemap.xml
│
├── css/                     # Page-level stylesheets
│   ├── index.css
│   ├── approach.css
│   ├── services.css
│   ├── projects.css
│   ├── team.css
│   ├── insights.css
│   ├── careers.css
│   └── contact.css
│
├── js/                      # JavaScript (separated from HTML)
│   ├── main.js              # Common: language switcher, burger, nav, scroll reveal
│   ├── index.js             # Hero slideshow (homepage only)
│   ├── projects.js          # Transaction filter (projects page only)
│   ├── contact.js           # Form submission via Formspree (contact page only)
│   └── career-page.js       # File upload + apply form (all job pages)
│
├── careers/                 # Job description pages
│   ├── analyst-financial-structuring.html
│   ├── associate-transaction-advisory.html
│   ├── sector-intelligence-analyst.html
│   └── css/                 # CSS scoped to career pages
│
├── insights/                # Research articles
│   ├── agro-industry-financing-cote-divoire-2026.html
│   ├── cashew-processing-gap-financing.html
│   ├── why-west-african-agro-industry-cant-access-dfi-capital.html
│   └── css/                 # CSS scoped to insight articles
│
└── images/
    ├── hero-*.jpg           # Hero section images
    └── team/                # Team portrait photos
```

---

## Local Development

No build step required — this is a static HTML/CSS/JS site.

```bash
# Option 1: Python (built-in)
cd "Afrincand consulting final"
python3 -m http.server 8080
# → http://localhost:8080

# Option 2: Node serve
npx serve -p 8080 .
# → http://localhost:8080
```

---

## Deployment

### Vercel (recommended)

The repo root contains a `vercel.json` that sets the correct root directory.

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects static HTML — no build command needed
4. Deploy

### Netlify

1. Push to GitHub
2. Import on [netlify.com](https://netlify.com)
3. Set **Publish directory** to `Afrincand consulting final`
4. No build command needed
5. Deploy

---

## Configuration Required Before Launch

### 1. Contact Form (Formspree)

In `js/contact.js`, replace `YOUR_FORMSPREE_ID` with your actual Formspree endpoint:

```js
// Before
fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', ...)

// After
fetch('https://formspree.io/f/xpzgkwqr', ...)  // example
```

Get your free endpoint at [formspree.io](https://formspree.io).

### 2. Hero Video

The `hero.mp4` file (280MB) is excluded from the repo (exceeds GitHub's 100MB limit).
Upload it to a CDN and update the `src` in `index.html`:

```html
<!-- Before -->
<source src="images/hero.mp4" type="video/mp4">

<!-- After (example with Cloudinary) -->
<source src="https://res.cloudinary.com/your-account/video/upload/hero.mp4" type="video/mp4">
```

### 3. OG Image

Replace the placeholder OG image URL in all HTML `<head>` sections:
```html
<meta property="og:image" content="https://africand.com/images/og-cover.jpg" />
```
Create a `1200×630px` cover image and upload it to your domain.

### 4. Sitemap Domain

Update `sitemap.xml` and all canonical URLs in HTML `<head>` sections
once you have your final domain (currently set to `https://africand.com`).

---

## SEO Checklist

- [x] `<meta name="description">` on all 14 pages
- [x] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- [x] Twitter Cards (`twitter:card`, `twitter:title`, `twitter:description`)
- [x] `<link rel="canonical">` on all pages
- [x] `sitemap.xml`
- [x] `robots.txt`
- [ ] OG cover image (`images/og-cover.jpg`) — **to create**
- [ ] Google Search Console — submit sitemap after domain is live
- [ ] Google Analytics — add tracking ID

---

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, flexbox, grid, mobile-first
- **Vanilla JS** — no frameworks, no dependencies
- **Fonts** — Cormorant Garamond + Inter (Google Fonts)
- **Forms** — Formspree (serverless backend)
