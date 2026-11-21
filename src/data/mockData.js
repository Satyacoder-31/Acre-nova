export const CITIES = [
  { id: 'bangalore', name: 'Bengaluru', state: 'Karnataka', popularLocalities: ['Whitefield', 'Indiranagar', 'Sarjapur Road', 'Koramangala', 'HSR Layout', 'Hebbal', 'Electronic City'], activeListings: 1420, avgGrowth: '+12.4%' },
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', popularLocalities: ['Bandra West', 'Worli', 'Andheri West', 'Juhu', 'Powai', 'Thane West', 'Malad West'], activeListings: 2180, avgGrowth: '+8.5%' },
  { id: 'gurgaon', name: 'Gurgaon / NCR', state: 'Haryana', popularLocalities: ['DLF Phase 5', 'Golf Course Ext Road', 'Sohna Road', 'Sector 57', 'Sector 65', 'Cyber City'], activeListings: 1890, avgGrowth: '+15.2%' },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', popularLocalities: ['Hitec City', 'Gachibowli', 'Jubilee Hills', 'Banjara Hills', 'Madhapur', 'Kondapur'], activeListings: 1350, avgGrowth: '+14.8%' },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', popularLocalities: ['Koregaon Park', 'Kalyani Nagar', 'Baner', 'Hinjewadi', 'Viman Nagar', 'Wakad'], activeListings: 980, avgGrowth: '+11.2%' },
  { id: 'goa', name: 'Goa', state: 'Goa', popularLocalities: ['Dona Paula', 'Candolim', 'Assagao', 'Anjuna', 'Panaji', 'Porvorim'], activeListings: 430, avgGrowth: '+16.5%' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'The Sovereign Horizon — Worli Sea Face',
    tagline: 'Ultra-Luxury Triplex Penthouses with Infinity Plunge Pools',
    price: '₹ 18.50 Cr',
    location: 'Worli, Mumbai',
    bhk: '4 & 5 BHK Sky Villas',
    rera: 'P51900018442',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85',
    category: 'Ultra Luxury'
  },
  {
    id: 2,
    title: 'Miraya Sky Residences — Tech Valley',
    tagline: 'Modern High-Rise Living with Panoramic Valley Views & Automation',
    price: '₹ 2.45 Cr',
    location: 'Whitefield, Bengaluru',
    bhk: '3 BHK Smart Homes',
    rera: 'PRM/KA/RERA/1251/446',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85',
    category: 'Ready to Move'
  },
  {
    id: 3,
    title: 'The Camellias Grand Estate — Golf Drive',
    tagline: 'Front-Row Championship Golf Course Vistas with Private Concierge',
    price: '₹ 32.00 Cr',
    location: 'DLF Phase 5, Gurgaon',
    bhk: '4 & 5 BHK Golf Estates',
    rera: 'HRERA-PKL-GGM-124',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=85',
    category: 'Trophy Asset'
  },
  {
    id: 4,
    title: 'Casa Solarium Portuguese Villa',
    tagline: 'Restored 1920s Heritage Estate with Courtyard & Frangipani Pool',
    price: '₹ 11.50 Cr',
    location: 'Assagao, North Goa',
    bhk: '4 BHK Private Villa',
    rera: 'GOA/RERA/2021/00889',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=85',
    category: 'Coastal Living'
  },
  {
    id: 5,
    title: 'Verdant Palms Luxury Enclave',
    tagline: 'Double-Height Living Rooms with Heated Lap Pool & Solar Grid',
    price: '₹ 6.80 Cr',
    location: 'Jubilee Hills, Hyderabad',
    bhk: '5 BHK Bespoke Villa',
    rera: 'P02400001923',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=85',
    category: 'Exclusive Villa'
  }
];

export const PROPERTY_TYPES = [
  'All Types',
  'Apartment / Flat',
  'Independent Villa',
  'Penthouse',
  'Builder Floor',
  'Commercial Office',
  'Plot / Land',
  'Studio Apartment'
];

export const AMENITIES_LIST = [
  { id: 'pool', label: 'Infinity Swimming Pool', icon: 'Waves' },
  { id: 'gym', label: 'Fitness Center & Spa', icon: 'Dumbbell' },
  { id: 'clubhouse', label: 'Luxury Clubhouse', icon: 'Building2' },
  { id: 'security', label: '24x7 Multi-Tier Security', icon: 'ShieldCheck' },
  { id: 'power', label: '100% Power Backup', icon: 'Zap' },
  { id: 'ev', label: 'EV Charging Station', icon: 'BatteryCharging' },
  { id: 'parking', label: 'Covered Stilt Parking', icon: 'Car' },
  { id: 'garden', label: 'Landscaped Zen Garden', icon: 'Trees' },
  { id: 'playarea', label: "Children's Adventure Play Area", icon: 'Gamepad2' },
  { id: 'automation', label: 'Smart Home Automation', icon: 'Cpu' },
  { id: 'lift', label: 'High Speed Otis Elevators', icon: 'ArrowUpDown' },
  { id: 'tennis', label: 'Tennis & Badminton Courts', icon: 'Trophy' },
  { id: 'rooftop', label: 'Sky Deck & Lounge', icon: 'Sun' },
  { id: 'gas', label: 'Piped Natural Gas (PNG)', icon: 'Flame' },
];

export const LIFESTYLE_COLLECTIONS = [
  {
    id: 'golf',
    title: 'Championship Golf Estates',
    description: 'Front-row fairway greens, private buggy tracks & world-class clubhouse memberships.',
    propertiesCount: '142 Properties',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80',
    tag: 'Elite Sports'
  },
  {
    id: 'ocean',
    title: 'Waterfront & Coastal Sanctuaries',
    description: 'Unobstructed Arabian Sea & ocean horizon vistas in Worli, Bandra & Goa beaches.',
    propertiesCount: '89 Properties',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    tag: 'Panoramic Sea'
  },
  {
    id: 'penthouses',
    title: 'Sky Penthouses & Duplexes',
    description: 'Double-height ceilings, private terrace plunge pools & keycard elevator lobbies.',
    propertiesCount: '210 Properties',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    tag: 'Architectural Crest'
  },
  {
    id: 'commercial',
    title: 'Grade-A Commercial IT Towers',
    description: 'LEED Platinum office floors with 100% DG backup in Hitec City, BKC & Cyber City.',
    propertiesCount: '95 Commercial Floors',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    tag: 'High Yield (8-10%)'
  }
];

export const FEATURED_PROJECTS = [
  {
    id: 'proj-1',
    name: 'Oberoi Sky Forest Horizon',
    developer: 'Oberoi Realty',
    location: 'Worli, Mumbai',
    startingPrice: '₹ 9.50 Cr',
    bhk: '3, 4 & 5 BHK Sky Mansions',
    possession: 'Dec 2027',
    rera: 'P51900035021',
    badge: 'New Launch',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    highlights: ['11-Acre Lush Podium', 'Double Height Balconies', 'Sky Sports Complex']
  },
  {
    id: 'proj-2',
    name: 'Godrej Woodscape Reserve',
    developer: 'Godrej Properties',
    location: 'Whitefield - Budigere Cross, Bengaluru',
    startingPrice: '₹ 1.85 Cr',
    bhk: '2, 3 & 4 BHK Smart Homes',
    possession: 'June 2028',
    rera: 'PRM/KA/RERA/1251/446/PR/240212',
    badge: 'Fast Selling',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    highlights: ['3-Acre Forest Themed Park', 'Metro Line 200m Away', '85% Open Greenery']
  },
  {
    id: 'proj-3',
    name: 'DLF The Arbour Sovereign',
    developer: 'DLF Home Developers',
    location: 'Sector 63, Golf Course Ext Road, Gurgaon',
    startingPrice: '₹ 7.20 Cr',
    bhk: '4 BHK Luxury Residences',
    possession: 'Oct 2027',
    rera: 'RC/REP/HARERA/GGM/684/416',
    badge: 'Trophy Project',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    highlights: ['Low Density Living', 'Double Glazed Schuco Facade', '3.8m Floor Heights']
  }
];

export const ARTICLES_DATA = [
  {
    id: 1,
    title: 'Top 5 Micro-Markets for Real Estate Investment in 2026',
    category: 'Market Trends',
    readTime: '4 min read',
    date: 'Nov 18, 2026',
    author: 'AcreNova Research Bureau',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Deep-dive analysis into infrastructure catalysts, metro extensions, and rental appreciation yields across Bengaluru, Mumbai, and Gurgaon.'
  },
  {
    id: 2,
    title: 'The Buyer’s Checklist for RERA Legal Diligence & Title Clearance',
    category: 'Legal Advisory',
    readTime: '6 min read',
    date: 'Nov 12, 2026',
    author: 'Adv. Suresh Krishnamurthy',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Essential documents to inspect: Encumbrance Certificates, Commencement Certificates, sanctioned layouts, and escrow bank compliance.'
  },
  {
    id: 3,
    title: 'Capital Gains Tax Savings Under Section 54 of Income Tax Act',
    category: 'Tax & Finance',
    readTime: '5 min read',
    date: 'Nov 05, 2026',
    author: 'Priya Narayanan (Chartered Accountant)',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    excerpt: 'How to maximize long-term capital gains tax exemptions when reinvesting residential real estate proceeds within statutory timelines.'
  }
];

export const FAQS_DATA = [
  {
    question: 'How does AcreNova guarantee 100% RERA verification on properties?',
    answer: 'Every project and residential listing published on AcreNova undergoes direct algorithmic and manual validation against respective state RERA registries (MahaRERA, Karnataka RERA, HRERA, TG RERA). We display active registration numbers, sanctioned layout plans, and legal promoter credentials on every detail page.'
  },
  {
    question: 'What is the "Zero Brokerage" policy and how does it work?',
    answer: 'Properties tagged with the "Zero Brokerage" badge are posted directly by verified individual homeowners or authorized developer representatives. Prospective tenants and purchasers connect directly with the owner without intermediary broker commissions or hidden advisory fees.'
  },
  {
    question: 'How accurate is the AcreNova Property Valuation AI & EMI Estimator?',
    answer: 'Our valuation algorithms cross-reference over 120,000 recent deed registrations, active neighborhood listings, micro-market capital growth indices, and bank surveyor benchmarks to calculate a realistic fair market range with 94%+ predictive confidence.'
  },
  {
    question: 'Can Non-Resident Indians (NRIs) buy and lease real estate through AcreNova?',
    answer: 'Yes! AcreNova operates a dedicated NRI Client Desk providing end-to-end assistance: FEMA compliance verification, NRE/NRO banking facilitation, virtual live drone tours, Power of Attorney (PoA) guidance, and professional tenant leasing management.'
  },
  {
    question: 'What are the charges to post a property listing on AcreNova?',
    answer: 'Posting basic verified residential or rental properties on AcreNova is 100% Free! Individual owners receive verified badges, photo hosting, and direct buyer inquiries without any listing fees.'
  }
];

export const INITIAL_PROPERTIES = [
  {
    id: 'prop-101',
    title: 'The Sovereign Horizon — Sky Villa Penthouse',
    tagline: 'Panoramic Arabian Sea views with private infinity plunge pool',
    purpose: 'buy',
    propertyType: 'Penthouse',
    bhk: 4,
    bathrooms: 5,
    balconies: 3,
    price: 185000000, // 18.50 Cr
    formattedPrice: '₹ 18.50 Cr',
    pricePerSqFt: 38540,
    areaSqFt: 4800,
    carpetAreaSqFt: 4120,
    city: 'Mumbai',
    locality: 'Worli',
    address: 'Tower A, Floor 44, Senapati Bapat Marg, Worli Sea Face, Mumbai',
    pincode: '400018',
    possession: 'Ready to Move',
    possessionDate: 'Immediate',
    floor: 44,
    totalFloors: 50,
    furnishing: 'Fully Furnished',
    facing: 'West (Sea View)',
    postedBy: 'Certified Agent',
    seller: {
      name: 'Aditya Singhania',
      agency: 'AcreNova Private Client Advisory',
      phone: '+91 98201 44892',
      email: 'aditya.singhania@acrenovagroup.com',
      rating: 4.9,
      dealsClosed: 42,
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    },
    reraId: 'P51900018442 (MahaRERA Registered)',
    verified: true,
    featured: true,
    zeroBrokerage: false,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'An architectural marvel soaring above Mumbai’s iconic shoreline. Designed by Foster + Partners associates, this penthouse features 13-foot high ceilings, imported Italian Statuario marble, floor-to-ceiling soundproof Schuco glazing, a temperature-controlled terrace plunge pool, private elevator lobby, and Miele-fitted show kitchen with separate wet kitchen.',
    amenities: ['Infinity Swimming Pool', 'Fitness Center & Spa', 'Luxury Clubhouse', '24x7 Multi-Tier Security', '100% Power Backup', 'EV Charging Station', 'Covered Stilt Parking', 'Sky Deck & Lounge', 'Smart Home Automation', 'High Speed Otis Elevators'],
    neighborhood: {
      transitScore: 9.6,
      safetyScore: 9.9,
      lifestyleScore: 9.8,
      landmarks: [
        { name: 'Worli Sea Link Entrance', distance: '1.2 km' },
        { name: 'Bandra-Kurla Complex (BKC)', distance: '15 mins drive' },
        { name: 'The Palladium Mall', distance: '2.5 km' },
        { name: 'Hinduja Healthcare Hospital', distance: '3.1 km' }
      ]
    },
    priceHistory: [
      { quarter: 'Q1 2025', price: 34500 },
      { quarter: 'Q2 2025', price: 35800 },
      { quarter: 'Q3 2025', price: 36900 },
      { quarter: 'Q4 2025', price: 37400 },
      { quarter: 'Q1 2026', price: 38540 }
    ]
  },
  {
    id: 'prop-102',
    title: 'Miraya Sky Residences — Tech Corridor Haven',
    tagline: 'Ultra-modern 3 BHK with panoramic green valley views & home automation',
    purpose: 'buy',
    propertyType: 'Apartment / Flat',
    bhk: 3,
    bathrooms: 3,
    balconies: 2,
    price: 24500000, // 2.45 Cr
    formattedPrice: '₹ 2.45 Cr',
    pricePerSqFt: 11400,
    areaSqFt: 2150,
    carpetAreaSqFt: 1780,
    city: 'Bengaluru',
    locality: 'Whitefield',
    address: 'Wing C, 18th Floor, Miraya Meadows, ITPL Main Road, Whitefield',
    pincode: '560066',
    possession: 'Ready to Move',
    possessionDate: 'Immediate',
    floor: 18,
    totalFloors: 28,
    furnishing: 'Semi-Furnished',
    facing: 'East (Vastu Compliant)',
    postedBy: 'Verified Owner',
    seller: {
      name: 'Rohan Mehra',
      agency: 'Direct Owner Listing',
      phone: '+91 97412 88319',
      email: 'rohan.mehra@techpulse.io',
      rating: 4.8,
      dealsClosed: 3,
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    reraId: 'PRM/KA/RERA/1251/446/PR/200811/003512',
    verified: true,
    featured: true,
    zeroBrokerage: true,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'Immaculate corner unit positioned high on the 18th floor offering unhindered cross-ventilation and sunlight. Includes custom European modular kitchen with quartz countertop, Legrand automated smart switches, wooden laminate in master suite, and 2 dedicated stilt EV-ready car parks.',
    amenities: ['Fitness Center & Spa', 'Infinity Swimming Pool', 'Luxury Clubhouse', '100% Power Backup', '24x7 Multi-Tier Security', 'EV Charging Station', 'Covered Stilt Parking', 'Landscaped Zen Garden', 'Tennis & Badminton Courts', 'Smart Home Automation'],
    neighborhood: {
      transitScore: 9.4,
      safetyScore: 9.7,
      lifestyleScore: 9.5,
      landmarks: [
        { name: 'Namma Metro Station (Purple Line)', distance: '400 meters' },
        { name: 'ITPL Tech Park', distance: '1.1 km' },
        { name: 'Manipal Hospital Whitefield', distance: '1.8 km' },
        { name: 'Nexus Shantiniketan Mall', distance: '2.0 km' }
      ]
    },
    priceHistory: [
      { quarter: 'Q1 2025', price: 9800 },
      { quarter: 'Q2 2025', price: 10200 },
      { quarter: 'Q3 2025', price: 10600 },
      { quarter: 'Q4 2025', price: 10950 },
      { quarter: 'Q1 2026', price: 11400 }
    ]
  },
  {
    id: 'prop-103',
    title: 'The Camellias Grand Estate — DLF Golf Course',
    tagline: 'Private clubhouse access, concierge, and prime golf greens fronting',
    purpose: 'buy',
    propertyType: 'Apartment / Flat',
    bhk: 4,
    bathrooms: 5,
    balconies: 4,
    price: 320000000, // 32.00 Cr
    formattedPrice: '₹ 32.00 Cr',
    pricePerSqFt: 43240,
    areaSqFt: 7400,
    carpetAreaSqFt: 6200,
    city: 'Gurgaon / NCR',
    locality: 'DLF Phase 5',
    address: 'Tower 2, The Camellias, Golf Drive, DLF Phase 5, Gurugram',
    pincode: '122009',
    possession: 'Ready to Move',
    possessionDate: 'Immediate',
    floor: 21,
    totalFloors: 35,
    furnishing: 'Semi-Furnished',
    facing: 'North-East',
    postedBy: 'Reputed Builder',
    seller: {
      name: 'Pooja Kashyap',
      agency: 'DLF Ultra Luxury Advisory',
      phone: '+91 99103 55210',
      email: 'pooja.kashyap@luxurydwellings.in',
      rating: 5.0,
      dealsClosed: 68,
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    reraId: 'HRERA-PKL-GGM-124-2018',
    verified: true,
    featured: true,
    zeroBrokerage: false,
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'Arguably India’s most celebrated residential address. The Camellias redefines elevated living with private 32,000 sq ft wellness club, Michelin-star catering access, Turkish hammam, heated indoor lap pools, and unobstructed front row vistas of the Gary Player designed 18-hole signature golf course.',
    amenities: ['Infinity Swimming Pool', 'Fitness Center & Spa', 'Luxury Clubhouse', '24x7 Multi-Tier Security', '100% Power Backup', 'EV Charging Station', 'Covered Stilt Parking', 'Sky Deck & Lounge', 'Smart Home Automation', 'Tennis & Badminton Courts', 'Landscaped Zen Garden'],
    neighborhood: {
      transitScore: 9.8,
      safetyScore: 9.9,
      lifestyleScore: 10.0,
      landmarks: [
        { name: 'DLF Golf and Country Club', distance: '0.1 km' },
        { name: 'One Horizon Center', distance: '1.4 km' },
        { name: 'Rapid Metro Sector 53-54', distance: '900 meters' },
        { name: 'Fortis Memorial Research Institute', distance: '4.5 km' }
      ]
    },
    priceHistory: [
      { quarter: 'Q1 2025', price: 38000 },
      { quarter: 'Q2 2025', price: 39500 },
      { quarter: 'Q3 2025', price: 41000 },
      { quarter: 'Q4 2025', price: 42200 },
      { quarter: 'Q1 2026', price: 43240 }
    ]
  },
  {
    id: 'prop-104',
    title: 'Verdant Palms Luxury Courtyard Villa',
    tagline: 'Private garden, heated lap pool, double height living room & solar grid',
    purpose: 'buy',
    propertyType: 'Independent Villa',
    bhk: 5,
    bathrooms: 6,
    balconies: 3,
    price: 68000000, // 6.80 Cr
    formattedPrice: '₹ 6.80 Cr',
    pricePerSqFt: 15110,
    areaSqFt: 4500,
    carpetAreaSqFt: 3950,
    city: 'Hyderabad',
    locality: 'Jubilee Hills',
    address: 'Road No 36, Extn, Jubilee Hills Enclave, Hyderabad',
    pincode: '500033',
    possession: 'Ready to Move',
    possessionDate: 'Immediate',
    floor: 1,
    totalFloors: 3,
    furnishing: 'Fully Furnished',
    facing: 'North (Vastu Compliant)',
    postedBy: 'Verified Owner',
    seller: {
      name: 'Vikramaditya Raju',
      agency: 'Direct Owner',
      phone: '+91 98490 21990',
      email: 'vikram.raju@hydrealty.com',
      rating: 4.9,
      dealsClosed: 8,
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    reraId: 'P02400001923 (TG RERA)',
    verified: true,
    featured: true,
    zeroBrokerage: true,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'An architectural statement villa built on a 480 sq.yard corner plot in the heart of Jubilee Hills. Highlights include private basement home theatre with Dolby Atmos, VRV Daikin air conditioning, Japanese Zen garden with water fountain, and dedicated staff quarters for two.',
    amenities: ['Infinity Swimming Pool', 'Fitness Center & Spa', '24x7 Multi-Tier Security', '100% Power Backup', 'EV Charging Station', 'Covered Stilt Parking', 'Landscaped Zen Garden', 'Smart Home Automation', 'Sky Deck & Lounge'],
    neighborhood: {
      transitScore: 9.3,
      safetyScore: 9.9,
      lifestyleScore: 9.9,
      landmarks: [
        { name: 'KBR National Park', distance: '1.2 km' },
        { name: 'Apollo Health City Hospital', distance: '2.0 km' },
        { name: 'Hitec City IT Corridor', distance: '15 mins drive' },
        { name: 'Hyderabad Golf Club', distance: '4.8 km' }
      ]
    },
    priceHistory: [
      { quarter: 'Q1 2025', price: 13200 },
      { quarter: 'Q2 2025', price: 13900 },
      { quarter: 'Q3 2025', price: 14400 },
      { quarter: 'Q4 2025', price: 14800 },
      { quarter: 'Q1 2026', price: 15110 }
    ]
  },
  {
    id: 'prop-105',
    title: 'The Glasshouse Loft — High-Rise Luxury Rental',
    tagline: 'Fully furnished designer 2 BHK with Italian kitchen & gym access',
    purpose: 'rent',
    propertyType: 'Apartment / Flat',
    bhk: 2,
    bathrooms: 2,
    balconies: 1,
    price: 95000, // 95k / month
    formattedPrice: '₹ 95,000 / mo',
    pricePerSqFt: 68,
    areaSqFt: 1400,
    carpetAreaSqFt: 1180,
    city: 'Bengaluru',
    locality: 'Indiranagar',
    address: '100 Feet Road, 12th Main Junction, Indiranagar, Bengaluru',
    pincode: '560038',
    possession: 'Immediate',
    possessionDate: 'Available from 1st of next month',
    floor: 6,
    totalFloors: 9,
    furnishing: 'Fully Furnished',
    facing: 'North-East',
    postedBy: 'Verified Owner',
    seller: {
      name: 'Sunil Rao',
      agency: 'Direct Owner',
      phone: '+91 98801 23145',
      email: 'sunil.rao@creativehouse.com',
      rating: 4.8,
      dealsClosed: 5,
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80'
    },
    reraId: 'PRM/KA/RERA/1251/310/AG/180214/000984',
    verified: true,
    featured: false,
    zeroBrokerage: true,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'Designer curated home in Bengaluru’s liveliest dining and shopping district. Fully furnished with BoConcept sofa set, Sony 65-inch OLED TV, Siemens dishwasher, washing machine, memory foam king mattresses, and 24x7 security concierge.',
    amenities: ['Fitness Center & Spa', '100% Power Backup', '24x7 Multi-Tier Security', 'Covered Stilt Parking', 'High Speed Otis Elevators', 'Piped Natural Gas (PNG)'],
    neighborhood: {
      transitScore: 9.7,
      safetyScore: 9.6,
      lifestyleScore: 9.9,
      landmarks: [
        { name: 'Indiranagar Metro Station', distance: '500 meters' },
        { name: 'Toit Brewpub & 100ft Road Cafes', distance: '300 meters' },
        { name: 'Manipal Hospital HAL Airport Rd', distance: '2.5 km' },
        { name: 'MG Road Central Business District', distance: '4.2 km' }
      ]
    },
    priceHistory: [
      { quarter: 'Q1 2025', price: 82000 },
      { quarter: 'Q2 2025', price: 85000 },
      { quarter: 'Q3 2025', price: 88000 },
      { quarter: 'Q4 2025', price: 92000 },
      { quarter: 'Q1 2026', price: 95000 }
    ]
  },
  {
    id: 'prop-106',
    title: 'Casa Solarium Portuguese Heritage Villa',
    tagline: 'Restored 4 BHK estate with sprawling garden, private pool & teak beams',
    purpose: 'buy',
    propertyType: 'Independent Villa',
    bhk: 4,
    bathrooms: 4,
    balconies: 2,
    price: 115000000, // 11.50 Cr
    formattedPrice: '₹ 11.50 Cr',
    pricePerSqFt: 25550,
    areaSqFt: 4500,
    carpetAreaSqFt: 3800,
    city: 'Goa',
    locality: 'Assagao',
    address: 'Badem Road, Near Gunpowder, Assagao, North Goa',
    pincode: '403507',
    possession: 'Ready to Move',
    possessionDate: 'Immediate',
    floor: 1,
    totalFloors: 2,
    furnishing: 'Fully Furnished',
    facing: 'East',
    postedBy: 'Certified Agent',
    seller: {
      name: 'Natasha D’Souza',
      agency: 'Goa Luxe Properties',
      phone: '+91 98221 66782',
      email: 'natasha@goaluxe.in',
      rating: 4.9,
      dealsClosed: 31,
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
    },
    reraId: 'GOA/RERA/2021/00889',
    verified: true,
    featured: true,
    zeroBrokerage: false,
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'Immaculately restored 1920s Indo-Portuguese heritage estate nestled amidst lush coconut groves in trendy Assagao. Features authentic Bharat tiles, high vaulted wooden rafters, wrap-around balcão, private swimming pool enveloped by frangipani trees, and independent guest cottage.',
    amenities: ['Infinity Swimming Pool', 'Landscaped Zen Garden', '100% Power Backup', '24x7 Multi-Tier Security', 'Covered Stilt Parking', 'EV Charging Station', 'Smart Home Automation'],
    neighborhood: {
      transitScore: 8.8,
      safetyScore: 9.8,
      lifestyleScore: 9.9,
      landmarks: [
        { name: 'Vagator & Anjuna Beaches', distance: '10 mins drive' },
        { name: 'Mopa International Airport', distance: '35 mins drive' },
        { name: 'Gunpowder Restaurant & Sublime', distance: '300 meters' },
        { name: 'Mapusa Market', distance: '4.5 km' }
      ]
    },
    priceHistory: [
      { quarter: 'Q1 2025', price: 21500 },
      { quarter: 'Q2 2025', price: 22800 },
      { quarter: 'Q3 2025', price: 23900 },
      { quarter: 'Q4 2025', price: 24700 },
      { quarter: 'Q1 2026', price: 25550 }
    ]
  },
  {
    id: 'prop-107',
    title: 'Apex CyberTower — Grade-A Office Floor',
    tagline: 'LEED Platinum certified commercial floor with plug-and-play cafeteria',
    purpose: 'commercial',
    propertyType: 'Commercial Office',
    bhk: 0,
    bathrooms: 8,
    balconies: 0,
    price: 145000000, // 14.50 Cr
    formattedPrice: '₹ 14.50 Cr',
    pricePerSqFt: 14500,
    areaSqFt: 10000,
    carpetAreaSqFt: 8800,
    city: 'Hyderabad',
    locality: 'Hitec City',
    address: 'Floor 12, Apex CyberPark, Madhapur Main Road, Hitec City',
    pincode: '500081',
    possession: 'Ready to Move',
    possessionDate: 'Immediate',
    floor: 12,
    totalFloors: 24,
    furnishing: 'Semi-Furnished',
    facing: 'North',
    postedBy: 'Reputed Builder',
    seller: {
      name: 'Rameshwar Reddy',
      agency: 'Apex Realty Developers',
      phone: '+91 99882 11029',
      email: 'sales@apexcybertowers.in',
      rating: 4.8,
      dealsClosed: 92,
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80'
    },
    reraId: 'P02400003310 (TG RERA Commercial)',
    verified: true,
    featured: false,
    zeroBrokerage: true,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'Premier Grade-A commercial warm shell office space engineered for multinational tech enterprises. Features central HVAC with MERV-14 filtration, 100% N+1 DG power redundancy, 12 destination-controlled passenger elevators, and 18 reserved multi-level basement car parking bays.',
    amenities: ['100% Power Backup', '24x7 Multi-Tier Security', 'EV Charging Station', 'Covered Stilt Parking', 'High Speed Otis Elevators', 'Fitness Center & Spa'],
    neighborhood: {
      transitScore: 9.8,
      safetyScore: 9.7,
      lifestyleScore: 9.5,
      landmarks: [
        { name: 'Raidurg Metro Station', distance: '300 meters' },
        { name: 'Inorbit Mall Cyberabad', distance: '1.2 km' },
        { name: 'IKEA Hyderabad', distance: '1.8 km' },
        { name: 'Rajiv Gandhi International Airport (RGIA)', distance: '32 mins express tollway' }
      ]
    },
    priceHistory: [
      { quarter: 'Q1 2025', price: 12800 },
      { quarter: 'Q2 2025', price: 13300 },
      { quarter: 'Q3 2025', price: 13800 },
      { quarter: 'Q4 2025', price: 14100 },
      { quarter: 'Q1 2026', price: 14500 }
    ]
  },
  {
    id: 'prop-108',
    title: 'Green Valley Serenade — Gated Villa Plot',
    tagline: 'BMRDA approved east-facing villa plot in eco-sustainable gated enclave',
    purpose: 'buy',
    propertyType: 'Plot / Land',
    bhk: 0,
    bathrooms: 0,
    balconies: 0,
    price: 13500000, // 1.35 Cr
    formattedPrice: '₹ 1.35 Cr',
    pricePerSqFt: 5625,
    areaSqFt: 2400,
    carpetAreaSqFt: 2400,
    city: 'Bengaluru',
    locality: 'Hebbal',
    address: 'Plot 42, Green Valley Enclave, Near Airport Road, Hebbal North',
    pincode: '562157',
    possession: 'Ready to Move',
    possessionDate: 'Immediate Registration',
    floor: 0,
    totalFloors: 0,
    furnishing: 'Unfurnished',
    facing: 'East',
    postedBy: 'Certified Agent',
    seller: {
      name: 'Harish Chandra',
      agency: 'AcreNova Land Capital',
      phone: '+91 99001 98455',
      email: 'harish@acrenovagroup.com',
      rating: 4.7,
      dealsClosed: 24,
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80'
    },
    reraId: 'PRM/KA/RERA/1250/303/PR/210319/004051',
    verified: true,
    featured: false,
    zeroBrokerage: false,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'Prime 40x60 corner residential villa plot with clear A-Katha title and all underground civic cabling (water, fiber optic, sewage line, electric lines). Gated boundary with 24x7 security, blacktop 40-ft wide roads, and clubhouse with tennis courts.',
    amenities: ['Landscaped Zen Garden', '24x7 Multi-Tier Security', 'Luxury Clubhouse', 'Tennis & Badminton Courts', "Children's Adventure Play Area"],
    neighborhood: {
      transitScore: 9.0,
      safetyScore: 9.8,
      lifestyleScore: 9.2,
      landmarks: [
        { name: 'Kempegowda International Airport (BLR)', distance: '18 mins drive' },
        { name: 'Hebbal Flyover', distance: '12 mins drive' },
        { name: 'Stonehill International School', distance: '6.5 km' },
        { name: 'Aster CMI Hospital', distance: '8.0 km' }
      ]
    },
    priceHistory: [
      { quarter: 'Q1 2025', price: 4600 },
      { quarter: 'Q2 2025', price: 4850 },
      { quarter: 'Q3 2025', price: 5100 },
      { quarter: 'Q4 2025', price: 5350 },
      { quarter: 'Q1 2026', price: 5625 }
    ]
  },
  {
    id: 'prop-109',
    title: 'The Solitaire Palms — Modern Family 3 BHK',
    tagline: 'Zero brokerage luxury residence near Koregaon Park greenery',
    purpose: 'buy',
    propertyType: 'Apartment / Flat',
    bhk: 3,
    bathrooms: 3,
    balconies: 2,
    price: 16500000, // 1.65 Cr
    formattedPrice: '₹ 1.65 Cr',
    pricePerSqFt: 9428,
    areaSqFt: 1750,
    carpetAreaSqFt: 1420,
    city: 'Pune',
    locality: 'Kalyani Nagar',
    address: 'Tower 4, Central Avenue, Near Bishop’s School, Kalyani Nagar',
    pincode: '411006',
    possession: 'Ready to Move',
    possessionDate: 'Immediate',
    floor: 8,
    totalFloors: 16,
    furnishing: 'Semi-Furnished',
    facing: 'East',
    postedBy: 'Verified Owner',
    seller: {
      name: 'Anjali Deshmukh',
      agency: 'Direct Owner',
      phone: '+91 97654 32109',
      email: 'anjali.d@deshmukhgroup.in',
      rating: 4.9,
      dealsClosed: 4,
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
    },
    reraId: 'P52100021980 (MahaRERA)',
    verified: true,
    featured: false,
    zeroBrokerage: true,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'Beautifully appointed 3-bedroom residence offering serene tree-lined views of Kalyani Nagar. Spacious balconies, premium Kohler bath fittings, centralized gas pipeline, and walking distance to top international schools and dining hubs.',
    amenities: ['Infinity Swimming Pool', 'Fitness Center & Spa', 'Luxury Clubhouse', '100% Power Backup', '24x7 Multi-Tier Security', 'Covered Stilt Parking', 'Landscaped Zen Garden', 'Piped Natural Gas (PNG)'],
    neighborhood: {
      transitScore: 9.3,
      safetyScore: 9.8,
      lifestyleScore: 9.7,
      landmarks: [
        { name: 'Koregaon Park Bridge', distance: '1.2 km' },
        { name: 'Pune International Airport', distance: '4.8 km' },
        { name: 'Phoenix Marketcity Mall', distance: '2.5 km' },
        { name: 'The Bishop’s Co-Ed School', distance: '600 meters' }
      ]
    },
    priceHistory: [
      { quarter: 'Q1 2025', price: 8200 },
      { quarter: 'Q2 2025', price: 8600 },
      { quarter: 'Q3 2025', price: 8900 },
      { quarter: 'Q4 2025', price: 9150 },
      { quarter: 'Q1 2026', price: 9428 }
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "AcreNova transformed our home buying journey. The verified RERA tracking, transparent pricing breakdown, and 3D visual walkthroughs saved us weeks of futile site visits.",
    author: "Dr. Siddharth & Neha Iyer",
    role: "Founders, MedTech Ventures, Bangalore",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Listing my DLF Phase 5 penthouse was seamless. Within 48 hours of posting, I connected directly with verified high-net-worth buyers without fielding spam broker calls.",
    author: "Kabir Malhotra",
    role: "Angel Investor, Gurugram",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The interactive EMI simulator and locality commute metrics gave us complete financial clarity before making our ₹3.2 Cr decision in Worli.",
    author: "Meera & Rohan Singhal",
    role: "Private Equity Directors, Mumbai",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  }
];
