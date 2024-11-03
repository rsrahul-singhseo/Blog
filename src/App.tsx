import React from 'react';
import Navbar from './components/Navbar';
import FeaturedPosts from './components/FeaturedPosts';
import CategoryFilter from './components/CategoryFilter';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to BlogVerse
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Discover insightful articles on technology, design, and development.
                Join our community of passionate writers and readers.
              </p>
            </div>
          </div>
        </section>

        <CategoryFilter />
        <FeaturedPosts />

        {/* Newsletter Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Stay Updated with Our Newsletter
                </h2>
                <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                  Get the latest articles, tutorials, and updates delivered straight to your inbox.
                </p>
                <form className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-purple-400"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-white text-purple-600 font-medium rounded-lg
                        hover:bg-purple-50 transition-colors duration-200"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">BlogVerse</h3>
              <p className="text-gray-400">
                A community of writers and readers sharing knowledge and experiences.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">GitHub</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>© 2024 BlogVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;