# Changrun Jia Research Portfolio
<p align="center">
  <a href="https://Cgrun.github.io">
    <img src="./assets/glow-title.svg" alt="Personal Research Portfolio" />
  </a>
</p>

Modern single-page research portfolio for Changrun Jia, built with React, TypeScript, Vite, and GitHub Pages.

## Tech Stack

- React
- TypeScript
- Vite
- Plain CSS
- GitHub Actions
- GitHub Pages

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```


## Deployment

The workflow in `.github/workflows/deploy.yml` builds the Vite project and deploys `dist/` to GitHub Pages whenever changes are pushed to `main`.

In the GitHub repository settings, set Pages to use GitHub Actions as the build and deployment source.

## Private Drafts

Private application notes, email drafts, and strategy documents should stay under `private/`. This directory is ignored by Git and should not be committed.
