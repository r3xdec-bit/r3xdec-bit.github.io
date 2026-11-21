---
version: "r3xdec design-alpha"
name: "Navy Ledger Trust"
description: "Institutional light-mode system on a navy-and-cream palette: a solid navy header band, translucent-on-navy compliance cards, and a gold rule-and-label accent used to mark trust claims."
colors:
  background: "#F8FAFC"
  surface: "#003366"
  surface-glass: "rgba(255, 255, 255, 0.05)"
  text-primary: "#000000"
  text-secondary: "#4B5563"
  text-on-navy: "#FFFFFF"
  accent-gold: "#C5A059"
  accent-gold-light: "#E8D5B5"
  accent-blue: "#004A99"
  success: "#16A34A"
typography:
  display-lg:
    fontFamily: "Montserrat"
    fontSize: "30px"
    fontWeight: 800
    lineHeight: "1.2"
    letterSpacing: "-0.6px"
  headline-md:
    fontFamily: "Montserrat"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "1.11"
    letterSpacing: "-0.7px"
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.43"
  label-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.43"
  label-tracking:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.43"
    letterSpacing: "0.08em"
    fontStyle: "uppercase eyebrow / logotype tracking"
spacing:
  base: "8px"
  gap: "24px"
  section-padding: "48px"
  micro-gap: "4px"
rounded:
  control: "12px"
  card: "16px"
  pill: "9999px"
  sharp: "2px"
  panel: "24px"
components:
  button-primary:
    background: "#003366"
    text-color: "#FFFFFF"
    radius: "12px"
    height: "44px"
    border: "none"
    hover-background: "#004A99"
  card-glass:
    background: "rgba(255, 255, 255, 0.05)"
    radius: "16px"
    padding: "24px"
    border: "1px solid rgba(255,255,255,0.1)"
    text-color: "#FFFFFF"
  card-checklist-navy:
    background: "#003366"
    radius: "16px"
    padding: "24px"
    text-color: "#FFFFFF"
    label-color: "#C5A059"
  card-checklist-highlight:
    background: "#003366"
    radius: "16px"
    padding: "24px"
    border: "2px solid #C5A059"
    text-color: "#FFFFFF"
  card-flat:
    background: "#F8FAFC"
    radius: "16px"
    padding: "24px"
    border: "1px solid #F1F5F9"
    shadow: "rgba(0, 51, 102, 0.15) 0px 10px 30px -10px"
---
# Navy Ledger Trust
Source: https://p.r3xdec design.dev/draft/b90f8bc0-a6be-4518-9cf8-806e160f46c2

## Overview
This is an institutional, trust-forward light-mode system — closer to Swiss/International rationalism than to any consumer-app trend: strong navy-and-white structure, one gold accent rationed to labels and rules, generous whitespace, and no imagery beyond flat icon glyphs. Montserrat extra-bold headlines carry authority; Plus Jakarta Sans carries every body and label role, giving the page a legal-document, contract-literate voice appropriate to its subject.

## Composition
The page opens with a solid navy header band holding a wordmark-and-eyebrow lockup on the left and a two-line label-plus-headline badge on the right — no hero illustration, no gradient wash, just flat navy. Below it, the page drops to white/cream for an intro band: a short gold rule marks the section head, paired with a small shadowed card at right (a shield glyph, bold title, italic quote). The rhythm then alternates deliberately: white intro band → full-width navy compromise band containing a 3-then-3 card grid → white "why it matters" band with icon-led rows and a CTA → flat footer band. This navy/white alternation is the one deliberate compositional choice — sections are demarcated by hard color blocks rather than by spacing alone, rejecting the more common all-white-with-shadow-cards approach; it reads as ledger pages stacked rather than a continuous scroll.

## Colors
Navy `#003366` is the dominant structural color, covering the header, the mid-page compromise band, and every checklist card — it is a surface role here, not just a text color, consistent with the near-navy-and-white pixel field (#F0F0FF ~45%, #FFFFFF ~24%, #003060 ~15%, #184878 ~7% together account for the vast majority of rendered pixels). White/off-white (#FFFFFF, #F8FAFC) forms the reading bands between navy sections. Gold (`#C5A059`, with a lighter `#E8D5B5` tint) is the single rationed accent — used only for the small header label line, section eyebrow rules, and card sub-labels, never as a fill; it appears on perhaps 2-3% of pixels but anchors every "important" marker. Text ink is pure black (`#000000`) on white bands and pure white on navy bands; secondary/support copy sits at `#4B5563`. Green (`#16A34A`) is reserved solely for small checkmark glyphs signaling completed/agreed items — a true semantic-success token, never decorative.

## Typography
Montserrat 800 at 30px (display-lg, tight -0.6px tracking) sets question-style section headers ("¿Qué es…", "¿Por qué…"); a heavier 36px/700 Montserrat variant (headline-md) is reserved for the navy compromise-band title. Body copy runs in Plus Jakarta Sans 16px/400 at `#4B5563` for paragraph text, stepping up to a bold 14px/700 label face for card titles, eyebrows, and the header's small uppercase tag line — this bold-label-over-regular-body pairing is what gives cards their contract-clause, itemized feel.

## Layout
Content is bounded to a 1200px max-width, centered, with an outer canvas that stays a very light lavender-white beyond the content column. Spacing runs on an 8px-derived scale (48/32/24/16/8/4px), with 48px gaps separating major two-column splits and 24px gaps inside 3-column grids. The mid-page compromise section is a strict 3-columns × 2-rows grid (6 cards, 24px gap, each card ~32% width) — a uniform card grid, not bento, with one card in the second row distinguished only by a gold border and a different internal layout (a callout stat rather than a checklist item), never by a size-span change. Earlier on the first screen, a 2-column 43/43 split (48px gap) pairs the intro paragraph against the transparency callout card. Card corner radius is consistently 16px across all card families; the flat footer and plain text rows carry 0px radius, reserved for elements with no fill.

## Components
- **Navbar**: full-bleed edge-to-edge navy rectangle (not inset, not a capsule), square corners top and bottom — spans the full viewport width as a flat header band, height roughly 130px including vertical padding. Contains a letter-spaced wordmark lockup (large tracked "logotype" plus a small gold uppercase tagline beneath) at left; at right, a self-contained badge/pill-corner rectangle in a slightly lighter navy fill holding a two-line label stack (small gold uppercase eyebrow over a larger gold bold headline). No visible nav links and no separate CTA button in this band — the badge itself functions as the header's focal call-out.
- **Button, primary (CTA)**: solid navy fill `#003366`, white text, 12px corner radius (rounded, not pill), ~44px height, paired with a trailing arrow glyph; appears once, inline at the end of the "why it matters" white band, aligned right against its icon-row content. Hover shifts fill toward `--brand-accent-blue: #004A99`.
- **Transparency callout card**: appears once, top-right of the intro band. Surface: light near-white fill, 16px radius, 24px padding, soft shadow `rgba(0, 51, 102, 0.15) 0px 10px 30px -10px`. Anatomy top-to-bottom: a small navy squircle icon tile holding a shield glyph, a bold black title beside it, then an italicized quote-style paragraph beneath — no CTA, purely a trust statement.
- **Checklist card family (compromise grid)**: ×6, arranged 3-per-row × 2 rows (rows [32/32/32 | 32/32/32] as % of container width, 24px gap). Surface: navy `#003366` fill, 16px radius, 24px padding, no visible border on 5 of them. Anatomy: a small green circular checkmark glyph at top-left, a short bold gold-or-white label heading, then a white/light-gray sentence of supporting body copy beneath. The sixth card (bottom-right position) is the same navy/16px/24px shell but with an added gold border and swaps the checklist anatomy for a centered label ("stat"-style small gold eyebrow over a larger bold white line) — a highlighted/summary variant, not a size change.
- **Icon-row list (why-it-matters section)**: ×2, stacked vertically (not a grid), each row pairing a small square icon tile (flat glyph, no fill card) at left with a bold black title and a `#4B5563` gray sentence beneath — transparent background, 0px radius, no padding shell, function purely as a two-item checklist read top-to-bottom.
- **Footer**: flat `#F8FAFC` background, 0px radius, edge-to-edge band. Anatomy left-to-right: wordmark plus a short tagline stacked at left; a row of three contact items (phone glyph + number, envelope glyph + address, globe glyph + domain) at right; below that, two small circular social icon glyphs (one navy-filled, one green-filled) left-aligned. Five total link/contact touchpoints in this band.

## Graphics & Effects
No gradients, photography, or illustration anywhere in the system — every visual element is a flat glyph icon (shield, lock, people, phone, envelope, globe, social marks) on solid navy or solid white. The only shadow work is a soft elevation cue on flat white cards: `rgba(0, 51, 102, 0.15) 0px 10px 30px -10px`, a navy-tinted ambient shadow that lifts the transparency card off the page without any glass/blur treatment — no `backdrop-filter` is visibly used despite one being present in the underlying stylesheet (`blur(12px)`); the surface reads as fully opaque navy, not frosted. The gold rule beside section headers is the system's only decorative graphic device — a short horizontal line, no icon, purely a typographic anchor.

## Motion
Interactive elements use short, snappy transitions: `all 0.15s cubic-bezier(0.4, 0, 0.2, 1)` on buttons and hover states, with color/fill-specific transitions on the same 0.15s curve, and a faster `opacity 0.1s ease-in` for any fade behavior. No scroll-triggered reveals, parallax, or looping animation are evident — motion here is confined entirely to discrete hover/press feedback on the primary CTA and link glyphs, consistent with the system's restrained, document-like character.

## Guardrails
- Never render the navbar as a centered or inset capsule — it is a full-bleed square-cornered navy band.
- Do not introduce photography, gradients, or blob shapes; every graphic is a flat single-color glyph.
- Keep gold strictly as an accent on labels/rules/borders — never use it as a large fill or button background.
- Do not merge the six compromise-grid cards into unequal spans; they are a uniform 3×2 grid with one bordered highlight variant, not a bento layout.
- Preserve navy (#003366) as an opaque card and section fill, not a translucent glass layer, despite a blur value existing in code.
- Keep body copy in Plus Jakarta Sans and headlines in Montserrat — do not substitute a single family across both roles.