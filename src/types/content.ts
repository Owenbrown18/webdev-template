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
