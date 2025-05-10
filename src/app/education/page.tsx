import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Education() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Education</h1>
        
        <div className="space-y-16">
          {/* Current Education */}
          <div className="space-y-12">
            <h2 className="text-4xl font-semibold text-white mb-8">Current Education</h2>
            
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Carnegie Mellon University</h3>
                  <p className="text-blue-200 text-2xl mt-2">B.S. in Computational Finance + Computer Science</p>
                </div>
                <p className="text-gray-300 text-xl">Expected May 2028</p>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-gray-200 text-xl">GPA: 4.0/4.0 (Dean's List)</p>
                <div className="text-gray-300 text-xl">
                  <h4 className="text-2xl font-semibold text-white mb-2">Technical Coursework:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>15-122: Principles of Imperative Computation</li>
                    <li>15-150: Principles of Functional Programming</li>
                    <li>21-268: Multidimensional Calculus</li>
                    <li>21-270: Introduction to Mathematical Finance</li>
                    <li>21-128: Mathematical Concepts and Proofs</li>
                    <li>21-242: Matrix Theory</li>
                    <li>15-112: Fundamentals of Programming and CS</li>
                    <li>21-120: Differential and Integral Calculus</li>
                    <li>21-122: Integration and Approximation</li>
                  </ul>
                </div>
                <div className="text-gray-300 text-xl">
                  <h4 className="text-2xl font-semibold text-white mb-2">Activities and Societies:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>VP of Finance @ CMU Quant Club</li>
                    <li>Analyst @ Tartan Student Fund</li>
                    <li>Software Engineer @ Scotty Labs</li>
                    <li>Head of Finance @ Hindu YUVA</li>
                    <li>Tepper Finance Group (Sales and Trading Academy)</li>
                    <li>Math Club</li>
                    <li>AI Club</li>
                    <li>Data Science Club</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Past Education */}
          <div className="space-y-12">
            <h2 className="text-4xl font-semibold text-white mb-8">Past Education</h2>
            
            <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-lg border border-blue-900">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">Thomas Jefferson High School for Science and Technology</h3>
                  <p className="text-blue-200 text-2xl mt-2">Advanced Studies Diploma</p>
                </div>
                <p className="text-gray-300 text-xl">2020 - 2024</p>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-gray-200 text-xl">GPA: 4.0/4.0</p>
                <div className="text-gray-300 text-xl">
                  <h4 className="text-2xl font-semibold text-white mb-2">Activities and Societies:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>President of TJ Math Modeling Club</li>
                    <li>Co-President of TJ Cyberpatriot Club</li>
                    <li>Captain of TJ Ultimate Frisbee Team</li>
                    <li>#1 High School: U.S. News & World Report</li>
                  </ul>
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