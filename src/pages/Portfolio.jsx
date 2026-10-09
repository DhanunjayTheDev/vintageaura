import { useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import PageHero from '../components/PageHero'
import { galleryFilters, galleryItems } from '../data/content'
import { useReducedMotion } from '../lib/useReducedMotion'

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const gridRef = useRef(null)
  const reduced = useReducedMotion()

  const filtered = useMemo(
    () => (filter === 'All' ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter]
  )

  useGSAP(
    () => {
      if (reduced || !gridRef.current) return
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.045, ease: 'power2.out' }
      )
    },
    { dependencies: [filter, reduced] }
  )

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="The Gallery"
        subtitle="A curated selection of our finest events. We let the atmosphere speak for itself."
      />

      <section className="px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pb-14 border-b border-ink/10">
          {galleryFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs tracking-label uppercase pb-1 border-b-2 transition-colors ${
                filter === f ? 'text-gold border-gold' : 'text-muted border-transparent hover:text-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-7xl mx-auto py-16 md:py-20">
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((item) => (
            <figure
              key={item.caption}
              className="group relative overflow-hidden aspect-[3/4]"
            >
              <img
                src={item.image}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-cream text-sm font-display">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted py-20">No events in this category yet — check back soon.</p>
        )}
      </section>
    </>
  )
}
