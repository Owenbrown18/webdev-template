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

## Decap CMS Workflow

This starter ships with [Decap CMS](https://decapcms.org/) preconfigured so non-technical editors can update the YAML content through a friendly UI.

### Prerequisites

- Source code hosted in Git (GitHub assumed below).
- A Netlify account for builds, Identity, and DNS.
- Node 20+ locally (match the `.nvmrc` value if present).

### Previewing the CMS locally

1. Install dependencies and build once: `npm install`.
2. Start the CMS proxy in one terminal: `npx decap-server`.
3. In a second terminal run the dev server: `npm run dev`.
4. Open `http://localhost:4321/admin/index.html?local_backend=true`.
5. Use any email/password to log in (local backend bypasses auth).
6. Publish changes to see them written directly into the YAML files.

Stop both processes with `Ctrl+C` when finished.

### Deploying to Netlify with CMS access

1. Push the project to a GitHub repo.
2. In Netlify, **Import from Git** and select the repo.
3. Build command: `npm run build`; publish directory: `dist`. Leave base directory blank.
4. If Netlify’s default Node version causes build errors, add an `.nvmrc` (e.g., `20`) or `engines.node` field and redeploy.
5. Once the first deploy succeeds, go to **Site settings → Identity**:
   - Enable Identity.
   - Set registration to “Invite only”.
   - Enable **Git Gateway** under Identity → Services.
6. Update `public/admin/config.yml` for production:
   - Remove `local_backend`.
   - Set `site_url` and `display_url` to the deployed domain.
   - Commit and push so the changes deploy.
7. Invite editors via Identity → Users → Invite. They’ll receive an email to set a password.

### Day-to-day editing

- Editors visit `/admin`, log in with Netlify Identity, and use the Decap UI to edit the collections defined in `config.yml`.
- Media uploads are stored in `public/images/uploads`, which get committed to Git.
- Clicking **Publish** creates a commit on the repo, which triggers a fresh Netlify build. Deploys typically complete within a couple of minutes.

### Onboarding a new client site

1. Duplicate this repo (or create a new repo from your template).
2. Customize YAML content and assets locally.
3. Connect the new repo to Netlify with the steps above.
4. Purchase or point the client’s domain to Netlify (Domains → “Add custom domain” and follow DNS instructions).
5. Invite the client via Netlify Identity and share CMS instructions.

### Troubleshooting

- **404 at `/admin` locally**: use the full URL `http://localhost:4321/admin/index.html?local_backend=true`.
- **Login fails in production**: confirm Netlify Identity is enabled and the user has accepted the invite; ensure Git Gateway is on.
- **Build fails with Rollup optional dependency errors**: regenerate `package-lock.json` (`rm -rf node_modules package-lock.json && npm install`) and push, or pin Node to the version used locally.
- **Changes not visible**: check the Netlify Deploys tab—if the build failed, fix the error and redeploy.

## Placeholder Assets

- Replace demo imagery under `public/images/` before shipping.
- Update `content/home.yaml` if you swap out `/media/mainloop.mp4` or switch to an external video provider.

## Suggested Next Steps

- Expand the About page with additional sections (timeline, values, team) using the existing variant pattern.
- Populate `services-list.yaml` with client-specific slugs, imagery, pricing, and CTA destinations.
- Run the production build (`npm run build`) and Lighthouse/axe checks prior to launch for accessibility and performance validation.

This template stays deliberately lean so you can move fast: edit YAML to control layout and messaging, introduce new variants when needed, and keep the codebase approachable for future projects.
