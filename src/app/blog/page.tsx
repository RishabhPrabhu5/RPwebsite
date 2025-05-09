import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Blog() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Blog</h1>
        
        <div className="grid grid-cols-1 gap-12">
          {/* Featured Post */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h2 className="text-4xl font-semibold text-white mb-4">The Intersection of AI and Quantitative Finance</h2>
                <p className="text-xl text-gray-200 mb-6">
                  Exploring how machine learning and artificial intelligence are revolutionizing the field of quantitative finance, from algorithmic trading to risk management.
                </p>
                <div className="flex items-center gap-4 text-blue-200">
                  <span>March 15, 2024</span>
                  <span>•</span>
                  <span>10 min read</span>
                </div>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <div className="w-full aspect-video bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0a0a0a] p-6 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Building a Personal Portfolio Website</h3>
              <p className="text-lg text-gray-200 mb-4">
                A technical deep-dive into creating a modern, responsive portfolio website using Next.js and Tailwind CSS.
              </p>
              <div className="flex items-center gap-4 text-blue-200 text-sm">
                <span>March 10, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] p-6 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">My Journey in Computational Finance</h3>
              <p className="text-lg text-gray-200 mb-4">
                Reflections on my academic and professional journey in the field of computational finance.
              </p>
              <div className="flex items-center gap-4 text-blue-200 text-sm">
                <span>March 5, 2024</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] p-6 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Machine Learning in Practice</h3>
              <p className="text-lg text-gray-200 mb-4">
                Real-world applications of machine learning in finance and technology.
              </p>
              <div className="flex items-center gap-4 text-blue-200 text-sm">
                <span>February 28, 2024</span>
                <span>•</span>
                <span>7 min read</span>
              </div>
            </div>

            <div className="bg-[#0a0a0a] p-6 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">The Future of Quantitative Trading</h3>
              <p className="text-lg text-gray-200 mb-4">
                Exploring emerging trends and technologies shaping the future of quantitative trading.
              </p>
              <div className="flex items-center gap-4 text-blue-200 text-sm">
                <span>February 20, 2024</span>
                <span>•</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity shadow-lg text-2xl font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
} 