import { Metadata } from 'next'
import { ServiceHero } from '@/components/services/service-hero'
import { ServiceOverview } from '@/components/services/service-overview'
import { ServiceFacilities } from '@/components/services/service-facilities'
import { ServiceTeam } from '@/components/services/service-team'
import { ServiceGallery } from '@/components/services/service-gallery'
import { ServiceCrossLinks } from '@/components/services/service-cross-links'
import { ServiceCTA } from '@/components/services/service-cta'

export const metadata: Metadata = {
  title: 'Long Lazy Day — Cafe & Nutrition | 1% Circle',
  description: 'Where health meets haute cuisine. Our in-house chef and nutritionist collaborate to craft meals that nourish body and soul at 1% Circle.',
}

const deepNourishData = {
  hero: {
    title: 'Long Lazy Day',
    tagline: 'Fuel that feels like indulgence.',
    eyebrow: 'CAFE & NUTRITION',
    videoSrc: '/videos/deep-nourish.mp4',
    posterSrc: '/Lazy food Hero Image.png',
  },
  overview: {
    title: 'Culinary Wellness',
    description: `Long Lazy Day reimagines what healthy eating can be. Our in-house chef and nutritionist work in harmony to create dishes that satisfy the palate while fueling performance — because you shouldn't have to choose between delicious and nutritious.

Every ingredient is sourced with intention. We partner with organic farms and sustainable suppliers to ensure that what reaches your plate is as pure as it is flavorful. From power bowls that energize your morning to gourmet dinners that reward your day, each dish is a celebration of thoughtful nutrition.

Our cafe isn't just a place to eat — it's a gathering space for meaningful conversations, post-workout refueling, and moments of quiet indulgence. With private dining options and customized meal plans, Long Lazy Day adapts to your lifestyle.`,
    features: [
      { label: '100%', description: 'organic ingredients' },
      { label: 'In-House', description: 'chef & nutritionist' },
      { label: 'Custom', description: 'meal plans available' },
      { label: 'Private', description: 'dining options' },
    ],
    imageSrc: '/Lazy food.png',
  },
  facilities: {
    title: 'Menu Philosophy',
    categories: [
      {
        name: 'Power Menu',
        items: [
          'Protein Power Bowls',
          'Energy Smoothies',
          'Performance Salads',
          'Lean Grills',
          'Superfood Plates',
          'Pre-Workout Bites',
          'Post-Workout Recovery',
          'Athletic Fuel Combos',
        ],
      },
      {
        name: 'Dietary Options',
        items: [
          'Vegan Selections',
          'Keto-Friendly',
          'Gluten-Free',
          'Low-Carb',
          'High-Protein',
          'Mediterranean',
          'Ayurvedic Inspired',
          'Custom Macros',
        ],
      },
      {
        name: 'Cafe Experience',
        items: [
          'Artisanal Coffee Bar',
          'Cold-Pressed Juices',
          'Wellness Tonics',
          'Private Dining Room',
          'Outdoor Terrace',
          'Meal Prep Service',
          'Nutrition Consultations',
          'Corporate Catering',
        ],
      },
    ],
  },
  team: [
    {
      name: 'Chef Sanjay Malhotra',
      role: 'Executive Chef',
      credentials: 'Le Cordon Bleu, 20+ Years Fine Dining',
      bio: 'Formerly of Michelin-starred kitchens in London and Singapore, Chef Sanjay now crafts healthy cuisine that rivals any gourmet experience.',
      imageSrc: '/images/team/chef-sanjay.jpg',
    },
    {
      name: 'Dr. Anita Rao',
      role: 'Head Nutritionist',
      credentials: 'PhD Nutrition Science, Sports Dietetics',
      bio: 'Dr. Rao designs personalized nutrition protocols that optimize performance, recovery, and overall wellness for each member.',
      imageSrc: '/images/team/nutritionist-anita.jpg',
    },
    {
      name: 'Rohan Desai',
      role: 'Wellness Sommelier',
      credentials: 'Certified Tea Master, Functional Beverages',
      bio: 'Rohan curates our beverage program, from adaptogenic lattes to recovery tonics designed to complement your wellness journey.',
      imageSrc: '/images/team/sommelier-rohan.jpg',
    },
    {
      name: 'Maya Krishna',
      role: 'Pastry Chef',
      credentials: 'Healthy Desserts Specialist',
      bio: 'Maya proves that indulgence can be healthy, creating guilt-free desserts that satisfy cravings without compromise.',
      imageSrc: '/images/team/pastry-maya.jpg',
    },
  ],
  gallery: [
    '/Lazy food Gallery1.png',
    '/Lazy food Gallery2.png',
    '/Lazy food Gallery3.png',
    '/Lazy food Gallery4.png',
    '/Lazy food Gallery5.png',
    '/Lazy food Gallery6.png',
  ],
  crossLinks: [
    {
      name: 'Deep Power',
      tagline: 'Where strength meets discipline',
      href: '/deep-power',
      eyebrow: 'GYM & RECOVERY',
    },
    {
      name: 'Deep Breath',
      tagline: 'Exhale the world. Inhale yourself.',
      href: '/deep-breath',
      eyebrow: 'SPA & WELLNESS',
    },
  ],
  cta: {
    title: 'Taste the difference',
    description: 'Reserve a table and experience cuisine crafted for peak performance.',
    buttonText: 'Reserve a Table',
    href: '/membership#form',
  },
}

export default function DeepNourishPage() {
  return (
    <main>
      <ServiceHero {...deepNourishData.hero} logo="/logos/long-lazy-day.svg" />
      <ServiceOverview {...deepNourishData.overview} />
      <ServiceFacilities {...deepNourishData.facilities} />
      <ServiceTeam members={deepNourishData.team} />
      <ServiceGallery images={deepNourishData.gallery} />
      <ServiceCrossLinks services={deepNourishData.crossLinks} />
      <ServiceCTA {...deepNourishData.cta} />
    </main>
  )
}
