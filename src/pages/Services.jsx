import PageHero from '../components/PageHero'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import Parallax from '../components/Parallax'
import PricingCard from '../components/PricingCard'
import Button from '../components/Button'
import { serviceCategories, pricingTiers } from '../data/content'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        subtitle="Five disciplines, one standard of craft — every event built from zero around the people in the room."
      />

      <section className="px-6 md:px-10 max-w-7xl mx-auto space-y-24 md:space-y-32 pb-28 md:pb-36">
        {serviceCategories.map((s, i) => (
          <div key={s.id} id={s.id} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center scroll-mt-28">
            <Reveal className={i % 2 === 1 ? 'md:order-2' : 'md:order-1'}>
              <Parallax src={s.image} alt={s.title} className="aspect-[4/3]" />
            </Reveal>
            <Reveal delay={0.1} className={i % 2 === 1 ? 'md:order-1' : 'md:order-2'}>
              <span className="font-display italic text-gold text-lg">0{i + 1}</span>
              <h2 className="text-3xl md:text-4xl mt-3 mb-5">{s.title}</h2>
              <p className="text-muted leading-relaxed max-w-md mb-6">{s.body}</p>
              <Button to="/contact" variant="outline">
                Request Quote
              </Button>
            </Reveal>
          </div>
        ))}
      </section>

      <section className="py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto bg-cream-alt/60">
        <Reveal className="text-center mb-16">
          <Eyebrow center>Investment</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl mt-4">Levels of Service</h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            Every tier includes a dedicated team, transparent pricing, and total creative ownership of your event.
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

      <section className="bg-ink py-28 md:py-32 px-6 text-center">
        <Reveal>
          <Eyebrow dark center>Ready When You Are</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-cream mt-4">Let’s Design Something Unforgettable</h2>
          <Button to="/contact" variant="solid" className="mt-9 inline-flex">
            Start Your Inquiry
          </Button>
        </Reveal>
      </section>
    </>
  )
}
