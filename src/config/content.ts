import type { ServicesContent, SiteContent, TestimonialsContent } from '../types/content';
import siteSource from '../../content/site.yaml';
import servicesSource from '../../content/services.yaml';
import testimonialsSource from '../../content/testimonials.yaml';

/**
 * Centralised accessors for all content data. Components and pages should import from here
 * rather than reaching into the /content directory directly.
 */

export const site = siteSource as SiteContent;
export const services = servicesSource as ServicesContent;
export const testimonials = testimonialsSource as TestimonialsContent;

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
