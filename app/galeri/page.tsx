'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'room' | 'facial' | 'massage' | 'eyelash' | 'nailgel'>('all');

  const galleryItems = [
    { type: 'room', src: '/images/gallery/room1.jpg', alt: 'Interior Ruang Perawatan Spa Premium' },
    { type: 'massage', src: '/images/services/hot-stone.jpg', alt: 'Layanan Hot Stone Massage Bali' },
    { type: 'facial', src: '/images/services/facial.jpg', alt: 'Perawatan Wajah Eksklusif' },
    { type: 'eyelash', src: '/images/eyelash/extension.jpg', alt: 'Hasil Pemasangan Bulu Mata Palsu' },
    { type: 'nailgel', src: '/images/nailgel/art.jpg', alt: 'Desain Luxury Nail Art Cantik' },
    { type: 'room', src: '/images/gallery/room2.jpg', alt: 'Fasilitas Bath Up Kamar Spa Relaksasi' },
  ];

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.type === filter);

  return (
    <div className="pt-32 pb-24 bg-bgLight min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h1 className="font-serif text-4xl font-bold text-textDark">Galeri Clara Spa Bali</h1>
          <p className="text-gray-500 font-light text-sm">Intip kemewahan tata ruang, fasilitas steril, dan dokumentasi hasil perawatan kecantikan terbaik kami.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', name: 'Semua' },
            { id: 'room', name: 'Ruang Spa' },
            { id: 'massage', name: 'Massage' },
            { id: 'facial', name: 'Facial' },
            { id: 'eyelash', name: 'Eyelash' },
            { id: 'nailgel', name: 'Nail Gel' },
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${filter === btn.id ? 'bg-primary text-white' : 'bg-secondary text-accent hover:bg-primary/10'}`}
            >
              {btn.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, i) => (
            <motion.div
              layout
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-w-7xl) 33vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}