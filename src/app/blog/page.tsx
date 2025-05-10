import Link from 'next/link'

export default function Blog() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <h1 className="text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
        Blog Posts</h1>
        <h2 className="text-3xl text-center text-white mb-4">Still in progress, blog is not yet available. Stay tuned!</h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Blog Posts */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors">
            <Link 
              href="https://docs.google.com/document/d/blog-1" 
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Quantitative Finance: A Student's Perspective</h2>
              <p className="text-gray-400 mb-4">My journey into the world of quantitative finance and algorithmic trading.</p>
              <div className="flex items-center text-blue-400">
                <span>Read more</span>
                <span className="ml-2">→</span>
              </div>
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors">
            <Link 
              href="https://docs.google.com/document/d/blog-2" 
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Machine Learning in Finance</h2>
              <p className="text-gray-400 mb-4">Exploring the intersection of AI and financial markets.</p>
              <div className="flex items-center text-blue-400">
                <span>Read more</span>
                <span className="ml-2">→</span>
              </div>
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors">
            <Link 
              href="https://docs.google.com/document/d/blog-3" 
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Technical Analysis Deep Dive</h2>
              <p className="text-gray-400 mb-4">Understanding market indicators and trading strategies.</p>
              <div className="flex items-center text-blue-400">
                <span>Read more</span>
                <span className="ml-2">→</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity text-xl"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
} 