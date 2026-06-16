'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const contactSchema = z.object({
  nama: z.string().min(2, { message: 'Nama lengkap wajib diisi minimal 2 karakter.' }),
  email: z.string().email({ message: 'Alamat email tidak valid.' }),
  layanan: z.string().min(1, { message: 'Silakan pilih jenis layanan utama.' }),
  pesan: z.string().min(10, { message: 'Tuliskan detail permohonan minimal 10 karakter.' })
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulasi pengiriman data aman form
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Redirect langsung ke WhatsApp demi meningkatkan konversi leads pesanan (CRO Optimization)
    const waText = `Halo Clara Spa Bali, saya ${data.nama} (${data.email}) ingin berkonsultasi gratis/reservasi mengenai layanan *${data.layanan}*.\n\nCatatan Tambahan: ${data.pesan}`;
    window.open(`https://wa.me/6287897465067?text=${encodeURIComponent(waText)}`, '_blank');
    reset();
  };

  return (
    <div className="pt-32 pb-24 bg-bgLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-serif text-4xl font-bold text-textDark mb-3">Hubungi Clara Spa Bali</h1>
          <p className="text-gray-500 font-light text-sm">Konsultasikan kebutuhan bugar tubuh atau kecantikan kuku & mata Anda secara gratis bersama tim ahli designer kami.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Detail Kontak Fisik */}
          <div className="lg:col-span-5 bg-secondary/40 p-8 rounded-3xl space-y-8">
            <h3 className="font-serif text-2xl font-bold text-textDark">Saluran Informasi</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white text-primary rounded-xl shadow-sm"><Phone className="h-5 w-5" /></div>
                <div><p className="text-xs text-gray-400">Telepon & WhatsApp</p><p className="font-bold text-sm text-textDark">087897465067</p></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white text-primary rounded-xl shadow-sm"><Mail className="h-5 w-5" /></div>
                <div><p className="text-xs text-gray-400">Surel Resmi</p><p className="font-bold text-sm text-textDark break-all">devicandraa97@gmail.com</p></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white text-primary rounded-xl shadow-sm"><MapPin className="h-5 w-5" /></div>
                <div><p className="text-xs text-gray-400">Alamat Utama</p><p className="font-bold text-sm text-textDark">Kawasan Pariwisata Utama, Bali, Indonesia</p></div>
              </div>
            </div>

            {/* Google Maps Placeholder Semata */}
            <div className="w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center text-xs text-gray-400 font-medium">
              Interactive Google Maps Active View
            </div>
          </div>

          {/* Form Validasi Sempurna */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-textDark mb-2">Nama Lengkap</label>
                  <input {...register('nama')} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm" placeholder="Contoh: Chelsea Olivia" />
                  {errors.nama && <p className="text-xs text-red-500 mt-1">{errors.nama.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-textDark mb-2">Email</label>
                  <input {...register('email')} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm" placeholder="chelsea@example.com" />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-textDark mb-2">Pilihan Perawatan Utama</label>
                <select {...register('layanan')} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm bg-white">
                  <option value="">-- Silakan Pilih Layanan --</option>
                  <option value="Balinese Massage">Balinese Massage Therapy</option>
                  <option value="Hot Stone Massage">Hot Stone Massage Premium</option>
                  <option value="Luxury Facial">Rejuvenating Luxury Facial</option>
                  <option value="Eyelash Extension">Premium Eyelash Extensions</option>
                  <option value="Nail Art Gel">Custom Luxury Nail Art</option>
                </select>
                {errors.layanan && <p className="text-xs text-red-500 mt-1">{errors.layanan.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-textDark mb-2">Catatan Tambahan / Detail Kebutuhan</label>
                <textarea {...register('pesan')} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary text-sm" placeholder="Tuliskan jika Anda memiliki preferensi khusus atau keluhan otot tertentu..." />
                {errors.pesan && <p className="text-xs text-red-500 mt-1">{errors.pesan.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-accent text-white py-3.5 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm"
              >
                {isSubmitting ? <span>Memproses...</span> : <><Send className="h-4 w-4" /> <span>Kirim Permohonan & Hubungkan via WA</span></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}