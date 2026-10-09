import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone } from 'lucide-react'
import { footerLinks } from '../data/content'

// lucide-react's icon set no longer ships brand/logo glyphs, so these three
// social marks are drawn inline, matching lucide's 24px stroke style.
const iconProps = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

const InstagramIcon = (props) => (
  <svg width={16} height={16} {...iconProps} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
)

const FacebookIcon = (props) => (
  <svg width={16} height={16} {...iconProps} {...props}>
    <path d="M15 3h-2a5 5 0 0 0-5 5v3H6v4h2v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
  </svg>
)

const LinkedinIcon = (props) => (
  <svg width={16} height={16} {...iconProps} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="3" />
    <line x1="7" y1="10" x2="7" y2="17" />
    <line x1="7" y1="6.5" x2="7" y2="6.6" />
    <path d="M11 17v-4.5a2.5 2.5 0 0 1 5 0V17" />
    <line x1="11" y1="10" x2="11" y2="17" />
  </svg>
)

const socials = [
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: LinkedinIcon, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/70">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div>
          <p className="font-display tracking-[0.2em] text-gold-light text-lg mb-4">VINTAGE AURA</p>
          <p className="text-sm leading-relaxed max-w-xs">
            Crafting extraordinary, cinematic experiences for discerning clients. Where old-world elegance meets
            modern luxury.
          </p>
          <div className="flex gap-3 mt-6">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-cream/25 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-cream text-base mb-5">Services</p>
          <ul className="space-y-3 text-sm">
            {footerLinks.services.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-gold-light transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-cream text-base mb-5">Explore</p>
          <ul className="space-y-3 text-sm">
            {footerLinks.explore.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-gold-light transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-cream text-base mb-5">Contact</p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
              <span>
                {footerLinks.contact.address[0]}
                <br />
                {footerLinks.contact.address[1]}
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-gold shrink-0" />
              <a href={`mailto:${footerLinks.contact.email}`} className="hover:text-gold-light">
                {footerLinks.contact.email}
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-gold shrink-0" />
              <a href={`tel:${footerLinks.contact.phone.replace(/[^\d+]/g, '')}`} className="hover:text-gold-light">
                {footerLinks.contact.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 text-xs text-cream/40 flex flex-col sm:flex-row gap-2 justify-between">
          <span>&copy; {new Date().getFullYear()} Vintage Aura. All rights reserved.</span>
          <span>By appointment only &mdash; Beverly Hills, CA</span>
        </div>
      </div>
    </footer>
  )
}
