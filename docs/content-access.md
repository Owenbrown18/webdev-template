# Content Access Overview

This template now exposes a single module for working with structured content. Import from `src/config/content` rather than referencing YAML files directly.

```ts
import {
  site,
  getServices,
  getTestimonials,
  getSocialLinks,
  getHeroVariant,
  getServicesVariant,
  getVideoVariant,
  getTestimonialsVariant,
  getBookingVariant,
  getContactInfoVariant,
  about,
  getAboutHeroVariant,
} from '../config/content';
```

- `site` – strongly typed data from `content/site.yaml`.
- `services` – raw services payload from `content/services.yaml` (rarely needed directly).
- `testimonials` – raw testimonials payload from `content/testimonials.yaml`.
- `getServices()` – returns an array of service entries ready for iteration.
- `getTestimonials()` – returns an array of testimonials ready for iteration.
- `getSocialLinks()` – returns `[key, url]` tuples for headers/footers.
- `getHeroVariant()` – resolves the hero layout key (defaults to `classic`).
- `getServicesVariant()` – resolves the services layout key (defaults to `grid`).
- `getVideoVariant()` – resolves the homepage video block layout key (defaults to `half`).
- `getTestimonialsVariant()` – resolves the testimonials layout key (defaults to `grid`).
- `getBookingVariant()` – resolves the booking embed layout key (defaults to `classic`).
- `getContactInfoVariant()` – resolves the contact info/form layout key (defaults to `standard`).
- `about` – structured data from `content/about.yaml`.
- `getAboutHeroVariant()` – resolves the about hero layout key (defaults to `classic`).
- `getContactInfoVariant()` – resolves the contact info/form layout key (defaults to `standard`).

### Adding New Content

1. Update the relevant YAML file in the `content/` directory.
2. If you add new fields, extend the type in `src/types/content.ts`.
3. Expose helpers in `src/config/content.ts` if components need derived data.

### Choosing Section Variants

Sections can be swapped by editing `content/site.yaml` under the `layout` block. Example:

```yaml
layout:
  hero: split
  services: list
  video: half
  testimonials: stack
  booking: none
  contactInfo: stacked

about:
  hero:
    variant: showcase
```

Available hero variants:

- `classic` – full-bleed background image with overlay CTA
- `split` – light card with image panel and address highlight

Add new variants by creating components in `src/components/home/hero/` and updating the registry inside `src/components/home/hero/HeroSection.astro`.

Available services variants:

- `grid` – card grid (default)
- `list` – vertical list cards
- `none` – omit the section entirely

Add services variants via `src/components/home/services/` and register them in `src/components/home/services/ServicesSection.astro`.

Available video variants:

- `half` – compact spotlight (default)
- `full` – larger showcase video
- `none` – remove the video section

Add video variants through `src/components/home/video/` and register them in `src/components/home/video/VideoSection.astro`.

Available testimonials variants:

- `grid` – two-column cards (default)
- `stack` – offset stacked testimonials
- `none` – remove the testimonials section

Add testimonials variants through `src/components/home/testimonials/` and register them in `src/components/home/testimonials/TestimonialsSection.astro`.

Available booking variants:

- `classic` – iframe embed with heading/description (default)
- `none` – remove the booking section

Add booking variants in `src/components/home/booking/` and register them inside `src/components/home/booking/BookingSection.astro`.

Available contact info variants (contact page):

- `standard` – two-column layout with info card and form (default)
- `stacked` – summary card above the form
- `none` – remove the info/form block (renders nothing)

Add contact variants in `src/components/contact/info-form/` and register them in `src/components/contact/info-form/InfoFormSection.astro`.

## About Page Content

Edit `content/about.yaml` to configure About page sections. Example:

```yaml
hero:
  variant: classic
  title: "Built by neighbors, for neighbors"
  subtitle: "We started as..."
  ctaLabel: "Meet the team"
  ctaHref: "#team"
  image: "/images/about-hero.jpg"
  stats:
    - label: "Years serving"
      value: "12"
```

Available About hero variants:

- `classic` – split layout with stats and supporting image
- `showcase` – full-bleed image with overlay copy
- `none` – remove the hero section

Variants live under `src/components/about/hero/` with the dispatcher `AboutHeroSection.astro`.

Centralising the imports makes it easier to swap storage (e.g., Content Collections or CMS) without touching every component.

### Component File Structure

Page-specific UI lives in `src/components/<page>/<section>/`. For example, homepage variations are organised under `src/components/home/` with a dispatcher (`HeroSection.astro`) alongside its variant files (`HeroClassic.astro`, `HeroSplit.astro`, etc.). Register new variants in the dispatcher for that section so pages can opt into them through `content/site.yaml`.
