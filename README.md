# Web Template

A content-driven Astro + Tailwind starter tuned for local-service businesses. The goal is to give you a flexible foundation that can be quickly re-skinned and reconfigured for new projects with minimal code changes.

## Highlights

- **Astro + Tailwind** architecture with reusable, variant-driven sections.
- **Structured YAML content** per page (`content/home.yaml`, `content/about.yaml`, `content/contact.yaml`) plus shared datasets (`content/general.yaml`, `content/services.yaml`, `content/testimonials.yaml`).
- **Section registries**: each page component lives under `src/components/<page>/<section>/` with a dispatcher file (e.g., `HeroSection.astro`) and multiple variant implementations (including a `none` option).
- **Central config helpers** (`src/config/content.ts`) and types (`src/types/content.ts`) keep imports typed and consistent.
- **Quick theming**: colors and brand info live in `content/general.yaml`; CTA copy, hero images, etc., live in the page YAML files.

## Content Files

````
content/
├── general.yaml      # global business info (name, contact, address, colors, booking)
├── home.yaml         # homepage sections & variant selections
├── about.yaml        # about page sections
├── contact.yaml      # contact page info/form settings
├── services.yaml     # reusable service entries
└── testimonials.yaml # reusable testimonials
````

Changing copy or swapping layouts is as simple as editing these YAML files.

## Component Structure

````
src/components/
├── home/
│   ├── hero/
│   ├── services/
│   ├── video/
│   ├── testimonials/
│   └── booking/
├── contact/
│   └── info-form/
└── about/
    └── hero/
````

Each folder includes a dispatcher and individual variant files. Add new variants by dropping in a component and registering it in the dispatcher.

## Configuration Helpers

Import from `src/config/content.ts` to access typed content and variant getters.

```ts
import {
  site,
  home,
  contact,
  about,
  services,
  testimonials,
  getSocialLinks,
  getServices,
  getTestimonials,
  getHeroVariant,
  getServicesVariant,
  getVideoVariant,
  getTestimonialsVariant,
  getBookingVariant,
  getContactInfoVariant,
  getAboutHeroVariant,
} from '../config/content';
```

Extend `src/types/content.ts` and add helpers when introducing additional sections or fields.


## Styling

The template relies on Tailwind CSS 3, with base styles imported via `src/styles/globals.css`. Most components use utility classes; when variants need shared styling, it is defined directly in the component. Feel free to extend Tailwind's `tailwind.config.cjs` if you want custom themes or plugin support.

## Usage

1. `npm install`
2. `npm run dev`
3. Update YAML content, toggle `variant` values, or set `none` to hide sections.
4. Add new variants/sections by creating components under `src/components/<page>/<section>/` and wiring their data into the YAML/types.

## Placeholder Assets

- Replace `public/images/hero.jpg` and `public/images/about-hero.jpg` with real imagery.
- Update the video reference in `content/home.yaml` if you move or replace `/media/mainloop.mp4`.

## Suggested Next Steps

- Flesh out additional About sections (timeline, values, team) using the same variant pattern.
- Swap placeholder copy and media for project-specific assets.
- Automate scaffolding if you need to spin up many client sites quickly.

This template is intentionally minimal yet flexible: edit YAML to control layout and messaging, introduce new variants when needed, and keep the codebase clean.

