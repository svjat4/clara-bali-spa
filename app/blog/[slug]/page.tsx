import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import { ArrowLeft, User, Calendar } from 'lucide-react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import parse from 'html-react-parser'; // 1. Impor parser

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((b) => b.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: '2026-06-16T00:00:00Z',
      authors: [post.author],
      images: [{ url: post.image }]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((b) => b.slug === slug);
  if (!post) notFound();

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'image': `https://claraspabali.biz.id${post.image}`,
    'datePublished': '2026-06-16T00:00:00Z',
    'author': {
      '@type': 'Organization',
      'name': post.author
    },
    'description': post.excerpt
  };

  return (
    <div className="pt-32 pb-24 bg-bgLight">
      <JsonLd data={blogSchema} />
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Blog</span>
        </Link>
        
        <div className="space-y-4 mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-textDark leading-tight">{post.title}</h1>
          <div className="flex items-center space-x-4 text-xs text-gray-400">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="h-3.5 w-3.5" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>

        <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-sm mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 2. Perubahan ada di sini: membungkus konten dengan fungsi parse() */}
        <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed font-light text-base space-y-6">
          {parse(post.content)}
        </div>
      </div>
    </div>
  );
}