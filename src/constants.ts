export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: 'Residential' | 'Commercial' | 'Acreage';
  status: 'For Sale' | 'For Lease' | 'Under Offer';
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  image: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Platinum Suites',
    location: 'Banana Island, Lagos',
    price: '₦850,000,000',
    type: 'Residential',
    status: 'For Sale',
    bedrooms: 5,
    bathrooms: 6,
    area: '1,200 sqm',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '2',
    title: 'Axis Corporate Center',
    location: 'Victoria Island, Lagos',
    price: '₦4,500,000 / annum',
    type: 'Commercial',
    status: 'For Lease',
    area: '450 sqm',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '3',
    title: 'Heritage Heights',
    location: 'Maitama, Abuja',
    price: '₦520,000,000',
    type: 'Residential',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 4,
    area: '850 sqm',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '4',
    title: 'Greenfield Estate',
    location: 'Lekki Phase 1, Lagos',
    price: '₦350,000,000',
    type: 'Residential',
    status: 'Under Offer',
    bedrooms: 4,
    bathrooms: 5,
    area: '600 sqm',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Industrial Hub A1',
    location: 'Agbara, Ogun',
    price: '₦1,200,000,000',
    type: 'Commercial',
    status: 'For Sale',
    area: '5,000 sqm',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
  }
];

export const SERVICES: Service[] = [
  {
    id: 'valuation',
    title: 'Asset Valuation',
    description: 'Precise, regulation-compliant valuation for financial reporting, insurance, and transactions.',
    icon: 'Scale',
  },
  {
    id: 'agency',
    title: 'Estate Agency',
    description: 'Expert brokerage services facilitating seamless sales and leases across premium locations.',
    icon: 'Building2',
  },
  {
    id: 'management',
    title: 'Property Management',
    description: 'Comprehensive facility oversight ensuring optimal returns and asset longevity.',
    icon: 'Key',
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Olumide Adeyemi',
    role: 'Principal Partner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    bio: 'Over 20 years of expertise in Nigerian real estate valuation and advisory.',
  },
  {
    id: '2',
    name: 'Chioma Okeke',
    role: 'Director of Agency',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    bio: 'A veteran in premium asset brokerage with a deep network in West Africa.',
  },
  {
    id: '3',
    name: 'Samuel Ibrahim',
    role: 'Chief Surveyor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    bio: 'Specialist in land acquisition, titling, and urban development strategies.',
  }
];
