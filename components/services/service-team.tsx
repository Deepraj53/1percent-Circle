'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface TeamMember {
  name: string
  role: string
  credentials: string
  bio: string
  imageSrc: string
}

interface ServiceTeamProps {
  members: TeamMember[]
}

export function ServiceTeam({ members }: ServiceTeamProps) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-copper">
            Meet Your Team
          </span>
          <h2 className="mt-4 font-serif text-3xl font-normal text-foreground sm:text-4xl lg:text-5xl">
            World-class expertise
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Our hand-picked team of specialists brings decades of combined experience 
            to help you achieve your goals.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div>
                <h3 className="font-serif text-xl font-normal text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-copper font-medium text-sm">
                  {member.role}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {member.credentials}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
