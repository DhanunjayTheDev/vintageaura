export default function Eyebrow({ children, center = false, dark = false, className = '' }) {
  return (
    <p
      className={`text-xs tracking-label uppercase font-medium ${dark ? 'text-gold-light' : 'text-gold'} ${
        center ? 'text-center' : ''
      } ${className}`}
    >
      {children}
    </p>
  )
}
