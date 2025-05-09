import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function News() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">News & Links</h1>
        
        <div className="grid grid-cols-1 gap-12">
          {/* Latest News */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
            <h2 className="text-3xl font-semibold text-white mb-8">Latest News</h2>
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Jane Street x Mathworks Math Modeling Challenge Champion (2023)</h3>
                <p className="text-xl text-gray-200">Led a team to victory in the prestigious math modeling competition, showcasing exceptional problem-solving skills.</p>
                <div className="mt-2 text-blue-200">December 2023</div>
              </div>
              
              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">CMU MSCF x Quantbot Datathon Top 6 (2025)</h3>
                <p className="text-xl text-gray-200">Achieved top placement in the competitive datathon, demonstrating strong quantitative and analytical abilities.</p>
                <div className="mt-2 text-blue-200">February 2024</div>
              </div>

              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Microsoft x CMU Product Management Grand Prize Winner (2024)</h3>
                <p className="text-xl text-gray-200">Won the grand prize in the product management competition, highlighting leadership and innovation skills.</p>
                <div className="mt-2 text-blue-200">March 2024</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
            <h2 className="text-3xl font-semibold text-white mb-8">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://www.linkedin.com/in/rprabhu1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-[#111111] rounded-lg hover:bg-[#1a1a1a] transition-colors group"
              >
                <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">💼</span>
                <div>
                  <h3 className="text-2xl text-white group-hover:text-blue-400 transition-colors">LinkedIn Profile</h3>
                  <p className="text-blue-200 text-xl">Connect with me professionally</p>
                </div>
              </a>

              <a 
                href="https://github.com/rprabhu001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-[#111111] rounded-lg hover:bg-[#1a1a1a] transition-colors group"
              >
                <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">🐙</span>
                <div>
                  <h3 className="text-2xl text-white group-hover:text-blue-400 transition-colors">GitHub</h3>
                  <p className="text-blue-200 text-xl">View my projects</p>
                </div>
              </a>

              <a 
                href="/portfolio" 
                className="flex items-center p-4 bg-[#111111] rounded-lg hover:bg-[#1a1a1a] transition-colors group"
              >
                <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">🎯</span>
                <div>
                  <h3 className="text-2xl text-white group-hover:text-blue-400 transition-colors">Portfolio</h3>
                  <p className="text-blue-200 text-xl">See my work</p>
                </div>
              </a>

              <a 
                href="/blog" 
                className="flex items-center p-4 bg-[#111111] rounded-lg hover:bg-[#1a1a1a] transition-colors group"
              >
                <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">📝</span>
                <div>
                  <h3 className="text-2xl text-white group-hover:text-blue-400 transition-colors">Blog</h3>
                  <p className="text-blue-200 text-xl">Read my articles</p>
                </div>
              </a>
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