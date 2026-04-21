'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FlickeringGrid } from '@/components/ui/flickering-grid'

const footerLinks = [
  {
    title: 'Experience',
    links: [
      { id: 1, name: '1% Circle', href: '/deep-power' },
      { id: 2, name: 'Long Lazy Day', href: '/deep-nourish' },
      { id: 3, name: 'Deep Breath', href: '/deep-breath' },
      { id: 4, name: 'Membership', href: '/membership' },
    ],
  },
  {
    title: 'Company',
    links: [
      { id: 5, name: 'About', href: '/about' },
      { id: 6, name: 'Contact', href: '/contact' },
      { id: 7, name: 'Careers', href: '/careers' },
      { id: 8, name: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { id: 9, name: 'Privacy Policy', href: '/privacy-policy' },
      { id: 10, name: 'Terms of Service', href: '/terms-of-service' },
      { id: 11, name: 'Refund Policy', href: '/refund-policy' },
    ],
  },
]

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/1percentcircle', icon: Instagram },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/1percentcircle', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com/@1percentcircle', icon: Youtube },
]

function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function checkQuery() {
      const result = window.matchMedia(query);
      setValue(result.matches);
    }

    checkQuery();

    window.addEventListener("resize", checkQuery);
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", checkQuery);

    return () => {
      window.removeEventListener("resize", checkQuery);
      mediaQuery.removeEventListener("change", checkQuery);
    };
  }, [query]);

  return value;
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const tablet = useMediaQuery("(max-width: 1024px)");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-card border-t border-border pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Smaller the circle, higher the standards. Bangalore&apos;s most exclusive wellness 
              and fitness destination, designed for those who expect nothing less than extraordinary.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="https://google.com/maps?q=1+Percent+Circle,+40,+signature+heights,+Shubh+enclave,+Haralur+Main+Rd,+Bengaluru,+Karnataka+560102&ftid=0x3bae13f4e2749e41:0xe7183e888e4d5179&entry=gps&shh=CAE&lucs=,94297699,94275415,94284460,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTksOTQyNzU0MTUsOTQyODQ0NjAsOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAklO&skid=79d79fef-e252-4672-a500-2e4ef1e3248a&g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-muted-foreground hover:text-copper transition-colors text-sm"
              >
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-copper" />
                <span>
                  #40, Signature Heights, Shubh Enclave<br />
                  Haraluru Main Road, Bengaluru – 560 102
                </span>
              </a>
              <a
                href="tel:+919591517774"
                className="flex items-center gap-3 text-muted-foreground hover:text-copper transition-colors text-sm"
              >
                <Phone className="h-5 w-5 shrink-0 text-copper" />
                <span>+91 95915 17774</span>
              </a>
              <a
                href="mailto:1percentcirclepvtltd@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-copper transition-colors text-sm"
              >
                <Mail className="h-5 w-5 shrink-0 text-copper" />
                <span>1percentcirclepvtltd@gmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-secondary hover:bg-copper/20 text-muted-foreground hover:text-copper transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {footerLinks.map((column) => (
                <div key={column.title}>
                  <h4 className="text-sm font-semibold text-foreground mb-4">
                    {column.title}
                  </h4>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.id}>
                        <Link
                          href={link.href}
                          className="group inline-flex items-center gap-1 text-muted-foreground hover:text-copper transition-colors text-sm"
                        >
                          {link.name}
                          <ChevronRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Stay Updated
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to receive exclusive updates, wellness insights, and member-only invitations.
            </p>
            {isSubscribed ? (
              <div className="p-4 bg-copper/10 rounded-xl border border-copper/20">
                <p className="text-copper text-sm font-medium">
                  Thank you for subscribing!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-secondary border-border focus:border-copper focus:ring-copper/20"
                />
                <Button
                  type="submit"
                  className="w-full bg-[#960808] hover:bg-[#7a0606] text-white"
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            <p className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} 1% Circle. All rights reserved.
            </p>
            <span className="hidden sm:inline text-muted-foreground/50">|</span>
            <p className="text-muted-foreground text-xs">
              Handcrafted by Happening
            </p>
            <span className="hidden sm:inline text-muted-foreground/50">|</span>
            <p className="text-muted-foreground text-xs">
              Crafted with excellence for the discerning few.
            </p>
          </div>
        </div>
      </div>

      {/* Flickering Grid Footer */}
      <div className="w-full h-48 md:h-64 relative mt-8 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-card z-10 from-40%" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            text={tablet ? "1%" : "1% Circle"}
            fontSize={tablet ? 70 : 90}
            className="h-full w-full"
            squareSize={2}
            gridGap={tablet ? 2 : 3}
            color="#B87333"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  )
}
