# UI & UX Guidelines

This template favors lightweight sections, generous spacing, and a single primary surface treatment so that each page feels calm even when several sections are stacked. Follow these principles when you add or update variants.

## Core Principles

- Prefer full-width, low-chrome sections and reserve boxed cards for emphasis or interactive elements.
- Keep copy blocks short; lean on headings and supporting text rather than long paragraphs.
- Maintain consistent rhythm: default section padding uses `section-shell` (64px mobile, 88px+ desktop).
- Use eyebrow labels sparingly (`section-eyebrow`) to introduce sections and reinforce hierarchy.

## Design Tokens

Tokens live in `tailwind.config.cjs` and resolve to the brand colors defined in `content/general.yaml`.

| Token | Usage |
| ----- | ----- |
| `text-brand-primary`, `bg-brand-primary`, `border-brand-primary/xx` | Primary actions, accents, active nav states. |
| `text-brand-secondary` | Headlines on dark surfaces or secondary emphasis. |
| `text-brand-accent` | Occasional highlights only; avoid overuse. |
| `shadow-card`, `shadow-card-hover` | Default and hover states for elevated surfaces. |
| `rounded-surface` | Standard radius for cards and key containers. |

Surface color utilities: `bg-surface-base`, `bg-surface-card`, and `bg-surface-muted` are available via Tailwind (these honor the CSS variables set in `BaseLayout.astro`).

## Section Building Blocks

| Utility | Purpose |
| ------- | ------- |
| `section-shell` | Vertical padding for full sections. |
| `section-container` | Centers content; caps width at `max-w-6xl` with responsive gutters. |
| `section-intro` | Aligns section headings and copy. |
| `section-eyebrow` | Uppercase label with brand coloring. |
| `section-heading` | Standard H2 styling. |
| `section-subtitle` | Body copy padding under headings. |

Apply these classes instead of duplicating inline utility stacks inside each component. This keeps future variants aligned automatically.

## Surface Treatments

- `surface-card` supplies the default elevated surface for cards and testimonials; combine with `surface-card-interactive` for links or buttons that lift on hover/focus.
- Default section backgrounds should stay on `bg-surface-base`. Introduce darker or accent backgrounds only when a section needs a strong break.
- Maintain hover/focus parity. When you add an interactive element, use the provided hover and focus ring utilities (`focus-visible:ring-brand-primary/25`) to keep accessibility consistent.

## Content & Variant Notes

- Services: the list variant uses `surface-card` for each item; grid variants should follow the same surface rules.
- Testimonials: staggered layouts can offset cards horizontally, but padding, radius, and shadows should still come from the shared utilities.
- Heroes: when using a dark hero, ensure button treatments swap to `bg-brand-primary` on the primary CTA and a bordered button for the secondary CTA.

Document any departures from these rules inside the component file so future maintainers understand the exception.
