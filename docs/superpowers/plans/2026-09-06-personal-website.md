# Personal Website Implementation Plan

**Goal:** A polished, accessible, Netlify-ready personal website with a working local preview.

**Architecture:** Astro static HTML with isolated components and a small amount of browser JavaScript. Preserve the legacy Gatsby source outside the configured source directory.

**Tech stack:** Astro 7, TypeScript, CSS, locally hosted Manrope and Instrument Serif, Playwright and axe.

**Spec:** `docs/superpowers/specs/2026-09-06-personal-website-design.md`

## Constraints

Node 24. No invented biographical facts or email. No public deployment before reviewing the result. Respect reduced motion and keyboard navigation. Preserve old URLs. Build output contains only intended public files.

## Implementation

- [x] Configure Astro, Netlify, local fonts, and Chrome browser checks. Run the initial navigation test against an empty page to establish the missing behavior.
- [x] Build `site/layouts/Layout.astro`, `site/data/profile.ts`, section components in `site/components/`, and `site/styles/global.css` for the full responsive experience. Use the real GitHub portrait, native expandable notes, and verified outgoing links.
- [x] Build `site/pages/index.astro`, `site/pages/404.astro`, robots and sitemap endpoints, favicon and social preview assets. Document local use, content editing, sources, and Netlify deployment.
- [x] Run `npm run check`, `npm run build`, and `npm test`. Inspect desktop/mobile screenshots, fix defects, and review the final diff. Leave a preview running and commit the reviewed changes on `codex/founder-website`.

## Completed verification

- Astro check: 20 files, 0 errors, 0 warnings, 0 hints.
- Production build verified on Node 24.20.0.
- Nine Chrome browser tests pass, including mobile menu, no-JavaScript notes, three viewport sizes, article navigation/RSS, and WCAG AA automated checks on home and article.
- Independent review tested 320px layouts with and without JavaScript; confirmed draft=true and missing draft fields are excluded, published content works, RSS escapes special characters, and private legacy documents are absent from output.
- Desktop, mobile, writing index, article, and social card visually inspected. All requested page assets returned successfully.
- Pages CMS editor configuration is supplied; authenticated CMS publication and live Netlify settings await account connection and launch approval.
