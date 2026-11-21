---
version: "r3xdec design-alpha"
name: "Retro-terminal amber glass"
description: "Cream-paper editorial system with a dark-glass operator-console hero, retro-CRT device illustrations, and a saffron/coral/violet accent trio rationed to labels, numerals, and gradient trim."
colors:
  background: "#F2F2EF"
  surface-dark: "#11141F"
  surface-card: "#F8F2EC"
  text-primary: "#11141F"
  text-on-dark: "#F0EAD2"
  link-ink: "#0000EE"
  saffron: "#F4A038"
  saffron-deep: "#E08820"
  coral: "#FF6A1A"
  coral-deep: "#E0531A"
  magenta: "#E0568F"
  violet: "#9B5CFF"
  violet-deep: "#6B45D8"
  periwinkle: "#7B8FF5"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "76px"
    fontWeight: 700
    lineHeight: "0.98"
    letterSpacing: "-1.7px"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "33px"
    fontWeight: 600
    lineHeight: "1.12"
    letterSpacing: "-0.3px"
  body-md:
    fontFamily: "Inter"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "Space Grotesk"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: "1.12"
    letterSpacing: "-0.2px"
  body-ui:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-mono:
    fontFamily: "JetBrains Mono"
    fontStyle: "normal"
  accent-script:
    fontFamily: "Caveat"
    fontStyle: "italic"
spacing:
  base: "8px"
  gap: "64px"
  section-padding: "128px"
  section-gap: "66px"
rounded:
  control: "6px"
  control-sharp: "2px"
  card: "16px"
  card-flat: "2px"
  pill: "50px"
components:
  nav-cta:
    background: "#F4A038"
    text-color: "#1A1108"
    radius: "2px"
    height: "43px"
  button-hero-primary:
    background: "#F4A038"
    text-color: "#1A1108"
    radius: "6px"
    height: "44px"
    border: "1px solid #E08820"
    note: "observed, hero first-screen solid saffron pill-ish rectangle"
  button-hero-secondary:
    background: "transparent"
    text-color: "#F0EAD2"
    radius: "6px"
    height: "38px"
    border: "1px solid #7B8FF5"
  button-solid-coral:
    background: "#C2471A"
    text-color: "#FFFFFF"
    radius: "6px"
    height: "38px"
    padding: "0px 16px"
  button-ghost:
    background: "transparent"
    text-color: "#F0EAD2"
    radius: "6px"
    height: "38px"
    padding: "0px 16px"
    hover-color: "#F0EAD2"
  button-dark-cta:
    background: "#11141F"
    text-color: "#F0EAD2"
    radius: "2px"
    border: "1px solid #F4A038"
    shadow: "rgb(168, 95, 18) 5px 5px 0px 0px"
  card-case-tile:
    background: "#F8F2EC"
    radius: "2px"
    shadow: "color(srgb 0.658824 0.372549 0.0705882 / 0.38) 5px 5px 0px 0px"
    padding: "20px"
  card-dark-media:
    background: "#11141F"
    radius: "16px"
    shadow: "rgba(17, 20, 31, 0.18) 0px 16px 40px -28px, rgba(255, 255, 255, 0.04) 0px 0px 0px 1px inset"
    padding: "0px"
  card-gradient-brand:
    background: "radial-gradient(at 32% 22%, rgb(168, 101, 26) 0%, rgb(83, 47, 8) 82%)"
    radius: "16px"
    padding: "0px"
  card-stat:
    background: "#F2F2EF"
    radius: "12px"
    padding: "24px"
---
# Retro-terminal amber glass
Source: https://whilter.ai/

## Overview
This is a warm-neutral editorial system — a cream-paper (`#F2F2EF`) page body carrying a near-black operator-console hero and dark inverted cards, with a retro-CRT/terminal illustration motif (amber phosphor labels, monospace readouts, hand-drawn script annotations) as its signature device. It reads as Swiss-structured grid discipline wearing a Y2K-terminal costume: Space Grotesk display type with tight negative tracking for headlines, Inter for body copy, and a thin JetBrains Mono accent for live-data strings. Color is otherwise disciplined cream/ink, with saffron, coral, violet and magenta rationed into small gradient tiles, numerals, and underline accents rather than painted across surfaces.

## Composition
The first screen is a full-bleed dark band (not the page default) holding a left-aligned headline stack, two buttons, and a right-side illustrated CRT-terminal device glowing against a warm radial wash — color here is confined to roughly the right third of the frame and a soft vignette, not a full-frame gradient. Below the fold the page reverts hard to the cream `#F2F2EF` body for the remainder of the page: a 3-up card row, a dark-on-cream CTA strip, a horizontal scrolling rail of colored case tiles, a testimonial split-card, a 3-up stat row, a numbered 3-step process, and a final dark full-bleed closing band before the footer. The deliberate choice is this light-body/dark-hero-and-dark-footer sandwich rather than a dark-mode-default page — it keeps the terminal motif a special, bounded event instead of the ambient surface, trading moody immersion for high-contrast editorial legibility in the long middle scroll.

## Colors
`#F2F2EF` (~32% of pixels) is the page background/surface-0 for nearly the entire scroll; `#11141F` (~25% declared) is the dark surface used for the hero band, inverted cards, and footer. `#FFFFFF` (~8%) appears as a pure-white card family on the first screen. Ink text sits in `#11141F` on light surfaces and `#F0EAD2` (a warm parchment) on dark surfaces; `#0000EE` is a classic-blue link color used sparingly for inline text links. The saffron/coral/violet/magenta/periwinkle set is rationed to: CTA fills, numeral/stat figures, thin underline rules above step headings, and the small radial-gradient tiles/cards (`radial-gradient(at 32% 22%, rgb(168,101,26) 0%, rgb(83,47,8) 82%)` and its coral/magenta variants) that brand individual case tiles and the testimonial panel. Borders stay near-invisible (`#F0ECD1` on light, `#0F171F` on dark) — structure comes from spacing and shadow, not color, and large areas of the page (card bodies, paragraph text, footer columns) are deliberately left uncolored neutral ink/cream.

## Typography
Space Grotesk carries all display and label duty at tight tracking (-1.7px at 76px/700 for hero display, -0.3px at 33px/600 for section headlines, -0.2px at 22px/600 for labels/eyebrows), giving headlines a dense, technical, almost stenciled weight. Inter runs all body copy at 21px/400 in richer passages and drops to 16px/400 for UI/card text — a clear display/body split with no mid-weight bridge. JetBrains Mono appears as the accent face for live-readout strings inside the terminal illustration and inline data labels. Caveat, an italic handwritten script, interrupts in small annotation callouts (a short diagonal note near a button or illustration) — never more than a few words at a time, always smaller than body text, always in the saffron/coral family.

## Layout
Content is capped at a 1280px max-width with generous 128px section padding and 66px gaps between major bands. Card grids run 3-up (the solutions triptych, the stat row) at 64px gutters with roughly equal thirds (~47/47 two-up grids elsewhere for alternating image/text pairs). The case-study rail is a horizontal scrolling rail of fixed-width colored tiles, not a wrapping grid. The three-item feature band with list anatomy spans full container width per row (100/100/100), reading as stacked full-bleed panels rather than side-by-side cards — an editorial/magazine stacking choice over a bento-style asymmetric span. Card density is moderate: generous internal padding (20–24px) on light cards, zero padding on dark media-bleed cards where the image runs to all edges.

## Components
- **Navbar**: edge-to-edge square bar, 72px tall, full viewport width (0px insets), 0px radius on all four corners, sticky, fill `#0B0D14`, 21 nav items including logo and dropdowns; CTA is solid `#F4A038` fill, `#1A1108` text, 2px radius, 43px height — sharp-cornered, not a pill.
- **Hero primary CTA**: an observed solid saffron-filled rounded-rectangle button beneath the hero headline, approx. 44px height, ~6px corner radius (slightly-rounded, not pill) — the single highest-contrast click target on the first screen; paired with a secondary ghost/outline button beside it (transparent fill, `#F0EAD2` text, periwinkle-toned outline, same ~6px radius).
- **Button, solid coral** [mid-page utility/CTA]: `#C2471A` fill, white text, 6px radius (slightly-rounded), 38px height, 16px horizontal padding.
- **Button, ghost** [mid-page utility]: transparent fill, `#F0EAD2` text, 6px radius, 38px height; hover keeps text color `#F0EAD2`.
- **Button, dark CTA-with-shadow** (e.g. the closing-band and assessment CTAs): `#11141F` fill, parchment text, 2px radius (sharp), offset hard shadow `rgb(168, 95, 18) 5px 5px 0px 0px` — a retro stamped-card effect, not a soft blur.
- **Case-tile card** (solutions grid, ×3 on first mid-screen; also the scrolling rail, ×6+): `#F8F2EC` fill, 2px radius (sharp), offset shadow `color(srgb 0.658824 0.372549 0.0705882 / 0.38) 5px 5px 0px 0px`, 20px padding; top is a device-illustration media block (CRT mockup on gradient ground), followed by a small eyebrow label, a headline, body copy, and a text link with arrow.
- **Dark inverted media card** (×14 + ×6 variants, testimonial/brand showcase rail): `#11141F` fill, 16px radius, shadow `rgba(17,20,31,.18) 0px 16px 40px -28px, rgba(255,255,255,.04) 0px 0px 0px 1px inset`, 0px padding — full-bleed colored-gradient or photographic media fills the top majority of the card, with inverted (light-on-dark) caption text in a strip below or overlaid at the bottom.
- **Testimonial split-card**: left half white/cream panel with quote mark, pull-quote body text, a two-up stat pair (large colored numeral + small caption), and a text link; right half is a full-bleed brand-gradient panel (e.g. `radial-gradient(at 32% 22%, rgb(168,101,26) 0%, rgb(83,47,8) 82%)`) with a centered logo mark.
- **Stat row card** (×3, "scale" band): `#F2F2EF`-toned flat card, 12px radius, 24px padding, each holding one oversized colored numeral (saffron/periwinkle/magenta), a bold caption line, and a muted sub-caption.
- **Numbered process band** (3 full-width rows, 100/100/100): no card chrome; each row is a thin colored underline rule (saffron/periwinkle/magenta per step), a two-digit numeral label, a short headline, and one line of body copy — a stacked list layout, not cards.
- **CTA callout band** (cream card mid-page): `#F2F2EF`-adjacent cream fill, rounded corners, generous padding, pairing a small eyebrow, a two-line headline with one coral-colored word, and the dark stamped-shadow CTA button beside it.
- **Footer**: full-bleed `#0B0D14` band, logo lockup top-left with a small partner badge, 33 links arranged in four label columns, legal row beneath a divider.

## Graphics & Effects
The hero's warm wash is a bounded radial gradient on the right-hand illustration zone, not the full hero: `radial-gradient(118% 105% at 28% 26%, rgb(110,63,12) 0%, rgb(74,26,46) 52%, rgb(27,32,68) 100%)`, covering roughly a third of the frame around the CRT-device artwork; a second, much softer radial (`radial-gradient(70% 70% at 50% 100%, rgba(199,116,24,.03), rgba(0,0,0,0) 60%)`) sits as a faint floor-glow beneath it. The brand/case-tile gradients (`radial-gradient(at 32% 22%, rgb(168,101,26) 0%, rgb(83,47,8) 82%)` and its coral/magenta siblings) are each scoped to single card or panel fills, roughly 3–4% of total page area apiece — treat each as one card's background, never the page. A fine star-field/particle texture (likely a live canvas) sits faintly within the hero's dark zone, rendered via the `ray-travel`/`amb-twinkle` keyframes; a scanline/grain quality reads across the CRT-illustration artwork itself. Elevation on dark cards uses a soft long shadow plus a 1px inset highlight (`rgba(255,255,255,.04) 0px 0px 0px 1px inset`) for a glass-adjacent edge-light; light cards instead use a hard offset "stamped" shadow with no blur, giving a retro print-card feel distinct from the soft dark-card elevation.

## Motion
Interactive transitions are fast and linear-feeling: `color 0.25s ease` and `transform 0.25s ease` on text/button states, a combined `filter, opacity, transform` triple at 0.25s ease for reveal-style changes, and a snappier `transform, box-shadow 0.16s ease` for button press/hover feedback. Named keyframe animations (`ray-travel`, `pulse-glow`, `stream-in`, `stream-out`, `amb-twinkle`, `breath`) drive the hero's live canvas elements — traveling light rays, a breathing glow pulse, data streaming in/out of the terminal readout, and ambient star twinkle — all looping, low-amplitude, and confined to the hero illustration rather than the full page.

## Guardrails
- Never extend the hero's radial gradient or the card-scoped brand gradients to fill the entire viewport — each is a single element's background, confined to its own region.
- Keep the page body `#F2F2EF` cream/light; only the hero, footer, and explicitly inverted cards go to `#11141F` dark.
- Do not round the navbar, case-tile cards, or stamped-shadow CTAs past their measured sharp 2px radius — these are deliberately square against the 16px-rounded dark media cards.
- Reserve saffron/coral/violet/magenta for labels, numerals, underlines, and single-card gradient fills — never recolor body text or page backgrounds with them.
- The hero's primary action is the solid saffron button, not the periwinkle-outlined ghost button beside it or the navbar's saffron CTA — keep these as three distinct, correctly-scoped controls.
- Preserve the offset hard-shadow (no blur) on dark stamped CTAs and light case tiles; do not soften it into a standard blurred drop shadow.