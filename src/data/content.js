// Central content store: copy, nav, images (Unsplash), and structured data for every page.

export const img = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`

// Reusable photo library (validated Unsplash IDs, grouped by theme).
export const photos = {
  ballroom: '1414235077428-338989a2e8c0',
  candlelitTable: '1519741497674-611481863552',
  bride: '1511795409834-ef04bbd61622',
  concertCrowd: '1470753937643-efeb931202a9',
  concertHands: '1492684223066-81342ee5ff30',
  concertStage: '1501281668745-f7f57925c3b4',
  terraceDinner: '1478146059778-26028b07395a',
  tableSetting: '1522673607200-164d1b6ce486',
  goldTable: '1543083477-4f785aeafaa9',
  floralArch: '1583939003579-730e3918a45a',
  bokehLights: '1465495976277-4387d4b0b4c6',
  galaDinner: '1527529482837-4698179dc6ce',
  chandelier: '1517457373958-b7bdd4587205',
  ringsMacro: '1519167758481-83f550bb49b3',
  concertSilhouette: '1509927083803-4bd519298ac4',
  tableDecorDetail: '1533174072545-7a4b6ad7a6c3',
  danceFloor: '1550005809-91ad75fb315f',
  neonDance: '1560439514-4e9645039924',
  corporateSummit: '1600880292203-757bb62b4baf',
  conferenceAudience: '1552664730-d307ca884978',
  invitationSuite: '1541532713592-79a0317b6b77',
  receptionHall: '1591604466107-ec97de577aff',
  receptionAlt: '1520854221256-17451cc331bf',
  bartender: '1544025162-d76694265947',
  cocktailBar: '1470337458703-46ad1756a187',
  crowdCelebration: '1524117074681-31bd4de22ad3',
  confettiParty: '1517486808906-6ca8b3f04846',
  portraitWoman1: '1494790108377-be9c29b29330',
  portraitMan1: '1507003211169-0a1dd7228f2d',
  portraitWoman2: '1573496359142-b8d87734a5a2',
  portraitMan2: '1472099645785-5658abf4ff4e',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const footerLinks = {
  services: [
    { label: 'Weddings & Galas', to: '/services#weddings-galas' },
    { label: 'Corporate Events', to: '/services#corporate-events' },
    { label: 'Private Parties', to: '/services#private-parties' },
    { label: 'Concerts & Shows', to: '/services#concerts-shows' },
    { label: 'Product Launches', to: '/services#product-launches' },
  ],
  explore: [
    { label: 'Our Story', to: '/about' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'The Process', to: '/process' },
    { label: 'Journal', to: '/journal' },
    { label: 'Contact Us', to: '/contact' },
  ],
  contact: {
    address: ['1200 Elegance Blvd, Suite 400', 'Beverly Hills, CA 90210'],
    email: 'inquiries@vintageaura.com',
    phone: '+1 (310) 555-0198',
  },
}

export const pressMarquee = [
  'Vogue', 'Harper’s Bazaar', 'Forbes', 'Town & Country', 'Architectural Digest', 'Robb Report',
]

export const heroContent = {
  eyebrow: 'Bespoke Event Experiences',
  lines: ['Where Elegance Meets', 'Modern Luxury'],
  subtext:
    'We turn once-in-a-lifetime moments into cinematic realities — blending old-world craftsmanship with modern precision so every guest feels the room shift when they enter.',
  image: img(photos.ballroom, 2400),
  ctaPrimary: { label: 'Book Your Event', to: '/contact' },
  ctaSecondary: { label: 'View Portfolio', to: '/portfolio' },
}

export const quote = {
  text: 'We don’t just plan events. We design atmospheres that make time stand still.',
  subtext:
    'Vintage Aura was born at the intersection of old-world craftsmanship and modern spectacle. We believe every luxury event is an exercise in the choreography of light, sound, and human emotion — unified into one seamless, unforgettable feeling in the room.',
}

export const features = [
  {
    number: '01',
    title: 'Flawless Execution',
    body:
      'We handle every detail so you never have to think twice. Our production team operates with military precision — vendor logistics, run-of-show timing, and up-to-the-minute service delivery — so the mechanics of your event disappear and only its beauty remains.',
    image: img(photos.tableSetting),
    link: { label: 'See our detail-obsessed process', to: '/process' },
  },
  {
    number: '02',
    title: 'Bespoke Design',
    body:
      'No two events are alike, and neither are our designs. From floral installations to custom lighting rigs, every element is hand-developed around your story, your palette, and your guests — never pulled from a packaged catalogue.',
    image: img(photos.floralArch),
    link: { label: 'Explore our design philosophy', to: '/services' },
  },
  {
    number: '03',
    title: 'White-Glove Service',
    body:
      'A dedicated concierge team is with you from the first call to the final farewell. We anticipate needs before they’re spoken, so you and your guests can be fully present in the moment we’ve built for you.',
    image: img(photos.galaDinner),
    link: { label: 'Meet the concierge team', to: '/about' },
  },
]

export const stats = [
  { value: 12, suffix: '', label: 'Years of Excellence' },
  { value: 500, suffix: '+', label: 'Events Executed' },
  { value: 15, suffix: '', label: 'Industry Awards' },
  { value: 100, suffix: '%', label: 'Discretion' },
]

export const signatureEvents = [
  { title: 'Museum of Modern Art', category: 'Corporate Gala', image: img(photos.galaDinner) },
  { title: 'Acoustic in Amber', category: 'Private Concert', image: img(photos.chandelier) },
  { title: 'The Amalfi Vow', category: 'Destination Wedding', image: img(photos.floralArch) },
]

export const pricingTiers = [
  {
    name: 'Curated',
    tagline: 'For intimate, elegant occasions',
    price: 'From $45,000',
    featured: false,
    features: [
      'Full-service event planning',
      'Vendor sourcing & negotiation',
      'Day-of coordination team',
      'Custom floral & tablescape design',
      'One design revision round',
    ],
  },
  {
    name: 'Signature',
    tagline: 'Our most requested experience',
    price: 'From $110,000',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Everything in Curated, plus:',
      'Dedicated creative director',
      'Custom lighting & production design',
      'Multi-day guest experience planning',
      'Unlimited design revisions',
      'On-site producer for full run-of-show',
    ],
  },
  {
    name: 'Legacy',
    tagline: 'For landmark, multi-day celebrations',
    price: 'By private consultation',
    featured: false,
    features: [
      'Everything in Signature, plus:',
      'International & destination logistics',
      'Custom-built installations & sets',
      'Talent booking & entertainment curation',
      'Dedicated guest concierge desk',
      'Full post-event archival film',
    ],
  },
]

export const auraDifference = [
  { icon: 'Gem', title: 'Decades of Mastery', body: 'Fifteen years designing events for discerning, detail-driven clients worldwide.' },
  { icon: 'Globe', title: 'Global Vendor Network', body: 'Vetted florists, chefs, and artisans on three continents, ready on 72 hours notice.' },
  { icon: 'Gauge', title: 'Real-Time Dashboard', body: 'Track budget, timeline, and vendor status from a single live client portal.' },
  { icon: 'Headset', title: '24/7 Concierge', body: 'A dedicated line to your producer, day or night, from booking to breakdown.' },
  { icon: 'Leaf', title: 'Sustainable Luxury', body: 'Locally sourced blooms, zero-waste styling, and carbon-offset logistics as standard.' },
  { icon: 'Clapperboard', title: 'Cinematic Storytelling', body: 'Every event is documented like a film — because the memory matters as much as the night.' },
]

export const testimonial = {
  quote: 'Flawless execution from start to finish. Our summit was elevated to an art form, making our brand look impossible.',
  attribution: 'Chief Marketing Officer, Fortune 500 Technology Firm',
}

export const finalCta = {
  eyebrow: 'Inquiries Open for 2027',
  title: ['Every Great Event Begins', 'With a Conversation'],
  body: 'We take on a strictly limited number of events each year to protect the level of craft our clients expect.',
  cta: { label: 'Inquire Now', to: '/contact' },
}

// ---------------- Portfolio ----------------

export const galleryFilters = ['All', 'Weddings', 'Corporate', 'Birthdays', 'Concerts', 'Private']

export const galleryItems = [
  { image: img(photos.invitationSuite), caption: 'Late Night at the Manor Bar', category: 'Private' },
  { image: img(photos.ballroom), caption: 'Candlelit Cloister Quartet', category: 'Private' },
  { image: img(photos.bride), caption: 'A Quiet Moment Before the Aisle', category: 'Weddings' },
  { image: img(photos.terraceDinner), caption: 'Tuscan Sunset Reception', category: 'Weddings' },
  { image: img(photos.receptionHall), caption: 'Fireside Croquembouche', category: 'Weddings' },
  { image: img(photos.chandelier), caption: 'Winter Garden Centerpiece', category: 'Corporate' },
  { image: img(photos.floralArch), caption: 'The Vow Arch, Amalfi Coast', category: 'Weddings' },
  { image: img(photos.receptionAlt), caption: 'Manor House Arrival', category: 'Private' },
  { image: img(photos.bartender), caption: 'Tech Summit Cocktail Hour', category: 'Corporate' },
  { image: img(photos.galaDinner), caption: 'The Platinum Gala', category: 'Corporate' },
  { image: img(photos.crowdCelebration), caption: 'Masquerade at Midnight', category: 'Birthdays' },
  { image: img(photos.terraceDinner), caption: 'Coastal Cliffside Soiree', category: 'Private' },
  { image: img(photos.neonDance), caption: 'Twenty-First on the Skyline', category: 'Birthdays' },
  { image: img(photos.concertStage), caption: 'Acoustic in Amber', category: 'Concerts' },
  { image: img(photos.concertCrowd), caption: 'The Amber Room Sessions', category: 'Concerts' },
  { image: img(photos.goldTable), caption: 'Gilded Hour Tablescape', category: 'Weddings' },
]

// ---------------- About ----------------

export const aboutIntro = {
  eyebrow: 'Our Story',
  title: 'Designing Time',
  paragraphs: [
    'Vintage Aura was founded on a singular belief: the most memorable events are those that make you forget the outside world exists.',
    'Based in Los Angeles but executing globally, we are a collective of designers, producers, and visionaries. We draw inspiration from cinema, historical architecture, and classic hospitality to build environments that feel established, warm, and exceptionally elegant.',
  ],
  image: img(photos.ballroom),
}

export const philosophy = {
  quote: 'Luxury is the absence of friction. We orchestrate complexity so you only experience beauty.',
  attribution: 'The Vintage Aura Philosophy',
}

export const journey = [
  { year: '2008', title: 'The Beginning', body: 'Vintage Aura is founded with a singular vision for cinematic, highly personalized events.' },
  { year: '2011', title: 'Global Reach', body: 'Executed our first international event in a historic Lake Como villa, setting our standard for destination logistics.' },
  { year: '2015', title: 'Vogue Recognition', body: 'Named one of the top event design firms worldwide, solidifying our aesthetic signature.' },
  { year: '2019', title: '500th Event', body: 'A milestone celebration marking 500 flawless executions with an immaculate 100% discretion record.' },
  { year: '2024', title: 'Global Expansion', body: 'Expanded our production offices to three continents to serve our discerning international clientele.' },
]

export const team = [
  { name: 'Eleanor Vance', role: 'Founder & Creative Director', bio: 'With 15 years in luxury hospitality, Eleanor treats every venue like a theater stage.', image: img(photos.portraitWoman1, 800) },
  { name: 'Julian Sterling', role: 'Director of Production', bio: 'Julian orchestrates the impossible, managing complex global logistics.', image: img(photos.portraitMan1, 800) },
  { name: 'Victoria Hayes', role: 'Head of Floral & Styling', bio: 'A master of color theory, creating cascading organic masterpieces.', image: img(photos.portraitWoman2, 800) },
  { name: 'Marcus Thorne', role: 'Client Concierge', bio: 'Anticipating needs before they’re articulated with utter discretion.', image: img(photos.portraitMan2, 800) },
]

export const awards = [
  { title: 'Events of the Year', org: "Harper's Bazaar — 2023" },
  { title: 'Top Planners', org: 'Vogue Weddings — 2022' },
  { title: 'Design Excellence', org: 'Luxury Mag — 2021' },
  { title: 'Best Gala Execution', org: 'Event Industry Awards — 2020' },
  { title: 'Global Innovator', org: 'Town & Country — 2019' },
  { title: 'Platinum Service', org: 'Hospitality Excellence — 2018' },
]

// ---------------- Contact ----------------

export const onboarding = [
  { step: '01', label: 'Inquiry', body: 'Share your vision through our inquiry form and our team reviews it within 48 hours.' },
  { step: '02', label: 'Consultation', body: 'A private consultation — in person or virtual — to align on scope, style, and investment.' },
  { step: '03', label: 'Proposal', body: 'A tailored proposal with design direction, vendor recommendations, and full pricing.' },
  { step: '04', label: 'Confirmation', body: 'Contracts, deposits, and your dedicated producer are locked in.' },
  { step: '05', label: 'Your Event', body: 'We handle every detail through rehearsal, execution, and breakdown — you simply arrive.' },
]

export const faq = [
  { q: 'How far in advance should we book?', a: 'We recommend booking 9–18 months ahead for weddings and galas, and 3–6 months for private parties, though we occasionally accommodate shorter timelines.' },
  { q: 'Do you travel for destination events?', a: 'Yes — we execute events globally and maintain vetted vendor relationships across Europe, the Caribbean, and Asia-Pacific.' },
  { q: 'What is your pricing structure?', a: 'Pricing is tailored per event based on scope, guest count, and service tier. See our Services page for starting investment ranges.' },
  { q: 'Do you handle guest accommodations?', a: 'Our concierge team can manage room blocks, transportation, and welcome experiences for out-of-town guests.' },
  { q: 'Can we use our own vendors?', a: 'Absolutely. We’re happy to integrate trusted vendors of yours alongside our network, and will manage all coordination.' },
]

export const eventTypes = ['Wedding', 'Corporate Event', 'Private Party', 'Concert / Show', 'Product Launch', 'Other']
export const budgetRanges = ['$25,000 – $50,000', '$50,000 – $100,000', '$100,000 – $250,000', '$250,000+']

// ---------------- Services ----------------

export const serviceCategories = [
  {
    id: 'weddings-galas',
    title: 'Weddings & Galas',
    image: img(photos.floralArch),
    body: 'From intimate elopements to landmark destination weddings, we design ceremonies and receptions that feel unmistakably yours — florals, lighting, run-of-show, and guest experience unified into one seamless evening.',
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    image: img(photos.corporateSummit),
    body: 'Product launches, summits, and investor galas produced with the same precision we bring to a black-tie wedding — because your brand deserves a room that feels as considered as your product.',
  },
  {
    id: 'private-parties',
    title: 'Private Parties',
    image: img(photos.crowdCelebration),
    body: 'Milestone birthdays, anniversaries, and family celebrations, styled with the same bespoke design language as our largest productions — just for the people who matter most to you.',
  },
  {
    id: 'concerts-shows',
    title: 'Concerts & Shows',
    image: img(photos.concertStage),
    body: 'Private performances and listening rooms built around sound, sightlines, and atmosphere — full production design, talent logistics, and acoustic staging included.',
  },
  {
    id: 'product-launches',
    title: 'Product Launches',
    image: img(photos.chandelier),
    body: 'A launch is a first impression. We build immersive brand environments — from set design to press choreography — that make your product the only thing in the room worth talking about.',
  },
]

// ---------------- Journal ----------------

export const journalPosts = [
  { title: 'The Art of the Table: Designing Tablescapes That Tell a Story', category: 'Design', date: 'June 2026', image: img(photos.goldTable), excerpt: 'Why the smallest details on a 10-foot table can define an entire evening’s atmosphere.' },
  { title: 'Destination Logistics: What It Really Takes to Execute Abroad', category: 'Production', date: 'May 2026', image: img(photos.terraceDinner), excerpt: 'Inside the 14-month runway behind our Amalfi Coast weddings.' },
  { title: 'Lighting as Emotion: A Conversation With Our Design Director', category: 'Design', date: 'April 2026', image: img(photos.bokehLights), excerpt: 'How color temperature alone can shift a room from formal to intimate.' },
  { title: 'The Sustainable Luxury Playbook', category: 'Philosophy', date: 'March 2026', image: img(photos.receptionAlt), excerpt: 'Zero-waste florals, local sourcing, and carbon-offset logistics — without compromising spectacle.' },
  { title: 'Behind the Scenes of a 500-Guest Corporate Gala', category: 'Production', date: 'February 2026', image: img(photos.galaDinner), excerpt: 'A minute-by-minute look at our run-of-show for a Fortune 500 summit.' },
  { title: 'Choosing Your Signature Scent, Sound, and Palette', category: 'Design', date: 'January 2026', image: img(photos.candlelitTable), excerpt: 'The three-sense framework we use to open every new client engagement.' },
]

// ---------------- Process ----------------

export const processSteps = [
  { step: '01', title: 'Inquiry', body: 'It starts with a conversation. You share your vision, date, and rough scope through our inquiry form, and our team reviews every submission personally within 48 hours — no automated replies, no waiting in a queue.', image: img(photos.invitationSuite) },
  { step: '02', title: 'Consultation', body: 'We meet — in person or virtually — to understand not just the logistics, but the feeling you want your guests to leave with. This is where your creative director is assigned and the design direction begins to take shape.', image: img(photos.tableSetting) },
  { step: '03', title: 'Proposal', body: 'You receive a fully tailored proposal: mood boards, vendor recommendations, floor plans, and transparent pricing across every line item. Nothing is templated — every proposal is built from zero around your event.', image: img(photos.floralArch) },
  { step: '04', title: 'Confirmation', body: 'Once contracts and deposits are signed, your dedicated producer takes the reins. From this point, you have a single point of contact managing every vendor, deadline, and detail on your behalf.', image: img(photos.chandelier) },
  { step: '05', title: 'Your Event', body: 'On the day itself, our production team arrives hours before your first guest and stays until the last light is packed away. Your only job is to be present — we handle everything else.', image: img(photos.galaDinner) },
]
