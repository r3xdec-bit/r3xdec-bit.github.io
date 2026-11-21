---
version: "r3xdec design-alpha"
name: "Ivory Grotesk Studio"
description: "Light-mode editorial system on warm off-white, built on oversized Space Grotesk display type, one rationed violet accent, and black full-bleed interruption bands for proof statements."
colors:
  background: "#F2F2F0"
  surface: "#FFFFFF"
  surface-alt: "#E7E7E4"
  text-primary: "#0B0B0B"
  text-secondary: "#0A0A0A"
  text-on-dark: "#FFFFFF"
  accent: "#6751FF"
  accent-soft: "#8878FF"
  border: "#080808"
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: "118px"
    fontWeight: 400
    lineHeight: "0.94"
    letterSpacing: "-7.1px"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "60px"
    fontWeight: 400
    lineHeight: "1.04"
    letterSpacing: "-3px"
  body-md:
    fontFamily: "Space Grotesk"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: "1.55"
  label-md:
    fontFamily: "Space Grotesk"
    fontSize: "34px"
    fontWeight: 400
    lineHeight: "1.1"
    letterSpacing: "-1.2px"
  body-sm:
    fontFamily: "Space Grotesk"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
  accent-sans:
    fontFamily: "Mona Sans"
    fontWeight: 500
  accent-serif:
    fontFamily: "Times New Roman"
    fontStyle: "italic"
spacing:
  base: "12px"
  gap: "32px"
  section-padding: "170px"
rounded:
  control: "14px"
  card: "22px"
  panel: "24px"
  pill: "100px"
  nav: "14px"
components:
  button-hero-primary:
    background: "#0B0B0B"
    text-color: "#FFFFFF"
    radius: "100px"
    height: "64px"
    padding: "0px 8px 0px 30px"
    shadow: "rgba(0, 0, 0, 0.35) 0px 14px 40px -14px"
  button-hero-secondary:
    background: "#FFFFFF"
    text-color: "#0B0B0B"
    radius: "100px"
    height: "64px"
    padding: "0px 8px 0px 30px"
    shadow: "rgba(0, 0, 0, 0.35) 0px 14px 40px -14px"
  button-nav-cta:
    background: "#0B0B0B"
    text-color: "#F2F2F0"
    radius: "100px"
    height: "33px"
  button-filled-mid:
    background: "#0B0B0B"
    text-color: "#F2F2F0"
    radius: "100px"
    height: "52px"
    padding: "0px 24px"
    border: "1px solid rgb(11, 11, 11)"
    hover-background: "#F4F4F2"
    hover-text-color: "#0A0A0B"
  button-outline-mid:
    background: "transparent"
    text-color: "#0B0B0B"
    radius: "100px"
    height: "52px"
    padding: "0px 24px"
    border: "1px solid rgba(11, 11, 11, 0.12)"
  card-project:
    background: "#FFFFFF"
    radius: "0px"
    padding: "12px"
  card-dark-panel:
    background: "linear-gradient(rgb(38, 38, 40), rgb(19, 19, 21))"
    radius: "24px"
    padding: "170px 0px"
    text-color: "#FFFFFF"
  card-accent-chip:
    background: "#EDEDEA"
    radius: "9999px"
    border: "1px solid rgba(11,11,11,0.08)"
---
# Ivory Grotesk Studio
Source: https://aleticiadesigner.vercel.app/?utm_source=Pinterest&utm_medium=organic

## Overview
This is a light, editorial, type-led system — the inverse of dark-mode-default: a warm off-white (`#F2F2F0`) page carries nearly all weight, with ink-black (`#0B0B0B`) doing the typographic heavy lifting and a single violet (`#6751FF`) accent rationed to punctuation words, dots, and dividers. The display face, Space Grotesk, is pushed to a huge 118px/0.94 with aggressive -7.1px tracking, giving the headlines a geometric, grotesque-sans poster quality — closer to Swiss/International discipline than to softness. Occasional italic serif (Times New Roman) interrupts single words inside body copy for emphasis, a quiet editorial wink against the otherwise mono-weight grotesque system. Full-bleed near-black panels puncture the pale field at intervals, functioning as the system's only high-contrast "statement" surface.

## Composition
The first screen is centered and generous: a pill eyebrow, three stacked display lines (the third rendered in violet), a body paragraph capped to a comfortable measure, then a two-button-plus-link cluster, and a marquee ticker closing the fold. Scrolling down, density increases but the grid discipline holds: a project rail with pill-tab filters above a two-up card row; a bio section pairing a portrait against a three-point numbered list separated by hairline rules; a full-bleed black credibility band with an oversized violet numeral; a two-pane estimator (white calculator card beside a violet-numeral output card) directly beneath it; a vertical numbered-step timeline with alternating card offsets; and a closing contact/footer block with chip-style multi-select fields. The deliberate choice is restraint-via-repetition: every section reuses the same pill eyebrow + big headline + thin divider rhythm rather than inventing a new motif per section, trading visual variety for systemic coherence — the cost is that the black band's drama has to carry disproportionate contrast duty since everything else sits in the same tonal register.

## Colors
`#F2F2F0` is the page background, confirmed dominant in the pixel field (~82–92% combined with adjacent near-whites) — this is a paper-toned neutral, not pure white. `#FFFFFF` surfaces (~10% of pixels) mark elevated cards and the nav CTA pill. Near-black `#0B0B0B`/`#0A0A0A` is the primary ink for display type and doubles as a card fill at ~2% page coverage for the one full-bleed proof band. `#6751FF` (with lighter alias `#8878FF`) is the sole accent hue, rationed to: one word per hero headline, eyebrow dots, list-item keywords, a numeral emphasis in the dark band, and output figures in the estimator card — never a fill larger than a chip or glyph. Borders run hairline `#080808` at low opacity for card edges and dividers. Nothing else is colored: icons, secondary buttons, and body copy stay strictly grayscale, keeping violet legible as the single "pay attention here" signal.

## Typography
Space Grotesk is the entire system's typeface — display (118px/400, ls -7.1px), headline (60px/400, ls -3px), label (34px/400, ls -1.2px), and body (21px and 16px/400) — a single grotesque family carrying both poster-scale headlines and small print, unified by its squared, mono-leaning letterforms. Mona Sans appears as a secondary sans weight for smaller interface labels. An italic Times New Roman accent-serif breaks into body paragraphs on isolated words, the system's only serif note, functioning as a quiet editorial emphasis mark rather than a structural face. Hierarchy is built almost entirely through size and tracking rather than weight — all type reads near-regular (400), so scale jumps (16px → 34px → 60px → 118px) do the work normally assigned to bold/black weights.

## Layout
Content is capped at a 1320px max-width with generous 170px section padding, giving the page a slow, breathing rhythm between bands. The project showcase runs a 2-column card grid at 49/49 split with 32px gaps — even rows of matched-width cards, not bento asymmetry. The numbered-process section uses a single-column vertical list (7 items, 56px gap) with a connecting rule, alternating card offset left-right for visual interest within a strict 1-column track. The estimator pairs two unequal panes (41/39 width split, 90px gap) — input card beside a results card. Elsewhere, two-up tile pairs (40px 36px 56px 0px padding, 50/50 split) recur inside bio and detail sections. All corner radii stay sharp (0px) on content cards — roundness is reserved for pills and the dark proof panel (24px) and chip controls (14-22px), creating a clear sharp-card/round-control distinction.

## Components
- **Navbar**: edge-to-edge square bar, 84px tall, full viewport width, 0px radius on all four corners (flat rectangle, not inset or capsule), background transparent, sticky on scroll. Holds 11 items: wordmark left, 6 text nav links center-left, a PT/EN locale toggle, and a nav CTA pill (`#0B0B0B` fill, `#F2F2F0` text, 100px radius, 33px height) at far right.
- **Hero primary button**: an observed near-black solid pill (~#0B0B0B fill, white text, full pill radius, generous left padding before a circular arrow glyph) — this is the single most emphasized control on the first screen, matching the measured 64px-tall, 100px-radius, `padding 0px 8px 0px 30px` button with resting shadow `rgba(0, 0, 0, 0.35) 0px 14px 40px -14px`.
- **Hero secondary button**: a white-filled twin of the same shape (`#FFFFFF` fill, `#0B0B0B` text, same 64px height, 100px radius, same shadow) — an outlined-feeling companion CTA beside the primary, plus a bare underlined text link for tertiary navigation.
- **Mid-page filled button**: `#0B0B0B` fill, `#F2F2F0` text, 100px radius, 52px height, `padding 0px 24px`, 1px solid `#0B0B0B` border; hover inverts to `#F4F4F2` fill with `#0A0A0B` text — used for form submit and secondary CTAs.
- **Mid-page outline button**: transparent fill, `#0B0B0B` text, 100px radius, 52px height, 1px solid `rgba(11,11,11,0.12)` border — used for chip-style filter toggles and tag selectors.
- **Project card grid**: appears in the projects rail; 2 cards per row across multiple rows (49/49 split, 32px gap), `#FFFFFF` fill, 0px radius, 12px padding. Anatomy top-to-bottom: full-bleed screenshot/photo media filling most of the card, then a heading and short body line beneath — a uniform card grid, not bento.
- **Dark proof/credibility panel**: one full-bleed band mid-page, `linear-gradient(rgb(38, 38, 40), rgb(19, 19, 21))` fill, 24px radius, 170px vertical padding. Anatomy: small pill eyebrow, an oversized violet numeral leading into a white headline sentence, a small caption line beneath in muted gray — a singular full-width panel, not repeated.
- **Estimator two-pane card**: a white input card beside a violet-numeral output card (41/39 split, 90px gap). Anatomy: label + numeric field rows stacked with hairline dividers on the input side; label + large violet figure on the output side.
- **Numbered process timeline**: single column, 7 stacked cards (56px gap), connected by a vertical hairline rule with dot markers. Each card: small violet numeral label, heading, short body paragraph, alternating left/right horizontal offset.
- **Icon/expandable list**: 6 full-width rows (100% each), transparent fill, 0px radius, icon + body text per row — an accordion-style disclosure list.
- **Contact/form chips**: pill-shaped multi-select tags (outline-mid style) grouped in rows for category, budget, and timeline selection, plus a textarea and final filled submit button pairing with a WhatsApp-style helper link.
- **Footer**: transparent background, wordmark left, 6 text links right, copyright line — a plain single-row close, no card treatment.

## Graphics & Effects
The only true gradient in the system is the dark panel fill, `linear-gradient(rgb(38, 38, 40), rgb(19, 19, 21))`, covering exactly that one full-bleed credibility band (roughly one viewport's worth mid-page) — the rest of the page stays flat `#F2F2F0`. Smaller violet gradients — `linear-gradient(160deg, rgba(103, 81, 255, 0.14), rgba(0, 0, 0, 0) 70%)`, `linear-gradient(155deg, rgb(103, 81, 255), rgb(59, 43, 184))`, `radial-gradient(120% 90% at 30% 10%, rgb(136, 120, 255) 0%, rgb(59, 43, 184) 45%, rgb(46, 36, 116) 100%)`, and `linear-gradient(150deg, rgba(103, 81, 255, 0.6), rgba(103, 81, 255, 0.18))` — are confined to small decorative glyphs, chip dots, or icon fills, never backgrounds. Shadows are soft and warm-neutral: `rgba(0, 0, 0, 0.35) 0px 14px 40px -14px` lifts the hero buttons off the page; `rgba(0, 0, 0, 0.25) 0px 40px 80px -50px` gives deep ambient lift to elevated cards; a violet glow shadow `rgba(103, 81, 255, 0.14) 0px 0px 0px 4px, rgb(103, 81, 255) 0px 0px 14px 0px` marks focused/active accent states. A `blur(14px)` backdrop-filter appears on floating chip or nav surfaces for a light glass touch. No noise, grain, or pattern texture is visible — surfaces stay flat and clean.

## Motion
Transitions favor a consistent custom easing `cubic-bezier(0.2, 0.7, 0.2, 1)` — a snappy deceleration curve — applied at three speeds: a slow 1.2s for large transform reveals (likely card/image parallax on scroll), 0.5s for border-color and transform state changes, and a fast 0.4s multi-property transition (background-color, color, border-color, transform together) for button hover/press feedback. Named keyframes `corre`, `desce`, and `glitch` suggest horizontal-run, drop-in, and distortion micro-animations used on marquee ticker text, section reveals, and accent glyphs respectively. GSAP with ScrollTrigger drives scroll-triggered reveals of headlines and cards; Lenis smooths scroll momentum, giving the whole page an eased, inertial scroll feel rather than native stepping.

## Guardrails
- Never saturate the full background with the violet gradients — they belong only to small chips, glows, and the icon/numeral accents.
- Keep all content-card radii at 0px; reserve rounding for pills (100px/9999px) and the one dark panel (24px) — rounding every card erases the sharp/round control distinction.
- Do not substitute the glass nav CTA or outline-mid button values for the hero primary — the hero primary is the black 64px pill with the deep offset shadow.
- Preserve Space Grotesk as the only structural typeface; the serif and Mona Sans are accent-only interruptions, never body replacements.
- Keep the dark credibility band singular and full-bleed; it is a rare high-contrast event, not a repeating section style.