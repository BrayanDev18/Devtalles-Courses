import { PartnerLogo, RoadMap } from "../interfaces";

export const PartnersLogo: PartnerLogo[] = [
  {
    id: 1,
    name: 'Partner 1',
    logo: '/logos/1.png'
  },
  {
    id: 2,
    name: 'Partner 2',
    logo: '/logos/2.png'
  },
  {
    id: 3,
    name: 'Partner 3',
    logo: '/logos/3.png'
  },
  {
    id: 4,
    name: 'Partner 4',
    logo: '/logos/4.png'
  },
  {
    id: 5,
    name: 'Partner 5',
    logo: '/logos/5.png'
  },
  {
    id: 6,
    name: 'Partner 6',
    logo: '/logos/6.png'
  },
  {
    id: 7,
    name: 'Partner 7',
    logo: '/logos/7.png'
  },
  {
    id: 8,
    name: 'Partner 8',
    logo: '/logos/8.png'
  },
  {
    id: 9,
    name: 'Partner 9',
    logo: '/logos/9.png'
  }
];

export const roadMap: RoadMap[] = [
  {
    id: 1,
    title: 'Research',
    description: 'Conducting initial research and gathering requirements.'
  },
  {
    id: 2,
    title: 'Design',
    description: 'Creating design mockups and prototypes.'
  },
  {
    id: 3,
    title: 'Development',
    description: 'Starting development of the main features.'
  },
  {
    id: 4,
    title: 'Testing',
    description: 'Testing all features and fixing bugs.'
  },
  {
    id: 5,
    title: 'Launch',
    description: 'Preparing for launch and deployment.'
  }
];

export const featuresList = [
  {
    title: 'User Authentication',
    description: 'Secure and reliable user authentication with OAuth2 and JWT.'
  },
  {
    title: 'Real-time Notifications',
    description: 'Receive instant notifications for important events and updates.'
  },
  {
    title: 'Data Encryption',
    description: 'Ensure all data is encrypted at rest and in transit for maximum security.'
  },
  {
    title: 'Responsive Design',
    description: 'Seamless experience across all devices with a fully responsive design.'
  },
  {
    title: 'API Integration',
    description: 'Easily integrate with third-party services using our RESTful API.'
  },
  {
    title: 'User Management',
    description: 'Manage user roles, permissions, and profiles with ease.'
  },
  {
    title: 'Customizable Dashboard',
    description: 'Personalize your dashboard with customizable widgets and layouts.'
  },
  {
    title: 'Multi-language Support',
    description: 'Support for multiple languages to cater to a global audience.'
  },
  {
    title: 'Analytics and Reporting',
    description: 'Gain insights with comprehensive analytics and reporting tools.'
  },
  {
    title: 'Cloud Storage',
    description: 'Store and access your data securely in the cloud with scalable storage options.'
  }
];

export const pricing = [
  {
    title: 'Free',
    price: 0,
    description: 'For individuals and hobbyists',
    features: [
      'Up to 3 forms per month',
      'Basic AI form builders',
      'Basic form customization',
      'Limited responses'
    ],
    isPopular: false
  },
  {
    title: 'Basic',
    price: 10,
    description: 'For small teams and startups',
    features: [
      'Up to 10 forms per month',
      'Standard AI form builders',
      'Standard form customization',
      'Unlimited responses',
      'Email support'
    ],
    isPopular: true
  },
  {
    title: 'Pro',
    price: 30,
    description: 'For growing businesses',
    features: [
      'Unlimited forms',
      'Advanced AI form builders',
      'Advanced form customization',
      'Priority email support',
      'Analytics and reporting'
    ],
    isPopular: false
  }
];