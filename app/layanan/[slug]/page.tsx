import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { Clock, Check, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} Profesional di Bali`,
    description: `${service.description} Dapatkan penawaran terbaik dan terapis tersertifikasi di Clara Spa Bali.`,
    openGraph: {
      title: `${service.title} - Clara Spa Bali`,
      description: service.description,
      images: [{ url: service.image }]
    }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': service.title,
    'image': `https://claraspabali.biz.id${service.image}`,
    'description': service.description,
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'IDR',
      'priceRange': '$$$'
    }
  };

  return (
    <div className="pt-32 pb-24 bg-bgLight">
      <JsonLd data={productSchema} />
      <div className="max-w-5xl mx-auto px-4">
        <Link href="/layanan" className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Semua Layanan</span>
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-md">
            <Image
              src={service.image}
              alt={`${service.title} - Clara Spa Bali`}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-textDark">{service.title}</h1>
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-medium">Durasi: {service.duration.join(' / ')}</span>
            </div>
            <hr className="border-gray-100" />
            <p className="text-gray-600 leading-relaxed font-light">{service.longDescription}</p>
            
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-textDark text-lg">Manfaat Utama Perawatan:</h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600 space-x-2">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <a
                href={`https://wa.me/6287897465067?text=Halo%20Clara%20Spa%20Bali,%20saya%20ingin%20reservasi%20layanan%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-primary hover:bg-accent text-white py-4 rounded-xl font-semibold tracking-wider text-sm transition-all"
              >
                Booking via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}