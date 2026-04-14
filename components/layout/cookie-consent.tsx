'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="mx-auto max-w-4xl bg-card border border-border rounded-2xl shadow-2xl p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-serif font-semibold text-foreground mb-1">
                  We value your privacy
                </h3>
                <p className="text-sm text-muted-foreground">
                  We use cookies to enhance your browsing experience and analyze our traffic.{' '}
                  <Link href="/privacy-policy" className="text-copper hover:underline">
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  onClick={declineCookies}
                  className="flex-1 sm:flex-none border-border text-foreground hover:bg-secondary hover:text-foreground"
                >
                  Decline
                </Button>
                <Button
                  onClick={acceptCookies}
                  className="flex-1 sm:flex-none bg-[#960808] hover:bg-[#7a0606] text-white"
                >
                  Accept
                </Button>
              </div>
              <button
                onClick={declineCookies}
                className="absolute top-4 right-4 sm:hidden p-1 text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
