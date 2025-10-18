# UI & UX Guidelines

This template favours calm layouts, generous breathing room, and one cohesive surface treatment. Follow the principles below when you extend or customise variants so each page continues to feel part of the same system.

## Core Principles

- Prefer full-width sections; reserve boxed layouts for emphasis or interactivity.
- Keep copy concise. Lead with headings and supporting paragraphs rather than dense blocks.
- Maintain consistent rhythm: `section-shell` handles vertical padding (64px mobile, 88px+ desktop).
- Use eyebrow labels (`section-eyebrow`) sparingly to introduce sections and reinforce hierarchy.

## Design Tokens

Tokens live in `tailwind.config.cjs` and resolve to the brand palette defined in `content/general.yaml`.

| Token/Utility | Usage |
| ------------- | ----- |
| `text-brand-primary`, `bg-brand-primary`, `border-brand-primary/xx` | Primary CTAs, accents, active navigation states. |
| `text-brand-secondary` | Headlines on dark surfaces or secondary emphasis. |
| `text-brand-accent` | Occasional highlights only—avoid overuse. |
| `shadow-card`, `shadow-card-hover` | Default and hover shadows for elevated surfaces. |
| `rounded-surface` | Standard radius shared by cards, spotlight sections, and modals. |

Surface helpers (`bg-surface-base`, `bg-surface-card`, `bg-surface-muted`) respect the CSS variables set in `BaseLayout.astro`; lean on them instead of hard-coding colours.

## Section Building Blocks

| Utility | Purpose |
| ------- | ------- |
| `section-shell` | Section-level padding and background handling. |
| `section-container` | Centers content, caps width at `max-w-6xl`, and manages gutters. |
| `section-intro` | Aligns eyebrow, heading, and intro copy. |
| `section-eyebrow` | Uppercase label styling with brand tint. |
| `section-heading` | Standard H2 treatment. |
| `section-subtitle` | Body copy spacing beneath headings. |

Reuse these utilities instead of re-implementing padding or typography per component—doing so keeps new variants visually aligned.

## Surface Treatments

- `surface-card` is the canonical elevated surface. Pair it with `surface-card-interactive` when the entire card is clickable.
- Default section backgrounds stay on `bg-surface-base`. Introduce gradients or dark surfaces only when a section needs a clear visual break.
- Honour accessibility patterns: interactive elements should include focus rings (`focus-visible:ring-brand-primary/25`) and hover transitions that match existing cards.

## Logos

- The sticky header and footer display the client mark when `brand.logo` is set in `content/general.yaml`. Provide an SVG where possible; otherwise use a transparent PNG around 160–200px wide with sufficient padding.
- Supply meaningful alt text via `brand.logoAlt`. This doubles as the accessible label and should describe the company (e.g., “Local Business Co. logo”).
- When no logo is configured, the layout falls back to the business name—avoid leaving both the logo and alt text blank.

## Page & Variant Notes

- **Services**: grid and list variants both lean on compact cards. The `spotlight` variant combines a `surface-card` wrapper, responsive imagery, and slugged anchors so deep links land with the card heading visible (`scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32`). Maintain those utilities when extending the layout.
- **Home hero**: dark backgrounds should switch the primary CTA to a solid `bg-brand-primary` button and the secondary CTA to an outlined treatment for contrast.
- **Testimonials**: staggered layouts can offset cards, but keep padding, radius, and shadows consistent with `surface-card`.
- **CTA sections**: use gradient backgrounds sparingly and ensure typography mirrors existing spacing (`space-y-4` inside the intro block).

Whenever you deviate from these guidelines (for example, introducing a new surface treatment), leave a brief comment in the component explaining the rationale so future maintainers understand the exception.
