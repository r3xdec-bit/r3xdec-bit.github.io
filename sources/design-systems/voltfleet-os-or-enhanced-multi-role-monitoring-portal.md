---
version: "r3xdec design-alpha"
name: "Blackout Ops Console"
description: "Near-black operations-dashboard system with a rationed cobalt-blue accent, dense monospace-inflected data tiles, and 150ms utility transitions."
colors:
  background: "#09090B"
  surface: "#18181B"
  surface-raised: "#27272A"
  text-primary: "#FAFAFA"
  text-secondary: "#A1A1AA"
  text-muted: "#71717A"
  accent: "#2563EB"
  danger: "#EF4444"
  success: "#10B981"
  border: "#27272A"
typography:
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "10px"
    fontWeight: 700
    lineHeight: "1.5"
  label-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.43"
  body-primary:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "1.43"
  label-mono:
    fontFamily: "JetBrains Mono"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: "1.4"
spacing:
  base: "8px"
  unit-sm: "4px"
  unit-md: "12px"
  unit-lg: "16px"
  gap: "24px"
  section-padding: "32px"
rounded:
  control: "8px"
  pill: "9999px"
  card-sm: "16px"
  card-lg: "24px"
  sharp: "2px"
  bar: "2px"
components:
  button-nav-cta:
    background: "#2563EB"
    text-color: "#FFFFFF"
    radius: "9999px"
    height: "23px"
    padding: "4px 12px"
  button-nav-ghost:
    background: "transparent"
    text-color: "#71717A"
    radius: "9999px"
    height: "23px"
    padding: "4px 12px"
    hover-color: "#FFFFFF"
  button-primary:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "8px"
    height: "33px"
    padding: "8px 0px"
    hover-background: "#E4E4E7"
  button-secondary:
    background: "#27272A"
    text-color: "#FFFFFF"
    radius: "8px"
    height: "33px"
    padding: "8px 0px"
  card-metric-tile:
    background: "#18181B"
    radius: "16px"
    padding: "20px"
    opacity-fill: "rgba(24, 24, 27, 0.4)"
  card-panel-flat:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-popover:
    background: "#18181B"
    radius: "16px"
    padding: "16px"
    shadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
  card-dark-block:
    background: "#18181B"
    radius: "24px"
    padding: "24px"
  navbar:
    background: "#09090B"
    radius: "0px 0px 0px 0px"
    height: "64px"
---
# Blackout Ops Console
Source: https://p.r3xdec design.dev/draft/ab7bf830-194d-4bc0-bf73-a369b0abe600

## Overview
This is a dark-mode-default operations console in the vein of mission-control software: near-black surfaces (`#09090B` page, `#18181B` cards) carry a dense grid of data tiles, map telemetry, and incident feeds, with a single cobalt-blue (`#2563EB`) accent rationed to the one actionable element per cluster — a nav CTA, a selected toggle, a focus ring. Typography is a bold, compact Plus Jakarta Sans run at small sizes (10–14px, weight 700 throughout), closer to instrument-panel labeling than editorial type, with JetBrains Mono reserved for identifier strings and coordinate-like readouts. The visual language is Swiss/International in its grid discipline — strict column alignment, ruled dividers, no decorative whitespace indulgence — filtered through a SaaS-dashboard dialect with soft glass tiles and elevation shadows standing in for depth cues.

## Composition
The first screen opens on a top utility bar (search field, mode toggle) over a 4-up row of status tiles, then a second 4-up row of secondary metric tiles — eight data points visible before any narrative content. Below that, the page splits into an asymmetric two-column band: a large live map/tracking panel (~66% width) paired with a narrower incident-pipeline feed (~32% width) stacked above a unit-inspector detail card. Toast notifications float top-right, overlapping the header rather than pushing content down. Further down (per the maintenance-forecast and energy-load-dynamics panels), the layout resolves into a steady two-column chart grid. The deliberate choice is maximum information density above the fold — eight metric tiles plus a live map before any single piece of content gets room to breathe — rejecting a hero-led, single-focus marketing composition in favor of instrument-panel simultaneity.

## Colors
`#09090B` is the background, covering roughly two-thirds of pixels (66.4% declared, confirmed by the near-black pixel-field dominance); `#18181B` is the primary surface for cards and popovers (12.5% declared area), with `#27272A` as a lighter raised surface for secondary buttons and borders. Text ink runs `#FAFAFA` for primary labels/values, `#A1A1AA` for secondary captions, and `#71717A` for muted/ghost states. The accent `#2563EB` is heavily rationed — it appears only on the navbar CTA pill and in a small cobalt-to-indigo gradient wash (3.9% of page), never as a field color. `#EF4444` (danger/critical alerts) and `#10B981` (success/optimal states) are semantic flags confined to status badges and dots. Borders are a near-invisible `#27272A`/`#26262A` hairline. Everything else — the vast tile interiors, the map canvas — is deliberately left uncolored black or near-black, letting data and the rationed accent carry all visual weight.

## Typography
A single sans family, Plus Jakarta Sans, carries the entire hierarchy through weight and size rather than family switching: bold (700) at 14px for primary labels and values (`body-primary`/`label-md`), dropping to 10px/700 for the densest micro-captions (`body-md`). There is no light or regular weight in evidence — everything reads heavy and compact, reinforcing the instrument-panel feel. JetBrains Mono is the signature accent face, reserved for unit IDs, coordinates, and version strings — a monospace interruption inside an otherwise uniform sans system, appearing only on short tokens (one identifier or value at a time, never full sentences).

## Layout
The grid is a 12-column system at the top band (gap 32px, two items split roughly 66/32), narrowing to a 2-column grid (gap 24px, two 49%-width items) for the chart band, and a 4-column grid (gap 24px, four 24%-width tiles) for metric rows. Spacing increments are tight and consistent: 4px/8px/12px/16px/24px/32px, with card radii stepping from a sharp 2px (bar elements) up through 8px (controls), 16px (tiles/popovers), to 24px (larger dark blocks) and a full 9999px pill for CTAs and status chips. Density is high throughout — minimal padding (16–24px per card), no generous marketing whitespace — and the structure holds a fixed-sidebar-plus-fluid-content shell (app-shell pattern) rather than reflowing to a marketing-page stack.

## Components
- **Navbar**: a wide inset square-cornered bar, 64px tall, ~87% of viewport width with asymmetric insets (256px left, 0px right) to accommodate a fixed left sidebar — all four corners sharp (0px radius), background `#09090B`, static (non-floating), holding 4 items (search field, mode toggle, live-stream indicator, notification bell). Its CTA is a `#2563EB` fill, white text, 9999px pill, 23px tall, 4px/12px padding — the compact "OPS" mode-style pill. A secondary ghost nav button sits beside it: transparent fill, `#71717A` text, same 9999px/23px geometry, brightening to `#FFFFFF` on hover.
- **Button — primary (hero/first-screen)**: observed near-white (`#FFFFFF`) solid fill, black text, 8px corner radius (slightly-rounded), 33px tall, 8px/0px padding, hovering to `#E4E4E7` — this is the dashboard's highest-contrast action, used for a top-level control, not the navbar pill.
- **Button — secondary (first-screen)**: `#27272A` fill, white text, same 8px radius and 33px height as the primary, used for a lower-emphasis adjacent action.
- **Metric tile (×4, status row)**: translucent `rgba(24, 24, 27, 0.4)` glass fill, 16px radius, 20px padding; anatomy top-to-bottom is an icon glyph + small status badge (e.g. a colored word like "LIVE"/"OPTIMAL"), a muted all-caps label, then a large bold numeral/value as the focal element.
- **Metric tile (×4, secondary row)**: same 16px/20px glass-tile treatment carrying action-state badges (e.g. a colored status word) over an icon, label, and value — mirrors the first row's anatomy but surfaces maintenance/firmware/sync data instead of fleet counts.
- **Full-width panel card (map/tracking)**: transparent background, 0px radius, 0px padding — a borderless full-bleed container holding a live map canvas, a floating layer-toggle checklist box (4 checkbox rows: scooters, charging, hubs, geofence), a fullscreen control, and plotted geofence polygons/dots directly on the dark canvas.
- **Dark block card (×2, e.g. unit inspector)**: `#18181B` fill, 24px radius, 24px padding; anatomy is a heading row (icon + identifier label + live-status dot/caption) followed by a 2×2 sub-grid of smaller stat readouts (label + numeral + unit), then a full-width primary action button and a secondary text-link style action beneath it.
- **Popover/elevated card (×2)**: `#18181B` fill, 16px radius, 16px padding, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px` — used for the floating toast/alert stack, stacked body-text rows (title + description + timestamp), each with a colored leading status dot (red for critical, amber for warning).
- **Flat list panel (×2, incident pipeline / forecast)**: transparent, 0px radius, 0px padding, rows at 100%/100% width — a header with an "archive" link-style control, then stacked incident rows each pairing a colored severity dot, a bold title, a muted description line, and a trailing relative-timestamp caption.
- **Toast notification**: floats top-right overlapping the navbar, `#18181B`-family surface implied by the popover shadow token, carries a status icon, bold title, muted body line, and a dismiss control; a second variant uses the danger ring treatment (`rgba(239, 68, 68, 0.1) 0px 0px 0px 4px`) to signal critical severity.

## Graphics & Effects
A radial vignette gradient — `radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgb(9, 9, 11) 100%)` — covers roughly 27% of the page, darkening the outer edges of the map/canvas region to focus attention on its center; this is a localized atmospheric wash, not a full-screen color field. A small cobalt-to-indigo gradient, `linear-gradient(to right bottom, rgb(37, 99, 235), rgb(67, 56, 202))`, covers only ~3.9% of the page — confined to a single accent chip or icon badge. Glass tiles use `backdrop-filter: blur(12px)` over their translucent `rgba(24, 24, 27, 0.4)` fill. Elevation is communicated through layered shadow stacks: popovers/toasts use `rgba(0,0,0,0.25) 0px 25px 50px -12px` for a deep floating lift, while a lighter `rgba(0,0,0,0.1) 0px 20px 25px -5px, rgba(0,0,0,0.1) 0px 8px 10px -6px` pairing handles mid-elevation cards. A danger focus-ring treatment (`rgba(239, 68, 68, 0.1) 0px 0px 0px 4px`) signals critical alert states. The map surface is a live-canvas stand-in: a dark plane with thin connective lines, small colored node dots, and a dashed geofence polygon — no photographic imagery anywhere in the system.

## Motion
Interactive color/background/border transitions run at `0.15s cubic-bezier(0.4, 0, 0.2, 1)` — a fast, snappy ease-out-style curve for hover and focus state changes across buttons, links, and toggles. Broader state changes use `all 0.15s cubic-bezier(0.4, 0, 0.2, 1)` or a slower `all 0.5s ease` for larger panel transitions, while opacity fades use a quick `opacity 0.1s ease-in`. Keyframe animations include `fade-in`/`fade-out` for toast and popover entry/exit, `toast-slide-in` for the notification stack specifically, and `pulse`/`pulse-dot` for live-status indicator dots — reinforcing the "live telemetry" read with a subtle breathing animation rather than a static dot.

## Guardrails
- Never let the cobalt accent (`#2563EB`) spread beyond single controls (nav CTA, focus rings, one gradient badge) — it must stay rationed, not become a field color.
- Do not lighten the background above `#09090B`/`#18181B` — the system's density depends on near-black surfaces throughout, not card-on-white panels.
- Keep all card radii distinct per family (0px flat panels, 16px glass tiles, 24px dark blocks, 9999px pills) — do not normalize them to one radius.
- Preserve the asymmetric navbar inset (256px left / 0px right) and its sharp four-corner geometry — do not convert it to a centered or fully edge-to-edge bar.
- Maintain Plus Jakarta Sans bold-weight uniformity for all UI text; reserve JetBrains Mono strictly for identifier/coordinate tokens, never body copy.
- Do not add photographic or illustrative imagery — the only non-UI graphic surface is the dark vector map canvas.