# Content Access Overview

This template now exposes a single module for working with structured content. Import from `src/config/content` rather than referencing YAML files directly.

```ts
import { site, getServices, getTestimonials, getSocialLinks } from '../config/content';
```

- `site` – strongly typed data from `content/site.yaml`.
- `services` – raw services payload from `content/services.yaml` (rarely needed directly).
- `testimonials` – raw testimonials payload from `content/testimonials.yaml`.
- `getServices()` – returns an array of service entries ready for iteration.
- `getTestimonials()` – returns an array of testimonials ready for iteration.
- `getSocialLinks()` – returns `[key, url]` tuples for headers/footers.

### Adding New Content

1. Update the relevant YAML file in the `content/` directory.
2. If you add new fields, extend the type in `src/types/content.ts`.
3. Expose helpers in `src/config/content.ts` if components need derived data.

Centralising the imports makes it easier to swap storage (e.g., Content Collections or CMS) without touching every component.
