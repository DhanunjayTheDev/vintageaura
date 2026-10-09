import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

export default function PageHero({ eyebrow, title, subtitle, variant = 'light', image }) {
  if (variant === 'dark') {
    return (
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso" />
        <div className="relative z-10 text-center px-6 pt-20">
          <Reveal>
            <Eyebrow center dark>
              {eyebrow}
            </Eyebrow>
            <h1 className="font-display text-5xl md:text-6xl text-cream mt-4">{title}</h1>
            {subtitle && <p className="text-cream/70 mt-5 max-w-xl mx-auto">{subtitle}</p>}
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-40 pb-20 px-6 text-center bg-cream">
      <Reveal>
        <Eyebrow center>{eyebrow}</Eyebrow>
        <h1 className="font-display text-5xl md:text-6xl text-ink mt-4">{title}</h1>
        {subtitle && <p className="text-muted mt-5 max-w-xl mx-auto">{subtitle}</p>}
      </Reveal>
    </section>
  )
}
