import { faqs } from '@/data/faqs';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'FAQ - Pertanyaan Umum Seputar Layanan',
  description: 'Temukan jawaban lengkap seputar keaslian minyak aromaterapi, kualifikasi terapis, dan detail reservasi di Clara Spa Bali.'
};

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };

  return (
    <div className="pt-32 pb-24 bg-secondary/10 min-h-screen">
      <JsonLd data={faqSchema} />
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h1 className="font-serif text-4xl font-bold text-textDark">Pertanyaan Umum (FAQ)</h1>
          <p className="text-gray-500 font-light text-sm">Kami merangkum segala informasi yang paling sering dicari guna memudahkan perjalanan kenyamanan Anda.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-3">
              <h3 className="font-serif font-bold text-textDark text-lg flex items-start">
                <span className="text-primary font-bold mr-2">Q:</span>
                {faq.question}
              </h3>
              <p className="text-gray-600 text-sm pl-6 leading-relaxed font-light">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}