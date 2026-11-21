---
version: "r3xdec design-alpha"
name: "Neon ledger brutalism"
description: "A black-and-mint neobrutalist system built on hard-edged blocks, zero-radius buttons with offset drop-shadows, and a single mint-green fill rationed to section bands and hover states."
colors:
  background: "#18F0A8"
  surface-light: "#F4F0F3"
  surface-mint: "#1FF19F"
  surface-indigo: "#5655F7"
  text-primary: "#000000"
  text-on-dark: "#FFFFFF"
  text-body: "#333333"
  accent-mint: "#1FF19F"
  accent-indigo: "#5655F7"
  accent-amber: "#E0FF66"
typography:
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "180px"
    fontWeight: 600
    lineHeight: "1"
  body-md:
    fontFamily: "Space Grotesk"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.6"
  label-md:
    fontFamily: "Space Grotesk"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: "1"
  body-fallback:
    fontFamily: "-apple-system"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-serif:
    fontFamily: "Times New Roman"
    fontStyle: "italic"
  label-alt:
    fontFamily: "Montserrat"
  icon-face:
    fontFamily: "Font Awesome 5 Free"
spacing:
  base: "10px"
  gap: "20px"
  stack: "35px"
  section-padding: "150px"
  section-gap: "274px"
rounded:
  flat: "3px"
  control: "8px"
  card-soft: "20px"
  pill: "93px"
  blob: "90px"
components:
  button-primary-hero:
    background: "#000000"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "70px"
    padding: "20px 30px"
    border: "3px solid rgb(255, 255, 255)"
    hover-background: "#1FF19F"
    hover-text-color: "#000000"
  button-nav-cta:
    background: "#1FF19F"
    text-color: "#000000"
    radius: "0px"
    height: "52px"
    padding: "15px 30px"
    border: "1px solid rgb(0, 0, 0)"
  button-section-cta:
    background: "#1FF19F"
    text-color: "#000000"
    radius: "0px"
    height: "70px"
    padding: "20px 30px"
    border: "3px solid rgb(0, 0, 0)"
    hover-background: "#006DFF"
    hover-text-color: "#FFFFFF"
  button-nav-link:
    background: "transparent"
    text-color: "#333333"
    radius: "0px"
    height: "52px"
    padding: "0px"
  card-speaker:
    background: "#1FF19F"
    radius: "20px"
    padding: "0px"
    border: "1px solid #000000"
  card-pill-stat:
    background: "#5655F7"
    radius: "9999px"
    padding: "10px 20px"
  card-faq:
    background: "transparent"
    radius: "0px"
    padding: "16px 20px 0px"
    border-bottom: "1px solid #1FF19F"
---
# Neon ledger brutalism
Source: https://womensai.school/

## Overview
This is neobrutalism at full voltage: pure black and off-white fields, zero-radius rectangular buttons armored with thick 1–3px borders and hard offset drop-shadows (no blur), interrupted by one saturated mint fill and a secondary electric-indigo. A single AI-rendered portrait with neon rim-lighting anchors the hero against the black field; everything else is flat vector shape and oversized Space Grotesk type set in tight caps. The system reads as a print-poster / Swiss-grid sensibility fed through a dark-mode-default, AI-aesthetic filter — rational structure, maximal contrast, no gradients beyond one flat mint fill and no soft shadows anywhere.

## Composition
The first screen is near-full-bleed black: a slim navbar, then a vertically centered illustrated figure with two stacked pill/pennant callouts at left-mid and a black bordered CTA box at right, both offset against a faint radial glow. The page then hard-cuts to a solid mint band carrying an oversized black countdown headline and four pill-shaped timer blocks in indigo — the single most deliberate move in the system: full-bleed flat color bands as section dividers instead of cards or gradients, rejecting any soft transition between zones. Below, the system settles into a light `#F4F0F3` zone for a tabbed feature list, then returns to mint for a 2-column speaker-card grid, then black again for an FAQ accordion with a left-gradient glow, closing on the light zone for a final stat/CTA block and a minimal footer. This black→mint→light→mint→black→light rhythm is the page's structural signature — color blocks, not shadow or elevation, separate content.

## Colors
`#000000` carries the hero, nav, and FAQ band (~21% of pixels) as the deep structural ground. `#1FF19F` mint is the dominant accent (~27–29%), rationed to full section backgrounds (countdown band, speaker-card grid), button fills, and hover states — never used for body text. `#F4F0F3` near-white (~22%, measured 52.4% declared area) is the secondary content ground for lists and stat rows, giving the mint bands breathing room. `#5655F7` indigo appears only in timer pills, pennant callouts, and one shadow token (`rgb(86, 85, 247) 10px 10px 0px 0px`) — a deliberate third color kept to small functional shapes. `#FFFFFF` is reserved for on-black text and button fills/borders. `#E0FF66` and `#61CE70` surface only as tiny accent dots; large surfaces are never gradiented.

## Typography
Space Grotesk carries the entire hierarchy: display headlines at 180px/600/lh-1 in tight black caps (CLÔTURE, INSCRIPTIONS), the same family at 18px/700 for labels and speaker-name bylines, and 18px/400 for body copy. A `-apple-system` fallback body renders long-form FAQ paragraphs at 16px/400 in `#333333`. Times New Roman appears as an italic accent on isolated words inside copy blocks — a serif interruption against the otherwise all-sans system. Montserrat supplements as a secondary label face; Font Awesome 5 Free supplies all pictograms (microphone, trophy, lightning bolt).

## Layout
Content is held to a 1140px max-width with 150px section padding and up to 274px gaps between major bands — generous, poster-like spacing. The speaker grid is a uniform 2-column card grid (rows of [2][2][2][2]...), each card full-bleed mint with a left-aligned media thumbnail and right-aligned text block. The feature-tab list and FAQ list run as single-column 100%-width stacked rows (rows [100][100][100][100]). The closing stat row is two pill cards side by side. No card ever carries its own border-radius-card treatment; radius is either 0px (brutalist blocks) or fully pill/circular (badges, timer segments, stat pills) — there is no mid-range card radius in this system.

## Components
- **Navbar**: full-width edge-to-edge black bar, ~logo + 3 text links (ACCEUIL, EDITION 2024, COMMUNAUTÉ) left-to-center, one solid mint CTA pill-rectangle at far right. Nav links are transparent, `#333333`-on-dark text, 52px height, 0px radius, no padding chrome. CTA: `#1FF19F` fill, `#000000` text, 0px radius, 52px height, padding 15px 30px, 1px solid black border.
- **Hero primary CTA**: an observed near-black solid rectangle button beneath/beside the hero illustration reading as the loudest element on screen — black fill, white text, ~0px corners (sharp), thick white 3px border, 70px height, 20px/30px padding, paired with a small yellow bolt icon and an indigo drop-shadow offset beneath it. This is the hero's primary action, distinct from the mint navbar CTA.
- **Button — section CTA (mid-page)**: mint fill, black text, 0px radius, 70px height, 3px solid black border, hover swaps to `#006DFF` fill with white text — used at the bottom of the FAQ/stats zone.
- **Pennant/badge callouts (hero)**: two stacked rounded-pill shapes over the hero image — one mint pennant with a gift icon and bold label, one indigo pill with a trophy icon — both left-aligned mid-hero, large pill radius, icon-in-circle + bold single-line text.
- **Countdown band**: full-bleed mint section, oversized 180px black numeral headline, four indigo pill segments below (days/hours/minutes/seconds), each pill: full radius, white numeral + white caption label stacked.
- **Feature tab list**: light-surface band, vertical stack of 3 rows — one active mint-filled rectangle label, two inactive white rows — paired with a static right-column heading + body description that updates per tab; 100%-width rows.
- **Speaker card grid**: mint full-bleed cards, 2-per-row ×  several rows, each card: left media-bleed photo thumbnail (roughly one-third width), right-side stacked bullet list (italic sub-points) + bold heading + bottom byline row with a mic icon + all-caps name in Space Grotesk 700.
- **"How to participate" numbered list**: mint background, 3 dashed-line-connected steps each with a bracket-bordered numeral tag, bold step heading, body sentence; a black-bordered CTA rectangle sits bottom-left with the same bolt-icon treatment as the hero CTA.
- **FAQ accordion**: black background with a left-side diagonal indigo/mint glow wash, white serif-adjacent heading, individual question rows with a bottom mint-green rule and a minus/plus toggle glyph at far right; expanded body text in light lavender-white (`#E8E4FC`)-toned paragraphs with bold run-in phrases.
- **Stat/pill row (page end)**: light background, two pill cards side by side (indigo "participants" pill, mint "winners" pill), each with a white circular icon-badge at left and bold label text.
- **Footer**: light background, minimal single row — small logo lockup left, fine-print credit line right, thin top border separating from the black band above.

## Graphics & Effects
The only declared gradient, `linear-gradient(rgb(31, 241, 159) 0%, rgb(31, 241, 159) 100%)`, is a flat (non-visually-gradiated) mint fill applied to section backgrounds and card surfaces — it covers large full-bleed bands but reads as solid color, not a blend. The hero's black field carries a faint radial glow dissolving to transparent behind the illustrated figure, covering roughly the center third of the hero, plus a subtle photographic/neon-light rim treatment on the portrait itself (cyan/magenta rim light, holographic visor) — this is the only soft, non-flat visual in the system. All elevation is communicated through hard offset shadows with zero blur: `rgb(86,85,247) 10px 10px 0px 0px` on indigo elements, `rgb(0,0,0) 8px 8px 0px 0px` and `rgb(0,0,0) 10px 10px 0px 0px` on black-bordered CTAs — these read as a stamped/sticker-shadow, not depth. A thin dashed line motif connects the numbered steps in the "how to participate" section; a small wavy-line glyph and vertical bar-chart glyph appear as isolated decorative marks in the hero margins.

## Motion
Transitions are short and mechanical: `background, border, border-radius, box-shadow, transform` at `0.3s ease` (0.4s on transform), and a blanket `all 0.3s ease` on generic interactive elements — consistent with hover-triggered color swaps (black→mint, mint→indigo-blue) rather than movement. Keyframe animations are utility-driven: `eicon-spin` and `fcom_pwa_ptr_spin` for loading/refresh glyphs, `zoomIn` and `fadeInDown` for scroll-triggered entrances, `fcom_highlight_glow` for an emphasis pulse. Motion is snappy and functional, never springy — it reinforces the hard-edged, mechanical character rather than softening it.

## Guardrails
- Never round the primary buttons or FAQ/card panels — 0px corners are structural to this identity; reserve full pill radius strictly for badges, tags, and stat pills.
- Never blur or soften the drop-shadows — they must stay hard-edged offset shapes (`Npx Npx 0px 0px`), not diffused box-shadows.
- Never let the mint fill bleed across the full hero — it is rationed to discrete section bands and small UI elements; the hero stays black-dominant with color only in badges/CTAs.
- Never replace the flat mint "gradient" with an actual multi-stop blend — it is a solid color token, not a visual gradient.
- Don't introduce soft pastel gradients or glassmorphic blur anywhere — this system has zero backdrop-filter usage.
- Keep indigo as a minority structural color (pills, shadows, timer segments) — it must never compete with mint as the dominant accent.