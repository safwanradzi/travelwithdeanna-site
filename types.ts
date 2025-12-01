import { LucideIcon } from 'lucide-react';

export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  region: string;
  style: string;
}

export interface PackageDetails extends Destination {
  gallery: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface Award {
  id: number;
  title: string;
  year: string;
  icon: LucideIcon;
}