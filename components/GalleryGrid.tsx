'use client'
import { useState } from 'react'
import Image from 'next/image'
import { GALLERY_IMAGES } from '@/lib/constants'

const CATEGORIES = ['All', 'Exterior', 'Cottages', 'Dining', 'Banquet', 'Amenities']

export default function GalleryGrid() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-200 ${
              active === cat
                ? 'bg-amber-400 text-black border-amber-400'
                : 'border-luxury-border text-gray-400 hover:border-amber-400 hover:text-amber-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {filtered.map((img, i) => (
          <div key={i} className="relative h-64 overflow-hidden group card-border">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
              <p className="text-white text-xs tracking-widest uppercase p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
