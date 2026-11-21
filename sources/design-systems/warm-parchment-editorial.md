---
version: "r3xdec design-alpha"
name: "Warm parchment editorial"
description: "Cream-and-ink light system with a serif display face for oversized headlines, forest-green rationed accent, glass-free flat cards, and application windows rendered as the only illustrative device."
colors:
  background: "#FFFAEB"
  surface: "#FBFBF8"
  surface-alt: "#F1EEE4"
  text-primary: "#1B1C15"
  text-secondary: "#646464"
  text-ink: "#202020"
  accent: "#00694E"
  accent-bright: "#3DBE6A"
  border: "#191919"
  link: "#0000EE"
typography:
  display-lg:
    fontFamily: "Meraki"
    fontSize: "72px"
    fontWeight: 400
    lineHeight: "1.1"
    letterSpacing: "-2.9px"
  headline-md:
    fontFamily: "Meraki"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: "1.06"
    letterSpacing: "-1.9px"
  body-md:
    fontFamily: "LBFP Sohne"
    fontSize: "23px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "LBFP Sohne"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: "1.2"
  body-default:
    fontFamily: "LBFP Sohne"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-serif:
    fontFamily: "Sohne Buch"
    fontWeight: 400
spacing:
  base: "2px"
  gap: "8px"
  card-padding: "14px 18px 15px"
  section-padding: "136px"
  section-gap-lg: "792px"
  section-gap-md: "526px"
rounded:
  control: "8px"
  card: "7px"
  nav-cta: "50px"
  pill: "9999px"
components:
  button-primary-dark-pill:
    background: "#1B1C15"
    text-color: "#FFFAEB"
    radius: "9999px"
    height: "45px"
    padding: "13px 22px"
    shadow: "rgba(27, 28, 21, 0.18) 0px 6px 18px 0px"
    hover-background: "#34352D"
    hover-shadow: "rgba(27, 28, 21, 0.24) 0px 12px 28px 0px"
  button-secondary-outline:
    background: "#1B1C15"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "44px"
    padding: "8px"
    border: "1px solid rgb(27, 28, 21)"
  button-brand-green-pill:
    background: "#00694E"
    text-color: "#FFFFFF"
    radius: "999px"
    height: "46px"
    padding: "0px 26px"
  button-ghost-cream-pill:
    background: "#FFFAEB"
    text-color: "#1B1C15"
    radius: "999px"
    height: "45px"
    padding: "13px 22px"
    shadow: "rgba(27, 28, 21, 0.12) 0px 0px 0px 1px inset"
  navbar-cta:
    background: "#1B1C14"
    text-color: "#FFFFFF"
    radius: "99px"
    height: "36px"
  card-flat-row:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-icon-text:
    background: "transparent"
    radius: "0px"
    padding: "14px 18px 15px"
  card-surface-panel:
    background: "#FBFBF8"
    radius: "0px"
    padding: "0px 44px"
---
# Warm parchment editorial
Source: https://littlebird.ai/

## Overview
This is a warm-light, editorial-minimalist system: a near-uniform cream page (`#FFFAEB`) carries an oversized serif display face (Meraki, tight negative tracking) against a plain-text sans body (LBFP Sohne). There is no glassmorphism, no card elevation, and almost no border-radius on content containers — cards are flat, borderless, zero-radius blocks that rely entirely on type hierarchy and whitespace for structure. Color is otherwise rationed hard: a single forest-green (`#00694E`) pill marks the one selected/brand state per screen, and deep ink (`#1B1C15`) does the heavy lifting for buttons and text. The aesthetic reads as a print-inspired SaaS mark — closer to Swiss-restrained editorial than to typical dark-mode SaaS — carried by the application-window screenshot motif rather than illustration or abstract gradients.

## Composition
The first screen is centered and symmetrical: logo-left/nav-center/CTA-right navbar, then a two-line serif headline, a short sans subhead, a primary pill + secondary outline button pair, a tiny caption line, a three-way pill toggle, and a large browser-chrome application mockup — all stacked and center-aligned on one vertical axis. Below the fold, rhythm alternates between huge whitespace gaps (section gaps measured at 526px and 792px) and dense content bands: a monochrome logo strip, a dark-navy explainer card with an embedded chat mockup, a cyan-sky mockup paired with a two-column feature list, a milestone/testimonial card band with three quotes, a phone-mockup section, and a near-black "memory" band before the parchment footer. The deliberate choice is restraint — one accent hue, zero card chrome — rejecting the more common bento-grid-of-colorful-cards approach; hierarchy comes from type scale and negative space, not from boxes or shadows.

## Colors
`#FFFAEB` is the dominant page surface (~57% declared area, confirmed by the pixel field's warm off-white dominance) — this is the background role, not a neutral gray. `#FBFBF8` (~8%) and `#F1EEE4` serve as slightly cooler panel surfaces for inset content blocks. `#1B1C15`/`#1B1C14` is the near-black ink used for primary buttons, nav CTA fill, and body headline text — it is the system's "dark" without ever becoming a true dark-mode background. `#00694E` (forest green) is the sole saturated accent, rationed to one pill button and one toggle-selected state per screen — never used for body text or large fills. `#3DBE6A` is a brighter green held in reserve, likely for a hover/success micro-state. `#646464` and `#202020` run secondary and primary text ink respectively. `#0000EE` is a classic visited-link blue appearing only on inline text links. Deep navy (`rgb(27,61,112)` to `rgb(15,38,73)`) and a muted steel gradient (`rgb(139,139,146)` → `rgb(61,61,66)`) are reserved for two specific mid-page mockup/panel fills, not the page background. Borders are near-black (`#000000`, `#191919`), used sparingly as 1px hairlines on outline buttons only.

## Typography
Two-family pairing: Meraki, a serif, carries all display and headline sizes (72px/1.1 and 48px/1.06, both with aggressive negative tracking of -2.9px/-1.9px) — this is the system's signature, an oversized editorial serif used exclusively for headline moments, never body copy. LBFP Sohne (and its Buch cut) is the workhorse sans for everything else: 23px/1.5 for lead paragraphs, 17px/1.5 for standard body, and 15px/500/1.2 for all-caps-adjacent labels and UI chrome text. The pairing logic is strict: serif = statement, sans = explanation/interface. No italic or accent-serif interruption is used mid-headline; the serif carries the whole headline, making its scale (72px vs 17px body — roughly 4.2×) the primary hierarchy signal on the page.

## Layout
Content is capped at a 1240px max-width, centered, with generous 136px section padding and exceptionally large section-to-section gaps (526px–792px) that give the page a slow, breathing rhythm rather than a dense SaaS-page cadence. Grids are simple and low-count: a 3-column/2-item row with 64px gap, a 2-column/2-item row with 80px×140px gaps (28/52 split), and a 2-column/3-item row with 88px gap (47/36 split) — these are asymmetric two-up layouts (mockup + text), not multi-card bento grids. Card "families" are consistently zero-radius, zero-padding or minimally-padded (14px 18px 15px) flat rows at 100% container width stacked vertically — this is a list layout, not a grid of bounded cards, reinforcing the editorial rather than dashboard feel. The one icon+text card family breaks this with modest padding, used for compact feature rows.

## Components
- **Navbar**: a centered bounded bar, 62px tall, 1408px wide (73% of viewport, 256px insets both sides) — not edge-to-edge — with transparent background and sticky positioning; all four corners are 0px radius (square-cornered inset bar, not a pill or capsule). Carries 49 total interactive items (logo + nav links + utility links + CTA cluster). Its CTA is a dark pill: `#1B1C14` fill, white text, 99px radius, 36px height.
- **Hero primary button**: an observed near-black solid pill under the headline ("Download for Mac" position) — matches the measured dark-pill token (`#1B1C15` fill, `#FFFAEB` text, 9999px radius, 45px height, `rgba(27,28,21,0.18) 0px 6px 18px 0px` resting shadow), hovering to `#34352D` with a deeper shadow and a 1px upward shift. This is the single most emphasized control on the first screen.
- **Hero secondary button**: an outline/dark-bordered rectangle beside the primary ("Try it in your browser" position) — `#1B1C15` fill variant with white text, 8px radius (slightly-rounded, not pill), 44px height, 1px solid `rgb(27,28,21)` border — a visually distinct, less rounded companion to the pill primary.
- **Pill toggle group**: three-way segmented control on the first screen; selected state uses the brand green pill (`#00694E`, white text, 999px, 46px height, `0px 26px` padding), unselected states sit on muted cream/tan flat fill with no border.
- **Ghost cream pill buttons**: `#FFFAEB` fill, `#1B1C15` text, 999px radius, 45px height, inset hairline shadow `rgba(27,28,21,0.12) 0px 0px 0px 1px inset` — used for secondary chip-style actions mid-page (source tags, mode selectors inside the chat mockup).
- **Application-window mockup card**: the dominant illustrative device, appearing once in the hero and again mid-page — a macOS-style chrome (traffic-light dots, address bar) framing a product-chat interior; occupies roughly half the hero's vertical space and nearly the full width of its two-column sections; interior shows a sidebar list, a chat thread bubble, checklist rows with checkmarks, and an input field with mode/mic/send icons.
- **Logo strip**: a single-row flat list of monochrome partner marks, center-aligned, no card chrome, sitting directly on the cream background beneath the hero mockup.
- **Explainer/context card (dark navy panel)**: one per "how it works" band, full-bleed-within-container navy panel (`linear-gradient(rgb(27,61,112) 0%, rgb(15,38,73) 100%)`) holding a nested white chat-bubble mockup, source-chip row (icon + label pills), and a small result card with bullet text — zero outer radius, the gradient itself is the only rounded element (mockup window corners).
- **Milestone/testimonial band**: one wide flat panel (`#F1EEE4`-toned surface) containing a badge/award cluster (left), a separate product-hunt badge card, three testimonial quote blocks in a 3-column row (avatar + body-text anatomy, each ~1/3 width), a divider hairline, then a stat row (large numeral + caption text) paired with a dark pill CTA.
- **Phone mockup card pair**: two device-frame screenshots side by side on a plain cream ground, paired with a right-column heading/body/button-pair text block — a 2-column, 2-item asymmetric grid (28/52 split).
- **Footer**: flat, borderless, cream background; five-column link list (no card chrome, 100%-width row items), a certification badge row (three circular monochrome seals), a hairline divider, a legal/copyright line with inline text links, and a giant brand wordmark + icon rendered over a muted landscape illustration at full width at the very bottom — this illustrated band is the only photographic/painterly texture on the page.

## Graphics & Effects
Gradients are small, localized fills, never full-page washes: `linear-gradient(rgb(27, 61, 112) 0%, rgb(15, 38, 73) 100%)` fills only the one dark explainer panel (roughly one section's height, ~1.8% of total page pixels); `linear-gradient(rgb(246, 238, 220) 0%, rgb(245, 230, 194) 38%, rgb(242, 205, 124) 70%, rgb(235, 176, 79) 100%)` is a warm gold wash confined to a badge/icon element (~1.2% of page); `linear-gradient(150deg, rgb(139, 139, 146) 0%, rgb(69, 69, 75) 24%, rgb(119, 119, 125) 50%, rgb(61, 61, 66) 76%, rgb(102, 102, 108) 100%)` is a steel-gray treatment on a small badge/seal element (~0.6%). The cyan-sky photographic backdrop behind the second application mockup is a static image treatment, not a gradient — it reads as a bounded illustrative backdrop rather than a page-wide hero graphic. Shadows are soft and warm-toned rather than neutral black: `rgba(27, 28, 21, 0.18) 0px 6px 18px 0px` on primary buttons, `rgba(60, 70, 30, 0.45) 0px 40px 90px -60px` as a deep ambient drop beneath floating mockup cards, and an inset hairline `rgb(234, 230, 215) 0px 0px 0px 1px inset` substituting for borders on ghost elements. Backdrop blur is minimal (`blur(0px)`, `blur(4px)`) — this system does not lean on frosted-glass treatment. The footer landscape illustration and oversized wordmark are the system's only painterly/textural asset, used once, as a closing signature rather than a recurring motif.

## Motion
Transitions are short and functional: `opacity, filter 0.18s ease` for fades, `transform, box-shadow, background-color 0.25s cubic-bezier(0.16, 1, 0.3, 1)` for the primary button's hover lift (background darkens to `#34352D`, shadow deepens, element translates -1px vertically), `color, background-color, filter 0.2s ease` for text/icon state changes, and a snappier `background-color 0.14s ease` for immediate press feedback. Named keyframes (`spin`, `lbfp-dots`, `lbfp-wave`, `lbfp-shimmer`, `lbfp-a2-spin`, `lbfp-a2-sweep`) indicate small looping indicators — loading dots, waveform, shimmer sweep — confined to the application-mockup interiors to simulate live product activity, not page-level scroll animation. Overall motion is restrained, functional, and fast (sub-300ms), reinforcing the calm editorial tone rather than adding spectacle.

## Guardrails
- Never render the page as dark-mode-default; the dominant surface is warm cream (`#FFFAEB`), with ink and green as rationed foreground accents only.
- Do not add border-radius to content cards — the flat, square-cornered, borderless card is a deliberate identity marker; radius belongs only to buttons, pills, and the navbar CTA.
- Keep the navbar an inset centered bar (256px side margins at this viewport), never full-bleed edge-to-edge.
- Do not expand the green accent beyond one pill/toggle per screen — it is a rationed brand marker, not a palette base.
- Never substitute the hero's dark pill primary with the glass/outline secondary's values, and never apply the navy or steel gradients beyond their single source panel/badge.
- Preserve the serif-for-headline/sans-for-body split exactly; do not introduce italics or a third display face.