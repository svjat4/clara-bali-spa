'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // <-- Mengimpor detektor halaman
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // <-- Mengambil rute URL saat ini

  // Cek apakah user sedang berada di Halaman Depan (Home)
  const isHomePage = pathname === '/';

  // Navbar akan berwarna putih jika: BUKAN di halaman depan ATAU jika sudah di-scroll
  const isActiveWhite = !isHomePage || isScrolled;

  useEffect(() => {
    // Jika bukan di halaman depan, tidak perlu mendeteksi scroll
    if (!isHomePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Layanan', href: '/layanan' },
    { name: 'Paket Spa', href: '/paket' },
    { name: 'Galeri', href: '/galeri' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isActiveWhite 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 border-b border-gray-100/50' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO AREA */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Leaf 
              className={`h-6 w-6 transition-colors duration-300 ${
                isActiveWhite ? 'text-primary' : 'text-white'
              }`} 
            />
            <span
              className={`font-serif text-xl sm:text-2xl tracking-widest font-bold transition-colors duration-300 ${
                isActiveWhite ? "text-[#8B6B4A]" : "text-white"
              }`}
            > 
              CLARA SPA BALI
            </span>
          </Link>
          
          {/* DESKTOP MENU */}
          <div className="hidden lg:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
                  isActiveWhite ? 'text-textDark' : 'text-white/90 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/6287897465067?text=Halo%20Clara%20Spa%20Bali,%20saya%20ingin%20melakukan%20reservasi%20layanan%20spa." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-accent text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 transform"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`transition-colors duration-300 hover:text-primary ${
                isActiveWhite ? 'text-textDark' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)} 
                className="block px-3 py-2 text-base font-medium text-textDark hover:bg-secondary/50 hover:text-primary rounded-xl transition-all"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 px-3">
              <a 
                href="https://wa.me/6287897465067?text=Halo%20Clara%20Spa%20Bali,%20saya%20ingin%20melakukan%20reservasi%20layanan%20spa." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-center bg-primary hover:bg-accent text-white py-3 rounded-full font-semibold tracking-wider text-sm shadow-md"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}