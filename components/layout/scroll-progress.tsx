'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible || !isMounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-copper origin-left z-[9999]"
      style={{ scaleX }}
    />
  )
}
