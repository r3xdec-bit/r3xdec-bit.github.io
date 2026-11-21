---
version: "r3xdec design-alpha"
name: "Heavy-industry amber grid"
description: "High-contrast industrial system pairing a near-black square-cornered frame with a single rationed amber accent, oversized heavy-weight Inter display type, and a dark photographic hero scrim."
colors:
  background: "#1A1A1A"
  surface: "#FFFFFF"
  surface-muted: "#F9FAFB"
  surface-divider: "#E5E7EB"
  text-primary: "#000000"
  text-on-dark: "#FFFFFF"
  text-secondary: "#6B7280"
  text-muted: "#9CA3AF"
  accent: "#FFC300"
  accent-deep: "#003D7A"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "72px"
    fontWeight: 800
    lineHeight: "1"
  headline-md:
    fontFamily: "Inter"
    fontSize: "36px"
    fontWeight: 800
    lineHeight: "1.11"
  body-md:
    fontFamily: "Inter"
    fontSize: "20px"
    fontWeight: 300
    lineHeight: "1.63"
  label-md:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 800
    lineHeight: "1.43"
  body-sm:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "8px"
  gap: "24px"
  section-padding: "96px"
  section-gap: "195px"
rounded:
  control: "2px"
  card: "2px"
  pill: "9999px"
components:
  button-primary:
    background: "#FFC300"
    text-color: "#000000"
    radius: "2px"
    height: "44px"
    hover-background: "#FFC300"
  button-secondary:
    background: "#003D7A"
    text-color: "#FFFFFF"
    radius: "2px"
    height: "44px"
  button-nav-cta:
    background: "#FFC300"
    text-color: "#000000"
    radius: "2px"
    height: "40px"
  card-service:
    background: "#FFFFFF"
    radius: "0px"
    padding: "40px"
    border: "1px solid #E5E7EB"
  card-case-media:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-stat-overlay:
    background: "#003D7A"
    radius: "0px"
    padding: "24px"
    text-color: "#FFFFFF"
---
# Heavy-industry amber grid
Source: https://p.r3xdec design.dev/draft/06f37c0c-a4b7-4a99-bfd6-4eff4fdfde32

## Overview
This is an industrial-corporate system built on Swiss-adjacent rigidity: hard square corners (0px on nearly every card, 2px on controls), a strict 1280px content measure, and a heavy-weight Inter display face doing all the emotional work. It is not minimalist in the editorial sense — it's dense and credential-driven, closer to institutional/engineering branding than a startup aesthetic. The palette is near-monochrome (black, white, warm gray) with a single hot amber accent rationed to CTAs, eyebrows, and numerals, plus one deep navy used exactly once as a secondary action and a stat-callout fill. Photography (construction sites, hands-on technical work) is the only organic texture in an otherwise geometric, grid-locked page.

## Composition
The first screen is a full-bleed dark photographic hero: a muted, desaturated worksite photo sits under a flat dark scrim, with an eyebrow, a three-line 72px headline (one line in amber), a 20px light-weight support paragraph, and two buttons — all left-aligned in the left half of the frame, leaving the photograph's right side and lower third uncovered. Below the fold, rhythm alternates light and dark bands: a white credentials strip, a white services section, a full black case-study band, then a light "commitment" band split 2-up, closing on a near-black footer. This strict light/dark alternation (rather than a continuous single-tone scroll) is the deliberate choice — it lets the black case-study band re-assert the hero's darkness mid-page instead of letting white sections dominate, keeping the industrial, serious tone from softening into a generic SaaS-white page.

## Colors
`#1A1A1A` is the structural dark role — navbar, footer, and one full case-study band — and reads as the page's second-most-present tone after white/off-white card surfaces. White (`#FFFFFF`) and near-white (`#F9FAFB`, `#F3F4F6`) carry the majority of body sections as card and section backgrounds. `#FFC300` is the sole accent: nav CTA, hero headline break, eyebrow dash, underline rule, icons, numeral prefixes, and left-edge rule-marks on checklist rows — never used as a large fill, only as text, thin strokes, or compact button fills. `#003D7A` appears exactly twice — the hero's secondary button and the stat-overlay card — marking it a reserved "secondary emphasis" role, not a repeating accent. Ink is pure `#000000` on light surfaces and `#FFFFFF` on dark; secondary/metadata text sits at `#6B7280` and `#9CA3AF`. Borders on white cards are hairline `#E5E7EB`.

## Typography
Inter carries the entire system at two emotional registers: an 800-weight display/headline register (72px hero, 36px section headings) with tight 1–1.11 line-height for authority, and a 300-weight light-body register (20px) for hero support copy that contrasts deliberately against the display weight. Smaller UI text drops to 400-weight 14px body gray and an 800-weight 14px all-caps label style (nav items, eyebrows, card labels) with wide tracking — this bold all-caps label is the system's structural connective tissue, appearing above nearly every heading.

## Layout
Content is capped at 1280px max-width with 96px section padding and an outsized 195px gap between major sections, giving the page a slow, deliberate scroll rhythm. The services band is a 3-column-feeling row that measures as 4 equal cards (`grid: 4 columns, gap 1px, rows [25/25/25/25]`) — hairline-separated, square-cornered, white-on-white. The commitment band is a 2-column split (`grid: 2 columns, gap 64px, rows [47/47]`) — text block left, photo-with-overlay-card right. The case-study band reads as an asymmetric row: one large text-label slot beside two image cards of roughly equal width — a mosaic/editorial composition, not a uniform grid. The credentials strip above services is a 4-up icon-label row with a vertical divider isolating the leading numeral stat from the three certification badges.

## Components
- **Navbar**: edge-to-edge square bar, 1920px measured width (100% viewport, 0px insets), 81px tall, 0px radius on all four corners, sticky, fill `#1A1A1A`. Contains logo mark + wordmark, 6 nav items (5 text links + sticks as text), and a trailing CTA filled `#FFC300` with `#000000` text, 2px radius, 40px height — this is a nav utility CTA, distinct from the hero primary.
- **Hero primary button**: an observed near-amber/gold solid fill matching `#FFC300` with `#000000` text, ~4px corners (slightly-rounded), sitting left in the button pair under the headline — the single most emphasized control on the first screen.
- **Hero secondary button**: solid `#003D7A` fill, white text, ~4px corners, positioned directly right of the primary — a distinct lower-emphasis action, not a glass or outline treatment.
- **Credentials strip** (light band, below hero): one large amber numeral stat ("14+"-style oversized figure) beside a vertical hairline divider, then 3 icon+label certification entries in a row — icon, bold label line, gray description line each.
- **Service cards** ×4, white fill, 0px radius, 40px padding, 1px hairline border, arranged in one row of 4 equal columns (1px gaps, near edge-to-edge): icon glyph top, bold heading, gray body paragraph, bold amber "saiba mais +" label at the base.
- **Case-study media cards** ×2 (plus one text-only slot), transparent background, 0px radius, no padding, full-bleed photographic image filling the card top-to-bottom with an amber all-caps category label and bold white title overlaid at the lower-left on a dark scrim; arranged beside a large light-gray oversized placeholder word and amber-labeled sector tag in the third "slot."
- **Checklist rows** ×3, transparent, 0px radius, stacked full-width (rows [100/100/100]), each with a thin amber left-edge rule, an icon, a bold heading line, and a gray description line — used in the "commitment" band.
- **Stat overlay card**: solid `#003D7A` fill, 0px radius, overlapping the lower-left corner of the adjacent photograph; oversized white numeral plus a bold amber all-caps caption beneath.
- **Footer**: `#1A1A1A` fill, 0px radius, 11 links organized into labeled columns (quick links, offices, certifications), each column headed by a bold white label with a small amber bullet; logo + social icon row (circular hairline-bordered icon buttons) on the far left; 4 small certification badge chips (white-on-dark bordered rectangles) in the rightmost column; a hairline divider above a closing legal row.

## Graphics & Effects
The hero photograph sits beneath a flat dark scrim, `linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.85))` — effectively a near-opaque single-tone wash rather than a color gradient, covering the full hero image to push contrast up for the white/amber headline; this scrim's tone is the same `#1A1A1A` as the navbar/footer, unifying hero and chrome. This gradient element covers roughly 28.5% of total page pixels (the hero frame), not the whole page. Shadows are restrained and utility-grade: a near-invisible `0px 1px 2px rgba(0,0,0,0.05)` on resting cards, a medium `0px 4px 6px -1px / 0px 2px 4px -2px rgba(0,0,0,0.1)` for slight lift (service cards, stat overlay), and a heavy `0px 25px 50px -12px rgba(0,0,0,0.25)` reserved for the most elevated overlapping element (the stat card floating over the photo). No blur, no glass, no grain — elevation is conveyed through flat shadow steps and hard edges, consistent with the system's square-cornered rigidity.

## Motion
Interactive color and transform changes resolve in 150ms on `cubic-bezier(0.4, 0, 0.2, 1)` — covering color, background-color, border-color, fill/stroke, and generic `all` transitions, giving hovers (nav links, buttons, card labels) a quick, snappy, non-bouncy settle. A slower 700ms transform transition on the same curve is reserved for larger-scale shifts (likely image or card entrance/scale effects), producing a deliberate two-speed motion language: fast for micro-feedback, slow and eased for compositional reveals.

## Guardrails
- Never round the service cards, case-study media, or checklist rows beyond 0px — the system's authority comes from hard edges; only buttons and pills get radius (2px controls, 9999px true pills).
- Never let amber become a large background fill — it is a text/stroke/small-button accent only; large fills stay black, white, or navy.
- Do not substitute a glass or translucent treatment anywhere — this system has zero backdrop-filter or glassmorphism; elevation is flat shadow steps only.
- Keep the hero scrim a flat dark wash, not a multi-hue gradient — color is rationed to text and buttons, not the photograph.
- Preserve the navbar as a full edge-to-edge square bar at 81px — do not inset it or round its corners.
- Reserve `#003D7A` for exactly one secondary button and one stat-callout card; it is not a repeating accent.