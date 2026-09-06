# Personal Website Implementation Plan

**Goal:** A personal, open, approachable website with a working preview and blog, ready for Netlify.

**Architecture:** Astro static HTML with section components and a small mobile-menu script. Legacy Gatsby source stays outside build input. Node 24, TypeScript, CSS, local DM Sans and Bricolage Grotesque, Playwright and axe.

**Spec:** `docs/superpowers/specs/2026-09-06-personal-website-design.md`

## Constraints

Lead with Saheed, Minicor, and San Francisco. Include Lucky Star, agriculture, Nigerian roots, and mentorship. Writing is a supporting feature. No invented personal facts or contact details. Keep production publication separate from the preview review. Preserve old URLs, keyboard support, reduced motion, and draft filtering.

## Implementation

- [x] Configure Astro, Netlify, local fonts, and browser checks.
- [x] Build Markdown blog routes, RSS, draft filtering, and Pages CMS configuration.
- [x] Research public founder/community posts and source a real candid photograph.
- [x] Rebuild the visual identity and homepage around a direct greeting, current work, background, and mentoring. Correct Lucky Star. Move writing to the footer.
- [x] Update the shared blog layout, favicon, and generated social image.
- [x] Complete Astro checks, Node 24 build, browser checks, visual inspection, and independent review of the revision.
- [x] Push the reviewed revision to the draft PR and keep the local preview available.

## Verified revision

- Astro check: 19 files, 0 errors, 0 warnings, 0 hints.
- Production build passes with Node 24.
- All nine Chrome tests pass, including no-JavaScript mentoring/blog navigation, lazy image loading, 360/768/1440px layouts, and automated WCAG AA checks on home and article pages.
- Independent review confirmed 320px layouts, including no JavaScript and writing pages. Its two findings were fixed: use the full YC Spring 2026 batch label and a white keyboard focus outline on the navy Minicor card. The focus state was then verified in Chrome.
- Home desktop/mobile, writing index, article, and regenerated social card visually inspected.
- Native anchor navigation is immediate without JavaScript; enhanced navigation respects reduced motion.

## Publishing

Pages CMS configuration is supplied; GitHub account authorization is not performed. Netlify account access is not configured in this workspace. The starter essay remains visible in the unpublished preview for review. Production is not changed.
