---
version: "r3xdec design-alpha"
name: "Titanium Studio Light"
description: "A product-photography-led commerce system: warm neutral studio hero on a mostly white page, a single deep-indigo accent reserved for transaction, and a dark glass interlude mid-page for configuration and specs."
colors:
  background: "#FFFFFF"
  surface-dark: "#1A1A1A"
  surface-muted: "#F2F2F2"
  text-primary: "#000000"
  text-on-dark: "#FFFFFF"
  accent: "#112BAF"
typography:
  display-lg:
    fontFamily: "geist"
    fontSize: "56px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "-2px"
  headline-md:
    fontFamily: "geist"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "-1px"
  body-md:
    fontFamily: "geist"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
  label-md:
    fontFamily: "geist"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "-1px"
  label-mono:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.4"
    letterSpacing: "0.08em"
  accent-serif:
    fontFamily: "Times New Roman"
    fontSize: "16px"
    fontWeight: 400
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "120px"
rounded:
  control: "8px"
  pill: "9999px"
  card: "12px"
  capsule-nav: "50px"
components:
  navbar:
    background: "transparent"
    height: "57px"
    radius: "0px"
    cta-background: "#112BAF"
    cta-text-color: "#FFFFFF"
    cta-radius: "50px"
  button-primary-hero:
    background: "#112BAF"
    text-color: "#FFFFFF"
    radius: "50px"
    height: "48px"
    note: "observed solid indigo fill under hero headline, approximate height"
  button-dark-slab:
    background: "linear-gradient(90deg, rgb(28, 28, 28), rgb(42, 42, 42))"
    text-color: "#000000"
    radius: "12px"
    height: "72px"
  button-black-pill:
    background: "#000000"
    text-color: "#FFFFFF"
    radius: "50px"
    height: "32px"
    border: "1px solid rgb(0, 0, 0)"
  button-glass-round:
    background: "rgba(0, 0, 0, 0.08)"
    backdrop-filter: "blur(12px)"
    text-color: "#000000"
    radius: "50%"
    height: "48px"
  button-outline-ghost:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "50px"
    height: "37px"
    border: "1px solid rgba(0, 0, 0, 0)"
  card-dark-panel:
    background: "#1A1A1A"
    radius: "0px"
    padding: "0px"
  card-media-caption:
    background: "transparent"
    radius: "0px"
    padding: "0px 0px 0px 40px"
  card-review:
    background: "#FFFFFF"
    radius: "12px"
    padding: "0px"
    border: "1px solid #F2F2F2"
  card-payment-tile:
    background: "#F2F2F2"
    radius: "0px"
    padding: "0px"
  card-icon-row:
    background: "#FFFFFF"
    radius: "0px"
    padding: "0px"
---
# Titanium Studio Light
Source: https://www.ultrahuman.com/us/

## Overview
This is a minimalist, studio-photography-led commerce system built on a near-white page (#FFFFFF dominates ~50%+ of pixels), interrupted twice by full-bleed dark cinematic bands — one a warm product-floor hero, one a near-black configuration/specs interlude. Geist carries nearly all type at low weight (400) with tight negative tracking on display sizes, giving headlines a cool, engineered, editorial-sans character rather than a soft marketing voice. Color is otherwise restrained to black, white, and gray scaffolding, with a single rationed deep indigo (#112BAF) reserved exclusively for transactional moments — this is a commerce-first system, not a mood system.

## Composition
The first screen is a warm-neutral studio photograph (beige/taupe tones, measured ~2% #C0C0A8, ~2% #D8C0A8) occupying the full viewport beneath a transparent edge-to-edge navbar; a left-aligned headline block and primary CTA sit in the lower-left third, with a trio of reassurance stats fixed to the lower-right. Below the fold the page snaps to pure white for a statistic strip, then a bordered review grid, then drops hard into a near-black product-configuration band (the specs/purchase panel), then returns to white for a payment-methods row and a logo-strip/footer. This alternation — warm-photo hero → white data/proof bands → one black commerce band → white footer — is a deliberate rhythm of trust-then-transaction-then-trust; the alternative (an all-dark, aurora-gradient tech showcase) is explicitly rejected in favor of e-commerce legibility and product-photo fidelity.

## Colors
White (#FFFFFF, ~50% of pixels, confirmed declared area 46.2%) is the dominant surface for proof, specs-adjacent, and footer content — this is a light system, not dark-mode-default, despite one dark interlude. Near-black (#000000/#1A1A1A, combined ~17%+5%+6.9% declared) appears only in the two cinematic bands (hero floor shadow, configuration panel) and in solid buttons/text — it reads as a studio-lighting device, not a base theme. #F2F2F2 (6.2% declared) is the structural neutral for secondary tiles and dividers. The single hue accent, #112BAF (0.2% declared — intentionally minuscule), lands only on the navbar CTA and primary purchase buttons: an unmistakable "buy" signal in a system that otherwise refuses color. Warm tan/gold tones (#C0C0A8, #D8C0A8) are photographic, not token-driven — they belong to the product imagery, never to UI chrome. Borders and ink stay strictly #000000/#FFFFFF/#111111 — no tinted grays creep into text.

## Typography
Geist is the sole workhorse: display-lg at 56px/400/lh 1.2/ls -2px for hero and section headlines, headline-md at 48px/400/lh 1.2/ls -1px for secondary section titles, label-md at 24px/400/lh 1.2/ls -1px for card headings, and body-md at 16px/400/lh 1.6 for all paragraph and UI text. Weight never exceeds 400 anywhere measured — hierarchy is built entirely through size and negative tracking, not boldness, giving the whole system a flattened, confident, engineering-catalog voice. JetBrains Mono appears as a small-caps-style all-caps label face for eyebrows (section kickers above headlines) — tracked wide, used sparingly as a technical signifier. Times New Roman and Graphik surface as incidental serif/humanist accents in isolated captions, not as a structural pairing — treat them as rare textural notes, not a second voice.

## Layout
Content is capped at a 1440px max-width with generous 120px section padding, giving the page an unhurried, high-margin, editorial density rather than a dense dashboard feel. Spacing runs on an 8px-rooted scale (8/12/16/20/24px) for component-level gaps and a much larger 120px rhythm between sections. Card grids are modest and literal: a 4-column stat row (4 items, each 25% width, single row) for headline numerals; a 3-column review grid (6 items across two rows of 3, hairline 1px gaps, bordered 12px-radius cards); a 3-column icon/feature row (33/33 | 33 — three items, with the last wrapping alone); and a 2-column payment/trust tile row (2 items at 49% each). These are uniform card grids, not bento or masonry — no item claims more than its equal share, and asymmetry only appears in the icon row's uneven final wrap. Radii split cleanly by context: 12px on bordered cards, 50px/9999px on every button and pill, 0px on all structural/dark panels and media blocks.

## Components
- **Navbar**: edge-to-edge, transparent, square-cornered bar (0px radius all corners), 57px tall, full 1920px viewport width with zero inset — a true full-bleed bar, not an inset capsule. Carries 12 items (hamburger, logo mark + wordmark centered, text nav links, locale selector, cart icon, CTA). Its CTA is solid #112BAF fill, white text, 50px pill radius — the only colored chrome in the entire bar.
- **Hero primary CTA**: an observed near-black/navy solid pill beneath the headline (~48px height, ~50px radius), the single most emphasized control on the first screen — filled, high-contrast, left-aligned under the two-line headline. A secondary lighter/outline pill sits beside it for a lower-commitment action. Do not substitute the measured glass or dark-slab button values for this role.
- **Glass round icon button**: appears as a small circular utility control mid-page (near sizing/help affordances) — rgba(0,0,0,0.08) fill over `backdrop-filter: blur(12px)`, 50% radius, 48px height, black icon glyph. True frosted glass, not a flattened gray circle.
- **Dark gradient slab button**: mid-page configuration context — `linear-gradient(90deg, rgb(28,28,28), rgb(42,42,42))` fill, 12px radius, 72px tall, black text — a large tactile selector-style control, not a pill.
- **Black pill CTA**: compact secondary action beside dark panels — solid #000000, white text, 50px radius, 32px height, 1px black border, tight 16px horizontal padding.
- **Outline ghost pills**: ×9 in a filter/chip-like row — transparent fill, white text, 50px radius, 37px height, invisible border — used over the dark/photo bands where text must read directly on imagery.
- **Dark spec/purchase panel** (configuration band): one instance mid-page — #1A1A1A-toned dark card, 0px radius, full-bleed two-column layout: left column is a large media-top image (product macro shot) with a glass caption overlay in the lower third; right column stacks an eyebrow label, a large price numeral, a checklist of 5 icon-led rows (circular icon + single line of copy, hairline dividers between rows), and terminates in the indigo `Buy` pill CTA at full column width.
- **Review card family**: ×6 arranged 3-per-row across two rows, bordered (hairline), 12px radius, white fill, transparent otherwise. Internal anatomy top to bottom: a grayscale outlet logotype/wordmark, a short quoted line, then a "Read story" text link with arrow glyph at the card foot.
- **Stat/numeral row**: 4 items in one row, each 25% width, divided by thin hairline verticals. Anatomy: one oversized numeral (deploying display-lg scale) with a small superscript qualifier, and one line of muted caption text beneath.
- **Payment/trust tile row**: 3 cards, 2 wide in measured grid (49/49 split) plus a third — each a media-top-bleed photo or icon cluster covering roughly two-thirds of the card height, with a heading line, one line of body copy, and a text-link-style CTA ("How it works" / "View options") pinned at the card foot. Fills alternate between a photographic image, a soft #F2F2F2 tile with floating icon badges, and a warm product photo.
- **Logo strip**: one row of 8 grayscale science/partner wordmarks, evenly spaced, no card chrome, sitting on white beneath a small-caps mono eyebrow label.
- **Footer**: full-width #FFFFFF band, 83 links organized into four labeled columns (small-caps mono-style section headers), each column a simple vertical link stack with generous line spacing; no card treatment, pure list layout.

## Graphics & Effects
The hero's warm floor/product shot is treated with a vignette scrim — `radial-gradient(rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.15) 100%)` — applied only over the product-photo media area (roughly the hero's central/lower imagery, not the full viewport) to keep the titanium ring and case legible against the beige backdrop. A horizontal edge-darkening scrim, `linear-gradient(90deg, rgb(0,0,0) 0%, rgba(0,0,0,0.61) 7%, rgba(0,0,0,0) 34%, rgba(0,0,0,0) 66%, rgba(0,0,0,0.61) 93%, rgb(0,0,0) 100%)`, and a vertical top/bottom scrim, `linear-gradient(rgb(0,0,0) 0%, rgba(0,0,0,0) 42%, rgba(0,0,0,0) 58%, rgb(0,0,0) 100%)`, both frame the dark "Talk to an expert" band's background photograph — each covers only that single section, not the page. A soft upward white fade, `linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 55%, rgb(255,255,255) 100%)`, dissolves a dark section back into the white footer zone (~1.3% of page). A thin indigo wash, `linear-gradient(90deg, rgb(8,9,15) 0%, rgb(8,9,15) 40%, rgb(13,28,103) 100%)`, tints one small accent element only. Live video/canvas surfaces drive select product-demo media; treat as static hero-frame stand-ins when rebuilding. Shadow use is restrained: a 1px inset gray ring (`rgb(140,140,140) 0px 0px 0px 1px inset`) outlines flat cards in lieu of drop shadow, while a soft `rgba(0,0,0,0.1) 0px 2px 8.1px 0px` lifts floating glass controls. Backdrop blurs range `blur(12px)` to `blur(40px)` across glass buttons and dark overlays — always paired with low-opacity black fill, never fully opaque.

## Motion
Interactions favor quick, physical easing: `transform 0.1705s cubic-bezier(0.22, 1, 0.36, 1)` for pressed/hover states gives controls a snappy, slightly overshot settle; `opacity 0.15s cubic-bezier(0.32, 0.08, 0.24, 1)` handles fades at near-instant speed; `color 0.48s ease` is reserved for slower text-color crossfades (link hovers). Scroll is managed by Lenis for smooth inertial scrolling, layered with native CSS scroll-driven animations for section reveals. Named keyframes (`u-shimmer`, `splashFade`, emerald-prefixed orb/shake/caret/drag-hint animations) point to small branded micro-interaction flourishes — shimmer sweeps and bouncing hint cues — kept brief and isolated to specific controls rather than driving page-wide motion.

## Guardrails
- Never let the dark configuration/expert bands take over the page identity — white remains the dominant field; dark sections are rationed interludes, at most two per page.
- Never paint the hero background with a full-saturation gradient; the hero is a warm, lit product photograph with scrim darkening only on the image region, not a gradient backdrop.
- Never give the hero's primary CTA the glass or dark-slab button treatment — it must stay a solid, high-contrast filled pill.
- Never apply bold/heavy weights to headlines — hierarchy is scale and negative tracking only, weight stays 400.
- Never round the navbar or dark configuration panels — they are sharp-cornered (0px); reserve 50px/pill radii strictly for buttons and the 12px radius strictly for bordered review/image cards.
- Never substitute a flat gray fill for any glass control — glass buttons keep translucent rgba fill plus backdrop-filter blur.