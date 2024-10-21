import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-slate-700 text-white py-16 md:py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to My Awesome Website
          </h1>
          <p className="text-lg md:text-xl font-light mb-6">
            Discover the tools and resources you need to build your future.
          </p>
          <Link href="/blogs">
            <div className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              Explore Blogs
            </div>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-200 py-16 px-4 flex-grow">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Journey with Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you are a developer or designer, our platform provides the
            resources to help you create stunning apps.
          </p>
          <Link href="/blogs">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 shadow-md cursor-pointer">
              Get Started
            </div>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} My Awesome Website. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
