# AGENTS.md

## Project Overview

`studio-art-gallery` is a generic, reusable bilingual art gallery/catalog site. The initial public title is **Atelier Gallery**.

## Naming Rules

- Do not use personal relationship terms in repository names, package names, routes, folder names, filenames, code identifiers, or project artifacts.
- Keep project architecture reusable for any artist.

## Architecture Direction

- Prefer Astro + TypeScript for static, SEO-friendly pages.
- Use React islands only where interactivity is genuinely needed.
- Keep business rules in tested TypeScript modules instead of burying them in `.astro` markup.
- Hebrew is the default language; English is also supported.
- Hebrew pages must use RTL layout and correct language metadata.

## Testing Direction

- Vitest for pure artwork/i18n/inquiry logic.
- Testing Library for interactive islands if used.
- Playwright for rendered Hebrew/English routes, RTL assertions, gallery/detail pages, and inquiry journey.
- Astro check/build for type and static-generation verification.

## Development Workflow

- Use a dedicated git branch for every slice.
- Prefer test-first implementation for domain rules and user-visible behavior.
- Run verification in CI or an isolated sandbox before PR readiness.
- Ron reviews PRs before merge/deployment.

## MVP Scope Guardrails

- Inquiry-first commerce only.
- No direct checkout in MVP.
- No CMS in MVP.
- Do not invent missing artist/artwork metadata.
- Sold items stay visible but clearly marked and not purchasable.
