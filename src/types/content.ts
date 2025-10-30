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
  brand?: {
    logo?: string | null;
    logoAlt?: string | null;
  };
  header?: {
    showBusinessName?: boolean | null;
    showLogo?: boolean | null;
  };
  colors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };
  footerCredit?: {
    label?: string;
    href?: string;
  };
  footer?: {
    showBusinessName?: boolean | null;
    showLogo?: boolean | null;
  };
  preloader?: {
    enabled?: boolean;
    backgroundColor?: string | null;
    logo?: string | null;
    minimumDurationMs?: number | null;
  };
};

export type DesignTypographyScale = {
  size?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  lineHeight?: string | number;
  weight?: number;
  letterSpacing?: string;
  uppercase?: boolean | null;
};

export type DesignTokensContent = {
  colors?: {
    brand?: {
      primary?: string;
      secondary?: string;
      accent?: string;
    };
    text?: {
      primary?: string;
      secondary?: string;
      muted?: string;
      inverse?: string;
      inverseMuted?: string;
    };
    surface?: {
      base?: string;
      card?: string;
      muted?: string;
    };
    border?: {
      subtle?: string;
      strong?: string;
    };
  };
  typography?: {
    fontFamily?: {
      heading?: string;
      body?: string;
    };
    scale?: {
      display?: DesignTypographyScale;
      heading?: DesignTypographyScale;
      subheading?: DesignTypographyScale;
      body?: DesignTypographyScale;
      eyebrow?: DesignTypographyScale;
      finePrint?: DesignTypographyScale;
    };
  };
};

export type HomeContent = {
  hero?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null; // Optional CSS color used by gradient, solid, or aurora tones
    };
    animation?: boolean | null;
    title?: string | null;
    subtitle?: string | null;
    eyebrow?: string | null;
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
  statement?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    image?: {
      src?: string | null;
      alt?: string | null;
    } | null;
  };
  aboutSection?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    image?: {
      src?: string | null;
      alt?: string | null;
    } | null;
  };
  featuredPhotos?: {
    variant?: string | null;
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    items?: Array<{
      src?: string | null;
      alt?: string | null;
    }>;
  };
  featuredProject?: {
    variant?: string | null;
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    modal?: {
      title?: string | null;
      body?: string | null;
    };
    slides?: Array<{
      src?: string | null;
      alt?: string | null;
    }>;
  };
  portfolioStatement?: {
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    ctaLabel?: string | null;
    ctaHref?: string | null;
  };
  cta?: {
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    ctaLabel?: string | null;
    ctaHref?: string | null;
  };
  services?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
  };
  expectations?: {
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    items?: Array<{
      title?: string | null;
      description?: string | null;
      icon?: string | null;
    }>;
  };
  video?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    videoUrl?: string | null;
    localVideo?: string | null;
    posterUrl?: string | null;
    caption?: string | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
  };
  testimonials?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
  };
  booking?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    heading?: string | null;
    description?: string | null;
  };
};

export type ContactContent = {
  hero?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
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
  info?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    phoneLabel?: string | null;
    emailLabel?: string | null;
  };
  contactForm?: {
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
  };
};

export type ServiceLink = {
  label?: string | null;
  href?: string | null;
};

export type ServicesListItem = {
  title?: string;
  summary?: string;
  blurb?: string;
  features?: string[];
  icon?: string | null;
  duration?: string | null;
  startingPrice?: string | null;
  link?: ServiceLink | null;
  slug?: string | null;
  image?: string | null | {
    src?: string | null;
    alt?: string | null;
  };
};

export type ServicesListContent = {
  items?: Array<ServicesListItem>;
};

export type ServicesPageContent = {
  metadata?: {
    title?: string | null;
    description?: string | null;
    heroImageAlt?: string | null;
  };
  hero?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null; // Optional CSS color used when tone is "gradient", "solid", or "aurora"
    };
    animation?: boolean | null;
    tagLabel?: string | null;
    title?: string | null;
    subtitle?: string | null;
    primaryCtaLabel?: string | null;
    primaryCtaHref?: string | null;
    secondaryCtaLabel?: string | null;
    secondaryCtaHref?: string | null;
    image?: string | null;
    details?: Array<{
      label?: string | null;
      value?: string | null;
    }>;
  };
  overview?: {
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    supporting?: string | null;
  };
  catalog?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
  };
  highlights?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    items?: Array<{
      title?: string | null;
      description?: string | null;
      features?: string[];
      icon?: string | null;
      image?: string | null;
    }>;
  };
  testimonials?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    items?: Array<{
      quote?: string | null;
      author?: string | null;
    }>;
  };
  faq?: {
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    items?: Array<{
      question?: string | null;
      answer?: string | null;
    }>;
  };
  cta?: {
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    ctaLabel?: string | null;
    ctaHref?: string | null;
  };
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
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null; // Optional CSS color used when tone is "gradient", "solid", or "aurora"
    };
    animation?: boolean | null;
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
  statement?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    image?: {
      src?: string | null;
      alt?: string | null;
    } | null;
  };
  cta?: {
    background?: {
      tone?: string | null; // Options: none, gradient, solid, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    ctaLabel?: string | null;
    ctaHref?: string | null;
  };
  values?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    supporting?: string | null;
    items?: Array<{
      title?: string;
      description?: string;
      icon?: string;
    }>;
  };
  process?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    steps?: Array<{
      title?: string;
      description?: string;
    }>;
  };
  timeline?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    milestones?: Array<{
      year?: string;
      title?: string;
      description?: string;
      image?: string;
    }>;
  };
  community?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    supporting?: string | null;
    stats?: Array<{
      label?: string;
      value?: string;
    }>;
    items?: Array<{
      title?: string;
      description?: string;
      icon?: string;
      highlight?: string;
      ctaLabel?: string;
      details?: string;
    }>;
  };
  founders?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    animation?: boolean | null;
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
    supporting?: string | null;
    profiles?: Array<{
      name?: string;
      role?: string;
      bio?: string;
      story?: string;
      image?: string;
      highlight?: string;
    }>;
  };
  team?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, gradient, aurora
      color?: string | null;
    };
    eyebrow?: string | null;
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
