"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  isDecimal?: boolean
  decimals?: number
  duration?: number
  className?: string
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  isDecimal = false,
  decimals = 1,
  duration = 2000,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  const displayValue = isDecimal ? count.toFixed(decimals) : Math.round(count)

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
