import type { AboutContent, ServicesContent, SiteContent, TestimonialsContent } from '../types/content';
import siteSource from '../../content/site.yaml';
import servicesSource from '../../content/services.yaml';
import testimonialsSource from '../../content/testimonials.yaml';
import aboutSource from '../../content/about.yaml';

/**
 * Centralised accessors for all content data. Components and pages should import from here
 * rather than reaching into the /content directory directly.
 */

export const site = siteSource as SiteContent;
export const services = servicesSource as ServicesContent;
export const testimonials = testimonialsSource as TestimonialsContent;
export const about = aboutSource as AboutContent;

/**
 * Returns social entries as [key, url] tuples. Use for rendering the footer or contact sections.
 */
export const getSocialLinks = () => Object.entries(site.socials ?? {});

/**
 * Returns the services array, always providing an array so components can map safely.
 */
export const getServices = () => (Array.isArray(services.items) ? services.items : []);

/**
 * Returns the testimonials array, normalising empty payloads to an empty array.
 */
export const getTestimonials = () => (Array.isArray(testimonials.items) ? testimonials.items : []);

/** Returns the hero layout key specified in content, defaulting to "classic". */
export const getHeroVariant = () => site.layout?.hero?.trim?.().toLowerCase?.() || 'classic';

/** Returns the services layout key specified in content, or "grid" by default. */
export const getServicesVariant = () => {
  const raw = site.layout?.services?.trim?.().toLowerCase?.() || 'grid';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the video layout key, defaulting to "half". */
export const getVideoVariant = () => {
  const raw = site.layout?.video?.trim?.().toLowerCase?.() || 'half';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the testimonials layout key, defaulting to "grid". */
export const getTestimonialsVariant = () => {
  const raw = site.layout?.testimonials?.trim?.().toLowerCase?.() || 'grid';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the booking layout key, defaulting to "classic". */
export const getBookingVariant = () => {
  const raw = site.layout?.booking?.trim?.().toLowerCase?.() || 'classic';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the contact info/form layout key, defaulting to "standard". */
export const getContactInfoVariant = () => {
  const raw = site.layout?.contactInfo?.trim?.().toLowerCase?.() || 'standard';
  return raw === 'none' ? 'none' : raw;
};

export const getAboutHeroVariant = () => {
  const raw = about.hero?.variant?.trim?.().toLowerCase?.();
  return raw === 'none' ? 'none' : raw || 'classic';
};
