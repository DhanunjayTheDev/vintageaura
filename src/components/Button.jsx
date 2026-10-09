import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs tracking-label uppercase font-medium transition-colors duration-300 min-h-11'

const variants = {
  solid: 'bg-gold text-cream hover:bg-gold-dark',
  outline: 'border border-gold text-ink hover:bg-gold hover:text-cream',
  'outline-light': 'border border-cream/70 text-cream hover:bg-cream hover:text-espresso',
}

export default function Button({ to, href, type = 'button', variant = 'solid', className = '', children, ...rest }) {
  const classes = `${base} ${variants[variant] ?? variants.solid} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
