export interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    image?: string; 
  }
  
  export const posts: Post[] = [
    {
      slug: "first-post",
      title: "The Future of Web Development",
      date: "2024-03-20",
      excerpt: "Explore the latest trends in web development and how they're shaping the future.",
      content: `
        <div class="space-y-4">
          <p class="text-gray-300">
            Web development is evolving at a rapid pace, driven by new technologies, frameworks, and user expectations.
            In recent years, we've seen a major shift towards Jamstack, serverless architectures, and AI-driven applications.
          </p>
  
          <h2 class="text-xl font-semibold text-gray-300">Key Trends:</h2>
          <ul class="list-disc list-inside text-gray-300">
            <li>🚀 AI-Powered Development: Tools like GitHub Copilot and ChatGPT are making coding more efficient.</li>
            <li>🔗 Web3 and Decentralization: Blockchain technology is reshaping authentication and ownership models.</li>
            <li>⚡ Performance Optimization: Frameworks like Next.js and Astro are making websites faster than ever.</li>
            <li>💡 Component-Driven UI: React, Vue, and Svelte continue to push reusable component architectures.</li>
          </ul>
  
          <p class="text-gray-300">
            To stay ahead, developers should keep learning new technologies and improving their skills.
          </p>
        </div>
      `,
      image: "/webdev.avif",
    },
    {
      slug: "second-post",
      title: "Mastering Tailwind CSS",
      date: "2024-03-18",
      excerpt: "Learn how to create stunning designs with Tailwind CSS.",
      content: `
        <div class="space-y-4">
          <p class="text-gray-300">
            Tailwind CSS has revolutionized frontend development with its utility-first approach.
            Unlike traditional CSS frameworks, Tailwind provides pre-defined utility classes, making it easier to style components without writing custom CSS.
          </p>
  
          <h2 class="text-xl font-semibold text-gray-300">Why Use Tailwind?</h2>
          <ul class="list-disc list-inside text-gray-300">
            <li>🚀 Faster development with utility classes.</li>
            <li>📱 Mobile-first responsive design out of the box.</li>
            <li>🎨 Easy customization using the Tailwind config file.</li>
            <li>🛑 Removes unused CSS in production with PurgeCSS.</li>
          </ul>
  
          <h3 class="text-lg font-medium text-gray-300">Example Button:</h3>
          <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Click Me
          </button>
        </div>
      `,
      image: "/tailwind.png",
    },
    {
      slug: "third-post",
      title: "Getting Started with Next.js 14",
      date: "2024-03-15",
      excerpt: "A beginner's guide to building powerful web applications with Next.js 14.",
      content: `
        <div class="space-y-4">
          <p class="text-gray-300">
            Next.js 14 introduces powerful new features, making it the go-to framework for modern web development.
            With improvements in performance, data fetching, and server components, Next.js provides an incredible developer experience.
          </p>
  
          <h2 class="text-xl font-semibold text-gray-300">Why Choose Next.js?</h2>
          <ul class="list-disc list-inside text-gray-300">
            <li>🔍 SEO-Friendly: Server-side rendering (SSR) improves page load speed and SEO.</li>
            <li>⚡ Optimized Performance: Automatic image optimization and static site generation (SSG).</li>
            <li>🛠️ API Routes: Build full-stack applications with ease.</li>
            <li>🗂️ App Router: The new app directory simplifies routing and layouts.</li>
          </ul>
  
          
        </div>
      `,
      image: "/nextjs.jpeg",
    },
  ];