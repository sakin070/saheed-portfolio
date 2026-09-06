# Personal Website Implementation Plan

**Goal:** A personal, open, approachable website with a working preview and blog, ready for Netlify.

**Architecture:** Astro static HTML with section components and a small mobile-menu script. Legacy Gatsby source stays outside build input. Node 24, TypeScript, CSS, local DM Sans and Bricolage Grotesque, Playwright and axe.

**Spec:** `docs/superpowers/specs/2026-09-06-personal-website-design.md`

## Constraints

Lead with Saheed, Minicor, and San Francisco. Connect his love of AI to Minicor’s approach: AI for reasoning, deterministic execution, and people in control. Give medicine, insurance, and finance as motivating contexts; keep the YC story as a supporting link. Include Lucky Star, agriculture, Nigerian roots, and the user’s love of things that move, his original mechanical engineering plans and choice of software engineering, and his interest in deep tech and hard tech, supported by concrete Ford examples of software translating driver requests and sensor data into vehicle behavior, with mentoring mentioned briefly in the biography. Offer X and LinkedIn as equal contact options. Remove the homepage interests strip. Use the charcoal and white palette with a muted green accent trial requested by the user, restore `saheed.` and `s.`, and remove personal photos. Writing is a supporting feature. No invented personal facts or contact details. Keep production publication separate from the preview review. Preserve old URLs, keyboard support, reduced motion, and draft filtering.

## Implementation

- [x] Configure Astro, Netlify, local fonts, and browser checks.
- [x] Build Markdown blog routes, RSS, draft filtering, and Pages CMS configuration.
- [x] Research public founder/community posts for accurate biographical copy.
- [x] Rebuild the visual identity and homepage around a direct greeting, current work, and background. Correct Lucky Star. Move writing to the footer. Apply the requested neutral palette with muted green accents and branding, remove photos, and reduce mentoring to one biographical line.
- [x] Update the shared blog layout, favicon, and generated social image.
- [x] Complete Astro checks, Node 24 build, browser checks, visual inspection, and independent review of the revision.
- [x] Push the reviewed revision to the draft PR and keep the local preview available.

## Verification record

- Astro check: 18 files, 0 errors, 0 warnings, 0 hints.
- Production build passes with Node 24.
- All nine Chrome tests pass, including no-JavaScript contact/blog navigation, 360/768/1440px layouts, and automated WCAG AA checks on home and article pages.
- Independent review of the latest refinement confirmed 320px, 768px, and desktop layouts, focus visibility, internal links, and removal of photos and the dedicated mentoring panel. No actionable defects were found.
- Home desktop/mobile, writing index, article, and regenerated social card visually inspected.
- Native anchor navigation is immediate without JavaScript; enhanced navigation respects reduced motion.

## Publishing

Pages CMS configuration is supplied; GitHub account authorization is not performed. Netlify account access is not configured in this workspace. The starter essay remains visible in the unpublished preview for review. Production is not changed.
