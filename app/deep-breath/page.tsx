import { Metadata } from 'next'
import Image from 'next/image'
import { ServiceHero } from '@/components/services/service-hero'
import { ServiceOverview } from '@/components/services/service-overview'
import { ServiceFacilities } from '@/components/services/service-facilities'
import { ServiceGalleryWithVideo } from '@/components/services/service-gallery-with-video'
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
        name: 'Hair & Styling',
        items: [
          'Texture Style & Cuts',
          'Hair Wash & Blow Out',
          'Updo & Styling',
          'Flat Iron / Curl',
          'Hair Coloring & Highlights',
          'Balayage / Foilayage',
          'Keratin Smoothing / Botox',
          'Japanese Straightening',
          'Hair & Scalp Treatments',
          'Beard Shaving & Trimming',
        ],
      },
      {
        name: 'Skin & Body Care',
        items: [
          'Luxury Facial Treatments',
          'Premium Facials',
          'Classic Cleanups',
          'Threading',
          'Painless & Roll-on Waxing',
          'Intimate Waxing',
          'Bleach Treatments',
          'De-Tan Therapies',
          'Body Polishing',
          'Face Masks & Peels',
        ],
      },
      {
        name: 'Nails, Massage & Aesthetics',
        items: [
          'Manicure & Pedicure',
          'Nail Extensions & Gel Polish',
          'Nail Art & French Manicure',
          'Swedish & Aroma Therapy',
          'Deep Tissue & Thai Massage',
          'Balinese & Athletic Recovery',
          'Relaxing Massages',
          'Microblading & Micropigmentation',
          'Permanent Eyeliner & Lip Tinting',
          'Under Eye & Anti-Aging Treatments',
        ],
      },
    ],
  },
  gallery: {
    video: {
      src: '/videos/deep-breath-gallery.mp4',
      poster: '/images/deep-breath-gallery-poster.jpg',
      alt: 'Deep Breath spa experience',
      title: 'Wellness Journey',
    },
    images: [
      '/images/gallery/deep-breath-shower.jpg',
      '/images/gallery/deep-breath-3.jpg',
      '/images/gallery/deep-breath-gallery-a.jpg',
      '/images/gallery/deep-breath-gallery-b.jpg',
    ],
  },
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

const deepBreathTeam = [
  {
    name: 'Pallavi H Chandru',
    role: 'Director',
    image: '/images/team/pallavi.jpg',
  },
  {
    name: 'Pavithra',
    role: 'Director',
    image: '/images/team/pavithra.jpg',
  },
]

export default function DeepBreathPage() {
  return (
    <main>
      <ServiceHero {...deepBreathData.hero} logo="/logos/deep-breath.svg" />
      <ServiceOverview {...deepBreathData.overview} />
      <ServiceFacilities {...deepBreathData.facilities} />

      {/* Team Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-copper font-medium tracking-[0.2em] uppercase text-sm">
              The Team
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mt-4 text-balance">
              Meet the Directors
            </h2>
          </div>
          <div className="flex justify-center gap-12 flex-wrap">
            {deepBreathTeam.map((member, index) => (
              <div key={index} className="group text-center w-64">
                <div className="relative aspect-3/4 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-1">{member.name}</h3>
                <p className="text-copper font-medium text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceGalleryWithVideo {...deepBreathData.gallery} />
      <ServiceCrossLinks services={deepBreathData.crossLinks} />
      <ServiceCTA {...deepBreathData.cta} />
    </main>
  )
}
