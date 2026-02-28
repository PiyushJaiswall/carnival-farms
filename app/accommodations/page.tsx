import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import SectionHeading from '@/components/SectionHeading'
import EnquiryForm from '@/components/EnquiryForm'
import { COTTAGES } from '@/lib/constants'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accommodations',
  description: 'Choose from 48–50 luxury cottages at Carnival Farms — Garden Cottages, Pool View Suites, Premium Villas, and Family Cottages in Patna.',
}

export default function AccommodationsPage() {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&auto=format&fit=crop&q=80"
        eyebrow="48–50 Cottages"
        title="Accommo"
        highlight="dations"
        subtitle="Every cottage tells a story of luxury, comfort, and thoughtful design"
        primaryCta={{ label: 'Enquire Now', href: '/contact' }}
        secondaryCta={undefined}
        fullScreen={false}
      />

      <section className="section-padding bg-luxury-dark">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Choose Your Stay"
            title="Our Cottages"
            subtitle="From intimate garden retreats to spacious family villas — a perfect room for every guest."
          />
          <div className="space-y-16">
            {COTTAGES.map((cottage, index) => (
              <div
                key={cottage.name}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`relative h-96 overflow-hidden group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={cottage.img}
                    alt={cottage.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-amber-400 text-black text-xs tracking-widest uppercase px-4 py-1">
                    {cottage.category}
                  </div>
                </div>
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <p className="text-amber-400 text-xs tracking-[0.5em] uppercase mb-2">
                    {cottage.size} · {cottage.occupancy}
                  </p>
                  <h2 className="text-3xl font-light text-white mb-4">{cottage.name}</h2>
                  <div className="w-12 h-px bg-amber-400 mb-6" />
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">{cottage.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-8">
                    {cottage.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check size={14} className="text-amber-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary">
                    Book This Cottage
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryForm />
    </>
  )
}

