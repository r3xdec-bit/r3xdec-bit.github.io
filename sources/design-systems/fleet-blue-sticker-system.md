---
version: "r3xdec design-alpha"
name: "Fleet-blue sticker system"
description: "A saturated royal-blue, white, and safety-yellow operational system built from condensed display type, stickered pill badges, and a dense 3-up card rhythm."
colors:
  background: "#0950F6"
  surface: "#FFFFFF"
  surface-tint: "#E6EEFE"
  text-primary: "#0950F6"
  text-on-fill: "#FFFFFF"
  accent: "#FFEC01"
  accent-hover: "#FFF12E"
  border-subtle: "#BACEFD"
  success: "#2ECC85"
typography:
  display-lg:
    fontFamily: "Anton"
    fontSize: "72px"
    fontWeight: 400
    lineHeight: "0.92"
    letterSpacing: "-2.2px"
  headline-md:
    fontFamily: "Outfit"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  body-md:
    fontFamily: "Outfit"
    fontSize: "18px"
    fontWeight: 300
    lineHeight: "1.63"
  label-md:
    fontFamily: "Bebas Neue"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.56"
    letterSpacing: "0.9px"
  label-mono:
    fontFamily: "Geist Mono"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.4"
spacing:
  base: "8px"
  unit-sm: "4px"
  unit-md: "16px"
  unit-lg: "24px"
  gap: "32px"
  section-padding: "112px"
rounded:
  control: "2px"
  card: "24px"
  card-sm: "12px"
  badge: "16px"
  pill: "9999px"
  frame: "32px"
components:
  button-hero-primary:
    background: "#FFEC01"
    text-color: "#0950F6"
    radius: "9999px"
    height: "58px"
    padding: "12px 32px"
    border: "1px solid rgb(255, 236, 1)"
    shadow: "rgba(255, 236, 1, 0.15) 0px 2px 4px 0px"
    hover-shadow: "rgba(255, 236, 1, 0.45) 0px 0px 28px 0px, rgba(9, 80, 246, 0.18) 0px 8px 24px 0px"
    hover-background: "#FFF12E"
  button-secondary-filled:
    background: "#FFF12E"
    text-color: "#0950F6"
    radius: "9999px"
    height: "44px"
    padding: "8px 16px"
    border: "1px solid rgb(255, 241, 46)"
    shadow: "rgba(255, 241, 46, 0.45) 0px 0px 25px 0px"
  button-ghost-light:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "44px"
    padding: "0px"
  button-nav-utility:
    background: "rgba(0, 0, 0, 0.2)"
    text-color: "#FFEC01"
    radius: "16px"
    height: "37px"
  button-nav-ghost:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "16px"
    height: "42px"
    padding: "8px 16px"
    border: "1px solid rgba(0, 0, 0, 0)"
  navbar:
    background: "#0950F6"
    width: "edge-to-edge, 100% viewport"
    height: "85px"
    radius-tl: "0px"
    radius-tr: "0px"
    radius-br: "0px"
    radius-bl: "0px"
  card-service:
    background: "#FFFFFF"
    radius: "24px"
    padding: "8px"
    border: "1px solid #BACEFD"
  card-stat-inverted:
    background: "rgba(9, 80, 246, 0.8)"
    radius: "16px"
    padding: "12px"
  card-glass-inverted:
    background: "rgba(9, 80, 246, 0.8)"
    backdrop-filter: "blur(12px)"
    radius: "24px"
    padding: "8px"
    shadow: "rgba(9, 80, 246, 0.12) 0px 16px 32px 0px, rgba(9, 80, 246, 0.08) 0px 8px 16px 0px"
  card-testimonial-tint:
    background: "rgba(230, 237, 254, 0.8)"
    radius: "24px"
    padding: "8px"
    shadow: "rgba(9, 80, 246, 0.15) 0px 25px 50px -12px"
  card-translucent-dark:
    background: "rgba(255, 255, 255, 0.05)"
    radius: "24px"
    padding: "8px"
    shadow: "rgba(3, 24, 17, 0.3) 0px 4px 16px -2px"
  form-panel:
    background: "#FFFFFF"
    radius: "32px"
    padding: "24px"
---
# Fleet-blue sticker system
Source: https://www.enviosdosruedas.com/

## Overview
This is a flat, saturated, high-contrast operational-brand system: a royal-blue field (`#0950F6`) carrying thick condensed-display type in Anton, white body copy, and a rationed safety-yellow (`#FFEC01`/`#FFF12E`) for every call-to-action. The feel is industrial-cheerful — closer to a courier-fleet livery than a software SaaS — built from pill buttons, highlighter-style text blocks, and a disciplined 3-up card grid. White and pale-blue tint surfaces (`#FFFFFF`, `#E6EEFE`) punctuate the blue field in alternating full-bleed bands, giving the page a striped, sectioned rhythm rather than one continuous gradient wash.

## Composition
The first screen is blue-dominant: a dark-blue hero field, left-aligned stacked Anton display type, a yellow pill badge above it, a yellow primary CTA below, and a right-side isometric illustration (a pin/token over a low-poly cityscape) with floating glass-white info chips. A horizontal marquee ticker in a slightly darker blue band closes the hero. From there the page alternates white/tint bands (a 3-card service-selector band, a 3-card "panel" band with a blue gradient banner beneath it) against saturated full-blue bands (a 6-card testimonial band on light tint, then a blue CTA-and-footer run). This call-and-response between blue bands and white/tint bands — rather than one continuous dark page — is the deliberate choice; it rejects a single-hero-then-fade approach in favor of a striped, modular rhythm that reads like repeating operational "panels."

## Colors
`#0950F6` is the dominant brand/surface fill, covering the hero, navbar, footer, and two mid-page bands — consistent with the pixel field's blue dominance (~54% combined blue stops). `#FFFFFF` is the structural neutral for card surfaces, testimonial tiles, and body bands (~47% declared area). `#FFEC01`/`#FFF12E` is the accent, rationed almost exclusively to CTA fills, pill badges, and single-word highlighter underlines in headlines — never used as a background fill. `#E6EEFE` is a soft tint surface for secondary cards and the glass-testimonial band. `#2ECC85` (green) appears only as a faint background grid-line texture, not as a UI color. Borders use a pale `#BACEFD` hairline against white cards. Text ink is almost binary: `#0950F6` on light surfaces, `#FFFFFF` on blue surfaces, with `#FFEC01` reserved for nav-CTA text and highlighted headline spans.

## Typography
Anton (72px/400, line-height 0.92, tracking -2.2px) drives every display headline — stacked, condensed, all-caps, with single words or short phrases highlighted in a yellow sticker-block underline. Outfit is the workhorse: 16px/400 for nav and UI labels, 18px/300 at 1.63 line-height for body paragraphs, giving body copy a noticeably lighter, airier weight than the display type's density. Bebas Neue (18px/400, tracking 0.9px) serves eyebrows and small all-caps labels/badges above headlines. Geist Mono appears as a small accent label face for coded identifiers (tracking numbers, reference codes) inside panel cards — the signature "technical" accent against the otherwise humanist Outfit/Anton pairing.

## Layout
Content sits in a 1280px max-width container with 112px section padding and an 8px-rooted spacing scale (4/8/12/16/24/32px). The primary card grid is a 3-column, 32px-gap layout holding 3 service-selector cards in a single row. A denser 4-up panel grid (24px gap) appears mid-page for the tracking/portal cards, and a 3-column/24px-gap grid structures a 6-item testimonial band as two full rows of three. A 12-column asymmetric grid (57/40 split, gap 32px) underlies the hero's text-vs-illustration split. Corner radii scale by density: 24px for card families, 16px for compact stat tiles, 32px for the large white form panel, and full 9999px pills for every button and badge.

## Components
- **Navbar**: edge-to-edge square bar, 85px tall, 1920px measured width (0px insets), zero corner radius on all four corners, sticky, fill `#0950F6`, 10 total items (logo + 6 nav links/dropdowns + phone number + CTA). Its CTA is a dark glass chip, `rgba(0,0,0,0.2)` fill, `#FFEC01` text, 16px radius, 37px height.
- **Hero primary CTA**: an observed solid yellow pill, `#FFEC01` fill with `#0950F6` text, full 9999px radius, sitting directly under the hero headline — the single most emphasized control on the first screen.
- **Secondary hero link**: a ghost underline text-link beside the primary CTA, white/blue text, no fill.
- **Service-selector cards** ×3: white fill, 24px radius, hairline border, bordered footer rule; each carries a numeral badge (01/02/03) top-right, a small icon tile top-left, an eyebrow label, an Anton sub-headline, Outfit body copy, one small checklist chip, and a bottom CTA (one filled yellow, two outline/ghost).
- **Panel/tracking cards** ×4: white fill, 24px radius, icon + small status badge pair at top, Anton heading, Outfit body, a bottom-left checklist chip — arranged in a single row of four under a blue gradient banner headline.
- **Gradient banner-CTA band**: full-width rounded panel, `linear-gradient(135deg, rgb(9,80,246) 0%, rgb(9,80,246) 55%, rgb(53,112,248) 100%)` fill, pairing one yellow filled pill button with one disabled/outline pill beside it.
- **Testimonial cards** ×6: alternating white and solid-blue/yellow fills in a 3×2 grid, 24px-ish rounded corners, star-rating row, time-ago pill badge, bold quote line, body copy, divider rule, circular avatar-initial + name footer.
- **Lead-capture form panel**: single large white card, 32px radius, split into a left text column (eyebrow pill, Anton headline, body, fine-print) and a right stacked form column (three labeled inputs with icon prefixes, one full-width yellow submit pill).
- **Social/community band**: three gradient-filled rounded cards (blue, red-orange, teal) each holding a white pill CTA with arrow icon in the lower corner — a horizontal row of three distinct accent gradients breaking from the brand-blue palette.
- **Footer CTA strip**: rounded blue card inset in the footer's blue field, eyebrow pill, Anton headline with yellow highlight span, two pill buttons (filled yellow + white-chat ghost).
- **Footer**: full-bleed `#0950F6` field, 29 links across three columns (brand/social block, services list, contact/ops block), icon-prefixed contact rows, bottom legal row.
- **Marquee ticker**: a horizontal scrolling rail of dot-separated label chips in a slightly deeper blue band directly beneath the hero.

## Graphics & Effects
A faint green grid-line texture (`linear-gradient(90deg, rgb(46,204,133) 1px, transparent 1px)` crossed with its vertical twin) washes over roughly 11% of the page combined — a subtle technical-grid backdrop, not a visible color block. A soft white radial glow (`radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08), transparent 60%)`) and a yellow radial glow (`radial-gradient(circle at 50% 0px, rgba(255,236,1,0.08), transparent 50%)`) wash the hero and CTA-band corners respectively, each covering roughly a tenth of the page as a soft ambient tint, not a saturated full-frame gradient. The hero's isometric illustration/scene is rendered on a live canvas; its static stand-in is the device/pin graphic over a low-poly cityscape. A dark-to-transparent scrim (`linear-gradient(to top, oklab(0.52 -0.03 -0.25 / 0.8) 0%, oklab(.../0.2) 50%, transparent 100%)`) grounds the illustration's base. Card shadows are consistently blue-tinted and soft: `rgba(9,80,246,0.06) 0px 2px 4px` through `rgba(9,80,246,0.12) 0px 16px 32px` depending on elevation; the yellow button's own shadow is a matching tinted `rgba(255,236,1,0.15–0.45)` glow. Backdrop blurs of 4px/8px/12px appear on glass-inverted cards and chips.

## Motion
Color and background transitions run fast and uniform at `0.15s`–`0.2s` cubic-bezier(0.4,0,0.2,1), covering hover color/fill swaps across buttons and links. Transform-based hover states are springier: `cubic-bezier(0.23,1,0.32,1)` at `0.2s` for icon/button lift, with buttons scaling up to `1.16×` on hover (ghost icons) or `1.02×` (secondary filled) and lifting via a small negative-Y translate on the primary CTA. Ambient looping keyframes (`float-slow`, `floaty`, `pulse-subtle`, `pulse-ring`, `shuttle`) animate the hero illustration's pin and halo elements continuously; `marquee-left` drives the ticker's infinite horizontal scroll.

## Guardrails
- Never let the yellow accent become a background fill beyond buttons, badges, and headline highlight blocks — it is a rationed sticker-accent, not a surface color.
- Keep the hero mostly blue with illustration-only color variety on the right; do not replace the field with a full-frame gradient.
- Preserve the navbar as a square-cornered, true edge-to-edge bar — never inset it or round its corners.
- Keep Anton condensed and tight (negative tracking) for all display headlines; do not substitute a wider or serif display face.
- Maintain the alternating blue-band / white-band section rhythm; do not flatten the page into one continuous surface tone.
- Card radii must stay family-specific (16px stat tiles vs 24px standard cards vs 32px form panel) — do not unify them to one radius.