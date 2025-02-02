export default function Footer() {
    return (
      <footer className="bg-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Tech Insights. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Built with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    );
  }