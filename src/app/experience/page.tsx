import Link from 'next/link'
import Image from 'next/image'

export default function Experience() {
  return (
    <main className="min-h-screen bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
          Experience
        </h1>
        
        <div className="space-y-20">
          {/* Current Experience */}
          <div className="space-y-12">
            <h2 className="text-4xl font-semibold text-white mb-8">Current Experience</h2>
            
            {/* Magnetar Capital */}
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Incoming Quantitative Analyst Intern</h3>
                  <p className="text-blue-200 text-2xl mt-2">Magnetar Capital</p>
                </div>
                <p className="text-gray-300 text-xl">Summer 2025</p>
              </div>
              <p className="text-gray-200 text-xl mt-4">
                Upcoming quantitative analyst internship at a leading alternative asset management firm, focusing on systematic trading strategies and quantitative research.
              </p>
            </div>

            {/* Tartan Student Fund */}
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Equity Research Analyst</h3>
                  <p className="text-blue-200 text-2xl mt-2">Tartan Student Fund</p>
                </div>
                <p className="text-gray-300 text-xl">January 2024 - Present</p>
              </div>
              <ul className="list-disc list-inside text-gray-200 text-xl mt-4 space-y-2">
                <li>Conduct fundamental analysis and market research for energy sector investments in Jane Street-sponsored fund with ~$100,000 AUM</li>
                <li>Develop quantitative models for portfolio optimization and risk management</li>
                <li>Present investment recommendations to the investment committee</li>
              </ul>
            </div>
          </div>

          {/* Past Experience */}
          <div className="space-y-12">
            <h2 className="text-4xl font-semibold text-white mb-8">Past Experience</h2>
            
            {/* Caseflood.ai */}
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Machine Learning Engineer</h3>
                  <p className="text-blue-200 text-2xl mt-2">Caseflood.ai (YC W25)</p>
                </div>
                <p className="text-gray-300 text-xl">October 2023 - December 2023</p>
              </div>
              <ul className="list-disc list-inside text-gray-200 text-xl mt-4 space-y-2">
                <li>Developed AI-powered receptionist for law firms, handling client intake and scheduling</li>
                <li>Implemented natural language processing models for automated responses</li>
                <li>Collaborated with founding team to define product roadmap and technical architecture</li>
              </ul>
            </div>

            {/* MathWorks Math Modeling Challenge */}
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">First Place Winner</h3>
                  <p className="text-blue-200 text-2xl mt-2">MathWorks Math Modeling Challenge</p>
                </div>
                <p className="text-gray-300 text-xl">April 2023</p>
              </div>
              <ul className="list-disc list-inside text-gray-200 text-xl mt-4 space-y-2">
                <li>Led team to win first place and $20,000 in scholarships among 650 international teams</li>
                <li>Developed mathematical models to predict electric bike usage and transportation impact</li>
                <li>Received additional awards for Technical Computing and Outstanding Communication</li>
              </ul>
              <div className="mt-6 relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/mathworks-team.jpg"
                  alt="MathWorks Math Modeling Challenge Team"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-12">
            <h2 className="text-4xl font-semibold text-white mb-8">Certifications & Achievements</h2>
            
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <ul className="list-disc list-inside text-gray-200 text-xl space-y-4">
                <li>Google 5-Day Gen AI Intensive Course (2024)</li>
                <li>Rotman Market Simulation Challenge x CMU 2024</li>
                <li>6 CITI Biomedical Research Certifications</li>
                <li>MathWorks Math Modeling Challenge First Place ($20,000)</li>
              </ul>
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