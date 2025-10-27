const withOpacityValue = (variable) => ({ opacityValue } = {}) => {
  if (opacityValue === undefined) {
    return `rgb(var(${variable}))`;
  }
  return `rgb(var(${variable}) / ${opacityValue})`;
};

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-family-body, "Inter")',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        heading: [
          'var(--font-family-heading, var(--font-family-body, "Inter"))',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          primary: withOpacityValue('--color-primary-rgb'),
          secondary: withOpacityValue('--color-secondary-rgb'),
          accent: withOpacityValue('--color-accent-rgb'),
        },
        surface: {
          base: withOpacityValue('--surface-base-rgb'),
          card: withOpacityValue('--surface-card-rgb'),
          muted: withOpacityValue('--surface-muted-rgb'),
        },
        text: {
          primary: withOpacityValue('--color-text-primary-rgb'),
          secondary: withOpacityValue('--color-text-secondary-rgb'),
          muted: withOpacityValue('--color-text-muted-rgb'),
          inverse: withOpacityValue('--color-text-inverse-rgb'),
          inverseMuted: withOpacityValue('--color-text-inverse-muted-rgb'),
        },
      },
      borderColor: {
        subtle: 'var(--border-color-subtle)',
        strong: 'var(--border-color-strong)',
      },
      borderRadius: {
        surface: '1.75rem',
        pill: '999px',
      },
      boxShadow: {
        'card-soft': '0 14px 32px -22px rgb(15 23 42 / 0.18)',
        card: '0 18px 40px -18px rgb(15 23 42 / 0.28)',
        'card-hover': '0 22px 45px -20px rgb(15 23 42 / 0.32)',
        'brand-glow': '0 18px 42px -16px rgb(var(--color-primary-rgb) / 0.45)',
        ring: '0 0 0 4px rgb(37 99 235 / 0.12)',
        'nav-active': 'var(--shadow-nav-active, 0 18px 36px -22px rgba(16, 53, 41, 0.35))',
      },
      spacing: {
        section: '4rem',
      },
    },
  },
  plugins: [],
};
