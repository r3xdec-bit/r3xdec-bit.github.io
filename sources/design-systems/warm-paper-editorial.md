---
version: "r3xdec design-alpha"
name: "Warm-paper editorial"
description: "Light, warm-paper editorial system built on serif display headlines, a single rationed ink-black pill accent, and a hairline-ruled single-column essay list."
colors:
  background: "#FAF8F4"
  surface: "#FFFFFF"
  text-primary: "#111111"
  text-secondary: "#6F6A60"
  text-soft-ink: "#2A2925"
  accent: "#111111"
  border: "#E7E0D6"
  border-soft: "#E8E1D8"
typography:
  display-lg:
    fontFamily: "__Playfair_Display_745915"
    fontSize: "56px"
    fontWeight: 400
    lineHeight: "1.14"
    letterSpacing: "-0.9px"
  headline-md:
    fontFamily: "__Lora_464a5b"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "1.65"
    letterSpacing: "2px"
  body-md:
    fontFamily: "__Lora_464a5b"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "__Playfair_Display_745915"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "-0.5px"
  accent-serif-italic:
    fontFamily: "Playfair Display"
    fontStyle: "italic"
    note: "italic serif interruption used mid-headline and for attributed source names"
spacing:
  base: "8px"
  gap: "22px"
  section-padding: "48px"
  stack-gap: "40px"
  tight-gap: "14px"
  micro-gap: "18px"
rounded:
  control: "6px"
  card: "4px"
  pill: "9999px"
components:
  button-primary:
    background: "#111111"
    text-color: "#FAF8F4"
    radius: "9999px"
    height: "52px"
    padding: "0px 30px"
    hover-background: "#2A2925"
  input-email:
    background: "#FFFFFF"
    border: "1px solid #E7E0D6"
    radius: "9999px"
    height: "52px"
    text-color: "#6F6A60"
  essay-list-row:
    background: "transparent"
    radius: "0px"
    padding: "40px 0px"
    border-bottom: "1px solid #E7E0D6"
  about-card:
    background: "transparent"
    radius: "0px"
    padding: "0px"
---
# Warm-paper editorial
Source: https://justinwelsh.me/

## Overview
This is a light, warm-paper editorial system — a quiet counter-aesthetic to dark-mode-default SaaS: a cream page (`#FAF8F4`), near-black ink text, and a single serif display face carrying all emphasis. It reads as Swiss-adjacent restraint crossed with literary-magazine typesetting: one hairline rule style, no shadows beyond a single soft card shadow, no gradients, no glass. The entire visual identity is carried by type contrast (serif display vs. serif body vs. small-caps tracked labels) rather than color or imagery.

## Composition
The first screen is a centered, left-aligned editorial block: a two-line serif headline, a one-line body subhead, an inline email-capture molecule, then a stacked testimonial list with small-caps eyebrow. Below the fold the page runs as a single bounded column (max-width 600px) alternating: a free-resource banner with a right-floated small media card, a "most popular" list of hairline-divided rows, a "recent essays" continuation of the same row pattern, an about-the-author two-column split, and a closing repeat of the email-capture molecule before a plain-text footer. Density is low and generous — large paragraph gaps (40/48px) separate every section, never tight. The deliberate choice is a single continuous vertical list for all essay content (no card grid, no shadowed containers) rather than a boxed card grid — this keeps the page reading like a printed index rather than a dashboard.

## Colors
`#FAF8F4` (warm paper) is the background and covers the dominant share of the page per the pixel field (~94% of rendered pixels fall near this register). `#111111` is the sole ink/accent role — it is text, the one filled button, and the navbar's dark-mode toggle icon; it is never used as a background field, only as foreground ink or a small filled control, which is how the accent stays rationed. `#6F6A60` is secondary/muted text (subheads, metadata, bylines, placeholder text). `#2A2925` appears only as the hover-darkened state of the black button. `#E7E0D6`/`#E8E1D8` are hairline rule colors separating list rows and bounding the email input. White (`#FFFFFF`) is reserved for small elevated surfaces — the input field and the free-resource preview card. No hue beyond this near-monochrome warm-neutral/ink pairing exists anywhere on the page; color is deliberately absent as a signal — hierarchy comes entirely from type size and weight.

## Typography
Display headlines set in Playfair Display at 56px/400, line-height 1.14, tight tracking (-0.9px) — a classic serif with visible contrast between thick and thin strokes, used only for the hero headline, essay titles, and large pull-statements. Body copy and UI labels run in Lora (humanist serif) at 18px/400 for paragraphs and a tracked, small-caps 14px/600 with 2px letter-spacing for eyebrow labels ("MOST POPULAR ESSAYS"-style all-caps kickers). A mid-size Playfair Display label (32px/500) marks secondary headings within content bands. Italic Playfair Display is the signature accent — it interrupts two or three words within a sentence (a proper-noun or single emphasized word per occurrence) at the same size as the surrounding text, repeated roughly once per section wherever a quoted source or a time-of-week phrase appears; it is a weight-of-voice device, not a size device.

## Layout
Content is bound to a 600px max-width single column, centered, with no multi-column card grid anywhere on the page — the "most popular essays" and "recent essays" sections are both vertical stacks of full-width rows (rows **[100 | 100 | 100]** and **[100 | 100]** respectively), each row a heading + supporting body-text pair separated by a 1px hairline rule, with generous 40px vertical padding per row and 0px horizontal padding. The about-the-author block is a two-column asymmetric grid (avatar column + text column, gap 48px, row split roughly 64/30 by content weight). The closing email-capture band is a tighter two-column grid (gap 36px, rows roughly 27/68) pairing a compact heading against a wider supporting line. Spacing throughout uses an uneven but intentional scale — 48, 40, 22, 18, 14, 8px — favoring large inter-section gaps over a strict 8px baseline grid. The system is fundamentally a list layout, not a card grid: nothing here is a bento, masonry, or uniform card arrangement.

## Components
- **Navbar**: edge-to-edge square bar, full viewport width (0px side inset), 75px tall, sticky, background `#FAF8F4`, square corners (0/0/0/0 — no rounding, no floating inset). 6 items: a circular avatar mark + wordmark lockup on the left, three text nav links center-right, a search-icon button, and a circular dark-mode toggle button on the far right. No secondary button beside the toggle; there is no nav CTA button — the toggle is the only nav-right control.
- **Button — primary (hero CTA)**: the solid black pill beside the hero email field is the primary action on the first screen — `background: #111111`, `text-color: #FAF8F4`, `radius: 9999px` (full pill), `height: 52px`, `padding: 0px 30px`, hover darkens to `#2A2925`. This same filled-pill black button repeats as the free-resource download CTA and the closing footer-band subscribe CTA — three instances total, each a full pill, each the single highest-contrast element in its section.
- **Input — email field**: paired beside every primary button (×3 total instances), white fill, 1px `#E7E0D6` border, full pill radius (9999px), 52px height, muted placeholder ink `#6F6A60`.
- **Testimonial list (hero)**: no card surface — transparent background, stacked vertically, each entry a quotation line in body serif followed by an attribution line in italic Playfair Display; small-caps tracked eyebrow label sits above the group.
- **Free-resource banner**: a content band pairing a left text column (tracked eyebrow label, Playfair display heading, italic subhead, black pill CTA) against a right-floated small white media card — radius ~4px, drop shadow `rgba(20, 16, 10, 0.12) 0px 10px 28px 0px` — containing a miniature screenshot-style preview with its own micro heading and byline text.
- **Essay list rows (×2 sections, 3 rows then 3+ rows)**: transparent background, 0px radius, 40px vertical / 0px horizontal padding, full-width (100% rows stacked), each row's internal anatomy top-to-bottom: small-caps category eyebrow, Playfair Display headline, one-line Lora body description, then a metadata line (issue number · date · reading-time) in muted ink; a single hairline `#E7E0D6` rule divides each row from the next.
- **About-author card**: transparent, 0px radius, two-column anatomy — a square portrait photo on the left, tracked eyebrow label + body paragraph + text link ("Read more"-style arrow link) on the right; no border, no shadow, no fill.
- **Footer**: transparent background, plain-text copyright line plus 8 links arranged in two centered rows (primary site links on one row, social links below), no dividers, no columns, no logo repetition — pure minimal text footer on the page background.

## Graphics & Effects
There is no gradient, mesh, noise, or texture anywhere on this page — the system is flat matte paper color throughout, confirming the near-monochrome warm-neutral pixel field. The only elevation device is a single soft drop shadow, `rgba(20, 16, 10, 0.12) 0px 10px 28px 0px`, applied to the small free-resource preview card — it is the sole shadow in the entire system and should not be reused elsewhere (list rows, buttons, and the navbar are all flat with zero shadow). Hairline rules (`#E7E0D6`, `#E8E1D8`) are the only other depth cue, used to separate list rows and the about/footer sections. No image treatment, scrim, or photographic background exists; the single portrait and the single preview-card thumbnail are the only raster images on the page.

## Motion
Interaction motion is restrained and utilitarian: `transform 0.22s ease-out` for pressed/hover transform shifts (likely the button and row-hover states), `all 0.3s ease-in-out` for broader state changes, `color, background-color 0.15s ease` and `border-color 0.15s ease` for hover/focus color transitions on buttons, links, and inputs. No scroll-triggered reveal, no parallax, and no looping animation is implied by the evidence beyond these short, snappy, sub-300ms ease transitions — motion exists only to soften discrete state changes (hover, focus), never as a structural storytelling device.

## Guardrails
- Never introduce a gradient, mesh background, or glassmorphic blur — this system is flat matte paper with zero translucency.
- Never place the black accent as a background fill larger than a button or icon chip — it is foreground ink and a small pill fill only, never a section background.
- Never convert the essay rows into a boxed/shadowed card grid — they are borderless, full-width, hairline-divided list rows.
- Never round the navbar corners or inset it from the viewport edge — it is a square, edge-to-edge, 75px sticky bar.
- Never substitute a sans-serif for the display headline role — Playfair Display carries all large-scale emphasis and italics; Lora carries body and tracked labels only.
- Keep shadow usage to the single defined value on the one small preview card; do not add shadow to buttons, rows, or the navbar.