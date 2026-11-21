---
version: alpha
name: "Memorables"
description: "A dark ground, with no accent colour. Small rounded corners; flat surfaces with no shadows; content held to 1312px. Measured by Skiss from memorabl.es on 2026-11-18."
colors:
  primary: "#FFFFFF"
  background: "#000000"
  on-background: "#9E9EFF"
  on-surface: "#FFFFFF"
  on-surface-variant: "#6F6FB3"
  surface: "#141414"
  outline: "#161624"
  on-primary: "#000000"
typography:
  headline-display:
    fontFamily: "Satoshi, sans-serif"
    fontSize: 132px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: "Satoshi, sans-serif"
    fontSize: 100px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.04em
  headline-md:
    fontFamily: "Satoshi, sans-serif"
    fontSize: 76px
    fontWeight: 700
    lineHeight: 1.1
  body-lg:
    fontFamily: "Satoshi, sans-serif"
    fontSize: 58px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.1em
  body-md:
    fontFamily: "Satoshi, sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.1em
  body-sm:
    fontFamily: "Satoshi, sans-serif"
    fontSize: 39px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0.1em
  label-sm:
    fontFamily: "Satoshi, sans-serif"
    fontSize: 33px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0.1em
rounded:
  md: 10px
  lg: 35px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 32px
  container: 1312px
  margin-desktop: 64px
components:
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.02)"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
    height: 38px
  button-secondary-hover:
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  card:
    backgroundColor: "{colors.surface}"
    rounded: 20px
---

# Memorables

## Overview

A dark ground, with no accent colour. Small rounded corners; flat surfaces with no shadows; content held to 1312px.

Every value in this file was measured by Skiss from memorabl.es’s live CSS on 2026-11-18, off its real elements, on desktop (1440px) and on a phone (390px). A few steps are worked out between measured ones, and the sections below say which.

**Page structure:**
- Hero: left-aligned headline.
- Sections: feature grid, gallery, about 4 a page.
- Footer: link columns.

## Colors

Colour tokens use the format’s recommended names. The page’s own roles:

- **primary (`#FFFFFF`):** No accent colour and no filled button measured: the ink stands in.
- **background (`#000000`):** The ground most of the page sits on.
- **on-background (`#9E9EFF`):** Running text on the ground.
- **on-surface (`#FFFFFF`):** Headings, a colour of their own: different from the running text on purpose.
- **on-surface-variant (`#6F6FB3`):** Muted text: captions, secondary lines.
- **surface (`#141414`):** A raised surface: cards and bands set off from the ground.
- **outline (`#161624`):** Dividers and borders, worked out from the text and the ground.
- **on-primary (`#000000`):** Words on the primary: whichever of the page’s colours reads best on it (21:1).

Running text on the ground: 8.8:1; muted text: 4.6:1.

## Typography

- **Headings:** Satoshi, free to use.
- One face sets headings and text.

| Token | Size | Weight | Line height | Tracking | Source |
| --- | --- | --- | --- | --- | --- |
| `headline-display` | 132px | 700 | 1.1 | -0.04em | worked out |
| `headline-lg` | 100px | 700 | 1.1 | -0.04em | worked out |
| `headline-md` | 76px | 700 | 1.1 |  | worked out |
| `body-lg` | 58px | 700 | 1.1 | 0.1em | worked out |
| `body-md` | 44px | 700 | 1.1 | 0.1em | measured |
| `body-sm` | 39px | 700 | 1.15 | 0.1em | worked out |
| `label-sm` | 33px | 700 | 1.15 | 0.1em | worked out |

## Layout

Spacing runs on a 4px base: 4px, 8px, 12px, 16px, 20px, 32px.
Content is held to 1312px wide.
There’s no column grid in the code: content runs in stacked rows inside the container. Don’t invent a 12-column grid.
At 1440px wide, content starts 64px in from each edge.

## Elevation & Depth

Flat: no shadows on cards or buttons. Depth comes from fills and lines (`surface` against `background`).

## Shapes

- `md`: 10px
- `lg`: 35px

Buttons take 10px corners.

## Components

- **`button-secondary`** (Secondary button): a see-through fill (#FFFFFF at 2%, over whatever is behind it), text #FFFFFF, 10px corners, padding 10px 16px, 15px weight 500 type, 38px tall.
  - Hover: fill #FFFFFF 10%. Pressed: as hover. Keyboard focus: fill #FFFFFF 10%. Changes ease over 250ms (cubic-bezier(0.215, 0.61, 0.355, 1)).
- **`card`** (Card): fill #141414, 20px corners.
- **Top-bar links:** #9E9EFF. Hover: nothing changes in its CSS.
- **Keyboard focus:** no ring in the site’s CSS (one drawn in script isn’t measured).

Borders, shadows and focus rings aren’t properties in the format, so they’re only in the lines above.

## Do's and Don'ts

- Do build on a dark ground (#000000).
- Do hold content to 1312px.
- Don’t invent a 12-column grid: the site has no column grid in the code and lays content out in stacked rows inside the container.
- Don’t lean on shadows: the site keeps surfaces flat; separate with fills and lines.
- Do set headings in #FFFFFF and running text in #9E9EFF: they’re different colours on purpose.
- Do keep the site’s gradient fills, as in `linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 3.19%, rgba(0, 0, 0, 0.04) 6.37%, rgba(0, 0, 0, 0.08) 9.56%, rgba(0, 0, 0, 0.137) 12.74%, rgba(0, 0, 0, 0.208) 15.93%, rgba(0, 0, 0, 0.298) 19.11%, rgba(0, 0, 0, 0.396) 22.3%, rgba(0, 0, 0, 0.5) 25.49%, rgba(0, 0, 0, 0.608) 28.67%, rgba(0, 0, `.
- Do keep text at 4.5:1 or more on its fill (the site’s running text is 8.8:1).
- Don’t add what the site doesn’t have: no grain or noise overlays, rotating or scrolling text, decorative shapes, blobs, numbered section labels, or extra motion. The restraint is part of the look.
- Wherever the page needs a photo or video, use a real one. Never stand in shapes, gradient boxes or placeholder art.

## Known Gaps

- Measured from the home page only, at two widths (1440px and 390px).
- Not measured: success, warning and error colours; dark mode; motion; icons and illustration; form fields (none on the page with a fill or a border).
- Type steps marked “worked out” sit between measured ones, not on the page itself.
- H1 is a 32px label; no display size.
- Reference only: pass on patterns and tokens, never the site’s images, copy or font files.
