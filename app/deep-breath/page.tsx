import { Metadata } from 'next'
import { ServiceHero } from '@/components/services/service-hero'
import { ServiceOverview } from '@/components/services/service-overview'
import { ServiceFacilities } from '@/components/services/service-facilities'
import { ServiceGallery } from '@/components/services/service-gallery'
import { ServiceCrossLinks } from '@/components/services/service-cross-links'
import { ServiceCTA } from '@/components/services/service-cta'

export const metadata: Metadata = {
  title: 'Deep Breath — Spa & Wellness | 1% Circle',
  description: 'Full-spectrum wellness where ancient rituals meet modern science. Turkish hammam, aromatherapy, infrared sauna, and personalized treatments at 1% Circle.',
}

const deepBreathData = {
  hero: {
    title: 'Deep Breath',
    tagline: 'Exhale the world. Inhale yourself.',
    eyebrow: 'SPA & WELLNESS',
    videoSrc: '/videos/deep-breath.mp4',
    posterSrc: '/deep-breath-spa.jpg',
  },
  overview: {
    title: 'Sanctuary for the Soul',
    description: `Deep Breath represents the pinnacle of holistic wellness — a sanctuary where ancient healing traditions converge with modern therapeutic science. Our eight treatment rooms, Turkish hammam, and infrared sauna create an environment designed for complete restoration.

Every treatment is personalized, beginning with a consultation that understands your unique needs. Whether you seek relief from stress, recovery from physical exertion, or simply moments of profound relaxation, our therapists craft experiences that transform both body and mind.

The atmosphere itself is curated for healing. Soft lighting, therapeutic aromatherapy, and temperatures calibrated for comfort create a cocoon of tranquility from the moment you enter. This is not a spa — it's a journey inward.`,
    features: [],
    imageSrc: '/Spa and Barner.jpg',
  },
  facilities: {
    title: 'Treatments & Facilities',
    categories: [
      {
        name: 'Signature Treatments',
        items: [
          'Turkish Hammam Ritual',
          'Deep Tissue Massage',
          'Hot Stone Therapy',
          'Aromatherapy Journey',
          'Reflexology',
          'Ayurvedic Abhyanga',
          'Sports Recovery Massage',
          'Couples Treatments',
        ],
      },
      {
        name: 'Wellness Therapies',
        items: [
          'Guided Meditation',
          'Sound Healing',
          'Breathwork Sessions',
          'Crystal Healing',
          'Chakra Balancing',
          'Reiki Energy Work',
          'Facial Treatments',
          'Body Wraps',
        ],
      },
      {
        name: 'Facilities',
        items: [
          '8 Treatment Rooms',
          'Turkish Hammam',
          'Infrared Sauna',
          'Steam Room',
          'Relaxation Lounge',
          'Cold Plunge Pool',
          'Outdoor Zen Garden',
          'Private Suites',
        ],
      },
    ],
  },
  gallery: [
    '/images/gallery/deep-breath-1.jpg',
    '/images/gallery/deep-breath-2.jpg',
    '/images/gallery/deep-breath-3.jpg',
    '/images/gallery/deep-breath-4.jpg',
    '/images/gallery/deep-breath-5.jpg',
    '/images/gallery/deep-breath-6.jpg',
  ],
  crossLinks: [
    {
      name: '1% Circle',
      tagline: 'Where strength meets discipline',
      href: '/deep-power',
      eyebrow: 'GYM & RECOVERY',
    },
    {
      name: 'Long Lazy Day',
      tagline: 'Fuel that feels like indulgence',
      href: '/deep-nourish',
      eyebrow: 'CAFE & NUTRITION',
    },
  ],
  cta: {
    title: 'Begin your restoration',
    description: 'Book a spa session and discover the transformative power of true wellness.',
    buttonText: 'Book a Spa Session',
    href: '/membership#form',
  },
}

export default function DeepBreathPage() {
  return (
    <main>
      <ServiceHero {...deepBreathData.hero} logo="/logos/deep-breath.svg" />
      <ServiceOverview {...deepBreathData.overview} />
      <ServiceFacilities {...deepBreathData.facilities} />
      <ServiceGallery images={deepBreathData.gallery} />
      <ServiceCrossLinks services={deepBreathData.crossLinks} />
      <ServiceCTA {...deepBreathData.cta} />
    </main>
  )
}
