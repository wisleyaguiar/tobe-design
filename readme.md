# TO/BE Design System

**Company:** TO BE Comunicação — agência de marketing 360º (digital e offline), Brasil.

## Sources used

- `uploads/DESIGN_SYSTEM.md` — written brand spec for **TO BE DASH**, a client-facing analytics/reporting dashboard product the agency builds for its clients. Defines the dark, editorial, "cinematic Bloomberg terminal" visual language, color hex values, type scale, spacing, radius, shadows, and forbidden UI patterns.
- `uploads/LAYOUT - TEMPLATE MODELO POSTS.pdf` — a 7-slide Instagram/social post + content-calendar template (720×405, 16:9), showing the agency's actual real-world post system: red/black full-bleed slides, the serif "TO/BE" wordmark, thin pill-shaped arrow buttons, and a weekday content-calendar grid (SEG/TER/QUA/QUI/SEX/SÁB/DOM, weekend columns shaded). One slide inside the PDF is a client example (Tricard, blue/green) — that is a *client's* branding shown as a usage sample, not TO/BE's own palette, and was not used as a source for these tokens.
- `uploads/logo_ToBe.svg` — the real TO/BE wordmark (vector, serif "TO/BE" with a slash between O and B).
- `uploads/cores_tobe_ps.aco` — Photoshop swatch file confirming red / black / white as the core palette.
- `uploads/DuNord_Bold.otf`, `DuNord_DemiBold.otf`, `DuNord_Medium.otf` — the brand's sans interface typeface (geometric grotesk).
- `uploads/Norman Regular.ttf` — the brand's display serif (matches the logo wordmark and the post templates' headline type).

No Figma file, codebase, or component library was attached — components in this system are an original set, sized to what `DESIGN_SYSTEM.md` explicitly calls for (KPI cards, tables, buttons, inputs, sidebar), not a generic component-library default.

## Two contexts, one visual system

1. **TO/BE the agency brand** — the red/black/serif identity used on its own social templates and content-calendar system (`ui_kits/social-templates/`).
2. **TO BE DASH** — a dashboard product the agency builds for clients, sharing the exact same palette/type/spacing rules but applied to a dark analytics UI (`ui_kits/tobe-dash/`, `components/dashboard/`).

## Typography note

`DESIGN_SYSTEM.md` names "Cormorant Garamond" (serif) and "Inter" (sans) as placeholders. The **real brand fonts were supplied** (Norman = serif/display, DuNord = sans/interface) and are used throughout instead — no Google Fonts substitution was necessary.

## Index

- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radius/shadow/motion), `fonts.css` (`@font-face`).
- `assets/fonts/` — the four brand font files. `assets/logo/logo_ToBe.svg` — the real logo.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups in the Design System tab).
- `components/core/` — **Button**, **Input**.
- `components/dashboard/` — **KpiCard**, **Table**, **Sidebar**, **Sparkline**.
- `ui_kits/tobe-dash/` — TO BE DASH dashboard: Overview / Clientes / Relatórios / Financeiro screens, click-through sidebar nav.
- `ui_kits/social-templates/` — the agency's own Instagram post + content-calendar template, recreated from the PDF.
- `SKILL.md` — portable skill file for Claude Code.

### Components

- **Button** — primary / secondary / ghost, 3 sizes, disabled state.
- **Input** — labeled dark-mode text field.
- **KpiCard** — huge serif number metric tile, used on dashboard overviews.
- **Table** — ultra-clean data table, typography-first, subtle zebra + row hover.
- **Sidebar** — black nav rail with red active-item indicator.
- **Sparkline** — *intentional addition*: `DESIGN_SYSTEM.md` calls for ApexCharts in production; this minimal SVG line chart is a lightweight prototyping stand-in with the same dark/cinematic/red-highlight look.

## Content fundamentals

TO/BE's own copy (from the post templates) is short, declarative, and confident — e.g. the bare wordmark drop and a one-line calendar label. Client-facing copy (seen in the Tricard example slide) is warmer and benefit-led ("veja como é fácil..."), written in Portuguese (PT-BR), informal "você" register. No emoji observed anywhere in the source material. Headlines are set in serif for gravitas; supporting copy in sans for clarity — this pairing itself is a content signal (serif = brand voice/authority, sans = functional/informational).

## Visual foundations

- **Colors:** primary red `#FF2A00` (CTAs, highlights, active states, links, positive numbers), pure black `#050505` (backgrounds, sidebar, hero/premium containers), off-white `#F5F5F5` (text on dark), dark gray `#1A1A1A` (cards/tables/inputs/hover), mid gray `#404040` (borders/dividers/secondary labels), light gray `#B8B8B8` (auxiliary text/placeholders/metadata). Confirmed against the agency's own `.aco` swatch file (red/black/white core triad).
- **Type:** Norman (serif, display/editorial — headings, hero numbers, report covers) + DuNord (sans, interface — forms/tables/buttons/labels/metrics), at Medium/DemiBold/Bold. Scale: H1 72/0.95/-2px tracking, H2 48, H3 32, H4 24, Body 14/1.6, Small 12.
- **Spacing:** multiples of 8 (4 → 128). Generous negative space — the layout should breathe.
- **Backgrounds:** flat, full-bleed color fields (red or black) — no gradients, no photographic textures, no patterns in the agency's own material. Client work (Tricard example) uses flat illustration + subtle zigzag texture, but that is client branding, not TO/BE's own.
- **Animation:** smooth, cinematic, subtle easing (`cubic-bezier(0.4,0,0.2,1)`), ~280ms base duration. Never bounce, never exaggerated. Skeleton loading states preferred over spinners.
- **Hover states:** cards/rows lighten slightly (`--surface-card` → `--surface-card-hover`); buttons darken toward `--accent-hover`; borders switch to accent on input focus.
- **Press states:** no scale/shrink bounce — color shift only, per "never bounce" rule.
- **Borders:** hairline 1px, `--border-subtle` (mid gray) or `--border-hairline` (near-black) — never heavy.
- **Shadows:** one "premium" ambient shadow (`0 10px 40px rgba(0,0,0,.4)`) used sparingly on elevated surfaces; flat cards otherwise.
- **Corner radii:** 0px (preferred) or 4px max. Never pill-shaped, never "rounded and friendly." The one exception is the post template's thin pill-shaped arrow button (from the source PDF) — a deliberate editorial/CTA motif, not a general radius rule.
- **Transparency/blur:** none — "glassmorphism excessivo" is explicitly forbidden.
- **Imagery:** none supplied for the agency's own brand beyond the wordmark; client example imagery (Tricard) is flat vector illustration, not photography — not treated as a TO/BE brand asset.
- **Cards:** flat, 1px hairline border, no rounding beyond 4px, no drop shadow by default (shadow reserved for hero/elevated moments).

## Iconography

No icon font, sprite sheet, or icon SVGs were supplied. `DESIGN_SYSTEM.md` specifies **Lucide Icons** as the required icon library for TO BE DASH — components/UI kits here that need an icon (e.g. the arrow buttons) use plain inline SVG chevrons/arrows matching the post template's thin-stroke style, standing in for Lucide's `ArrowRight`. No emoji or unicode-glyph icons observed or used.

## Caveats — please help me iterate

- **No component library or Figma was attached**, so `Button`, `Input`, `KpiCard`, `Table`, `Sidebar`, `Sparkline` are an original set built strictly from what `DESIGN_SYSTEM.md` names — not a copied inventory. If TO BE DASH already has real screens/components somewhere, attach that source and I'll rebuild against it exactly.
- **Charts are a placeholder.** The brand spec calls for ApexCharts; I built a minimal SVG `Sparkline` instead (no bundler/npm here). Flag if you want a specific chart look replicated.
- **Icons are inline SVG**, standing in for Lucide — happy to wire an actual Lucide CDN import if useful.
- The **Tricard slide** inside the source PDF is a client example, not TO/BE's own brand — excluded from tokens; let me know if I misread its role.

I'd love your read on whether the dashboard direction (KPI cards, tables, sidebar) matches what TO BE DASH actually looks like today, and whether the social-template recreation is close enough to the source PDF to build more slide variants from.
