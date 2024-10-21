import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wider">
          <Link
            href="/"
            className="hover:text-blue-400 transition duration-300"
          >
            MySite
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="hover:text-blue-400 transition duration-300"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Call to Action (Optional) */}
        <div>
          <Link
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
