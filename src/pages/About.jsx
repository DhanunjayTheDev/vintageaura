import { Award } from 'lucide-react'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import Parallax from '../components/Parallax'
import { aboutIntro, philosophy, journey, team, awards } from '../data/content'

export default function About() {
  return (
    <>
      <section className="pt-40 pb-24 md:pb-28 px-6 md:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Eyebrow>{aboutIntro.eyebrow}</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl mt-4 mb-6">{aboutIntro.title}</h1>
          {aboutIntro.paragraphs.map((p, i) => (
            <p key={i} className="text-muted leading-relaxed mb-4 max-w-md">
              {p}
            </p>
          ))}
        </Reveal>
        <Reveal delay={0.15}>
          <Parallax src={aboutIntro.image} alt={aboutIntro.title} className="aspect-[4/3]" />
        </Reveal>
      </section>

      <section className="bg-gold py-20 px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="font-display italic text-2xl md:text-3xl text-cream leading-snug">
            “{philosophy.quote}”
          </p>
          <p className="text-cream/80 text-xs tracking-label uppercase mt-6">{philosophy.attribution}</p>
        </Reveal>
      </section>

      <section className="py-28 md:py-36 px-6 md:px-10 max-w-5xl mx-auto">
        <Reveal className="text-center mb-20">
          <Eyebrow center>The History</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl mt-4">Our Journey</h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 md:-translate-x-1/2" />
          <div className="space-y-14">
            {journey.map((j, i) => (
              <div key={j.year} className="relative">
                <span className="absolute left-4 md:left-1/2 top-1.5 w-3 h-3 rounded-full bg-gold -translate-x-1/2" />
                <Reveal
                  y={i % 2 === 0 ? 30 : -30}
                  className={`pl-12 md:pl-0 md:w-1/2 ${
                    i % 2 === 0 ? 'md:pr-14 md:text-right' : 'md:pl-14 md:ml-auto'
                  }`}
                >
                  <p className="text-gold text-sm tracking-label uppercase mb-2">{j.year}</p>
                  <p className="font-display text-xl mb-2">{j.title}</p>
                  <p className="text-muted text-sm leading-relaxed max-w-sm md:inline-block">{j.body}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 px-6 md:px-10 max-w-7xl mx-auto bg-cream-alt/60">
        <Reveal className="text-center mb-16">
          <Eyebrow center>The Collective</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl mt-4">The Visionaries</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member) => (
            <Reveal key={member.name} className="text-center">
              <div className="aspect-square overflow-hidden mb-5 rounded-sm">
                <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <p className="font-display text-lg">{member.name}</p>
              <p className="text-gold text-[11px] tracking-label uppercase mt-1 mb-3">{member.role}</p>
              <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-28 md:py-36 px-6 md:px-10 max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl">Recognition</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-12 text-center">
          {awards.map((a) => (
            <Reveal key={a.title}>
              <Award size={26} className="text-gold mx-auto mb-4" />
              <p className="font-display text-lg">{a.title}</p>
              <p className="text-muted text-xs tracking-label uppercase mt-2">{a.org}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
