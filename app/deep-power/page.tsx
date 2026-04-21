import { Metadata } from 'next'
import { ServiceHero } from '@/components/services/service-hero'
import { ServiceOverview } from '@/components/services/service-overview'
import { ServiceFacilities } from '@/components/services/service-facilities'
import { ServiceTeam } from '@/components/services/service-team'
import { ServiceGallery } from '@/components/services/service-gallery'
import { ServiceCrossLinks } from '@/components/services/service-cross-links'
import { ServiceCTA } from '@/components/services/service-cta'

export const metadata: Metadata = {
  title: '1% Circle — Gym & Recovery | 1% Circle',
  description: 'State-of-the-art Olympic-grade fitness equipment, private training zones, and comprehensive recovery facilities. Experience fitness redefined at 1% Circle.',
}

const deepPowerData = {
  hero: {
    title: '1% Circle',
    tagline: 'Where strength meets discipline.',
    eyebrow: 'GYM & RECOVERY',
    videoSrc: '/videos/deep-power.mp4',
    posterSrc: '/Deep Power Hero.png',
  },
  overview: {
    title: 'Fitness, Redefined',
    description: `1% Circle represents the pinnacle of premium fitness. Our 12,000 sq.ft. facility houses Olympic-grade equipment, private training zones, and state-of-the-art recovery rooms — all designed for those who demand excellence in every aspect of their fitness journey.

Every detail has been curated with intention. From the acoustics that create focus to the lighting that energizes, 1% Circle is not just a gym — it's a sanctuary for transformation. Our 1:7 trainer-to-member ratio ensures personalized attention that's simply impossible at conventional fitness centers.

Whether you're training for peak performance or seeking a holistic approach to strength and wellness, 1% Circle provides the environment, expertise, and exclusivity you deserve.`,
    features: [
      { label: '12,000 sq.ft.', description: 'of premium training space' },
      { label: '1:7 Ratio', description: 'trainer to member' },
      { label: 'Olympic-Grade', description: 'equipment & facilities' },
      { label: '24/7 Access', description: 'for platinum members' },
    ],
    imageSrc: '/og-image.jpg',
  },
  facilities: {
    title: 'World-Class Facilities',
    categories: [
      {
        name: 'Equipment',
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
  team: [
    {
      name: 'Arjun Kapoor',
      role: 'Head Trainer & Performance Director',
      credentials: 'NSCA-CSCS, ACE-CPT, 15+ Years Experience',
      bio: 'Former national-level athlete turned elite coach. Arjun has trained executives, celebrities, and athletes across three continents.',
      imageSrc: '/images/team/trainer-arjun.jpg',
    },
    {
      name: 'Priya Venkatesh',
      role: 'Strength & Conditioning Coach',
      credentials: 'MSc Sports Science, UKSCA Accredited',
      bio: 'Specializing in biomechanics and injury prevention, Priya designs programs that build sustainable strength.',
      imageSrc: '/images/team/trainer-priya.jpg',
    },
    {
      name: 'Dr. Rahul Sharma',
      role: 'Sports Physiotherapist',
      credentials: 'DPT, Sports Medicine Fellow',
      bio: 'With experience in professional sports medicine, Dr. Sharma ensures every member trains safely and recovers optimally.',
      imageSrc: '/images/team/physio-rahul.jpg',
    },
    {
      name: 'Kavita Nair',
      role: 'Nutrition Consultant',
      credentials: 'RD, Sports Nutrition Specialist',
      bio: 'Kavita bridges the gap between training and nutrition, creating customized plans that fuel performance.',
      imageSrc: '/images/team/nutritionist-kavita.jpg',
    },
  ],
  gallery: [
    '/Gallery 1.png',
    '/Gallery 2.png',
    '/Gallery 3.png',
    '/Gallery 4.png',
    '/Gallery 5.png',
    '/Gallery 6.png',
  ],
  crossLinks: [
    {
      name: 'Long Lazy Day',
      tagline: 'Fuel that feels like indulgence',
      href: '/deep-nourish',
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

export default function DeepPowerPage() {
  return (
    <main>
      <ServiceHero {...deepPowerData.hero} logo="/logos/1percent-circle-logo.svg" />
      <ServiceOverview {...deepPowerData.overview} />
      <ServiceFacilities {...deepPowerData.facilities} />
      <ServiceTeam members={deepPowerData.team} />
      <ServiceGallery images={deepPowerData.gallery} />
      <ServiceCrossLinks services={deepPowerData.crossLinks} />
      <ServiceCTA {...deepPowerData.cta} />
    </main>
  )
}
