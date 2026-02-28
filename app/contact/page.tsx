import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import SectionHeading from '@/components/SectionHeading'
import EnquiryForm from '@/components/EnquiryForm'
import { PHONE, EMAIL, ADDRESS, WHATSAPP, GOOGLE_MAPS_EMBED } from '@/lib/constants'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Carnival Farms Resort in Patna, Bihar. Call, email, or fill the enquiry form for bookings and event queries.',
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: PHONE,
    href: `tel:${PHONE}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: ADDRESS,
    href: `https://maps.google.com/?q=Patna,Bihar`,
  },
  {
    icon: Clock,
    label: 'Reception Hours',
    value: '24 Hours, 7 Days a Week',
    href: undefined,
  },
]

export default function ContactPage() {
  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&auto=format&fit=crop&q=80"
        eyebrow="We're Here For You"
        title="Contact"
        highlight="Us"
        subtitle="Reach out to plan your stay, event, or simply to say hello"
        primaryCta={undefined}
        secondaryCta={undefined}
        fullScreen={false}
      />

      <section className="section-padding bg-luxury-dark">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Contact Info"
              center={false}
              subtitle="Our team is available around the clock to assist with reservations, events, and any queries."
            />
            <div className="space-y-6 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 border border-luxury-border p-5 hover:border-amber-400/40 transition-colors">
                  <div className="w-10 h-10 border border-amber-400/30 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-gray-500 mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-white hover:text-amber-400 transition-colors leading-relaxed">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-white leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20Carnival%20Farms%20Resort.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid w-full text-center block"
            >
              Chat on WhatsApp
            </a>
          </div>

          <EnquiryForm standalone={false} />
        </div>
      </section>

      <section className="bg-luxury-card">
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <SectionHeading
            eyebrow="Find Us"
            title="Location"
            subtitle="Conveniently located in the heart of Patna, Bihar."
          />
          <div className="border border-luxury-border overflow-hidden h-[400px]">
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carnival Farms Location"
            />
          </div>
        </div>
      </section>
    </>
  )
}

