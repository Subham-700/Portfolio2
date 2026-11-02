# Subham Gupta — Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy
```bash
npm run build      # static export → ./out
```
- **Vercel:** import the repo — zero config. Set `NEXT_PUBLIC_SITE_URL=https://your-domain` in project env vars (used for canonical URL, sitemap and Open Graph).
- **Netlify / GitHub Pages / S3:** upload the `out/` folder.

## Editing content
All text lives in **`src/data/profile.ts`** — experience, projects, skills, impact numbers, links.
- Mark a skill `prod: true` to highlight it as "used in production".
- Add certifications to the `certifications` array; the section appears automatically.
- Add a `live: "https://..."` URL to any project to show a **Live demo** button.
- Replace `public/Subham_Gupta_Resume.pdf` to update the downloadable resume.
- Project visuals are code-drawn illustrations (`src/components/ProjectPreviews.tsx`); swap in real screenshots when available.

## Structure
```
src/app/            layout (SEO, Open Graph, JSON-LD), page, OG image, sitemap, robots
src/components/     Nav, Hero, About, Skills, Experience, Projects, Achievements, Contact, Footer
src/data/profile.ts single source of truth for content
```
