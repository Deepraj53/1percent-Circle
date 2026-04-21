'use client'

import { useEffect, useState } from 'react'

export function useLoader() {
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

  return showLoader
}
