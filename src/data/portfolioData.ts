import { Story, Discipline, JournalArticle, MonographPlate } from '../types';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida/AEtjO1U24DhcjmqTG7ybcPKC5C_8iNobzkrIIeuTldkVvyzbu08Rf1b1nMP5zKGgSwxGmGOp_W9xj9oPjRArWD8hsqZNeVoDws1M_lui94F15OJuNCCZM9M1ghZ0TUosiNPGJ_27jVmt8L0MZDdLhVLLtuQQCOllBhdJc4WhDH1rV6mlpeOqk_pJs2vgOfAFu9eRO_iU6WxAEJzsXVUjDyrflyrIAjGimPOQbzQh8IW31clgrnMig2BgBlcDnCk";
export const BANQUET_IMAGE = "https://lh3.googleusercontent.com/aida/AEtjO1XEudKadM6y_d__u5OJWRhXpIwnLbIclRe95cOpuxOVahtJmHxG71wnIKXN9Dc3Fd7FleAA_4dGgK2BVchQ7mnagVNM0kBVyMo2FMKJBKqz2aprFH3xUqBlOBJ1rsIk16nR2JN9hn9t-bkTZkkvAw8pspaSjkfpQWCSOTlRJ-BNI5-_ueHlsjcN-8wNd1VTDbAujDDUF6wCp1gtkELzYQmQg6HvpI3PfIbSKIAqwYQ7QU2gKFfp5AxUvA";
export const HANDS_RINGS_IMAGE = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80";
export const STATIONERY_IMAGE = "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80";
export const JULIEN_IMAGE = "https://lh3.googleusercontent.com/aida/AEtjO1VTeo01WHhk67ohCZARVORdDJNZ3iKjBVhWCJaJxT9Isizbx5-gMUzhjtCP_XY-MTDH1sUaESxdJKWi2rAch8H4qNbB5KY1eqCYE17DJZjrdivJg9V_aM9oPXEgKtULspWdiMV4iMDnGQSALllvNQO-gInFucC8eY717FWCLetDiBxK1MP03BpdmaFoZhuTJyugW0iOgxTZqNGbdVoT0L1jKg4jkJMbUfCRZzTfkuaya_Ij4wdf8mBYvWQ";
export const COURTYARD_VOWS_IMAGE = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80";
export const TABLE_DETAIL_IMAGE = "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80";
export const TOAST_IMAGE = "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80";
export const ELDERLY_DANCE_IMAGE = "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80";
export const ARCHWAY_IMAGE = "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80";

export const STORIES: Story[] = [
  {
    id: 'story-01',
    number: '01',
    title: 'The Wedding of A & M',
    subtitle: 'Odisha — Communal Dusk Dinner & Long Table Gathering',
    location: 'Odisha, India',
    date: 'Oct 2026',
    category: 'weddings',
    image: BANQUET_IMAGE,
    aspectRatio: '16/10',
    colSpan: 'lg:col-span-7',
    plateCaption: 'Communal dinner under hanging string bulbs and whispering banyan branches',
    excerpt: 'An unhurried three-day celebration celebrating heritage, handwritten poetry, and late-night toasts by candlelight.',
    filmStock: 'Kodak Portra 400 & Tri-X 400',
    camera: 'Leica M6 · 35mm Summilux'
  },
  {
    id: 'story-02',
    number: '02',
    title: 'An Autumn Evening',
    subtitle: 'Bhubaneswar — Golden Light in Ancient Courtyard',
    location: 'Bhubaneswar, India',
    date: 'Nov 2026',
    category: 'weddings',
    image: HERO_IMAGE,
    aspectRatio: '4/5',
    colSpan: 'lg:col-span-5',
    plateCaption: 'Morning quietude framed in sandstone archway as soft light spills onto hand-woven silk',
    excerpt: 'The delicate stillness before arrivals, where breath slows and natural light softens the room.',
    filmStock: 'Kodak Portra 160 (120 roll)',
    camera: 'Contax 645 · Carl Zeiss 80mm f/2.0'
  },
  {
    id: 'story-03',
    number: '03',
    title: 'A Day In Between',
    subtitle: 'Private Celebration — Vows by the Water',
    location: 'Lake Como, Italy',
    date: 'Sep 2026',
    category: 'gatherings',
    image: HANDS_RINGS_IMAGE,
    aspectRatio: '3/2',
    colSpan: 'lg:col-span-6',
    plateCaption: 'Intimate gesture of intertwined hands resting on natural stone masonry during the ceremony',
    excerpt: 'Quiet vows whispered across open water with fifteen closest companions.',
    filmStock: 'Ilford HP5 Plus 400',
    camera: 'Leica MP · 50mm Summicron'
  },
  {
    id: 'story-04',
    number: '04',
    title: 'Quiet Artefacts',
    subtitle: 'Tableware, Monograph Bindings & Keepsakes',
    location: 'Provence, France',
    date: 'Jun 2026',
    category: 'details',
    image: STATIONERY_IMAGE,
    aspectRatio: '3/2',
    colSpan: 'lg:col-span-6',
    plateCaption: 'Hand-torn cotton stationery, aged beeswax seal, and brass instruments in soft window shade',
    excerpt: 'The physical traces left behind: linen programs, dried olive sprigs, and tactile paper memories.',
    filmStock: 'Kodak Tri-X 400 (Pushed 1 stop)',
    camera: 'Hasselblad 500C/M · Planar 80mm'
  },
  {
    id: 'story-05',
    number: '05',
    title: 'The Silent Courtyard',
    subtitle: 'Sacred Stone Vows & Gentle Breeze',
    location: 'Kyoto, Japan',
    date: 'May 2026',
    category: 'gatherings',
    image: COURTYARD_VOWS_IMAGE,
    aspectRatio: '16/10',
    colSpan: 'lg:col-span-6',
    plateCaption: 'Sunlight filtering through weeping foliage onto ancient stone masonry during exchange of vows',
    excerpt: 'Reverent simplicity in an ancient stone pavilion, surrounded only by family and silence.',
    filmStock: 'Kodak Portra 400',
    camera: 'Leica M6 · 28mm Elmarit'
  },
  {
    id: 'story-06',
    number: '06',
    title: 'Lakeside Archways',
    subtitle: 'Solitary Reflections & Morning Mist',
    location: 'Tuscany, Italy',
    date: 'Apr 2026',
    category: 'portraits',
    image: ARCHWAY_IMAGE,
    aspectRatio: '4/5',
    colSpan: 'lg:col-span-6',
    plateCaption: 'Minimalist stone colonnade opening towards the morning mountain mist',
    excerpt: 'A solitary walk at dawn before celebration unfolds, breathing the crisp mountain air.',
    filmStock: 'Fuji Pro 400H',
    camera: 'Mamiya 7II · 65mm f/4'
  }
];

export const DISCIPLINES: Discipline[] = [
  {
    id: 'weddings',
    number: '01',
    title: 'Weddings',
    tagline: 'Full documentary coverage & heirloom albums.',
    description: 'Our primary practice. We spend the full cadence of your wedding day immersed quietly in the background, recording fleeting glances, deep laughter, and the authentic pulse of family celebration without staged posing.',
    deliverables: [
      'Comprehensive full-day coverage (unhurried)',
      'Dual capture: 35mm & 120 medium format analog film with digital precision',
      'Archival master gallery in high resolution',
      'Custom bespoke Belgian linen hardcover monograph album (hand-bound)',
      'Curated set of 25 silver gelatin archival prints'
    ],
    filmCoverage: '12 to 16 rolls of 35mm & 120 analog film',
    investment: 'Commissions start at €4,800 / ₹4,20,000'
  },
  {
    id: 'engagements',
    number: '02',
    title: 'Engagements',
    tagline: 'Quiet walks & natural evening light.',
    description: 'An unhurried half-day session in an intimate setting of personal significance—your family home, an empty coastal headland, or the winding streets of Kyoto or Paris at twilight.',
    deliverables: [
      '3–4 hours of relaxed unscripted documentation',
      'Medium format analog film portraiture',
      'Private online preview & high-res archive',
      '10 fine art cotton rag proof prints'
    ],
    filmCoverage: '6 rolls of Kodak Portra & Ilford B&W',
    investment: 'Commissions start at €1,600 / ₹1,40,000'
  },
  {
    id: 'pre-wedding',
    number: '03',
    title: 'Pre-Wedding Stories',
    tagline: 'Extended weekend rituals & destinations.',
    description: 'Designed for destination celebrations spanning multiple days. We document the arrival dinners, relaxed poolside gatherings, boat trips, and private preparatory rituals.',
    deliverables: [
      'Multi-day coverage across rehearsal & welcome events',
      'Full narrative sequence integrated into the master monograph',
      'Expedited preview selection within 72 hours',
      'Archival print box with slipcase'
    ],
    filmCoverage: 'Comprehensive mixed-format coverage',
    investment: 'Inquire for bespoke destination itineraries'
  },
  {
    id: 'private-events',
    number: '04',
    title: 'Private Events',
    tagline: 'Communal dinners & intimate gatherings.',
    description: 'From milestone anniversaries to intimate 30-person dinners in open-air courtyards. We capture the energy, culinary artistry, toasts, and warm embrace of communal life.',
    deliverables: [
      'Flexible hourly or half-day coverage',
      'High-resolution archival digital delivery',
      'Curated editorial slideshow monograph',
      'Option for custom event journal publication'
    ],
    filmCoverage: '4–8 rolls analog film + digital reportage',
    investment: 'Commissions start at €2,200 / ₹1,90,000'
  },
  {
    id: 'corporate-cultural',
    number: '05',
    title: 'Corporate & Cultural',
    tagline: 'Monographs, cultural symposia & portraits.',
    description: 'Visual documentation for design studios, cultural institutions, architecture monographs, and artisanal crafts that demand a tactile, thoughtful editorial treatment.',
    deliverables: [
      'Commercial usage licensing & master files',
      'Art direction & narrative sequencing consultation',
      'Editorial publication-ready proof sheets'
    ],
    filmCoverage: 'Tailored to production scope',
    investment: 'Day rate basis upon request'
  },
  {
    id: 'portraits',
    number: '06',
    title: 'Portraits',
    tagline: 'Solitary environmental & analog character studies.',
    description: 'Quiet, observational portrait sittings using natural available light and medium format film. No artificial backdrops or hurried poses—just honest human presence.',
    deliverables: [
      '90-minute private sitting',
      '12 final hand-retouched film plates',
      'Hand-numbered archival exhibition print (11x14)',
      'Digital high-res scans for editorial use'
    ],
    filmCoverage: '120 roll film on Hasselblad / Contax',
    investment: 'Commissions start at €950 / ₹85,000'
  }
];

export const NARRATIVE_CHAPTERS = [
  {
    chapter: 'Chapter I',
    numeral: '01',
    title: 'Preparation',
    subtitle: 'Quiet anticipation & morning light.',
    description: 'The hush before the crowd gathers. Soft morning daylight crossing the stone sills, the scent of linen and bergamot, hands adjusting cufflinks, quiet glances with a parent.',
    image: HERO_IMAGE
  },
  {
    chapter: 'Chapter II',
    numeral: '02',
    title: 'The Vows',
    subtitle: 'Grounded vows & silent emotion.',
    description: 'The emotional gravity of spoken commitment. We step back to give the moment dignity, capturing tears, clasped hands, and the shared exhale of unity.',
    image: COURTYARD_VOWS_IMAGE
  },
  {
    chapter: 'Chapter III',
    numeral: '03',
    title: 'Tactile Details',
    subtitle: 'Hand-torn paper & curated stoneware.',
    description: 'The physical textures you curated with love: the beeswax candles melting down terracotta holders, hand-torn cotton stationery, wild rosemary sprigs, and vintage heirlooms.',
    image: TABLE_DETAIL_IMAGE
  },
  {
    chapter: 'Chapter IV',
    numeral: '04',
    title: 'The Celebration',
    subtitle: 'Uninhibited laughter & late-night dancing.',
    description: 'As twilight falls, conversations deepen over wine and laughter echoes across long tables. The formal gives way to true uninhibited joy beneath warm bulb filaments.',
    image: BANQUET_IMAGE
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'monograph-life',
    title: 'A Day in the Life of a Wedding Monograph',
    category: 'Insights',
    date: 'Oct 2026',
    readTime: '6 min read',
    image: HERO_IMAGE,
    excerpt: 'Why we still insist on hand-sequencing each wedding as a physical book, from paper grammage to the rhythm of blank pages.',
    paragraphs: [
      'In an era where thousands of digital photographs vanish into cloud drives rarely revisited, the bound monograph is an act of defiance. It says: this day existed, this room was warm, these people loved you, and their faces are anchored in ink.',
      'When we return from a commission with 20 rolls of exposed film, the work is only halfway done. We process each negative by hand, scan on a flatbed drum scanner, and begin the rigorous editorial process of subtraction.',
      'A true monograph is not an inventory of guests; it is a musical score. It requires pacing, deliberate silence, and double-page spreads where a single glance holds the entire visual weight.',
      'We partner with a heritage bindery in Florence to craft every slipcase with unbleached Belgian linen and letterpress titling on heavy 220gsm cotton rag.'
    ],
    quote: 'The monograph is not a container for files; it is an heirloom that will outlive the devices we carry today.'
  },
  {
    id: 'unplanned-moments',
    title: 'Why We Love Unplanned Moments',
    category: 'Philosophy',
    date: 'Aug 2026',
    readTime: '4 min read',
    image: JULIEN_IMAGE,
    excerpt: 'The true heart of a celebration lives between the schedule—the spilled glass of champagne, the child asleep under a linen chair, the unspoken glance.',
    paragraphs: [
      'The most poignant photographs are never in the shot list. They occur in the margins: an uncle wiping an unexpected tear with a rumpled handkerchief, a breeze lifting a veil across the groom’s face during a toast, two friends sharing a cigarette behind the kitchen garden.',
      'To capture these, the photographer cannot behave like a director. You must possess the stillness of a painter and the discretion of a ghost.',
      'When couples trust us to observe rather than choreograph, the camera stops being an obstacle and becomes an empathetic listener.'
    ],
    quote: 'Perfection in a wedding photograph is rarely about symmetrical poses; it is about honesty.'
  },
  {
    id: 'quiet-odisha',
    title: 'A Quiet Evening in Odisha',
    category: 'Travel & Notes',
    date: 'Jun 2026',
    readTime: '5 min read',
    image: BANQUET_IMAGE,
    excerpt: 'Reflections from three days of documenting a multi-generational gathering in the temple city of Bhubaneswar.',
    paragraphs: [
      'The golden hour in eastern India possesses a warmth unlike anywhere else on earth. The dust turns to amber, marigold garlands release their pungent fragrance into the humid dusk air, and the sound of conch shells signals the beginning of sacred vows.',
      'We spent four days with Ananya and Marcus, wandering through 11th-century sandstone carvings and gathering eighty family members around a long teak table lit with hundreds of flickering earthen diyas.',
      'The warmth of hospitality was overwhelming—plates piled with regional delicacies, spontaneous songs breaking out between courses, and stories passed down across three generations.'
    ],
    quote: 'Some landscapes invite you to look outward; Odisha invites you to look inward.'
  }
];

export const CONTACT_STRIP_ITEMS = [
  { id: 1, title: 'Frame 01 — Morning Sill', image: HERO_IMAGE, tag: '35mm Tri-X' },
  { id: 2, title: 'Frame 02 — Communal Toast', image: BANQUET_IMAGE, tag: 'Portra 400' },
  { id: 3, title: 'Frame 03 — Julien at Work', image: JULIEN_IMAGE, tag: 'Leica M6' },
  { id: 4, title: 'Frame 04 — Golden Coupe', image: TOAST_IMAGE, tag: 'Tri-X Pushed' },
  { id: 5, title: 'Frame 05 — First Dance', image: ELDERLY_DANCE_IMAGE, tag: 'HP5 Plus' },
  { id: 6, title: 'Frame 06 — Lake Colonnade', image: ARCHWAY_IMAGE, tag: 'Portra 160' },
  { id: 7, title: 'Frame 07 — Courtyard Vows', image: COURTYARD_VOWS_IMAGE, tag: 'Portra 400' },
  { id: 8, title: 'Frame 08 — Tactile Stationery', image: STATIONERY_IMAGE, tag: '120 Planar' }
];

export const MONOGRAPH_PLATES: MonographPlate[] = [
  {
    id: 1,
    plateNumber: 'Plate 01',
    title: 'Stillness at the French Casement',
    location: 'Provence Villa, France',
    year: '2026',
    image: HERO_IMAGE,
    camera: 'Contax 645',
    lens: 'Carl Zeiss 80mm f/2.0 Planar',
    filmStock: 'Kodak Portra 160',
    aspect: '4:5 Vertical',
    caption: 'Soft diffused morning illumination catching the hand-loomed veil by the arched limestone window.'
  },
  {
    id: 2,
    plateNumber: 'Plate 02',
    title: 'The Long Table at Dusk',
    location: 'Bhubaneswar, Odisha',
    year: '2026',
    image: BANQUET_IMAGE,
    camera: 'Leica M6 TTL',
    lens: 'Leica 35mm Summilux-M f/1.4 ASPH',
    filmStock: 'Kodak Portra 400',
    aspect: '16:9 Panoramic',
    caption: 'Communal feast under ancient banyan branches with warm incandescent string filaments.'
  },
  {
    id: 3,
    plateNumber: 'Plate 03',
    title: 'Vows in Stone Courtyard',
    location: 'Kyoto, Japan',
    year: '2026',
    image: COURTYARD_VOWS_IMAGE,
    camera: 'Leica MP',
    lens: 'Leica 50mm Summicron-M f/2.0',
    filmStock: 'Ilford HP5 Plus 400',
    aspect: '3:2 Horizontal',
    caption: 'Quiet exchange of vows surrounded by weeping foliage and centuries-old stone masonry.'
  },
  {
    id: 4,
    plateNumber: 'Plate 04',
    title: 'Hands and Ancient Gold',
    location: 'Lake Como, Italy',
    year: '2026',
    image: HANDS_RINGS_IMAGE,
    camera: 'Hasselblad 500C/M',
    lens: 'Carl Zeiss 120mm f/4 Makro-Planar',
    filmStock: 'Kodak Tri-X 400',
    aspect: '1:1 Square',
    caption: 'The tactile memory of intertwined hands on hand-woven linen before ceremony.'
  },
  {
    id: 5,
    plateNumber: 'Plate 05',
    title: 'Keepsakes & Wax Impression',
    location: 'Provence, France',
    year: '2026',
    image: STATIONERY_IMAGE,
    camera: 'Contax 645',
    lens: 'Carl Zeiss 80mm f/2.0 Planar',
    filmStock: 'Kodak Portra 400',
    aspect: '3:2 Horizontal',
    caption: 'Hand-torn cotton stationery, antique brass scissors, and beeswax seal resting on limestone.'
  },
  {
    id: 6,
    plateNumber: 'Plate 06',
    title: 'Golden Toast at Twilight',
    location: 'Tuscany, Italy',
    year: '2026',
    image: TOAST_IMAGE,
    camera: 'Leica M6',
    lens: 'Leica 35mm Summicron-M',
    filmStock: 'Kodak Tri-X 400 (Pushed 1 stop)',
    aspect: '3:2 Horizontal',
    caption: 'Vintage champagne coupe raised against amber late-summer light.'
  },
  {
    id: 7,
    plateNumber: 'Plate 07',
    title: 'Late Night Unhurried Dance',
    location: 'Bhubaneswar, Odisha',
    year: '2026',
    image: ELDERLY_DANCE_IMAGE,
    camera: 'Leica MP',
    lens: 'Leica 50mm Noctilux-M f/1.2',
    filmStock: 'Ilford HP5 Plus 400',
    aspect: '3:2 Horizontal',
    caption: 'An elderly couple in soft embrace as the celebration slows to candle embers.'
  },
  {
    id: 8,
    plateNumber: 'Plate 08',
    title: 'The Silent Colonnade',
    location: 'Lake Maggiore, Italy',
    year: '2026',
    image: ARCHWAY_IMAGE,
    camera: 'Mamiya 7II',
    lens: 'Mamiya 65mm f/4',
    filmStock: 'Kodak Portra 160',
    aspect: '4:5 Vertical',
    caption: 'Quiet architectural archway opening toward morning fog over the alpine waters.'
  }
];
