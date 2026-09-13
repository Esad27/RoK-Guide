export type Locale = 'en' | 'vi' | 'es';
export type TroopType = 'infantry' | 'cavalry' | 'archer';

export interface Commander {
  id: string;
  name: string;
  slug: string;
  troopType?: TroopType;
  image?: string;
  rarity?: string;
  civilization?: string;
  specialties?: string[];
  role?: string;
  acquisition?: string;
  skillOrder?: string;
  tags?: string[];
  bestUses?: string[];
  rating?: number;
  description?: Partial<Record<Locale, string>>;
  sources?: Source[];
  verifiedAt?: string;
}

export interface Source {
  name: string;
  url: string;
  type: string;
}

export interface Pairing {
  id: string;
  primary: string;
  primaryAlternatives?: string[];
  secondary: string;
  rating: number;
  troopType: TroopType;
  skills?: { primary?: string; secondary?: string };
  tags?: string[];
  situations?: string[];
  why?: Partial<Record<Locale, string>>;
  strengths?: Partial<Record<Locale, string[]>>;
  weaknesses?: Partial<Record<Locale, string[]>>;
  videoId?: string;
  sources?: Source[];
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  channel: string;
  language: Locale;
  category: 'guides' | 'commanders' | 'kvk' | 'battle' | 'tips';
  gameStage?: string[];
  priority?: 'high' | 'medium';
  featured?: boolean;
  url: string;
  publishedAt: string;
  durationSeconds: number;
  captionStatus: 'manual' | 'auto-generated' | 'unavailable' | 'unknown';
  captionLanguages: string[];
  transcriptStatus: 'available' | 'unavailable' | 'unknown';
  topics?: string[];
  placements?: string[];
  verifiedAt: string;
}

export interface Channel {
  id: string;
  name: string;
  url?: string;
  channelId?: string;
  logo?: string;
  languages: Locale[];
  description?: Partial<Record<Locale, string>>;
}

export type ResourceCategory =
  | 'guides'
  | 'meta'
  | 'tools'
  | 'wiki'
  | 'community'
  | 'official'
  | 'calculators'
  | 'events';

export interface Resource {
  id: string;
  name: string;
  url: string;
  localizedUrls?: Partial<Record<Locale, string>>;
  category: ResourceCategory;
  description: Partial<Record<Locale, string>>;
  logo?: string;
}
