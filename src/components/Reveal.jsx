import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from '../lib/useReducedMotion'

/**
 * Fades + slides children up as they enter the viewport.
 * Wraps in a plain div — pass `as` to change the tag.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  y = 32,
  delay = 0,
  duration = 0.9,
  start = 'top 85%',
  ...rest
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      if (reduced) return
      gsap.from(ref.current, {
        opacity: 0,
        y,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          once: true,
        },
      })
    },
    { scope: ref, dependencies: [reduced] }
  )

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
