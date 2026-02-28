import Link from 'next/link'
import Image from 'next/image'
import SectionHeading from './SectionHeading'
import FadeIn from './FadeIn'
import { COTTAGES } from '@/lib/constants'

export default function RoomsPreview() {
  const preview = COTTAGES.slice(0, 3)
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Where You Stay"
          title="Accommodations"
          subtitle="48 to 50 elegantly designed cottages, each crafted to offer the perfect balance of comfort and luxury."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {preview.map((cottage, i) => (
            <FadeIn key={cottage.name} delay={i * 0.15}>
              <div className="card-border group overflow-hidden bg-white">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={cottage.img}
                    alt={cottage.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-stone-800 text-white text-xs tracking-widest uppercase px-3 py-1">
                    {cottage.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-amber-700 tracking-widest uppercase mb-1">
                    {cottage.size} · {cottage.occupancy}
                  </p>
                  <h3 className="text-xl font-light text-stone-800 mb-2">{cottage.name}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {cottage.description}
                  </p>
                  <Link href="/accommodations"
                    className="text-xs tracking-widest uppercase text-stone-800 hover:text-amber-700 transition-colors border-b border-stone-300 pb-1">
                    Learn More →
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/accommodations" className="btn-primary">View All Cottages</Link>
        </div>
      </div>
    </section>
  )
}
