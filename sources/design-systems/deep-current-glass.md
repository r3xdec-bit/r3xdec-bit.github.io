---
version: "r3xdec design-alpha"
name: "Deep-current glass"
description: "Near-black editorial system with a single rationed ice-blue gradient, oversized light-weight display serif-adjacent sans, and an italic script accent repeated across every section close."
colors:
  background: "#101820"
  surface: "#0A232B"
  text-primary: "#FFFFFF"
  text-secondary: "#D0EDFF"
  text-ink: "#20274A"
  accent: "#D0EDFF"
  border: "#DBDDDF"
  muted: "#6B7080"
typography:
  display-lg:
    fontFamily: "Gotham"
    fontSize: "106px"
    fontWeight: 300
    lineHeight: "0.9"
    letterSpacing: "-6.9px"
  headline-md:
    fontFamily: "Gotham"
    fontSize: "55px"
    fontWeight: 300
    lineHeight: "1.12"
    letterSpacing: "-2px"
  body-md:
    fontFamily: "Gotham"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: "1.8"
  label-md:
    fontFamily: "Gotham"
    fontSize: "64px"
    fontWeight: 300
    lineHeight: "1.1"
    letterSpacing: "-2.6px"
  accent-serif:
    fontFamily: "Publico Headline"
    fontWeight: 400
    fontStyle: "italic"
spacing:
  base: "8px"
  gap: "16px"
  section-padding: "92px"
  section-gap: "638px"
rounded:
  control: "5px"
  pill: "9999px"
  capsule: "50px"
  card: "5px"
components:
  navbar:
    background: "transparent"
    height: "94px"
    width: "100%"
    radius: "0px 0px 0px 0px"
  button-navbar-cta:
    background: "#D0EDFF"
    text-color: "#101820"
    radius: "9999px"
    height: "44px"
  button-hero-primary:
    background: "linear-gradient(120deg, rgb(228, 245, 255), rgb(200, 234, 255))"
    text-color: "#101820"
    radius: "9999px"
    height: "48px"
    padding: "0px 16px"
    border: "1px solid rgba(234, 247, 255, 0.7)"
    shadow: "rgba(255, 255, 255, 0.6) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.2) 0px 6px 24px 0px"
  button-sharp-secondary:
    background: "#D0EDFF"
    text-color: "#101820"
    radius: "0px"
    height: "42px"
    padding: "9px 14px"
    border: "1px solid rgba(208, 237, 255, 0.4)"
  button-nav-utility:
    background: "transparent"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "44px"
    padding: "0px 17px"
    hover-background: "rgba(208, 237, 255, 0.14)"
  button-icon-circle:
    background: "transparent"
    text-color: "#D0EDFF"
    radius: "50%"
    height: "44px"
    padding: "1px 6px"
    border: "1px solid rgba(208, 237, 255, 0.37)"
  card-media-bleed:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-full-panel:
    background: "#0A232B"
    radius: "0px"
    padding: "0px"
  footer:
    background: "#101820"
    radius: "0px"
---
# Deep-current glass
Source: https://morphowater.com/

## Overview
This is a dark-mode-default editorial system — near-black (#101820) carrying ~97% of rendered pixels — paired with an oversized, ultralight display face (Gotham 300, tracked tight to -6.9px) and a single italic serif-adjacent script (Publico Headline) reserved for one accent clause per headline. The feel sits between Swiss-rational grid discipline and aurora-gradient product marketing: huge negative space, a vertical rail of numbered progress ticks beside the hero, and a cool ice-blue (#D0EDFF) rationed to CTAs, labels, and a single corner gradient wash. Glassmorphic buttons, soft insets, and long cinematic scroll distances (638px section gaps) complete a restrained, high-end liquid-product aesthetic.

## Composition
The first screen is a left-text / right-object split: an eyebrow label, a two-line ultralight display headline with one italic serif word-group floating lower-right as a secondary caption, a short body line, and a vertical numbered rail ("01/07" and tick marks) running down the far left — a scrollytelling index. Centered in the frame is a product can rendered as a photographic/3D hero object. Several full-viewport sections that follow are near-solid dark holding frames (the measurement shows #181818-dominant intermediate screens), implying scroll-triggered reveals where content animates in rather than sitting static — a deliberate choice favoring suspense and pacing over an always-visible wall of content, rejecting a dense single-scroll feature dump. Near the bottom, density rises: a horizontal scrolling rail of 6 social/media tiles with captions and date stamps, then a wide two-column footer band (large italic-accented headline, link cluster, email-capture row, legal line). This front-loads mystery and back-loads density and conversion.

## Colors
Background is #101820, a near-black ink-navy that dominates the pixel field (#181818 ~97%, with #001818/#181830/#183030 slivers — confirming the page reads as flat deep charcoal-navy, not a saturated gradient canvas). Text-primary is pure #FFFFFF for display type; #D0EDFF (a pale ice-blue) is the rationed accent — it colors CTA fills, the navbar CTA, icon-circle borders, and isolated accent words (such as the one muted word per hero body line), occupying a small fraction of total area concentrated at controls and labels. #0A232B is a slightly lighter navy surface used for a subset of full-width content panels, giving minimal elevation without a visible shadow system. #20274A (ink) is reserved for text sitting on the light-filled buttons. Borders are near-invisible hairlines at rgba(208,237,255,0.4) and #DBDDDF. Large tracts of the page — the mid-scroll holding frames — are left completely uncolored flat black, confirming the accent is spent only at decision points, never as ambient wash.

## Typography
Gotham at weight 300 carries every display and label role: a 106px/0.9 display size for hero headlines, 64px/1.1 for secondary big labels, 55px/1.12 for mid-page headline bands, all tracked tightly negative (-2 to -6.9px) for a compressed, confident mark. Body copy drops to regular 400 weight at 16px/1.8 (and a smaller 10px/1.8 caption size), in #20274A on light panels and #FFFFFF on dark. Publico Headline appears as an italic serif interruption — one word or short phrase per headline (e.g. the closing word of a two-line hero statement, or the second word of footer headlines) — never more than that single clause, sized to match its host line, repeated at every major section close as the system's signature. Arial and Times New Roman appear only as fallback stacks, not visible brand faces.

## Layout
Content is held to a 1000px max-width column against the full-bleed dark background, with generous 92px section padding and unusually long 638px gaps between major scroll sections — confirming a slow, cinematic scroll cadence rather than tight stacking. Grids are flat and row-driven rather than card-boxed: a two-column 48/48 split grid appears twice (paired heading+body blocks), a two-item 100/100 stacked row appears three times (full-width alternating panels), and one asymmetric 2-column grid (gap 25px/12%) holds 5 items in rows of [100 | 24/44] — a full-width band over a split detail row, reading as a magazine layout rather than a uniform card grid. The social rail is a horizontal scrolling rail of 6 equal tiles, each with a corner media-type chip (Reel/Photo/Gallery) and a caption/date pair beneath — a classic scrolling-rail pattern, not a static grid. Radii are near-zero (0–5px) everywhere except interactive controls, which jump straight to full pill (9999px) or 50px capsule — a deliberate sharp-panel / round-control contrast.

## Components
- **Navbar**: edge-to-edge square bar, 94px tall, full 1920px viewport width (0px inset either side), all four corners 0px radius, transparent background, sticky, holding 9 items (logo + nav links + locale switcher + CTA). Its CTA is a solid #D0EDFF fill, #101820 text, 9999px radius, 44px height — a true pill.
- **Button — hero primary** (observed on first screen, solid light fill under headline): a sharp-cornered light panel, fill #D0EDFF, text #101820, ~0px radius, 42px height, 9px 14px padding, 1px solid rgba(208,237,255,0.4) border — this is the dominant on-screen CTA, a flat rectangular light chip, NOT a pill.
- **Button — secondary glass pill** (also first-screen, paired beside primary): transparent base with gradient fill `linear-gradient(120deg, rgb(228, 245, 255), rgb(200, 234, 255))`, text #101820, full 9999px pill, 48px height, 1px solid rgba(234,247,255,0.7) border, resting shadow `rgba(255, 255, 255, 0.6) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.2) 0px 6px 24px 0px`.
- **Button — nav utility** (×3, inside navbar links/switcher): transparent, white text, 9999px radius, 44px height, 0px 17px padding; hover adds background rgba(208,237,255,0.14) and inset highlight shadow rgba(255,255,255,0.14) 0px 1px 0px 0px.
- **Button — icon circle** (×2, near footer/social icons): transparent fill, #D0EDFF text/icon, 50% radius, 44px height, 1px solid rgba(208,237,255,0.37) border — social-link circles.
- **Card family — media-bleed** (×6, social rail): transparent/no-radius container, media fills full card top-to-bottom, corner chip label (Reel/Photo/Gallery), caption line + date stamp beneath.
- **Card family — full panel + media** (×3, mid-page alternating band): #0A232B fill, 0px radius, full-width panel with top-bleed media, heading, and body text stacked beneath — the magazine-style content band.
- **Card family — media-only full panel** (×3, mid-page): transparent, 0px radius, full-width media bleed with no visible text overlay — a pure visual break.
- **Text-pair grid** (×4 items in two 48/48 rows): heading + body text blocks, no border/fill, pure typographic grid cells.
- **Footer**: #101820 background, 14 links across two rows (primary nav-style row + legal row), paired with an email-capture field (underline-style input, no visible border box) and an arrow-icon subscribe control.

## Graphics & Effects
A radial gradient `radial-gradient(at 52% 44%, rgb(48, 62, 71) 0px, rgb(20, 32, 41) 46%, rgb(6, 11, 16) 100%)` renders behind the hero product object only, covering roughly the central third of the first screen as a soft vignette scrim, not the full frame. Thin directional scrims — `linear-gradient(90deg, rgba(16, 24, 32, 0.11), rgba(0, 0, 0, 0) 58%)`, `linear-gradient(0deg, rgba(16, 24, 32, 0.125), rgba(0, 0, 0, 0) 44%, rgba(16, 24, 32, 0.05))`, `linear-gradient(90deg, rgba(5, 37, 43, 0.46), rgba(0, 0, 0, 0) 85%)`, `linear-gradient(0deg, rgba(3, 22, 29, 0.77), rgba(0, 0, 0, 0) 75%)` — sit as edge fades atop embedded video/canvas media panels, each confined to its own panel, not page-wide washes. Live surfaces (video ×4, canvas ×2) drive several mid-page sections; use a static gradient or single still frame as a stand-in. Glass controls carry backdrop-filter blur at `blur(8px)`, `blur(18px)`, `blur(14px)`, and `blur(20px) saturate(1.35)` — reserved for floating widget-style chips (the "Talk to" assistant pill, the privacy banner). Shadows are faint and cool-toned: `rgba(208, 237, 255, 0.27) 0px 0px 2px 0px` on glass edges, `rgba(0, 0, 0, 0.133) 0px 14px 34px 0px` beneath floating panels — elevation is implied by blur and soft glow, never hard drop shadow.

## Motion
Transitions are quick and purposeful: `color 0.1s linear` and `color 0.2s ease` for text state swaps, `transform 0.25s ease` for hover lifts, and a slower compound `height, background, box-shadow 0.4s ease` for expanding controls. Named keyframe sets — reveal-entry, hero-in, products-in, radio-level, fresh-bubble, fresh-droplet — point to staged entrance choreography per section (hero elements animate in as a group, product imagery has its own entrance, and two organic "bubble/droplet" keyframes suggest fluid micro-animations tied to the water subject). CSS scroll-driven animations drive the long 638px section gaps, confirming content reveals are tied to scroll position rather than fixed timers — the mid-scroll near-blank frames in the evidence are held states awaiting scroll-triggered reveal.

## Guardrails
- Never fill the hero background with the radial/linear gradients verbatim — they belong to a confined scrim behind the product object and small media panels only; the hero frame stays flat near-black.
- Never round the navbar — it is a square, edge-to-edge, 0px-radius bar; do not convert it to a floating pill or inset capsule.
- Never substitute the nav glass-utility button's pill spec for the hero's primary CTA — the hero primary is the sharp 0px-radius light chip, not a rounded pill.
- Keep the italic serif accent to one word or short clause per headline, sized to match its line — never apply it to full sentences or body copy.
- Do not densify the mid-page holding frames — the near-blank dark sections are deliberate scroll-paced breathing room, not missing content.
- Keep #D0EDFF strictly rationed to controls, labels, and single accent words — never use it as a large fill or background wash.