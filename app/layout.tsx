import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Carnival Farms | Luxury Resort, Patna',
  description: 'Experience luxury at Carnival Farms – a premium resort in Patna, Bihar with cottages, banquet halls, dining, pool and more.',
  keywords: 'resort patna, carnival farms, luxury resort bihar, banquet hall patna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
