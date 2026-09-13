# aseknown.github.io

Personal single-page portfolio for **Hossein Samadi / @aseknown**.

## Stack

- React
- TypeScript
- Vite
- GitHub Pages
- GitHub Actions
- Public GitHub REST API for live profile/repository data

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy

1. Create the GitHub repository:

   `aseknown/aseknown.github.io`

2. Push this project to the `main` branch.

3. Open:

   `Settings → Pages → Build and deployment → Source`

4. Select:

   `GitHub Actions`

5. Push to `main`. The included workflow builds and deploys automatically.

The site will be available at:

`https://aseknown.github.io/`

## Notes

This is a user GitHub Pages site, so `vite.config.ts` uses:

```ts
base: "/"
```

The site intentionally uses section anchors rather than client-side route URLs,
which avoids GitHub Pages SPA deep-link 404 issues while preserving SPA behavior.

GitHub profile and repository cards are loaded from the public GitHub REST API.
Fallback content remains visible if the API is temporarily unavailable or rate-limited.
