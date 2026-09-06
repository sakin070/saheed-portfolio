# Saheed Akinbile — personal website

A personal site for a founder and engineer in San Francisco. The introduction states his role at Minicor plainly and stays personal: “I love things that move, and the software that makes them work.” Ford, his farms, and Lucky Star show his interest in work with a physical impact. Lucky Star appears first as a past venture, followed by one Farming card labeled “Personal investments.” The copy describes the agricultural businesses concisely. The Minicor section leads with automating work that previously couldn’t be automated; a personal note explains why he cares about that possibility in medicine, insurance, and finance. The biography connects his Nigerian roots, engineering work, and entrepreneurship. The design uses charcoal and white with restrained muted green accents, a typographic introduction, the `saheed.` wordmark and `s.` icon, and locally hosted DM Sans and Bricolage Grotesque. Mentoring is a brief biographical detail; there is no separate mentoring offering. Built with Astro, local fonts, and a small amount of browser JavaScript. Netlify serves static HTML.

## Run locally

Use Node 24 (`nvm use`, if you use nvm).

```sh
npm ci
npm run dev
```

Open http://localhost:4321. To serve a production build:

```sh
npm run build
npm run preview
```

## Writing a blog post in the browser

The repository includes a ready-to-use [Pages CMS configuration](https://pagescms.org/docs/configuration/) in `.pages.yml`. It provides a rich-text editor, image uploads, title, description, topic, date, and a **Keep as draft** toggle. The content remains ordinary Markdown in your GitHub repository.

After this branch is available on GitHub:

1. Open [Pages CMS](https://app.pagescms.org/) and sign in with GitHub.
2. Authorize the GitHub app for `sakin070/saheed-portfolio` and select the website branch. Use `master` after the redesign has been merged.
3. Open **Blog posts**, create a post, and write. Keep **Keep as draft** enabled while editing.
4. Turn off **Keep as draft** and save when ready to publish. Once Netlify is connected to this branch, the commit triggers a rebuild.

**Account setup is not yet performed.** The GitHub authorization happens in your browser; the website does not contain a token or require a separate database. Pages CMS is an optional editor: you can always edit the Markdown directly on GitHub or locally.

A post is a file in `site/content/posts/`:

```markdown
---
title: "Your post title"
description: "A short description for the listing and search engines."
date: 2026-09-06
category: "Building"
draft: true
---

Your post goes here. Markdown headings, links, lists, and images work.
```

Drafts are excluded from the writing index, article routes, RSS, and sitemap. Writing is linked in the footer rather than featured on the homepage. A missing `draft` field defaults to `true`. Dates are display metadata, not scheduled publishing. Upload images through the CMS, or add them to `public/images/posts/` and reference `/images/posts/filename.jpg`.

The included **What I’m building toward** essay is new copy drafted from Saheed’s supplied background for review. It is intentionally visible in the unpublished preview (`draft: false`); review or revise it before approving production publication. Set `draft: true` to hide it.

## Content and design

- `site/data/profile.ts`: verified social links and links to public founder/community posts.
- `site/components/`: homepage sections, navigation, and footer.
- `site/content/posts/`: blog posts.
- `site/styles/global.css`: responsive layout and visual system.
- `site/layouts/Layout.astro`: page metadata and structured data.
- `public/images/`: typographic social card and blog media. Personal photographs are not included.
- `scripts/create-social.mjs`: regenerate the social card using Playwright and local fonts.

Biographical copy uses Saheed’s current site, Minicor’s YC profile, his public posts about networking and getting into YC, and details he supplied directly. Minicor’s story centers on giving AI an impact on everyday work by automating previously unautomatable tasks through deterministic computer use: AI handles reasoning, with execution under human control. Medicine, insurance, and finance describe settings that motivate this work, not claims of existing customers or certifications. Other user-supplied details include his original plan to become a mechanical engineer in Canada, the pull toward software engineering, his love of deep tech and hard tech, and work at Ford across cameras and drive modes. His examples include translating driver requests into steering, suspension, and acceleration changes, automatic parking in a driver-selected spot using camera and sensor data, and using sensor data to calculate safety boundaries with a trailer attached. The site and link preview use no personal photos. The opening essay and other first-person copy are new review copy. There are no invented testimonials, mentoring counts, contact emails, or personal hobbies.

The legacy Gatsby source in `src/`, `static/`, and `gatsby-config.js` is retained for reference. Astro reads only `site/` and `public/`. Old résumés, transcripts, and bundled Font Awesome files are not copied into the new deployment.

## Netlify

The existing project is `agitated-mclean-65a971`, connected to `sakin070/saheed-portfolio`. This branch is `codex/founder-website`; the production branch remains `master` until the redesign is approved.

`netlify.toml` supplies:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `24` (also pinned in `.nvmrc`)
- Redirects from the old `/projects` and `/about` routes
- Basic security headers and immutable caching for hashed assets

The old project uses a 2020 build environment. Before the first production deployment, check Netlify’s build image is a currently supported image capable of running Node 24. An obsolete build image may require an update in project settings even though the repository pins a current Node version. Keep the existing custom domain.

Build locally, review the site and initial essay, then merge the approved branch to `master` to trigger production. A manual draft deploy can also upload `dist` without changing production. Netlify account access is not configured in this workspace.

## Verification

```sh
npm run check
npm run build
npm test
```

Local browser tests use installed Google Chrome. To use bundled Chromium, run `npx playwright install chromium` and `PLAYWRIGHT_CHANNEL=chromium npm test`. In CI the default is bundled Chromium.

Checks cover visitor navigation, mobile keyboard behavior, progressive enhancement without JavaScript, viewport overflow, blog reading, RSS, canonical URLs, and automated WCAG AA accessibility. Automated accessibility checks supplement visual and keyboard review; they are not an accessibility certification.
