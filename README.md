# Rishi Prabhu — Personal Website

Live site: [rishi-prabhu.netlify.app](https://rishi-prabhu.netlify.app)

## Last Updated: April 6, 2026

---

## About

Personal portfolio website for Rishabh (Rishi) M. Prabhu — sophomore at Carnegie Mellon University studying Computational Finance, Computer Science, and Machine Learning. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Deployed on Netlify.

---

## Pages

| Route          | Description                                                     |
| -------------- | --------------------------------------------------------------- |
| `/`            | Home — hero, experience preview, education preview, contact     |
| `/about`       | Bio, quick facts, interests, selected honors                    |
| `/education`   | CMU + TJ details, coursework, activities, awards                |
| `/experience`  | Full professional experience, extracurriculars, certifications  |
| `/portfolio`   | Projects with GitHub links + skills section                     |
| `/hobbies`     | Sports, books, technical interests, entertainment               |
| `/news`        | Press mentions and competition results                          |
| `/blog`        | Blog (coming soon)                                              |
| `/contact`     | LinkedIn, GitHub, Email, Instagram                              |

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Netlify (via `@netlify/plugin-nextjs`)

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

Pushes to `main` automatically trigger a Netlify build via the GitHub integration. The `netlify.toml` handles build configuration.

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```
