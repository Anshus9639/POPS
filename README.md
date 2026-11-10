# Priyanka Hembram (SUSH) — Personal Website

A light-pink, editorial personal website for Priyanka Hembram, HR Executive.
Built with **Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide icons**.

**Sections:** Hero · About · Journey (interactive timeline) · HR Expertise (interactive skill cards) ·
From Hello to Hired (hiring-flow explorer) · Gallery (lightbox) · Beyond Work ("Did you know?" cards) · Contact · Footer.
Also: welcome loader, scroll-progress bar, active-section navigation, mobile menu, back-to-top button,
SEO + social-share metadata, keyboard-accessible controls and full `prefers-reduced-motion` support.

---

## Run it locally

You need **Node.js 20+**.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other commands:

```bash
npm run lint       # ESLint
npm run build      # production build
npm run start      # serve the production build
```

---

## Updating the website (no design code needed)

Everything Priyanka's visitors read lives in one file: **`src/content/site.ts`**.

| I want to…                                  | Edit this in `src/content/site.ts`                     |
| ------------------------------------------- | ------------------------------------------------------ |
| Change the intro / about text               | `heroIntro`, `about`                                   |
| Add or change jobs, internships, education  | `timeline` (copy an entry, set `type: "work"` or `"education"`) |
| Add undergraduate / school details          | Add entries to `timeline` with `type: "education"`     |
| Change HR skills                            | `skillGroups`                                          |
| Change the hiring-flow steps                | `hiringFlow`                                           |
| Add hobbies, favourites, fun facts          | `beyondWork` (each card = a title + a "Did you know?" fact) |
| Add an email button                         | `social.email` (leave `""` to hide it)                 |
| Change LinkedIn / Instagram                 | `social.linkedin`, `social.instagram`                  |
| Change the footer message                   | `closing`                                              |
| Change the browser-tab monogram              | `src/app/icon.svg`                                     |

**Achievements / certifications:** there is intentionally no empty "Achievements" section.
When there are real ones to show, add an `achievements` list to `site.ts` and a small section component —
or ask Claude to add it.

### Photos

Photos live in `public/images/` and are listed in `site.ts` (`hero`, `aboutPhoto`, `gallery`).
To add a photo: drop the file into `public/images/` (about 1000–1600 px on the long side is plenty),
then add an entry to `gallery` with its `src`, `alt` text (describe the photo), `caption`, `width` and `height`.

### Colours and fonts

Design tokens (blush, rose, mauve, champagne, ink) are at the top of `src/app/globals.css`.
Fonts (Fraunces + DM Sans) are bundled locally via `@fontsource-variable`, so there is no external font request.

---

## Deploy for free (Vercel — recommended)

1. Push this repository to GitHub.
2. Go to <https://vercel.com>, sign in with GitHub and click **Add New → Project**.
3. Import this repository. Vercel detects Next.js automatically — keep the default settings and click **Deploy**.
4. Vercel's production domain is used automatically for canonical and social-preview URLs. For another host,
   set `NEXT_PUBLIC_SITE_URL` in **Settings → Environment Variables** to the full public HTTPS URL
   (for example `https://priyanka.example.com`). Without a configured production URL, absolute canonical
   and social-preview image URLs are omitted rather than pointing to localhost.

Every push to `main` redeploys automatically.

> GitHub Pages is *not* set up: this project uses the standard Next.js server build and optimized images,
> which Vercel supports out of the box. (A static export is possible but would need configuration changes.)

---

## Privacy notes

- Her **phone number is deliberately not published**. Email is optional and hidden until `social.email` is set.
- The site is publicly indexable by default. To keep it out of search engines, add this to `metadata` in
  `src/app/layout.tsx`: `robots: { index: false, follow: false }`.
- Photos are shown only with her permission — remove any she'd rather not share from `public/images/` and `site.ts`.

---

## Project structure

```
public/images/            her photos
src/content/site.ts       ALL editable text, links and photo lists
src/app/                  layout, metadata, global styles, page
src/components/sections/  Hero, About, Journey, Expertise, HiringFlow, Gallery, BeyondWork, Contact
src/components/           Navbar, Loader, ScrollProgress, BackToTop, Footer, Providers
src/components/ui/        Reveal (scroll animation), SectionHeading, brand icons
```
