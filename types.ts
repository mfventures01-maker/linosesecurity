export interface PackageTier {
  id: string;
  name: string;
  discount: string;
  price: string;
  originalPrice: string;
  image: string;
  features: string[];
  cta: string;
}

export interface SecurityService {
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  rating: number;
  image: string;
}

export interface CalculatorState {
  propertyType: string;
  dailyUsage: number;
  appliances: string[];
  backupHours: number;
}
