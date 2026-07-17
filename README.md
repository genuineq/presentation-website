# GENUINEQ presentation website

Static presentation website built with React, TypeScript, and Vite.

## Local development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## GitHub Pages deployment

Every push to `main` triggers `.github/workflows/deploy-pages.yml`, builds the
site, and deploys the `dist` directory to GitHub Pages.

For the first deployment, open the repository on GitHub and go to
**Settings → Pages → Build and deployment → Source**, then select
**GitHub Actions**. Push these changes to `main` or run the workflow manually
from the **Actions** tab.

The project site will be available at:

<https://florinzarafu.github.io/presentation-webiste/>

The Vite base path is derived automatically from `GITHUB_REPOSITORY`, so forks
and renamed repositories deploy under their own repository path as well.

Original design:
<https://www.figma.com/design/6cTfWcTlpBMV7C8tpaIfrV/Static-Web-Page-Design>
