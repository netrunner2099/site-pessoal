# Résumé Website

Personal résumé / portfolio website built with **React 19**, **Vite 8** and **Tailwind CSS 4**, featuring a professional layout with dark mode support.

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build (output in dist/)
npm run preview  # preview the production build
npm run deploy   # build + publish to S3 (production: https://rmiranda.com.br)
```

## Customizing your content

All résumé content lives in a single file: [`src/data/resume.js`](./src/data/resume.js).
Edit the exported objects (`profile`, `about`, `experience`, `skills`, `projects`, `education`, `certifications`) to update what is shown on the site — no component changes needed.

Optional assets (place them in the `public/` folder and update `src/data/resume.js`):

- `public/avatar.jpg` — profile photo shown in the hero (set `profile.avatar = '/avatar.jpg'`)
- `public/resume.pdf` — downloadable CV (set `profile.resumePdf = '/resume.pdf'`)

## Google Analytics

Set your GA4 measurement ID in [`src/config.js`](./src/config.js) (`GA_MEASUREMENT_ID = 'G-...'`).
Analytics is only loaded **after the visitor accepts cookies** in the consent banner; while the
placeholder ID is in place, nothing is loaded.

## Project structure

```
src/
├── components/     # UI sections (Navbar, Hero, About, Experience, ...)
├── data/
│   └── resume.js   # ← all résumé content (edit this!)
├── hooks/
│   └── useTheme.js # dark mode toggle with localStorage persistence
├── App.jsx         # page composition
├── index.css       # Tailwind setup + design tokens
└── main.jsx        # entry point
```

## Tech stack

- [React](https://react.dev/) — UI library
- [Vite](https://vite.dev/) — build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling (via `@tailwindcss/vite`)
- [lucide-react](https://lucide.dev/) — icon set
