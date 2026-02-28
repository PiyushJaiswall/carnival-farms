import HeroSection from '@/components/HeroSection'
import AmenitiesStrip from '@/components/AmenitiesStrip'
import RoomsPreview from '@/components/RoomsPreview'
import DiningSection from '@/components/DiningSection'
import BanquetPreview from '@/components/BanquetPreview'
import TestimonialsSection from '@/components/TestimonialsSection'
import EnquiryForm from '@/components/EnquiryForm'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AmenitiesStrip />
      <RoomsPreview />
      <DiningSection />
      <BanquetPreview />
      <TestimonialsSection />
      <EnquiryForm />
    </>
  )
}

