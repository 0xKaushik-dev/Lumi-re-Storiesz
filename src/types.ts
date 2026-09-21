export type ActiveView = 'all' | 'work' | 'approach' | 'disciplines' | 'journal' | 'experience' | 'inquire';

export interface Story {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  location: string;
  date: string;
  category: 'weddings' | 'gatherings' | 'details' | 'portraits';
  image: string;
  aspectRatio: '16/10' | '4/5' | '3/2' | '1/1';
  colSpan: string;
  plateCaption?: string;
  excerpt: string;
  filmStock: string;
  camera: string;
}

export interface Discipline {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  filmCoverage: string;
  investment: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  paragraphs: string[];
  quote?: string;
}

export interface MonographPlate {
  id: number;
  plateNumber: string;
  title: string;
  location: string;
  year: string;
  image: string;
  camera: string;
  lens: string;
  filmStock: string;
  aspect: string;
  caption: string;
}
