/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation';
import { posts, type Post } from '../../lib/posts';
import Link from "next/link"

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPost(slug: string): Promise<Post | undefined> {
  return posts.find((post) => post.slug === slug);
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-blue-400 mb-2">{post.title}</h1>
          <time className="text-gray-400">{post.date}</time>
        </header>

        {/* ✅ Render post content with Tailwind styles */}
        <div 
          className="prose lg:prose-lg max-w-none text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            &larr; Back to all posts
          </Link>
        </div>
      </article>
    </div>
  );
}
