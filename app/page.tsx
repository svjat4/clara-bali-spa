'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Heart, Shield, Sparkles } from 'lucide-react';
import { services } from '@/data/services';
import { packages } from '@/data/packages';
import ServiceCard from '@/components/ServiceCard';
import PackageCard from '@/components/PackageCard';
// Import komponen HeroSlider yang baru kita buat
import HeroSlider from '@/components/HeroSlider';

export default function HomePage() {
  const trustIndicators = [
    'Terapis Profesional & Bersertifikasi.',
    'Produk Organik Premium Alami.',
    'Ruangan Nyaman, Bersih & Privat.',
    'Sentuhan Istimewa, Kenyamanan Tanpa Batas.'
  ];

  const featuredServices = services.filter(s => ['hot-stone-massage', 'balinese-massage', 'premium-facial'].includes(s.slug));

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION DENGAN SLIDER */}
      <section className="relative h-screen flex items-center justify-center">
        
        {/* Panggil komponen slider di sini (berada di background) */}
        <HeroSlider />
        
        {/* Gradient Overlay agar teks semakin mudah dibaca */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
        
        {/* Konten Teks Hero (Berada di atas slider & gradient) */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white space-y-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center space-x-2 text-primary"
          >
            <Sparkles className="h-5 w-5" />
            <span className="uppercase text-xs font-bold tracking-widest">Oasis Ketenangan Duniawi</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide leading-tight"
          >
            Rasakan Pengalaman <br /><span className="text-primary italic">Spa Premium</span> di Bali
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-200 font-light leading-relaxed"
          >
            Nikmati kelembutan perawatan tubuh, relaksasi mendalam, dan pancaran kecantikan eksklusif bersama terapis profesional yang siap menghadirkan kemewahan sejati bagi jiwa dan raga Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
          >
            <a href="https://wa.me/6287897465067?text=Halo%20Clara%20Spa%20Bali..." className="w-full sm:w-auto bg-primary hover:bg-accent text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-all shadow-lg text-center">
              Pesan Sekarang
            </a>
            <Link href="/layanan" className="w-full sm:w-auto border border-white/80 hover:bg-white/10 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-all text-center">
              Lihat Layanan
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto text-left border-t border-white/20"
          >
            {trustIndicators.map((text, i) => (
              <div key={i} className="flex items-center space-x-2 text-xs text-gray-200">
                <div className="p-1 rounded-full bg-primary/20 text-primary">
                  <Check className="h-3 w-3" />
                </div>
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/hero/about-spa.webp"
              alt="Kemewahan Fasilitas Kamar Clara Spa Bali"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="text-primary font-bold text-xs uppercase tracking-widest flex items-center space-x-2">
              <span>Seni Hidup Sehat & Bugar</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-textDark tracking-wide leading-tight">
              Oasis Kemewahan Tradisi Bali Untuk Penyembuhan Anda
            </h2>
            <p className="text-gray-600 leading-relaxed font-light">
              Clara Spa Bali berkomitmen memberikan rasa nyaman dan kelegaan total dari kepenatan dunia modern. Setiap ritual perawatan kami dirancang dengan mengutamakan aspek kebersihan mutlak, privasi terlindungi, dan higienitas tinggi.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex space-x-3 items-start">
                <Shield className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-textDark text-base">Higienitas Kelas Dunia</h4>
                  <p className="text-gray-500 text-xs mt-1">Linen diganti baru untuk setiap tamu, disinfeksi menyeluruh konstan.</p>
                </div>
              </div>
              <div className="flex space-x-3 items-start">
                <Heart className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-textDark text-base">Sentuhan Alami</h4>
                  <p className="text-gray-500 text-xs mt-1">Menggunakan ekstrak botani murni lokal kualitas terbaik.</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <Link href="/tentang-kami" className="inline-flex items-center space-x-2 text-primary font-bold tracking-wider uppercase text-xs group">
                <span>Pelajari Filosofi Kami</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED SERVICES SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-primary">Layanan Terpopuler</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-textDark">Pilihan Terfavorit Tamu Kami</h2>
          <p className="text-gray-500 font-light text-sm">Kembalikan kesegaran fisik Anda lewat rangkaian menu relaksasi tubuh dan kecantikan eksklusif berikut.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/layanan" className="inline-block bg-secondary text-accent px-8 py-3.5 rounded-full font-semibold text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300">
            Lihat Semua Ragam Layanan
          </Link>
        </div>
      </section>

      {/* SPECIAL PACKAGES SECTION */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-primary">Paket Hemat Premium</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-textDark">Kombinasi Paket Spa Eksklusif</h2>
            <p className="text-gray-500 font-light text-sm">Dapatkan nilai kenyamanan lebih optimal melalui perpaduan ritual massage dan kecantikan komprehensif.</p>
          </div>
          <div className="space-y-8">
            {packages.map((pkg, i) => (
              <PackageCard key={i} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SLIDER REPLACEMENT */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-primary">Ulasan Tamu</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-textDark">Apa Kata Mereka?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Sarah Jenkins', role: 'Wisatawan Australia', text: 'The absolute best Balinese massage I have ever had! The atmosphere is so peaceful, premium quality, and extremely clean. Highly recommend Clara Spa.' },
            { name: 'Dewi Utami', role: 'Pelanggan Setia Jakarta', text: 'Setiap liburan ke Bali wajib ke Clara Spa. Kamarnya wangi mewah sekali, terapisnya sopan dan pijatannya pas meredakan capek kerja.' },
            { name: 'Michael Chen', role: 'Turis Singapura', text: 'Top notch hospitality! From the welcoming tea to the final touch. The luxury hot oil massage completely refreshed my body after a long flight.' }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="flex text-primary">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-gray-600 text-sm italic font-light">"{item.text}"</p>
              <div>
                <h4 className="font-serif font-bold text-textDark text-sm">{item.name}</h4>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
