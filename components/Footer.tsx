import Link from 'next/link';
import { Phone, Mail, MapPin, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-textDark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-primary">
            <Leaf className="h-6 w-6" />
            <span className="font-serif text-xl tracking-widest font-bold">CLARA SPA</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Menghadirkan oasis kemewahan, relaksasi holistik, dan kecantikan paripurna dengan standar bintang lima langsung di jantung keindahan Bali.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold tracking-wider text-primary mb-4">Tautan Cepat</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/tentang-kami" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
            <li><Link href="/layanan" className="hover:text-primary transition-colors">Semua Layanan</Link></li>
            <li><Link href="/paket" className="hover:text-primary transition-colors">Paket Eksklusif</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Artikel & Tips</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold tracking-wider text-primary mb-4">Layanan Kami</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/layanan?cat=massage" className="hover:text-primary transition-colors">Balinese Massage</Link></li>
            <li><Link href="/layanan?cat=facial" className="hover:text-primary transition-colors">Premium Facial</Link></li>
            <li><Link href="/layanan?cat=eyelash" className="hover:text-primary transition-colors">Eyelash Extension</Link></li>
            <li><Link href="/layanan?cat=nailgel" className="hover:text-primary transition-colors">Luxury Nail Art</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold tracking-wider text-primary mb-4">Hubungi Kami</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <span>087897465067</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <span className="break-all">devicandraa97@gmail.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>Kawasan Pelesir Utama, Bali, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bagian Copyright dengan Backlink Halus */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 space-y-4 sm:space-y-0">
        <p>© 2026 Clara Spa Bali. Seluruh Hak Cipta Dilindungi.</p>
        <p className="flex items-center gap-1.5">
          Premium Wellness & Beauty Solution. <span className="opacity-40 ml-1">|</span> Partner:{' '}
          <a 
            href="https://jajananmagetan.biz.id" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors font-medium"
            title="Kunjungi Jajanan Magetan"
          >
            Jajanan Magetan
          </a>
        </p>
      </div>
    </footer>
  );
}