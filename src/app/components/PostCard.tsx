/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Post } from "../lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <time className="text-sm text-gray-400">{post.date}</time>
        <h2 className="text-2xl font-bold mt-2 mb-4 text-blue-400 hover:text-blue-300 transition-colors">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-gray-300">{post.excerpt}</p>
        <Link
          href={`/posts/${post.slug}`}
          className="inline-block mt-4 text-blue-400 hover:text-blue-300 font-medium"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}