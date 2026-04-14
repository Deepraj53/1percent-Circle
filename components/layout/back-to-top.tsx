'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 50vh
      setIsVisible(window.scrollY > window.innerHeight * 0.5)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-12 h-12 bg-card border border-border rounded-full shadow-lg hover:bg-copper/10 hover:border-copper transition-colors"
          aria-label="Back to top"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="h-5 w-5 text-copper" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
