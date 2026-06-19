import { Metadata } from 'next';
import Image from 'next/image';
import { Award, ShieldCheck, Users, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Kami - Keaslian Nilai Tradisi Wellness Bali',
  description: 'Kenali filosofi di balik Clara Spa Bali. Kami mendedikasikan kemewahan ritual spa, higienitas mutlak, dan profesionalitas terapis demi kenyamanan Anda.',
};

export default function AboutPage() {
  const values = [
    { icon: <Award className="h-6 w-6" />, title: 'Standar Bintang 5', desc: 'Seluruh manajemen hospitality dan pelayanan kami mengadopsi standar resor mewah internasional.' },
    { icon: <ShieldCheck className="h-6 w-6" />, title: 'Higienitas Mutlak', desc: 'Sterilisasi ruangan berkala dan penggantian linen baru secara disiplin untuk setiap sesi tamu.' },
    { icon: <Users className="h-6 w-6" />, title: 'Terapis Berlisensi', desc: 'Terapis wanita lokal berpengalaman yang memiliki sertifikasi resmi di industri kecantikan & kebugaran.' },
    { icon: <Sparkles className="h-6 w-6" />, title: 'Bahan Organik', desc: 'Hanya menggunakan minyak esensial herbal murni pilihan, bebas dari bahan kimia berbahaya.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-bgLight min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Visi & Misi Ringkas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-primary">Kisah Brand Kami</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-textDark leading-tight">
              Menghadirkan Mahakarya Keseimbangan Jiwa dan Raga
            </h1>
            <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
              Didirikan di tengah eksotisme Bali, <strong>Clara Spa Bali</strong> lahir dari sebuah visi untuk menciptakan ruang pelarian yang tenang dari hiruk-pikuk kehidupan modern. Kami percaya bahwa spa bukan sekadar kemewahan kosmetik semata, melainkan sebuah kebutuhan holistik untuk menyelaraskan kembali kesehatan pikiran, raga, dan jiwa spiritual manusia.
            </p>
            <p className="text-gray-600 font-light leading-relaxed text-sm">
              Setiap elemen di dalam spa kami—mulai dari pencahayaan lembut, alunan instrumen musik tradisional Bali yang damai, hingga aroma terapi esensial yang menenangkan—dipersiapkan secara presisi demi memastikan Anda mendapatkan pengalaman relaksasi terbaik yang belum pernah Anda rasakan sebelumnya.
            </p>
            
            {/* Paragraf Tambahan untuk Backlink Natural */}
            <p className="text-gray-600 font-light leading-relaxed text-sm">
              Kesehatan holistik tidak hanya tentang perawatan tubuh, tetapi juga kebahagiaan batin melalui eksplorasi kekayaan budaya Nusantara. Sebagai bentuk dukungan kami terhadap pariwisata lokal Indonesia, bagi Anda yang sedang merencanakan perjalanan melintasi Pulau Jawa, kami turut merekomendasikan untuk mengeksplorasi ragam{' '}
              <a 
                href="https://jajananmagetan.biz.id" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline font-medium"
                title="Eksplorasi Kuliner Jajanan Magetan"
              >
                jajanan Magetan
              </a>{' '}
              yang autentik sebelum Anda menutup rangkaian liburan dengan relaksasi sempurna di Clara Spa Bali.
            </p>
          </div>
          <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl">
            <Image 
              src="/images/hero/tentang.webp" 
              alt="Filosofi Relaksasi Mewah Clara Spa Bali" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Nilai Inti Perusahaan */}
        <div className="bg-secondary/20 rounded-3xl p-8 sm:p-16 border border-secondary">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="font-serif text-3xl font-bold text-textDark">Pilar Kepercayaan Anda</h2>
            <p className="text-sm text-gray-500 font-light">Alasan mengapa ribuan wisatawan domestik maupun internasional memercayakan perawatan tubuh mereka kepada kami.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm text-center space-y-3 border border-gray-50">
                <div className="inline-block p-3 bg-secondary text-primary rounded-xl mb-2">{val.icon}</div>
                <h3 className="font-serif font-bold text-textDark text-base">{val.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-light">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Ajakan Booking */}
        <div className="relative h-96 rounded-3xl overflow-hidden flex items-center justify-center text-center text-white">
          <Image 
            src="/images/gallery/room-1.jpg" 
            alt="Interior Mewah Clara Spa" 
            fill 
            className="object-cover brightness-50"
          />
          <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Siap Mengembalikan Kebugaran Tubuh Anda?</h2>
            <p className="text-sm text-gray-200 font-light leading-relaxed">
              Kuota harian kami sangat terbatas untuk menjaga ketenangan eksklusif setiap tamu yang datang. Amankan slot reservasi Anda hari ini juga.
            </p>
            <div className="pt-2">
              <a 
                href="https://wa.me/6287897465067?text=Halo%20Clara%20Spa%20Bali,%20saya%20ingin%20melakukan%20reservasi."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-accent text-white px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all shadow-lg"
              >
                Booking Slot Via WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}