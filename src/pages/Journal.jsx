import PageHero from '../components/PageHero'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { journalPosts } from '../data/content'

export default function Journal() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Notes on Luxury & Design"
        subtitle="Field notes from our design studio — on production, philosophy, and the craft behind the spectacle."
      />

      <section className="px-6 md:px-10 max-w-7xl mx-auto pb-28 md:pb-36">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {journalPosts.map((post) => (
            <Reveal key={post.title} as="article">
              <div className="aspect-[4/3] overflow-hidden mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <p className="text-gold text-[11px] tracking-label uppercase mb-2">
                {post.category} &middot; {post.date}
              </p>
              <h2 className="font-display text-xl leading-snug mb-2">{post.title}</h2>
              <p className="text-muted text-sm leading-relaxed">{post.excerpt}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-28 md:py-32 px-6 text-center">
        <Reveal>
          <Eyebrow dark center>Stay Informed</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-cream mt-4">Bring This Craft to Your Event</h2>
          <Button to="/contact" variant="solid" className="mt-9 inline-flex">
            Inquire Now
          </Button>
        </Reveal>
      </section>
    </>
  )
}
