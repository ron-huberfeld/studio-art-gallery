# Atelier Gallery PRD

## Problem

An artist needs a polished public web presence to display handmade artwork, communicate availability, invite inquiries, and establish credibility without committing to a full checkout/CMS system before the content model is proven.

## Goals

- Present a bilingual Hebrew-first and English art gallery/catalog.
- Make individual artwork pages crawlable and shareable.
- Support inquiry-first sales for one-of-a-kind items.
- Support custom commission inquiries in the MVP.
- Keep sold items visible as archive/credibility, clearly marked.
- Keep the codebase and naming generic and reusable for any artist.
- Start with developer-managed content and avoid CMS complexity for MVP.

## Non-goals

- No direct checkout in MVP.
- No CMS in MVP.
- No invented prices, dimensions, titles, materials, artist bio, or contact details.
- No production VPS deployment before review; GitHub Pages preview first.

## Users

- Primary buyers browsing handmade decorative art in Israel.
- Gift buyers looking for custom handmade items.
- The artist/Ron as initial content manager.

## Product Direction

- Launch goal: balanced gallery/shop.
- Public title: **Atelier Gallery**.
- Initial artwork count: 5–10 items.
- MVP commerce: inquiry-first.
- Long-term commerce: hybrid checkout for selected smaller/reproducible items, while unique originals may remain inquiry/reserve.

## Languages and UX

- Default language: Hebrew.
- English route/content supported from the start.
- Hebrew pages must render with `lang="he"` and RTL layout.
- Visual direction: warm studio + premium boutique.

## Artwork Categories

- Decorative plates
- Trays
- Hamsa wall art
- Boxes
- Mirrors
- Bottles/vases
- Hanging ornaments
- Other

## Artwork Model

### Required at launch

- Title
- Category
- At least one image

### Optional/supported fields

- Status
- Price
- Whether price is public, hidden, or inquiry-only
- Dimensions in centimeters
- Materials
- Technique
- Main colors
- Description
- Sale availability
- Similar/custom commission availability
- Special notes

### Statuses

- `available`
- `reserved`
- `sold`
- `notForSale`

### Purchase modes

- `inquire`
- `commission`
- `sold`
- `checkout` later only

### Images

- Support up to 5 images per artwork.
- Individual artworks may have fewer images.

## Inquiry Flow

MVP inquiry destinations are email and/or WhatsApp once provided.

Suggested form fields:

- Name
- Email
- Phone/WhatsApp
- Message
- Artwork title/id automatically included
- Preferred language
- Consent checkbox if needed

## Policy Pages

- Care instructions
- Shipping/pickup note
- Privacy note for contact form

## SEO Direction

Initial target terms once artist details are known:

- handmade mandala art
- dot painting
- hamsa wall art
- decorative trays
- Israeli artist
- custom handmade gifts
- relevant category/artwork terms

## Acceptance Criteria

- Hebrew and English gallery routes exist.
- Hebrew pages have correct RTL metadata.
- Gallery lists available/reserved/sold/not-for-sale states clearly.
- Artwork detail pages are static, shareable, and SEO-friendly.
- Inquiry CTA includes artwork context.
- Sold items remain visible but cannot be purchased.
- No hardcoded relationship-specific naming appears in project identifiers.

## Risks and Open Questions

- Contact email is not yet known.
- WhatsApp number is not yet known.
- Artist/brand name may change from temporary title.
- Actual artwork names, categories, prices, dimensions, and descriptions are missing.
- Launch photo selection is pending.
