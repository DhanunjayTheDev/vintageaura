import { Check } from 'lucide-react'
import Button from './Button'

export default function PricingCard({ tier, className = '' }) {
  const { name, tagline, price, featured, badge, features } = tier

  return (
    <div
      className={`relative flex flex-col p-10 ${
        featured
          ? 'bg-espresso text-cream md:-translate-y-4 shadow-2xl shadow-espresso/30 z-10'
          : 'bg-cream-alt text-ink'
      } ${className}`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-cream text-[11px] tracking-label uppercase px-4 py-1.5">
          {badge}
        </span>
      )}

      <h3 className={`font-display text-2xl mb-1 ${featured ? 'text-cream' : 'text-ink'}`}>{name}</h3>
      <p className={`text-sm mb-6 ${featured ? 'text-cream/70' : 'text-muted'}`}>{tagline}</p>
      <p className={`font-display text-xl mb-8 ${featured ? 'text-gold-light' : 'text-gold'}`}>{price}</p>

      <ul className="space-y-3 mb-10 flex-1">
        {features.map((f, i) => (
          <li key={i} className={`flex items-start gap-3 text-sm ${featured ? 'text-cream/85' : 'text-muted'}`}>
            <Check size={16} className="text-gold shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button to="/contact" variant={featured ? 'outline-light' : 'outline'} className="w-full">
        Request Quote
      </Button>
    </div>
  )
}
