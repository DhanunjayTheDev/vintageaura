import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from '../lib/useReducedMotion'

export default function Marquee({ items, className = '' }) {
  const trackRef = useRef(null)
  const tweenRef = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      if (reduced) return
      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 28,
        ease: 'none',
      })
    },
    { scope: trackRef, dependencies: [reduced] }
  )

  const pause = () => tweenRef.current?.pause()
  const resume = () => tweenRef.current?.resume()

  return (
    <div className={`overflow-hidden ${className}`} onMouseEnter={pause} onMouseLeave={resume}>
      <div ref={trackRef} className="flex w-max items-center gap-16 whitespace-nowrap will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="font-display italic text-xl md:text-2xl text-muted/70">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
