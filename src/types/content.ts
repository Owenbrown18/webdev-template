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
  footerCredit?: {
    label?: string;
    href?: string;
  };
};

export type HomeContent = {
  hero?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, soft-slate
    };
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
    background?: {
      tone?: string | null; // Options: none, soft-slate
    };
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
  };
  video?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, soft-slate
    };
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
      tone?: string | null; // Options: none, soft-slate
    };
    eyebrow?: string | null;
    title?: string | null;
    intro?: string | null;
  };
  booking?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, soft-slate
    };
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
    background?: {
      tone?: string | null; // Options: none, soft-slate
    };
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
    background?: {
      tone?: string | null; // Options: none, soft-slate
    };
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
      tone?: string | null; // Options: none, soft-slate
    };
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
      tone?: string | null; // Options: none, soft-slate
    };
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
  founders?: {
    variant?: string;
    background?: {
      tone?: string | null; // Options: none, soft-slate
    };
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
      tone?: string | null; // Options: none, soft-slate
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
