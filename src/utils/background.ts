export type SectionBackgroundTone = 'none' | 'gradient';

export const normalizeBackgroundTone = (value?: string | null): SectionBackgroundTone => {
  const tone = value?.trim().toLowerCase();
  return tone === 'gradient' ? 'gradient' : 'none';
};

export const sectionBackgroundClass = (tone: SectionBackgroundTone): string | undefined =>
  tone === 'gradient' ? 'section-background' : undefined;

export const sectionBackgroundToneAttr = (tone: SectionBackgroundTone): string | undefined =>
  tone === 'gradient' ? 'gradient' : undefined;

export const normalizeBackgroundColor = (value?: string | null): string | undefined => {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

export const createBackgroundStyle = (color?: string): string | undefined =>
  color ? `--section-background-custom: ${color}` : undefined;
