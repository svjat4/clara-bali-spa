"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/hero/home-1.jpg",
  "/images/hero/home-2.webp",
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efek ganti gambar otomatis setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Clara Spa Bali Atmosphere ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover brightness-[0.4]" // Menggelapkan gambar agar teks putih terbaca
          />
        </div>
      ))}
      
      {/* Indikator Titik Slider di Bawah */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary w-6" : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}