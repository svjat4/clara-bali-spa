import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';

export const metadata: Metadata = {
  title: 'Paket Spa Eksklusif & Hemat',
  description: 'Nikmati kombinasi perawatan pijat Bali, lulur organik, dan facial wajah dengan harga paket spa premium yang lebih hemat di Clara Spa Bali.',
  openGraph: {
    title: 'Paket Spa Eksklusif - Clara Spa Bali',
    description: 'Pilihan paket ritual relaksasi tubuh 1.5 jam hingga 2 jam berstandar resort bintang lima di Bali.',
  }
};

export default function PackagesPage() {
  return (
    <div className="pt-32 pb-24 bg-bgLight min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-primary bg-secondary px-4 py-1.5 rounded-full">
            Kombinasi Sempurna
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-textDark tracking-wide">
            Paket Spa Premium Kami
          </h1>
          <p className="text-gray-500 font-light text-base leading-relaxed">
            Kami memadukan berbagai teknik terapi terbaik ke dalam satu paket ritual berkelanjutan untuk memberikan hasil pemulihan fisik dan pancaran kecantikan yang maksimal.
          </p>
        </div>

        {/* Daftar Paket */}
        <div className="space-y-12">
          {packages.map((pkg, i) => (
            <PackageCard key={i} pkg={pkg} />
          ))}
        </div>

        {/* Banner Garansi Kepuasan */}
        <div className="mt-20 bg-secondary/40 p-8 sm:p-12 rounded-3xl text-center space-y-4 border border-primary/20">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-textDark">
            Ingin Kustomisasi Paket Perawatan Sendiri?
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto font-light">
            Tim konsultan kami siap membantu Anda meracik kombinasi layanan pijat, facial, eyelash, atau nail gel khusus sesuai preferensi pribadi Anda tanpa biaya tambahan.
          </p>
          <div className="pt-4">
            <a 
              href="https://wa.me/6287897465067?text=Halo%20Clara%20Spa%20Bali,%20saya%20ingin%20konsultasi%20kustomisasi%20paket%20spa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-accent text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all shadow-md"
            >
              Konsultasi Gratis Via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}