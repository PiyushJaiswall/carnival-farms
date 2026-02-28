import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import { PHONE, EMAIL, ADDRESS, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl font-light tracking-[0.25em] text-amber-400 uppercase mb-4">
            Carnival Farms
          </h3>
          <p className="text-stone-400 text-sm leading-relaxed mb-6">
            A luxury resort experience in the heart of Patna, Bihar — where every stay becomes a cherished memory.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 transition-colors">
              <Instagram size={15} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-9 h-9 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 transition-colors">
              <Facebook size={15} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-white mb-6 border-b border-stone-700 pb-3">Quick Links</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-stone-400 hover:text-amber-400 transition-colors tracking-wide">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-white mb-6 border-b border-stone-700 pb-3">Experiences</h4>
          <ul className="space-y-3">
            {['Cottage Stay', 'Private Dining', 'Wedding Packages', 'Corporate Events', 'Pool Experience', 'Salon & Gym'].map((item) => (
              <li key={item}>
                <span className="text-sm text-stone-400 tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-white mb-6 border-b border-stone-700 pb-3">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-stone-400 text-sm">
              <MapPin size={15} className="text-amber-400 mt-0.5 shrink-0" />
              <span>{ADDRESS}</span>
            </li>
            <li>
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 text-stone-400 text-sm hover:text-amber-400 transition-colors">
                <Phone size={15} className="text-amber-400 shrink-0" />
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-stone-400 text-sm hover:text-amber-400 transition-colors">
                <Mail size={15} className="text-amber-400 shrink-0" />
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-600 tracking-widest">
            © {new Date().getFullYear()} Carnival Farms Resort. All rights reserved.
          </p>
          <p className="text-xs text-stone-700 tracking-wide">Patna, Bihar, India</p>
        </div>
      </div>
    </footer>
  )
}
