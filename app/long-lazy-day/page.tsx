import { Metadata } from 'next'
import { ServiceHero } from '@/components/services/service-hero'
import { ServiceOverview } from '@/components/services/service-overview'
import { ServiceFacilities } from '@/components/services/service-facilities'
import { ServiceGalleryWithVideo } from '@/components/services/service-gallery-with-video'
import { ServiceCrossLinks } from '@/components/services/service-cross-links'
import { ServiceCTA } from '@/components/services/service-cta'

export const metadata: Metadata = {
  title: 'Long Lazy Day — Cafe & Nutrition | 1% Circle',
  description: 'Where health meets haute cuisine. Our in-house chef and nutritionist collaborate to craft meals that nourish body and soul at 1% Circle.',
}

const longLazyDayData = {
  hero: {
    title: 'Long Lazy Day',
    tagline: 'Fuel that feels like indulgence.',
    eyebrow: 'CAFE & NUTRITION',
    videoSrc: '/videos/long-lazy-day-hero.mp4',
    posterSrc: '/Lazy food Hero Image.png',
  },
  overview: {
    title: 'Culinary Wellness',
    description: `Long Lazy Day reimagines what healthy eating can be. Our in-house chef and nutritionist work in harmony to create dishes that satisfy the palate while fueling performance — because you shouldn't have to choose between delicious and nutritious.

Every ingredient is sourced with intention. We partner with organic farms and sustainable suppliers to ensure that what reaches your plate is as pure as it is flavorful. From power bowls that energize your morning to gourmet dinners that reward your day, each dish is a celebration of thoughtful nutrition.

Our cafe isn't just a place to eat — it's a gathering space for meaningful conversations, post-workout refueling, and moments of quiet indulgence. With private dining options and customized meal plans, Long Lazy Day adapts to your lifestyle.`,
    features: [],
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
  gallery: {
    video: {
      src: '/videos/deep-nourish-gallery.mp4',
      poster: '/images/deep-nourish-video-preview.jpg',
      alt: 'Long Lazy Day culinary experience',
      title: 'Culinary Journey',
    },
    images: [
      '/Lazy food Gallery1.png',
      '/Lazy food Gallery2.png',
      '/Lazy food Gallery3.png',
      '/Lazy food Gallery4.png',
    ],
  },
  crossLinks: [
    {
      name: '1% Circle',
      tagline: 'Where strength meets discipline',
      href: '/1-percent-circle',
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

export default function LongLazyDayPage() {
  return (
    <main>
      <ServiceHero {...longLazyDayData.hero} logo="/logos/long-lazy-day.svg" />
      <ServiceOverview {...longLazyDayData.overview} />
      <ServiceFacilities {...longLazyDayData.facilities} />
      <ServiceGalleryWithVideo {...longLazyDayData.gallery} />
      <ServiceCrossLinks services={longLazyDayData.crossLinks} />
      <ServiceCTA {...longLazyDayData.cta} />
    </main>
  )
}
