# Content Access Overview

Use `src/config/content` as the single entry point for structured data. It normalises YAML payloads, exposes useful getters, and keeps consumer components type-safe.

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

- `site` – global business data from `content/general.yaml` (name, phone, address, brand colors, logo, footer copy).
- `home` – homepage section settings from `content/home.yaml`.
- `contact` – contact page configuration from `content/contact.yaml`.
- `about` – About page content from `content/about.yaml`.
- `servicesPage` – Services page layout and copy from `content/services.yaml`.
- `services`, `testimonials` – raw datasets (`content/services-list.yaml`, `content/testimonials.yaml`).
- `getServices()` / `getTestimonials()` – safe helpers that always return arrays.
- `getSocialLinks()` – returns `[key, url]` tuples for headers/footers.
- Variant getters (`getHeroVariant()`, `getServicesVariant()`, `getServicesCatalogVariant()`, etc.) resolve the active layout for each section and respect `"none"` as a valid option.

## Content Files

````text
content/
├── general.yaml        # global business info (name, contact, address, brand palette, logo)
├── home.yaml           # homepage section settings & variant choices
├── about.yaml          # about page sections
├── contact.yaml        # contact page section settings
├── services.yaml       # services page configuration (overview, catalog, highlights, CTA)
├── services-list.yaml  # reusable service entries (title, summary, slug, pricing, media)
└── testimonials.yaml   # reusable testimonials list
````

When you add new fields:
1. Update the relevant YAML file.
2. Extend the matching type in `src/types/content.ts`.
3. Expose helpers in `src/config/content.ts` if components need derived or normalised data.

### Brand Settings (`content/general.yaml`)

```yaml
brand:
  logo: "/images/loading-logo.png" # Optional logo (SVG/PNG recommended)
  logoAlt: "Local Business Co. mark"
```

Header, footer, and the optional preloader all reference these fields. If `brand.logo` is omitted, the layout falls back to text-only branding.

### Home Page Variants (`content/home.yaml`)

```yaml
hero:
  variant: classic   # Options: classic, split, none
services:
  variant: list      # Options: grid, list, spotlight, none
video:
  variant: full      # Options: half, full, none
testimonials:
  variant: grid      # Options: grid, stack, none
booking:
  variant: classic   # Options: classic, none
```

Variant implementations live under `src/components/home/<section>/`. Each folder contains a dispatcher (e.g., `HeroSection.astro`) plus one component per variant (`HeroClassic.astro`, `HeroSplit.astro`, etc.). Register new variants in the dispatcher map so YAML can opt into them.

### Services Page (`content/services.yaml`)

```yaml
catalog:
  variant: spotlight # Options: grid, list, spotlight, none
  eyebrow: "Service catalog"
  title: "Detailed service roadmaps"
```

`ServicesSpotlight.astro` renders one service per card and aligns with the slugged anchors from `services-list.yaml`. When adding new services, provide a unique `slug` so home-page links can deep-link to the correct card (`/services#slug`).

### Contact Page (`content/contact.yaml`)

```yaml
info:
  variant: stacked   # Options: standard, stacked, none
  title: "Let's work together"
  intro: "Reach us by phone..."
```

Variants live at `src/components/contact/info-form/` and are wired through `InfoFormSection.astro`.

### About Page (`content/about.yaml`)

```yaml
hero:
  variant: showcase  # Options: classic, showcase, none
  title: "Built by neighbors, for neighbors"
  ctaLabel: "Meet the team"
  image: "/images/about-hero.jpg"
```

Components reside in `src/components/about/hero/` with `AboutHeroSection.astro` managing variant selection.

## Component File Structure

All page-level UI lives in `src/components/<page>/<section>/`. Centralising imports through `src/config/content` means you can swap storage layers (e.g., Astro content collections or a headless CMS) without rewriting section components—only the config module needs to change.
