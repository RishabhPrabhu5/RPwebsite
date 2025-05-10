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
                <p className="text-xl text-gray-200">Previous captain of Thomas Jefferson High School's Ultimate Frisbee team. Played for Carnegie Mellon University's Division I Ultimate Frisbee team. Passionate about the sport's combination of athleticism and strategy.</p>
              </div>
              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Other Sports</h3>
                <p className="text-xl text-gray-200">Basketball, Cricket, Table Tennis, Badminton, Pickleball, Soccer, Football, and more!</p>
              </div>
              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Fitness</h3>
                <p className="text-xl text-gray-200">Regular gym sessions, weight training, calisthenics, and outdoor activities to maintain physical and mental well-being as well as cultivate discipline and mental fortitude.</p>
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
              <ul className="list-disc list-inside space-y-2">
                <li>An Introduction to Quantitative Finance</li>
                <li>Options Volatility and Pricing</li>
                <li>Stochastic Calculus for Finance 1</li>
              </ul>
              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Personal Development</h3>
                <p className="text-xl text-gray-200">Reading books on leadership, productivity, and personal growth.</p>
              </div>
              <ul className="list-disc list-inside space-y-2">
                <li>Atomic Habits</li>
                <li>The 80/20 Principle</li>
              </ul>
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
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Tutoring & Mentorship</h3>
                <p className="text-xl text-gray-200">Taught over 100 Students in over 20 different subjects for over 200 hours accross K-12. Helping others learn and grow in their technical and professional journeys.</p>
              </div>
              <div className="group">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Networking</h3>
                <p className="text-xl text-gray-200">Building connections with students, professionals, and mentors in finance and technology.</p>
              </div>
            </div>
          </div>

          {/* Movies and Games Box */}
          <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900 hover:border-blue-700 transition-colors duration-300 mt-6">
              <h3 className="text-2xl font-semibold text-white mb-6">🎬 Movies and Games</h3>

              {/* Star Wars Subsection */}
              <div className="space-y-4">
                  <h4 className="text-xl font-bold text-yellow-400">Star Wars</h4>
                  <p className="text-gray-300">Favorite Movie: <strong>Revenge of the Sith</strong></p>
                  <p className="text-gray-300">Favorite Video Game: <strong>Star Wars Battlefront</strong></p>
                  <a 
                      href="https://www.youtube.com/@Skybreaker12" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-400 hover:underline"
                  >
                      Check out my YouTube channel!
                  </a>

              </div>

              {/* Marvel Subsection */}
              <div className="mt-4">
                  <h4 className="text-xl font-bold text-red-600">Marvel</h4>
                  <p className="text-gray-300">Favorite Movie: <strong>Infinity War</strong></p>
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