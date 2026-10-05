# pranavkasetty.github.io

Personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

- `npm install`, then `npm run dev` (live preview) or `npm run build` (output in `dist/`).
- Pages: `src/pages/`. Shared layout, header, footer and charts: `src/layouts/`, `src/components/`.
- Writing: add a Markdown file to `src/content/writing/` (`url:` in the frontmatter links out; no `url:` publishes it at `/writing/<name>/`).
- Static files (CSS, CV, images, robots.txt): `public/`.
