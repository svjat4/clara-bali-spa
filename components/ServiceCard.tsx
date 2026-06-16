'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Service } from '@/types';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} Profesional di Clara Spa Bali`}
          fill
          sizes="(max-w-7xl) 33vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-accent">
          {service.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold text-textDark mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {service.description}
        </p>
        <div className="flex items-center space-x-2 text-gray-500 text-xs mb-6 mt-auto">
          <Clock className="h-4 w-4 text-primary" />
          <span>Durasi: {service.duration.join(' / ')}</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Link href={`/layanan/${service.slug}`} className="text-center border border-primary text-primary hover:bg-secondary py-2.5 rounded-xl text-xs font-medium transition-all duration-300">
            Lihat Detail
          </Link>
          <a href={`https://wa.me/6287897465067?text=Halo%20Clara%20Spa%20Bali,%20saya%20ingin%20booking%20layanan%20${encodeURIComponent(service.title)}.`} target="_blank" rel="noopener noreferrer" className="text-center bg-primary hover:bg-accent text-white py-2.5 rounded-xl text-xs font-medium transition-all duration-300">
            Booking WA
          </a>
        </div>
      </div>
    </motion.div>
  );
}