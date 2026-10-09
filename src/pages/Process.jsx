import PageHero from '../components/PageHero'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import Parallax from '../components/Parallax'
import Button from '../components/Button'
import { processSteps } from '../data/content'

export default function Process() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="The Process"
        subtitle="Five stages between a first email and an unforgettable night — each one designed to remove friction from yours."
      />

      <section className="px-6 md:px-10 max-w-7xl mx-auto space-y-24 md:space-y-32 py-28 md:py-36">
        {processSteps.map((s, i) => (
          <div key={s.step} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal className={i % 2 === 1 ? 'md:order-2' : 'md:order-1'}>
              <Parallax src={s.image} alt={s.title} className="aspect-[4/3]" />
            </Reveal>
            <Reveal delay={0.1} className={i % 2 === 1 ? 'md:order-1' : 'md:order-2'}>
              <span className="font-display italic text-gold text-lg">{s.step}</span>
              <h2 className="text-3xl md:text-4xl mt-3 mb-5">{s.title}</h2>
              <p className="text-muted leading-relaxed max-w-md">{s.body}</p>
            </Reveal>
          </div>
        ))}
      </section>

      <section className="bg-ink py-28 md:py-32 px-6 text-center">
        <Reveal>
          <Eyebrow dark center>Step One Starts Here</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-cream mt-4">Ready to Begin the Inquiry?</h2>
          <Button to="/contact" variant="solid" className="mt-9 inline-flex">
            Start Your Event
          </Button>
        </Reveal>
      </section>
    </>
  )
}
