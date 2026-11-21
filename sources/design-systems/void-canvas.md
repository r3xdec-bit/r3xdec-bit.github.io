---
version: "r3xdec design-alpha"
name: "Void canvas"
description: "An unrendered blank-page state: a pure white field with no visible structure, color, or type — only an inferred loading mechanism signaled by named keyframes."
colors:
  background: "#FFFFFF"
  surface: "#FFFFFF"
  text-primary: "#000000"
  text-secondary: "#000000"
  accent: "#000000"
typography:
  body-md:
    fontFamily: "system default"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.5"
spacing:
  base: "8px"
  gap: "0px"
  section-padding: "0px"
rounded:
  control: "0px"
  card: "0px"
  pill: "9999px"
components:
  button-primary:
    background: "#FFFFFF"
    text-color: "#000000"
    radius: "0px"
    height: "0px"
  loader-spinner:
    background: "transparent"
    text-color: "#000000"
    radius: "9999px"
    height: "0px"
---
# Void canvas
Source: https://pth5.qmai.cn/mp-monorepo-h5/web/index.html

## Overview
The captured state is a fully unpainted viewport: a single uninterrupted white field with zero visible chrome, type, imagery, or color. No navigation, hero, card, or footer has rendered. The only evidence of an authored system is two keyframe animation names present in the document — `fb_transform` and `rotateSpinner` — which point to a transform-driven entrance effect and a rotating loader, neither of which has painted a pixel in this capture. This is a pre-paint or loading-gate state, not a designed blank canvas.

## Composition
There is no compositional hierarchy to report: the viewport is edge-to-edge white at every sampled scroll position, top to bottom. No section rhythm, density, or grid is observable. The one deliberate fact available is negative: nothing has been allowed to paint before its data or assets are ready, rejecting the alternative of showing a skeleton layout, placeholder chrome, or a static shell beneath the loader.

## Colors
The pixel field is ~100% `#FFFFFF`, so background and surface both take that value with total confidence — this is the dominant and only measured background. The sole other color candidate is `#000000`, measured as "text ink," which is assigned to text-primary, text-secondary, and accent as the only dark value available, though no glyph is actually visible in the capture. No accent hue, gradient, or semantic color (danger/success/warning) is present or inferable; everything beyond black-on-white is unsupported by evidence and is intentionally left out.

## Typography
No typeface, size, weight, or hierarchy is rendered or measurable. A single body-level token is declared using system-default stacks at a conventional 16px/400 baseline purely as a structural placeholder; no display, label, or accent-serif/mono face can be asserted from this evidence.

## Layout
No grid, column system, max-width container, or spacing rhythm is visible — the page is a flat, unstructured white rectangle at every captured viewport height. No responsive behavior can be inferred since no breakpoint-dependent structure has painted.

## Components
- **Loading mechanism (inferred, not visually confirmed):** appears nowhere visibly in the screenshots, but is the only component with system evidence — two keyframe animations, `fb_transform` (a transform-based entrance, likely translate/scale/rotate on a container) and `rotateSpinner` (a continuously rotating loader, the classic indeterminate-spinner pattern). Count and placement are unknown; by convention such a spinner would be a small centered circular element, but no size, color, or position is measurable here, so none is asserted beyond this note.
- No navbar, button, card, footer, or any other family has rendered pixels in this capture; none can be cataloged without inventing evidence.

## Graphics & Effects
No gradient, scrim, texture, grain, shadow, or elevation is visible anywhere in the field — it is flat, uniform white with no tonal variation at all. No image, canvas, or video surface has painted.

## Motion
Two named keyframe animations exist in the underlying code: `fb_transform` and `rotateSpinner`. `rotateSpinner` is characteristic of an indeterminate loading spinner — a continuous, linear-feeling 360° rotation loop, typically `linear` easing, duration commonly in the 0.6–1.2s range for this pattern, looping infinitely until content is ready. `fb_transform` suggests a one-shot transform-based reveal (translate and/or scale) applied to an element as it enters, consistent with a fade/slide-in of content once loading completes. Neither animation's duration, easing, or trigger is given numerically in the evidence, so no fabricated timing values are provided.

## Guardrails
- Do not invent a hero, navbar, or any content layout — the only truthful rebuild of this capture is a blank white viewport.
- Do not assign decorative color, gradients, or imagery; the measured field is 100% white with black as the only secondary value.
- Do not fabricate type sizes, weights, or a font family beyond a neutral system-default placeholder.
- Preserve the two named keyframes (`fb_transform`, `rotateSpinner`) as the system's only confirmed motion identity — render them as an unobtrusive rotating loader and a transform-based content reveal, not as decorative or large-scale animation.
- Do not add shadows, borders, or elevation — none exist in the evidence.