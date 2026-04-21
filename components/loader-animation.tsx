'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoaderAnimation() {
  const [showLoader, setShowLoader] = useState(true)

  const handleVideoEnd = () => {
    // Video has completed one full sequence
    setTimeout(() => {
      setShowLoader(false)
    }, 300)
  }

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          {/* Video container centered and smaller */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <video
              autoPlay
              muted
              playsInline
              className="w-64 h-64 md:w-96 md:h-96 object-contain"
              onEnded={handleVideoEnd}
            >
              <source src="/videos/loader-animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
