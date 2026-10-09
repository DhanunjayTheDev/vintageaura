import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from '../lib/useReducedMotion'

/**
 * An image container that drifts vertically as the page scrolls past it,
 * for a subtle cinematic parallax effect.
 */
export default function Parallax({ src, alt = '', className = '', strength = 12 }) {
  const containerRef = useRef(null)
  const imgRef = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      if (reduced) return
      gsap.fromTo(
        imgRef.current,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    },
    { scope: containerRef, dependencies: [reduced] }
  )

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute left-0 w-full object-cover"
        style={{ top: '-15%', height: '130%' }}
      />
    </div>
  )
}
