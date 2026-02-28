import type { Metadata } from 'next'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import SectionHeading from '@/components/SectionHeading'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata: Metadata = {
  title: 'Amenities',
  description:
    'Explore world-class amenities at Carnival Farms — swimming pool, gazebo, fitness gym, and full-service salon in Patna, Bihar.',
}

const amenityList = [
  {
    name: 'Swimming Pool',
    desc: 'Dive into our stunning resort pool — a centerpiece of luxury and leisure. Whether you want to swim laps at dawn or lounge poolside with a drink, our pool area is your personal paradise.',
    details: ['Heated pool available', 'Poolside loungers & cabanas', 'Children's wading section', 'Towel service included', 'Pool bar (seasonal)'],
    img: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&auto=format&fit=crop&q=80',
    hours: 'Open 6:00 AM – 10:00 PM',
  },
  {
    name: 'The Gazebo',
    desc: 'Our signature gazebo is a tranquil retreat nestled within the resort gardens. Ideal for private conversations, romantic evenings, or simply watching the sunrise with a cup of chai.',
    details: ['Seats up to 8 guests', 'Available for private bookings', 'Garden & landscape views', 'Evening lighting setup', 'Served by room service'],
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&auto=format&fit=crop&q=80',
    hours: 'Open 7:00 AM – 11:00 PM',
  },
  {
    name: 'Fitness Center',
    desc: 'Stay in peak form during your stay at our fully equipped gym. With modern cardio machines, free weights, and functional training areas, your workout routine need not miss a beat.',
    details: ['Modern cardio equipment', 'Free weights & machines', 'Functional training zone', 'Personal trainer on request', 'Complimentary for in-house guests'],
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop&q=80',
    hours: 'Open 5:30 AM – 10:00 PM',
  },
  {
    name: 'Salon & Beauty',
    desc: 'Pamper yourself at our full-service salon. From haircuts and styling to skincare treatments and relaxing massages — walk out feeling completely renewed and refreshed.',
    details: ['Hair styling & treatments', 'Skincare & facials', 'Body massage & spa', 'Bridal packages available', 'Appointment-based service'],
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&auto=format&fit=crop&q=80',
    hours: 'Open 9:00 AM – 8:00 PM',
  },
]

export default function AmenitiesPage() {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920&auto=format&fit=crop&q=80"
        eyebrow="Resort Facilities"
        title="Ameni"
        highlight="ties"
        subtitle="Everything you need to relax, refresh, and rejuvenate — all within the resort"
        primaryCta={{ label: 'Book Your Stay', href: '/contact' }}
        secondaryCta={undefined}
        fullScreen={false}
      />

      <section className="section-padding bg-luxury-dark">
        <div className="max-w-7xl mx-auto space-y-24">
          {amenityList.map((amenity, index) => (
            <div
              key={amenity.name}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`relative h-[420px] overflow-hidden group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <Image
                  src={amenity.img}
                  alt={amenity.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <p className="text-amber-400 text-xs tracking-[0.5em] uppercase mb-3">{amenity.hours}</p>
                <h2 className="text-3xl font-light text-white mb-4">{amenity.name}</h2>
                <div className="w-12 h-px bg-amber-400 mb-6" />
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">{amenity.desc}</p>
                <ul className="space-y-2">
                  {amenity.details.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="text-amber-400 text-xs">✦</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <EnquiryForm />
    </>
  )
}

