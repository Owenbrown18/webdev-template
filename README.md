# Web Template

A content-driven Astro + Tailwind starter for local-service businesses. The project is built so you can reskin and reconfigure entire pages by editing YAML—no JSX refactors required.

## Highlights

- **Astro + Tailwind** foundation with reusable, variant-driven sections.
- **Structured YAML content** per page (`content/home.yaml`, `content/about.yaml`, `content/contact.yaml`) plus shared datasets for services, testimonials, and brand info.
- **Section registries** (`src/components/<page>/<section>/`) that expose dispatcher files and variant implementations—set `variant: none` in YAML to disable a section.
- **Central config helpers** (`src/config/content.ts`) and shared types (`src/types/content.ts`) so components stay typed and consistent.
- **Brand-ready navigation** with optional logo support wired into the sticky header, footer, and preloader.
- **Deep-link ready services catalog** powered by dedicated slugs, including a full-width `spotlight` layout for richer storytelling.

## Content Files

````text
content/
├── general.yaml        # global business info (name, contact, brand colors, logo, footer)
├── home.yaml           # homepage sections & variant selections
├── about.yaml          # about page sections
├── contact.yaml        # contact page info/form settings
├── services.yaml       # services page configuration (overview, catalog, highlights, CTA)
├── services-list.yaml  # reusable service entries (title, summary, slug, media)
└── testimonials.yaml   # reusable testimonials
````

Update copy, imagery, or layout choices directly in these files. When adding new fields, extend the matching type in `src/types/content.ts` and expose helpers from `src/config/content.ts`.

### Service Anchors

Each entry in `content/services-list.yaml` includes a `slug`. Home-page “Our Services” cards link to `/services#<slug>`, and the services catalog assigns matching anchors so visitors land at the exact spotlight card.

### Brand Logo

Set `brand.logo` (and its accompanying `brand.logoAlt`) in `content/general.yaml` to surface a client mark in both the sticky header and footer. SVG assets scale best; transparent PNGs at roughly 160×48px also render cleanly. If no logo is provided, the template gracefully falls back to the business name.

## Component Structure

````text
src/components/
├── home/
│   ├── hero/
│   ├── services/        # grid, list, spotlight variants
│   ├── video/
│   ├── testimonials/
│   └── booking/
├── services/
│   ├── catalog/
│   ├── highlights/
│   ├── testimonials/
│   └── cta/
├── contact/
│   └── info-form/
└── about/
    └── hero/
````

Each section folder exports a dispatcher (`*Section.astro`) that picks a variant based on YAML. Add new variants by dropping in a component and registering it in the dispatcher map.

## Configuration Helpers

Import from `src/config/content.ts` to access typed content, variant getters, and convenience utilities.

```ts
import {
  site,
  home,
  contact,
  about,
  services,
  servicesPage,
  testimonials,
  getSocialLinks,
  getServices,
  getTestimonials,
  getHeroVariant,
  getServicesVariant,
  getServicesCatalogVariant,
  getVideoVariant,
  getTestimonialsVariant,
  getBookingVariant,
  getContactInfoVariant,
  getAboutHeroVariant,
} from '../config/content';
```

## Styling

Tailwind CSS 3 handles styling with shared tokens and utilities declared in `tailwind.config.cjs` and `src/styles/globals.css`.

- Brand hues (e.g., `text-brand-primary`) originate from `content/general.yaml`.
- Section scaffolding classes (`section-shell`, `section-container`, `section-eyebrow`, etc.) maintain rhythm and spacing consistency.
- Elevated surfaces (`surface-card`, `surface-card-interactive`) standardise radius, shadows, and focus states across cards, testimonials, and spotlight sections.

See `docs/ui-guidelines.md` for detailed design guidance.

## Usage

1. `npm install`
2. `npm run dev`
3. Update YAML content, choose `variant` values, or set `none` to hide sections.
4. Add new variants/sections by creating components under `src/components/<page>/<section>/`, updating types, and wiring the data in YAML.

## Placeholder Assets

- Replace demo imagery under `public/images/` before shipping.
- Update `content/home.yaml` if you swap out `/media/mainloop.mp4` or switch to an external video provider.

## Suggested Next Steps

- Expand the About page with additional sections (timeline, values, team) using the existing variant pattern.
- Populate `services-list.yaml` with client-specific slugs, imagery, pricing, and CTA destinations.
- Run the production build (`npm run build`) and Lighthouse/axe checks prior to launch for accessibility and performance validation.

This template stays deliberately lean so you can move fast: edit YAML to control layout and messaging, introduce new variants when needed, and keep the codebase approachable for future projects.
