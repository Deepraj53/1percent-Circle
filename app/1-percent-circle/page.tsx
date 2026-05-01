import { Metadata } from 'next'
import { ServiceHero } from '@/components/services/service-hero'
import { ServiceOverview } from '@/components/services/service-overview'
import { ServiceFacilities } from '@/components/services/service-facilities'
import { ServiceGalleryWithVideo } from '@/components/services/service-gallery-with-video'
import { ServiceCrossLinks } from '@/components/services/service-cross-links'
import { ServiceCTA } from '@/components/services/service-cta'

export const metadata: Metadata = {
  title: '1% Circle — Gym & Recovery | 1% Circle',
  description: 'State-of-the-art Precor fitness equipment, private training zones, and comprehensive recovery facilities. Experience fitness redefined at 1% Circle.',
}

const onePercentCircleData = {
  hero: {
    title: '1% Circle',
    tagline: 'Where strength meets discipline.',
    eyebrow: 'GYM & RECOVERY',
    videoSrc: '/videos/1percent-circle-hero.mp4',
    posterSrc: '/images/1percent-circle-hero.jpg',
  },
  overview: {
    title: 'Fitness, Redefined',
    description: `1% Circle represents the pinnacle of premium fitness. Our 4000 sq.ft. facility houses Precor equipment, private training zones, and state-of-the-art recovery rooms — all designed for those who demand excellence in every aspect of their fitness journey.

Every detail has been curated with intention. From the acoustics that create focus to the lighting that energizes, 1% Circle is not just a gym — it's a sanctuary for transformation. Our 1:7 trainer-to-member ratio ensures personalized attention that's simply impossible at conventional fitness centers.

Whether you're training for peak performance or seeking a holistic approach to strength and wellness, 1% Circle provides the environment, expertise, and exclusivity you deserve.`,
    features: [
      { label: '4000 sq.ft.', description: 'of premium training space' },
      { label: '1:7 Ratio', description: 'trainer to member' },
    ],
    imageSrc: '/images/gym-overview.jpg',
  },
  facilities: {
    title: 'World-Class Facilities',
    categories: [
      {
        name: 'Precor Equipment',
        items: [
          'Technogym Selection Line',
          'Rogue Olympic Platforms',
          'Eleiko Competition Weights',
          'Assault Fitness Cardio',
          'Concept2 Rowers',
          'SkiErg Performance',
          'Functional Training Rigs',
          'Private Stretching Studio',
        ],
      },
      {
        name: 'Training Styles',
        items: [
          'Strength & Powerlifting',
          'High-Intensity Interval',
          'Mobility & Flexibility',
          'Rehabilitation Programs',
          'Sport-Specific Training',
          'Body Composition',
          'Endurance Building',
          'Personal Training',
        ],
      },
      {
        name: 'Recovery',
        items: [
          'Cryotherapy Chamber',
          'NormaTec Compression',
          'Hyperice Recovery Suite',
          'Stretch Lab',
          'Ice Baths',
          'Infrared Sauna',
          'Sports Massage',
          'Physical Therapy',
        ],
      },
    ],
  },
  gallery: {
    video: {
      src: '/videos/1percent-circle-gallery.mp4',
      poster: '/images/1percent-circle-gallery-poster.jpg',
      alt: '1% Circle gym experience',
      title: 'Fitness Journey',
    },
    images: [
      '/Gallery 3.png',
      '/Gallery 4.png',
      '/Gallery 5.png',
      '/Gallery 6.png',
    ],
  },
  crossLinks: [
    {
      name: 'Long Lazy Day',
      tagline: 'Fuel that feels like indulgence',
      href: '/long-lazy-day',
      eyebrow: 'CAFE & NUTRITION',
    },
    {
      name: 'Deep Breath',
      tagline: 'Exhale the world. Inhale yourself.',
      href: '/deep-breath',
      eyebrow: 'SPA & WELLNESS',
    },
  ],
  cta: {
    title: 'Ready to transform?',
    description: 'Book a private gym tour and experience 1% Circle firsthand.',
    buttonText: 'Book a Gym Tour',
    href: '/membership#form',
  },
}

export default function OnePercentCirclePage() {
  return (
    <main>
      <ServiceHero {...onePercentCircleData.hero} logo="/logos/1percent-circle-logo.svg" />
      <ServiceOverview {...onePercentCircleData.overview} />
      <ServiceFacilities {...onePercentCircleData.facilities} />
      <ServiceGalleryWithVideo {...onePercentCircleData.gallery} />
      <ServiceCrossLinks services={onePercentCircleData.crossLinks} />
      <ServiceCTA {...onePercentCircleData.cta} />
    </main>
  )
}
