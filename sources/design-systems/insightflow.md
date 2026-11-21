---
version: "r3xdec design-alpha"
name: "Indigo Console Dark"
description: "Near-black conversational-analytics console with a violet-to-fuchsia gradient accent rationed to primary actions and data bars, glass utility surfaces, and a dense three-pane app shell."
colors:
  background: "#050508"
  surface: "#0F0F1A"
  surface-glass: "rgba(255, 255, 255, 0.05)"
  text-primary: "#E2E8F0"
  text-secondary: "#818CF8"
  accent-primary: "#6366F1"
  accent-secondary: "#A855F7"
  accent-neon: "#3B82F6"
  border-hairline: "rgba(255, 255, 255, 0.05)"
typography:
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.63"
  label-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "1.5"
  label-mono:
    fontFamily: "ui-sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "4px"
  gap: "16px"
  section-padding: "24px"
rounded:
  control: "8px"
  card: "12px"
  input: "6px"
  pill: "9999px"
components:
  button-primary-gradient:
    background: "linear-gradient(to right top, rgb(79, 70, 229), rgb(168, 85, 247))"
    text-color: "#E2E8F0"
    radius: "12px"
    height: "40px"
    padding: "0px"
    shadow: "rgba(79, 70, 229, 0.2) 0px 10px 15px -3px, rgba(79, 70, 229, 0.2) 0px 4px 6px -4px"
    hover: "transform matrix(1.05, 0, 0, 1.05, 0, 0)"
  button-glass-utility:
    background: "rgba(255, 255, 255, 0.05)"
    text-color: "#E2E8F0"
    radius: "8px"
    height: "33px"
    padding: "8px 0px"
    border: "1px solid rgba(255, 255, 255, 0.05)"
    hover-background: "rgba(255, 255, 255, 0.1)"
  button-ghost-outline:
    background: "transparent"
    text-color: "#E2E8F0"
    radius: "12px"
    height: "42px"
    padding: "12px 16px"
    border: "1px solid rgba(255, 255, 255, 0.05)"
    hover-background: "rgba(99, 102, 241, 0.05)"
  button-ghost-thin-border:
    background: "transparent"
    text-color: "#E2E8F0"
    radius: "12px"
    height: "42px"
    padding: "10px 0px"
    border: "1px solid rgba(255, 255, 255, 0.1)"
  card-message-panel:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-chart-surface:
    background: "#0F0F1A"
    radius: "12px"
    padding: "24px"
    border: "1px solid rgba(255, 255, 255, 0.05)"
    shadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
---
# Indigo Console Dark
Source: https://p.r3xdec design.dev/draft/88b42415-cd38-4f60-9db6-1fca72d2b866

## Overview
This is a dark-mode-default analytical console styled as chat-driven software rather than a marketing surface: a three-pane app shell (left rail, center transcript, right context panel) over a near-black field (`#050508`, ~47% declared area, matching the ~44% black + ~25% near-black-blue pixel-field reading). The identity is carried by a single indigo-to-fuchsia gradient rationed to the highest-priority action and to data-bar fills, glass (`rgba(255,255,255,0.05)` + `blur`) utility chrome, and hairline borders (`rgba(255,255,255,0.05–0.1)`) that separate panels without heavy dividers. Typography is a single humanist sans, Plus Jakarta Sans, doing all work from body copy to labels — there is no serif or display interruption; hierarchy comes from weight and color (`#E2E8F0` primary ink vs `#818CF8` violet-tinted secondary ink), not size jumps.

## Composition
The first screen is dominated by a full-width edge-to-edge navbar, then a two-column split: a ~245px-wide left session rail (search-less list of recent threads) and a wide center transcript column capped by a right-hand context rail (~240px) holding data-source status, recommended actions, and semantic tag chips. Vertical rhythm inside the transcript alternates: a user query bubble (right-aligned, gradient-tinted) → a system "processing" glass card exposing raw query text in a mono-styled block → a prose answer paragraph → a bordered chart card → a feedback/utility row. This is a deliberately dense, utility-first density (compact 4/8/16px spacing, 14px body copy) rather than a spacious marketing rhythm — the alternative of large whitespace and oversized type is explicitly rejected in favor of maximizing visible working context, consistent with a professional data-tool register.

## Colors
Background is `#050508` (also tokened `--bg-deep`), reading as near-full-black across the pixel field with a faint blue cast (`#000018` ~25%) and a faint magenta cast (`#180018` ~9%) — evidence of the two corner radial washes rather than any flat gradient fill. `#0F0F1A` (`--bg-surface`) lifts chart cards and panels one elevation step above the page. `#6366F1` (indigo, `--accent-primary`) and `#A855F7` (violet, `--accent-secondary`) are rationed to exactly: the primary button's gradient fill, its shadow tint (`rgba(79,70,229,0.2)`), data-bar fills in the chart, chip borders/labels in the right rail, and two subtle corner-anchored radial washes. `#3B82F6` (`--accent-neon`) exists as a declared token but is not visibly dominant on this screen — reserve it for a possible future interactive-state accent. `#E2E8F0` and `#FFFFFF` carry all text; `#818CF8` is used specifically for secondary/muted copy. Borders are uniformly `rgba(255,255,255,0.05–0.1)` hairlines — never a solid gray — keeping all structure translucent against the black.

## Typography
Single-family system: Plus Jakarta Sans throughout, no accent serif or mono display face — code/query text uses the same sans at reduced size inside the glass processing card rather than switching families. Body copy sits at 14px/400/1.63 line-height (`body-md`), giving loose, legible paragraph rhythm despite the small size. Labels and headings step up to 16px/600/1.5 (`label-md`) — a modest one-step jump, not a dramatic display leap, reinforcing the utility register. Primary ink is `#E2E8F0`/`#FFFFFF`; secondary/muted ink is the violet-tinted `#818CF8`, used for timestamps, chart units, and helper copy.

## Layout
The shell is a fixed three-column holy-grail-adjacent layout: full-width 64px navbar, then left rail + fluid center + right rail, with the center column further capped at roughly 768px content max-width for message and chart legibility. Spacing runs on a tight 4/8/12/16/24/32px scale. The chart card inside the transcript uses a bar-grid anatomy: two grouped bars per month across three months (six bars total, alternating indigo/fuchsia by region), each bar-pair reading as a small paired-column card composition rather than a full card grid — the measured "card family" rows (85% | 85% width) describe two near-full-width stacked blocks (the query card and the chart card), not a multi-column grid. Right-rail chip cluster wraps as a cluster layout, not a grid. Corner radii scale by component role: 6px inputs, 8px small controls, 12px cards/buttons, pill/9999px reserved for tag chips.

## Components
- **Navbar**: edge-to-edge square bar, 64px tall, 100% viewport width, 0/0/0/0 corner radii (sharp full-bleed rectangle, not inset or capsule), background `#050508`, static/non-glass, holding 9 items (logo mark + wordmark, ~5 top-level nav labels, and right-side database-status + avatar controls).
- **Primary CTA (send/submit control)**: the small square icon-button at the foot of the composer is the highest-contrast, most emphasized action on screen — solid `linear-gradient(to right top, rgb(79,70,229), rgb(168,85,247))` fill, `#E2E8F0` icon, 12px radius, 40px height, 0px padding, resting shadow `rgba(79,70,229,0.2) 0px 10px 15px -3px, rgba(79,70,229,0.2) 0px 4px 6px -4px`, hover scales to `matrix(1.05,0,0,1.05,0,0)`. This is the hero primary — never substitute a glass button here.
- **Glass utility button** (e.g. "更换数据源" panel action): `rgba(255,255,255,0.05)` fill, `#E2E8F0` text, 8px radius (slightly-rounded), 33px height, 8px/0px padding, 1px `rgba(255,255,255,0.05)` border; hover fill deepens to `rgba(255,255,255,0.1)`. Located in the right context rail.
- **Ghost outline buttons** (×3, e.g. recommended-action rows/nav secondary items): transparent fill, `#E2E8F0` text, 12px radius, 42px height, 12/16px padding, 1px `rgba(255,255,255,0.05)` border; hover background `rgba(99,102,241,0.05)`.
- **Ghost thin-border button** (single instance, likely a top-utility or session action): transparent fill, `#E2E8F0` text, 12px radius, 42px height, 10/0px padding, slightly stronger 1px `rgba(255,255,255,0.1)` border.
- **User query bubble**: right-aligned, gradient-tinted rounded rectangle carrying the user's prompt text, sits above the system response — top of transcript rhythm.
- **System processing card**: glass surface with a small icon badge (gradient-filled square), containing a monospace-styled query/code block; appears once per response cycle directly beneath the user bubble.
- **Chart card** (data visualization surface): `#0F0F1A` background, 12px radius, 24px padding, 1px hairline border, `rgba(0,0,0,0.25) 0px 25px 50px -12px` shadow; top-left eyebrow/title + unit label pair, top-right download and expand icon controls, body is a six-bar grouped bar chart (three month-pairs, indigo vs. fuchsia), x-axis labels beneath each bar. One per assistant answer.
- **Session list item (left rail)**: icon + single-line label rows, stacked list layout, one active/highlighted state per session; no border between items, spacing-only separation.
- **Semantic tag chips (right rail)**: small pill-shaped (9999px) label chips with `#` prefix text, clustered/wrapped in a cluster layout, indigo-toned border/text.
- **Feedback/utility row** (beneath chart): inline row of three low-emphasis text+icon controls (helpful / not-helpful / copy) — no visible border or fill, ghost text buttons only.
- **Composer bar**: full-width input field at page bottom with placeholder guidance text, attachment icon at left, primary gradient send-button at right; sits on the page background with a hairline top border separating it from the transcript.

## Graphics & Effects
Two soft corner radial washes cover the full page but at near-zero visible opacity: `radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.1) 0px, rgba(0, 0, 0, 0) 50%)` (top-left, indigo) and `radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.1) 0px, rgba(0, 0, 0, 0) 50%)` (top-right, fuchsia) — these account for the faint blue/magenta pixel-field casts, not a saturated hero gradient; the page reads overwhelmingly flat black. A `linear-gradient(to top, rgb(5,5,8), rgb(5,5,8), rgba(0,0,0,0))` covers roughly 9.3% of the page as a bottom scrim, likely fading the transcript into the composer bar. A subtle `linear-gradient(rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)` covers ~7.7% of the page as a top-to-bottom sheen on panel/card surfaces. The primary-button gradient (`linear-gradient(to right top, rgb(79,70,229), rgb(168,85,247))`) covers only ~0.1% of the page — confirming it is a small control fill, not a background. Glass panels use `backdrop-filter: blur(12px)` (compact controls) and `blur(24px)` (larger overlay-style panels). Shadow language is soft and diffuse throughout: `0px 25px 50px -12px` for elevated cards, `0px 10px 15px -3px / 0px 4px 6px -4px` tightened pairs for buttons and smaller surfaces, with color-tinted shadow (`rgba(79,70,229,0.2)`) reserved for the gradient CTA to make it visually "glow" against the black field.

## Motion
Interactive state changes use a fast, consistent `all 0.15s cubic-bezier(0.4, 0, 0.2, 1)` easing (a snappy ease-in-out) for hover fills, border colors, and background transitions; a narrower property-scoped variant (`color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1)`) covers text/icon color shifts specifically. Opacity-only reveals (e.g. incoming message/card fade-in) use a quick `opacity 0.1s ease-in`. The primary button's hover scale (`matrix(1.05,0,0,1.05,0,0)`) is the system's one springy/overshoot-adjacent moment — everything else is a flat, fast utility transition, reinforcing the tool-like, non-decorative motion character.

## Guardrails
- Never fill the hero or full page background with the indigo/fuchsia gradient — it is a ~0.1% control fill and two ~10%-opacity corner washes only; the field must stay black-dominant.
- Never render the navbar as inset, centered, or pill-shaped — it is a sharp, edge-to-edge, 0-radius, 64px bar.
- Keep the gradient CTA and the glass utility button visually distinct: the gradient button is the sole hero-primary action; glass buttons (`rgba(255,255,255,0.05)`) are secondary/utility only.
- Do not introduce a second typeface for code, labels, or accents — the entire system runs on Plus Jakarta Sans.
- Preserve hairline `rgba(255,255,255,0.05–0.1)` borders as the only structural dividers; do not upgrade them to solid gray borders.
- Keep chart bars paired by category (indigo vs. fuchsia) rather than uniform-colored — the two-tone bar pairing is the chart's signature.