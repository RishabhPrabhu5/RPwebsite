import Link from 'next/link'

export default function Hobbies() {
  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
          Hobbies & Interests
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Sports */}
          <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
            <h2 className="text-xl font-bold text-white mb-5">🏃 Sports & Physical Activities</h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-blue-400 font-semibold text-base mb-2">Ultimate Frisbee</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Previous captain of Thomas Jefferson High School&apos;s Ultimate Frisbee team. Played for Carnegie Mellon University&apos;s Division I Ultimate Frisbee team.
                </p>
              </div>
              <div>
                <h3 className="text-blue-400 font-semibold text-base mb-2">Other Sports</h3>
                <div className="flex flex-wrap gap-2">
                  {['Basketball', 'Cricket', 'Table Tennis', 'Badminton', 'Pickleball', 'Soccer', 'Football'].map((sport) => (
                    <span key={sport} className="px-3 py-1 bg-black border border-blue-900 rounded-full text-gray-300 text-sm">{sport}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-blue-400 font-semibold text-base mb-2">Fitness</h3>
                <p className="text-gray-300 text-sm">Regular gym sessions, weight training, calisthenics, and outdoor activities.</p>
              </div>
            </div>
          </div>

          {/* Reading */}
          <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
            <h2 className="text-xl font-bold text-white mb-5">📚 Reading & Learning</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-blue-400 font-semibold text-base mb-2">Finance & Technology</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li className="flex gap-2"><span className="text-blue-400">→</span> An Introduction to Quantitative Finance</li>
                  <li className="flex gap-2"><span className="text-blue-400">→</span> Options Volatility and Pricing</li>
                  <li className="flex gap-2"><span className="text-blue-400">→</span> Stochastic Calculus for Finance I</li>
                </ul>
              </div>
              <div>
                <h3 className="text-blue-400 font-semibold text-base mb-2">Personal Development</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li className="flex gap-2"><span className="text-blue-400">→</span> Atomic Habits</li>
                  <li className="flex gap-2"><span className="text-blue-400">→</span> The 80/20 Principle</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical */}
          <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
            <h2 className="text-xl font-bold text-white mb-5">💻 Technical Interests</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-blue-400 font-semibold text-base mb-1">Quantitative Finance</h3>
                <p className="text-gray-300 text-sm">Exploring algorithmic trading strategies and financial market analysis.</p>
              </div>
              <div>
                <h3 className="text-blue-400 font-semibold text-base mb-1">Machine Learning</h3>
                <p className="text-gray-300 text-sm">Researching and implementing ML solutions for real-world problems.</p>
              </div>
            </div>
          </div>

          {/* Community */}
          <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8">
            <h2 className="text-xl font-bold text-white mb-5">🤝 Community & Social</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-blue-400 font-semibold text-base mb-1">Tutoring & Mentorship</h3>
                <p className="text-gray-300 text-sm">Taught over 100 students in over 20 different subjects for over 200 hours.</p>
              </div>
              <div>
                <h3 className="text-blue-400 font-semibold text-base mb-1">Networking</h3>
                <p className="text-gray-300 text-sm">Building connections with professionals in finance and technology.</p>
              </div>
            </div>
          </div>

          {/* Movies & Entertainment */}
          <div className="bg-[#0d1117] border border-blue-900 rounded-xl p-8 md:col-span-2">
            <h2 className="text-xl font-bold text-white mb-5">🎬 Movies & Entertainment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-blue-400 font-semibold text-base mb-2">⭐ Star Wars</h3>
                <p className="text-gray-300 text-sm">Favorite Movie: Revenge of the Sith</p>
                <p className="text-gray-300 text-sm">Favorite Game: Star Wars Battlefront</p>
              </div>
              <div>
                <h3 className="text-blue-400 font-semibold text-base mb-2">🦸 Marvel</h3>
                <p className="text-gray-300 text-sm">Favorite Movie: Infinity War</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-lg">← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
