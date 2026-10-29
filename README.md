# NEXUS SOC — React + Vite

Responsive NEXUS SOC landing page built with React and Vite. The project includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

## Run locally

Install Node.js, then run from this folder:

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Publish on GitHub Pages

1. Create a GitHub repository and upload the **contents** of this project folder to the repository's `main` branch.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open the **Actions** tab and wait for `Deploy NEXUS SOC to GitHub Pages` to finish successfully.
5. Open the published URL shown in the workflow run or under **Settings → Pages**.

The Vite configuration uses `base: './'`, so generated assets can load when the site is hosted at a repository path such as `https://USERNAME.github.io/REPOSITORY/`.

## Important

- GitHub Pages hosts the static frontend only; it does not run a backend or process form submissions.
- The contact form is a frontend demo until connected to a backend or form service.
- The language switch currently applies to the Hero text only; other sections may remain Arabic.
