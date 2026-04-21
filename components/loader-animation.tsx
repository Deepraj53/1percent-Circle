'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoaderAnimation() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    // Check if loader has already been shown in this session
    const loaderShown = sessionStorage.getItem('loaderShown')

    if (loaderShown) {
      setShowLoader(false)
      return
    }

    // Wait for page to fully load
    const handleLoadComplete = () => {
      if (document.readyState === 'complete') {
        // Add a small delay for smooth fade-out
        setTimeout(() => {
          setShowLoader(false)
          sessionStorage.setItem('loaderShown', 'true')
        }, 500)
      }
    }

    // Check current load state
    if (document.readyState === 'complete') {
      handleLoadComplete()
    } else {
      // Listen for load completion
      window.addEventListener('load', handleLoadComplete)
      return () => window.removeEventListener('load', handleLoadComplete)
    }
  }, [])

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <video
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            onEnded={() => {
              // Video ended, start fade out
              setTimeout(() => {
                setShowLoader(false)
                sessionStorage.setItem('loaderShown', 'true')
              }, 300)
            }}
          >
            <source src="/videos/loader-animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
