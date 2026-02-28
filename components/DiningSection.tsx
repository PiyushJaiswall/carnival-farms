import Link from 'next/link'
import Image from 'next/image'
import SectionHeading from './SectionHeading'

export default function DiningSection() {
  return (
    <section className="section-padding bg-luxury-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Flavours of Bihar & Beyond"
              title="Dining"
              center={false}
              subtitle="Our all-day dining restaurant offers an immersive culinary journey — from rich Indian classics to continental delights."
            />
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { number: '60', label: 'Indoor Covers' },
                { number: '60', label: 'Outdoor Covers' },
                { number: '3', label: 'Dining Moods' },
                { number: '∞', label: 'Culinary Memories' },
              ].map(({ number, label }) => (
                <div key={label} className="border border-luxury-border p-5">
                  <p className="text-3xl font-light text-amber-400">{number}</p>
                  <p className="text-xs tracking-widest text-gray-400 uppercase mt-1">{label}</p>
                </div>
              ))}
            </div>
            <Link href="/dining" className="btn-primary">
              Explore Dining
            </Link>
          </div>
          <div className="relative h-96 lg:h-[520px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop&q=80"
              alt="Carnival Farms Dining"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

