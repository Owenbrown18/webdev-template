export type SectionBackgroundTone = 'none' | 'soft-slate';

const normalizeMap: Record<string, SectionBackgroundTone> = {
  'soft-slate': 'soft-slate',
  softslate: 'soft-slate',
  'soft_slate': 'soft-slate',
};

export const normalizeBackgroundTone = (value?: string | null): SectionBackgroundTone => {
  if (!value) {
    return 'none';
  }

  const key = value.trim().toLowerCase();
  return normalizeMap[key] ?? 'none';
};

export const sectionBackgroundClass = (tone: SectionBackgroundTone): string | undefined =>
  tone === 'none' ? undefined : 'section-background section-background-soft-slate';
