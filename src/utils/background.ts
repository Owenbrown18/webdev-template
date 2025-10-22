export type SectionBackgroundTone = 'none' | 'gradient' | 'solid';

export const normalizeBackgroundTone = (value?: string | null): SectionBackgroundTone => {
  const tone = value?.trim().toLowerCase();
  if (tone === 'gradient') return 'gradient';
  if (tone === 'solid') return 'solid';
  return 'none';
};

export const sectionBackgroundClass = (tone: SectionBackgroundTone): string | undefined =>
  tone === 'gradient'
    ? 'section-background'
    : tone === 'solid'
      ? 'section-background-solid'
      : undefined;

export const sectionBackgroundToneAttr = (tone: SectionBackgroundTone): string | undefined =>
  tone === 'none' ? undefined : tone;

export const normalizeBackgroundColor = (value?: string | null): string | undefined => {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

export const createBackgroundStyle = (
  color?: string,
  tone: SectionBackgroundTone = 'none',
): string | undefined => {
  if (!color) {
    return tone === 'solid' ? 'background-color: rgba(var(--surface-base-rgb), 1)' : undefined;
  }

  if (tone === 'gradient') {
    return `--section-background-custom: ${color}`;
  }

  if (tone === 'solid') {
    return `--section-background-solid-color: ${color}; background-color: ${color}`;
  }

  return undefined;
};
