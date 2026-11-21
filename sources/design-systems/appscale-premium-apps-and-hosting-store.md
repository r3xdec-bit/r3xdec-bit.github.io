---
version: "r3xdec design-alpha"
name: "Clarity Ledger"
description: "Light-mode SaaS system on a near-white/pale-blue field, with a rationed cobalt accent, bold geometric display type, and a single dark-navy band interrupting an otherwise bright page."
colors:
  background: "#F8FAFC"
  surface: "#FFFFFF"
  surface-sunken: "#F1F5F9"
  surface-dark: "#0F172A"
  text-primary: "#0F172A"
  text-secondary: "#475569"
  text-muted: "#94A3B8"
  accent: "#2563EB"
  accent-tint: "#DBEAFE"
  border: "#F1F5F9"
typography:
  display-lg:
    fontFamily: "Outfit"
    fontSize: "72px"
    fontWeight: 700
    lineHeight: "1"
    letterSpacing: "-1.8px"
  headline-md:
    fontFamily: "Outfit"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "1.11"
    letterSpacing: "-0.9px"
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1.63"
  label-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: "1.33"
    letterSpacing: "1.2px"
  body-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
    color: "#64748B"
  accent-italic:
    fontFamily: "Plus Jakarta Sans"
    fontStyle: "italic"
    role: "quoted testimonial body copy"
spacing:
  base: "8px"
  gap: "24px"
  gap-lg: "48px"
  section-padding: "96px"
rounded:
  control: "8px"
  card: "24px"
  pill: "9999px"
  chip: "4px"
components:
  navbar:
    background: "#FFFFFF"
    width: "edge-to-edge, 100vw"
    height: "81px"
    radius: "0px all corners"
    position: "sticky"
  button-primary-hero:
    background: "#2563EB (observed solid fill)"
    text-color: "#FFFFFF"
    radius: "8px (observed, slightly-rounded)"
    height: "~44px (observed)"
  button-nav-cta:
    background: "#0F172A"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "40px"
  button-secondary-outline:
    background: "transparent"
    text-color: "#64748B"
    hover-text-color: "#0F172A"
    radius: "8px"
    height: "36px"
    padding: "8px 24px"
  button-white-on-dark:
    background: "#FFFFFF"
    text-color: "#0F172A / #2563EB"
    radius: "8px"
    height: "~40px"
  card-product:
    background: "#FFFFFF"
    radius: "24px"
    padding: "24px"
  card-testimonial:
    background: "#F8FAFC"
    radius: "24px"
    padding: "32px"
  card-pricing-basic:
    background: "#0F172A"
    radius: "16px"
    padding: "32px"
    border: "1px solid rgba(255,255,255,0.08)"
  card-pricing-featured:
    background: "#2563EB"
    radius: "16px"
    padding: "32px"
    badge: "amber pill, top-right, overlapping edge"
  footer:
    background: "#0F172A"
    links: 19
---
# Clarity Ledger
Source: https://p.r3xdec design.dev/draft/d0daa0f2-082c-46e0-b3bc-04f54b58a415

## Overview
This is a light-mode-default B2B SaaS system: minimalism carried by a bold geometric display face (Outfit, tight negative tracking) over a humanist body face (Plus Jakarta Sans). The palette is overwhelmingly white and pale slate-blue, with cobalt (`#2563EB`) rationed as the single interactive/brand signal, and one deep navy (`#0F172A`) surface reserved for the pricing band and footer to punctuate an otherwise bright, airy page. Corners run soft throughout (8–24px, pill CTAs), shadows are pale-blue tinted rather than neutral gray, giving cards a faint "glow" instead of a hard drop shadow.

## Composition
The hero opens on a two-column split: pale gradient-washed left column (eyebrow pill, oversized headline with a color-shifted final line, body copy, primary+ghost button pair, avatar-stack social proof) against a right-column white rounded panel containing a device screenshot. Below the fold, density increases: a 3-up icon+text trust row, then a filtered product grid (4-up), a two-tone pricing split on a dark full-bleed band, a 3-up testimonial row on white, a full-bleed cobalt CTA band with dual buttons, and finally a dark multi-column footer. The deliberate choice is to keep 80% of the page on white/pale-blue and confine all saturated color to two horizontal bands (pricing, final CTA) — rejecting a gradient-heavy or dark-mode-default treatment in favor of bright, high-key SaaS orthodoxy with color as punctuation, not atmosphere.

## Colors
`#F8FAFC` is the page background/surface-0, reading in the pixel field as the dominant `#F0F0FF`/white family (~58% combined). `#FFFFFF` surfaces cards, the navbar, and the hero device panel. `#0F172A` is the ink for headlines and doubles as the surface-dark role for the pricing/footer band (~21–23% of measured page area — a deliberate large dark band, not a full dark-mode page). `#2563EB` is the sole accent: hero CTA fill, active filter pill, link/hover color, one pricing card fill, and the final CTA band background (~9-10% of page area) — every other surface is deliberately left neutral so this blue reads as the single call to action. `#94A3B8`/`#475569`/`#64748B` step down text emphasis for secondary and muted copy. Borders are near-invisible hairlines at `#F1F5F9` on white cards.

## Typography
Outfit carries all display and section headings at 700 weight with aggressive negative tracking (-1.8px at 72px, -0.9px at 36px) — this is the signature geometric-sans voice. Plus Jakarta Sans carries everything else: 20px/400 lede paragraphs under headlines, 14px/400 body-scale copy at `#64748B` for card descriptions, and a 12px/700 all-caps label style with +1.2px tracking for eyebrows and category chips. Testimonial quotes render in italic Plus Jakarta Sans, the only stylistic deviation from upright type — a quiet editorial accent reserved exclusively for quoted copy.

## Layout
Content is bounded to a 1280px max-width, centered, with 96px section padding and an 8px-based spacing scale (8/12/16/24/32/48px). The product grid runs 4 uniform columns, gap 32px, one row of 4 equal-width cards (rows: [4]) — a uniform card grid, not bento. The trust-icon row and pricing-detail/testimonial pairing use a 2-column grid at gap 48–80px, rows [2] each roughly half-width (46–47%/46–47%). The stat/feature icon row is 3-up, and testimonials repeat as a 3-up row twice (mid-page and pre-footer), confirming it as a persistent section rhythm. Pricing itself is a 2-card asymmetric pair (not a full grid), one slightly emphasized via color and an overlapping "most popular" badge.

## Components
- **Navbar**: edge-to-edge square bar, 1920px measured width (100% viewport, 0px inset both sides), 81px tall, all four corners 0px radius (a true full-bleed bar, not inset or capsule), sticky, background `#FFFFFF`, 6 nav items (logo mark + wordmark, 4 text links, Login, and CTA). CTA is a pill: `#0F172A` fill, `#FFFFFF` text, radius 9999px, height 40px.
- **Hero primary button**: an observed near-solid cobalt (~`#2563EB`) filled rectangle, ~6–8px corners (slightly-rounded, not pill), white text, sitting directly under the headline — this is the single most emphasized control on the first screen. A ghost "watch" control with a circular play icon sits beside it, text-only, no fill.
- **Button, prominent (measured mid-page)**: `#2563EB` fill, white text, radius 8px, height 36px, padding 8px 24px — used for filter-tab active state and detail-page CTAs.
- **Button, ghost/text (measured mid-page)**: transparent fill, `#64748B` text, radius 8px, height 36px, padding 8px 24px, hover text darkens to `#0F172A` — used for inactive filter tabs and "Details" links.
- **Button, white-on-dark**: white fill, dark/blue text, ~8px radius — used for both pricing-card CTAs and the light half of the final dual-CTA band.
- **Product card** (×4, one row, uniform grid): `#FFFFFF` fill, radius 24px, padding 24px; anatomy top-to-bottom: full-width icon tile on pale-blue tint, small colored category chip, price label, bold heading, 2-line body description, bottom-aligned "Details" link with trailing arrow.
- **Trust/feature tile** (×3 in a row): transparent background, no radius/padding; anatomy: circular icon badge on pale tint, bold short heading, centered 2-line body copy.
- **Pricing card pair** (×2, asymmetric): dark card `#0F172A`, radius 16px, padding 32px, containing a plan name, large numeral price with small "/mo" suffix, a checklist-free plain feature list, and a white pill CTA; the second card is filled solid `#2563EB` (radius 16px, padding 32px) with an amber "most popular" pill badge overlapping its top-right corner, denser feature list, white CTA pill.
- **Feature checklist block** (2-column, rows [67|67] item width): transparent, 0px radius, padding 0 24px; a heading + 4-row checklist (blue circular check icon + label) paired beside the pricing cards.
- **Testimonial card** (×3 per row, repeats twice): `#F8FAFC` fill, radius 24px, padding 32px; anatomy: 5-star row in amber, italic quoted body text, avatar illustration, bold name, muted role/company line below.
- **CTA/callout band**: full-bleed `#2563EB` background, centered white bold headline, muted-white body line, two buttons side by side — one white-filled, one darker-outlined/filled secondary — both pill-radius.
- **Footer**: full-bleed `#0F172A`, logo lockup top-left, 19 links organized into labeled columns (all-caps 12px label style), no border above — separated purely by the color break from the CTA band.

## Graphics & Effects
A radial gradient `radial-gradient(circle at 100% 0%, rgb(219, 234, 254) 0%, rgb(248, 250, 252) 50%)` washes the hero section only, anchored top-right, covering roughly the upper-right quadrant of the first viewport (~19% of total page area) — it is a corner wash behind the device panel, not a full-page treatment; the remaining hero area stays flat `#F8FAFC`. Product and pricing cards carry a soft blue-tinted elevation shadow (`rgb(191, 219, 254) 0px 10px 15px -3px, rgb(191, 219, 254) 0px 4px 6px -4px`) rather than neutral gray — this tinted-shadow signature should be preserved on every raised white card. A heavier neutral shadow (`rgba(0,0,0,0.25) 0px 25px 50px -12px`) is reserved for the hero device panel, giving it stronger separation than the smaller cards. A `blur(16px)` backdrop-filter is available for any floating/glass surface but is not the dominant treatment — this system is fundamentally flat and opaque, not glassmorphic.

## Motion
Interactive color changes (text, background, border, fill) transition on `color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1)` — fast, linear-feeling hover shifts on links and filter tabs. Composite state changes use `all 0.15s cubic-bezier(0.4, 0, 0.2, 1)` for controls and a slower `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` for larger surface transitions (card hover lift, tab switching). A `pulse` keyframe animation marks live/status indicators. Opacity-only reveals use a quick `opacity 0.1s ease-in`. Overall motion is snappy and utilitarian — no spring/overshoot, no scroll-linked parallax.

## Guardrails
- Do not darken the overall page to a dark-mode-default treatment — the system is light/white-dominant with only two deliberate dark bands (pricing, footer).
- Do not spread the cobalt accent across multiple buttons per view — it marks exactly one primary action per section; secondary actions stay ghost/outline or white-filled.
- Do not turn the navbar into an inset or floating capsule — it is a square-cornered, edge-to-edge, sticky white bar at 81px.
- Do not apply the hero corner-gradient as a full-page or full-hero background — it is a top-right radial wash covering roughly a quadrant, sitting behind the device panel only.
- Keep card shadows blue-tinted (`rgb(191, 219, 254)`), never neutral gray, on white surfaces.
- Preserve the italic treatment exclusively for testimonial quote bodies — do not extend italics to headlines or labels.