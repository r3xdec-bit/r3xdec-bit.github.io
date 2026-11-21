---
version: "r3xdec design-alpha"
name: "Condensed Clinical Warmth"
description: "A near-white, editorial-clinical system built on an ultra-condensed display grotesk, cream glass cards over a dark photographic band, and a single coral/rust accent rationed to eyebrows and status chips."
colors:
  background: "#FFFFFF"
  surface-warm: "#E9E5DF"
  surface-dark: "#161513"
  text-primary: "#2A241E"
  text-on-dark: "#FFFFFF"
  accent: "#FFA341"
  accent-deep: "#B05F44"
  border-dark: "#2A241E"
typography:
  display-lg:
    fontFamily: "Integral CF"
    fontSize: "91px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "-2.7px"
  headline-md:
    fontFamily: "Integral CF"
    fontSize: "51px"
    fontWeight: 400
    lineHeight: "1"
  body-md:
    fontFamily: "Instrument Sans Variable"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.36"
  label-md:
    fontFamily: "ui-sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-eyebrow:
    fontFamily: "N27"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "8px"
  gap: "16px"
  gap-lg: "32px"
  section-padding: "188px"
  content-max-width: "188px"
rounded:
  control: "11px"
  card: "5px"
  pill: "9999px"
  hero-media: "80px"
components:
  button-primary:
    background: "#0A0A0A"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "49px"
    padding: "14.4px 21.6px"
    border: "1px solid rgb(10, 10, 10)"
    hover-background: "#262626"
  button-secondary:
    background: "transparent"
    text-color: "#0A0A0A"
    radius: "9999px"
    height: "49px"
    padding: "14.4px 21.6px"
    border: "1px solid rgb(10, 10, 10)"
    hover-background: "rgba(0, 0, 0, 0.05)"
  card-glass-row:
    background: "rgba(197, 197, 197, 0.12)"
    backdrop-filter: "blur(11.8667px)"
    radius: "5.33333px"
    padding: "45.3333px 0px 0px 24px"
  card-media-bleed:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-testimonial:
    background: "#E9E5DF"
    radius: "0px"
    padding: "24px"
---
# Condensed Clinical Warmth
Source: https://readyrx.com/

## Overview
This is a light-mode-default editorial-clinical system: a near-white canvas carrying an ultra-condensed, almost brutalist display grotesk (Integral CF) at display scale, paired with a humane, rounded grotesk (Instrument Sans) for body copy. The aesthetic sits between Swiss-poster confidence (big flush-left condensed type, generous white space, strict left margin) and wellness-brand warmth (cream surfaces, soft product photography, a single rationed coral/rust accent). Dark bands — a photographic hero strip and a near-black footer — interrupt the white field to carry data-density (glass stat cards) and brand-mass closing moments. Glassmorphism appears only inside these dark bands, never on the white body.

## Composition
The first screen is white, left-aligned, and text-led: a five-star rating line, then a two-line condensed display headline with its second line's final clause set in italic, a short body sentence, and one solid pill CTA — all confined to roughly the left half of the viewport, leaving the right half empty until a photographic band begins beneath. A dark marquee/ticker strip of all-caps trust labels separates the white hero from a full-bleed photographic scene with a warm golden-hour gradient wash. Scrolling down, white content bands (bestsellers product grid, feature prose) alternate with one dark photographic/glass band (biomarker intelligence) and one warm cream band (testimonials), before terminating in a near-black footer with an oversized ghost wordmark bleeding off the bottom edge. The deliberate choice is restraint: hero copy occupies roughly half the frame with no hero graphic beside it, rejecting the common split-hero-with-render pattern in favor of a cropped photographic band placed *below* the fold as its own full-bleed section.

## Colors
White (`#FFFFFF`) and near-white (`#F0F0F0`-range) surfaces dominate the pixel field at roughly 63% combined — this is the true background, not a dark theme. Near-black (`#181818`/`#0A0A0A`-family, ~15–20% combined) carries the hero's hard display type, the ticker band, the biomarker band, and the footer — a structural ink/surface-dark role, not a dominant background. `#2A241E` is the warm near-black text ink used on cream surfaces. `#E9E5DF` is a warm cream surface reserved for testimonial cards and transition washes. The coral/amber `#FFA341` and deeper rust `#B05F44` are the only saturated hues in the system, rationed to eyebrow labels ("01 / —" numerals), quote marks, star ratings' accent, and small status chips — never backgrounds, never buttons. Pure white text sits on the dark bands; pure black/near-black text sits on white and cream. Nothing else is colored: no secondary brand hue, no cool tones at all.

## Typography
Integral CF is the signature display face: 91px/1/-2.7px tracking for the hero headline, 51px/1 for section headlines — both set in a tightly-kicked, ultra-condensed, all-caps-leaning grotesk with near-zero line-height, giving dense, poster-like headline blocks. One clause per headline is swapped to italic for emphasis (two to four words, matching the surrounding size exactly — no scale change, only slant). Instrument Sans Variable carries body copy at 24px/1.36 for lead paragraphs and drops to a 16px ui-sans-serif for labels, card body text, and footer links. N27 appears as the small-caps/tracked eyebrow label face ("0X / SECTION-NAME" pattern) in the accent coral, always preceding a headline. This is a three-tier hierarchy: condensed-display headline → regular-weight lead paragraph → small tracked label — with no serif anywhere in the system.

## Layout
Content is left-margin-anchored with a comfortable readable column capped near 608px for prose blocks, while media and card grids run much wider. Section padding is generous and consistent at 188px, giving the page a slow, breathing rhythm between bands. The bestsellers section is a 4-up uniform card grid (product photography + badge + name/price) that reduces on medium content to a 2-column grid with 0px/32px gutter (seen at 5, 2, and 3 item counts in other bands). The testimonial band is a horizontal scrolling rail of uneven-width cards — alternating media cards (photo/video-thumbnail, edge-to-edge) with quote cards (cream fill, padded) — not a fixed grid but a cluster that overflows the viewport left and right. The biomarker section uses a single dense glass-card stack (7 rows, full-width, each 100% of container) layered over a dark microscopic-texture photograph. Corner radii are deliberately bimodal: sharp 0px on media-bleed cards and product tiles, a soft 5.33px on glass stat rows, and full 9999px pills on every button and badge — no mid-range card radius is used anywhere.

## Components
- **Navbar**: edge-to-edge square bar, 0px corner radius on all four corners, 96px tall, full 1920px viewport width, transparent background, sticky on scroll. Wordmark at far left; four text nav items (Energy & Recovery / Hormones & Strength / Weight Loss / Labs) centered-right; one `button-secondary` styled utility at the far right reading as a boxed outline pill (LOG IN equivalent) — not the primary CTA.
- **Button — primary (hero)**: the solid dark pill beneath the hero headline is the single most emphasized control on the first screen — `#0A0A0A` fill, white text, `9999px` radius, 49px height, 1px solid `#0A0A0A` border, hover to `#262626`. This is the measured ×1 prominent button and is correctly the hero CTA.
- **Button — secondary/outline**: transparent fill, dark text, identical `9999px` radius and 49px height, 1px solid `#0A0A0A` border, hover to `rgba(0,0,0,0.05)`. Used for the navbar utility control and any lower-emphasis CTA (e.g., the waitlist card's white pill on the dark band reads as this same family inverted to white-on-transparent).
- **Marquee ticker**: full-bleed dark horizontal band directly under the hero, looping all-caps trust labels separated by spacing, translucent dark fill over the photographic band beneath it, continuous horizontal scroll.
- **Product card (bestsellers grid)**: ×4 in a row at desktop, uniform width, no visible card chrome (transparent/0px radius, media-top treatment) — top ~70% is studio product photography on a light warm-gray backdrop with a small circular "RX / IN STOCK" rotating-text badge upper-right, bottom ~30% is name + "From $X/mo" price line in body-md.
- **Glass stat-card stack (biomarker band)**: ×7 full-width rows stacked vertically, each `rgba(197,197,197,0.12)` fill with `blur(11.8667px)` backdrop-filter, `5.33333px` radius, padding `45.3333px 0px 0px 24px`. Each row: a small heading (biomarker name), a muted one-line description beneath, and a right-aligned pill-shaped status chip in coral/amber text labeling its category (e.g., hormonal/metabolic/thyroid classes) — glass over a dark, textured microscope-style photograph.
- **Feature/numbered column row ("Why" section)**: 4-up row of equal columns, each: a small muted numeral (01–04), a short bold headline word, and one line of body copy beneath — no card chrome, pure white background, divided from the headline above by a thin hairline rule.
- **Testimonial rail**: horizontal scrolling cluster mixing two card types — media cards (photo or video-thumbnail, edge-to-edge, 0px radius, play-button overlay, optional caption burned into lower-third with a dark scrim) and quote cards (cream `#E9E5DF` fill, 0px radius, padded, large coral quote-mark glyph, body quote text, bold rating line with a parenthetical review-count in coral). Arrangement is irregular width, not a uniform grid — reads as a mosaic/scrolling rail hybrid.
- **Logo strip**: single row of 6–7 grayscale press/brand wordmarks, evenly spaced, centered, sitting directly beneath the testimonial rail on the same cream background.
- **Footer**: `#161513` near-black background, left column holds wordmark + short tagline + copyright + two small certification badges; three link columns (Products / Get in Touch / Company) each with a coral tracked-caps label heading above plain white text links, 18 links total; a massive ghost-opacity wordmark is cropped and bleeding off the bottom edge as a closing visual mark; a thin top-rule with a small "go to top" coral-icon link in the upper-right of the footer.

## Graphics & Effects
The hero's photographic band (golden-hour mountain/figure scene) carries two stacked linear gradients as vertical scrims rather than any full-frame color wash: `linear-gradient(rgba(248, 243, 237, 0) 0px, rgba(248, 243, 237, 0.8) 13.3333vw)` fades the image into the white page below it, and a second `linear-gradient(rgba(243, 240, 237, 0.5) 57.4306vw, rgba(243, 240, 237, 0) 57.4306vw)` lightens a lower horizontal band — both confined to that one hero image element, not the page. The dark biomarker band uses a soft vignette scrim, `radial-gradient(80% 75% at 55% 50%, rgba(33, 33, 32, 0) 55%, rgba(33, 33, 32, 0.65) 100%)`, darkening the edges of its background photograph to seat the glass cards, plus a left-to-right fade `linear-gradient(90deg, rgba(33, 33, 32, 0.86) 0%, rgba(33, 33, 32, 0.5) 40%, rgba(33, 33, 32, 0) 72%)` strengthening legibility behind the left-column text block. Testimonial media thumbnails carry a flat scrim `linear-gradient(rgba(38, 38, 38, 0.38), rgba(38, 38, 38, 0.38))` to darken video stills for caption legibility — use a static darkened frame as a stand-in for the live video/canvas elements. The footer's shadow `rgba(0, 0, 0, 0.14) 0px -6px 28px 0px` lifts it softly off the section above. Glass cards use `blur(11.8667px)` backdrop-filter exclusively within the dark biomarker band — never on white.

## Motion
Interaction transitions are quick and utilitarian: `all 0.2s ease` for general hover states, `color 0.25s ease` for text links, `opacity 0.24s ease-out` for fades, and a springier `transform 0.32s cubic-bezier(0.2, 0.7, 0.2, 1)` for scale/position shifts (card reveals, menu entrances). Scroll-driven reveals are GSAP/ScrollTrigger-based (`rx-fade-up` keyframe), staggering content bands upward as they enter view. The ticker band scrolls continuously at a steady linear pace. Menu and overlay entrances use a dedicated `rxMenuIn` keyframe for a controlled slide/fade rather than a generic fade.

## Guardrails
- Never fill the hero background with a saturated gradient — the hero is white with text, and color only enters via the photographic band below it.
- Never give product/media cards a visible radius or shadow — they are flat, sharp-cornered, media-bleed only.
- Never apply glass/blur treatments on white surfaces — glassmorphism is reserved for dark, photographic bands.
- Keep the coral/rust accent confined to eyebrows, quote glyphs, chips, and numerals — never as a button fill or large background area.
- Do not round buttons to anything less than a full 9999px pill, and do not round product or media cards above 0px.
- Preserve the navbar as a transparent, perfectly square, edge-to-edge 96px bar — not an inset or capsule shape.