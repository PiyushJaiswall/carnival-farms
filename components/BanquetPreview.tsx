import Link from 'next/link'
import Image from 'next/image'
import SectionHeading from './SectionHeading'

const halls = [
  {
    name: 'Grand Pavilion',
    size: '8,000 sq. ft.',
    capacity: 'Up to 600 Guests',
    desc: 'Our flagship event space — ideal for grand weddings, corporate galas, and large celebrations with full AV setup.',
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb8a2e?w=800&auto=format&fit=crop&q=80',
  },
  {
    name: 'Garden Marquee',
    size: '3,200 sq. ft.',
    capacity: 'Up to 250 Guests',
    desc: 'An intimate yet sophisticated venue perfect for private celebrations, corporate meetings, and family functions.',
    img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&auto=format&fit=crop&q=80',
  },
]

export default function BanquetPreview() {
  return (
    <section className="section-padding bg-luxury-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Celebrate in Style"
          title="Banquet & Events"
          subtitle="Two world-class venues designed to make every event extraordinary — from intimate gatherings to grand celebrations."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {halls.map((hall) => (
            <div key={hall.name} className="card-border group overflow-hidden">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={hall.img}
                  alt={hall.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs tracking-widest text-amber-400 uppercase mb-1">{hall.size}</p>
                  <h3 className="text-2xl font-light text-white">{hall.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-amber-400 tracking-widest uppercase mb-2">{hall.capacity}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{hall.desc}</p>
                <Link
                  href="/banquet"
                  className="text-xs tracking-widest uppercase text-amber-400 hover:text-white transition-colors border-b border-amber-400/40 pb-1"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/banquet" className="btn-primary">
            Enquire for Events
          </Link>
        </div>
      </div>
    </section>
  )
}
