---
version: "r3xdec design-alpha"
name: "Hand-drawn hypertenancy"
description: "A cream-and-sky-blue flat illustrative system built on a monospaced display face, square-cornered utility controls, and a mascot-led technical-diagram aesthetic."
colors:
  background: "#F4EFEA"
  background-alt: "#97D4FF"
  surface: "#FFFFFF"
  surface-dark: "#383838"
  surface-muted: "#F8F8F7"
  text-primary: "#383838"
  text-on-dark: "#FFFFFF"
  border: "#383838"
  hairline: "#D7D7D7"
  text-muted: "#818181"
  accent-yellow: "#FFDE00"
  accent-orange: "#FF9538"
  accent-mint: "#B0FFF4"
  accent-sky-pale: "#CEEBFF"
typography:
  display-lg:
    fontFamily: "Aeonik Fono"
    fontSize: "44px"
    fontWeight: 400
    lineHeight: "1.09"
  headline-md:
    fontFamily: "Aeonik Fono"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: "1.2"
  body-md:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 300
    lineHeight: "1.6"
  label-md:
    fontFamily: "Aeonik Fono"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: "1.2"
  body-mono:
    fontFamily: "Aeonik Mono"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-code:
    fontFamily: "JetBrains Mono"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-mono-alt:
    fontFamily: "Source Code Pro"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "8px"
  gap: "24px"
  gap-lg: "32px"
  section-padding: "220px"
rounded:
  sharp: "2px"
  control: "8px"
  card: "14px"
  pill: "9999px"
components:
  button-hero-primary:
    background: "#FFDE00"
    text-color: "#383838"
    radius: "2px"
    height: "36px"
    border: "2px solid #383838"
    hover-background: "#F9EE3E"
  button-secondary-dark:
    background: "#383838"
    text-color: "#FFFFFF"
    radius: "0px"
    height: "36px"
    border: "2px solid #383838"
  button-nav-cta:
    background: "#97D4FF"
    text-color: "#383838"
    radius: "2px"
    height: "44px"
  button-nav-ghost:
    background: "transparent"
    text-color: "#383838"
    radius: "0px"
    height: "31px"
  button-nav-outline:
    background: "transparent"
    text-color: "#383838"
    radius: "2px"
    height: "25px"
    border: "1px solid rgba(0,0,0,0)"
  card-blog-media:
    background: "#383838"
    radius: "0px"
    padding: "0px"
  card-architecture-panel:
    background: "#383838"
    radius: "0px"
    padding: "0px"
  card-expandable-faq:
    background: "#F8F8F7"
    radius: "2px"
    padding: "0px"
  card-diagram-node:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  navbar:
    background: "#F4EFEA"
    radius: "0px"
    height: "122px"
---
# Hand-drawn hypertenancy
Source: https://motherduck.com/

## Overview
This is a flat, editorial-illustrative system built for a technical audience but rendered with warmth: cream and sky-blue flat fields, thick black hairline strokes, hand-drawn cloud and mascot illustrations, and a monospaced display face (Aeonik Fono) standing in for conventional display type. It reads as a hybrid of Swiss-grid discipline (strict left alignment, ALL-CAPS mono headlines, square utility controls) and a children's-book illustration voice (clouds, a duck mascot, speech bubbles). Square corners (0–2px) dominate structural chrome; the rare pill/rounded shape is reserved for small labels and the odd expandable panel.

## Composition
The first screen opens on a flat cream background with a thin edge-to-edge yellow announcement bar above an edge-to-edge square navbar. Below it, an asymmetric two-column hero: left-aligned mono headline and body copy with two CTAs and a logo-trust strip; right side a boxed device-style illustration panel with an oversized dropped-in quote and a yellow "tap for sound" control. The page then shifts hard into a full-bleed sky-blue band carrying a technical-diagram section (stacked-block architecture illustration, orange/teal/blue labeled nodes) — this is the compositional backbone, repeated via a cream architecture band further down with a duckling-per-node diagram and a pull-quote panel. Rhythm alternates cream and sky-blue full-bleed sections roughly every 1–2 screens, each anchored by a left-aligned mono eyebrow/headline pair and dense supporting panels beneath. The deliberate choice is diagram-as-hero-content over conventional screenshot galleries — product truth is carried by labeled illustrated systems (ducklings, pipes, stacked blocks) rather than UI screenshots, rejecting the generic "browser-chrome mockup" approach seen in most SaaS marketing pages. Density increases toward the middle (multi-panel integration grids, card grids of 3–7 items) before the page closes on a yellow full-bleed blog-card rail and a near-black footer.

## Colors
Background is a soft cream `#F4EFEA` for roughly a third of hero/architecture sections, traded against a flat sky-blue `#97D4FF`/`#90D8FF` for alternating full-bleed bands — together these two own the majority of the page. White `#FFFFFF` surfaces carry cards and the navbar's panel insets. Near-black `#383838` is the universal ink, border, and dark-card fill — doing double duty as text color and as a solid "inverted" card background. Yellow `#FFDE00`/`#F0F048` is the rationed accent: it fills the top announcement bar, one hero CTA, and one full-bleed blog-rail section — never spread across backgrounds generally. Orange `#FF9538` and mint `#B0FFF4` surface only as small radial-gradient glows and illustration accents. Nothing is softened with gray gradients — the palette stays flat and saturated, with white and cream left deliberately uncolored as breathing room between accent hits.

## Typography
Aeonik Fono, a monospaced display face, carries every headline and label at 32–44px/400 — all-caps, tight leading (1.09–1.2), giving the page its technical-diagram voice even in marketing copy. Body copy drops to a light Inter at 18px/300/1.6 for prose paragraphs, and a true Aeonik Mono at 16px governs in-product/code-like text blocks (terminal transcripts, data labels). JetBrains Mono and Source Code Pro appear as smaller accent mono faces inside code/CLI demonstration panels. Hierarchy is weight-flat but size-driven: there is no bold/light contrast within headlines, only scale steps between display, headline, and label tiers, with body text visually distinct by its serif-free humanist warmth against the mono headlines.

## Layout
Content is capped at a 1302px max-width, with generous 220px section padding stacking full-bleed color bands. Grids are strict and gap-driven: a 3-column/24px-gap row for triptych feature groups, a 4-column/32px-gap row for stat/numeral rows, and single-column stacks for long-form diagram sections. The integrations/tool grid composes as rows of [3][2wide][3] tile proportions (96/81/72/61/51 descending, then 38/29) — an irregular mosaic rather than uniform tiles. The three-card "Flights/Guides/Dives" feature band is a strict uniform row of [1][1][1] equal-width cards. A four-panel FAQ-style accordion group runs rows of [29][18][23/11][17/22] — asymmetric split rows, not a uniform list. The blog-card rail is a horizontal scrolling rail of equal-width cards with prev/next arrow controls, overflowing the max-width container edge-to-edge.

## Components
- **Navbar**: edge-to-edge square bar, 0px corner radius all four corners, 122px tall, full 1920px viewport width (0px inset either side), sticky, background `#F4EFEA`; holds 63 total interactive items (logo, ~5 top-level ghost nav items at 31px height, a cluster of smaller 25px-tall outline items, utility links) plus one filled CTA (`#97D4FF` fill, `#383838` text, 2px radius, 44px height) at the far right.
- **Hero primary CTA**: an observed solid yellow pill-less rectangle under the headline — fill `#FFDE00`, text `#383838`, ~2px corners (sharp, not rounded), 36px height, 2px solid `#383838` border, hover brightens to `#F9EE3E` with a 1px upward shift. This is the single most emphasized control on the first screen.
- **Hero secondary button**: an outline/ghost rectangle beside the primary CTA, same square geometry, no fill, `#383838` text and border — a lower-emphasis companion, not the primary.
- **Dark utility button** (mid-page, e.g. "choose your stack" / expandable triggers): solid `#383838` fill, white text implied, 0px radius, 36px height, 2px solid border — used for secondary actions inside diagram/integration bands.
- **Navbar ghost links** ×5: transparent fill, `#383838` text, 0px radius, 31px height, no padding — top-level nav labels.
- **Navbar outline chips** ×3: transparent fill, `#383838` text, 2px radius, 25px height, 1px transparent border — secondary nav utilities (docs/login-style links).
- **Blog/media card** (fresh-content rail, ×18 scoped across the rail): solid `#383838` base, 0px radius, no padding; anatomy top-to-bottom: full-bleed illustrated media top (covering roughly 55–60% of card height), an inverted-color label chip, a bold headline, then byline/date body text beneath on a white lower panel.
- **Integration mosaic tiles** (×7 in the diagram band): transparent background, 0px radius, arranged in an irregular 5-tile-per-row mosaic (widths 96/81/72/61/51% tapering, then 38/29% rows) — each tile a small white-bordered icon chip.
- **Feature triptych cards** ("Flights/Guides/Dives", ×3 uniform row): solid `#383838` fill, 0px radius, anatomy: inverted heading, small icon glyph, supporting body text, terminal/chart-style illustrated panel beneath, text link with arrow at the base.
- **Architecture/diagram node cards** (×6, asymmetric rows 29/18/23-11/17-22): transparent fill, 0px radius — these are the stacked-block and duckling-labeled diagram elements, each a bordered rectangle label over connecting line-art.
- **Expandable FAQ/accordion panel** (×3, uniform stacked rows): `#F8F8F7` fill, 2px radius, anatomy: a heading row with a +/− toggle glyph at right, collapsed body text revealed on expand.
- **Stat/customer-card pair** (rows of 99/99 then 99): transparent fill, 0px radius — logo lockup atop, an oversized numeral or metric-style figure beneath, bordered rectangle container.
- **3-column stat grid**: 3 items, 24px gap, uniform row at 32/32/32% width — equal numeral/label tiles.
- **4-column stat grid**: 4 items, 32px gap, uniform row at 22/22/22/22% — equal metric tiles.
- **Footer**: solid `#383838` background, 0px radius, holds logo lockup, social icon row, and 62 total text links organized into four labeled columns plus a webinar list.

## Graphics & Effects
Three small decorative gradients appear, each scoped to a tiny illustration element, never the page background: a repeating conic sweep `repeating-conic-gradient(rgb(255, 222, 0) 0deg, rgb(255, 222, 0) 5deg, rgba(255, 222, 0, 0) 5deg, rgba(255, 222, 0, 0) 30deg)` behind a mascot burst (~2.5% of page), a radial yellow glow `radial-gradient(circle, rgb(255, 222, 0) 0%, rgba(255, 222, 0, 0) 70%)` (~1%), and a radial orange glow `radial-gradient(circle, rgb(255, 149, 56) 0%, rgba(255, 149, 56, 0) 62%)` (~1%) — both sized as small halo accents behind a central illustration, not full backgrounds. A flat offset drop-shadow `rgb(56, 56, 56) -4px 4px 0px 0px` gives cards and panels a hard-edged, hand-drawn elevation (no blur, no softness) rather than conventional soft box-shadow depth. A canvas-based live surface exists in the hero's device-style panel; stand in with a static illustrated screenshot frame. A light dot-grid pattern texture runs beneath the integrations section on the cream background, giving subtle graph-paper texture without softening the flat color fields. Illustrated clouds and a duck mascot recur as line-art spot illustrations throughout, always white-filled with black outline, floating independent of grid structure.

## Motion
Interactions are quick and utilitarian: `opacity 0.15s ease-in-out`, `fill 0.15s ease-in-out`, and `background-color 0.15s ease-in-out` govern hover/state fades, while compound `transform, box-shadow 0.2s ease-in-out` transitions drive button press-shifts (the yellow CTA's -1px vertical nudge on hover). No slow cinematic easing or spring overshoot is present — everything resolves within 150–200ms, reinforcing a snappy, utility-tool feel rather than a polished marketing-site glide. Keyframe-named animations exist for small looping or state-triggered illustration details (mascot or icon micro-motion) rather than large scroll-triggered reveals.

## Guardrails
- Never soften the flat color fields with gradients or blur — backgrounds stay solid cream/sky-blue/black; gradients are reserved for small illustration glows only.
- Never round the structural chrome — navbar, buttons, and most cards stay at 0–2px radius; reserve the 14px/pill radius for the rare expandable panel only.
- Never substitute a glass or soft-shadow elevation for the flat offset `-4px 4px 0px 0px` hard shadow — depth here is graphic, not atmospheric.
- Never replace diagram/illustration content with product screenshots — the system's credibility comes from labeled hand-drawn systems diagrams, not UI chrome.
- Keep Aeonik Fono mono-display exclusive to headlines/labels; don't apply it to body paragraphs, which stay in light-weight Inter.
- Keep yellow strictly rationed to one CTA, the top bar, and one full-bleed band — never let it become a general background color.