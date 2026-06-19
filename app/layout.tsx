import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import JsonLd from '@/components/JsonLd';
import "./globals.css"; 
import { GoogleAnalytics } from '@next/third-parties/google'; // Import GA sudah diaktifkan

// Metadata lengkap dengan SEO & Open Graph
export const metadata: Metadata = {
  title: {
    default: 'Clara Spa Bali - Luxury Spa & Authentic Balinese Massage Terbaik di Bali',
    template: '%s | Clara Spa Bali'
  },
  description: 'Rasakan kemewahan relaksasi spa profesional di Clara Spa Bali. Kami menyediakan Autentik Balinese Massage, Premium Facial, Eyelash Extension, dan Nail Art berstandar resort bintang lima.',
  keywords: ['Spa Bali', 'Bali Spa', 'Spa Terbaik di Bali', 'Massage Bali', 'Balinese Massage Bali', 'Luxury Spa Bali', 'Spa Profesional Bali', 'Relaksasi Spa Bali'],
  metadataBase: new URL('https://claraspabali.biz.id'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://claraspabali.biz.id',
    siteName: 'Clara Spa Bali',
    images: [{
      url: '/images/tentang.webp',
      width: 1200,
      height: 630,
      alt: 'Clara Spa Bali Luxury Experience'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clara Spa Bali | Premium Wellness & Spa',
    description: 'Nikmati layanan relaksasi spa dan perawatan kecantikan terbaik di Bali bersama terapis bersertifikasi.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'DaySpa',
    'name': 'Clara Spa Bali',
    'image': 'https://claraspabali.biz.id/images/tentang.webp',
    '@id': 'https://claraspabali.biz.id/#organization', // Typo .biz.idm sudah diperbaiki
    'url': 'https://claraspabali.biz.id',
    'telephone': '087897465067',
    'priceRange': '$$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Kawasan Pariwisata Utama Bali',
      'addressLocality': 'Badung',
      'addressRegion': 'Bali',
      'postalCode': '80361',
      'addressCountry': 'ID'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -8.6500, 
      'longitude': 115.2167
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '09:00',
      'closes': '21:00'
    }
  };

  return (
    <html lang="id">
      <body className="antialiased bg-white text-textDark min-h-screen flex flex-col">
        <JsonLd data={localBusinessSchema} />
        <Navbar />
        
        <main className="flex-grow">{children}</main>
        
        <Footer />
        <FloatingWhatsApp />
        
        {/* Google Analytics Terpasang Sempurna */}
        <GoogleAnalytics gaId="G-F15RRM7MCV" />
      </body>
    </html>
  );
}