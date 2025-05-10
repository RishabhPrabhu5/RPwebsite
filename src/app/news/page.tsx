import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function News() {
  return (
    <main className="min-h-screen bg-black text-white py-24">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
          News & Media
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors">
            <Link 
              href="https://patch.com/virginia/greateralexandria/tj-students-secure-first-place-global-math-competition"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">First Place in International Math Competition</h2>
              <p className="text-gray-400 mb-4">Led team to victory in MathWorks Math Modeling Challenge, winning $20,000 in scholarships.</p>
              <div className="flex items-center text-blue-400 mt-auto">
                <span>Read article</span>
                <span className="ml-2">→</span>
              </div>
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors">
            <Link 
              href="https://caseflood.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Caseflood.ai Selected for Y Combinator W25</h2>
              <p className="text-gray-400 mb-4">Founding ML Engineer at legal tech startup accepted into prestigious YC batch.</p>
              <div className="flex items-center text-blue-400 mt-auto">
                <span>Read article</span>
                <span className="ml-2">→</span>
              </div>
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors">
            <Link 
              href="https://www.magnetar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Selected for Magnetar Capital Internship</h2>
              <p className="text-gray-400 mb-4">Secured quantitative analyst position at leading alternative asset management firm.</p>
              <div className="flex items-center text-blue-400 mt-auto">
                <span>Read article</span>
                <span className="ml-2">→</span>
              </div>
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors">
            <Link 
              href="https://www.linkedin.com/feed/update/urn:li:activity:7315916375972065281/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">MSCF Datathon 2025</h2>
              <p className="text-gray-400 mb-4">Top 6 in a prestigious financial modeling competition at Carnegie Mellon University. Best Performing team for our age.</p>
              <div className="flex items-center text-blue-400 mt-auto">
                <span>Read more</span>
                <span className="ml-2">→</span>
              </div>
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors">
            <Link 
              href="https://www.cmu.edu/mscf/news/2024/pioneering-experiential-learning-in-finance-at-cmu-with-the-2024-mscf-trading-competition.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Rotman Market Simulation Challenge</h2>
              <p className="text-gray-400 mb-4">Participated in intricate trading simulation competition at Carnegie Mellon University.</p>
              <div className="flex items-center text-blue-400 mt-auto">
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