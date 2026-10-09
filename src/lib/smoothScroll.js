import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenis = null
let rafCallback = null

export function initSmoothScroll() {
  if (lenis) return lenis

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  lenis = new Lenis({
    duration: reduced ? 0.1 : 1.1,
    smoothWheel: !reduced,
    syncTouch: false,
  })

  lenis.on('scroll', ScrollTrigger.update)

  rafCallback = (time) => lenis.raf(time * 1000)
  gsap.ticker.add(rafCallback)
  gsap.ticker.lagSmoothing(0)

  return lenis
}

export function destroySmoothScroll() {
  if (rafCallback) gsap.ticker.remove(rafCallback)
  if (lenis) lenis.destroy()
  lenis = null
  rafCallback = null
}

export function getLenis() {
  return lenis
}
