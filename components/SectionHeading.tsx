'use client'
import FadeIn from './FadeIn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
  dark?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  dark = false,
}: SectionHeadingProps) {
  return (
    <FadeIn className={`mb-16 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-amber-700 text-xs tracking-[0.5em] uppercase mb-3">{eyebrow}</p>
      )}
      <h2 className={`text-4xl md:text-5xl font-light tracking-widest uppercase ${dark ? 'text-white' : 'text-stone-800'}`}>
        {title}
      </h2>
      <div className={`w-16 h-px bg-amber-700 mt-6 ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`mt-6 text-sm leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${dark ? 'text-gray-300' : 'text-stone-500'}`}>
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}
