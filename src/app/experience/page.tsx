import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Experience() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Experience</h1>
        
        <div className="space-y-16">
          {/* Current Experience */}
          <div className="space-y-12">
            <h2 className="text-4xl font-semibold text-white mb-8">Current Experience</h2>
            
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Incoming Quantitative Analyst Intern</h3>
                  <p className="text-blue-200 text-2xl mt-2">Magnetar Capital</p>
                </div>
                <p className="text-gray-300 text-xl">May 2025 - Present</p>
              </div>
              <p className="text-gray-200 text-xl mt-4">Upcoming quantitative analyst internship at a leading alternative asset management firm</p>
            </div>

            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Equity Research Analyst</h3>
                  <p className="text-blue-200 text-2xl mt-2">Tartan Student Fund</p>
                </div>
                <p className="text-gray-300 text-xl">January 2025 - Present</p>
              </div>
              <p className="text-gray-200 text-xl mt-4">Jane Street-sponsored fund with ~$100,000 AUM. Energy Sector Analyst.</p>
            </div>
          </div>

          {/* Past Experience */}
          <div className="space-y-12">
            <h2 className="text-4xl font-semibold text-white mb-8">Past Experience</h2>
            
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Machine Learning Engineer</h3>
                  <p className="text-blue-200 text-2xl mt-2">Caseflood.ai (YC W25)</p>
                </div>
                <p className="text-gray-300 text-xl">October 2024 - December 2024</p>
              </div>
              <p className="text-gray-200 text-xl mt-4">Founding ML Engineer developing AI-powered receptionist for law firms.</p>
            </div>

            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Software Engineering Intern</h3>
                  <p className="text-blue-200 text-2xl mt-2">Microsoft</p>
                </div>
                <p className="text-gray-300 text-xl">June 2024 - August 2024</p>
              </div>
              <p className="text-gray-200 text-xl mt-4">Worked on developing and optimizing cloud infrastructure solutions.</p>
            </div>

            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Research Assistant</h3>
                  <p className="text-blue-200 text-2xl mt-2">Carnegie Mellon University</p>
                </div>
                <p className="text-gray-300 text-xl">January 2024 - May 2024</p>
              </div>
              <p className="text-gray-200 text-xl mt-4">Assisted in machine learning research projects focusing on natural language processing.</p>
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