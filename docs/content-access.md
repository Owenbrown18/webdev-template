# Content Access Overview

This template exposes a central module for working with structured content. Import from `src/config/content` instead of referencing YAML files directly.

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

- `site` – global business data from `content/general.yaml` (name, phone, address, colors, booking provider).
- `home` – homepage section settings from `content/home.yaml`.
- `contact` – contact page settings from `content/contact.yaml`.
- `about` – About page content from `content/about.yaml`.
- `services`, `testimonials` – raw YAML payloads for the service/testimonial entries.
- `getServices()` / `getTestimonials()` – safe helpers that always return arrays for iteration.
- `getSocialLinks()` – returns `[key, url]` tuples for headers/footers.
- `getHeroVariant()` / `getServicesVariant()` / `getVideoVariant()` / `getTestimonialsVariant()` / `getBookingVariant()` – resolve the active homepage section variant.
- `getContactInfoVariant()` – resolves the contact page section variant.
- `getAboutHeroVariant()` – resolves the About hero variant.

## Content Files

```
content/
├── general.yaml     # global business info (name, contact, address, colors, booking)
├── home.yaml        # homepage section settings & variant choices
├── about.yaml       # about page sections (hero, story, etc.)
├── contact.yaml     # contact page section settings
├── services.yaml    # reusable services list
└── testimonials.yaml# reusable testimonials list
```

Whenever you add new fields:
1. Update the relevant YAML file.
2. Extend the matching type in `src/types/content.ts`.
3. Expose helpers in `src/config/content.ts` if components need derived data.

## Homepage Variants (`content/home.yaml`)

```yaml
hero:
  variant: classic # Options: classic, split, none
services:
  variant: grid    # Options: grid, list, none
video:
  variant: full    # Options: half, full, none
testimonials:
  variant: stack   # Options: grid, stack, none
booking:
  variant: none    # Options: classic, none
```

Variant implementations live under `src/components/home/<section>/`. Each folder holds:
- a dispatcher (e.g., `HeroSection.astro`) that reads the variant key
- one file per variant (e.g., `HeroClassic.astro`, `HeroSplit.astro`)

Add new variants by dropping a component into the folder and registering it in the dispatcher.

## Contact Page (`content/contact.yaml`)

```yaml
info:
  variant: stacked # Options: standard, stacked, none
  title: "Let's work together"
  intro: "Reach us by phone..."
  phoneLabel: null
  emailLabel: null
```

The dispatcher lives at `src/components/contact/info-form/InfoFormSection.astro` and wires into the variant files (`InfoFormStandard.astro`, `InfoFormStacked.astro`).

## About Page (`content/about.yaml`)

```yaml
hero:
  variant: classic # Options: classic, showcase, none
  title: "Built by neighbors, for neighbors"
  subtitle: "We started as..."
  ctaLabel: "Meet the team"
  ctaHref: "#team"
  image: "/images/about-hero.jpg"
  stats:
    - label: "Years serving"
      value: "12"
```

Variants live in `src/components/about/hero/` with the dispatcher `AboutHeroSection.astro`.

## Component File Structure

Page-specific UI lives in `src/components/<page>/<section>/`. For example, homepage variations are organised under `src/components/home/` with a dispatcher and variant files side by side. Register new variants in the dispatcher so pages can opt into them via the corresponding YAML.

Centralising imports this way makes it easy to swap storage (e.g., content collections or a CMS) without touching every component.
