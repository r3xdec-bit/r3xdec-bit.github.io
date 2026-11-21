---
name: The Modern Scholar
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#514538'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#837567'
  outline-variant: '#d5c4b3'
  surface-tint: '#5b6313'
  primary: '#586111'
  on-primary: '#ffffff'
  primary-container: '#717a29'
  on-primary-container: '#feffdc'
  inverse-primary: '#c3cd73'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fda04d'
  on-secondary-container: '#6e3a00'
  tertiary: '#7a5429'
  on-tertiary: '#ffffff'
  tertiary-container: '#966c3f'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dfea8b'
  primary-fixed-dim: '#c3cd73'
  on-primary-fixed: '#1a1e00'
  on-primary-fixed-variant: '#444b00'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77c'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#ffdcbc'
  tertiary-fixed-dim: '#f0bd89'
  on-tertiary-fixed: '#2c1700'
  on-tertiary-fixed-variant: '#623f16'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
typography:
  display-lg:
    fontFamily: Poppins
    fontSize: 3.5rem
    fontWeight: '600'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Poppins
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.4'
  body-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
---

# Design System Specification: The Modern Scholar

## 1. Overview & Creative North Star
The **Creative North Star** for this design system is **"The Digital Curator."** 

This system rejects the clinical, cold aesthetic of traditional e-learning platforms in favor of a warm, editorial experience that feels like a premium private library. We achieve this by moving away from rigid "boxed" layouts and embracing **Sophisticated Softness**. The experience is defined by expansive white space, intentional asymmetry, and "The Card as Canvas"—a central, high-elevation layout that focuses the learner's attention while floating over a fluid, organic background.

The design breaks the "standard template" look through:
*   **Intentional Layering:** Using tonal depth instead of harsh lines.
*   **Warmth as Logic:** Utilizing olive greens and burnt oranges to guide the eye rather than just "brand colors."
*   **Editorial Spacing:** Treating the screen like a high-end magazine spread, where whitespace is a functional tool for cognitive ease.

---

## 2. Colors & Surface Philosophy
The palette is rooted in an organic, parchment-inspired base (`#F7F7F5`) contrasted with deep academic greens and sun-drenched accent tones.

### Color Strategy
*   **Primary (`#4A5200`):** Represents authority and focus. Used for primary actions and heading highlights.
*   **Secondary (`#D98332`):** Represents energy and progress. Used for accents and significant feedback loops.
*   **Tonal Backgrounds:** We use `surface` through `surface-container-highest` to define space.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning or containers. 
Structure must be defined through color shifts. A `surface-container-low` section sitting on a `background` provides all the edge definition a modern user needs. This eliminates visual noise and keeps the focus on the content.

### The Glass & Gradient Rule
To provide a "signature" feel, main CTAs and decorative background blobs should utilize a gradient transition from `primary` (`#4A5200`) to `secondary_container` (`#ffdbce`). Floating utility panels should use **Glassmorphism**: applying `surface_container_lowest` at 80% opacity with a 16px backdrop-blur to blend the UI with the organic background.

---

## 3. Typography: The Editorial Voice
We utilize a dual-typeface system to balance professional authority with modern accessibility.

*   **Display & Headlines (Poppins):** Chosen for its clean, geometric clarity and contemporary editorial character. `display-lg` (3.5rem) should be used sparingly for high-impact moments, creating an authoritative "entry point" for the user.
*   **Body & Labels (Inter):** The workhorse. Inter provides maximum legibility at smaller scales. `body-md` (0.875rem) is the standard for lesson content, ensuring the learner can consume long-form text without eye strain.

**Hierarchy as Identity:** Use `headline-sm` in `primary` color for section headers to ground the page, while using `label-md` in `on_surface_variant` for metadata to create a clear "Secondary Information" layer.

---

## 4. Elevation & Depth: Tonal Layering
Depth is not a shadow; it is a relationship between surfaces.

*   **The Layering Principle:** Stack surfaces to create focus. Place a `surface_container_lowest` (Pure White) card atop a `surface_container_low` background. This "Soft Lift" is the core of the Modern Scholar aesthetic.
*   **Ambient Shadows:** For floating elements like the central login card or dropdowns, use a shadow with a blur radius of 40px–60px at 6% opacity. The shadow color must be a tint of `on_surface` (`#1a1c1b`) to ensure it looks like a natural occlusion of light, not a digital effect.
*   **The Ghost Border Fallback:** If a boundary is required for accessibility, use the `outline_variant` token at 15% opacity. High-contrast borders are strictly forbidden.

---

## 5. Components

### Buttons
*   **Primary:** A signature gradient from `primary` to `secondary_container`. High roundedness (`full`). Label in `on_primary`. 
*   **Secondary:** `surface_container_lowest` background with a `Ghost Border`. This creates a tactile, pressable feel without the weight of the primary button.
*   **Tertiary:** Text-only in `primary` with a small icon suffix (e.g., `->`) to indicate direction.

### Input Fields
*   **Text Inputs:** Use `surface_container_lowest` with a 12px padding and `md` (0.5rem/level 2) rounded corners. Icons (like `@` or `lock`) should be in `outline` color.
*   **Focus State:** Instead of a heavy border, use a 2px outer glow of `primary` at 20% opacity.

### Cards & Lists
*   **Rule:** Forbid divider lines.
*   **Implementation:** Separate list items using `1rem` of vertical whitespace. For card-based lists (like Course Modules), use a subtle background shift to `surface_container_high` on hover to indicate interactivity.

### Progress Indicators (App-Specific)
*   **The Scholar's Path:** Use a thick (8px) horizontal bar. The "track" is `surface_container_highest` and the "progress" is the primary-to-secondary gradient.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use expansive margins (32px+) around your central card to allow the background to breathe.
*   **Do** use `secondary_fixed_dim` for subtle background highlights behind important text to simulate a "highlighter" effect.
*   **Do** lean into asymmetrical layouts for hero sections—position text to the left and organic, blurred "glass" shapes to the right.

### Don't:
*   **Don't** use pure black `#000000` for text; always use `on_surface` (`#1a1c1b`) for a softer, more premium contrast.
*   **Don't** use sharp corners. Every container must have at least a `md` (0.5rem) radius to maintain the "Friendly Professional" persona.
*   **Don't** use standard "Material Design" blue for links. Use `secondary` (`#D98332`) to maintain the warm, academic color story.
*   **Don't** use icons as the sole communicator; always pair them with Inter `label-md` text for accessibility and clarity.