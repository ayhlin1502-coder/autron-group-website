# Autron Group Website — Project Handoff

> Last updated: 2026-09-02 (Asia/Taipei)
>
> Purpose: This document lets a new ChatGPT Enterprise / Codex account continue the project without relying on the previous account's private conversation history.

## 1. Project identity

- Project: Autron Group 澳創集團 official website
- Local project folder: `/Users/andylin/Developer/autron-group-website`
- Current Git branch: `main`
- Current project state: working English-language visual frontend; local development and production build are functional
- Intended product: corporate group portal, business lead generation platform, and long-term digital asset
- Primary audiences: suppliers, distributors, trading partners, logistics customers, brand partners, and technology / website clients

The complete business and content requirements are preserved in:

- `00-MASTER-SPEC.md` — original full requirements
- `01-PLANNING.md` — sitemap, architecture, CMS, bilingual, SEO, security, and design plan
- `CLAUDE.md` — standing project rules and implementation order
- `README.md` — basic development instructions

Before changing factual company content, read all four files above.

## 2. Non-negotiable content rules

Do not invent company information, including:

- revenue, employee count, founding year, office locations, customers, certifications, or market presence
- distribution rights, brand rights, logistics capability, or confirmed partnerships
- medical or therapeutic claims for health, honey, propolis, or wellness products

Use `[CONTENT REQUIRED]` when confirmed information has not been supplied.

Do not describe:

- a target market as an existing office
- a negotiation as a completed partnership
- a manufacturer as a represented brand
- a conceptual or future service as a currently available service

## 3. Technical stack

- Next.js 14.2.35, App Router
- React 18.3.1
- TypeScript
- Tailwind CSS 3
- Framer Motion
- Lucide React
- npm with `package-lock.json`
- Playwright with a Chromium smoke-test suite

Important package scripts:

- `npm run dev` — local development at `http://127.0.0.1:3100`
- `npm run lint` — source quality check
- `npm run typecheck` — TypeScript check without generating build artifacts
- `npm run build` — production build
- `npm run test:e2e` — Playwright route and navigation smoke tests
- `npm run start` — serve an existing production build

Port `3100` is intentional. Another local project at
`/Users/andylin/Developer/test-website` uses port `3000`.

## 4. Current routes

Implemented:

- `/` — Home
- `/about`
- `/autron-trade`
- `/auzcare`
- `/autrongo`
- `/quarter-innovations`
- `/global-network`
- `/contact`
- `/privacy-policy` — route and noindex placeholder framework; final legal content required
- `/cookie-policy` — route and noindex placeholder framework; final legal content required
- `/api/contact`
- `/robots.txt`
- `/sitemap.xml`

Planned but not implemented:

- all `/zh-tw/...` and `/en/...` localized routes

The standalone `/our-businesses` overview route was removed at the owner's request. The header business menu now routes directly to the four business destinations.

## 5. Implemented frontend components

Shared components include:

- responsive sticky site header and mobile navigation
- site footer
- homepage hero visual
- business page template
- product carousel
- global network map
- reusable motion / reveal components
- breadcrumbs
- contact form

The design system is defined primarily in:

- `tailwind.config.ts`
- `src/app/globals.css`

Current primary brand color in code: `#236FD9`.
The planning documents still note that final logo and brand colors require owner confirmation.

## 6. Work completed after migration to this Mac

The project was moved from another computer where it had been developed with Claude.
The copied `node_modules` directory contained Windows binaries and could not be used on this Apple Silicon Mac.

Completed recovery work:

1. Initialized local Git and preserved the imported baseline.
2. Reinstalled dependencies from `package-lock.json`, including the correct macOS Apple Silicon Next.js binary.
3. Fixed a Framer Motion / SVG TypeScript incompatibility in `src/components/motion.tsx`.
4. Added polling to the development command to avoid the local macOS file-watcher limit.
5. Assigned the Autron project to port `3100` so it does not conflict with the older test website on port `3000`.
6. Added legal-policy placeholder routes; the temporary `/our-businesses` overview route was later removed at the owner's request.
7. Replaced empty footer links with real destinations or explicit planned states.
8. Updated sitemap and robots local fallbacks to port `3100`.
9. Added Playwright route, desktop navigation, mobile navigation, sitemap, robots, and empty-link smoke tests.

## 7. Git history

The handoff was prepared on branch `main`.

Important commits:

- `3d201c5` — preserve imported website baseline
- `2673f6c` — restore production build on macOS
- `c414257` — stabilize local development on macOS
- `96b19a8` — isolate Autron local preview port

There is currently no Git remote. Nothing has been pushed to GitHub or another source host.

Recommended next Git step:

1. Create or choose a private company-owned repository.
2. Review the repository and organization access policy.
3. Add the remote and push `main`.
4. Enable protected branches and dependency alerts as appropriate.

Do not publish this repository publicly without reviewing company content and image rights.

## 8. Last verified technical status

Verified on 2026-09-02:

- clean dependency installation: passed
- ESLint: passed with no warnings or errors
- TypeScript check: passed
- Next.js production build: passed
- development server: passed
- Home, About, four business pages, Global Network, Contact, the two legal placeholders, robots, and sitemap: returned HTTP 200
- Playwright smoke tests: 15 passed

Production build output contains static pages plus the dynamic contact API route.

A production preview emitted a recommendation to install `sharp` for production image optimization. This is not currently a build blocker.

## 9. Known dependency and security status

The npm audit performed on 2026-09-02 reported five high-severity vulnerability groups, primarily involving:

- Next.js 14
- the Next.js ESLint configuration chain
- nested PostCSS / glob packages

This does not prove active compromise, but the dependencies must be upgraded before production launch.

Do not run `npm audit fix --force` without a controlled upgrade plan. The suggested resolution crosses major framework versions and may introduce breaking changes.

Recommended approach:

1. preserve a clean Git checkpoint
2. identify a supported Next.js target version
3. upgrade framework and lint tooling together
4. run lint, type checking, production build, and route tests
5. visually compare all pages

## 10. Contact form status

Already implemented:

- client-side submission state and error display
- server-side required-field and length validation
- email format validation
- honeypot field
- development-stage in-memory rate limiting

Not production-ready:

- submissions are only written to the server console
- no real email or CRM delivery
- no Cloudflare Turnstile verification
- rate limiting is memory-only and resets on restart
- no production retention / privacy workflow

Relevant files:

- `src/components/contact-form.tsx`
- `src/app/api/contact/route.ts`

The current console logging includes the submitted payload. Review production logging so personal enquiry data is not recorded unnecessarily.

## 11. Bilingual and CMS status

The original requirement calls for:

- complete Traditional Chinese and English content
- `/zh-tw/...` and `/en/...` URLs
- language switching that preserves the current route
- localized metadata and hreflang
- CMS-managed bilingual content
- visual section builder and controlled design presets

None of this architecture has been implemented yet.

Storyblok was recommended in the planning documents, but no Storyblok SDK, space, schema, token, or environment variable has been configured.

Do not start CMS integration until the owner confirms:

- Storyblok remains the selected CMS
- who owns the CMS workspace
- editor roles
- content approval process
- expected subscription / budget

## 12. SEO, privacy, analytics, and deployment gaps

Still required:

- page-specific SEO titles and descriptions
- canonical URLs
- bilingual hreflang
- Open Graph / social preview configuration
- complete bilingual sitemap
- structured data appropriate to confirmed facts
- final approved Privacy Policy content (the route and placeholder framework now exist)
- final approved Cookie Policy content (the route and placeholder framework now exist)
- consent strategy if analytics or advertising pixels are added
- GA4 / GTM / Search Console / Bing setup, if approved
- production domain and `NEXT_PUBLIC_SITE_URL`
- staging and production environments

The local sitemap and robots fallback now use `http://127.0.0.1:3100` when
`NEXT_PUBLIC_SITE_URL` is not supplied. The production environment must still set the approved public URL before launch.

## 13. Content confirmation status

### Owner confirmation recorded on 2026-09-02

The owner confirmed that the factual content currently rendered by the local website is approved for continued use. This includes the published homepage and Autron Trade statistics, the Taiwan and Australia office labels, the displayed phone numbers and email address, and the capability wording currently shown on the implemented pages.

This approval applies only to content already rendered outside `[CONTENT REQUIRED]` placeholders. It does not authorise replacing existing placeholders or upgrading a qualified statement into a stronger factual claim.

The following still require confirmation before new content is added or an existing placeholder is replaced:

- final source logo files and locked brand color palette
- official social profile URLs
- AuzCare relationship for every named brand:
  - represented brand
  - partner brand
  - manufacturer
  - own brand
- any change from Autron Go's currently approved logistics-network coordination wording to an in-house capacity claim
- confirmed versus developing status for each market
- approved product claims and regulated wording
- final Privacy Policy and Cookie Policy wording
- final recipients and routing rules for enquiries

The Global Network page intentionally contains `[CONTENT REQUIRED]` placeholders until market status is confirmed.

## 14. Testing gaps

Playwright route and navigation smoke tests now exist. Remaining test gaps include:

- no automated accessibility test
- no responsive screenshot regression test
- no CI workflow

Recommended minimum before launch:

- language switching test after localization
- contact form validation and delivery test
- keyboard navigation and focus test
- comprehensive internal-link and 404 check beyond the current homepage empty-link assertion

## 15. Sites status

The Sites plugin was checked during account handoff.

- The project does not contain `.openai/hosting.json`.
- No Sites project ID is attached to this repository.
- No Sites production deployment was created.
- No site access policy was changed.

This was intentional: the request was account handoff, not public deployment.
If Sites is selected for hosting later, first review the existing Next.js architecture,
contact API requirements, domain plan, and Enterprise workspace access policy.

## 16. Recommended next work order

### Phase A — establish company ownership

1. Open this local folder from the new Enterprise account.
2. Confirm Enterprise allows Codex local access and the Sites plugin.
3. Create a private company-owned Git remote and push the current `main` branch.
4. Confirm who owns domain, CMS, analytics, and email-service accounts.

### Phase B — review the current website

1. Start the site at `http://127.0.0.1:3100`.
2. Review Home first, then each business page.
3. Record approved sections, rejected sections, copy changes, and image changes.
4. Confirm all factual placeholders before replacing them.

### Phase C — make the foundation production-ready

1. upgrade vulnerable dependencies in a controlled branch
2. replace Privacy and Cookie placeholders with company-approved legal content
3. implement real contact delivery, bot protection, and production rate limiting
4. complete metadata, canonical URLs, structured data, and social previews
5. extend the current smoke tests with automated accessibility coverage

### Phase D — bilingual and CMS

1. confirm URL and content model
2. implement localized routing
3. add complete Traditional Chinese and English copy
4. connect the approved CMS
5. configure editor roles, preview, revision, and publishing flow

### Phase E — staging and launch

1. create staging
2. configure environment variables and secrets
3. verify security headers and production logging
4. run visual, responsive, accessibility, SEO, and form testing
5. connect the approved domain and publish

## 17. Instructions for the new Codex account

Open the local folder:

`/Users/andylin/Developer/autron-group-website`

Then give Codex this instruction:

> Continue the Autron Group website from the existing local project. Read
> PROJECT-HANDOFF.md, 00-MASTER-SPEC.md, 01-PLANNING.md, CLAUDE.md, and README.md
> before making changes. Inspect Git status and preserve the existing main branch
> history. Do not invent company facts or replace CONTENT REQUIRED placeholders
> without owner confirmation. First report that you understand the current state,
> then help review the existing pages at http://127.0.0.1:3100 and plan the next
> approved change.

## 18. Handoff verification checklist

- [x] New Enterprise account can open the local project folder
- [x] New account has permission to use Codex locally
- [ ] New account has permission to use required plugins
- [x] `git status` shows the expected branch and no unexplained changes
- [x] `npm run dev` opens Autron Group at port 3100
- [x] New account has read this handoff and the four source documents
- [ ] Private Git remote ownership has been decided
- [ ] Business facts and brand relationships have named approvers
