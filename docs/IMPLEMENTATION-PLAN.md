# Implementation Plan

## Phase 0 — Repository and Planning

- [x] Create local standalone project repository
- [x] Add PRD
- [x] Add requirements checklist and decision log
- [x] Add implementation plan
- [x] Create GitHub repository/remote after confirmation

## Phase 1 — Astro + Test Scaffold

Goal: establish a testable static-gallery foundation without content assumptions.

Likely files:

- `package.json`
- `astro.config.mjs`
- `tsconfig.json`
- `vitest.config.ts`
- `playwright.config.ts`
- `src/lib/artwork.ts`
- `src/lib/i18n.ts`
- `src/lib/inquiry.ts`
- `tests/artwork.test.ts`
- `e2e/locales.spec.ts`

Acceptance criteria:

- [x] Astro TypeScript project exists.
- [x] Unit tests can run via `npm test`.
- [x] Static build can run via `npm run build`.
- [x] Playwright can verify Hebrew and English routes.
- [x] CI workflow added for unit, build, and Playwright gates.

## Phase 2 — Artwork Model and Business Rules

Goal: model the photo-first catalog safely.

Scope:

- Artwork statuses: `available`, `reserved`, `sold`, `notForSale`.
- Purchase modes: `inquire`, `commission`, `sold`, future `checkout`.
- Up to 5 images per artwork.
- Required launch fields: title, category, at least one image.
- No invented metadata.

Tests required:

- Valid/invalid image counts.
- Required title/category/images.
- Sold items do not produce purchase CTAs.
- Available inquiry items produce localized inquiry CTAs.
- Hebrew/English label fallback behavior.

## Phase 3 — Bilingual Routes and Pages

Goal: ship crawlable gallery and artwork pages.

Scope:

- Hebrew home/gallery route.
- English home/gallery route.
- Artwork detail routes for both languages.
- Language switcher preserving equivalent page where possible.
- RTL metadata for Hebrew.

Tests required:

- Playwright route checks for Hebrew and English.
- RTL assertion on Hebrew pages.
- Gallery cards link to detail pages.
- Detail page displays inquiry action with artwork context.

## Phase 4 — Inquiry Flow

Goal: provide a reliable buyer contact path.

Scope:

- Email/WhatsApp CTA once destinations are supplied.
- Optional inquiry form island if needed.
- Preferred-language and artwork-context inclusion.
- Privacy/consent note if using a form.

Tests required:

- Required name if form exists.
- Email-or-phone rule if form exists.
- Artwork title/id attached to inquiry.
- Friendly fallback when contact destination is missing.

## Phase 5 — Policies and Launch Polish

Goal: make the MVP credible and safe to share.

Scope:

- Care instructions page.
- Shipping/pickup note.
- Privacy note.
- SEO metadata.
- Warm studio + premium boutique visual baseline.

## Phase 6 — GitHub Pages Preview

Goal: deploy a reviewed preview.

Scope:

- [x] GitHub Actions workflow for build/test/E2E as practical.
- [x] GitHub Pages publishing workflow configuration.
- [x] Disable automatic Pages deployment while the private repository/account plan does not support GitHub Pages.
- [x] Enable GitHub Pages Actions deployment after repository visibility changed to public.
- [x] Preview URL handoff: `https://ron-huberfeld.github.io/studio-art-gallery/`.

Ron reviews before merge or production promotion.
