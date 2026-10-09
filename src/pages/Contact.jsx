import { useState } from 'react'
import { MapPin, Mail, Phone, Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import Accordion from '../components/Accordion'
import Button from '../components/Button'
import { onboarding, faq, eventTypes, budgetRanges, footerLinks, heroContent } from '../data/content'

const inputClasses =
  'w-full bg-cream border border-ink/15 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-gold transition-colors'
const labelClasses = 'text-[11px] tracking-label uppercase text-muted mb-2 block'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  eventType: '',
  guests: '',
  date: '',
  budget: '',
  vision: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s Connect"
        subtitle="Begin the conversation for your extraordinary event."
        variant="dark"
        image={heroContent.image}
      />

      <section className="py-20 px-6 md:px-10 max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl text-center mb-14">The Onboarding Process</h2>
          <div className="relative">
            <div className="absolute top-4 left-[10%] right-[10%] h-px bg-gold/30 hidden md:block" />
            <div className="relative flex flex-wrap md:flex-nowrap justify-between gap-y-8">
              {onboarding.map((step) => (
                <div key={step.step} className="flex-1 text-center min-w-[110px]">
                  <div className="w-8 h-8 mx-auto rounded-full bg-cream border border-gold flex items-center justify-center text-gold font-display italic text-sm">
                    {step.step}
                  </div>
                  <p className="text-xs tracking-label uppercase mt-3">{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="pb-28 md:pb-36 px-6 md:px-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <Reveal>
          <h2 className="font-display text-3xl mb-6">The Office</h2>
          <p className="text-muted leading-relaxed mb-8 max-w-sm">
            We take on a strictly limited number of events each year to ensure our clients receive unparalleled
            service, total creative focus, and absolute discretion.
          </p>

          <ul className="space-y-6 mb-14">
            <li className="flex gap-4">
              <span className="w-11 h-11 border border-gold/40 rounded-sm flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-gold" />
              </span>
              <div>
                <p className="text-[11px] tracking-label uppercase text-muted mb-1">Headquarters</p>
                <p className="text-sm">
                  {footerLinks.contact.address[0]}
                  <br />
                  {footerLinks.contact.address[1]}
                </p>
                <p className="text-xs text-muted italic mt-1">By appointment only</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-11 h-11 border border-gold/40 rounded-sm flex items-center justify-center shrink-0">
                <Phone size={18} className="text-gold" />
              </span>
              <div>
                <p className="text-[11px] tracking-label uppercase text-muted mb-1">Direct Line</p>
                <p className="text-sm">{footerLinks.contact.phone}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-11 h-11 border border-gold/40 rounded-sm flex items-center justify-center shrink-0">
                <Mail size={18} className="text-gold" />
              </span>
              <div>
                <p className="text-[11px] tracking-label uppercase text-muted mb-1">Concierge Email</p>
                <p className="text-sm">{footerLinks.contact.email}</p>
              </div>
            </li>
          </ul>

          <h2 className="font-display text-2xl mb-2">Frequently Asked Questions</h2>
          <Accordion items={faq} />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-cream-alt p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mx-auto mb-6">
                  <Check size={24} className="text-cream" />
                </div>
                <h3 className="font-display text-2xl mb-3">Inquiry Received</h3>
                <p className="text-muted max-w-sm mx-auto">
                  Thank you, {form.firstName || 'friend'}. Our team reviews every inquiry personally and will
                  reach out within 48 hours to schedule your private consultation.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl mb-2">Event Inquiry</h2>
                <p className="text-muted text-sm mb-8">
                  Please provide as much detail as possible. Our team will review your inquiry and schedule a
                  private consultation.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClasses}>First Name *</label>
                      <input required value={form.firstName} onChange={update('firstName')} className={inputClasses} placeholder="Jane" />
                    </div>
                    <div>
                      <label className={labelClasses}>Last Name *</label>
                      <input required value={form.lastName} onChange={update('lastName')} className={inputClasses} placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClasses}>Email Address *</label>
                      <input required type="email" value={form.email} onChange={update('email')} className={inputClasses} placeholder="jane@example.com" />
                    </div>
                    <div>
                      <label className={labelClasses}>Phone Number</label>
                      <input type="tel" value={form.phone} onChange={update('phone')} className={inputClasses} placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-5">
                    <div>
                      <label className={labelClasses}>Event Type *</label>
                      <select required value={form.eventType} onChange={update('eventType')} className={inputClasses}>
                        <option value="">Select</option>
                        {eventTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClasses}>Est. Guests</label>
                      <input type="number" min="0" value={form.guests} onChange={update('guests')} className={inputClasses} placeholder="150" />
                    </div>
                    <div>
                      <label className={labelClasses}>Est. Date</label>
                      <input type="date" value={form.date} onChange={update('date')} className={inputClasses} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Budget Range</label>
                    <select value={form.budget} onChange={update('budget')} className={inputClasses}>
                      <option value="">Select expected investment</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClasses}>Tell Us About Your Vision *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.vision}
                      onChange={update('vision')}
                      className={inputClasses}
                      placeholder="Location ideas, aesthetic preferences, and any specific details that matter most to you…"
                    />
                  </div>

                  <Button type="submit" variant="solid">
                    Submit Inquiry
                  </Button>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </section>
    </>
  )
}
