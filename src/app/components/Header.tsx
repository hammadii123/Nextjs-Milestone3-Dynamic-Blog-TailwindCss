import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 py-6 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
          Tech Insights
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}