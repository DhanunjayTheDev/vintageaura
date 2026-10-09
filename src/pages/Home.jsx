import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Gem, Globe, Gauge, Headset, Leaf, Clapperboard, Star, ArrowRight } from 'lucide-react'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import Marquee from '../components/Marquee'
import Counter from '../components/Counter'
import FeatureRow from '../components/FeatureRow'
import PricingCard from '../components/PricingCard'
import Button from '../components/Button'
import { useReducedMotion } from '../lib/useReducedMotion'
import {
  heroContent,
  pressMarquee,
  quote,
  features,
  stats,
  signatureEvents,
  pricingTiers,
  auraDifference,
  testimonial,
  finalCta,
} from '../data/content'

const icons = { Gem, Globe, Gauge, Headset, Leaf, Clapperboard }

function Hero() {
  const heroRef = useRef(null)
  const imgRef = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      if (reduced) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(imgRef.current, { scale: 1.18 }, { scale: 1.05, duration: 2.4, ease: 'power2.out' })
        .from('.hero-line', { yPercent: 120, opacity: 0, duration: 1, stagger: 0.15 }, 0.3)
        .from('.hero-sub', { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero-cta', { y: 16, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.5')

      gsap.to(imgRef.current, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    },
    { scope: heroRef, dependencies: [reduced] }
  )

  return (
    <section ref={heroRef} className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
      <img
        ref={imgRef}
        src={heroContent.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/50 to-espresso/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-28 w-full">
        <Eyebrow dark className="hero-sub mb-5">
          {heroContent.eyebrow}
        </Eyebrow>
        <h1 className="font-display text-cream text-5xl sm:text-6xl md:text-7xl leading-[1.05] max-w-3xl">
          {heroContent.lines.map((line) => (
            <span key={line} className="block overflow-hidden">
              <span className="hero-line block">{line}</span>
            </span>
          ))}
        </h1>
        <p className="hero-sub text-cream/75 mt-6 max-w-lg leading-relaxed">{heroContent.subtext}</p>
        <div className="flex flex-wrap gap-4 mt-9">
          <Button to={heroContent.ctaPrimary.to} variant="solid" className="hero-cta">
            {heroContent.ctaPrimary.label}
          </Button>
          <Button to={heroContent.ctaSecondary.to} variant="outline-light" className="hero-cta">
            {heroContent.ctaSecondary.label}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-12 border-y border-ink/10 bg-cream">
        <Marquee items={pressMarquee} />
      </section>

      <section className="py-28 md:py-36 px-6">
        <Reveal as="div" className="max-w-3xl mx-auto text-center">
          <p className="font-display italic text-2xl md:text-3xl text-ink leading-snug">“{quote.text}”</p>
          <p className="text-muted mt-6 leading-relaxed">{quote.subtext}</p>
        </Reveal>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto space-y-28 md:space-y-36 pb-28 md:pb-36">
        {features.map((f, i) => (
          <FeatureRow key={f.number} {...f} reverse={i % 2 === 1} />
        ))}
      </section>

      <section className="bg-espresso py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <p className="font-display text-4xl md:text-5xl text-gold-light">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-cream/60 text-xs tracking-label uppercase mt-3">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <Eyebrow center>The Portfolio</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl mt-4">Our Signature Events</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {signatureEvents.map((e) => (
            <Reveal key={e.title} className="group relative aspect-[3/4] overflow-hidden">
              <img
                src={e.image}
                alt={e.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-gold-light text-xs tracking-label uppercase mb-2">{e.category}</p>
                <p className="font-display text-cream text-xl">{e.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-14">
          <Button to="/portfolio" variant="outline" className="inline-flex">
            View Full Portfolio <ArrowRight size={14} />
          </Button>
        </Reveal>
      </section>

      <section className="py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto bg-cream-alt/60">
        <Reveal className="text-center mb-16">
          <Eyebrow center>Investment</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl mt-4">Levels of Service</h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            Our all-inclusive tiers are designed to accommodate clarity, while preserving total customization.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 md:gap-0 items-stretch">
          {pricingTiers.map((tier) => (
            <Reveal key={tier.name}>
              <PricingCard tier={tier} className="h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <Eyebrow center>Why Vintage Aura</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl mt-4">The Aura Difference</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14 text-center">
          {auraDifference.map((item) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.title}>
                <div className="w-14 h-14 mx-auto rounded-full border border-gold/40 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-gold" />
                </div>
                <p className="font-display text-lg mb-2">{item.title}</p>
                <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">{item.body}</p>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="bg-espresso py-28 md:py-32 px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className="text-gold fill-gold" />
            ))}
          </div>
          <p className="font-display italic text-2xl md:text-3xl text-cream leading-snug">
            “{testimonial.quote}”
          </p>
          <p className="text-cream/50 text-xs tracking-label uppercase mt-6">{testimonial.attribution}</p>
        </Reveal>
      </section>

      <section className="bg-ink py-28 md:py-32 px-6 text-center">
        <Reveal>
          <Eyebrow dark center>{finalCta.eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-cream mt-4 leading-tight">
            {finalCta.title.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </h2>
          <p className="text-cream/60 mt-6 max-w-md mx-auto">{finalCta.body}</p>
          <Button to={finalCta.cta.to} variant="solid" className="mt-9 inline-flex">
            {finalCta.cta.label}
          </Button>
        </Reveal>
      </section>
    </>
  )
}
