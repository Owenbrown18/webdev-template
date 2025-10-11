export type SiteContent = {
  name?: string;
  tagline?: string;
  phone?: string;
  email?: string;
  address?: {
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    postalCode?: string;
  };
  hours?: Array<{
    label?: string;
    open?: string;
    close?: string;
  }>;
  socials?: Record<string, string>;
  booking?: {
    provider?: string;
    embedUrl?: string;
  };
  colors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };
};

export type HomeContent = {
  hero?: {
    variant?: string;
    title?: string | null;
    subtitle?: string | null;
    primaryCtaLabel?: string | null;
    primaryCtaHref?: string | null;
    secondaryCtaLabel?: string | null;
    secondaryCtaHref?: string | null;
    image?: string | null;
    stats?: Array<{
      label?: string;
      value?: string;
    }>;
  };
  services?: {
    variant?: string;
    title?: string | null;
    intro?: string | null;
  };
  video?: {
    variant?: string;
    videoUrl?: string | null;
    localVideo?: string | null;
    posterUrl?: string | null;
    caption?: string | null;
  };
  testimonials?: {
    variant?: string;
    title?: string | null;
    intro?: string | null;
  };
  booking?: {
    variant?: string;
    heading?: string | null;
    description?: string | null;
  };
};

export type ContactContent = {
  info?: {
    variant?: string;
    title?: string | null;
    intro?: string | null;
    phoneLabel?: string | null;
    emailLabel?: string | null;
  };
};

export type ServicesContent = {
  items?: Array<{
    title?: string;
    blurb?: string;
  }>;
};

export type TestimonialsContent = {
  items?: Array<{
    quote?: string;
    author?: string;
  }>;
};

export type AboutContent = {
  hero?: {
    variant?: string;
    title?: string;
    subtitle?: string;
    ctaLabel?: string;
    ctaHref?: string;
    image?: string;
    location?: string;
    founded?: string;
    stats?: Array<{
      label?: string;
      value?: string;
    }>;
  };
  values?: {
    variant?: string;
    title?: string | null;
    intro?: string | null;
    items?: Array<{
      title?: string;
      description?: string;
      icon?: string;
    }>;
  };
  timeline?: {
    variant?: string;
    title?: string | null;
    intro?: string | null;
    milestones?: Array<{
      year?: string;
      title?: string;
      description?: string;
      image?: string;
    }>;
  };
  team?: {
    variant?: string;
    title?: string | null;
    intro?: string | null;
    members?: Array<{
      name?: string;
      role?: string;
      bio?: string;
      image?: string;
      highlight?: string;
    }>;
  };
};
