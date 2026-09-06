# Saheed Akinbile personal website

Build a personal, open, and approachable website for Saheed as a founder, engineer, entrepreneur, and mentor. The primary audience is people in San Francisco. The user gave creative direction and asked for research into his public work and personality.

## Design and content

A white page with light blue panels, cobalt accents, Bricolage Grotesque headings and DM Sans body text. Lead with “Hi, I’m Saheed” and a real candid photograph with his co-founder Faiz. Personal photographs, a few drawn accents, rounded cards, and direct language make the site feel welcoming.

The homepage flows through an introduction, current work, other businesses, background and interests, mentoring, and contact. Minicor and the founder’s current SF context remain prominent. Writing lives in the footer and on its own pages; there is no homepage post section or primary navigation item for it.

- Minicor: co-founder & CTO, YC Spring 2026; desktop and browser workflows exposed as APIs. The seven applications and three interviews come from Saheed’s public YC acceptance post.
- Other businesses: an 18-hectare oil palm plantation, a layer chicken farm, and Lucky Star lottery. Ownership/launch claims are user supplied; Lucky Star is also corroborated by the Guardian report.
- Personal story: Lagos, moving to Canada at 18, software engineering at the University of Ottawa, now SF. Morgan Stanley, Ford, Kinaxis, and Software for Love are brief background rather than a résumé section.
- Long-term ambition: businesses that make Nigeria more independent.
- Interests: drones, defense tech, MMA, boxing.
- Mentoring: a direct invitation to talk through engineering, product, or founder questions, using his verified LinkedIn contact. A link to his Technical Career Hub guest talk gives context. Do not invent mentee counts, testimonials, a calendar, office hours, or response-time promises.
- The tone reflects his public writing about curiosity, conversations, and learning. New first-person copy is review copy, not a claim to verbatim quotations.

## Architecture

Astro static output, Node 24, local font assets, no client framework, database, analytics, or external embeds. Source lives in `site/`, public assets in `public/`; legacy Gatsby source and private legacy documents stay outside build input. Shared layout owns metadata; components own sections. A small script controls the mobile menu, with usable navigation when JavaScript is disabled.

Markdown posts have a listing, individual routes, RSS, reading times, and draft filtering. `.pages.yml` configures the Pages CMS visual editor backed by GitHub. Its account authorization is not performed. Missing `draft` fields default to unpublished. The included opening essay is newly drafted review copy, deliberately visible in the unpublished preview; review it with the site before production publication.

Netlify builds `npm run build` and publishes `dist`. Node 24 is explicitly configured. Old about/projects URLs redirect to new sections. Include a 404, social image, canonical URLs, sitemap, robots, and Person structured data.

## Verification and delivery

Run Astro checks, a Node 24 production build, and Chrome browser tests. Verify home navigation, mobile keyboard behavior, no-JavaScript mentoring and blog navigation, image loading and overflow across viewports, blog reading/RSS/canonical URLs, and automated WCAG AA checks. Inspect desktop/mobile screenshots and social imagery. Deliver a running local preview and updated draft PR; production publication follows the user’s review.

## Sources and media provenance

- https://www.saheedakinbile.com/ — origins, education, earlier career
- https://www.ycombinator.com/companies/minicor — role, batch, founder story, previous work
- https://minicor.com/ — company positioning
- https://github.com/sakin070 — portrait and profile
- https://www.linkedin.com/in/saheed-akinbile/ — contact and SF context
- https://www.linkedin.com/posts/saheed-akinbile_some-news-im-deeply-grateful-to-share-activity-7435814713696862208--6mj — seven YC applications, three interviews, gratitude to mentors and community
- https://www.linkedin.com/posts/saheed-akinbile_sometimes-you-have-to-unlearn-to-progress-activity-7351301448418091008--8V6 — curiosity and connecting with people
- https://www.linkedin.com/posts/saheed-akinbile_thank-you-so-much-for-having-me-activity-7300168708314877952-2M2g — Building for Scale guest talk
- https://www.linkedin.com/posts/fchishtie_weve-found-pmf-and-just-tripled-our-revenue-activity-7466556426086428672-b2zS — candid photo of Saheed (standing, left) and Faiz (seated, right), saved as `public/images/minicor-founders.jpg`
- https://guardian.ng/news/firm-rewards-customers-with-n1m-prize-gifts/ — Lucky Star and Saheed’s role
- https://www.softwareforlove.com/ — nonprofit website linked from biography
- Direct user statements — farms, long-term ambition, interests, love of mentoring, audience and tone

No generated personal photographs or copied reference-site assets are used.
