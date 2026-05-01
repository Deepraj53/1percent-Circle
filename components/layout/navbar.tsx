'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const services = [
  {
    name: '1% Circle',
    tagline: 'State-of-the-art fitness for the 1%',
    href: '/1-percent-circle',
    icon: 'gym',
  },
  {
    name: 'Long Lazy Day',
    tagline: 'Where health meets haute cuisine',
    href: '/long-lazy-day',
    icon: 'cafe',
  },
  {
    name: 'Deep Breath',
    tagline: 'Ancient rituals meet modern science',
    href: '/deep-breath',
    icon: 'spa',
  },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#', hasDropdown: true },
  { name: 'About', href: '/about' },
  { name: 'Membership', href: '/membership' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-center relative">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-foreground hover:text-copper transition-colors absolute left-0"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo - Left Side */}
            <Link
              href="/"
              className="flex items-center gap-2 group absolute left-0 lg:relative"
            >
              <Image
                src="/logos/1percent-circle-logo.svg"
                alt="1% Circle"
                width={196}
                height={68}
                className="h-[68px] brightness-0 invert dark:brightness-100 dark:invert-0 group-hover:opacity-80 transition-opacity"
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                >
                  {link.hasDropdown ? (
                    <button
                      className={cn(
                        'flex items-center gap-1 text-sm font-medium transition-colors relative group py-2',
                        'text-foreground/80 hover:text-foreground'
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        isServicesOpen && 'rotate-180'
                      )} />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-copper transition-all duration-300 group-hover:w-full" />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        'text-sm font-medium transition-colors relative group py-2',
                        pathname === link.href
                          ? 'text-copper'
                          : 'text-foreground/80 hover:text-foreground'
                      )}
                    >
                      {link.name}
                      <span className={cn(
                        'absolute bottom-0 left-0 h-0.5 bg-copper transition-all duration-300',
                        pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                      )} />
                    </Link>
                  )}

                  {/* Services Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-80"
                        >
                          <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
                            {services.map((service, index) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className={cn(
                                  'flex items-start gap-4 p-4 hover:bg-secondary transition-colors',
                                  index !== services.length - 1 && 'border-b border-border'
                                )}
                              >
                                <div className="flex-1">
                                  <p className="font-serif font-semibold text-foreground">
                                    {service.name}
                                  </p>
                                  <p className="text-sm text-muted-foreground mt-0.5">
                                    {service.tagline}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section - CTA Button */}
            <div className="flex items-center gap-4 absolute right-0 lg:relative">
              {/* Book a Call CTA */}
              <Link href="/membership#form">
                <Button
                  className="hidden sm:inline-flex bg-[#960808] hover:bg-[#7a0606] text-white font-medium px-6 shimmer"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute inset-0 bg-background flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/logos/1percent-circle-logo.svg"
                    alt="1% Circle"
                    width={136}
                    height={51}
                    className="h-[51px] brightness-0 invert dark:brightness-100 dark:invert-0"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-foreground"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-8 px-6">
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.hasDropdown ? (
                        <div className="py-4 border-b border-border">
                          <p className="text-lg font-serif font-semibold text-foreground mb-4">
                            {link.name}
                          </p>
                          <div className="space-y-3 pl-4">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2"
                              >
                                <p className="font-medium text-foreground">
                                  {service.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {service.tagline}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            'block py-4 text-lg font-serif font-semibold border-b border-border transition-colors',
                            pathname === link.href
                              ? 'text-copper'
                              : 'text-foreground'
                          )}
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-border">
                <Link
                  href="/membership#form"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block"
                >
                  <Button className="w-full bg-[#960808] hover:bg-[#7a0606] text-white font-medium h-12">
                    Book an Appointment
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
