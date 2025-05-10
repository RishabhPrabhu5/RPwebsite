import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Skills() {
  return (
    <main className="min-h-screen bg-black text-white py-24">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
          Skills & Expertise
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Programming Languages */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">💻</span>
              <h2 className="text-3xl font-bold text-white">Programming Languages</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl">Python</span>
                <span className="text-blue-400 text-lg">Advanced</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl">Java</span>
                <span className="text-blue-400 text-lg">Advanced</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl">C/C#</span>
                <span className="text-blue-400 text-lg">Intermediate</span>
              </div>
            </div>
          </div>

          {/* Web & Frontend */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🌐</span>
              <h2 className="text-3xl font-bold text-white">Web & Frontend</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl">React</span>
                <span className="text-blue-400 text-lg">Advanced</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl">JavaScript/TypeScript</span>
                <span className="text-blue-400 text-lg">Advanced</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl">Flask</span>
                <span className="text-blue-400 text-lg">Intermediate</span>
              </div>
            </div>
          </div>

          {/* Data Analysis & ML */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">📊</span>
              <h2 className="text-3xl font-bold text-white">Data Analysis & ML</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl">MATLAB</span>
                <span className="text-blue-400 text-lg">Advanced</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl">Computer Vision</span>
                <span className="text-blue-400 text-lg">Intermediate</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl">Computational Bioinformatics</span>
                <span className="text-blue-400 text-lg">Intermediate</span>
              </div>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🛠️</span>
              <h2 className="text-3xl font-bold text-white">Tools & Platforms</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl">Git</span>
                <span className="text-blue-400 text-lg">Advanced</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl">S&P Capital IQ</span>
                <span className="text-blue-400 text-lg">Intermediate</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl">Cursor/LLMs</span>
                <span className="text-blue-400 text-lg">Advanced</span>
              </div>
            </div>
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