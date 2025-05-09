import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Hobbies() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Hobbies & Interests</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sports & Physical Activities */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
            <h2 className="text-3xl font-semibold text-white mb-6">🏃 Sports & Physical Activities</h2>
            <div className="space-y-6">
              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Ultimate Frisbee</h3>
                <p className="text-xl text-gray-200">Captain of Thomas Jefferson High School's Ultimate Frisbee team. Passionate about the sport's combination of athleticism and strategy.</p>
              </div>
              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Fitness</h3>
                <p className="text-xl text-gray-200">Regular gym sessions and outdoor activities to maintain physical and mental well-being.</p>
              </div>
            </div>
          </div>

          {/* Reading & Learning */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
            <h2 className="text-3xl font-semibold text-white mb-6">📚 Reading & Learning</h2>
            <div className="space-y-6">
              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Finance & Technology</h3>
                <p className="text-xl text-gray-200">Keeping up with the latest developments in quantitative finance, machine learning, and technology.</p>
              </div>
              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Personal Development</h3>
                <p className="text-xl text-gray-200">Reading books on leadership, productivity, and personal growth.</p>
              </div>
            </div>
          </div>

          {/* Technical Interests */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
            <h2 className="text-3xl font-semibold text-white mb-6">💻 Technical Interests</h2>
            <div className="space-y-6">
              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Quantitative Finance</h3>
                <p className="text-xl text-gray-200">Exploring algorithmic trading strategies and financial market analysis.</p>
              </div>
              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Machine Learning</h3>
                <p className="text-xl text-gray-200">Researching and implementing ML solutions for real-world problems.</p>
              </div>
            </div>
          </div>

          {/* Community & Social */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300">
            <h2 className="text-3xl font-semibold text-white mb-6">🤝 Community & Social</h2>
            <div className="space-y-6">
              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Mentorship</h3>
                <p className="text-xl text-gray-200">Helping others learn and grow in their technical and professional journeys.</p>
              </div>
              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Networking</h3>
                <p className="text-xl text-gray-200">Building connections with professionals in finance and technology.</p>
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