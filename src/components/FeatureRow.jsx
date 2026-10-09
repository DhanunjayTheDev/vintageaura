import { ArrowRight } from 'lucide-react'
import Parallax from './Parallax'
import Reveal from './Reveal'
import { Link } from 'react-router-dom'

export default function FeatureRow({ number, title, body, image, link, reverse = false }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <Reveal
        className={`${reverse ? 'md:order-2' : 'md:order-1'}`}
      >
        <Parallax src={image} alt={title} className="aspect-[4/3] rounded-sm" />
      </Reveal>

      <Reveal delay={0.1} className={reverse ? 'md:order-1' : 'md:order-2'}>
        <span className="font-display italic text-gold text-lg">{number}</span>
        <h3 className="text-3xl md:text-4xl mt-3 mb-5 text-ink">{title}</h3>
        <p className="text-muted leading-relaxed max-w-md">{body}</p>
        {link && (
          <Link
            to={link.to}
            className="inline-flex items-center gap-2 mt-6 text-xs tracking-label uppercase text-gold hover:text-gold-dark transition-colors group"
          >
            {link.label}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </Reveal>
    </div>
  )
}
