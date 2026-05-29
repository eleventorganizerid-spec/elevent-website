'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function AnimateIn({
  children,
  delay = 0,
  className = '',
  scroll = false,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  scroll?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const animate = () => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      el.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`
      setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 50)
    }

    if (scroll) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, 50)
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.15 }
      )
      observer.observe(el)
      return () => observer.disconnect()
    } else {
      animate()
    }
  }, [pathname, delay, scroll])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
