# Saheed Akinbile personal website

Build a distinctive, fast personal website for Saheed as a founder, engineer, and person. Use Rasha Hantash’s clarity and substance as inspiration, with an original visual identity.

## Direction

Warm paper (#f6f3ed), deep ink (#252923), burnt orange (#c54b25), a real portrait, large Manrope typography, and restrained Instrument Serif italics. Strong editorial grid, thin rules, numbered sections, generous space. The homepage tells one continuous story: introduction, current work, personal journey, working principles, and contact.

The editorial approach is preferred over a conventional résumé or an animation-heavy showcase because it balances personal warmth, founder credibility, and performance. Small CSS motion supports the composition and respects reduced-motion preferences.

## Content

- Lead with Saheed’s name, founder/engineer identity, and Minicor.
- Feature Minicor, co-founder and CTO, Y Combinator Spring 2026. Explain its role connecting AI to legacy desktop software using accurate public descriptions.
- Ground the personal story in Lagos, moving to Canada at 18, studying Software Engineering at Ottawa, and now building in San Francisco.
- Mention Morgan Stanley, Ford, Kinaxis, and Software for Love only at the level supported by public sources.
- Working principles are new draft copy adapted from Saheed’s existing founder talking points. Do not imply they are previously published articles. Do not include customer names, private incidents, invented hobbies, testimonials, or unsupported metrics.
- Contact through verified LinkedIn and GitHub links. Do not invent an email address.

## Architecture

Astro static output, Node 24, local font assets, no client framework, database, analytics, or external embeds. New source lives in `site/`; old Gatsby `src/` and `static/` are retained as an archive and excluded from the build. Data lives in `site/data/profile.ts`. Shared layout owns metadata; components own page sections. Native details elements power expandable notes; a small script controls the mobile menu.

Netlify builds `npm run build` and publishes `dist`. Explicit Node version replaces the old Node 10 default. Preserve old about/projects URLs with redirects. Include a real 404 page, social image, canonical URL, sitemap, robots.txt, and Person structured data.

## Verification and delivery

Run Astro type checks and production build. Exercise navigation, mobile menu, native notes without JavaScript, image loading, viewport overflow, and automated WCAG AA checks in Chrome. Inspect screenshots at desktop and mobile sizes. Deliver the running local preview and the reviewable branch. Publishing to the existing production site is a separate final action after the user sees the result.

## Sources

- https://www.saheedakinbile.com/ — origin, education, early work
- https://www.ycombinator.com/companies/minicor — role, company, batch, story, previous work
- https://minicor.com/ — company positioning
- https://github.com/sakin070 — portrait and profile
- https://www.linkedin.com/in/saheed-akinbile — current location and social link
- https://www.rasha.me/ — design inspiration, no copied assets or prose
- Local `presence/Talking Points.md` — draft working principles; source file stays outside the website

## User refinements incorporated

The primary audience is still San Francisco. Lead with Saheed as the co-founder and CTO of Minicor; the broader businesses add depth rather than replacing that introduction. The user gave full creative direction.

User-provided facts: launched Lucky Start lottery company; owns an 18-hectare oil palm plantation and a layer poultry farm; long-term goal is a more independent Nigeria; interests include drones, defense technology, MMA, and boxing.

The blog has a listing, Markdown article routes, RSS, reading times, and draft filtering. `.pages.yml` configures a Pages CMS browser editor backed by GitHub. Its GitHub authorization must be completed by the user. Missing draft fields default to unpublished. The opening essay is newly written review copy deliberately included in this unpublished site preview and must be reviewed with the rest of the site before launch. No claim is made that it was previously published.
