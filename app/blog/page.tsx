import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';

export const metadata = {
  title: 'Blog & Tips Kesehatan Relaksasi',
  description: 'Artikel informatif seputar ragam khasiat pijat tradisional Bali, tips menjaga elastisitas kulit wajah, hingga perawatan seni kuku harian.'
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-bgLight min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h1 className="font-serif text-4xl font-bold text-textDark">Artikel & Jurnal Kecantikan</h1>
          <p className="text-gray-500 font-light text-sm">Wawasan berharga seputar gaya hidup sehat dan rahasia kecantikan alami langsung dari pakar wellness kami.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col h-full group">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-primary">{post.date}</span>
                  <h2 className="font-serif text-xl font-bold text-textDark mt-2 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm font-light line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <Link href={`/blog/${post.slug}`} className="text-xs uppercase font-bold tracking-wider text-accent hover:text-primary inline-flex items-center space-x-1">
                  <span>Baca Selengkapnya</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}