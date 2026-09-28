---
name: Nocturne Amber
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d1c4bf'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#6d544b'
  outline-variant: '#3f302b'
  surface-tint: '#ef7a3c'
  primary: '#E86826'
  on-primary: '#ffffff'
  primary-container: '#4a1c06'
  on-primary-container: '#ffdbcd'
  inverse-primary: '#a33e00'
  secondary: '#b7c8e1'
  on-secondary: '#213145'
  secondary-container: '#263545'
  on-secondary-container: '#cbd5e1'
  tertiary: '#f7be1d'
  on-tertiary: '#3f2e00'
  tertiary-container: '#b68a00'
  on-tertiary-container: '#372700'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb596'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#7c2e00'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdf9a'
  tertiary-fixed-dim: '#f7be1d'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5a4300'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 60px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit-2xs: 0.25rem
  unit-xs: 0.5rem
  unit-sm: 0.75rem
  unit-md: 1rem
  unit-lg: 1.5rem
  unit-xl: 2rem
  unit-2xl: 3rem
  unit-3xl: 4rem
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 3rem
  container-max: 80rem
---

## Brand & Style

The design system embodies modern technical refinement, quiet confidence, and sophisticated minimalism. Designed for high-focus environments and prosumer workflows, it delivers an immersive dark canvas where purposeful color cues guide the eye without sensory fatigue. 

By tempering raw neon intensity into a warm, calibrated amber-terracotta tone, the interface shifts from aggressive visual urgency to executive-grade precision. The emotional tone is deliberate, grounded, and welcoming over sustained sessions. The visual grammar leverages generous architectural whitespace, crisp type pairing, subtle surface depth tiers, and tactile edge highlights that feel organic against charcoal and black substrates.

## Colors

The updated chromatic balance softens previous high-saturation friction. The primary color shifts to a curated warm amber-orange (`#e86826`), retaining high clarity and warmth while preventing retinal bloom against low-reflectance backgrounds.

- **Primary (`#e86826`):** Used for focal calls-to-action, key selected states, brand accents, and active focus boundaries. It delivers a rich, ember-like resonance rather than harsh neon.
- **Secondary (`#64748b`):** A neutral cool slate blue providing visual grounding, quiet structural borders, inactive icon accents, and subtle secondary metadata.
- **Tertiary (`#eab308`):** A soft golden amber reserved for warnings, advisory banners, and specialized telemetry highlights.
- **Neutral Stack:** Tiered dark surfaces starting from deep bedrock (`#0e0e0e` to `#131313`) extending upward through soft warm-gray containers (`#1c1b1b` through `#353534`). High-contrast text relies on off-white (`#e5e2e1`) to eliminate harsh black-and-white visual tension.

## Typography

The typography creates a precise dialog between editorial modernism and computational utility:

- **Headlines:** Hanken Grotesk delivers architectural, contemporary authority. Large display formats utilize subtle negative letter-spacing for tight structural cohesion.
- **Body:** Inter governs all continuous reading contexts. Its optimized x-height and neutral aperture ensure comfortable legibility across prolonged interaction on dark surfaces.
- **Metadata and Code:** JetBrains Mono governs tags, data points, status readouts, and micro-labels, providing an engineered, analytical rhythm.

## Layout & Spacing

A strict 8px harmonic scale governs all spacing and alignment structures:

- **Grid:** A 12-column responsive fluid grid on desktop targets a maximum container width of `1280px` (`80rem`) with `24px` (`1.5rem`) gutters. On tablet devices, the grid adapts to 8 columns, collapsing to a 4-column flow on mobile.
- **Margins:** Desktop views enforce `48px` (`3rem`) lateral margins to sustain the spacious, minimalist character. Mobile experiences use `16px` (`1rem`) lateral margins.
- **Section Breaks:** Major architectural divisions use wide vertical offsets (`64px` to `128px`) to allow the muted amber accents and rich charcoal surfaces to breathe unhindered.

## Elevation & Depth

Spatial layering avoids heavy drop shadows, relying instead on surface value stepping, micro-borders, and disciplined optical glows:

- **Base Layer (Level 0):** `#0e0e0e` to `#131313` forms the infinite ground substrate.
- **Surface Elevation (Level 1):** `#1c1b1b` to `#201f1f` with a 1px perimeter border set to `#2a2a2a` or `#353534`.
- **Raised Dialogs & Overlays (Level 2):** `#252525` to `#2a2a2a` accompanied by a refined 1px border (`rgba(255, 255, 255, 0.08)`) and an ultra-diffused atmospheric shadow (`0 20px 40px -15px rgba(0, 0, 0, 0.6)`).
- **Backdrop Blurs:** Persistent headers, dropdown panels, and floating bars apply a translucent surface fill (`rgba(19, 19, 19, 0.75)`) paired with `backdrop-filter: blur(16px)` to integrate background content softly.
- **Accent Illumination:** Active states or focused cards may exhibit a soft amber-tinted bloom (`0 0 24px -4px rgba(232, 104, 38, 0.18)`), introducing warmth without aggressive edge glare.

## Shapes

The system implements a **Soft** shape language (`roundedness: 1`), striking a balance between technical precision and contemporary warmth:

- **Buttons, Inputs, and Badges:** `0.25rem` (4px) baseline radius for tight, responsive control elements.
- **Cards, Panels, and Dialog Containers:** `0.5rem` (8px) radius (`rounded-lg`) to outline discrete operational zones.
- **Flyouts, Drawers, and Floating Banners:** `0.75rem` (12px) radius (`rounded-xl`).
- **Pills and Avatars:** Full rounded (`9999px`) reserved exclusively for user tokens, metric chips, and system status indicators.

## Components

- **Buttons:** 
  - *Primary:* Filled `#e86826` with crisp `#ffffff` typography. On hover, shifts softly toward `#ef7a3c` with a subtle amber ambient aura (`box-shadow: 0 4px 16px rgba(232, 104, 38, 0.25)`). Active click state transitions to `#d45b1c`.
  - *Secondary / Ghost:* Background transparent with a 1px border of `#3f302b` and text in `#e5e2e1`. Hover introduces a warm subtle surface wash (`rgba(232, 104, 38, 0.08)`).
- **Cards & Surfaces:**
  - Standard containers rest on `#1c1b1b` with a 1px outline in `#2a2a2a`. Internal padding is strictly `24px`. Interactive cards respond on hover with a border transition to `#6d544b` and a 1px subtle upward translation.
- **Form Inputs:**
  - Base input background sits at `#191818` framed by a 1px border of `#353534`. Placeholder text uses `#75716b`.
  - Focused inputs illuminate with a 1px border in `#e86826` supported by an outer glow of `0 0 0 3px rgba(232, 104, 38, 0.2)`.
- **Chips & Status Tags:**
  - Rendered in JetBrains Mono (`label-sm`). Neutral chips feature `#201f1f` background with `#cbd5e1` text. Highlight chips utilize an amber tinted tint: background `#4a1c06` with text in `#ffdbcd`.
- **Selection Controls (Checkboxes & Radios):**
  - Unchecked state uses a 1px border of `#5a4137` on `#1c1b1b`.
  - Checked state fills with `#e86826` displaying pure white glyph checkmarks.
- **Lists & Data Tables:**
  - Rows separated by thin dividers (`#201f1f`). Row hover activates a quiet background shift to `#252424` with smooth 150ms transitions.