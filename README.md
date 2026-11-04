# Sarvathe Ramesh — Developer Portfolio

A responsive React portfolio built with JavaScript, HTML and CSS, based on the supplied resume.

## Run locally

1. Install [Node.js](https://nodejs.org/) (LTS recommended).
2. Extract this project folder.
3. Open a terminal in the project directory and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Customize before publishing

Open `src/main.jsx` and update:

- `profile.linkedin` and `profile.github` with your real profile URLs.
- Each project's `links` array with the actual live demo and GitHub repository URLs.
- Add a downloadable resume link if you want one (place the PDF in `public/` and add a link in the hero or contact section).

The current project links are intentionally left as placeholders because the resume did not contain actual URLs. No project URLs or social profiles have been invented.

## Build for deployment

```bash
npm run build
```

The production-ready site is generated in the `dist/` folder. Deploy that folder to Vercel, Netlify, or another static hosting provider.
