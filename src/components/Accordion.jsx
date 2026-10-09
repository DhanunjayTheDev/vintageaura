import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="divide-y divide-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i} className="py-5">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left gap-4"
            >
              <span className="font-display text-lg text-ink">{item.q}</span>
              <ChevronDown
                size={18}
                className={`text-gold shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="text-muted text-sm leading-relaxed pt-3 pr-8">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
