export interface WorkingHours {
  day: string;
  hours: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "instagram" | "facebook" | "tiktok" | "whatsapp";
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  addressShort: string;
  mapEmbedUrl: string;
  mapLinkUrl: string;
  bookingUrl: string;
  hours: WorkingHours[];
}

export interface Service {
  id: string;
  category: "manicure" | "pedicure" | "extensions" | "design" | "spa";
  title: string;
  description: string;
  duration: string;
  price: number;
  priceLabel?: string;
  icon: string;
  featured?: boolean;
}

export interface PricingItem {
  name: string;
  price: number;
  priceLabel?: string;
  duration?: string;
  note?: string;
}

export interface PricingGroup {
  id: string;
  title: string;
  description: string;
  items: PricingItem[];
}

export interface GalleryImage {
  id: string;
  category: string;
  title: string;
  src?: string;
  span?: "tall" | "wide" | "normal";
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  rating: number;
  quote: string;
  service?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  year?: string;
}
