export type Language = 'es' | 'en';

export interface ProgramInfo {
  id: string;
  title: string;
  age: string;
  badge: string;
  description: string;
  highlights: string[];
  schedule: string;
  ratio: string;
  iconName: 'baby' | 'shapes' | 'book-open';
  colorTheme: {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
  };
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: 'all' | 'learning' | 'creative' | 'outdoor' | 'meals';
  categoryLabel: string;
  description: string;
}

export interface WhyChoosePillar {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

export interface EnrollmentFormData {
  parentName: string;
  childName: string;
  childAge: string;
  phone: string;
  email: string;
  preferredStartDate: string;
  preferredLanguage: string;
  message: string;
}
