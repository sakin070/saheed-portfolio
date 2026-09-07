# Saheed Akinbile — personal website

A personal site for a founder and engineer in San Francisco. The introduction states his role at Minicor plainly and stays personal: “I love things that move, and the software that makes them work.” Ford, his farms, and Lucky Star show his interest in work with a physical impact. Lucky Star appears first as a past venture, followed by one Farming card labeled “Personal investments.” The copy describes the agricultural businesses concisely. The Minicor section uses one charcoal card to explain automating familiar computer tasks: filling out forms, updating records, and moving information between apps. AI builds and tests the code; code handles the clicking and typing, with people deciding what runs and where approval is needed. A brief personal motivation connects this to work that needs human judgment in medicine, insurance, and finance. The biography connects his Nigerian roots, engineering work, and entrepreneurship. The design uses charcoal and white with restrained muted green accents, a typographic introduction, the `saheed.` wordmark and `s.` icon, and locally hosted DM Sans and Bricolage Grotesque. Mentoring is a brief biographical detail; there is no separate mentoring offering. Built with Astro, local fonts, and a small amount of browser JavaScript. Netlify serves static HTML.

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

1. Open [Pages CMS](https://app.pagescms.org/) and sign in with GitHub.
2. Authorize the GitHub app for `sakin070/saheed-portfolio` and select `master`.
3. Open **Blog posts**, create a post, and write. Keep **Keep as draft** enabled while editing.
4. Turn off **Keep as draft** and save when ready to publish. The commit to `master` triggers a Netlify rebuild.

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

The included **What I’m building toward** essay is published (`draft: false`). Set `draft: true` to hide it.

## Content and design

- `site/data/profile.ts`: social links, Minicor, and its YC profile.
- `site/components/`: homepage sections, navigation, and footer.
- `site/content/posts/`: blog posts.
- `site/styles/global.css`: responsive layout and visual system.
- `site/layouts/Layout.astro`: page metadata and structured data.
- `public/images/`: typographic social card, blog media, and the [official Minicor mark](https://minicor.com/minicor/assets/logo-mark.svg), displayed in white with CSS. Personal photographs are not included.
- `scripts/create-social.mjs`: regenerate the social card using Playwright and local fonts.

Biographical copy uses Saheed’s current site, Minicor’s YC profile, his public posts about networking and getting into YC, and details he supplied directly. Minicor’s description follows its product documentation: AI builds automation from examples, deterministic code executes the steps, and people control what goes live and where approval is required. Medicine, insurance, and finance describe settings that motivate this work, not claims of existing customers or certifications. Other user-supplied details include his original plan to become a mechanical engineer in Canada, the pull toward software engineering, his love of deep tech and hard tech, and work at Ford across cameras and drive modes. His examples include translating driver requests into steering, suspension, and acceleration changes, automatic parking in a driver-selected spot using camera and sensor data, and using sensor data to calculate safety boundaries with a trailer attached. The site and link preview use no personal photos. The opening essay and other first-person copy are new review copy. There are no invented testimonials, mentoring counts, contact emails, or personal hobbies.

The legacy Gatsby source in `src/`, `static/`, and `gatsby-config.js` is retained for reference. Astro reads only `site/` and `public/`. Old résumés, transcripts, and bundled Font Awesome files are not copied into the new deployment.

## Netlify

The project is `agitated-mclean-65a971`, connected to `sakin070/saheed-portfolio`. The production branch is `master`, deployed at https://www.saheedakinbile.com/.

`netlify.toml` supplies:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `24` (also pinned in `.nvmrc`)
- Redirects from the old `/projects` and `/about` routes
- Basic security headers and immutable caching for hashed assets

Build locally and review changes in a pull request, then merge to `master` to trigger production. A manual draft deploy can also upload `dist` without changing production.

## Search and AI discovery

The site serves its content as static HTML, allows crawlers in `robots.txt`, and exposes canonical URLs, a sitemap, and an RSS feed. The homepage identifies Saheed with linked `ProfilePage` and `Person` structured data. Published posts use `BlogPosting` with the visible title, description, author, category, and publication date. Publication dates come from the post frontmatter; a rebuild does not invent an updated date. Error pages are marked `noindex` and omit structured data.

### Google Search Console

1. Open [Search Console](https://search.google.com/search-console). Select an existing verified property covering `https://www.saheedakinbile.com/`, or add that exact address as a **URL-prefix** property.
2. If verification is needed, choose **HTML tag**. Copy only the `content` value from Google's tag into a Netlify build environment variable named `GOOGLE_SITE_VERIFICATION`, then rebuild the site. For a local build, copy `.env.example` to `.env` and fill in that value. Leave it blank when unused; no placeholder tag is published. A Domain property instead requires DNS verification.
3. Once the tag is live, click **Verify** in Search Console. Keep the variable configured after verification. Existing verification through another method does not need a new tag.
4. Submit `https://www.saheedakinbile.com/sitemap.xml` in **Sitemaps**.
5. Use **URL Inspection** for the homepage and a published post, such as `https://www.saheedakinbile.com/writing/what-im-building-toward/`. Check the indexed version, test the live URL, and request indexing after the deployment. Follow up on any exclusion reported in Page indexing.

See Google's [ownership verification instructions](https://support.google.com/webmasters/answer/9008080) and [URL Inspection guide](https://support.google.com/webmasters/answer/9012289). Adding a tag only makes verification possible; it does not verify ownership, submit the sitemap, or confirm indexing by itself.

### Check a deployment

```sh
npm run check:discovery
```

This checks production without changing it. To check an already running local production build instead:

```sh
DISCOVERY_BASE_URL=http://127.0.0.1:4321 npm run check:discovery
```

The checks cover the current allow-all robots policy, sitemap/RSS agreement, canonical URLs, article/author metadata, HTML readable without JavaScript, and homepage responses to Googlebot, OAI-SearchBot, and Claude-SearchBot user agents. The same checks run against a fresh local build in `npm test`.

Netlify [marks Deploy Previews as `noindex`](https://docs.netlify.com/deploy/deploy-overview/#search-engine-indexing), so they intentionally fail the indexability assertions. Use the production domain for the final deployment check.

These are crawl-readiness checks from the machine running them. They cannot prove access from a search provider's IP addresses, actual indexing, rankings, or inclusion in AI answers. Use Search Console to inspect Google's index and performance; assess AI visibility separately. Google's [AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) builds on the same crawlability and content fundamentals.

## Verification

```sh
npm run check
npm run build
npm test
```

Local browser tests use installed Google Chrome. To use bundled Chromium, run `npx playwright install chromium` and `PLAYWRIGHT_CHANNEL=chromium npm test`. In CI the default is bundled Chromium.

Checks cover visitor navigation, mobile keyboard behavior, progressive enhancement without JavaScript, viewport overflow, blog reading, feeds, crawl readiness, structured data, and automated WCAG AA accessibility. To exercise the optional verification tag, run `GOOGLE_SITE_VERIFICATION=test-token npm test -- --grep 'Google verification'`. Automated accessibility checks supplement visual and keyboard review; they are not an accessibility certification.
