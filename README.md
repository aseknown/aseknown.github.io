# aseknown.github.io

Minimal bilingual portfolio for Hossein Samadi.

## Included

- English / Persian language switch with RTL support
- Current GreenBank backend role
- NOBKA experience and project history
- University portfolio
- Technical app showcases with Telegram and web links
- Separate professional experience (Greenbank, NOBKA and employer products),
  seven freelance client websites, and personal projects (Telegram Order Shop,
  GreenProof, Ollama GUI and PQC JWT Starter), in both languages
- Backend authentication and authorization patterns
- Current/private work: CRM, authentication/authorization, Kiosk Builder, Successo and CRM orchestration
- Public repositories loaded from both `hosseinsam` and `aseknown`
- Dedicated one-page A4 English CV when printing, including from Persian mode
- Dependency-free GitHub Pages deployment

## Deploy

1. Replace the files in `aseknown/aseknown.github.io` with the contents of this folder.
2. In GitHub, set **Settings → Pages → Source** to **GitHub Actions**.
3. Commit and push to `main`.

No Node, npm, package lock or build step is required.

## Content updates

The published site uses `index.html`, `styles.css`, `app.js` and `showcases.js`;
the React files in `src/` are not the deployed entry point.

Set `showcaseLinks.greenbank` in `showcases.js` to the public HTTPS URL when
Greenbank is published. Until then, the card shows a publication-pending status.
Showcase graphics are product illustrations, not screenshots of the live apps.

Employment dates use June 2026 for the transition based on the September 2026
update that it happened three months earlier. The existing 2021 NOBKA start and
2017–2022 university dates are retained. No unsubstantiated metrics were added.

Use **Print CV · 1 page** and select A4 at 100% scale; disable browser headers
and footers in the print dialog. Only the concise English CV is printed.
