import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from '../lib/useReducedMotion'

export default function Counter({ value, suffix = '', duration = 1.6, className = '' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      if (!ref.current) return
      if (reduced) {
        ref.current.textContent = `${value}${suffix}`
        return
      }
      const counter = { val: 0 }
      gsap.to(counter, {
        val: value,
        duration,
        ease: 'power2.out',
        onUpdate: () => {
          ref.current.textContent = `${Math.round(counter.val)}${suffix}`
        },
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          once: true,
        },
      })
    },
    { dependencies: [reduced, value, suffix] }
  )

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}
