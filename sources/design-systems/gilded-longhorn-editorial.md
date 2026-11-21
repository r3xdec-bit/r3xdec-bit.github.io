---
version: "r3xdec design-alpha"
name: "Gilded Longhorn Editorial"
description: "A near-white editorial system bookended by two near-black cinematic bands, built on oversized serif-interrupted display type, slate-blue muted form fields, and an unrationed gold emblem as its sole warm accent."
colors:
  background: "#F4F7F9"
  surface: "#FFFFFF"
  surface-dark: "#0A0A0A"
  surface-dark-alt: "#020202"
  text-primary: "#000000"
  text-secondary: "#607179"
  border-light: "#A0A0A0"
  form-fill: "#DEE9F7"
  accent-gold: "#F6AD55"
typography:
  display-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "55px"
    fontWeight: 800
    lineHeight: "1.3"
  headline-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.3"
    letterSpacing: "2px"
  body-md:
    fontFamily: "Figtree"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: "1.3"
  label-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  body-reading:
    fontFamily: "Times New Roman"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-serif:
    fontFamily: "Georgia"
    fontStyle: "italic"
    role: "muted-slate interruption word within display headlines"
spacing:
  base: "10px"
  gap-sm: "16px"
  gap-md: "24px"
  gap-lg: "32px"
  section-padding: "40px"
  hero-panel-padding: "120px 16px 0px"
rounded:
  control: "4px"
  button-sharp: "4px"
  button-standard: "8px"
  button-tight: "5px"
  pill: "25px"
components:
  button-primary-hero:
    background: "#000000"
    text-color: "#FFFFFF"
    radius: "5px"
    height: "66px"
    padding: "15px 10px"
    shadow: "rgb(255, 255, 255) 0px 0px 0px 0px"
    note: "observed near-black solid pill-adjacent rectangle, hero's single highest-contrast CTA"
  button-primary-form:
    background: "#020202"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "51px"
    padding: "16px 32px"
  button-secondary-light:
    background: "#FFFFFF"
    text-color: "#0B1120"
    radius: "8px"
    height: "51px"
    padding: "16px 32px"
  button-nav-link:
    background: "transparent"
    text-color: "#000000"
    radius: "0px"
    height: "51px"
    padding: "0px"
  card-step:
    background: "#F4F7F9"
    radius: "8px"
    border: "1px solid #A0A0A0"
    padding: "24px"
  card-location:
    background: "#FFFFFF"
    radius: "8px"
    border: "1px solid #A0A0A0"
    padding: "24px"
    shadow: "rgba(0, 0, 0, 0.03) 0px 4px 12px 0px"
  card-testimonial:
    background: "#FFFFFF"
    radius: "8px"
    shadow: "rgb(136, 136, 136) 0px 0px 1px 0px"
    padding: "24px"
  panel-hero-form:
    background: "#FFFFFF"
    radius: "10px"
    padding: "32px"
    input-fill: "#DEE9F7"
---
# Gilded Longhorn Editorial
Source: https://link.leadjuice.com/preview/akbxI2SOQyd3dCBeKbtq

## Overview
This is a minimalist editorial system with a clinical, trust-building voice: an off-white (#F4F7F9) working surface carries nearly all content, bookended top and bottom by near-black cinematic bands (#0A0A0A, #020202) that frame the page like a cold open and a closing scene. The one warm note in an otherwise monochrome-and-slate palette is a gold line-art emblem, used only in the two black zones — never bled into the light body. Display type is an extra-bold grotesque (Plus Jakarta Sans 800) broken by a muted slate-gray serif/italic word per headline, giving every section title a one- or two-word "stamped" interruption. The system reads as Swiss-adjacent editorial restraint crossed with a soft-clinical trust aesthetic — flat, no gradients beyond one near-white sheen, shadows kept to near-zero elevation.

## Composition
The first screen is a dark, dimly photographic hero: a muted brown-black interior photograph recedes behind a left-aligned gold emblem, wordmark, an all-caps eyebrow pill, a four-line display headline with one slate-toned interruption clause, a short support paragraph, a solid black CTA, and a five-item checklist — opposite a boxed white intake form on the right. This hero-with-adjacent-form split is the deliberate choice over a full-bleed centered hero; it sacrifices cinematic immersion for immediate lead capture. Below, the page alternates light bands of editorial two-column content (image left/right + text block) with step-numbered card rows and a long testimonial field, then darkens again for a technology/credibility band, lightens for a location card grid, and closes on the second black band — a short headline, one CTA, and a minimal footer. Density is generous: wide line lengths capped near 600px per text column, single-column stacking inside each band, nothing crowded.

## Colors
`#F4F7F9` and `#FFFFFF` alternate as the page's two light surfaces (roughly 32–34% each of declared area, confirmed dominant in the pixel field at ~37%/~22%), used respectively for body bands and card/form panels. `#0A0A0A`/`#020202` form the two black bookend bands (~28–29% of the pixel field) — hero and closing CTA. Primary ink is pure `#000000` for headings, with `#607179` as secondary/muted text for body copy and captions. Borders run a pale `#A0A0A0` hairline on card edges. Form fields use a distinct cool pale blue `#DEE9F7`, a role not shared by any other surface — it exists only to mark "you type here." Gold is rationed to the emblem glyph alone, appearing twice (hero, footer) and nowhere else — no gold text, no gold buttons, no gold accents in cards. This leaves the entire mid-page system deliberately colorless: black ink, slate-gray secondary ink, white/off-white surfaces, no brand-hue tint anywhere in the body.

## Typography
Display headlines run Plus Jakarta Sans at 800 weight, 55px, tight 1.3 line-height, broken by one slate-colored serif/italic word or short clause per headline (e.g., a single word rendered in `#607179` against the black ink of the rest) — this interruption never covers more than a few words and recurs on essentially every section headline. Eyebrow labels sit above headlines at 14px/700, 2px tracked, all-caps. Body copy reads in a serif register (Times New Roman 16px/400) for long-form paragraphs — an editorial, almost clinical-document choice distinguishing prose blocks from UI chrome — while labels and short UI text use Plus Jakarta Sans 16px/400 or Figtree 13px/700 for denser micro-copy (numerals, list items). Roboto and Georgia round out the family set as supporting faces for secondary captions.

## Layout
Content is capped near a 600px measure for readable text columns, widening only for card grids and image panels. The location/step sections use explicit multi-column card rows: a 3-up step row, a 4-up location-card row, consistent 24px gaps. A 4-column, 13-item grid (gap 24px) governs a denser feature/benefit section, packing items at ~23% width each with a trailing partial row. Testimonial cards run in a loose 2-up field with generous vertical rhythm. Image-plus-text bands split 50/50 with the image bleeding to one edge. Radii stay small and consistent (4–10px) except the hero CTA's tighter 5px and a 25px pill token reserved for rounder badge-like elements — nothing in this system uses a full 9999px pill.

## Components
- **Navbar/emblem lockup** (hero only, top-left): gold line-art longhorn glyph above a two-line wordmark in condensed caps, white-on-dark; no visible horizontal nav links in the hero — navigation is replaced by the emblem + eyebrow pill.
- **Hero primary CTA** (first screen, under the headline): an observed near-black solid rectangle, ~5px corners, 66px tall, white uppercase label with a trailing arrow glyph — the single most prominent button on the page, sitting on the dark photographic band.
- **Intake form panel** (first screen, right side): white panel, ~10px radius, generous 32px internal padding, containing four pale-blue (`#DEE9F7`) input fields (name, phone with flag selector, email, a dropdown), a checkbox + fine-print consent line in `#607179`, and a full-width black submit button (`#020202`, 8px radius, 51px tall).
- **Secondary mid-page CTA buttons** (×2, under content blocks): solid `#020202` fill, white text, 8px radius, 51px height, 16px/32px padding — same family as the form submit, reused standalone mid-page.
- **Light CTA button** (on dark closing band): white fill, `#0B1120` text, 8px radius, 51px height — the inverse-contrast counterpart used only on black backgrounds.
- **Nav-style text links** (×5, transparent, 0px radius, 51px tall): flat text-only utility links, no visible container — used for in-page wayfinding, not styled as buttons.
- **Step cards** (×3, numbered process band): pale `#F4F7F9`-adjacent bordered cards in a single row of three equal columns; each carries an oversized slate-gray numeral (01/02/03), a bold short heading, and a serif body paragraph — no media, no CTA inside the card.
- **Location cards** (×5, "find us" band): five equal-width cards in one row (wrapping to additional rows on narrow viewports), white fill, hairline `#A0A0A0` border, soft `rgba(0,0,0,0.03)` 12px shadow; each contains a circular pin-icon badge, a bold location name, and an address line in secondary ink — no imagery, no CTA per card.
- **Testimonial cards** (×4+, in a 2-up field): white fill, near-invisible `rgb(136,136,136)` 1px shadow for separation rather than elevation; each holds a five-star glyph row, then one or two italicized serif quote paragraphs stacked — no avatar, no name/role visible on these cards.
- **Media-left-bleed rows** (×2, editorial sections): full-width split rows — image fills one side edge-to-edge, text block fills the other at equal 100%/100% width allocation — repeated as the page's structural device for "what it is" and "who we are" content.
- **Four-column feature grid** (13 items, gap 24px): dense checklist/benefit grid, items sized to ~23% of row width in groups of four, with a trailing partial row — used for a longer enumerated list (certifications, conditions, or similar short facts) rather than full cards.
- **Closing CTA band** (last screen, black): oversized display headline with one serif/italic interruption word, a short support line, and a single white pill-adjacent-rectangle CTA, followed by a hairline-divided footer containing the gold emblem, a one-line description, and legal copy.

## Graphics & Effects
A `linear-gradient(135deg, rgb(255, 255, 255) 0px, rgb(244, 247, 249) 100%)` appears only on a small sheen element (roughly 9% of total page area) — a subtle diagonal lightening used on a panel or card surface, not as a page-wide wash; the two black bands remain flat, unsegmented `#0A0A0A`/`#020202`. Card elevation is nearly flat throughout: a near-invisible `rgb(136, 136, 136) 0px 0px 1px 0px` hairline shadow on testimonial cards, and a soft `rgba(0, 0, 0, 0.03) 0px 4px 12px 0px` ambient shadow on location cards — both read as barely-there separation, not dramatic lift. The hero CTA carries a zero-spread `rgb(255, 255, 255) 0px 0px 0px 0px` shadow token, effectively inert at rest. The hero photograph itself is a dim, warm-toned interior scene, darkened toward black at the edges to seat white text — a photographic scrim rather than a graphic gradient.

## Motion
Interactions are governed by short, utilitarian transitions: `border 0.2s ease-in-out` and `all 0.2s ease-in-out` drive hover/focus state changes on form fields and buttons, `padding 0.2s ease` handles minor size shifts, and a slower `all 0.45s cubic-bezier(0.29, 0.63, 0.44, 1)` eases larger state or layout changes (likely dropdown/expand reveals). Named keyframe animations — v-moonStretchDelay, rocking, pulseGlow, bounce, elevate, wobble — exist for ambient or icon-level flourishes rather than page transitions; treat them as small decorative loops (e.g., a pulsing glow on an icon, a gentle wobble on hover) rather than scroll-driven effects.

## Guardrails
- Never extend the measured sheen gradient beyond a single small element; the hero and closing bands stay flat near-black.
- Never recolor the gold emblem's hue elsewhere in the system — it appears only in the two dark bands, nowhere in the light body.
- Never round any button or card past the measured 4–10px range; do not introduce a 9999px pill — the tightest "pill-like" token measured is 25px.
- Keep body-reading paragraphs in the serif (Times New Roman) register; do not convert them to the sans UI face, which is reserved for labels, headings, and numerals.
- Preserve the slate-gray serif/italic interruption as one short word or clause per headline — never apply it to a full sentence or omit it entirely.
- Do not add elevation/shadow beyond the near-flat values measured; this system signals trust through whitespace and hairline borders, not depth.