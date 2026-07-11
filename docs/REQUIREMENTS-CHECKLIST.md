# Requirements Checklist

## Locked Decisions

- [x] Repository name: `studio-art-gallery`
- [x] Initial site title: `Atelier Gallery`
- [x] Keep project identifiers generic and reusable
- [x] Do not use personal relationship terms in repo/site/filesystem identifiers
- [x] Stack target: Astro + TypeScript
- [x] Hosting target: GitHub Pages first
- [x] Default language: Hebrew
- [x] Secondary language: English
- [x] MVP commerce: inquiry-first
- [x] Sold items stay visible as archive/credibility
- [x] Custom commissions included in MVP
- [x] Content managed by Ron/developer files initially
- [x] CMS out of scope for MVP

## Content Pending

- [ ] Contact email
- [ ] WhatsApp number
- [ ] Actual artist name/brand, if different from Atelier Gallery
- [ ] Artist bio
- [ ] Logo/signature asset
- [ ] Initial 5–10 launch artworks
- [ ] Real artwork titles
- [ ] Artwork categories confirmed per item
- [ ] Artwork statuses confirmed per item
- [ ] Prices and public/private price display choices
- [ ] Dimensions in centimeters
- [ ] Materials and techniques
- [ ] Main colors
- [ ] Short descriptions
- [ ] Care/shipping/privacy copy

## Technical Acceptance Checklist

- [ ] Astro project scaffolded with TypeScript
- [ ] Vitest configured for domain logic
- [ ] Playwright configured for rendered routes
- [ ] Artwork model/schema tests added
- [ ] Availability/CTA business rules tested
- [ ] Hebrew-first bilingual routing implemented
- [ ] `lang="he"` and `dir="rtl"` verified for Hebrew pages
- [ ] English routes verified
- [ ] Gallery page implemented
- [ ] Artwork detail page implemented
- [ ] Inquiry CTA or form includes artwork context
- [ ] GitHub Pages workflow configured
- [ ] Build/check/test/E2E verified in CI or sandbox

## Decision Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-07-11 | Use `studio-art-gallery` as repo/project name | Generic and reusable; avoids relationship-specific naming |
| 2026-07-11 | Use `Atelier Gallery` as temporary public title | Elegant placeholder until actual brand is known |
| 2026-07-11 | Astro + TypeScript | Static, SEO-friendly bilingual catalog with light interactivity |
| 2026-07-11 | Inquiry-first MVP | Better fit for one-of-a-kind handmade artwork than immediate checkout |
| 2026-07-11 | GitHub Pages initial hosting | Fast public preview with low operational complexity |
