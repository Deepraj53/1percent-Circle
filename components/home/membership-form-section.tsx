'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check, Phone, Mail, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { SelectorChips } from '@/components/ui/selector-chips'

const interests = [
  { id: 'deep-power', label: '1% Circle (Gym & Recovery)' },
  { id: 'deep-nourish', label: 'Long Lazy Day (Cafe & Nutrition)' },
  { id: 'deep-breath', label: 'Deep Breath (Spa & Wellness)' },
  { id: 'full-membership', label: 'Full Membership (All Access)' },
]

const timeSlots = [
  { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
  { value: 'afternoon', label: 'Afternoon (12 PM - 4 PM)' },
  { value: 'evening', label: 'Evening (4 PM - 8 PM)' },
]

const benefits = [
  'Private facility tour with membership team',
  'Personalized wellness assessment',
  'Custom membership recommendation',
  'Exclusive founding member rates',
]

export function MembershipFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="form" className="relative py-24 lg:py-32 bg-gradient-to-b from-background to-card overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-copper/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-copper/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-copper">
            Begin Your Journey
          </span>
          <h2 className="mt-4 font-serif text-3xl font-normal text-foreground sm:text-4xl lg:text-5xl text-balance">
            Apply for Membership
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Take the first step towards an elevated lifestyle. Our membership team 
            will reach out within 24 hours to schedule your private tour.
          </p>
        </motion.div>

        {/* Elite Members Banner with Background Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full h-40 md:h-48 lg:h-56 rounded-2xl overflow-hidden mb-12 border border-copper/20"
        >
          <Image
            src="/images/membership-lifestyle.jpg"
            alt="Elite wellness lifestyle"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-12 lg:px-16 max-w-2xl">
              <p className="text-white text-lg md:text-xl lg:text-2xl font-serif leading-relaxed">
                Join 200+ elite members who have elevated their wellness journey
              </p>
              <p className="text-white/70 text-sm md:text-base mt-2">
                Experience the transformation that awaits
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Benefits and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Benefits Card */}
            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
              <h3 className="font-serif text-xl font-normal text-foreground mb-6">
                What to Expect
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-copper" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Card */}
            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
              <h3 className="font-serif text-xl font-normal text-foreground mb-6">
                Prefer to Call?
              </h3>
              <div className="space-y-4">
                <a 
                  href="tel:+919591517774"
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-copper" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call us at</p>
                    <p className="font-medium text-foreground group-hover:text-copper transition-colors">
                      +91 95915 17774
                    </p>
                  </div>
                </a>
                <a 
                  href="mailto:1percentcirclepvtltd@gmail.com"
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-copper" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email us at</p>
                    <p className="font-medium text-foreground group-hover:text-copper transition-colors">
                      1percentcirclepvtltd@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>


          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full bg-card border border-copper/20 rounded-2xl p-8 lg:p-12 flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-copper/10 flex items-center justify-center">
                  <Check className="h-10 w-10 text-copper" />
                </div>
                <h3 className="font-serif text-2xl font-normal text-foreground mb-3">
                  Application Received
                </h3>
                <p className="text-muted-foreground max-w-md mb-8">
                  Thank you for your interest in 1% Circle. Our membership team will 
                  reach out within 24 hours to schedule your exclusive facility tour.
                </p>
                <div className="flex items-center gap-2 text-copper">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-medium">Expect a call within 24 hours</span>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 lg:p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="h-12 bg-background border-border focus:border-copper focus:ring-copper/20"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="h-12 bg-background border-border focus:border-copper focus:ring-copper/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 bg-secondary border border-r-0 border-border rounded-l-md text-muted-foreground text-sm">
                        +91
                      </span>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="98765 43210"
                        className="h-12 rounded-l-none bg-background border-border focus:border-copper focus:ring-copper/20"
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Contact Time</Label>
                    <select 
                      name="time" 
                      id="time"
                      defaultValue=""
                      className="flex h-12 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/20 focus-visible:border-copper disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>Select a time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Interests - Using SelectorChips */}
                <div className="space-y-3">
                  <Label>Interested In</Label>
                  <SelectorChips
                    options={interests}
                    value={selectedInterests}
                    onChange={(selected) => setSelectedInterests(selected)}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your wellness goals..."
                    rows={4}
                    className="bg-background border-border focus:border-copper focus:ring-copper/20 resize-none"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#960808] hover:bg-[#7a0606] text-white text-base group"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our{' '}
                  <a href="/privacy-policy" className="text-copper hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms-of-service" className="text-copper hover:underline">
                    Terms of Service
                  </a>
                  .
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
