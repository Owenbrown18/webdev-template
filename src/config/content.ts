import type {
  AboutContent,
  ContactContent,
  DesignTokensContent,
  HomeContent,
  ServicesListContent,
  ServicesPageContent,
  SiteContent,
  TestimonialsContent,
} from '../types/content';
import generalSource from '../../content/general.yaml';
import homeSource from '../../content/home.yaml';
import contactSource from '../../content/contact.yaml';
import aboutSource from '../../content/about.yaml';
import servicesListSource from '../../content/services-list.yaml';
import servicesPageSource from '../../content/services.yaml';
import testimonialsSource from '../../content/testimonials.yaml';
import designSource from '../../content/design.yaml';
import { normalizeBackgroundTone } from '../utils/background';

/**
 * Centralised accessors for all content data. Components and pages should import from here
 * rather than reaching into the /content directory directly.
 */

export const site = generalSource as SiteContent; // global business info
export const home = homeSource as HomeContent;
export const contact = contactSource as ContactContent;
export const about = aboutSource as AboutContent;
export const services = servicesListSource as ServicesListContent;
export const servicesPage = servicesPageSource as ServicesPageContent;
export const testimonials = testimonialsSource as TestimonialsContent;
export const design = designSource as DesignTokensContent;

export const getDesignTokens = () => design ?? {};

/**
 * Returns social entries as [key, url] tuples. Use for rendering the footer or contact sections.
 */
export const getSocialLinks = () => Object.entries(site.socials ?? {});

/**
 * Returns the services array, always providing an array so components can map safely.
 */
export const getServices = () => (Array.isArray(services.items) ? services.items : []);

export const getServicesPageMetadata = () => servicesPage.metadata ?? {};

/**
 * Returns the testimonials array, normalising empty payloads to an empty array.
 */
export const getTestimonials = () => (Array.isArray(testimonials.items) ? testimonials.items : []);

export const getServicesHeroBackgroundTone = () => getBackgroundTone(servicesPage.hero?.background?.tone);
export const isServicesHeroAnimationEnabled = () => isAnimationEnabled(servicesPage.hero?.animation);

export const getServicesOverviewBackgroundTone = () =>
  getBackgroundTone(servicesPage.overview?.background?.tone);
export const isServicesOverviewAnimationEnabled = () =>
  isAnimationEnabled(servicesPage.overview?.animation);

export const getServicesHighlightsVariant = () => {
  const raw = servicesPage.highlights?.variant?.trim?.().toLowerCase?.() || 'columns';
  return raw === 'none' ? 'none' : raw;
};
export const getServicesHighlightsBackgroundTone = () =>
  getBackgroundTone(servicesPage.highlights?.background?.tone);
export const isServicesHighlightsAnimationEnabled = () =>
  isAnimationEnabled(servicesPage.highlights?.animation);

export const getServicesTestimonialsVariant = () => {
  const raw = servicesPage.testimonials?.variant?.trim?.().toLowerCase?.() || 'grid';
  return raw === 'none' ? 'none' : raw;
};
export const getServicesTestimonialsBackgroundTone = () =>
  getBackgroundTone(servicesPage.testimonials?.background?.tone);
export const isServicesTestimonialsAnimationEnabled = () =>
  isAnimationEnabled(servicesPage.testimonials?.animation);

export const getServicesCatalogVariant = () => {
  const raw = servicesPage.catalog?.variant?.trim?.().toLowerCase?.();
  if (!raw) {
    return getServicesVariant();
  }
  return raw === 'none' ? 'none' : raw;
};
export const getServicesCatalogBackgroundTone = () =>
  getBackgroundTone(servicesPage.catalog?.background?.tone);
export const isServicesCatalogAnimationEnabled = () =>
  isAnimationEnabled(servicesPage.catalog?.animation);

export const getServicesFaqBackgroundTone = () => getBackgroundTone(servicesPage.faq?.background?.tone);
export const isServicesFaqAnimationEnabled = () => isAnimationEnabled(servicesPage.faq?.animation);

export const getServicesCtaBackgroundTone = () => getBackgroundTone(servicesPage.cta?.background?.tone);
export const isServicesCtaAnimationEnabled = () => isAnimationEnabled(servicesPage.cta?.animation);

/** Returns the hero layout key specified in home content, defaulting to "classic". */
export const getHeroVariant = () => home.hero?.variant?.trim?.().toLowerCase?.() || 'classic';

/** Returns the statement layout key specified in home content, defaulting to "centered". */
export const getStatementVariant = () => {
  const raw = home.statement?.variant?.trim?.().toLowerCase?.() || 'centered';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the services layout key specified in home content, or "grid" by default. */
export const getServicesVariant = () => {
  const raw = home.services?.variant?.trim?.().toLowerCase?.() || 'grid';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the services hero layout key, defaulting to "showcase". */
export const getServicesHeroVariant = () => {
  const raw = servicesPage.hero?.variant?.trim?.().toLowerCase?.() || 'showcase';
  return raw === 'none' ? 'none' : raw;
};

const getBackgroundTone = (value?: string | null) => normalizeBackgroundTone(value);
const isAnimationEnabled = (value?: boolean | null) => value !== false;

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

/** Returns the about process layout key, defaulting to "steps". */
export const getAboutProcessVariant = () => {
  const raw = about.process?.variant?.trim?.().toLowerCase?.() || 'steps';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the about timeline layout key, defaulting to "steps". */
export const getAboutTimelineVariant = () => {
  const raw = about.timeline?.variant?.trim?.().toLowerCase?.() || 'steps';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the about community layout key, defaulting to "cards". */
export const getAboutCommunityVariant = () => {
  const raw = about.community?.variant?.trim?.().toLowerCase?.() || 'cards';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the about founders layout key, defaulting to "spotlight". */
export const getAboutFoundersVariant = () => {
  const raw = about.founders?.variant?.trim?.().toLowerCase?.() || 'spotlight';
  return raw === 'none' ? 'none' : raw;
};

/** Returns the about team layout key, defaulting to "grid". */
export const getAboutTeamVariant = () => {
  const raw = about.team?.variant?.trim?.().toLowerCase?.() || 'grid';
  return raw === 'none' ? 'none' : raw;
};

export const getHeroBackgroundTone = () => getBackgroundTone(home.hero?.background?.tone);
export const getStatementBackgroundTone = () => getBackgroundTone(home.statement?.background?.tone);
export const getFeaturedPhotosBackgroundTone = () => getBackgroundTone(home.featuredPhotos?.background?.tone);
export const getPortfolioStatementBackgroundTone = () =>
  getBackgroundTone(home.portfolioStatement?.background?.tone);
export const getCtaBackgroundTone = () => getBackgroundTone(home.cta?.background?.tone);
export const getServicesBackgroundTone = () => getBackgroundTone(home.services?.background?.tone);
export const getVideoBackgroundTone = () => getBackgroundTone(home.video?.background?.tone);
export const getTestimonialsBackgroundTone = () => getBackgroundTone(home.testimonials?.background?.tone);
export const getBookingBackgroundTone = () => getBackgroundTone(home.booking?.background?.tone);
export const isHeroAnimationEnabled = () => isAnimationEnabled(home.hero?.animation);
export const isStatementAnimationEnabled = () => isAnimationEnabled(home.statement?.animation);
export const isFeaturedPhotosAnimationEnabled = () => isAnimationEnabled(home.featuredPhotos?.animation);
export const isPortfolioStatementAnimationEnabled = () =>
  isAnimationEnabled(home.portfolioStatement?.animation);
export const isCtaAnimationEnabled = () => isAnimationEnabled(home.cta?.animation);
export const isVideoAnimationEnabled = () => isAnimationEnabled(home.video?.animation);
export const isTestimonialsAnimationEnabled = () => isAnimationEnabled(home.testimonials?.animation);
export const isBookingAnimationEnabled = () => isAnimationEnabled(home.booking?.animation);

export const getAboutHeroBackgroundTone = () => getBackgroundTone(about.hero?.background?.tone);
export const getAboutValuesBackgroundTone = () => getBackgroundTone(about.values?.background?.tone);
export const isAboutValuesAnimationEnabled = () => isAnimationEnabled(about.values?.animation);
export const getAboutProcessBackgroundTone = () => getBackgroundTone(about.process?.background?.tone);
export const getAboutTimelineBackgroundTone = () => getBackgroundTone(about.timeline?.background?.tone);
export const getAboutCommunityBackgroundTone = () => getBackgroundTone(about.community?.background?.tone);
export const getAboutFoundersBackgroundTone = () => getBackgroundTone(about.founders?.background?.tone);
export const getAboutTeamBackgroundTone = () => getBackgroundTone(about.team?.background?.tone);
export const isAboutHeroAnimationEnabled = () => isAnimationEnabled(about.hero?.animation);
export const isAboutProcessAnimationEnabled = () => isAnimationEnabled(about.process?.animation);
export const isAboutTimelineAnimationEnabled = () => isAnimationEnabled(about.timeline?.animation);
export const isAboutCommunityAnimationEnabled = () => isAnimationEnabled(about.community?.animation);
export const isAboutFoundersAnimationEnabled = () => isAnimationEnabled(about.founders?.animation);
export const isServicesAnimationEnabled = () => isAnimationEnabled(home.services?.animation);
