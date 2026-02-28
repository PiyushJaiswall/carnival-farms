import type { Metadata } from 'next'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Carnival Farms, a luxury resort in Patna, Bihar offering premium hospitality and memorable experiences.',
}

const stats = [
  { number: '48+', label: 'Premium Cottages' },
  { number: '2', label: 'Banquet Halls' },
  { number: '120+', label: 'Dining Covers' },
  { number: '5★', label: 'Luxury Experience' },
]

const values = [
  {
    icon: '✦',
    title: 'Luxury Redefined',
    desc: "We blend opulent design with the warmth of Bihar's cultural heritage to create experiences that are uniquely ours.",
  },
  {
    icon: '✦',
    title: 'Impeccable Service',
    desc: "Our trained hospitality team anticipates your every need, ensuring every moment of your stay is effortless.",
  },
  {
    icon: '✦',
    title: 'Memorable Moments',
    desc: "From a quiet breakfast to a grand wedding, we ensure every experience at Carnival Farms becomes a treasured memory.",
  },
]

export default function AboutPage() {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&auto=format&fit=crop&q=80"
        eyebrow="Our Story"
        title="About"
        highlight="Us"
        subtitle="Born from a dream to bring world-class luxury to the heartland of Bihar"
        primaryCta={{ label: 'View Accommodations', href: '/accommodations' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
        fullScreen={false}
      />

      <section className="section-padding bg-luxury-dark">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&auto=format&fit=crop&q=80"
              alt="Carnival Farms Resort"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 bg-amber-400 text-black p-6">
              <p className="text-3xl font-light">Luxury</p>
              <p className="text-xs tracking-widest uppercase mt-1">Reimagined in Bihar</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Welcome to Carnival Farms" title="Our Story" center={false} />
            <p className="text-gray-400 leading-relaxed mb-5 text-sm">
              Carnival Farms was born from a vision to create a world where luxury hospitality meets
              the warmth of Bihar culture. Nestled in the vibrant city of Patna, our resort is a
              sanctuary of calm, elegance, and refined pleasure.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
              From 48 beautifully designed cottages to our grand banquet halls spanning 8,000 square
              feet, every corner of Carnival Farms reflects our unwavering commitment to excellence.
              We believe that every guest deserves a memorable experience, and we go above and beyond
              to deliver just that.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ number, label }) => (
                <div key={label} className="border border-luxury-border p-5">
                  <p className="text-3xl font-light text-amber-400">{number}</p>
                  <p className="text-xs tracking-widest text-gray-400 uppercase mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-luxury-card">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Values"
            subtitle="Three principles that guide every experience at Carnival Farms."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="border border-luxury-border p-8 text-center hover:border-amber-400/40 transition-colors"
              >
                <span className="text-amber-400 text-2xl block mb-4">{icon}</span>
                <h3 className="text-lg font-light tracking-widest uppercase text-white mb-4">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
