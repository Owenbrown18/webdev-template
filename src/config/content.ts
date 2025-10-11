import type {
  AboutContent,
  ContactContent,
  HomeContent,
  ServicesContent,
  SiteContent,
  TestimonialsContent,
} from '../types/content';
import generalSource from '../../content/general.yaml';
import homeSource from '../../content/home.yaml';
import contactSource from '../../content/contact.yaml';
import aboutSource from '../../content/about.yaml';
import servicesSource from '../../content/services.yaml';
import testimonialsSource from '../../content/testimonials.yaml';

/**
 * Centralised accessors for all content data. Components and pages should import from here
 * rather than reaching into the /content directory directly.
 */

export const site = generalSource as SiteContent; // global business info
export const home = homeSource as HomeContent;
export const contact = contactSource as ContactContent;
export const about = aboutSource as AboutContent;
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

/** Returns the hero layout key specified in home content, defaulting to "classic". */
export const getHeroVariant = () => home.hero?.variant?.trim?.().toLowerCase?.() || 'classic';

/** Returns the services layout key specified in home content, or "grid" by default. */
export const getServicesVariant = () => {
  const raw = home.services?.variant?.trim?.().toLowerCase?.() || 'grid';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the video layout key, defaulting to "half". */
export const getVideoVariant = () => {
  const raw = home.video?.variant?.trim?.().toLowerCase?.() || 'half';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the testimonials layout key, defaulting to "grid". */
export const getTestimonialsVariant = () => {
  const raw = home.testimonials?.variant?.trim?.().toLowerCase?.() || 'grid';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the booking layout key, defaulting to "classic". */
export const getBookingVariant = () => {
  const raw = home.booking?.variant?.trim?.().toLowerCase?.() || 'classic';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the contact info/form layout key, defaulting to "standard". */
export const getContactInfoVariant = () => {
  const raw = contact.info?.variant?.trim?.().toLowerCase?.() || 'standard';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the about hero layout key, defaulting to "classic". */
export const getAboutHeroVariant = () => {
  const raw = about.hero?.variant?.trim?.().toLowerCase?.();
  return raw === 'none' ? 'none' : raw || 'classic';
};

/** Returns the about values layout key, defaulting to "grid". */
export const getAboutValuesVariant = () => {
  const raw = about.values?.variant?.trim?.().toLowerCase?.() || 'grid';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the about timeline layout key, defaulting to "steps". */
export const getAboutTimelineVariant = () => {
  const raw = about.timeline?.variant?.trim?.().toLowerCase?.() || 'steps';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the about team layout key, defaulting to "grid". */
export const getAboutTeamVariant = () => {
  const raw = about.team?.variant?.trim?.().toLowerCase?.() || 'grid';
  return raw === 'none' ? 'none' : raw;
};
