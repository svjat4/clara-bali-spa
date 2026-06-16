'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { SpaPackage } from '@/types';

export default function PackageCard({ pkg }: { pkg: SpaPackage }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl overflow-hidden shadow-md border border-secondary p-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
    >
      <div className="relative h-64 lg:h-full w-full lg:col-span-5 rounded-2xl overflow-hidden min-h-[240px]">
        <Image
          src={pkg.image}
          alt={`Paket Mewah: ${pkg.title}`}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 lg:col-span-7 flex flex-col h-full justify-between">
        <div>
          <div className="inline-block bg-secondary text-accent text-xs px-3 py-1 rounded-full font-semibold tracking-wider uppercase mb-3">
            Durasi {pkg.duration}
          </div>
          <h3 className="font-serif text-2xl font-bold text-textDark mb-3">{pkg.title}</h3>
          <p className="text-gray-600 text-sm mb-5 leading-relaxed">{pkg.description}</p>
          
          <h4 className="text-xs uppercase font-bold tracking-widest text-primary mb-3">Inklusi Perawatan:</h4>
          <ul className="space-y-2 mb-6">
            {pkg.inclusions.map((inc, i) => (
              <li key={i} className="flex items-start text-sm text-gray-700 space-x-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{inc}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <a
          href={`https://wa.me/6287897465067?text=Halo%20Clara%20Spa%20Bali,%20saya%20tertarik%20memesan%20${encodeURIComponent(pkg.title)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-textDark hover:bg-primary text-white text-center py-3 rounded-xl font-medium text-sm tracking-wide transition-all duration-300 shadow-sm"
        >
          Booking Paket Via WhatsApp
        </a>
      </div>
    </motion.div>
  );
}