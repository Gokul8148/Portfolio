# Gokul D — Portfolio

Personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local development URL. For a production build, run `npm run build`; `npm run preview` serves the generated `dist/` folder locally.

## Update content

- Add LinkedIn, GitHub, and Instagram URLs in `src/data/socialLinks.js`. Leave a value empty to keep that link hidden.
- Add projects in `src/data/projects.js`. Set `github` and `demo` to real URLs; empty values hide the corresponding actions.
- Replace `public/RESUME.pdf` when updating the resume. Keep the filename unchanged for the download link.

## Deploy

Build with `npm run build` and deploy the generated `dist/` directory to a static host such as Vercel, Netlify, or GitHub Pages. Configure the host to run `npm run build` and publish `dist/`.
