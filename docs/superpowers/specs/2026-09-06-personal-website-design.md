# Saheed Akinbile personal website

Build a personal, open, and approachable website for Saheed as a founder, engineer, entrepreneur, and person. The primary audience is people in San Francisco. The user gave creative direction and asked for research into his public work and personality.

## Design and content

A charcoal-and-white page with restrained muted green accents, being tried at the user’s request. Keep Bricolage Grotesque headings, DM Sans body text, and rounded cards. Lead with a typographic “Hi, I’m Saheed” introduction. Use the lowercase `saheed.` wordmark and `s.` favicon. Personal photographs are removed from the site, article byline, social preview, structured data, and public assets.

The homepage flows through an introduction, current work, other businesses, background, and contact. Minicor and the founder’s current SF context remain prominent. Writing lives in the footer and on its own pages; there is no homepage post section or primary navigation item for it.

Keep the introduction direct: “Co-founder & CTO at Minicor.” The user rejected “Putting my love of AI to work…” as unnatural; express his interest in AI through the substantive Minicor section. His broader motivation is to build things and businesses with physical, real-world impact. Agriculture is one example, alongside Lucky Star and his interest in hardware; do not frame agriculture as the limit of his entrepreneurial interests. Keep the hero aside to “I love things that move, and the software that makes them work.” Let the Ford examples, farms, and Lucky Star establish his breadth instead of adding an abstract sentence about his personality.

At the user’s request, two independent writers and an editor developed the introduction and Minicor copy through three writing rounds and a final editorial review. The review compared a short personal introduction, an introduction naming the farms, and a broader statement about building beyond software. The short version was selected for its natural voice; the other directions either overemphasized agriculture or repeated the generic language the user rejected. Minicor leads with the practical outcome, then explains the architecture. Its personal note adds the motivating contexts rather than repeating the mechanism. Avoid invented plans to manufacture hardware, unverified customer outcomes, and claims that AI makes runtime execution decisions.

- Minicor: co-founder & CTO, YC Spring 2026. Lead the product panel with “Automating what we couldn’t before.” Center the story on AI’s impact on real work: automating tasks that previously couldn’t be automated through deterministic computer use. The user clarified that this practical outcome is his motivation for building Minicor. Explain the approach: AI for reasoning, execution under human control, and desktop and browser workflows exposed as APIs. The founder-note headline is “The work I want AI to do.” Its copy explains his interest in automating work in medicine, insurance, and finance while people stay in control. These are motivating contexts, not claims of existing customers, guaranteed safety, or certifications. Keep the exact human approval model unspecified unless he clarifies it. The YC backstory remains a supporting link. The seven applications and three interviews in that linked story come from his public YC acceptance post.
- Other ventures: an 18-hectare oil palm plantation, a layer chicken farm, and Lucky Star lottery. Ownership/launch claims are user supplied. The user confirmed that ESS Nigeria Limited was the company and Lucky Star was its product; preserve this distinction in the homepage and writing. Keep Lucky Star’s description short and focused on building and launching the product. The user rejected the Managing Director wording and the 2023 event recap. Link both the Lagos State operators list, as requested, and the Guardian coverage. The Guardian’s May 1, 2023 report documents his role and the customer event; retain those details as research background. The user confirmed the relevance of the regulator’s “Ess Lottory Services Limited” entry, which lists a historical March 2023–March 2024 period. These sources do not establish a founding date, operating scale, current status, or social handles. Searches of public Instagram/X results have not yet identified verified company accounts; do not link unrelated brands with the same name.
- Personal story: Lagos, moving to Canada at 18, now SF. He came to Canada planning to become a mechanical engineer; his love of software led him to software engineering at the University of Ottawa. Lead with his own phrase, “I love things that move,” and connect it to the software behind physical systems. His love of deep tech and hard tech is grounded in this personal story. Ford is supporting evidence of that broader interest. His work spanned the camera team, drive modes, and automatic parking. Keep the homepage Ford description concise; omit vehicle maintenance at his request. Concrete examples include translating driver requests into changes in steering feel, suspension stiffness, and acceleration, automatic parking in a driver-selected spot using camera and sensor data, and using sensor data to calculate safety boundaries with a trailer attached. Avoid reducing his experience to a narrow camera/parking role or implying the vehicle automatically chooses drive modes without driver input. These details are user supplied; do not invent additional projects, technologies, titles, dates, metrics, or claims of sole ownership. Morgan Stanley, Kinaxis, and Software for Love provide additional background.
- Personal motivation: making Nigeria a better place to live is one of the things that drives him today. Frame this as a current passion that informs his work, not a deferred ambition or a claim about national independence.
- Personal interests remain available as background for writing, but the user asked to remove the homepage interests strip.
- Mentoring: retain only a brief mention in the biography. The user rejected the dedicated mentoring panel; remove its section, navigation item, and service-style invitation.
- The tone reflects his public writing about curiosity, conversations, and learning. New first-person copy is review copy, not a claim to verbatim quotations.

In the Ford paragraph, lead with automatic parking and trailer safety boundaries and give those examples the visual emphasis. Follow with driver-requested changes to steering, suspension, and acceleration. Keep this emphasis consistent in the opening essay.

Lucky Star’s media activity was mainly on Twitter and Instagram, according to the user. He wants a fuller media reference than the Guardian report. A verified original product or launch post is a suitable replacement; no matching social account has been identified yet. The public ESS Android repository contains Lucky Star branding, but its reviewed website/support links do not identify the social accounts.

## Architecture

Astro static output, Node 24, local font assets, no client framework, database, analytics, or external embeds. Source lives in `site/`, public assets in `public/`; legacy Gatsby source and private legacy documents stay outside build input. Shared layout owns metadata; components own sections. A small script controls the mobile menu, with usable navigation when JavaScript is disabled.

Markdown posts have a listing, individual routes, RSS, reading times, and draft filtering. `.pages.yml` configures the Pages CMS visual editor backed by GitHub. Its account authorization is not performed. Missing `draft` fields default to unpublished. The included opening essay is newly drafted review copy, deliberately visible in the unpublished preview; review it with the site before production publication.

Netlify builds `npm run build` and publishes `dist`. Node 24 is explicitly configured. Old about/projects URLs redirect to new sections. Include a 404, social image, canonical URLs, sitemap, robots, and Person structured data.

## Verification and delivery

Run Astro checks, a Node 24 production build, and Chrome browser tests. Verify home navigation, mobile keyboard behavior, no-JavaScript contact and blog navigation, overflow across viewports, blog reading/RSS/canonical URLs, and automated WCAG AA checks. Inspect desktop/mobile screenshots and social imagery. Deliver a running local preview and updated draft PR; production publication follows the user’s review.

## Sources

- https://www.saheedakinbile.com/ — origins, education, earlier career
- https://www.ycombinator.com/companies/minicor — role, batch, founder story, previous work
- https://minicor.com/ — company positioning
- https://github.com/sakin070 — portrait and profile
- https://www.linkedin.com/in/saheed-akinbile/ — contact and SF context
- https://x.com/sahee_d — X profile supplied by the user; a prominent contact option alongside LinkedIn, also linked in the footer and page metadata
- https://www.linkedin.com/posts/saheed-akinbile_some-news-im-deeply-grateful-to-share-activity-7435814713696862208--6mj — seven YC applications, three interviews, gratitude to mentors and community
- https://www.linkedin.com/posts/saheed-akinbile_sometimes-you-have-to-unlearn-to-progress-activity-7351301448418091008--8V6 — curiosity and connecting with people
- https://www.linkedin.com/posts/saheed-akinbile_thank-you-so-much-for-having-me-activity-7300168708314877952-2M2g — Building for Scale guest talk
- https://guardian.ng/news/firm-rewards-customers-with-n1m-prize-gifts/ — Lucky Star and Saheed’s role
- https://lslga.org/list-of-licenced-operators-by-lagos-state-lotteries-and-gaming-authority/ — “Ess Lottory Services Limited” scratch-card entry, confirmed relevant by the user; historical dates, not evidence of current licensing
- https://github.com/sakin070/ess-manager-android — public ESS Android project containing Lucky Star branding; research lead, not a social-media reference
- https://www.softwareforlove.com/ — nonprofit website linked from biography
- Direct user statements — love of AI, Minicor’s reasoning and execution approach, farms, personal motivations, interests, love of mentoring, mechanical engineering plans and move toward software, deep tech and hard tech interests, software and physical systems work at Ford, audience and tone

The site uses no personal photographs or copied reference-site assets.
