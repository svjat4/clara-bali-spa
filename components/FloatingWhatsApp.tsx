import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6287897465067?text=Halo%20Clara%20Spa%20Bali,%20saya%20ingin%20melakukan%20reservasi%20layanan%20spa."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
      aria-label="Hubungi Kami Via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap font-medium text-sm pl-0 group-hover:pl-2">
        Chat Admin
      </span>
    </a>
  );
}