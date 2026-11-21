---
version: "r3xdec design-alpha"
name: "Lavender Ledger Panels"
description: "A light, white-dominant real-estate marketing system built from a floating glass-edged search card over a photographic hero, and a rhythm of two-up full-bleed color-block panels in pastel hues beneath, carried by a condensed rounded display face and indigo as the sole saturated accent."
colors:
  background: "#FFFFFF"
  surface: "#F5F5F7"
  surface-alt: "#D5BFD7"
  text-primary: "#000000"
  text-secondary: "#575763"
  text-inverse: "#F0F0F2"
  accent: "#3957BD"
  accent-hover: "#3552B5"
  warning-tint: "#FFF8E6"
  warning-ink: "#F2C037"
  border: "#D7D7DD"
  night-panel: "#000D38"
typography:
  display-lg:
    fontFamily: "Oatmeal"
    fontSize: "47px"
    fontWeight: 600
    lineHeight: "1"
    letterSpacing: "-0.9px"
  headline-md:
    fontFamily: "Oatmeal"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: "1"
    letterSpacing: "-0.7px"
  body-md:
    fontFamily: "Oatmeal"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: "1.6"
  label-md:
    fontFamily: "Oatmeal"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: "1"
    letterSpacing: "-0.7px"
  body-regular:
    fontFamily: "Oatmeal"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "1.6"
  accent-eyebrow-mono:
    fontFamily: "Oatmeal"
    fontSize: "11px"
    fontWeight: 700
    style: "all-caps badge face, used only on the small promotional tag"
spacing:
  base: "4px"
  gap-sm: "8px"
  gap-md: "16px"
  gap-lg: "24px"
  gap-xl: "32px"
  content-max-width: "97px"
rounded:
  control: "8px"
  card: "16px"
  pill: "100px"
  pill-alt: "9999px"
  sharp: "8px"
components:
  button-primary-hero:
    background: "#3957BD"
    text-color: "#F0F0F2"
    radius: "100px"
    height: "56px"
    padding: "16px 24px"
    hover-background: "#3552B5"
  button-primary-compact:
    background: "#3957BD"
    text-color: "#FFFFFF"
    radius: "10000px"
    height: "40px"
    padding: "12px 16px"
  button-ghost-light:
    background: "transparent"
    text-color: "#000000"
    radius: "100px"
    height: "40px"
    padding: "0px 12px"
    hover-background: "rgba(227, 227, 231, 0.5)"
  button-nav-item:
    background: "transparent"
    text-color: "#000000"
    radius: "0px"
    height: "48px"
    padding: "16px"
  card-search-panel:
    background: "#FFFFFF"
    radius: "16px"
    padding: "24px"
    shadow: "rgba(95, 99, 120, 0.12) 0px 4px 4px 0px, rgba(95, 99, 120, 0.12) 0px 8px 16px 0px"
  card-promo-panel:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    note: "full-bleed photographic/illustrated panel, no corner rounding, no card chrome"
  card-city-link-block:
    background: "#FFFFFF"
    radius: "0px"
    padding: "16px 32px"
---
# Lavender Ledger Panels
Source: https://www.quintoandar.com.br/

## Overview
This is a light, white-dominant (~76% of rendered pixels pure #FFFFFF) marketing system in a soft-corporate minimalist register: condensed rounded sans display type, generous photographic imagery, and flat vector illustration carrying warmth where typography stays restrained. It is not glassmorphic or dark-mode — it is a paper-white canvas interrupted by large saturated color panels (lavender #D5BFD7, pink, sage, cream, periwinkle, deep navy #000D38) that behave like editorial section dividers. The one brand hue, indigo #3957BD, is rationed almost exclusively to pill buttons and link text, never used as a background fill at scale.

## Composition
The first screen is a classic split hero: a left-anchored floating white search card (rounded 16px, soft dual-layer shadow) over a full-bleed photographic image occupying roughly the right 65% of the viewport, with a dark linear scrim (`linear-gradient(90deg, rgba(0,0,0,0.75), rgba(0,0,0,0) 48%)`) feathering the photo's left edge for legibility — this scrim covers only that image region, not the page. Below the fold the page shifts to a strict two-up rhythm: alternating full-bleed color-block/photo panels at 93% row width each, six such panels stacking in sequence (rows [93|93|93|93|93|93]), each pairing a flat-color or navy editorial half with an opposite photographic or carousel half. Near the page end this loosens into a dense, un-boxed multi-column directory grid (geographic link columns), then a bordered callout block, then the footer. The deliberate choice is panel-pair storytelling over a uniform card grid — it rejects a symmetrical bento/feature-grid approach in favor of sequential two-column "chapters," each with its own hue.

## Colors
Background is paper-white (#FFFFFF, ~76% of pixels) with a near-white tonal surface (#F5F5F7, ~12%) used for the footer and one directory band. Structural grays (#C0C0C0, #D8D8D8) sit in dividers and secondary panels. Indigo #3957BD is the sole brand/accent hue — it fills pill buttons and anchors link text, never a section background. Panel hues (observed: dusty lavender #D5BFD7 at ~10% of declared area, plus pink and pale-sage/cream panels seen in the two-up sections, and deep navy #000D38 at ~12%) are used as alternating full-bleed backgrounds for editorial panels — essentially a rotating palette of soft pastels plus one near-black navy, each panel claiming its own hue so no two adjacent panels repeat. Warning/promo badges use a pale cream fill (#FFF8E6) with amber ink (#F2C037) for a small "sale" tag. Text ink is pure black (#000000) on light panels and off-white (#F0F0F2) on the navy/dark panels. Borders are hairline near-white-gray (#D7D7DD).

## Typography
Everything runs on one condensed, slightly geometric rounded sans, "Oatmeal." Display and headline sizes (47px and 36px, both weight 600, line-height 1, tight tracking -0.7/-0.9px) carry all panel titles and the hero headline — tight leading makes two-line wraps read as a single compact block. Body copy drops to 15px at weight 400–600 and a much looser 1.6 line-height, creating strong hierarchy purely through scale and leading rather than family switching — there is no serif or mono family anywhere; the only secondary face is a small all-caps badge label distinguished by size/weight alone, not typeface.

## Layout
Content is capped at 1344px max-width. The hero search card uses an internal spacing scale of 24/16/8px for field stacking. The two-up editorial panels run at a fixed 2-column split with no visible gutter stated, each occupying ~93% of its row container, full-bleed to the content edge with zero border-radius and zero padding on the panel itself — all breathing room lives inside via 16px padding on the panel's text block. The geographic directory switches to a dense multi-column (8–9 column) text-link layout with no card chrome. A late small-promo row uses a 2-column/3-item asymmetric grid (rows [96|21|74]) mixing a tall block with two shorter stacked items. White card panels appear only three times near mid-page as 100%-width stacked heading-only rows (padding 16px 32px, radius 0px) — flat list rows, not boxed cards.

## Components
- **Navbar**: edge-to-edge square bar, 1920px wide (100% viewport, 0px side inset), 80px tall, background #FFFFFF, sticky, square corners on all four sides (0/0/0/0 radii — a flat full-width strip, not an inset or capsule). Contains a logo mark at left, a cluster of ~7 text dropdown nav items at weight-normal black ink, and a single ghost "Entrar" (sign-in) control at far right with a small leading icon — rendered as the measured transparent nav-item button (0px radius, 48px height, 16px padding), not a filled CTA.
- **Hero primary button**: the solid indigo pill beneath the search tabs ("Buscar Imóveis") is the page's true primary — an observed solid near-#3957BD fill, full pill radius (100px), ~56px height, white/off-white text, full-width within its card column. This is the measured button-primary-hero token (#3957BD / #F0F0F2 text / 100px radius / 56px height / 16px 24px padding, hover #3552B5) — treat it as hero-primary, not the smaller compact pill token.
- **Compact pill button**: a smaller indigo pill (10000px radius, 40px height, 12px 16px padding, white text) used for secondary in-panel CTAs ("Conhecer a assessoria," "Ver apartamentos").
- **Ghost text button**: transparent fill, black text, 100px radius, 40px height, 0px 12px padding, hover background rgba(227,227,231,0.5) — used for the tab-style toggles inside the search card and for secondary nav-level actions.
- **Search/filter card**: white #FFFFFF, 16px radius, dual shadow `rgba(95,99,120,0.12) 0px 4px 4px 0px, rgba(95,99,120,0.12) 0px 8px 16px 0px`, internal 24px padding. Anatomy top-to-bottom: segmented toggle (Buscar/Anunciar), display-lg headline, a second tab row (Alugar/Comprar/Lançamentos), then stacked input fields (Cidade, Bairro, Valor total, Quartos) each with a leading icon and label-over-placeholder pattern, ending in the full-width hero-primary pill button.
- **Editorial two-up panel** (×6, the dominant mid-page component): transparent/full-bleed background taking the panel's own hue (lavender, pink, sage/cream, navy, periwinkle), 0px radius, 0px padding at the panel level. Each occupies 93% row width paired with a sibling panel. Anatomy: a photographic or carousel media block covering roughly half the panel (with prev/next circular arrow controls and a thin progress bar when a carousel), paired against a text half containing headline-md heading, 2–3 lines of body-regular copy, and one or two text-link/pill CTAs stacked beneath.
- **Promo/countdown banner**: deep navy #000D38 panel, white/off-white text, carrying a small amber-on-cream percentage badge (#FFF8E6 bg, #F2C037 ink) plus a numeral-led discount callout and a small all-caps "BLACK FRIDAY" eyebrow tag.
- **City/region link directory**: borderless white rows, 0px radius, 16px 32px padding, each column headed by an indigo headline-md city name followed by 5 stacked plain-text link rows — nine such columns across the row, horizontally paginated with arrow controls.
- **Popular-searches callout block**: bordered sage/stone-tinted container (#D5BFD7-adjacent) wrapping a dense flat grid of plain text links, no card radius, hairline border only.
- **Footer**: background #F5F5F7, flat multi-column link layout (35 links total) under three plain-text headings, plus one small highlighted navy info card with its own heading, body copy, and one text-link CTA; app-store badges and social icons sit in the lower-right.

## Graphics & Effects
The only measured gradient, `linear-gradient(90deg, rgba(0,0,0,0.75), rgba(0,0,0,0) 48%)`, is a left-to-right darkening scrim applied to the hero's photographic half only (roughly 35–45% of hero width) to guarantee legibility where it could overlap card edge — it is not a page-wide treatment. Flat vector illustration (two-tone human figures, keys, phones, isometric props) populates roughly half of the mid-page panels as the "media" element, alternating with real photography in the other half, giving an illustration/photo call-and-response rhythm panel to panel. Card and tooltip shadows are soft, diffuse, and cool-toned (`rgba(95,99,120,0.12/0.2)` families) rather than hard or saturated, keeping elevation subtle on an otherwise flat page. Carousel panels carry simple circular prev/next buttons (white fill, soft shadow) and a thin horizontal progress/pagination bar along the bottom edge of the media. No noise, grain, or mesh-gradient texture is present anywhere — surfaces are flat color or photographic only.

## Motion
Interactions are quick and utilitarian: background-color transitions at 150ms on a standard deceleration curve (`cubic-bezier(0.4, 0, 0.2, 1)`) drive hover states on ghost buttons and nav items; fill and transform changes run at 300ms ease for icon and carousel-arrow feedback. Form-field autofill uses native browser keyframes (mui-auto-fill / mui-auto-fill-cancel) with no custom entrance choreography. There is no scroll-triggered reveal or parallax evident — motion here is confined to discrete, short-duration state feedback, not ambient atmosphere.

## Guardrails
- Keep the page white-dominant; never let a panel hue or the navy promo band expand to full-page background — each color stays contained to its own 93%-width panel.
- Do not reassign the small compact indigo pill's values to the hero primary button — the hero CTA is the larger 56px/100px-radius pill with 16px 24px padding, not the 40px one.
- Preserve the navbar as a flat, square-cornered, edge-to-edge 80px bar — never inset it or round its corners.
- Keep panel cards borderless and radius-0; rounding only belongs to the floating search card, pill buttons, and avatar-scale elements.
- Ration indigo to text links and pill fills only; never use it as a large panel background.
- Keep the hero scrim confined to the photographic half of the hero; do not extend it across the search card or the full viewport.