'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'massage' | 'facial' | 'eyelash' | 'nailgel'>('all');

  const categories = [
    { id: 'all', name: 'Semua Layanan' },
    { id: 'massage', name: 'Massage & Body Therapy' },
    { id: 'facial', name: 'Luxury Facial' },
    { id: 'eyelash', name: 'Eyelash Extensions' },
    { id: 'nailgel', name: 'Premium Nail Gel' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-bgLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-textDark tracking-wide">Menu Layanan Clara Spa Bali</h1>
          <p className="text-gray-500 font-light text-base leading-relaxed">
            Pilihlah perawatan premium yang paling sesuai dengan kebutuhan Anda. Dari terapi pijat tubuh tradisional hingga sentuhan estetik kecantikan bulu mata dan seni kuku.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat.id ? 'bg-primary text-white shadow-md' : 'bg-secondary text-accent hover:bg-primary/10'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}