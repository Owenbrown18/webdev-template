export type SectionBackgroundTone = 'none' | 'gradient' | 'solid' | 'aurora';

export const normalizeBackgroundTone = (value?: string | null): SectionBackgroundTone => {
  const tone = value?.trim().toLowerCase();
  if (tone === 'gradient') return 'gradient';
  if (tone === 'solid') return 'solid';
  if (tone === 'aurora') return 'aurora';
  return 'none';
};

export const sectionBackgroundClass = (tone: SectionBackgroundTone): string | undefined =>
  tone === 'gradient'
    ? 'section-background'
    : tone === 'solid'
      ? 'section-background-solid'
      : tone === 'aurora'
        ? 'section-background-aurora'
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
  if (tone === 'gradient') {
    return color ? `--section-background-custom: ${color}` : undefined;
  }

  if (tone === 'solid') {
    if (!color) {
      return 'background-color: rgba(var(--surface-base-rgb), 1)';
    }
    return `--section-background-solid-color: ${color}; background-color: ${color}`;
  }

  if (tone === 'aurora') {
    const auroraColor = color ?? '#103529';
    return `--section-background-aurora-color: ${auroraColor}`;
  }

  return undefined;
};
