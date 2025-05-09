import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Skills() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Skills</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Backend Languages */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
            <div className="flex items-center mb-8">
              <span className="text-5xl mr-6">💻</span>
              <h2 className="text-3xl font-semibold text-white">Backend Languages</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">Python</span>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">Java</span>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                  <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">C/C#</span>
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-gray-700"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Web & Frontend */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
            <div className="flex items-center mb-8">
              <span className="text-5xl mr-6">🌐</span>
              <h2 className="text-3xl font-semibold text-white">Web & Frontend</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">React</span>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                  <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">JavaScript</span>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                  <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">HTML/CSS</span>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data Analysis & ML */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
            <div className="flex items-center mb-8">
              <span className="text-5xl mr-6">📊</span>
              <h2 className="text-3xl font-semibold text-white">Data Analysis & ML</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">Machine Learning</span>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">Deep Learning</span>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                  <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">Data Analysis</span>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quantitative Finance */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
            <div className="flex items-center mb-8">
              <span className="text-5xl mr-6">📈</span>
              <h2 className="text-3xl font-semibold text-white">Quantitative Finance</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">Financial Modeling</span>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                  <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">Technical Analysis</span>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">MACD/RSI/EMA</span>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
            <div className="flex items-center mb-8">
              <span className="text-5xl mr-6">🛠️</span>
              <h2 className="text-3xl font-semibold text-white">Tools & Platforms</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">Git</span>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">AWS</span>
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-gray-700"></div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gray-200">Docker</span>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-blue-600"></div>
                  ))}
                  <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                </div>
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