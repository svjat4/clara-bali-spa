export interface Service {
  slug: string;
  title: string;
  category: 'massage' | 'facial' | 'eyelash' | 'nailgel';
  description: string;
  longDescription: string;
  duration: string[];
  benefits: string[];
  image: string;
}

export interface SpaPackage {
  title: string;
  duration: string;
  price?: string;
  inclusions: string[];
  description: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  keywords: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}