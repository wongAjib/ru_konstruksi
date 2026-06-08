export interface Service {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  hero_image: string;
  icon?: string;
  features?: any;
  workflow?: any;
  faqs?: any;
  related_projects?: any;
  created_at: string;
  updated_at: string;
}
export interface ProjectImage {
  id: string;
  portfolio_id: string;
  image_url: string;
  sort_order: number;
  created_at: string;
}

export interface Portfolio {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
  location: string;
  client_name: string;
  category: string;
  project_date: string;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  project_images?: ProjectImage[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  photo: string;
  description: string;
  linkedin: string;
  sort_order: number;
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
  is_featured: boolean;
  created_at: string;
}

export interface HeroSection {
  id: string;
  title: string;
  subtitle: string;
  background_image: string;
  cta_text: string;
  cta_link: string;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  service_interest: string;
  status: string;
  created_at: string;
}

export interface CompanyProfile {
  id: string;
  company_name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  maps_embed: string;
  logo: string;
  favicon: string;
  created_at: string;
  updated_at: string;
}
